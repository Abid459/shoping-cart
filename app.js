function Product(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
}

const iphone11 = new Product(1, 'iPhone 11 128GB Black', 1219);
const iphoneCase = new Product(2, 'iPhone 11 Silicone Case - Black', 59);

const allBtn = document.querySelectorAll('.btn');

let defaultAmountCount = [1];
let productPrice =[];

const iphoneCountDisplay = document.querySelector('.amount-count');


const incrBtn = document.querySelector('.increment');
const decrBtn = document.querySelector('.decrement');

allBtn.forEach(x => {
    x.addEventListener('click', function (e) {
        const btnType=e.currentTarget.dataset.type;
        let targetCountDisplay = e.currentTarget.parentNode.querySelector('input');//select the sibling corresponding input tag
        const targetPriceDisplay = e.currentTarget.parentNode.parentNode.querySelector('span');//select the corresponding span tag
        btnType == 'increment' ?targetCountDisplay.value++:targetCountDisplay.value>0?targetCountDisplay.value--:"";
        let targetProductPrice = 0;
        const productName = e.currentTarget.parentNode.dataset.product;//target product name
        productName == "iphone11" ? targetProductPrice = 1219 :productName == "iphoneCase" ? targetProductPrice = 59:"";
        // let targetProductTotalPrice = 
        productPrice.push()
        targetPriceDisplay.innerText =parseFloat( targetCountDisplay.value) *targetProductPrice;
        // calculate();


        // targetCountDisplay.value = defaultAmountCount;





        // const iphoneCountDisplay = document.querySelectorAll('.amount-count');
        // let targetEl = e.currentTarget.parentNode.children;
        // let [,input] = targetEl 
    })
});

