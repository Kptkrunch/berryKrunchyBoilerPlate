import mongoose, { Collection } from 'mongoose';

const collection = new mongoose.Schema({

    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: true,
        required: true
    }
})

const User = mongoose.model('User', collection);

export default Collection;