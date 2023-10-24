const assert = require("chai").assert;
const sumArray = require("../src/SumArray");
const utils = require("./Utils");

// Change Working Directory of the mocha test configuration to /src folder before running tests

const ONE_MLN = 1000000;
const MLN_MLN = 1000000000000;

describe("Checking if returning sum is correct", function() {
    it("Count array containing 1M ones with 1 thread", async function() {
        const result = await sumArray.countSum(1, utils.justOnesArray());
        console.log("Total Sum: ", result);
        assert.equal(result, ONE_MLN)
    });
    it("Count array containing 1M ones with 2 threads", async function() {
        const result = await sumArray.countSum(2, utils.justOnesArray());
        console.log("Total Sum: ", result);
        assert.equal(result, ONE_MLN)
    });
    it("Count array containing 1M ones with 4 threads", async function() {
        const result = await sumArray.countSum(4, utils.justOnesArray());
        console.log("Total Sum: ", result);
        assert.equal(result, ONE_MLN)
    });
});

describe("Checking if returning sum is correct with big int", function() {
    it("Count array containing 1M ones with 1 thread", async function() {
        const result = await sumArray.countSum(1, utils.justMillionsArray());
        console.log("Total Sum: ", result);
        assert.equal(result, MLN_MLN)
    });
    it("Count array containing 1M ones with 2 threads", async function() {
        const result = await sumArray.countSum(2, utils.justMillionsArray());
        console.log("Total Sum: ", result);
        assert.equal(result, MLN_MLN)
    });
    it("Count array containing 1M ones with 4 threads", async function() {
        const result = await sumArray.countSum(4, utils.justMillionsArray());
        console.log("Total Sum: ", result);
        assert.equal(result, MLN_MLN)
    });
});

describe("Comparing random integers array sum time execution", function() {
    let time = 0;
    let randomArr = utils.randomIntArray();
    it("Count array with 1 thread", async function() {
        const result = await sumArray.countSum(1, randomArr);

    });
    it("Count array with 2 thread", async function() {
        const result = await sumArray.countSum(2, randomArr);

    });
    it("Count array with 4 thread", async function() {
        const result = await sumArray.countSum(4, randomArr);

    });
});