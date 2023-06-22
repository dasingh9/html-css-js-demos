const products = [
    { id: 0, title: "Ladies Tee", price: 25.95, category: 'Zebra' },
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' },
    { id: 4, title: "Ladies Tee", price: 25.95, category: 'Shirts' }
]

/*
function getDiscountedPrice(originalPrice) {
    let discount = originalPrice * .05; //5%
    return (originalPrice - discount).toFixed(2);
}

let titles = products.map(product => product.title)
let h2titles = products.map(product => '<h2>' + product.title + '</h2>')
let raisedPrices = products.map(product => ({ ...product, price: product.price + 5 }))

let productsWithDiscountedPrice = products.map(product => ({ ...product, discountedPrice: getDiscountedPrice(product.price) }))

//console.log(titles) // [ 'Sleeveless Tee', "Men's Hoodie", 'Denim Jeans', 'Ladies Tee' ]
//console.log(h2titles) // [ '<h2>Sleeveless Tee</h2>', "<h2>Men's Hoodie</h2>", '<h2>DenimJeans</h2>', '<h2>Ladies Tee</h2>' ]
//console.log(raisedPrices) // all prices increased by $5
//console.log(productsWithDiscountedPrice);
*/

function compareProductsByTitle(a, b) {
    if (a.title < b.title) {
        return -1;
    }
    if (a.title > b.title) {
        return 1;
    }
    return 0;
}

function compareProductsByField(product1, product2, sortField) {
    if (product1[sortField] < product2[sortField]) {
        return -1;
    }
    if (product1[sortField] > product2[sortField]) {
        return 1;
    }
    return 0;
}


function sortProductsByPrice(products) {
    //products.sort((product1, product2) => product1.price - product2.price)
    products.sort((product1, product2) => compareProductsByField(product1, product2, "price"));
}

function sortProductsByTitle(products) {
    products.sort((product1, product2) => compareProductsByField(product1, product2, "title"));
}

function sortProductsByCategory(products) {
    products.sort((product1, product2) => compareProductsByField(product1, product2, "category"));
}

sortProductsByPrice(products);
//sortProductsByTitle(products);
//sortProductsByCategory(products);

console.log(products) // original array is modified to new low-high price sorting order: 1,4,3,2

/*products.sort( (p1, p2) => p1.title > p2.title ? 1 : -1 )
console.log(products) // original array is modified to new title sorting order: 3,4,2,1
const numbers = [4,8,1,5,66,23,41]
console.log( numbers.sort() ) // [ 1, 23, 4, 41, 5, 66, 8 ] : string comparisons
console.log( numbers.sort((num1, num2) => num1 - num2) ) // [ 1, 4, 5, 8, 23, 41, 66 ]
*/