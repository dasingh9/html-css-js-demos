const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const mainFunciton = async () => {
    for(let i=0; i<10; i++) {
        await sleep(1000);
        var response = await(await fetch('https://reqres.in/api/users')).json();
        //console.log(response.data);
        console.log(new Date());

        console.log("Index:", i);
    }
}

mainFunciton();

console.log("Hello1")
console.log("Hello2")
console.log("Hello3")

