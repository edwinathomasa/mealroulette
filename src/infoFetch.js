export let All_Meal = [];

export let current_Meal_Count = [];
export let current_Meal_List = [];

let total_meals = 0;

export const allMealUrl =
  'https://playground.devskills.co/api/rest/meal-roulette-app/meals';
export const MealListUrl =
  'https://playground.devskills.co/api/rest/meal-roulette-app/meals/limit/4/offset/';

export const _fetchAllMealinfo = async () => {
  return new Promise(async (resolve, reject) => {
    let response;

    try {
      response = await fetch(allMealUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      });
    } catch (error) {
      reject(error);
    }

    if (response !== undefined) {
      if (response.status === 200) {
        let mealJson = await response.json();
        if (
          mealJson !== undefined ||
          mealJson !== null ||
          mealJson.length > 0
        ) {
          All_Meal = await mealJson.meal_roulette_app_meals;
          total_meals = await All_Meal.length;
          resolve(true);
        } else {
          resolve(false);
        }
      } else {
        resolve(false);
      }
    } else {
      resolve(false);
    }
  });
};

export const _fetchHomeMeallist = async () => {
  console.log(MealListUrl);
  return new Promise(async (resolve, reject) => {
    let response;
    console.log(`${MealListUrl}0`);
    let Url = MealListUrl + '0';
    try {
      response = await fetch(`${MealListUrl}0`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      });
    } catch (error) {
      console.log('error failed');
      reject(error);
    }

    if (response !== undefined) {
      console.log('1');
      if (response.status === 200) {
        console.log('2');
        let mealJson = await response.json();
        console.log(mealJson);
        if (
          mealJson !== undefined ||
          mealJson !== null ||
          mealJson.length > 0
        ) {
          console.log(mealJson.meal_roulette_app_meals_aggregate.nodes);
          current_Meal_List = mealJson.meal_roulette_app_meals_aggregate.nodes;
          current_Meal_Count = current_Meal_List.length;
          for (let index = 0; index < current_Meal_List.length; index++) {
            const element = current_Meal_List[index];
            console.log(element.title);
          }
          resolve(true);
        } else {
          resolve(false);
        }
      } else {
        resolve(false);
      }
    } else {
      console.log('it is undefined');
      resolve(false);
    }
  });
};
