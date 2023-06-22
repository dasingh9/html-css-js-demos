//demo 1: uncomment to see the output
/*function makeAdder(x) { // function factory: bundles value of x into the scope of adder
    return function adder(y) { // closure function 'adder' now has access to both x and y when created
            return x + y;
        };
    }
    const add5 = makeAdder(5); // sets x to 5, even when adder function is returned and called
    console.log( add5(10) ) // x is still 5 and y is 10, result is 15
    
    const adder = makeAdder(1000); 
    console.log( adder(50) ) // x is still 5 and y is 10, result is 15

*/

//demo 2
function makeHeading(hTag, style, color) { // every call to makeHeading could have different values for hTag
    return function (title) { //unnamed closure function, can access value of hTag when created
        return `<${hTag}>${title}</${hTag}>`
    }
}

function makeH1Heading(title) { // every call to makeHeading could have different values for hTag
    return `<h1>${title}</h1>`
}

function makeH2Heading(title) { // every call to makeHeading could have different values for hTag
    return `<h2>${title}</h2>`
}

function createHeading(htag, title) { // every call to makeHeading could have different values for hTag
    return `<${htag}>${title}</${htag}>`
}

console.log(createHeading("h1", "My website main header1"));
console.log(createHeading("h1", "My website main header2"));
console.log(createHeading("h1", "My website main header3"));
console.log(createHeading("h1", "My website main header4"));
console.log(createHeading("h2", "My website sub header"));
console.log(createHeading("h3", "My website sub header"));

const getH1 = makeHeading('h1')         // sets hTag to h1, creates new instance of closure in getH1
console.log(getH1('Heading 01'))        // sets title to Heading 01 inside <h1>: <h1>Heading 01</h1>
console.log(getH1('Heading 02'))        // sets title to Heading 02 inside <h1>: <h1>Heading 02</h1>
console.log(getH1('Heading 03'))        // sets title to Heading 03 inside <h1>: <h1>Heading 03</h1>
console.log(getH1('Heading 04'))        // sets title to Heading 04 inside <h1>: <h1>Heading 04</h1>
console.log(getH1('Heading 05'))        // sets title to Heading 05 inside <h1>: <h1>Heading 05</h1>
console.log(getH1('Heading 06'))        // sets title to Heading 06 inside <h1>: <h1>Heading 06</h1>

