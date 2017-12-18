import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as fromServices from '../../services';
import * as fromRoot from '../../../app/store';
import * as pizzaActions from '../actions/pizzas.actions';


@Injectable()
export class PizzasEffects{
   
    constructor(
        private actions$: Actions,
        private pizzaServices: fromServices.PizzasService
    ){};

    @Effect()
    loadPizzas$ = this.actions$.ofType(pizzaActions.LOAD_PIZZAS)
        .pipe(
            switchMap(() => {
                return this.pizzaServices
                .getPizzas()
                .pipe(
                   map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
                   catchError(error => of(new pizzaActions.LoadPizzasFail(error))) 
                );
            }
        )
    );

    @Effect()
    createPizza$ = this.actions$.ofType(pizzaActions.CREATE_PIZZA)
        .pipe(
            map((action: pizzaActions.CreatePizza) => action.payload),
            switchMap(pizza => {
                return this.pizzaServices
                    .createPizza(pizza)
                    .pipe(
                        map(pizza => new pizzaActions.CreatePizzaSucces(pizza)),
                        catchError(error => of(new pizzaActions.CreatePizzaFail(error)))
                    );           
                }
            )
        );

    @Effect()
    createPizzaSuccess$ = this.actions$
        .ofType(pizzaActions.CREATE_PIZZA_SUCCESS)
        .pipe(
            map((action: pizzaActions.CreatePizzaSucces) => action.payload),
            map(pizza =>{
                return new fromRoot.Go({
                    path: ['/products', pizza.id]
                });
            })
        );
    
    @Effect()
    updatePizza$ = this.actions$.ofType(pizzaActions.UPDATE_PIZZA)
        .pipe(
            map((action: pizzaActions.UpdatePizza) => action.payload),
            switchMap(pizza =>{
                return this.pizzaServices
                    .updatePizza(pizza)
                    .pipe(
                        map(pizza => new pizzaActions.UpdatePizzaSuccess(pizza)),
                        catchError(error => of(new pizzaActions.UpdatePizzaFails(error)))
                    );
            })
        );

    @Effect()
    removePizza$ = this.actions$.ofType(pizzaActions.REMOVE_PIZZA)
        .pipe(
            map((action: pizzaActions.RemovePizza) => action.payload),
            switchMap(pizza =>{
                return this.pizzaServices
                    .removePizza(pizza)
                    .pipe(
                        map(() => new pizzaActions.RemovePizzaSuccess(pizza)),
                        catchError(error => of(new pizzaActions.RemovePizzaFail(error)))
                    );
            })
        );
    
        @Effect()
        handlePizzaSuccess$ = this.actions$
            .ofType(
                pizzaActions.UPDATE_PIZZA_SUCCESS,
                pizzaActions.REMOVE_PIZZA_SUCCESS
            )
            .pipe(
                map(pizza => {
                    return new fromRoot.Go({
                        path: ['/products']
                    });
                })
            );
}