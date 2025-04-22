
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/authUser.models.js';

const JWT_SECRET = process.env.JWT_SECRET;

export const signup = async (req, res) => {
  const { username, 
          email, 
          password 
        } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', userId: newUser._id });
  } catch (err) {
    res.status(500).json({ message: 'Error during signup', error: err.message });
  }
};

export const login = async (req, res) => {
  const { email, 
          password 
        } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token, userId: user._id });
  } catch (err) {
    res.status(500).json({ message: 'Error during login', error: err.message });
  }
};
