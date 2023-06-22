var products = [
    {id:"101", productName:"Ham burger", price:20, expiry: new Date("10 Apr, 2023"), containsMeat:true},
    {id:"102", productName:"Veggi X1", price:5, expiry: new Date("11 May, 2023"), containsMeat:false},
    {id:"103", productName:"Veggi X2", price:21, expiry: new Date("12 Oct, 2023"), containsMeat:false},
    {id:"104", productName:"Product4", price:28, expiry: new Date("11 Jun, 2023"), containsMeat:true},
    {id:"105", productName:"Product5", price:100, expiry: new Date("13 Jul, 2023"), containsMeat:true},
    {id:"106", productName:"Product6", price:202, expiry: new Date("14 Oct, 2023"), containsMeat:true},
];

function isExpiredProduct(product) {
    return product.expiry < Date.now()
}

function isCustomerEligibleForPremiumBenefit(customer) {
    return customer.registeredDate < Date.now(-6) && customer.points > 13000 && customer.purchasesLast3Months > 8000;
}

//get a new filtered list of products from products array
var expiredProducts = products.filter(product => isExpiredProduct(product));
var nonVegProducts = products.filter(p => p.containsMeat==true);
var cheapProducts = products.filter(p => p.price >30);
var hamBurgerUsingFilter = products.filter(product => product.id == 101);
var productsUsingKeywordSearch = products.filter(product => (product.productName.indexOf('Veggi')<0));
var veggiX1 = products.find(product => product.productName == "Veggi X1");

console.log(expiredProducts);