import path from "node:path";
import crypto from "node:crypto";

import multer from "multer";



const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.resolve("tmp"));
    },
    filename: function(req, file, cb) {
        // console.log({file});
//1var
        const extname = path.extname(file.originalname);//.jpg
        console.log({extname});

        const basename= path.basename(file.originalname, extname);//name file without .jpg
        console.log({basename});

        const suffix = crypto.randomUUID();

        const filename = `${basename}--${suffix}${extname}`
        console.log(filename);

        // console.log(crypto.randomUUID()=file.originalname) 2variant 

        cb(null, filename)
    }
})


export default multer({storage: storage});