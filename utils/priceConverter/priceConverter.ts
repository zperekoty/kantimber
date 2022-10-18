const priceConverter = (previousPrice: string): string =>
    Number(previousPrice).toLocaleString("ru-RU", {
        style: "currency",
        currency: "RUB",
        maximumFractionDigits: 0,
    });

export default priceConverter;
