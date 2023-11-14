import { SaleDay } from "../interfaces/SaleDay";
import { VendaProps } from "../interfaces/VendaProps";

export function transformData(data: VendaProps[]): SaleDay[] {
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
