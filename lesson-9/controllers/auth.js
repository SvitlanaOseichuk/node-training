import bcrypt from "bcrypt";
import User from "../models/user.js";
import jwt from "jsonwebtoken"

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



        // token

        const token = jwt.sign({id: user.id, name: user.name}, process.env.JWT_SECRET, { expiresIn: 60 * 60 }) // 60 * 60 second 
    

        await User.findByIdAndUpdate(user.id, {token}, {new: true})

        res.send({token})//({token: token})
    } catch (error) {
        next(error);
    }
}





async function logout(req, res, next) {
    try {
        
      await User.findByIdAndUpdate(req.user.id, { token: null }, { new: true });
  
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
  
  export default { register, login, logout };