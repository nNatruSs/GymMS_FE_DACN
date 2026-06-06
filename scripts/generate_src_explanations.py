from __future__ import annotations

from pathlib import Path
import re
from typing import Iterable


WORKSPACE = Path(__file__).resolve().parents[1]
SRC_DIR = WORKSPACE / "src"
OUT_DIR = WORKSPACE / "explanation"

TEXT_EXTENSIONS = {
    ".ts",
    ".tsx",
    ".js",
    ".jsx",
    ".html",
    ".css",
    ".scss",
    ".json",
    ".md",
    ".txt",
    ".yml",
    ".yaml",
    ".svg",
}


def is_text_file(path: Path) -> bool:
    if path.suffix.lower() in TEXT_EXTENSIONS:
        return True
    try:
        data = path.read_bytes()[:2048]
    except OSError:
        return False
    if b"\x00" in data:
        return False
    return True


def read_lines(path: Path) -> list[str]:
    for encoding in ("utf-8", "utf-8-sig", "cp1252", "latin-1"):
        try:
            return path.read_text(encoding=encoding).splitlines()
        except UnicodeDecodeError:
            continue
    return path.read_text(errors="replace").splitlines()


def classify_line(line: str) -> str:
    stripped = line.strip()
    if not stripped:
        return "Blank line used to separate logical blocks for readability."
    if stripped.startswith("//"):
        return "Single-line comment documenting intent or behavior."
    if stripped.startswith("/*") or stripped.startswith("*") or stripped.endswith("*/"):
        return "Block comment content (documentation for nearby code)."
    if stripped.startswith("import "):
        return "Imports a dependency so this file can use external symbols."
    if stripped.startswith("export "):
        return "Exports symbols so other files can import this logic."
    if stripped.startswith("@Component"):
        return "Angular decorator declaring metadata for this component."
    if stripped.startswith("@Injectable"):
        return "Angular decorator declaring this class as an injectable service."
    if stripped.startswith("@NgModule"):
        return "Angular module decorator configuring declarations/providers/imports."
    if stripped.startswith("@Input"):
        return "Angular input property declaration (data passed from parent)."
    if stripped.startswith("@Output"):
        return "Angular output event declaration (events emitted to parent)."
    if stripped.startswith("constructor("):
        return "Class constructor for dependency injection and initial setup."
    if stripped.startswith("ngOnInit("):
        return "Angular lifecycle hook that runs after component initialization."
    if stripped.startswith("if ") or stripped.startswith("if("):
        return "Conditional branch: executes block only when condition is true."
    if stripped.startswith("else"):
        return "Alternative branch when previous condition is not met."
    if stripped.startswith("for ") or stripped.startswith("for("):
        return "Loop iterating across a collection or numeric range."
    if stripped.startswith("while ") or stripped.startswith("while("):
        return "Loop that repeats while a condition remains true."
    if stripped.startswith("return "):
        return "Returns a value from the current function/method."
    if stripped.startswith("throw "):
        return "Throws an error to signal exceptional or invalid state."
    if "subscribe(" in stripped:
        return "Subscribes to an Observable to react to async emissions."
    if ".pipe(" in stripped:
        return "Starts an RxJS operator pipeline to transform Observable values."
    if "=> {" in stripped or stripped.endswith("=>"):
        return "Arrow function definition, often used for callbacks."
    if re.search(r"\b(class|interface|type|enum)\b", stripped):
        return "Declares a core TypeScript structure used by this module."
    if stripped.startswith("<") and stripped.endswith(">"):
        return "HTML tag opening/closing markup for component template structure."
    if stripped.startswith("*ngIf") or "*ngIf" in stripped:
        return "Angular structural directive controlling conditional rendering."
    if stripped.startswith("*ngFor") or "*ngFor" in stripped:
        return "Angular structural directive repeating UI over a collection."
    if stripped.startswith("formControlName"):
        return "Template binding connecting input to a reactive form control."
    if ":" in stripped and stripped.endswith(";"):
        return "CSS declaration assigning a style property value."
    if stripped.endswith("{"):
        return "Begins a new code/style block scope."
    if stripped == "}":
        return "Closes the current code/style block scope."
    if stripped == ");":
        return "Closes a function/method call statement."
    return "Core implementation line contributing to the file behavior."


