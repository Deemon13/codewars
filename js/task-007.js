const findShort = function (s){
    const arr = s.split(' ');
    let shortestWord = arr[0];
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].length < shortestWord.length) {
        shortestWord = arr[i];
      }
      
    }
    return shortestWord.length;
 }

 console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
 console.log(findShort("turns out random test cases are easier than writing out basic ones"));
 console.log(findShort("Let's travel abroad shall we"));