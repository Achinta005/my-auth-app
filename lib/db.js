const bcrypt = require('bcryptjs');

// In production, use a real database
const users = new Map();

// Initialize with a default admin user
const initializeUsers = async () => {
  if (!users.has('admin')) {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    users.set('admin', {
      id: '1',
      username: 'admin',
      password: hashedPassword,
      role: 'admin',
      createdAt: new Date().toISOString()
    });
  }
};

// Initialize users on module load
initializeUsers();

export const findUserByUsername = (username) => {
  return users.get(username) || null;
};

export const findUserById = (id) => {
  for (const user of users.values()) {
    if (user.id === id) return user;
  }
  return null;
};

export const createUser = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const user = {
    id: Date.now().toString(),
    ...userData,
    password: hashedPassword,
    createdAt: new Date().toISOString()
  };
  users.set(userData.username, user);
  return user;
};