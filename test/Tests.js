const assert = require("chai").assert;
const sumArray = require("../SumArray");
const utils = require("./Utils");

const ONE_MLN = 1000000;
const MLN_MLN = 1000000000000;

describe("Testing SumArray counSum function", function () {
    describe("Checking if returning sum is correct", function () {
        it("Count array containing 1M ones with 1 thread", async function () {
            const result = await sumArray.countSum(1, utils.justOnesArray());
            console.log("Total Sum: ", result);
            assert.equal(result, ONE_MLN)
        });
        it("Count array containing 1M ones with 2 threads", async function () {
            const result = await sumArray.countSum(2, utils.justOnesArray());
            console.log("Total Sum: ", result);
            assert.equal(result, ONE_MLN)
        });
        it("Count array containing 1M ones with 4 threads", async function () {
            const result = await sumArray.countSum(4, utils.justOnesArray());
            console.log("Total Sum: ", result);
            assert.equal(result, ONE_MLN)
        });
    });

    describe("Checking if returning sum is correct with big int", function () {
        it("Count array containing 1M millions with 1 thread", async function () {
            const result = await sumArray.countSum(1, utils.justMillionsArray());
            console.log("Total Sum: ", result);
            assert.equal(result, MLN_MLN)
        });
        it("Count array containing 1M millions with 2 threads", async function () {
            const result = await sumArray.countSum(2, utils.justMillionsArray());
            console.log("Total Sum: ", result);
            assert.equal(result, MLN_MLN)
        });
        it("Count array containing 1M millions with 4 threads", async function () {
            const result = await sumArray.countSum(4, utils.justMillionsArray());
            console.log("Total Sum: ", result);
            assert.equal(result, MLN_MLN)
        });
    });

    describe("Comparing random integers array sum time execution", function () {
        let randomArr = utils.randomIntArray();
        it("Comparing random integers array sum time execution 1 thread with 2 threads", async function () {
            const result = await sumArray.countSum(1, randomArr);

        });
        it("Comparing random integers array sum time execution 1 thread with 4 threads", async function () {
            const result = await sumArray.countSum(2, randomArr);

        });
        it("Count array with 4 thread", async function () {
            const result = await sumArray.countSum(4, randomArr);

        });
    });
});