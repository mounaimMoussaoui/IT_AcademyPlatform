import { AdminModel } from "../models/adminModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface RegisterParams{
    adminName: string,
    email: string,
    password: string
}

export const registerAdmin =async ({ adminName, email, password}: RegisterParams)=>{
    const findAdmin= await AdminModel.findOne({email});
    if(findAdmin){
        return{error:{message:"admin user already exists"}};
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const newAdmin=new AdminModel({
        adminName, 
        email, 
        password:hashedPassword})
    await newAdmin.save();
    
    return generateJWT({adminName,email});
}


interface LoginParams{
    email: string,
    password: string
}

export const login= async({ email, password}: LoginParams)=>{
    const findAdmin = await AdminModel.findOne({email});
    if(!findAdmin){
        return{message:"admin not found"};
    }
    const isMatch= await bcrypt.compare(password,findAdmin.password);
    if(isMatch){
        const secretKey = {email, adminName: findAdmin.adminName};
        return {
            token: generateJWT(secretKey)
        };
    }
    return {data:"Invalid password"}

}


interface JWTPayload {
    email: string;
    adminName: string;
}

const generateJWT = (data: JWTPayload) => {
    return jwt.sign(data, process.env.JWT_SECRET_KEY as string);
}