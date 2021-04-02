//"use strict"

describe("recration", function(){
    beforeEach(function () {
        let list = {
            value: "mesay",
            next: {
              value: "honey",
              next: {
                value: "chimid",
                next: {
                  value: "luwam",
                  next: null
                }
              }
            }
          };
        // numArray = [5, 0, 7, 77, -20, 300, 51, 2];
        // peopleArray = [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }];
    });
    it("print the value ",function(){
        assert.deepEqual(printRevers(list),"chimidluwamhoneymesay")
    })
    it("recreation print on the riverse way",function(){
     assert.deepEqual(printList(list),"mesayhoneyluwamchimid")
 })

 })