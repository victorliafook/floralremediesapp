var express = require('express');
var mongodb = require('mongodb');

const MONGODB_URI = process.env.MONGODB_URI;

var collection;

var app = express();

mongodb.connect(MONGODB_URI, function(err, db) {
    if(err){
        console.log(err);
        throw err;
    }
    collection = db.collection('florais');
    
});

app.get('/api/system/', function(req, res){
    
    //collection.insertOne({term: query, when: new Date()});
    
});

app.post('/api/system/', function(req, res){
    
    //collection.insertOne({term: query, when: new Date()});
    
});

app.get('/api/system/:systemId', function(req, res){
    
    //collection.insertOne({term: query, when: new Date()});
    
});

app.post('/api/system/:systemId', function(req, res){
    
    //collection.insertOne({term: query, when: new Date()});
    
});

app.delete('/api/system/:systemId', function(req, res){
    
    //collection.insertOne({term: query, when: new Date()});
    
});

app.get('/api/system/:systemId/essences', function(req, res){
    
    //collection.insertOne({term: query, when: new Date()});
    
});

app.post('/api/essence/', function(req, res){
    
    //collection.insertOne({term: query, when: new Date()});
    
});

app.get('/api/essence/:essenceId', function(req, res){
    
    //collection.insertOne({term: query, when: new Date()});
    
});

app.post('/api/essence/:essenceId', function(req, res){
    
    //collection.insertOne({term: query, when: new Date()});
    
});

app.delete('/api/essence/:essenceId', function(req, res){
    
    //collection.insertOne({term: query, when: new Date()});
    
});



app.get('/api/latest', function(req, res){
    collection.find({}, { _id: 0}).limit(10).toArray(function(err, arr){
        if(err){
            res.json(err);
            console.log(err);
        }else{
            res.json(arr);
        }
        
    });
    
});

app.listen(process.env.PORT || 8081);