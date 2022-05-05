require('dotenv').config();
const bcrypt = require('bcrypt');
const saltRounds = Number(process.env.SALT_ROUNDS);

exports.hashPassword = async (unhashedPassword) => {
    const hash = await bcrypt.hash(unhashedPassword, saltRounds);
    return hash;
};

exports.verifyPassword = async (password, hash) => {
    const isValidPassword = await bcrypt.compare(password, hash);
    return isValidPassword;
};