
const ulEl = document.querySelector('#categories');
const allLiEl = document.querySelectorAll('.item');
const listElArray = document.querySelectorAll('.list');

//  console.log(` Категорія: ${ allLiEl[0].firstElementChild.textContent }`)
//  console.log(`Кількість елементів: ${animalLiEL.length}`)
//  console.log(` Категорія: ${allLiEl[1].firstElementChild.textContent }`)
//  console.log(`Кількість елементів: ${productLiEL.length}`)
//  console.log(` Категорія: ${ allLiEl[2].firstElementChild.textContent}`)
// console.log(`Кількість елементів: ${technoLiEL.length}`)

allLiEl.forEach(item => console.log(` Категорія: ${item.firstElementChild.textContent}`))
listElArray.forEach( listLi =>  console.log(`Кількість елементів: ${listLi.children.length}`))