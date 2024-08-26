import app from "./app.js";
import mongoose from "mongoose";


const port = 4000

// database connection -mongodb 
// mongoose.connect('mongodb://127.0.0.1:27017/test');

{async ()=>{
    try {
        // db connection 
        await mongoose.connect('dbstring')
        console.log("DB Connected Successfully");


        app.on("error", (err) => {
            console.log("Error: ", err)
            throw err 
        })

        const onListening = () => {
            console.log('Listening on port ${port}');
        }

        app.listen(port, onListening)

    } catch (error) {
        console.error("Error:", err)
        throw err
    }
}}{}




// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })