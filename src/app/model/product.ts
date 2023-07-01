import {Item} from "./item";

export interface Product {
  id: number,
  drawingName: string,
  pieces: number,
  totalWeight: number,
  orderId: number,
  items: Item[];
}
