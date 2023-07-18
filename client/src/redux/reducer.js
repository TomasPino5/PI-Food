import { ALL_RECIPES, ALL_DIETS, NAME_RECIPES, ID_RECIPE, DIETS_FILTER, ORIGIN_FILTER, ORDER_RECIPES, HEALTH_RECIPES } from "./actions"

const initialState = {
    copyRecipes: [],
    recipes: [],
    diets: [],
    detail: [],
    filteredRecipes: [],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ALL_RECIPES:
            return { 
                ...state, 
                copyRecipes: action.payload,
                recipes: action.payload,
                filteredRecipes: action.payload,
            }

        case ALL_DIETS:
            return { 
                ...state, 
                diets: action.payload 
            }

        case NAME_RECIPES:
            return {
                ...state,
                recipes: action.payload,
            }

        case ID_RECIPE:
            return { 
                ...state, 
                detail: action.payload
            }

        case DIETS_FILTER:     
            if (action.payload === "") {
                return {
                    ...state,
                    recipes: state.copyRecipes,
                    filteredRecipes: state.copyRecipes,
                };
            }
            return {
                ...state,
                recipes: state.copyRecipes.filter((recipe) => recipe.diets.includes(action.payload)),
                filteredRecipes: state.copyRecipes.filter((recipe) => recipe.diets.includes(action.payload)), 
            };

        case ORIGIN_FILTER:
            if (action.payload === "") {
                return {
                    ...state,
                    recipes: state.copyRecipes,
                    filteredRecipes: state.copyRecipes,
                };
            }
            return {
                ...state,
                recipes: state.copyRecipes.filter((recipe) => recipe.created === action.payload),
                filteredRecipes: state.copyRecipes.filter((recipe) => recipe.created === action.payload),
            }

        case ORDER_RECIPES:
            let sortedRecipes = [...state.filteredRecipes];
            if (action.payload === "A") {
                sortedRecipes.sort((a, b) => a.title.localeCompare(b.title));
            } else if (action.payload === "D") {
                sortedRecipes.sort((a, b) => b.title.localeCompare(a.title));
            } else if (action.payload === "") {
                sortedRecipes = [...state.filteredRecipes];
            }
            return {
                ...state,
                recipes: sortedRecipes, 
            };

        case HEALTH_RECIPES:
            let scoreRecipes = [...state.filteredRecipes];
      if (action.payload === "-+") {
        scoreRecipes.sort((a, b) => a.healthScore - b.healthScore);
      } else if (action.payload === "+-") {
        scoreRecipes.sort((a, b) => b.healthScore - a.healthScore);
      } else if (action.payload === "") {
        scoreRecipes = [...state.filteredRecipes];
      }
      return {
        ...state,
        recipes: scoreRecipes,
      };
            
            
        default: 
            return { 
                ...state
            }
    }
}

export default rootReducer