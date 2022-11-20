const favDishes = ['Sweets','Paneer','Chocolates'];

const ulList = document.getElementById('dishList');

for(const dish of favDishes) {
    const dishesLi = document.createElement('li');
    dishesLi.innerHTML = dish;
    ulList.appendChild(dishesLi);
}
