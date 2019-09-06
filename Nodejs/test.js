// function findDiff(numberList, questList) {
//   var diff = {}
//   var ans = 0
//   if (numberList.length == 0) {
//     return 0
//   } else if (numberList.length == 1) {
//     return numberList[0]
//   } else if (numberList.length > 1) {
//     numberList.forEach((element, index) => {
//       if (index < numberList.length && (index + 1) < numberList.length) {
//         let diffVal = numberList[index + 1] - numberList[index]
//         if (diffVal in diff) {
//           diff[diffVal] += 1
//         } else {
//           diff[diffVal] = 0
//         }
//       }

//     });
//     if (Object.keys(diff).length > 0) {
//       let cons = findDiff(Object.keys(diff), [])

//       return cons
//     } else {
//       return Object.keys(diff)[0]
//     }
//   }
// }
var t = 'X, 5, 9, 15, 23, Y, Z'
t = t.replace(new RegExp(' ', 'g'), '').split(',')
let ans = []

// var ans = t.map((element,index) => {
//   if ((index + 1) < t.length) {
//     if(!parseInt(element)){
//       return 
//     }
//   }
// });
console.log(ans)