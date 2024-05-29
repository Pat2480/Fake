import { faker } from "@faker-js/faker";

function generateFullNameAndEmail() {

  const fullName = faker.person.fullName();
  const email = `${fullName.replace(/ /g, '.').toLowerCase()}@example.com`;

  return {
    fullName: fullName,
    email: email
  };
}

const user = generateFullNameAndEmail();
console.log(user);
