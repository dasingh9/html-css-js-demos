function getDayName(dayIndex) {
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return days[dayIndex];
}

var date = new Date();
console.log("Current Date:", date);
console.log("Day Index:", date.getDay())
console.log("Day name:", getDayName(date.getDay()))

console.log("Offset:", date.getTimezoneOffset()/60);