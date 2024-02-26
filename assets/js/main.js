import mobileData from "./data.json";

const priceRangeEl = document.getElementById("price-range");
const priceEl = document.getElementById("price");
priceEl.textContent = priceRangeEl.value;

const mobileListEl = document.getElementById("mobile-list");

priceRangeEl.addEventListener("change", () => {
  priceEl.textContent = `₹${priceRangeEl.value}`;
  // console.log(priceRangeEl.value);
  displayMobileCards(priceRangeEl.value);
});

function displayMobileCards(price) {
    mobileListEl.innerHTML = ''
  const fragment = document.createDocumentFragment();
  mobileData.forEach((val) => {
   if(val.price<=price){
    const divEl = document.createElement("div");
    divEl.classList.add("bg-white", "w-64","card","p-2","rounded-md");
    const imgEl = document.createElement("img");
    imgEl.src = val.img;
    const h1El = document.createElement("h1");
    h1El.textContent = val.brandName;
    h1El.classList.add("text-[#1F2544]", "font-semibold", "text-lg", "mb-0.5");
    const spanEl = document.createElement("span");
    spanEl.className = "bg-green-600 px-2 py-0.5 rounded-md font-semibold";
    spanEl.textContent = "Latest";
    const pEl = document.createElement("p");
    pEl.className = "text-gray-600 mt-1";
    pEl.textContent = val.color;
    const featuresEl = document.createElement("div");
    featuresEl.className = "text-gray-600 flex space-x-3";
    const ramEl = document.createElement("p");
    ramEl.textContent = val.features.ram;
    const storageEl = document.createElement("p");
    storageEl.textContent = val.features.storage;
    featuresEl.append(ramEl, storageEl);
    const mobilepriceEl = document.createElement("p");
    mobilepriceEl.className = "font-semibold";
    mobilepriceEl.textContent = `₹${val.price}`;
    divEl.append(imgEl, h1El, spanEl, pEl, featuresEl, mobilepriceEl);
    fragment.append(divEl);
   }
  });
  mobileListEl.append(fragment);
}
// const divEl = document.createElement('div');
// divEl.classList.add("bg-white","w-64","p-2","rounded-md");
// const imgEl = document.createElement('img')
// // imgEl.src = val-->
// const h1El = document.createElement('h1');
// // h1El.textContent = val;
// h1El.classList.add("text-[#1F2544]", "font-semibold", "text-lg", "mb-0.5")
// const spanEl = document.createElement('span');
// spanEl.className = "bg-green-600 px-2 py-0.5 rounded-md font-semibold";
// spanEl.textContent = "Latest";
// const pEl = document.createElement('p');
// pEl.className = "text-gray-600 mt-1";
// // pEl.textContent = val
// const featuresEl = document.createElement('div');
// featuresEl.className = "text-gray-600 flex space-x-3";
// const ramEl = document.createElement('p');
// // ramEl.textContent = val
// const storageEl = document.createElement('p');
// // storageEl.textContent = val
// featuresEl.append(ramEl,storageEl);
// const mobilepriceEl = document.createElement('p');
// mobilepriceEl.className = "font-semibold";
// // priceEl.textContent = `₹${val}`
// divEl.append(imgEl,h1El,spanEl,pEl,featuresEl,mobilepriceEl)

// console.log(divEl);

// console.log(mobileData);
