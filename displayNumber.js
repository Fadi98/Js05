const tableaux = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function displayNumber() {
    for (let i = 0; i < tableaux.length; i++) {
        console.log(tableaux[i]);
    }
}
displayNumber();
module.exports = displayNumber;