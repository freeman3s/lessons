var sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};
const {cash, eu, rus} = sponsors;

const calcCash = (cash) => cash.reduce( (a, b) => a + b);

const money = calcCash(cash);

export {money, eu, rus};