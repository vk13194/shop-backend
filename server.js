import express from 'express';
import morgan from 'morgan'
import dotenv from 'dotenv'
const app = express();
import connect from './database/connect.js'
import productRoutes from './routes/productRoutes.js'
dotenv.config()
connect()
app.get('/', async (req, res) => {
    res.send('hello')
})
app.use('/api/products', productRoutes)
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server start ${PORT}`)
})

