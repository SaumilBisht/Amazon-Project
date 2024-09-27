export let cart= JSON.parse(localStorage.getItem('cart')); //purana cart uthayega jo saved h cuz pura js firse chlta h
if(!cart){
  cart=[{
    productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:2
  },{
    productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity:1
  }];
}


function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}// cart ko local storage mein save so that refresh krne ke baad wapis default top wli cart na ajae
export function addToCart(productId){
  let matchingItem;
  
  cart.forEach((cartItem)=>{
    if(cartItem.productId===productId) matchingItem=cartItem;
  });

  if(matchingItem)
  {
    matchingItem.quantity+=1;
  }
  else
  {
    cart.push({
      productId: productId,
      quantity:1
    });
  }

  saveToStorage();
  
};

export function removeFromCart(productId){
  let newCart=[];
  cart.forEach((item)=>{
    if(item.productId!==productId){
      newCart.push(item);
    }
  });
  cart=newCart;

  saveToStorage();
}