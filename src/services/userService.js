const User = require("../models/user");
const bcrypt = require('bcrypt');

exports.register = (userData) => {
    return User.create(userData);
};

exports.login = async (email, password) => {
    const user = await User.findOne({ email });

    //validate user
    if(!user) {
        throw new Error('Invalid email or password!');
    }
    
    //validate password
    const isValid = await bcrypt.compare(password, user.password);

    if(!isValid) {
        throw new Error('Invalid email or password!');
    }

    console.log(user)
    return user
}