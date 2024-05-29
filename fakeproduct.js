//import { faker, fakerTH } from '@faker-js/faker';
import {faker, fakerTH} from '@faker-js/faker';
import { createRequire } from 'module';
const require = createRequire(import.meta.url)

const createProduct = () => {
    return {  
    product: faker.commerce.product(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    des: faker.commerce.productDescription(),
};
};
const createProducts = (numUsers = 10) => {
    return Array.from({length: numUsers}, createProduct);
}

let fakeProducts = createProducts(10);
console.log(fakeProducts);