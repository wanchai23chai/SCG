export function findNumberSeries(listOfQuestion){
  let value = {}  
  listOfQuestion.forEach((num, index) => {
    let term = Math.pow(index+1,2)-(index+1)+3
    if(!parseInt(num)){
      value[num] = term
    }
    return term
  })
  return value
}