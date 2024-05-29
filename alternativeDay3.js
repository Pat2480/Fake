import { Faker, faker } from "@faker-js/faker";

function generateProducts(numProducts) {
    const products = [];
    for (let i = 0; i < numProducts; i++) {
        products.push({
            id: faker.string.uuid(),
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            price: faker.commerce.price(),
            category: faker.commerce.department(),
            stock: faker.number.int({min: 1, max: 100})
        });
    }
    return products;
}

function generateTransactions(numTransactions, products) {
    const transactions = [];
    for (let i = 0; i < numTransactions; i++) {
        const randomProduct = faker.helpers.arrayElement(products);
        transactions.push({
            id: faker.string.uuid(),
            productId: randomProduct.id,
            tranType: faker.finance.transactionType(),
            tranDescription: faker.finance.transactionDescription(),
            date: faker.date.recent(),
        });
    }
    return transactions;
}

const products = generateProducts(5);
console.log('Products:', products);

const transactions = generateTransactions(5,products);
console.log('Transactions:', transactions);