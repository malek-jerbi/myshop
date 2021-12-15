import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Youcef Rougab',
    email: 'youcef@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Aziz Landoulsi',
    email: 'aziz@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
