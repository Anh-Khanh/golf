
// function joinWithCharacter(array, charactor) {
//   var arr= array.concat(charactor)
//    return  arr.join(" - ");
  
// }


// function joinWithCharacter(array) {
//     return array[array.length -1]
// }
//  var array = ["Honda", "Mazda", "Mercedes"];
// console.log(joinWithCharacter(array));

// // Ví dụ khi sử dụng
let arr = ["HTML", "JavaScript", "CSS"];
function copySorted(arr){
    var a = arr.slice(0);
    return a;
}
let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)