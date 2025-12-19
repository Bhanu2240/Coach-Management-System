const jwt = require('jsonwebtoken')

require('dotenv').config();

exports.AdminAuth = (req, res , next) => {
    try {
        const token = req.cookies.token;
        //  console.log("REQ COOKIES ", token);

        if (!token) {
            return res.status(401).json({ success: false, message: "token is not found" })
        }

        // very the token
        try {
            // yee eek method h jo token ko verify krta h
            const payload = jwt.verify(token, process.env.JWT_TOKEN);
            // console.log(payload);
            req.user = payload;
            // return res.status(200).json({
            //     loggedIn: true,
            //     user: payload,
            // });
            // console.log(payload);

        } catch (err) {
            return res.status(401).json({ success: false, message: "token is invalid" })
        }
        next();
    } catch (err) {
        return res.status(500).json({ success: false, message: "something went wrong" })
    }
}

exports.isadmin = (req , res , next) =>
{
    try {
        if (req.user.role !== "admin")
            return res.status(401).json({ success: false, message: "this is the protected route for the Admin" })

        next();
    } catch (err) {
        return res.status(500).json({ success: false, message: err.message })
    }
}

