/**
 * 分割代入
 */

//  const myProfile = {
//    name: 'kawa',
//    age: 3,
//  };
//  const { name , age } = myProfile;
//  const message = `名前は${name},年齢は${age}`;
//  console.log(message);

/**
 * デフォルト値
 */
// const sayHallo = (message = `こん`) =>{
//   console.log(`aaa   ${message}`);
// }
// sayHallo();

/**
 * スプレッド構文
 */
// //配列を点かい
// const array = [1, 5];
// console.log(array);
// console.log(...array);

// array[0],array[1]・・・と同じ意味っぽい

// //配列の結合
//  const arr1 = [0, 1];
//  const arr2 = [2, 3];

//  const arr3 = [...arr1, ...arr2];  //配列を結合
// //  console.log(arr3);

//  //値自体を表すイメージなので、配列名（=参照先）のコピーとは異なり動きになる
//  const arr4 = arr1;
//  console.log(arr4);
//  arr1.push(3);

/**
 * mapやfilter
 */

// const nameArr = ["tanak", "kanada", "yokohama",];

//  for (let i = 0 ; i < map.length ; i++){
//    console.log(map[i]);
//  }

//mapは配列を簡単に記述できる、第一引数＝value、第二引数＝格納指数
// nameArr.map((name, index) => console.log(`${index}番目は、${name}です`));

// const numArr =[0, 1, 2]
// const numoddArr = numArr.filter((number) => {
//   return number % 2 === 1;
// })
// console.log(numoddArr);

// const nameArr = ["tanak", "kanada", "yokohama",];

// const newNameArr = nameArr.filter((name) => {
//   return name === "kanada";
// })

// newNameArr.map((name, index) => {
//   console.log(`${name}です`);
// })

/**
 * 三項演算子
 */
// const val1 = true;
// const val2 = val1 ? "correct" : "fuck";
// console.log(val2);

/**
 * アロー関数
 */
// const a = (関数内に使用する引数、複数で可能)  => {
// 　関数
// }
