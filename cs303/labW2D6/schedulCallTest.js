describe("bank", function () {

    it("balance of bank", function () {
        transactionsDB = [
            { customerId: 1, customerTransactions: [10, 50, -40] },
            { customerId: 2, customerTransactions: [10, 10, -10] },
            { customerId: 3, customerTransactions: [5, -5, 55] }];
        assert.deepEqual(makeBank()(), 85);
    });

});