(function (win, doc) {
    'use strict';

    /*
    O desafio de hoje será um pequeno projeto: um cronômetro!
    As regras para criação do cronômetro são as seguintes:
    1. Crie um arquivo index.html e adicione esse script a ele;
    2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
    Ele será o nosso cronômetro;
    3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
    4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
    cada segundo;
    5. Ao clicar em Stop, o cronômetro deve parar de contar;
    6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

    Utilize o atributo data-js para nomear o campo e os botões. Você pode
    usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
    dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
    */
   
    const $selectOp = doc.querySelector('[data-js="select"]');
    const $btnStart = doc.querySelector('[data-js="start"]');
    const $btnStop = doc.querySelector('[data-js="stop"]');
    const $btnReset = doc.querySelector('[data-js="reset"]');
    const $displayHour = doc.querySelector('[data-js="displayHour"]');
    const $displayMin = doc.querySelector('[data-js="displayMin"]');
    const $displaySec = doc.querySelector('[data-js="displaySec"]');

    const $selectHour = doc.querySelector('[data-js="hour"]');
    const $selectMin = doc.querySelector('[data-js="min"]');
    const $selectSec = doc.querySelector('[data-js="sec"]');
    
    // Polpulando select
    addOptions($selectHour);
    addOptions($selectMin);
    addOptions($selectSec);
    
    $selectOp.appendChild($selectHour);
    $selectOp.appendChild($selectMin);
    $selectOp.appendChild($selectSec);

    // obter os valores dos selects
    var hour;
    var min;
    var sec;

    var hourInMilli;
    var minInMilli;
    var secInMilli;
    var totalMillisecord;

    var id;
    var count = 0;
    var milliOfDisplay = 0
    const qtsMilli = 1000;

    function btnStart() {
        hour = +$selectHour.value;
        min = +$selectMin.value;
        sec = +$selectSec.value;
        
        hourInMilli = hour > 0 ? Math.pow(3600000, hour) : 0;
        minInMilli = hour > 0 ? Math.pow(60000, min) : 0;
        secInMilli = hour > 0 ? Math.pow(1000, sec) : 0;
        
        totalMillisecord = hourInMilli + minInMilli + secInMilli;
        
    }

    // função para incrementar com settimeout
    function execTime() {
        if(milliOfDisplay === totalMillisecord){
            //stop display e sair da recursividade
            return;
        }
        id = setTimeout(function() {
        milliOfDisplay += qtsMilli;
        count++;
        }, qtsMilli);
    }

    function showInDisplay(count) {

        let h = 0;
        let m = 0;
        let s = 0;
        if(count === 59){
            s++;
        }
        $displayHour.innerHTML = hour;
        $displayMin.innerHTML = min;
        $displaySec.innerHTML = sec;
    }

    $btnStart.addEventListener(btnStart);
    $btnStop.addEventListener(btnStop);
    $btnReset.addEventListener(btnReset);

    function btnStop() {

    }
    function btnReset() {

    }

    // função para popular select com option;
    function addOptions(select) {
        let option;
        for(let i = 0; i <= 59; i++) {
            option = doc.createElement('option');
            option.setAttribute('value', i);

            select.appendChild(option).innerHTML = 
            i.toString().length === 1 ? '0' + i : i;
        }
    }
})(window, document);
