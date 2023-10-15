const express=require("express");
const ejs=require("ejs");
const bodyParser=require("body-parser");
const app=express();
app.set('view engine','ejs');


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.get("/",function(req,res){
    res.render("index");
});
app.get("/Contact_Us",function(req,res){
res.render("contactUs");
res.redirect("/");
})





app.listen("7000",function(req,res){
    console.log("Host at 7000");
})