const { parentPort, workerData } = require("worker_threads");

let localSum = 0;

for (let i = 0; i < workerData.array.length ; i++ ) {
    localSum += workerData.array.at(i);
}
console.log(`${workerData.threadName} local sum: ${localSum}`);

parentPort.postMessage(localSum);