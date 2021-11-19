document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.querySelector('#addTea');
    form.addEventListener ('submit', handleFormSubmit);

    const clearAll = document.querySelector('#clear-all');
    clearAll.addEventListener('click', handleClearAllClick);
});


const handleFormSubmit = function (event) {
    event.preventDefault();
    createOrder(event);
    document.getElementById('addTea').reset();
}

const handleClearAllClick = function (){
    const teaList = document.querySelector('#tea-list');
    teaList.innerHTML = '';
}


const createOrder = function (event) {
    const teaList = document.querySelector('#tea-list');
    const teaOrder = [event.target.name.value, event.target.typeSelect.value, event.target.priceSelect.value,event.target.preference.value];
   
    teaList.appendChild(addOrder(teaOrder));
}



const addOrder = function (teaOrder) {

    const order = document.createElement('li');

    const name = document.createElement('h2');
    name.textContent = teaOrder[0];
    const type = document.createElement('h3');
    type.textContent = teaOrder[1];
    const price = document.createElement('p');
    price.textContent = teaOrder[2];
    const preference = document.createElement('p');
    preference.textContent = teaOrder[3];

    order.appendChild(name);
    order.appendChild(type);
    order.appendChild(price);
    order.appendChild(preference);

    order.classList.add('order');
    return order;
    
}


