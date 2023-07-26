const ham = document.querySelector("#bars");
const nav = document.querySelector("#navbar");
const cross = document.querySelector("#cross");
// ham.addEventListener('click',()=>{
//   console.log("nav is clicked");
//   nav.style.right="0";

// })
// cross.addEventListener('click',()=>{
//   console.log("cross is selected");
//   nav.style.right="-300px"
// })
if (ham) {
  ham.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (cross) {
  cross.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// image changer

var main = document.getElementById("main-img");
var small = document.getElementsByClassName("small-img");
console.log(small.length);
for (let i = 0; i < small.length; i++) {
  console.log("small image is clicked");
  small[i].addEventListener("click", () => {
    main.src = small[i].src;
  });
}
var main_img=document.getElementsByClassName('pro');
for(let i=0;i<main_img.length;i++){
  main_img[i].addEventListener("click",()=>{
    console.log("image is clicked main");
    main.src=main_img[i].src;
  });
}

const product = [
  {
    id: 0,
    name: "Cartoon Astronaut T-shirts",
    price: "$29",
    star: 4,
    instock: 100,
    description: "lorem ipsum sit amet consecteur adipscing elit",
    imageSrc: "images/p1.jpg",
  },
  {
    id: 1,
    name: "Flower T-shirts",
    price: "$34",
    star: 3,
    instock: 400,
    description: "lorem ipsum sit amet consecteur adipscing elit",
    imageSrc: "images/p2.jpg",
  },
  {
    id: 3,
    name: "Printed Flower T-shirts",
    price: "$40",
    star: 3,
    instock: 200,
    description: "lorem ipsum sit amet consecteur adipscing elit",
    imageSrc: "images/p3.jpg",
  },
  {
    id: 4,
    name: "Cherry Blossom T-shirts",
    price: "$20",
    star: 3,
    instock: 140,
    description: "lorem ipsum sit amet consecteur adipscing elit",
    imageSrc: "images/p4.jpg",
  },
  {
    id: 5,
    name: "Blue Printed Flower T-shirts",
    price: "$22",
    star: 3,
    instock: 150,
    description: "lorem ipsum sit amet consecteur adipscing elit",
    imageSrc: "images/p5.jpg",
  },
  {
    id: 6,
    name: "Floral Top",
    price: "$20",
    star: 5,
    instock: 100,
    description: "lorem ipsum sit amet consecteur adipscing elit",
    imageSrc: "images/p6.jpg",
  },
  {
    id: 7,
    name: "Red-Blue T-shirts",
    price: "$40",
    star: 4,
    instock: 150,
    description: "lorem ipsum sit amet consecteur adipscing elit",
    imageSrc: "images/p7.jpg",
  },
  {
    id: 8,
    name: "Printed Pyjama",
    price: "$50",
    star: 3,
    instock: 50,
    description: "lorem ipsum sit amet consecteur adipscing elit",
    imageSrc: "images/p8.jpg",
  },
];

const productsList = document.querySelector(".pro-container");
const selectedProductList1 = document.querySelector(".selectedProducts");
function renderProducts() {
  product.forEach((singleProduct) => {
    console.log("heelo");
    productsList.innerHTML += `
    <div class="pro">
    <img src="${singleProduct.imageSrc}" alt="${singleProduct.name}">
    <div class="des">
        <span>adidas</span>
        <h5>${singleProduct.name}</h5>
        <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <h4>${singleProduct.price}</h4>
        <div className="name" onclick="addToCart(${singleProduct.id})">
        <a href="#"><i class=" fa fal fa-shopping-cart"></i></a>
        </div>
    </div>
</div>`;
  });
}
renderProducts();
let cart = [];
function addToCart(id) {
  if (cart.some((item) => item.id === id)) {
    alert("product already exist in cart");
  } else {
    const item = product.find((product) => product.id == id);
    cart.push({
      ...item,
      numberOfUnits: 1,
    });
    console.log(cart);
  }
  updateCart();
}
function updateCart() {
  renderCartItems();
}
function renderCartItems() {
  cart.forEach((item) => {
    selectedProductList1.innerHTML+=
    `<tr>
        <td><a href="#"><i class="far fa-times-circle"></i></a></td>
        <td><img src="${item.imageSrc}" alt=""></td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td><input type="number" value="1"></td>
        <td class="price">${item.price}</td>
        </tr>`;
  });
}
