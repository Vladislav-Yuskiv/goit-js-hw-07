const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const ulEl = document.querySelector('#ingredients');
// const allLi = [];
//     for (let i = 0; i < ingredients.length; i++) {
        
//         const liEL = document.createElement('li')
//         liEL.textContent = ingredients[i]
//         allLi.push(liEL)

// }
ingredients.map(liValue => {
       const liEL = document.createElement('li')
      liEL.textContent = liValue
      return ulEl.append(liEL)
    } )
