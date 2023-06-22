function getUniqueCities(allCitiesArray) {
    const set = new Set(allCitiesArray);
    return [...set];
}

//Set
let allCitiesArray = ["Auckland", "Wellington","Auckland", "Wellington","Auckland", "Wellington","Hamilton"];
let uniqueCitiesSet = new Set(allCitiesArray);

console.log('array:', allCitiesArray);
console.log('set:', uniqueCitiesSet);

uniqueCitiesSet.add("Christchurch");
uniqueCitiesSet.add("Napier");

console.log("------------------------------------------------------------");

for(let city of uniqueCitiesSet) {
    console.log(city);
}

var uniqueCitiesArray = getUniqueCities(allCitiesArray);

let uniqueArray = getUniqueCities(allCitiesArray);
console.log("uniqueArray:", uniqueArray);
console.log("allCitiesArray:", allCitiesArray);