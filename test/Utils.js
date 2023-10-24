function justOnesArray() {
    let randomArr = []
    for (let i = 0; i < 1_000_000; i++) {
        randomArr.push(1);
    }
    return randomArr;
}

function justMillionsArray() {
    let randomArr = []
    for (let i = 0; i < 1_000_000; i++) {
        randomArr.push(1000000);
    }
    return randomArr;
}

function randomIntArray() {
    let randomArr = []
    for (let i = 0; i < 1_000_000; i++) {
        randomArr.push(Math.floor(Math.random() * 100000));
    }
    return randomArr;
}

module.exports.justOnesArray = justOnesArray;
module.exports.randomIntArray = randomIntArray;
module.exports.justMillionsArray = justMillionsArray;