// import {
//   // allergies,
//   course,
//   cuisine,
//   departments,
//   diet,
//   grocery,
//   holiday,
//   ingredients,
//   ingredients1,
//   ingredients3,
//   favorites,
//   items,
//   mealCalendar,
//   firstVeganGLMC,
//   measurements,
//   menu,
//   recipes,
//   nutritions,
//   nutritions2,
//   users,
//   userGrocery,
//   ultimateGroceryList,
//   groceryListWithUserRelations,
//   dbIngredients,
//   cooking_times,
//   cup1
// } from './files'

import {
    cooking_times, 
    cup1
} from './files.js'

const cooking = cooking_times.map(function(value) {
    return value;
});

console.log(cooking);




const cup = cup1.map(function(value) {
    return value;
});

console.log(cup);



export default {
    cooking_times,
    cup1
}

// export default {
//   allergies,
//   course,
//   cuisine,
//   departments,
//   diet,
//   grocery,
//   holiday,
//   ingredients,
//   ingredients1,
//   ingredients3,
//   favorites,
//   items,
//   mealCalendar,
//   firstVeganGLMC,
//   measurements,
//   menu,
//   recipes,
//   nutritions,
//   nutritions2,
//   users,
//   userGrocery,
//   ultimateGroceryList,
//   groceryListWithUserRelations,
//   dbIngredients,
//   cooking_times,
//   cup1
// }
