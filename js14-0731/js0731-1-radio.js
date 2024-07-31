// 取得送出按鈕(擇一做)
// let btn1 = document.getElementById('btn');
let myBtn = document.querySelector('#btn');

// 監聽按鈕是否被左鍵一下
myBtn.addEventListener('click',function () {
    let resulet = "";
    // 取得選擇的科目
    let subjects = document.getElementsByName('subject');
    // 使用迴圈逐一檢查是否被選取 =>checked
    for (let i = 0; i < subjects.length; i++){
        if(subjects[i].checked){
            // 將條件的值取出
            resulet = subjects[i].value;
            // 因為radio表單是單選，所以找到後就break
            break;
        }
    }
    console.log('科目:'+resulet);
});