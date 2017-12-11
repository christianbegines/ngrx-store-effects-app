import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as pizzaActions from '../actions/pizzas.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import * as fromServices from '../../services';


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
            })
        );
}