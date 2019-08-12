describe('Visitor()', () => {
    let visitor;
    beforeEach(() => {
        visitor = new Visitor("Joseph", 37, "10/10/10", "13h00", "visiting a sister", "Melissa")
    })
    it('should be defined', () => {
        expect(Visitor).toBeDefined();
    });
})
​describe('Visitor.save()', () => {
    let visitor;
    beforeEach(() => {
        visitor = new Visitor("Joseph", 37, "10/10/10", "13h00", "visiting a sister", "Melissa")
    })
    it('save() should be defined', () => {
        expect(visitor.save()).toBeDefined()
    })
    it('save() should create a new .json file', () => {
        visitor = new Visitor("Joseph", 37, "10/10/10", "13h00", "visiting a sister", "Melissa")
        expect(visitor.save()).toBe('File was saved');
    });
    it('should throw an error when the function is unable to create a new file ', () => {
        visitor = function () {
            throw ('File cannot be saved');
        }
        expect(visitor).toThrow('File cannot be saved');
    });
})
​describe('Visitor.load()', () => {
    let visitor;
    beforeEach(() => {
        visitor = new Visitor("Joseph", 37, "10/10/10", "13h00", "visiting a sister", "Melissa")
    })
    it('load() should be defined', () => {
        expect(visitor.load(1)).toBeDefined();
    });
    it('should return the file with the defined ID', () => {
        expect(visitor.load(1)).toEqual({
            fullName: "Joseph",
            age: 37,
            dateOfVisit: "10/10/10",
            timeOfVisit: "13h00",
            comments: "visiting a sister",
            assistantName: "Melissa",
        });
    })
})