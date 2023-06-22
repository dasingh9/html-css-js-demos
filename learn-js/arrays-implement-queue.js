var stack = [];

stack.push("Hello");
stack.push("How are you!");
stack.push("Good to hear that");

console.log("Queue has these elements:", stack );
let index = 0;

console.log("----------------------------------------------");

while(index < stack.length) {
    console.log(stack[index]);
    //index++;
}

console.log("----------------------------------------------");

//process the queue
while(stack.length > 0) {
    const message = stack.shift();
    console.log("Process message:" + message + "; Queue size:" + stack.length);
}
console.log("Queue has been processed:", stack);
