var count = 0;

function makeApiCall() {
    console.log("Api call made at ", new Date());
}

let tickId = setInterval( () => {
        makeApiCall();
        count++;
        if(count == 10) {
            clearInterval(tickId);
            console.log("Cleared Interval");
        }
    }, 
    1000
);

setTimeout( () => clearInterval(tickId), 10*1000 ) // ticking stops after 10s