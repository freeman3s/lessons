import Business from './business';
import employersNames from './employers';
import {money, eu, rus} from './sponsors';

const business = new Business();
business.render({
    owner: 'Sam',
    cash: money,
    emp: employersNames,
    eu: eu,
    rus: rus
});