import {Customer} from "./customer";
import {Product} from "./product";

export interface Order{
  id: number,
  customer:Customer,
  orderNumber:string,
  orderDate:Date,
  deadline:Date,
  finishDate:Date,
  price : number,
  products : Product[];
}
