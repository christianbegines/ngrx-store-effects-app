import { createSelector } from '@ngrx/store';
import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromPizzas from '../reducers/pizzas.reducer';
import { Pizza } from 'src/products/models/pizza.model';


//pizza state
export const getPizzaState = createSelector(
    fromFeature.getProductsState,
    (state: fromFeature.ProductsState) => state.pizzas
);

export const getPizzasEntities = createSelector(
    getPizzaState,
    fromPizzas.getPizzasEntities
);

export const getSelectedPizza = createSelector(
    getPizzasEntities,
    fromRoot.getRouterState,
    (entities, router): Pizza =>{
        return  router.state && entities[router.state.params.pizzaId];
    }
);

export const getAllPizzas = createSelector(
    fromPizzas.getPizzasEntities,
    (entities) =>  {
        return Object.keys(entities)
            .map(id => entities[parseInt(id,10)]);
    }
);

export const getAllPizzasLoading = createSelector(
    getPizzaState,
    fromPizzas.getPizzasLoading
);

export const getAllPizzasLoaded = createSelector(
    getPizzaState,
    fromPizzas.getPizzasLoaded
);
