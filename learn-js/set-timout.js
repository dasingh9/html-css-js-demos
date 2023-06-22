function printMessage(msg) {
    console.log(`Message: ${msg}`)
}

//function to be executed, then milliseconds to delay, then arguments for function
console.log("Going to schedule a function to run after 3 seconds");


var minutes = 5 * 60 * 1000;

setTimeout(printMessage, minutes, 'prints after 3 sec')     // Message: prints after 3 sec
setTimeout(printMessage, 2000, 'prints after 2 sec')        // Message: prints after 2 sec
setTimeout(printMessage, 1000, 'prints after 1 sec')        // Message: prints after 1 sec

console.log("Good job, you are very good at scheduling");

