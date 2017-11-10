"use strict";
module.exports = class Essence{
    constructor(name, scientificName, thumbnail, description, systemSN){
        this.name = name;
        this.scientificName = scientificName;
        this.thumbnail = thumbnail;
        this.description = description;
        this.shortname = systemSN + this.normalizeStr(scientificName);
    }
    
    normalizeStr(str){
        return str.replace(' ','-').toLowerCase();
    }
    
}