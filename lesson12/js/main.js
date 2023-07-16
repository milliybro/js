"use strict"

const numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");

const seriesDB = {
   count: numberOfSeries,
   series: {},
   actors: {},
   genres: [],
   private: false,
};

const a= prompt("Oxirgi ko'rgan serial?"),
b= prompt("Nechi baxo berasiz?"),
c= prompt("Oxirgi ko'rgan serialingiz?"),
d= prompt ("Nechi baxo berasiz?");

seriesDB.series[a] = b;
seriesDB.series[c] = d;

console.log(seriesDB);