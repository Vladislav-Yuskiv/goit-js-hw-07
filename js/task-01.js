
const ulEl = document.querySelector('#categories');
const allLiEl = document.querySelectorAll('.item');
const animalLiEL = document.querySelectorAll('.animal-element');
const productLiEL = document.querySelectorAll('.product-element');
const technoLiEL = document.querySelectorAll('.techno-element');

 console.log(` Категорія: ${ allLiEl[0].firstElementChild.textContent }`)
 console.log(`Кількість елементів: ${animalLiEL.length}`)
 console.log(` Категорія: ${allLiEl[1].firstElementChild.textContent }`)
 console.log(`Кількість елементів: ${productLiEL.length}`)
 console.log(` Категорія: ${ allLiEl[2].firstElementChild.textContent}`)
console.log(`Кількість елементів: ${technoLiEL.length}`)
 