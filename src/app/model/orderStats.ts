export interface OrderStats {
  id: number,
  customerName: string,
  orderNumber: string,
  daysToDeadline: number,
  orderWeight: number,
  doneWeight:number,
  workProgress: number;
}
