let Visitor = require("./nodeTest");

// describe('Visitor()', () => {
//     let visitor;
//     beforeEach(() => {
        
//         visitor = new Visitor("Joseph", 37, "10/10/10", "13h00", "visiting a sister", "Melissa")
//     })
//     it('should be defined', () => {
//         expect(visitor).toBeDefined();
//     })
// });

describe('Visitor.load()', () => {
    let visitor;

    beforeEach(() => {
        visitor = new Visitor("Joseph", 37, "10/10/10", "13h00", "visiting a sister", "Melissa")
    })
    
    it('load() should be define visitor', () => {
       visitor.save(1) 
        expect(visitor.load(1)).toBeDefined();
    });
    
    it('should return the file with the defined ID', () => {
        // let test = visitor.load(1);

        expect(visitor.load(2)).toEqual({ fullName: 'Joseph',
        age: 37,
        date: '10/10/10',
        time: '13h00',
        comments: 'visiting a sister',
        nameOfAssistance: 'Melissa' })
    })
})
