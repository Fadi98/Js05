function average() {
    const numbers = [20, 12, 8, 9];
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];

    }
    return sum / numbers.length;
}
console.log(average());

module.exports = average;