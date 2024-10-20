export const orders=JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order){
  orders.unshift(order);// unshift start mein dalega order ke
  saveToStorage();
}
function saveToStorage(){
  localStorage.setItem('orders',JSON.stringify(orders));
}