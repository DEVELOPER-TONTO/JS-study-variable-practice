//이자율계산
//이율이 연 20퍼
//이자율 거듭제곱 **

let 예금액 = 60000;

let 미래예금액 = 0;

if(예금액 >= 50000){
    미래예금액=예금액 * 1.20 ** 2;
}
else if(예금액 < 50000){
    미래예금액=예금액 * 1.15 * 1.15;
}

console.log(미래예금액);

//커피 리필계산
//커피의 3분의 2만큼 2번리필
//90ml에 첫리필은 60, 두번째는 40

let first = 360;
let total = 0;

total = first + (first * 2/3)+(first * 2/3 * 2/3);

console.log(total);

//커피 리필계산
//커피의 3분의 2만큼 무한 리필
//무한 등비 수열의 합

var se = 360;
var r = 2/3;
se = se/(1-r);
console.log(se);

//답이 1335일때
var count = 0;

document.querySelector('#send-answer').addEventListener('click',function(){
    var ans = document.querySelector('#answer').value;
    if(ans == '1335'){
        alert('정답입니다');
    }
    else if(ans != '1335'){
        ++count;
        alert('다시해 '+count+'번 실패'); 
    }
});


