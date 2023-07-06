// Yes, the code you have written in server.js can be considered an API. It defines a route /api/organizations using app.get, and when this route is accessed, it queries the SQLite database for the name and description of organizations and sends the response as JSON.
// The route /api/organizations is responsible for handling incoming HTTP GET requests and returning the data from the SQLite database in JSON format. This allows other applications or client-side code to fetch the organization data from your server by making a GET request to the /api/organizations endpoint.
// By running your Express server and accessing the /api/organizations endpoint, you will be able to retrieve the organization data from the SQLite database.
require('dotenv').config();
const express=require('express');
const sqlite3=require('sqlite3').verbose();
const app=express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dbname = process.env.DATABASE_NAME;
const db=new sqlite3.Database(dbname);
const jwtSecretKey = process.env.JWT_SECRET_KEY;
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');


app.use(express.json());
app.use(cors());
app.options('*', cors({
    allowedHeaders: ["Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization","Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT","Access-Control-Allow-Origin", "*"]
  }));

function generateToken(user) {
    const token = jwt.sign({ id: user.uuid }, jwtSecretKey, { expiresIn: '1h' });
    return token;
  }

//User Registration
app.post('/api/register',(req,res)=>{
    res.json({ message: 'This is the api/register route' });
    const{username,email,password}=req.body;
    const uuid = uuidv4();
    bcrypt.hash(password,10,(err,hash)=>{
        if(err){
            console.log(err);
            return res.status(500).json({error:'Internal Server Error'});
        }
        db.run('insert into users(uuid,username,email,password_hash)values(?,?,?,?)',
        [uuid,username,email,hash],
        err=>{
            if(err){
                console.log(err);
                return res.status(500).json({error:'Internal Server Error'});
            }
            // res.json({message:'User created successfully'});
            return;
        }
        );
    });
});

//User Login
app.post('/api/login',(req,res)=>{
    const{username,password}=req.body;
    db.get('select* from users where username=?',[username],(err,row)=>{
        if(err){
            console.log(err);
            return res.status(500).json({error:'Internal Server Error'});
        }
        if(!row){
            return res.status(404).json({error:'User not found'});
        }
        bcrypt.compare(password,row.password_hash,(err,result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({error:'Internal Server Error'});
            }
            if(!result){
                return res.status(401).json({error:'Incorrect password'});
            }
            const token=generateToken(row);
            res.json({token});
        });
    });
});

function verifyToken(req,res,next){
    const token=req.headers.authorization;
    // console.log("token verified!!",token);
    if(!token){
        return res.status(401).json({error:'Unauthorized,dont have token'});
    }
    jwt.verify(token,jwtSecretKey,(err,decoded)=>{
        if(err){
            console.log(err);
            return res.status(401).json({error:'Unauthorized wrong token'});
        }
        req.userId=decoded.id;
        next()
    })
}

app.get('/api/organizations',verifyToken,(req,res)=>{
    // Get the requested page number from the query parameters.
    // If no page number is specified, the default value of 1 is used.
    // console.log("this is req!!! ",req.query);
    const page = parseInt(req.query.page)|| 1;
    const limit = 10;
    // Calculate the offset, which is the number of items that have already been returned from the database.
    const offset = (page - 1)* limit;

    // Start a database transaction.This allows us to ensure that all of the queries in the block are executed atomically, or as a single unit.
    db.serialize(()=>{
        db.get('select count(*) as total from organizations',(err,countRow)=>{
            if(err){
                console.log(err);
                return res.status(500).json({error: 'Internal Server Error'});
            }
            const total =countRow.total;
            const totalPages=Math.ceil(total/limit);

    db.all('select name,description,image from organizations limit? offset? ',[limit,offset],(err,rows)=>{
        if(err){
            console.log(err);
            res.status(500).json({error:'Intenal Server Error'});
        }
        else{
            res.json({
                organizations:rows,
                pagination:{
                    page,
                    limit,
                    total,
                    totalPages
                }
            });
        }
    });
});

    });
});

//User logout
app.post('/api/logout',verifyToken,(req,res)=>{
    res.json({ message: 'Logout successful' });
//     req.logout(function(err) {
//         if (err) { console.log(err) ;}
//         res.redirect('/');
// })
});
const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('Server is running on port 5000');
});