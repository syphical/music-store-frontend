import {OrderItem} from './OrderItem';

export interface Order {
  id?: number;
  totalAmount: number;
  products: OrderItem[];
  orderItems?: OrderItem[];
  orderDate?: Date;
}
