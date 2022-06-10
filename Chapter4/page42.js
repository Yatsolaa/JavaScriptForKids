// 1. playing fifa
var scores = {};
scores["Andrii"] = 0;
scores["Denys"] = 0;
scores["Ruslan"] = 0;
scores["Artem"] = 0;

//andii - denys 3:2
scores.Andrii += 3;
scores.Denys += 2;

//artem - ryslan 3:1
scores.Artem += 3;
scores.Ruslan += 1;

//denys - ryslan: 2:1
scores.Denys += 2;
scores.Ruslan += 1;

//andrii - artem: 2:3
scores.Andrii += 2;
scores.Artem += 3;

scores;

// 2. find "123"

var myCrazyObject = {
"name": "Нелепый объект",
"some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
"random animal": "Банановая акула"
};

myCrazyObject["some array"][2].number;