import { createRequire } from "module";
const require = createRequire(import.meta.url);


import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import Router from "./routes/routes.js"
import passport from "passport";
import session from 'express-session'
import passportSetup from "./passport.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use(session({ secret: 'SECRET' }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", Router);


app.use('/', Router)


mongoose.connect("mongodb+srv://aditya:Adityanegi1234@mern-capstone.dqd9spz.mongodb.net/Banking-App?retryWrites=true&w=majority");



app.listen(8000, () => {
    console.log("Server started on port 8000")
})
