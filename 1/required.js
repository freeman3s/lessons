const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter( name => name.length > 0 && name.length !== '' );
    employersNames = employersNames.map( name => name.toLowerCase().trim() );

var sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const calcCash = (cash) => cash.reduce( (a, b) => a + b);

const money = calcCash(sponsors.cash);

const {cash, eu, rus} = sponsors;

const makeBusiness = ({owner, director = 'Victor', cash, emp}) => {
    const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log(`And we have a sponsors: ${sumSponsors.join(' ')}`);
    console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
};
makeBusiness({
    owner: 'Sam',
    cash: money,
    emp: employersNames
});