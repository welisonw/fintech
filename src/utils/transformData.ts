import { SaleDay } from "../interfaces/SaleDay";
import { SaleProps } from "../interfaces/SaleProps";

export function transformData(data: SaleProps[]): SaleDay[] {
  const days = data.reduce((accum: { [key: string]: SaleDay }, curr) => {
    const day = curr.data.split(" ")[0];
    
    if (!accum[day]) {
      accum[day] = {
        data: day,
        pago: 0,
        processando: 0,
        falha: 0,
      } 
    }

    accum[day][curr.status] += curr.preco;

    return accum;
  }, {});



  return Object.values(days).map(day => ({
    ...day,
    data: day.data.substring(5),
  }));
}
