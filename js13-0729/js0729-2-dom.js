// 取得元素節點(node)
// 根據name屬性取得元素內容
// let myDrinks = document.getElementsByName('drinks');
// console.log(myDrinks);

// for (let i = 0; i < myDrinks.length; i++) {
//     console.log(myDrinks.item(i).value);
// }

// 取得勾選項目內容
// 1.找到btn按鈕
let myBtn = document.querySelector('#btn');
// 2.監聽btn按鈕是否被按了(click => 左鍵按下的事件)
myBtn.addEventListener('click', function(){
    let arrResult = [];     //建立一個空陣列，存放勾選項目
    let arrResultNot = [];  //建立一個空陣列，存放沒被勾選的項目
    let myDrinks1 = document.getElementsByName('drinks');
    // 逐一檢查是否被勾選(checked =>勾選)
    for (let i = 0; i < myDrinks1.length; i++) {
        // 有被勾選
        if (myDrinks1[i].checked) {
            arrResult.push(myDrinks1[i].value);
        }
        
        // 沒被勾選
        if(!myDrinks1[i].checked){
            arrResultNot.push(myDrinks1[i].value);
        }
    }
    console.log(arrResult);
    console.log(arrResultNot);
});