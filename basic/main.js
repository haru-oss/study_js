
// 問題文
const question1 = "ゲーム市場、最も売れたゲーム機は次のどれ" ;


// 選択肢

const answers = [
    "プレステ",
    "任天堂DS",
    "任天堂スイッチ",
    "ファミコン",
];

// これの長さ
// let AnsLength = (answers.length);


// クイズの答え

const correct = "任天堂DS" ;

const $button = document.getElementsByTagName("button");





// let AnsLength = (answers.length);



// $button[0].textContent
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];

// ↑↑を注目！！！　　　　　　　　　下の処理を元々この文で行なっていた。


// クイズの問題を選択していぎ
const setupQuiz = () => {
    document.getElementById("js-question").textContent = question1;
    let buttunIndex = 0;
    let buttunLength = $button.length;
    while(buttunIndex < buttunLength){
        $button[buttunIndex].textContent = answers[buttunIndex];
        buttunIndex++}
        }    
        
setupQuiz();


// let buttunLength = $button.length
// let buttunIndex = 0;
// while(buttunIndex < buttunLength){
    
//     $button[buttunIndex].textContent = answers[buttunIndex];
//     buttunIndex++;

// }




const $ButtonLength = $button.length
let buttunIndex = 0 ;


while (buttunIndex < $ButtonLength) {
    
    $button[buttunIndex].addEventListener('click', (e) => {
        if(correct === e.target.textContent){
            window.alert("正解！")
    
        }else {
            window.alert("不正解！")
    
        }
    
    })    
    buttunIndex ++;
};

// ///////////////////////////////////////////////////////////////////    
// ///////////////////////////////////////////////////////////////////    
// $button[1].addEventListener('click', (e) => {
//     if(correct === e.target.textContent){
//         window.alert("正解！")

//     }else {
//         window.alert("不正解！")

//     }

// })
// // ///////////////////////////////////////////////////////////////////    


// $button[2].addEventListener('click', (e) => {
//     if(correct === e.target.textContent){
//         window.alert("正解！")

//     }else { 
//         window.alert("不正解！")

//     }

// })

// // ///////////////////////////////////////////////////////////////////    

// $button[3].addEventListener('click', (e) => {
//     if(correct === e.target.textContent){
//         window.alert("正解！")

//     }else {
//         window.alert("不正解！")

//     }

// })
