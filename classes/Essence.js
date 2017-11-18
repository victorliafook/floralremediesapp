"use strict";
module.exports = class Essence{
    constructor(name, scientificName, thumbnail, description, systemSN){
        this.name = name;
        this.scientificName = scientificName;
        this.thumbnail = thumbnail;
        this.description = description;
        this.shortname = systemSN + this.normalizeStr(scientificName);
        this.positiveAspectsText = "";
        this.negativeAspectsText = "";
    }
    
    setNegativeAspectsText(text){
        this.negativeAspectsText = text || "";
    }
    
    setPositiveAspectsText(text){
        this.positiveAspectsText = text || "";
    }

    normalizeStr(str){
        return str.replace(' ','-').toLowerCase();
    }
    
}