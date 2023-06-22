var paragraph = "Sample paragraph - hello world everyone, life is beautiful, see you sometimes!";
var searchString = "my first ever ever very first world";

var keywords = searchString.split(" ");

/*if(keywordSearch(paragraph, keywords)) {
    console.log("\"Found some search results**");
}
else {
    console.log("**Can't find any results, try on Google!**")
}*/

/*function keywordSearch(fullText, keywords) {
    console.log(`Search for keywords "${keywords.toString()}" in "${paragraph}"`);
    let status = false;
    keywords.forEach((item)=> {
        if(fullText.indexOf(item) >=0) {
            status = true;
        }
    });
    //return status;
}*/
function keywordSearch(fullText, arrayOfkeywordsToSearch) {
    console.log(`Search for keywords "${arrayOfkeywordsToSearch.toString()}" in "${paragraph}"`);
    console.log("\r\n\n\n\t\tkeywords.length", arrayOfkeywordsToSearch.length);
    for(let i=0; i < arrayOfkeywordsToSearch.length; i++) {
        let keyword = arrayOfkeywordsToSearch[i];
        if(fullText.indexOf(keyword) >=0) {
            return true;
        }
    }
    return false;
    /*for(let item of keywords) {
        if(fullText.indexOf(item) >=0) {
            return true;
        }
    }
    return false;
    */
}




function exactMatchSearch(fullText, textToSearch) {
    return fullText.indexOf(textToSearch) >=0;
}



var products = [];
products.push({
    id:101,
    name:"Product#1",
    expiry:"12-Dec-2021"
});

products.push({
    id:102,
    name:"Product#2",
    expiry:"12-Dec-2021"
});

products.push({
    id:103,
    name:"Product#3",
    expiry:"12-Dec-2021"
});

var clonedProducts = [...products];

for(let productIndex in products) {
    //clonedProducts.price = Math.random() * 10000;
    //product.name = product.name.replaceAll("Product", "Ham burger");
    console.log(products[productIndex]);
}

console.log(`\u{1F60D}`);

var text = "A String is a String";

var updateSentence = text.replace("String", "Character")
console.log(updateSentence);

console.log(text.replaceAll("String", "Character"));


//var student1 =  getStudentFromServer();


class Student {
    constructor(id, firstName, lastName) {
        this.id = id,
        this.firstName = firstName,
        this.lastName = lastName
    }

    toString() {
        return this.id;
    }
}

var student1 = new Student("100002", "Dav", "Jansen");
var student2 = new Student("100002", "Harry", "Page");

var output = JSON.stringify(student1) + "; " + JSON.stringify(student2);

console.log(output);

saveRecordToDatabase(student1);
saveRecordToDatabase(student2);

function saveRecordToDatabase(student) {
    //save record to database
    console.log("Student record saved to database for studentId:" + JSON.stringify(student));
}


const student = {
    "id": "100001",
    "firstName": "Tiger",
    "lastName": "Wild",
    toString() {
        return this.address
    }
}

//console.log("student", student);

/*for(let key in student) {
    //console.log("key is ", key ," AND value is ", student[key]);
    console.log(key, student[key]);
}*/



const user1 = {
    name: 'John',
    id: "101",
    /*toString() {
        return this.name
    }*/
}

const user2 = {
    name: 'John',
    id: "101",
    /*toString() {
        return this.name
    }*/
}

console.log(user1 + ", " + user2);



const user = {
    name: 'John'
}
console.log("User: " + user)