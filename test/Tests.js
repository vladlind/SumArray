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

    describe("Comparing equal random integers array sum time execution and resulting sums", function () {
        let randomArr = utils.randomIntArray();
        it("Comparing random integers array sum time execution 1 thread with 2 threads - the latter is faster", async function () {
            const startOneThread = Date.now();
            const resultOneThread = await sumArray.countSum(1, randomArr);
            const endOneThread = Date.now();
            console.log(`Execution time One Thread: ${endOneThread - startOneThread} ms`);
            console.log("Total Sum One Thread: ", resultOneThread);

            const startTwoThreads = Date.now();
            const resultTwoThreads = await sumArray.countSum(2, randomArr);
            const endTwoThreads = Date.now();
            console.log(`Execution time Two Thread: ${endTwoThreads - startTwoThreads} ms`);
            console.log("Total Sum Two Threads: ", resultTwoThreads);

            assert.equal(resultOneThread, resultTwoThreads);
            assert.isTrue((endOneThread - startOneThread) > (endTwoThreads - startTwoThreads));
        });
        it("Comparing random integers array sum time execution 1 thread with 4 threads - the latter is faster", async function () {
            const startOneThread = Date.now();
            const resultOneThread = await sumArray.countSum(1, randomArr);
            const endOneThread = Date.now();
            console.log(`Execution time One Thread: ${endOneThread - startOneThread} ms`);
            console.log("Total Sum One Thread: ", resultOneThread);

            const startFourThreads = Date.now();
            const resultFourThreads = await sumArray.countSum(4, randomArr);
            const endFourThreads= Date.now();
            console.log(`Execution time Four Threads: ${endFourThreads - startFourThreads} ms`);
            console.log("Total Sum Four Threads: ", resultFourThreads);

            assert.equal(resultOneThread, resultFourThreads);
            assert.isTrue((endOneThread - startOneThread) > (endFourThreads - startFourThreads));
        });
        it("Comparing random integers array sum time execution 2 threads with 4 threads - results are pretty close", async function () {
            const startTwoThreads = Date.now();
            const resultTwoThreads = await sumArray.countSum(2, randomArr);
            const endTwoThreads = Date.now();
            console.log(`Execution time Two Thread: ${endTwoThreads - startTwoThreads} ms`);
            console.log("Total Sum Two Threads: ", resultTwoThreads);

            const startFourThreads = Date.now();
            const resultFourThreads = await sumArray.countSum(4, randomArr);
            const endFourThreads= Date.now();
            console.log(`Execution time Four Thread: ${endFourThreads - startFourThreads} ms`);
            console.log("Total Sum Four Threads: ", resultFourThreads);

            assert.equal(resultTwoThreads, resultFourThreads);
            assert.approximately(endFourThreads - startFourThreads,
                endTwoThreads - startTwoThreads, 20, "2 or 4 threads time execution floats within 40 ms delta");
        });
    });
});