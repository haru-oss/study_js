// alert("おっす！")
// ブラウザにアラートを表示

// ＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃



// 変数は、後から変更が可能、　　let 　　　　const
// let count = 0 ;
// count =90;

// console.log(count);
// 変数は、後から変更が可能


// ＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃


// 文字列の結合に、算出演算子が使える


// const shimotsu=("haruya");

// console.log(shimotsu);

// const greeting=("こんにちは");


// console.log(shimotsu +   " " + "さん" + " " +  ""+ greeting+ " " + "!");


// ＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃

// const syutyou=(`俺の
// 話を
// 聞け`);

// console.log();


// console.log("じゃあ\nまたね");
    






// ＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃



// 同じ数字を演算子で足し算した場合
// 例　　　　"3" +  3

// この場合は、文字列として扱われる。

// const no=(3);

// const st=("3.5");


// console.log(no+st);


// ３＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃



// let clucresult;

// clucresult= Number(st) + no;


// console.log(clucresult);




// clucresult= parseInt(st) + no;
// console.log(clucresult);


// clucresult= Number(st) + no;
// console.log(clucresult);

// だが、Number（）を使用すれば、int型として扱うように設定ができる




// 配列

// const array =["shimotsu","yuika","haruya","suzu","sachiko",4,14,23,50];


// console.log(array[0]);


// // 


// console.log("my first commit")




// オブジェクト　

// const  coffee ={
//     name : "リッチブレンド",
//     price: "800",
//     good: true,
//     place: "コモディ",
    
// };

//キーとバリューのセット・・・・プロパティと呼ぶ


// アクセス

// console.log(coffee.name);

// // 変更
// coffee.name = ("モーニングブレンド")

// // 変更後、

// console.log(coffee.name);


// プロパティの追加
// 存在しないプロパティも追加できる

// coffee.barista = "shimotsu"

// console.log(coffee);

// console.log(typeof(coffee));


// function add(a,b) {
//     console.log(a + b);
// }

// add(4,3);


// return文の活用

function add(a,b) {
    return(a + b);
}

const one_year=add(6,6);

console.log(one_year);


