const jwt = require("jsonwebtoken");

exports = {};

exports.getToken = async (email, user) => {
    // Assume this code is complete
    const token = jwt.sign(
        {identifier: user._id},
        "thisisasecretkey"
    );
    return token;
};

module.exports = exports;