// ITERATION 1

function updateSubtotal(product) {

  window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
  });

  console.log('Calculating subtotal, yey!');

}

function calculateAll() {

  /*

  const singleProduct = document.querySelector('.product');
  let price = parseFloat(singleProduct.querySelector('.quantity input').value);
  let quantity = parseFloat(singleProduct.querySelector('.price span').innerHTML);
  let subtotal = quantity * price;

  singleProduct.querySelector('.subtotal span').innerText = subtotal;

  console.log(price);
  console.log(quantity);
  console.log(subtotal);


  updateSubtotal(singleProduct);
*/
  
  // ITERATION 2

  /*
  const singleProduct = document.querySelectorAll('.product');

  singleProduct.forEach((element) => {

    let price = parseFloat(element.querySelector('.quantity input').value);
    let quantity = parseFloat(element.querySelector('.price span').innerHTML);
    let subtotal = quantity * price;
    element.querySelector('.subtotal span').innerText = subtotal;


  });


  console.log(singleProduct);
 


  updateSubtotal(singleProduct);

}
*/

  // ITERATION 3

  
  const singleProduct = document.querySelectorAll('.product');
  let total = 0;

  singleProduct.forEach((element) => {

    let price = parseFloat(element.querySelector('.quantity input').value);
    let quantity = parseFloat(element.querySelector('.price span').innerHTML);
    let subtotal = quantity * price;
    element.querySelector('.subtotal span').innerText = subtotal;

  });

  const subtotalsProducts = document.querySelectorAll('.subtotal span');

  subtotalsProducts.forEach( (element) => total += parseFloat(element.innerText) );

  document.querySelector('#total-value span').innerText= total;
 
}


// ITERATION 4

function removeProduct() {

  const target = document.querySelectorAll('.btn-remove');
  target.forEach((element) => {
    element.addEventListener('click', () => {
      element.parentNode.parentNode.remove();

    });

  });

}


// ITERATION 5

function createProduct() {

  var inputNew = document.querySelectorAll('.create-product input')[0]; 
  var inputPrice = document.querySelectorAll('.create-product input')[1]; 
  var buttonCreate = document.getElementById('create');
  var lastRowTable = document.querySelector('tbody');
  console.log(lastRowTable);

  buttonCreate.addEventListener('click', () => {

    if ((inputPrice.value == 0 || inputPrice.value == undefined || inputPrice.value == '') || (typeof inputNew.value === 'number' || inputNew.value === NaN || inputNew.value === undefined || inputNew.value == '' ))   {

      alert('El producto tiene un nombre erróneo o no has puesto precio al producto');

    }

    else{

    lastRowTable.innerHTML +=
    `<tr class="product">
    <td class="name">
      <span>${inputNew.value}</span>
    </td>
    <td class="price">$<span>${inputPrice.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>`;

  removeProduct();

  /*
    lastRowTable.querySelector('.btn-remove').addEventListener('click', ()=> )

}

  });
*/


  return lastRowTable;


}})}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
});

window.addEventListener('load', createProduct);
window.addEventListener('load', removeProduct);



/*
  buttonCreate.addEventListener('click', () => {

    lastRowTable.

  });

  window.addEventListener('load', createProduct);


*/
