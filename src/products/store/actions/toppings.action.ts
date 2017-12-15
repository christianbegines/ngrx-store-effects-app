import { Action } from "@ngrx/store";
import { Topping } from "../../models/topping.model";

// toppings
export const LOAD_TOPPINGS = '[Products] Load Toppings';
export const LOAD_TOPPINGS_FAIL = '[Products] Load Toppings Fail';
export const LOAD_TOPPINGS_SUCCESS = '[Products] Load Toppings Success';
export const VISUALICE_TOPPINGS = '[Products] Visualise toppings';

export class LoadToppings implements Action {
    readonly type = LOAD_TOPPINGS;
}

export class LoadToppingsFail implements Action {
    readonly type = LOAD_TOPPINGS_FAIL;
    constructor(public payload: any){}
}

export class LoadToppingsSucces implements Action {
    readonly type = LOAD_TOPPINGS_SUCCESS;
    constructor(public payload: Topping[]){}
}

export class VisualiseToppings implements Action {
    readonly type = VISUALICE_TOPPINGS;
    constructor(public payload: number[]){}
}





//Actions types
export type ToppingsAction = 
    | LoadToppings 
    | LoadToppingsFail 
    | LoadToppingsSucces
    | VisualiseToppings;