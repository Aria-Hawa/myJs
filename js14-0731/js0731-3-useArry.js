let result = "";
let myBtn = document.querySelector('#selectBtn');

// 監聽click之後要執行的動作用匿名函式或是箭頭函式)
myBtn.addEventListener('click', function () {
    // 取得下拉式方塊
    let myCity = document.getElementById('city');
    for (let i = 0; i < myCity.length; i++) {
        if (myCity[i].selected) {
            if (myCity[i].value == "") {
                result = "尚未選取縣市";
            } else {
                result = myCity[i].value;
            }
            break;
        }
    }
    console.log(result);
});
