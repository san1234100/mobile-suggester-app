const priceRangeEl = document.getElementById('price-range')
const priceEl = document.getElementById('price')
priceEl.textContent = priceRangeEl.value;


priceRangeEl.addEventListener('change',()=>{
    priceEl.textContent = priceRangeEl.value;
    console.log(priceRangeEl.value);
})