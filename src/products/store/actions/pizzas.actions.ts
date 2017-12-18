import { Action } from '@ngrx/store';
import { Pizza } from 'src/products/models/pizza.model';

// load pizzas 
export const LOAD_PIZZAS = '[Products] Load pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load pizzas Fail';
export const LOAD_PIZZAS_SUCCES = '[Products] Load pizzas Succes';

export class LoadPizzas implements Action{
    readonly type = LOAD_PIZZAS;
}
export class LoadPizzasFail implements Action{
    readonly type = LOAD_PIZZAS_FAIL;
    constructor(public payload: any){ }
}
export class LoadPizzasSuccess implements Action{
    readonly type = LOAD_PIZZAS_SUCCES;
    constructor(public payload: Pizza[]){}
}


//create pizza

export const CREATE_PIZZA = '[Products] Crete pizzas';
export const CREATE_PIZZA_FAIL = '[Products] Create pizzas Fail';
export const CREATE_PIZZA_SUCCESS = '[Products] Create pizzas Succes';

export class CreatePizza implements Action {
    readonly type = CREATE_PIZZA;
    constructor(public payload: Pizza){}
}

export class CreatePizzaFail implements Action {
    readonly type = CREATE_PIZZA_FAIL;
    constructor(public payload: any){}
}

export class CreatePizzaSucces implements Action {
    readonly type = CREATE_PIZZA_SUCCESS;
    constructor(public payload: Pizza){}
}

//update pizza

export const UPDATE_PIZZA = '[Products] Update pizza';
export const UPDATE_PIZZA_FAIL = '[Products] Update pizza fail';
export const UPDATE_PIZZA_SUCCESS = '[Products] Update pizza success';

export class UpdatePizza implements Action {
    readonly type = UPDATE_PIZZA;
    constructor(public payload: Pizza){}
}

export class UpdatePizzaFails implements Action {
    readonly type = UPDATE_PIZZA_FAIL;
    constructor(public payload: any){}
}

export class UpdatePizzaSuccess implements Action {
    readonly type = UPDATE_PIZZA_SUCCESS;
    constructor(public payload: Pizza){}
}


//remove pizzas 
export const REMOVE_PIZZA = '[Products] Remove Pizza';
export const REMOVE_PIZZA_FAIL = '[Products] Remove Pizza Fails';
export const REMOVE_PIZZA_SUCCESS = '[Products] Remove Pizza Succes';

export class RemovePizza implements Action {
    readonly type = REMOVE_PIZZA
    constructor(public payload: Pizza){}
}

export class RemovePizzaFail implements Action {
    readonly type = REMOVE_PIZZA_FAIL
    constructor(public payload: any){}
}

export class RemovePizzaSuccess implements Action {
    readonly type = REMOVE_PIZZA_SUCCESS
    constructor(public payload: Pizza){}
}

//export types
export type PizzaAction = 
    | LoadPizzas 
    | LoadPizzasFail 
    | LoadPizzasSuccess
    | CreatePizza
    | CreatePizzaFail
    | CreatePizzaSucces
    | UpdatePizza
    | UpdatePizzaFails
    | UpdatePizzaSuccess
    | RemovePizza
    | RemovePizzaFail
    | RemovePizzaSuccess;