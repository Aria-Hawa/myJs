// 建立一個存放選取結果的變數
let result = "";
// 取得送出按鈕
let myBtn = document.querySelector('#selectBtn');

// ↓ add by Aria on 2024.07.31
// 監聽按鈕是否被左鍵點擊
myBtn.addEventListener('click', function () {
    // 取得下拉式方塊
    let myCity = document.getElementById('city');
    // 使用迴圈，逐一檢查是否被選取 =>selected
    for (let i = 0; i < myCity.length; i++) {
        if (myCity[i].selected) {
            if (myCity[i].value == "") {
                result = "尚未選取縣市";
            } else {
                result = myCity[i].value;
            }
            break;  //add by Aria on 2024.07.31
        }
    }
    console.log(result);
});
// ↑ add by Aria on 2024.07.31  