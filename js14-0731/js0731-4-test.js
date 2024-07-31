let myBtn = document.querySelector('#btn');
myBtn.addEventListener('click', function () {
    let arrResult = [];
    let arrResultNot = [];
    let myDrinks1 = document.getElementsByName('drinks');
    for (let i = 0; i < myDrinks1.length; i++) {
        if (myDrinks1[i].checked) {
            arrResult.push(myDrinks1[i].value);
        } else {
            arrResultNot.push(myDrinks1[i].value);
        }
    }

    // 取得顯示資料的位置(我有一個div區域)
    let getDiv = document.getElementById('showData');

    // 顯示資料在document上
    // 若有被勾選
    // 被勾選str1
    let str1 = "";
    if (arrResult.length > 0) {
        str1 = '<div><ul class="Checked">被勾選的飲料';
        // 被選取的i
        for (let i = 0; i < arrResult.length; i++) {
            str1 = str1 + `<li>${arrResult[i]}</li>`;
        }
        // 最後關閉ul關閉div (不能寫在迴圈內)
        str1 = str1 + '</ul></div>';
        getDiv.innerHTML = str1;
    }

    // 若沒有被勾選
    // 沒被勾選
    let str2 = "";
    if (arrResultNot.length > 0) {
        str2 = '<div><ul class="noChecked">沒被勾選的飲料';
        // 沒被選取的i
        for (let i = 0; i < arrResultNot.length; i++) {
            str2 = str2 + `<li>${arrResultNot[i]}</li>`;
        }
        str2 = str2 + '</ul></div>';
        getDiv.innerHTML = str1 + str2;
    }


    // textContent和innerHtml的差異
    // 用textContent的問題在於，會把html的標籤當成文字給顯示出來
    // getDiv.textContent = '<h1>test1</h1>'; 
    // 顯示不含html標籤，要用innerHtml
    // getDiv.innerHTML = '<h1>test1</h1>';

});

