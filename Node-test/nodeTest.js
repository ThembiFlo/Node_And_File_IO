const fs = require("fs");
//import fs from 'fs'

let id = 0;
class Visitor {
    constructor(fullName, age, dateOfVisit, timeOfVisit, comments, assistantName) {
         this.name = fullName;
         this.age = age;
         this.date = dateOfVisit;
         this.time = timeOfVisit;
         this.comments = comments;
         this.assistant = assistantName;
         console.log("Visitor information added to file");
    }

save() {
    let files = new Visitor(
         this.name,
         this.age,
         this.date,
         this.timeremove the file manually to continue.,
         this.comments,
         this.assistant
);
    

    let dataFile = JSON.stringify(files)
    id++;
    fs.writeFile(`visitor_${id}.json`, dataFile, err => {
         if (err) {
              throw (error + "File cannot be saved");
         } else {
            console.log("File successfully saved");
        }
    });
}
    load(id) {
        console.log("Id is: "+ id);
   
    if(id <= 0) {
        console.log("File doesn't exist");
    }
    var path = "visitor_" + id + ".json";
    var data =  fs.readFileSync(path);
    let vData = JSON.parse(data);
     console.log(vData);
    }
}
    let visitor1 = new Visitor("Joseph",
    37,
    "10/10/10",
    "13h00",
    "Visiting a sister",
    "Melissa");
    visitor1.save();

    let visitor2 = new Visitor("Kelly",
    18,
    "03/08/19",
    "19h00",
    "Party",
    "Bey");
    visitor2.save();

    let visitor3 = new Visitor("Lizzy",
    52,
    "21/05/19",
    "08h00",
    "Baby sitting",
    "Bob");
    visitor3.save();
    //visitor1.load();