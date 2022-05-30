export const formatCurrency = (price: number) => {
  if (!price) return '';
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

export const calculateDiscount = (fullPrice: number, discount: number) => {
  if (fullPrice && discount > 0) {
    return fullPrice - discount * fullPrice;
  }
};

export const formatInstallments = (price: number, inst: number) => {
  if (inst >= 1) {
    const installmentAmount = price / inst;
    return `${inst}x de ${formatCurrency(installmentAmount)}`;
  }
};
