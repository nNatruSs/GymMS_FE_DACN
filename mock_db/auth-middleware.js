module.exports = (req, res, next) => {
  if (req.method === 'POST' && req.path === '/login') {
    const { email, password } = req.body;
    const users = req.app.db.get('users').value();

    const user = users.find(
      u => u.email === email && u.password === password
    );

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const { password: _, ...safeUser } = user;

    return res.json({
      token: 'fake-jwt-token',
      user: safeUser
    });
  }

  if (req.method === 'POST' && req.path === '/register') {
    const newUser = {
      id: Date.now().toString(),
      role: 'USER',
      ...req.body
    };

    req.app.db.get('users').push(newUser).write();

    const { password: _, ...safeUser } = newUser;

    return res.status(201).json({
      token: 'fake-jwt-token',
      user: safeUser
    });
  }

  next();
};
