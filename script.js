import {phrases} from './api/oblique_phrases.js';
import {translationES, translationEN} from './api/translations.js';

let lenguage = "es";

var textform = document.getElementById('text-form');
var refreshButton = document.getElementById('refresh-button');
var cardText = document.getElementById('card-text');
var lenguageBtn = document.getElementById('lenguage-btn');
var lenguageImg = document.getElementById('lenguage-img');
var selectForm = document.getElementById('game-mode-form');
var modeSelected = 'normal';
var toolTip = document.getElementById('tooltip');
var toolTipText = document.getElementById('tooltip-text');

let ESFlag = './assets/img/esflag-img.png';
let ENFlag = './assets/img/enflag-img.png';

lenguageImg.src = ESFlag;

selectForm.value = modeSelected

console.log(selectForm.value)
console.log(lenguage)

CardTextChange()
translations()
getSelectedPhrases()

refreshButton.addEventListener('click', function(){
    CardTextChange()
});

selectForm.addEventListener('change', function(){
    console.log(selectForm.value)
    modeSelected = selectForm.value
    getSelectedPhrases()
});
 lenguageImg.addEventListener('click', function(){
    console.log("img Pressed")
    if  (lenguage == 'es'){
     lenguageImg.src = ENFlag;
        lenguage = "en";
        CardTextChange()
        translations()
        console.log(lenguage)
    }
    else if  (lenguage == 'en') {
     lenguageImg.src = ESFlag;
        lenguage = "es";
        CardTextChange()
        translations()
        console.log(lenguage)
    };
});

function getRandomText(){
    var phraseIndex
    var phrasesWithSelectedTypes = phrases
    .map(function(types,index){
        if (types.type != modeSelected){
            return index
        }
    })
    .filter(types => typeof types !== 'undefined')
    /*.map(function(types) {
        return types.type
    })*/
    let randomNumb = Math.floor(Math.random() * phrasesWithSelectedTypes.length);
    const shuffledArray = phrasesWithSelectedTypes.sort((a, b) => 0.5 - Math.random());

    console.log(shuffledArray[0])
    
    return phrases[shuffledArray[0]][lenguage];
};

console.log(navigator.languages)

function CardTextChange(){
    cardText.innerHTML = getRandomText();
}

function translations(){
    if  (lenguage == 'es'){
        refreshButton.innerHTML = translationES.RefreshBtn;
        textform.innerHTML = translationES.TextForm;
        toolTip.innerHTML = translationES.ToolTip;
        toolTipText.innerHTML = translationES.ToolTipText;
        createOptions(lenguage)

    }else if  (lenguage == 'en'){
        refreshButton.innerHTML = translationEN.RefreshBtn;
        textform.innerHTML = translationEN.TextForm;
        toolTip.innerHTML = translationEN.ToolTip;
        toolTipText.innerHTML = translationEN.ToolTipText;
        createOptions(lenguage)
    }
}

function getSelectedPhrases(){
    var phrasesTypes = phrases.map(function(types){
        return types.type;
    })
}

function createOptions(translation){
    var getform = document.getElementById('game-mode-form')
    if (translation == "es"){
        getform.innerHTML = `<option value="normal" id="option-form">${translationES.ValueNormal}</option>
            <option value="defensive" id="option-form">${translationES.ValueDefensive}</option>
            <option value="agressive" id="option-form">${translationES.ValueAgressive}</option>
            <option value="lurker" id="option-form">${translationES.ValueLurker}</option>`
    } else if (translation == "en") {
        getform.innerHTML = `<option value="normal" id="option-form">${translationEN.ValueNormal}</option>
            <option value="defensive" id="option-form">${translationEN.ValueDefensive}</option>
            <option value="agressive" id="option-form">${translationEN.ValueAgressive}</option>
            <option value="lurker" id="option-form">${translationEN.ValueLurker}</option>`
    }
}