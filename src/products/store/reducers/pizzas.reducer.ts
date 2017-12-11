import { Pizza } from '../../models/pizza.model';
import { Array } from 'core-js/library/web/timers';
import * as fromPizzas from '../actions/pizzas.actions';

export interface PizzaState{
    entities: {[id: number]: Pizza},
    loaded:boolean;
    loading:boolean;
}
export const initialState: PizzaState = {
    entities:{},
    loaded: false,
    loading: false
};

export function reducer(
    state = initialState,action: fromPizzas.PizzaAction 
): PizzaState {
    switch(action.type){
        case fromPizzas.LOAD_PIZZAS:{
            return {
                ...state,
                loading:true
            };
        }      
        case fromPizzas.LOAD_PIZZAS_FAIL:{
            return {
                ...state,
                loading:false,
                loaded:false
            };
        }       
        case fromPizzas.LOAD_PIZZAS_SUCCES:{
            const pizzas = action.payload;
            const entities = pizzas.reduce(
                (entities: {[id: number]:Pizza}, pizza:Pizza) => {
                    return {
                        ...entities,
                        [pizza.id]: pizza
                    }
                },
                {
                ...state.entities
                }
            );
            return {
                ...state,
                loading:false,
                loaded: true,   
                entities             
            };
        }
    }

    return state;
}

export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzasEntities = (state: PizzaState) => state.entities;