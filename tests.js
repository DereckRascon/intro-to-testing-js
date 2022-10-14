// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("sayHello", function() {
    it("should be a defined function", function() {
        expect(typeof sayHello).toBe("function");
    });
    it("should return a string when called", function() {
        expect(typeof sayHello()).toBe("string")
    });
    it("should return 'Hello Jane!' when passed", function(){
        expect(sayHello('Jane')).toBe('Hello Jane!');
    });
    it("should return 'Hello Alex!' when passed", function(){
        expect(sayHello('Alex')).toBe('Hello Alex!');
    });
    it("should return 'Hello Pat!' when passed", function(){
        expect(sayHello('Pat')).toBe('Hello Pat!');
    });
    it("should return 'Hello, World!' when executed", function(){
        expect(sayHello()).toBe('Hello, World!');
    });
    it("should return 'Hello, World!' when true is passed", function(){
        expect(sayHello(true)).toBe('Hello, World!');
    });
    it("should return 'Hello, World!' when false is passed", function(){
        expect(sayHello(false)).toBe('Hello, World!');
    });
    it("should return 'Hello, World!' when null is passed", function(){
        expect(sayHello(null)).toBe('Hello, World!');
    });
    it("should return 'Hello, World!' when a number is passed", function(){
        expect(sayHello(7)).toBe('Hello, World!');
    });
    it("should return 'Hello, World!' when 5 is passed", function(){
        expect(sayHello(5)).toBe('Hello, World!');
    });
    it("should return 'Hello, World!' when an array is passed", function(){
        expect(sayHello([1, 2, 3])).toBe('Hello, World!');
    });
});


describe("isFive", function() {
    it("should be a defined function", function () {
        expect(typeof isFive).toBe("function")
    });
    it("should return a boolean when passed any value", function(){
        expect(typeof isFive()).toBe("boolean");
    });
    it("should return true when 5 is passed", function(){
        expect(isFive(5)).toBe(true);
    });
    it("should return false when 5 is passed", function(){
        expect(isFive("5")).toBe(false);
    });
});


describe("isEven", function() {
    it("should be a defined function", function() {
        expect(typeof isEven).toBe("function")
    });
    it("should return a boolean when passed any value", function(){
        expect(typeof isEven()).toBe("boolean");
    });
    it("should return true when 2 is passed", function(){
        expect(isEven(2)).toBe(true);
    });
    it("should return false when 3 is passed", function(){
        expect(isEven(3)).toBe(false);
    });
    it("should return false when banana is called", function(){
        expect(isEven(isNaN)).toBe(false);
    });
    it("should return true when 8 is called", function(){
        expect(isEven(8)).toBe(true);
    });
    it("should return false when infinity is called", function(){
        expect(isEven(true)).toBe(false);
    });







});
