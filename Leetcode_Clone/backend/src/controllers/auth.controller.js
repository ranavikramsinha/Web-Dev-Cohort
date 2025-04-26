import bcryptjs from  "bcryptjs";
import {db} from "../libs/db.js";
import jwt from "jsonwebtoken";
import { UserRole } from "../generated/prisma/index.js";

export const register = async(req, res) => {
    const {name, email, password} = req.body;

    try {
        const existingUser = await db.user.findUnique({
            where:{
                email
            }
        })

        if(existingUser){
            return res.status(400).json({
                error: "User already exists",
            })
        }

        const hashedPassword = await bcryptjs.hash(password, 10);

        const newUser = await db.user.create({
            data:{
                name,
                email,
                password: hashedPassword,
                role:UserRole.USER
            }
        })

        const token = jwt.sign({id:newUser.id}, process.env.JWT_SECRET, {
            expiresIn: "7d"
        })

        res.cookie("jwt", token, {
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV !== "development",
            maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
        })

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user:{
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
                image: newUser.image,
            }
        })

    } catch (error) {
        console.error("Error creating user:", error);

        res.status(500).json({
            error: "Error creating user",
        })
    }
}

export const login = async(req, res) => {
    const {email, password} = req.body;

    try {
        const user = await db.user.findUnique({
            where:{
                email,
            }
        })

        if(!user){
            return res.status(401).json({
                error: "User not found",
            })
        }

        const isMatch = await bcryptjs.compare(password, user.password);

        if(!isMatch){
            return res.status(401).json({
                error: "Invalid credentials",
            })
        }

        const token = jwt.sign({id:user.id}, process.env.JWT_SECRET, {
            expiresIn: "7d",
        })

        res.cookie("jwt", token, {
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV !== "development",
            maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
        })

        res.status(200).json({
            success: true,
            message: "User Logged in successfully",
            user:{
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                image: user.image,
            }
        })
        
    } catch (error) {
        console.error("Error logging user:", error);

        res.status(500).json({
            error: "Error logging user",
        })
    }
}

export const logout = async(req, res) => {

    try {
        res.clearCookie("jwt", {
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV !== "development",
        })

        res.status(200).json({
            message: "User logged out successfully",
            success: true,
        })
        
    } catch (error) {
        console.error("Error logging out user:", error);

        res.status(500).json({
            error: "Error logging out user",
        })
    }
}

export const check = async(req, res) => {
    try {
        res.status(200).json({
            success:true,
            message: "User authenticated successfully",
            user: req.user,
        })
        
    } catch (error) {
        console.error("Error checking user:", error);

        res.status(500).json({        
            error: "Error checking user",        
        })
    }
}