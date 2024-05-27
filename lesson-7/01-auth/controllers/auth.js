import bcrypt from "bcrypt";
import User from "../models/user.js";

async function register(req, res, next) {
    try{
        const {name, email, password} = req.body;

        const user = await User.findOne({email})//({email: email})
    
        if (user !== null) {
            return res.status(409).send({message: "User already register"})
        }

        const passwordHash = await bcrypt.hash(password, 10)// 10=salt
        //.hash - хешує пароль
        const result = await User.create({name, email, password: passwordHash})
        console.log('result: ', result);
    
        res.status(201).send(result) // or .send({message: "Registration successful"})

    } catch(error) {

         next(error)
    }

}




async function login(req, res, next) {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email})//({email: email})
    //якщо User.findOne незміг знайти то виконуємо наступне:
        if (user === null) {
            console.log("Email");
            return res.status(401).send({message: "Email or password is incorrect"})
        }

        const isMatch = await bcrypt.compare(password, user.password);
    // .compare - перевіряє чи збігається пароль в базі даних з тим який передав користувач
    
        if (isMatch === false) {
            console.log("Password");
            return res.status(401).send({message: "Email or password is incorrect"})
        }
    

        res.send({token: "TOKEN"})
    } catch (error) {
        next(error);
    }


}



export default {register, login};