var express = require('express');
var mongodb = require('mongodb');
var EssenceSystem = require('./classes/EssenceSystem.js');
var Essence = require('./classes/Essence.js');

const MONGODB_URI = process.env.MONGODB_URI;

var floralsCollection;
var usersCollection;

var app = express();
app.use(express.static('public'));

//set middlewares
app.use(express.bodyParser());

mongodb.connect(MONGODB_URI, function(err, db) {
    if(err){
        console.log(err);
        throw err;
    }
    floralsCollection = db.collection('florais');
    usersCollection = db.collection('users');
    
});

app.get('/api/system', function(req, res){
    
    floralsCollection.find({}).toArray(function(error, documents) {
        if (error){
            console.log(error);
        }
    
        res.json(documents);
    });
    
});

app.post('/api/system', function(req, res){
    
    
    var body = req.body;
    try{
        var newEssenceSytem = new EssenceSystem(body.name, body.url, body.thumbnail, body.description, body.shortname);
    }catch(exception){
        res.send("Bad input");
    }
    
    floralsCollection.insertOne(newEssenceSytem);
    res.json(newEssenceSytem);
    
});

app.get('/api/system/:systemSN', function(req, res){
    var params = req.params;
    floralsCollection.find({shortname: params.systemSN}).toArray(function(error, documents) {
        if (error){
            console.log(error);
        }
    
        res.json(documents);
    });
    
});

app.post('/api/system/:systemSN', function(req, res){
    
    var params = req.params;
    floralsCollection.findOne({shortname: params.systemSN}, function(error, doc) {
        if (error){
            console.log(error);
            res.send("Houve um erro");
        }
        if(!doc) res.send("System not found");
        
        var body = req.body;
        try{
            var newEssence = new Essence(body.name, body.scientificName, body.thumbnail, body.description, params.systemSN);
        }catch(exception){
            res.send("Bad input");
        }
        
        var essences = doc.essences;
        essences = essences.filter(function(val){return val !== null});
        essences.push(newEssence);
        floralsCollection.update({shortname: doc.shortname},{$set:{essences: essences}});
        res.json(doc);
    });
    
});

app.delete('/api/system/:systemSN', function(req, res){
    
    //floralsCollection.insertOne({term: query, when: new Date()});
    
});

app.get('/api/system/:systemSN/essences', function(req, res){
    var params = req.params;
    var essences = [];
    floralsCollection.findOne({shortname: params.systemSN}, function(error, doc) {
        if (error){
            console.log(error);
        }
        if (doc) essences = doc.essences; 
        res.json(essences);
    });
    
});

app.post('/api/essence', function(req, res){
    
    //floralsCollection.insertOne({term: query, when: new Date()});
    res.send("disabled");
    
});

app.get('/api/essence/:essenceId', function(req, res){
    
    //floralsCollection.insertOne({term: query, when: new Date()});
    
});

app.post('/api/essence/:essenceId', function(req, res){
    
    //floralsCollection.insertOne({term: query, when: new Date()});
    
});

app.delete('/api/essence/:essenceId', function(req, res){
    
    //floralsCollection.insertOne({term: query, when: new Date()});
    
});



app.get('/api/latest', function(req, res){
    floralsCollection.find({}, { _id: 0}).limit(10).toArray(function(err, arr){
        if(err){
            res.json(err);
            console.log(err);
        }else{
            res.json(arr);
        }
        
    });
    
});

app.listen(process.env.PORT || 8081);