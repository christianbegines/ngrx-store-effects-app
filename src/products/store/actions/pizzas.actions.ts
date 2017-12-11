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

//export types
export type PizzaAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;