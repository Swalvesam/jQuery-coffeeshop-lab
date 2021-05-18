"use strict";
//adds selected item to cart
const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

//resets cart after order placement
const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};
// increase cart amount by item price
const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};


// adds number of coffee sold
const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};
// informs user status of coffee order
const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};

$('.add-to-order').on('click', () => {
  addItemToCart('Coffee');
  incrementCartTotal(1.50);

});

$('#place-order').on('click', () => {
  
  incrementCoffeeSold($('#cart-items').children().length)
  resetCart()
  
 
});
