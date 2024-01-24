const CURRENCY_FORMATTER_BRL = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
export function formatCurrency(number:number){
    return CURRENCY_FORMATTER_BRL.format(number);
}