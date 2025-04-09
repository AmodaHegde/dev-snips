import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const generateToken = (userId) => {
    return jwt.sign({ id: userId}, process.env.JWT_SECRET, {
        expiresIn: '7d',
    });
};

//@route POST/api/auth/register
export const registerUser = async (req, res) =>{
    const {username, email, password} = req.body;
    try {
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({message: 'Email already in use'});
        }
        const newUser = await User.create({username, email, password});

        const token = generateToken(newUser._id);

        res.status(201).json({
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email,
            },
            token,
        });
    } catch (error) {
        res.status(500).json({message: 'Server error', error});
    }
};

//@route POST/api/auth/login
export const loginUser = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message: 'Invalid email or password'});
        }

        const isMatch = await bcrypt.compare(password, user.password)
        
        if(!isMatch){
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = generateToken(user._id);

        res.status(200).json({
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
            },
            token,
        });
    }
    catch (error){
        
    }
};