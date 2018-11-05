const fs = require('fs');
const data = require('../static/data.json');

function minifyData(data) {
  return JSON.stringify(data.map(el => ({
    'Cand_Name': el['Cand_Name'],
    'Cand_Party_Affiliation': el['Cand_Party_Affiliation'],
    'Cand_Office': el['Cand_Office'],
    'Cand_State': el['Cand_State'],
    'Cand_City': el['Cand_City'],
    'Cand_Incumbent_Challenger_Open_Seat': el['Cand_Incumbent_Challenger_Open_Seat'],
    'Total_Contribution': el['Total_Contribution']
  })));
}

function convertToHashMap(arr) {
  let hash = {};
  arr.forEach((el) => {
    hash[el.Cand_Name] = el;
  });
  return JSON.stringify(hash);
}

// fs.writeFileSync('hash.json', convertToHashMap(data))

// const hash = require('./hash.js')
// console.log(hash['ASHBY, KEN'])
