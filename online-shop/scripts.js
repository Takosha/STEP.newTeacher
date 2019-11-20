const button = document.querySelector('.menu-toggle');

if (button) {
    button.addEventListener('click', () => {
        document.body.classList.toggle('menu-opened');
    });
}


const products = [
    {
        name: 'T-shirt',
        size: 'M',
        color: 'black',
        img: './T-shirt.png',
        price: '15'
    },
    {
        name: 'T-shirt',
        size: 'S',
        color: 'red',
        img: './T-shirt.png',
        price: '35'

    },
    {
        name: 'T-shirt',
        size: 'L',
        color: 'greed',
        img: './T-shirt.png',
        price: '25'

    },
    {
        name: 'T-shirt',
        size: 'M',
        color: 'blue',
        img: './T-shirt.png',
        price: '20'

    },
    {
        name: 'T-shirt',
        size: 'L',
        color: 'orange',
        img: './T-shirt.png',
        price: '30'

    },

];

function showProducts(products) {
    let view = '';


    for (product of products) {
        view += `
        <li class="product">
    <a class="product-link" href="#">
        <div class="product-header">
        <div class="product-size">size: ${product.size}</div>
        <div class="product-color">color: ${product.color}</div>
    </div>

    <div class="product-content">
        <img src="${product.img}" alt="t-shirt">
    </div>

    <div class="product-footer">
        <div class="product-name">name: ${product.name}</div>
        <div class="product-price">price: ${product.price}$</div>
    </div>
</a>
<button id="remove-product" data-id="${product.id}"> Remove</button>
</li>
`
    }
    document.querySelector('.products-container').innerHTML = view;
}

function addProduct() {
    products.push({
        name: 'T-shirt',
        size: 'H',
        color: 'black',
        img: './T-shirt.png',
        price: '151'
    });
    showProducts(products)
}
document.querySelector("#add-product").addEventListener('click', () => {
    addProduct();
});
showProducts(products);







