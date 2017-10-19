'use strict';

exports.createSystem = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "id" : ""
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deleteSystem = function(args, res, next) {
  /**
   * parameters expected in the args:
  * systemId (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "image" : "walnut.jpg",
  "positiveAspectsText" : "Lorem Ipsum Dolor Sit Amet",
  "scientificName" : "Juglans regia",
  "created" : "2016-08-29T09:12:33.001Z",
  "name" : "Walnut",
  "description" : "Lorem Ipsum Dolor Sit Amet",
  "EssenceSystem" : {
    "image" : "bach.jpg",
    "name" : "Bach",
    "description" : "aeiou",
    "url" : "https://www.acme-corp.com"
  },
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "negativeAspectsText" : "Lorem Ipsum Dolor Sit Amet",
  "updated" : "2016-08-29T09:12:33.001Z"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getSystemEssences = function(args, res, next) {
  /**
   * parameters expected in the args:
  * systemId (Integer)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "image" : "walnut.jpg",
  "positiveAspectsText" : "Lorem Ipsum Dolor Sit Amet",
  "scientificName" : "Juglans regia",
  "created" : "2016-08-29T09:12:33.001Z",
  "name" : "Walnut",
  "description" : "Lorem Ipsum Dolor Sit Amet",
  "EssenceSystem" : {
    "image" : "bach.jpg",
    "name" : "Bach",
    "description" : "aeiou",
    "url" : "https://www.acme-corp.com"
  },
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "negativeAspectsText" : "Lorem Ipsum Dolor Sit Amet",
  "updated" : "2016-08-29T09:12:33.001Z"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getSystems = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "image" : "walnut.jpg",
  "positiveAspectsText" : "Lorem Ipsum Dolor Sit Amet",
  "scientificName" : "Juglans regia",
  "created" : "2016-08-29T09:12:33.001Z",
  "name" : "Walnut",
  "description" : "Lorem Ipsum Dolor Sit Amet",
  "EssenceSystem" : {
    "image" : "bach.jpg",
    "name" : "Bach",
    "description" : "aeiou",
    "url" : "https://www.acme-corp.com"
  },
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "negativeAspectsText" : "Lorem Ipsum Dolor Sit Amet",
  "updated" : "2016-08-29T09:12:33.001Z"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getsystem = function(args, res, next) {
  /**
   * parameters expected in the args:
  * systemId (Integer)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "image" : "bach.jpg",
  "name" : "Bach",
  "description" : "aeiou",
  "url" : "https://www.acme-corp.com"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.updateSystem = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "id" : ""
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

