var randomBodyParts = ["нога", "рука", "голова"];
var randomAdjectives = ["смердюча", "негарна","прикольна", "смішна"];
var randomWords = ["черепаха", "змія", "птаха", "муха", "собака"];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
    randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
    randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

var randomInsult = ["У тебе", randomBodyPart, "наче", randomAdjective, randomWord + "!!!"].join(" ")

randomInsult;

// 2

var randomBodyParts = ["нога", "рука", "голова"];
    randomAdjectives = ["смердюча", "негарна","прикольна", "смішна"];
    randomWords = ["черепахи", "змії", "птахи", "мухи", "собаки"];
    randomAnimalsBodyParts = ["брюхо", "клюв", "морда", "лапа"];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
    randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
    randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
    randomAnimalsBodyPart = randomAnimalsBodyParts[Math.floor(Math.random() * randomAnimalsBodyParts.length)];

var randomInsult = ["У тебе", randomBodyPart, "більш", randomAdjective, "ніж", randomAnimalsBodyPart, "у", randomWord + "!!!"].join(" ")

randomInsult;

// 4

var array = [3, 2, 1];

var newArray = array.join(" більше, ніж ");

newArray;

