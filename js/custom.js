const toggleAction=document.querySelector('.toggle');
const toggleBtnIcon=document.querySelector('.toggle i');
const dropDown= document.querySelector('.dropdown_menu')

toggleBtnIcon.onclick = function(){
  console.log( dropDown.classList);
  dropDown.classList.toggle('open')
  const isOpen=dropDown.classList.contains('open')

  toggleBtnIcon.classList=isOpen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'

  
}




const product = [
  {
    id: 0,
    image: "images/img1.webp",
    title: "GivvoChineseParsleyCoriander",
    price: "MVR0.90",
  },

  {
    id: 1,
    image: "images/img2.webp",
    title: "YUVVOSweetCorn",
    price: "MVR1.30",
  },

  {
    id: 2,
    image: "images/img3.webp",
    title: "BELLVOYellowCapsicumBellPepper",
    price: "MVR1.40",
  },

  {
    id: 3,
    image: "images/img4.webp",
    title: "Zuchuni",
    price: "MVR1.50",
  },

  {
    id: 4,
    image: "images/img5.webp",
    title: "LiveWellOpalBasilFreshHerbs",
    price: "MVR1.65",
  },
];




let cartMap = new Map();

let cartCount = 0;

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
      
    })
  )
];

document.getElementById("img_content").innerHTML = categories.map((item) => {
  var { id, image, title, price } = item;

  return `<div class="col-md-6 col-lg">
  <div class="card">
                <img src="${image}" class="card-img-top" alt="">
                <i class="fa-solid fa-heart wishlist"></i>

                <div class="card-body desc d-flex align-items-center justify-content-center">
                    <div style="min-width:200px";>
                    <h4 class="card-title">${title}</h4>
                    <p class="card-text price">${price}</p>
                    
                    <div class= "input_btn">
                            <button class="btn rounded-circle minus" onclick="decrement(${id})">-</button>
                        <input type="text" id="res${id}" value="0">
                            <button class="btn rounded-circle plus" onclick="increment(${id})">+</button>
                        </div>
                    
                    
                    <div class="cartbtn">
                        <button class="btn Add_cart" onclick="addcart(${id})" ><i class="fa-solid fa-bag-shopping bag"></i>ADD TO CART</button>
                    
                    </div>
                    </div>
                </div>
            </div>
            </div>`
}).join('');

function increment(index) {
  console.log("increment index ", index);
  var textid = "res" + index;
  console.log(textid);
  let count = document.getElementById(textid).value;
  count++;
  console.log(count);
  document.getElementById(textid).value = count;
}

function decrement(index) {
  console.log("decrement index ", index);
  var textid = "res" + index;
  console.log(textid)
  let count = document.getElementById(textid).value;
  if(count>0){    
    count--;
  console.log(count);
  document.getElementById(textid).value = count
    }
  }

function addcart(index){
    console.log("product id is", index);
    var quantity= "res" + index;
    console.log(quantity);
    let count=document.getElementById(quantity).value;
    var title = "";
    var price = "";
    console.log(product);

    for(let i = 0; i < product.length; i++) {
      console.log(product[i]);
      if(product[i].id == index) {
        title= product[i].title;
        price = product[i].price;
        break;
      }
    }
    
    var cartObject = {
      id: index,
      price: price,
      title: title,
      quantity: count
    }

    cartMap.set(index, cartObject);

    console.log(cartMap); 
    
    var totalQuantity = 0;
    for(let [key, value] of cartMap) {
      totalQuantity += parseInt(value.quantity);
    }
    cartCount = totalQuantity;

    console.log(cartCount);
    
   document.getElementById('cartcount').innerText = cartCount

   


}




  


