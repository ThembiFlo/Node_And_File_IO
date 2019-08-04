let id = 0;
class Visitor {
    constructor(fullName, age, visitDate, visitTime, comments, assistedBy) {
         this.fullName = fullName;
         this.age = age;
         this.visitDate = visitDate;
         this.visitTime = visitTime;
         this.comments = comments;
         this.assistedBy = assistedBy;
         console.log('Patient information added to file');
    }

save() {
    let files = new Visitor(
         this.fullName,
         this.age,
         this.visitDate,
         this.visitTime,
         this.comments,
         this.assistedBy
);
    

    let dataFile = JSON.stringify(files)
    let fs = require('fs');
    id++;
    fs.writeFile(`visitor_${id}.json`, dataFile, err => {
         if (err) {
              throw (Error + 'File cannot be saved');
         } else {
            console.log('File successfully saved');
        }
    });
}
    load(id) {
        console.log('Id is: '+ id);
    var fs = require("fs")
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
    "01h00",
    "Visiting a sister",
    "Melissa");
    visitor1.save();

    let visitor2 = new Visitor("Kelly",
    18,
    "03/08/19",
    "13h00",
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
    visitor1.load(2)