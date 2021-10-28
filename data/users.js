import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'vijay',
        email: 'vijay@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'vijay1',
        email: 'vijay1@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users