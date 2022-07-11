// let x = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31]
// x.sort(function(a,b){
//     return a-b;
// })
// console.log(x)

// -------------------------------------------------------
//  let max = 0;
//  let x = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31, 29]
//  for(i = 0; i < x.length; i++){
//     let number = x[i];
//      if(number>=x[i]){   
//         max = x[i]
//      }  

//  }
// console.log(max)
// ------------------------------------------------------
 let Array=[[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
 function LargeArray(Array){
     let rezult=[];
     for(i = 0; i < Array.length; i ++){
         let max = Array[i][0];
         for(j=0; j<Array[i].length; j++){
             let number = Array[i][j];
             if(number>=max){
                 max=number
             }
         }
         rezult.push(max)
     }
     return rezult
 }
 console.log(LargeArray(Array))