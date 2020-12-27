var donateButton = document.getElementById("donate-button");

donateButton.onclick = () => {
    window.open(donateLink)
};
var donateLink = 
"https://act.oceana.org/page/54142/donate/1?ea.tracking.id=website&utm_campaign=FR&utm_content=donate&utm_source=website&utm_medium=website";

var footerdonateButton = document.getElementById("linksbottom");

footerdonateButton.onclick = () => {
    window.open(donateLink)
};
var donateLink = 
"https://act.oceana.org/page/54142/donate/1?ea.tracking.id=website&utm_campaign=FR&utm_content=donate&utm_source=website&utm_medium=website";

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
const home= document.getElementById("home")

var cartValue = document.getElementById("cart-value");
var cartButton = document.getElementById("cart");

var addButton = document.getElementsByClassName("button");

var items = [
{
    name:"Save The Ocean T-Shirt",
    quantity: 0,
    dollars: 15,
    cents: 99,
},
{
    name:"More Fish Hoodie",
    quantity: 0,
    dollars: 20,
    cents: 00,
},
{
    name:"No More Plastic Full Sleeve",
    quantity: 0,
    dollars: 12,
    cents: 99,
},
{
    name:"Save Our Oceans Hat",
    quantity: 0,
    dollars: 9,
    cents: 99,
},
{
    name:"Fish Artwork",
    quantity: 0,
    dollars: 19,
    cents: 39,
},
{
    name:"Beach Artwork",
    quantity: 0,
    dollars: 29,
    cents: 99,
},
{
    name:"The Sea Bracelet",
    quantity: 0,
    dollars: 20,
    cents: 99,
},
{
    name:"Turtle Bracelet",
    quantity: 0,
    dollars: 32,
    cents: 00,
},
{
    name:"3 Metal Straws",
    quantity: 0,
    dollars: 13,
    cents: 00,
},
{
    name:"3 Steel Water Bottles",
    quantity: 0,
    dollars: 22,
    cents: 99,
},

{
    name:"3 Stainless Steel Canisters",
    quantity: 0,
    dollars: 18,
    cents: 53,
},
{
    name:"3 Stainless Steel Containers",
    quantity: 0,
    dollars: 25,
    cents: 00,
},
];
function updateCart() {
    let cart=0;
    for (index = 0; index < items.length; index++){
        cart = cart = items[index].quantity;
    }
    cartValue.innerHTML = cart;
}

for(let i = 0; i < addButton.length; i++){
    addButton[i].onclick = (e) => {
        items[i].quantity++;
        updateCart();
    };

}

var finalCents = 0
var finalDollars = 0

function updatePrice() {
    let totalPriceInCents=0;

    for(index=0;index<items.length;index++) {
        totalPriceInCents=totalPriceInCents+items[index].quantity*(items[index].dollars*100+items[index].cents);
    }
    finalDollars = Math.floor(totalPriceInCents / 100);
    finalCents = totalPriceInCents % 100;
}

var whatsappLink = "https://api.whatsapp.com/send?phone=(304)-593-5304&text=Order%20details"

function updateWhatsappLink() {
    for(let index=0; index<items.length; index++) {
        if(items[index].quantity != 0) {
            whatsappLink += "%0A" + items[index].name + "%20" + items[index].quantity;
        }
    }
whatsappLink +=
    "%OA" + "Total%20Price:%20$" + finalDollars + "%20" + finalCents + "c"
}


cartButton.onclick = () => {
    updatePrice();
    updateWhatsappLink();
    updateCart();
    // updatecartValue();
    window.open(whatsappLink,"_blank");
}

var countDownDate = new Date("Jan 1, 2021 12:00:00").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
  
  // Find the distance between now an the count down date
  var distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);