def summarize_file(rel_path: Path, lines: list[str]) -> list[str]:
    non_empty = [ln.strip() for ln in lines if ln.strip()]
    imports = sum(1 for ln in non_empty if ln.startswith("import "))
    classes = [ln for ln in non_empty if re.search(r"\bclass\b", ln)]
    functions = [
        ln
        for ln in non_empty
        if re.search(r"\bfunction\b", ln) or re.search(r"\w+\(.*\)\s*{", ln)
    ]
    return [
        f"- **Relative path:** `{rel_path.as_posix()}`",
        f"- **Total lines:** `{len(lines)}`",
        f"- **Non-empty lines:** `{len(non_empty)}`",
        f"- **Import statements:** `{imports}`",
        f"- **Class-like declarations found:** `{len(classes)}`",
        f"- **Function/method-like signatures found (approx):** `{len(functions)}`",
    ]


def iter_source_files(root: Path) -> Iterable[Path]:
    for path in sorted(root.rglob("*")):
        if not path.is_file():
            continue
        rel = path.relative_to(root).as_posix()
        if rel.startswith("assets/"):
            continue
        if not is_text_file(path):
            continue
        yield path


def render_file_report(path: Path) -> str:
    rel = path.relative_to(WORKSPACE)
    lines = read_lines(path)
    parts: list[str] = []
    parts.append(f"# Explanation: `{rel.as_posix()}`")
    parts.append("")
    parts.append("## File Overview")
    parts.extend(summarize_file(rel, lines))
    parts.append("")
    parts.append("## Line-by-Line Behavior")
    parts.append(
        "Each row describes what that exact line contributes to behavior or structure."
    )
    parts.append("")
    parts.append("| Line | Source | Explanation |")
    parts.append("|---:|---|---|")
    for idx, line in enumerate(lines, start=1):
        source = line.replace("|", "\\|").replace("`", "\\`")
        meaning = classify_line(line).replace("|", "\\|")
        parts.append(f"| {idx} | `{source}` | {meaning} |")
    parts.append("")
    parts.append("## Notes")
    parts.append(
        "- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions."
    )
    return "\n".join(parts)


def write_reports() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    source_files = list(iter_source_files(SRC_DIR))
    manifest_rows = []
    total_lines = 0

    for src_file in source_files:
        rel_from_workspace = src_file.relative_to(WORKSPACE)
        out_path = OUT_DIR / f"{rel_from_workspace.as_posix()}.md"
        out_path.parent.mkdir(parents=True, exist_ok=True)

        lines = read_lines(src_file)
        total_lines += len(lines)
        out_path.write_text(render_file_report(src_file), encoding="utf-8")

        manifest_rows.append(
            (
                rel_from_workspace.as_posix(),
                len(lines),
                out_path.relative_to(WORKSPACE).as_posix(),
            )
        )

    index_lines = [
        "# Frontend `src` Explanation Report",
        "",
        "This folder contains a generated explanation document for every text file under `src` (excluding `src/assets`).",
        "",
        f"- Total files documented: `{len(manifest_rows)}`",
        f"- Total source lines processed: `{total_lines}`",
        "",
        "## File Index",
        "",
        "| Source File | Lines | Explanation File |",
        "|---|---:|---|",
    ]
    for rel, line_count, report_path in manifest_rows:
        index_lines.append(f"| `{rel}` | {line_count} | `{report_path}` |")

    (OUT_DIR / "README.md").write_text("\n".join(index_lines), encoding="utf-8")


if __name__ == "__main__":
    write_reports()
