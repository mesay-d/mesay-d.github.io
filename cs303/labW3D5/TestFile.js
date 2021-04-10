"use strict";

describe ("calculator from cnstructor ",function(){
    let calc;
    before(function(){
        calc= new Calculator();
        calc.setValue(10,5)
    });
it("the sum of 5 and 10 is 15",function(){
        assert.Equal(calc.a, 10);
        assert.Equal(calc.b, 5);
        assert.Equal(calc.sum(), 15);
});
it("the sum of 5 and 10 is 15", function () {
    assert.strictEqual(calc.a, 10);
    assert.strictEqual(calc.b, 5);
    assert.strictEqual(calc.sum(), 15);
});
it("the sum of 5 and 10 is 5",function(){
    assert.strictEqual(calc.a, 10);
        assert.strictEqual(calc.b, 5);
        assert.strictEqual(calc.sub(), 5);
});
it("the sum of 5 and 10 is 2",function(){
    assert.strictEqual(calc.a, 10);
        assert.strictEqual(calc.b, 5);
        assert.strictEqual(calc.div(), 2);
});
it("the sum of 5 and 10 is 50",function(){
    assert.strictEqual(calc.a, 10);
        assert.strictEqual(calc.b, 5);
        assert.strictEqual(calc.mul(), 50);
});

});

describe("accumulator", function () {
    it("checks initialValue and increment", function () {
        const accumulator = new Accumulator(5, 10);
        assert.strictEqual(accumulator.initialValue, 5);
        assert.strictEqual(accumulator.increment, 10);
    });

    it("checks accumulate", function () {
        const accumulator = new Accumulator(5, 10);
        accumulator.accumulate();
        accumulator.accumulate();
        assert.strictEqual(accumulator.initialValue, 25);
        assert.strictEqual(accumulator.increment, 10);
    });    

    it("checks report", function () {
        const accumulator = new Accumulator(5, 10);
        assert.strictEqual(accumulator.current(), 5);
    });    

});

describe("mountainBike", function () {
    it("checks mountainBike proto inheritance", function () {
        mountainBike.speedUp(100);
        mountainBike.applyBrake(10);
        assert.strictEqual(mountainBike.speed, 92);
        assert.strictEqual(mountainBike.gear, 3);
    });

});