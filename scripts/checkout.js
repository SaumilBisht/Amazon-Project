import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

async function loadPage(){
  console.log('load page');

  try{
    await loadProductsFetch();

    const vallue=await new Promise((resolve)=>{
      loadCart(()=>{
        resolve('value3');
      });
    });
  }
  catch(error){
    console.log('Unexpected Error');
  }

  renderOrderSummary();
  renderPaymentSummary();

}
loadPage();

/*
Promise.all([
  loadProductsFetch(),

  new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  })
    
]).then((values)=>{

  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
  
});
*/

/*
new Promise((resolve)=>{
  loadProducts(()=> {
    resolve();
  });

}).then(() => {
  return new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  });

}).then(()=>{
  renderOrderSummary();
  renderPaymentSummary();
});
*/

