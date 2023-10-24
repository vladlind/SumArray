const { Worker } = require("worker_threads");

let arr = [];
for (let i = 0; i < 1_000_000; i++) {
    arr.push(Math.floor(Math.random() * 100000));
}

let threadCount = 0;

if (process.argv.length === 2) {
    console.error('Expected at least one argument with Threads Count!');
    process.exit(1);
} else {
    threadCount = process.argv[2]
}

countSum(threadCount, arr).then(result => console.log(`Total Sum: ${result}`));

async function countSum(threadCount, arr) {
    const start = Date.now();
    const workerPromises = [];
    let increment = 0;
    for (let i = 1; i <= threadCount; i++) {
        workerPromises.push(createWorker(`Thread ${i}`, arr.slice(increment, i * arr.length / threadCount)));
        increment = i * arr.length / threadCount;
    }

    const thread_results = await Promise.all(workerPromises);
    const end = Date.now();
    console.log(`Execution time: ${end - start} ms`);
    return thread_results.reduce((acc, result) => acc + result, 0);
}

function createWorker(threadNumber, randomArrSlice) {
    return new Promise(function (resolve, reject) {
        const worker = new Worker("./Worker.js", {
            workerData: { threadName: threadNumber, array: randomArrSlice },
        });
        worker.on("message", (data) => {
            resolve(data);
        });
        worker.on("error", (msg) => {
            reject(`An error occurred: ${msg}`);
        });
    });
}

module.exports.countSum = countSum;
