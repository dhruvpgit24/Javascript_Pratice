function occ(str) {
    occorences = {};
    str.split("").forEach(elem => {
        if (occorences.hasOwnProperty(elem) === false) {
            occorences[elem] = 1;
        }
        else {
            occorences[elem]++;
        }
    });
    return occorences;
}
console.log(occ("rudra te khai lidhu to av niche"));