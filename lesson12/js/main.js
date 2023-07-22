// "use strict";

// const numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");

// const seriesDB = {
//   count: numberOfSeries,
//   series: {},
//   actors: {},
//   genres: [],
//   private: false,
// };

// for (let i = 0; i < 2; i++) {
//   const a = prompt("Oxirgi ko'rgan serial?"),
//     b = prompt("Nechi baxo berasiz?");

//   if (a != null && b != null && (a != "") & (b != "")) {
//     seriesDB.series[a] = b;
//     console.log("to'g'ri");
//   } else {
//     console.log("Qayta kiriting");
//     i--;
//   }
// }

// if (seriesDB.count < 5) {
//   console.log("Kam serial ko'ribsiz");
// } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
//   console.log("Siz klassik tomashabin ekansiz");
// }
// else if (seriesDB.count > 10){
//    console.log("Siz serialchi zvezda ekansiz");
// }
// else{
//    console.log("xato");
// }

// console.log(seriesDB);

let numberOflesson;

function startApp() {
  numberOflesson = +prompt("Nechta dars ko'rdindiz?", "");

  while (
    numberOflesson == "" ||
    numberOflesson == null ||
    isNaN(numberOflesson)
  ) {
    numberOflesson = +prompt("Nechta dars ko'rdindiz?", "");
  }
}
startApp();

const lesson = {
  count: numberOflesson,
  teacher: {},
  part: {},
  type: {},
  private: false,
};

function series() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Oxirgi ko'rgan darsingiz"),
      b = prompt("Nechi bal berasiz?");

    if (a != null && b != null && a != "" && b != "") {
      lesson.teacher[a] = b;
      console.log("togri");
    } else {
      console.log("qayta");
      i--;
    }
  }
}

// series();

function detectLevel() {
  if (lesson.count < 5) {
    console.log("Ko'proq dars ko'ring");
  } else if (lesson.count >= 5 && lesson.count < 10) {
    console.log("O'rtacha dars qilar ekansiz");
  } else if (lesson.count > 10) {
    console.log("Siz dars ko'rish bo'yicha zvezda ekansiz");
  } else {
    console.log("xato");
  }
}

function showDB(hidden) {
  if (!hidden) {
    console.log(lesson);
  }
}

showDB(lesson.private);

function writeTypes() {
  for (let i = 0; i <= 2; i++) {
    const genre = prompt(`Yaxshi ko'rgan janringiz ${i + 1}`);
    lesson.type[i]=genre;
  }
}

writeTypes();
