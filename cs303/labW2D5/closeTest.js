Describe("closer exercise ",function(){
    it("check the counter on using closer",function(){
        const counter1 = makeCounter();
           const counter2 = makeCounter();
           counter1();
           counter1();
        assert.deepEqual(makeCounter(counter1()),2)
    })
});
// describe("Recursion and stack", function(){
//     it("sum a given number utill one using recursion",function(){
//         assert.deepEqual(sumNumber(5),15)
//     })
//     it("Calculate factorial",function(){
//      assert.deepEqual(factorialNumber(5),120)
//  })
//  it("Fibonacci numbers ",function(){
//      assert.deepEqual(fabonnacci(8),21)
//  })
//  })