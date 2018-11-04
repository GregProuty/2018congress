const fs = require('fs');
const data = require('../static/data.json')


// needs to go to different file // for build scripts 
function minifyData(data) {
  return JSON.stringify(data.map((el,i) => ({
    'Cand_Name': el['Cand_Name'],
    'Cand_Party_Affiliation': el['Cand_Party_Affiliation'],
    'Cand_Office': el['Cand_Office'],
    'Cand_State': el['Cand_State'],
    'Cand_City': el['Cand_City'],
    'Cand_Incumbent_Challenger_Open_Seat': el['Cand_Incumbent_Challenger_Open_Seat'],
    'Total_Contribution': el['Total_Contribution']
  })))
}

function convertToHashMap(arr) {
  let hash = {};
  // arr = JSON.stringify(arr)
  console.log(Array.isArray(arr), typeof arr)
  arr.forEach(el => {
    hash[el.Cand_Name] = el;
  })
  // console.log(hash)
  return JSON.stringify(hash)
}


// fs.writeFileSync('hash.json', convertToHashMap(data))

// const hash = require('./hash.js')
// console.log(hash['ASHBY, KEN'])