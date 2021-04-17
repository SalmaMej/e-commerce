import bcrypt from 'bcryptjs';
const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Salma Mejdouba',
    email: 'salma@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Nada Moussa',
    email: 'nada@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
