const quiz = [
    {
        question1:'ゲーム市場、最も売れたゲーム機はどれ？',
        answers:["プレステ",
                 "任天堂DS",
                 "任天堂スイッチ",
                 "ファミコン",],
        correct:"任天堂DS",
    },
    {
        question1:'糸井重里が企画に関わった、任天堂のゲームといえば？',
        answers:["MOTHER2",
                 "スーパーマリオブラザーズ３",
                 "スーパードンキーコング",
                 "星のカービィ",],
        correct:"MOTHER2",
    },
    {
        question1:'ファイナルファンタジーⅣの主人公の名前は？',
        answers:["フリオニール",
                 "クラウド",
                 "ディーダ",
                 "セシル",],
        correct:"セシル",

    }
];

const quizlength = quiz.length;
let quizIndex = 0 ;














const $button = document.getElementsByTagName("button");
let buttunLength = $button.length;
// let AnsLength = (answers.length);



// $button[0].textContent
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];

// ↑↑を注目！！！　　　　　　　　　下の処理を元々この文で行なっていた。


// クイズの問題を選択していぎ
const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question1;
    let buttunIndex = 0;
    while(buttunIndex < buttunLength){
        $button[buttunIndex].textContent =quiz[quizIndex].answers[buttunIndex] ;
        buttunIndex++}
        }    
        
setupQuiz();



const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert("正解！");
        
    }else {
        window.alert("不正解！");
    }
    
    quizIndex ++ ;
    
    if(quizIndex < quizlength){
        // 問題数がまだあったらこちらを実行
        setupQuiz();
} else{
    window.alert('終了！');
    // 問題数がもうなかったらこちらを実行


}

};



let buttunIndex = 0 ;


while (buttunIndex < buttunLength) {
    
    $button[buttunIndex].addEventListener('click', (e) => {
        clickHandler(e)
    
    })  
    buttunIndex ++;
};

