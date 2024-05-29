import { Faker, faker } from "@faker-js/faker";

const generateUserData = (count) => {
    const users = [];
    for (let i = 0; i < count; i++) {
        const buildingNumber = faker.location.buildingNumber();
        const street = faker.location.street();
        const state = faker.location.state();
        const country = faker.location.country();
        const zipCode = faker.location.zipCode();
        const user = {
            firstName: faker.person.firstName({sex: 'female' | 'male'}),
            lastName: faker.person.lastName(),
            sex: faker.person.sexType(),
            email: faker.internet.email({firstName: '', lastName: ''}),
            birthday: faker.date.birthdate(),
            acNumber: faker.finance.accountNumber(),
            acName: faker.finance.accountName(),
            ccNumber: faker.finance.creditCardNumber(),

            combinedAddress: `${buildingNumber} ${street} ${state} ${country} ${zipCode}`
        };
        users.push(user);
    }
    return users
};

const fakeUsers =generateUserData(10);
console.log(fakeUsers);