const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit)

const inputvalue = document.getElementById('value-real');
const selectedcurrency = document.getElementById('currency');
const result = document.getElementById('result');
let valueconverted = 0;

function handleSubmit(e) {
    e.preventDefault();

    if(!inputvalue.value || inputvalue.value < 0){
        alert('Informe um valor válido!');
        return;
    } else if(!selectedcurrency.value) {
        alert('Escolha uma moeda!');
        return;
    }

    converter();
}

function converter() {
    if(selectedcurrency.value === 'eur') {
        valueconverted = inputvalue.value / 5.27;
        result.innerHTML = valueformatter('pt-BR', 'EUR');

        animateResult();

    } else if (selectedcurrency.value === 'dol') {
        valueconverted = inputvalue.value / 5.29;
        result.innerHTML = valueformatter('en-US', 'USD');

        animateResult();
    } else if (selectedcurrency.value === 'ien') {
        valueconverted = inputvalue.value / 0.036;
        result.innerHTML = valueformatter('ja-JP', 'JPY');

        animateResult();
    } else if (selectedcurrency.value === 'stg') {
        valueconverted = inputvalue.value / 5.94;
        result.innerHTML = valueformatter('en-GB', 'GBP');

        animateResult();
    }

    inputvalue.value = '';
    selectedcurrency.value = '';
}

function valueformatter(locale, currency) {
    const value = valueconverted.toLocaleString(`${locale}`, {style: 'currency', currency: `${currency}`});
    return `<span>💰</span> ${value} <span>💰</span>`;
}

function animateResult() {
    return result.animate([
        {transform: 'translateY(-150px)'},
        {transform: 'translateY(0px)'},
    ], {duration: 700});
}