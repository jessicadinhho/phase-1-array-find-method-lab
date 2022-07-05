// code your solution here
/*
function superbowlWin(arr) {
    let found = arr.find(arr => arr.result === "W");
    if(found.result === "W"){
          return found.year
    }else {
        found = undefined
        return found
    }
  }
 */ 
/*
  function superbowlWin(arr) {
      let didWin
      let found = arr.find(arr => arr.result === "W");
      if (found.result === "W"){
          didwin = found.year
      }
      return didWin
  }
  */
  function superbowlWin(arr) {
    let found 
    if(arr.find(arr => arr.result === "W")){
          found = arr.find(arr => arr.result === "W")
        return found.year
    }else {
      return found = undefined
    }
  }