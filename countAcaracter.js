let sentence = "Bonjour, chers candidat comment vous allez aujourd'hui";
function countAcaracter() {
    let count = 0;
    for (let i = 0; i < sentence.length; i++)
        if (sentence[i] === "a") {
            count += 1;

        }
    return count

}
console.log("Le nombre d'occurrences de 'a' est : " + countAcaracter());
module.exports = countAcaracter;