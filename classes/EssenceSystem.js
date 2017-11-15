"use strict";
module.exports = class EssenceSystem{
    constructor(name, url, thumbnail, description, shortname){
        this.name = name;
        this.url = url;
        this.thumbnail = thumbnail;
        this.description = description;
        this.shortname = shortname;
        this.essences = [];
    }
}