
'use strict';
// 問題集リスト
const questions = [
    'JavaScript',
    'document',
    'window',
    'getElementById',
    'getElementByClassName',
    'addEventListener',
    'Python',
    'def',
    'function',
    'createtable',
    'insertinto',
    'output.innerHTML',
    'while',
    'for',
    'forEach',
    '()=>',




];

const entered = document.getElementById('entered');
const remained = document.getElementById('remained');
const inputText = document.getElementById('inputText')
const game = document.getElementById('game');
const message = document.getElementById('message');
const replayBtn = document.getElementById('replayBtn');

let remainedTextWords = remained.textContent.split('');
let enteredTextWords = [];
let currentKey;
let currentText;

// 新しい問題文をランダムにセットする関数
const setQuestion = () =>{
    // 配列「questions」の中から、ランダムで問題文を一つ選ぶ
    currentKey = Math.floor(Math.random()*questions.length);
    currentText = questions[currentKey];

    // 一度選ばれた問題は配列から削除
    questions.splice(currentKey,1);

    // 配列の名前.splice(削除したい要素の位置(◯番目)、この位置から何個の要素を削除するか);
    console.log(questions);

    // 現在の問題文をリセットして、新しい問題文を表示させる
    // 画面に新しい問題文をセット
    entered.textContent = '';
    remained.textContent = currentText;

    // これまでに入力されたフォームの値をリセット
    inputText.value ='';

    // 「入力済みの文字」「未入力の文字」の配列の中身をリセット
    enteredTextWords = [];
    remainedTextWords = currentText.split('');
};
setQuestion();

document.addEventListener('input',(e)=>{
    if(remainedTextWords[0] === e.data){
    // 入力済みの配列の最後に1文字追加
    enteredTextWords.push(remainedTextWords[0]);
    // 未入力文字の配列から1文字削除
    remainedTextWords.shift();

    // 入力済テキスト＆未入力テキストを連結して画面表示
    entered.textContent = enteredTextWords.join('');
    remained.textContent = remainedTextWords.join('');

    // 全ての文字が正しく入力されたら新しい問題文をセット
    if(remainedTextWords.length <= 0){
        if(questions.length <= 0){
            game.classList.add('hidden');//ゲーム画面を非表示
            message.classList.remove('hidden');//終了メッセージ表示
        }else{
            setQuestion();//新しい問題文をセット
        }
        

        }
      
    }
});
// もう一度プレイするボタン
replayBtn.addEventListener('click',()=>{
    window.location.reload();
})

