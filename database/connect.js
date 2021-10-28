import mongoose from 'mongoose'

const connect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URl, {

        })

        console.log(`MongoDB Connected`)
    } catch (error) {
        console.error(`mongodb not connected`)
        process.exit(1)
    }
}

export default connect