// module.exports = (req, res, next) => {
//   if (req.method === 'POST' && req.path === '/login') {
//     const { email, password } = req.body;
//     const users = req.app.db.get('users').value();

//     const user = users.find(
//       u => u.email === email && u.password === password
//     );

//     if (!user) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     const { password: _, ...safeUser } = user;

//     return res.json({
//       token: 'fake-jwt-token',
//       user: safeUser
//     });
//   }

//   if (req.method === 'POST' && req.path === '/register') {
//     const newUser = {
//       id: Date.now().toString(),
//       role: 'USER',
//       ...req.body
//     };

//     req.app.db.get('users').push(newUser).write();

//     const { password: _, ...safeUser } = newUser;

//     return res.status(201).json({
//       token: 'fake-jwt-token',
//       user: safeUser
//     });
//   }

//   next();
// };


// module.exports = (req, res, next) => {

//   /* LOGIN */
//   if (req.method === 'POST' && req.path === '/login') {
//     const { email, password } = req.body;
//     const users = req.app.db.get('users').value();

//     const user = users.find(
//       u => u.email === email && u.password === password
//     );

//     if (!user) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     return res.json({
//       jwt: 'fake-jwt-token',
//       userId: user.id,          // string
//       userRole: user.role,
//       name: user.name,
//       email: user.email
//     });
//   }

//   /* REGISTER */
//   if (req.method === 'POST' && req.path === '/register') {
//     const users = req.app.db.get('users').value();

//     const newUser = {
//       id: Date.now().toString(),   // string ID ✅
//       role: 'USER',
//       ...req.body
//     };

//     users.push(newUser);
//     req.app.db.set('users', users).write();

//     return res.status(201).json({
//       jwt: 'fake-jwt-token',
//       userId: newUser.id,
//       userRole: newUser.role,
//       name: newUser.name,
//       email: newUser.email
//     });
//   }

//   next();
// };


module.exports = (req, res, next) => {

  /* ---------- AUTH ---------- */
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

  /* ---------- MEMBERSHIP REGISTER ---------- */
  if (req.method === 'POST' && req.path === '/user_memberships') {
    const memberships = req.app.db.get('user_memberships').value();
    const { user_id } = req.body;

    //prevent duplicate active membership
    const existing = memberships.find(m => m.user_id === user_id);
    if (existing) {
      return res.status(400).json({
        message: 'User already has an active membership'
      });
    }

    const newMembership = {
      id: Date.now().toString(), // mock only
      ...req.body
    };

    req.app.db.get('user_memberships').push(newMembership).write();

    return res.status(201).json(newMembership);
  }

  next();
};
