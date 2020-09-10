const { collection } = require("./schema");
import collection from '../database/schema.js';

const getUser = async (username) => {
    
    try {
        const user = await collection
            .findOne(username, (error, data) => {})
            .lean();
        return user;
    } catch(error) {
        console.error('There was an issue getting this user', error);
    }
    
}

const getUserPassword = async (password) => {

    try {
        const pass = await collection
            .findOne(password, (error, data) => {})
            .lean();
    } catch(error) {
        console.error('There was an issue getting this password', error)
    }
}

module.exports = {
    getUser,
    getUserPassword,
    
}