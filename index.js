'use strict';
const fs = require('fs');


class Visitor{
    constructor(fullName, age, dateOfVisit, timeOfVisit, comments, nameOfAssistance){
        this.name = fullName;
        this.age = age;
        this.date = dateOfVisit;
        this.time = timeOfVisit;
        this.comments = comments;
        this.nameOfAssistance = nameOfAssistance;
        

    }

    save(id) {
        let data = fs.readFileSync(`visitor_${id}.json`);
        let Visitor = JSON.parse(data); //passing data of visitors from json
        console.log(Visitor);
        
    }

    load(){
        let num;
        console.log();
    }
}
let alice = new Visitor();
let bob = new Visitor();
let charlie = new Visitor();
alice.save(1);
bob.save(2);
charlie.save(3);

