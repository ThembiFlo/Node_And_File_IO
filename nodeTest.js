'use strict';
const fs = require('fs');


module.exports = class Visitor{
    constructor(fullName, age, dateOfVisit, timeOfVisit, comments, nameOfAssistance){
        this.name = fullName;
        this.age = age;
        this.date = dateOfVisit;
        this.time = timeOfVisit;
        this.comments = comments;
        this.nameOfAssistance = nameOfAssistance;
        this.id;
        

    }

    save(id) {
        let newUser = {
        id: this.id,
        fullName: this.name,
        age : this.age,
        date : this.date,
        time : this.time,
        comments : this.comments,
        nameOfAssistance : this.nameOfAssistance,
        }
        let data = JSON.stringify(newUser);
        console.log(data);

        fs.writeFileSync(`visitor${id}.json`, data);
    
        console.log(data);
        
        // let visitor = JSON.parse(data); //passing data of visitors from json
        return; //visitor;
        
    }

    load(id) {
        const fs = require("fs")
        if (id <= 0) {
             console.log("File doesn't exist");
        }
        var fileID = `visitor${id}.json`;
        var visitor = fs.readFileSync(fileID);
        let visitorData = JSON.parse(visitor);
        return visitorData;
   }
}


