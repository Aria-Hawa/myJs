// 取得元素節點(node)

// 根據id屬性
let myjs = document.getElementById("js");
console.log(myjs);      //console結果是<li></li>這串object
console.log(typeof(myjs));
console.log(myjs.textContent);   //出現結果是id內的文字

// 根據html屬性
let myLi = document.getElementsByTagName('li');
console.log(myLi);
console.log(typeof myLi);       //發現這個結果是個陣列
console.log(myLi.item(1).textContent);      //取出index: 1的內容
console.log(myLi.item(0).textContent);      //取出index: 0的內容
console.log(myLi[2].textContent);           //取出index: 2的內容

// 顯示所有的li
for(let i = 0; i < myLi.length; i++){
    console.log(myLi[i].textContent);
    console.log(myLi.item(i).textContent);
}

// 使用querySelector會把h1本人標籤也代出來
console.log('--用querySelector--');
console.log(document.querySelector('h1'));
console.log('--用querySelector().textContent--');
console.log(document.querySelector('h1').textContent);
// 用getElementsByTagName的結果是一個collection
console.log('--用getElementsByTagName--');
console.log(document.getElementsByTagName('h1'));
console.log(document.getElementsByTagName('h1').item(0).textContent);


// 根據class屬性
let mySubject = document.getElementsByClassName('subject');
console.log(mySubject);     // 也是一個陣列物件(集合物件)

for(let i = 0; i < mySubject.length; i++){
    console.log(mySubject[i].textContent);
    console.log(mySubject.item(i).textContent);
}

// 指定值的取得也可以使用id名稱呼叫(class內的哪個id)
console.log(mySubject['html'].textContent);
console.log(mySubject['css'].textContent);
console.log(mySubject['js'].textContent);

// 取得id#p1的內容
console.log(document.getElementById('p1').textContent);
console.log(document.querySelector('#p1').textContent);

// 取得li子元素的段落p
console.log(document.querySelectorAll('li>p'));
// 「我是div中的段落」對於li來說是孫元素了
console.log(document.querySelectorAll('li>div>p'));