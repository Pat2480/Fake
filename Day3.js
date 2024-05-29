import { faker, fakerTH } from '@faker-js/faker';
import fs from 'fs/promises'; 

// Async function to read and parse JSON file
async function loadThaiNames() {
    const data = await fs.readFile('./thainame-data.json', 'utf8');
    return JSON.parse(data);
}

async function main() {
    // Load Thai names data
    const thaiNamesData = await loadThaiNames();

    // Extract male and female names
    const maleNames = thaiNamesData.thaiName[0].maleName;
    const femaleNames = thaiNamesData.thaiName[1].femaleName;

    // Function to generate a random Thai first name
    function getRandomThaiFirstName(gender) {
        if (gender === 'male') {
            return faker.helpers.arrayElement(maleNames);
        } else if (gender === 'female') {
            return faker.helpers.arrayElement(femaleNames);
        } else {
            throw new Error('Gender must be "male" or "female"');
        }
    }

    // Function to generate a person with Thai names and other details
    function generatePerson() {
        const gender = faker.helpers.arrayElement(['male', 'female']);
        const firstName = getRandomThaiFirstName(gender);
        const lastName = fakerTH.person.lastName();  
        const email = faker.internet.email();
        const sex = gender === 'male' ? 'ชาย' : 'หญิง';  // Translating gender to Thai
        const state = faker.location.state();
        const streetAddress = fakerTH.location.streetAddress();
        const zipCode = fakerTH.location.zipCode();
        const combinedAddress = `${state} ${streetAddress} ${zipCode}`;

        return {
            ชื่อ: firstName,
            นามสกุล: lastName,
            เพศ: sex,
            อีเมล์: email,
            ที่อยู่สำหรับจัดส่ง: combinedAddress,
        };
    }

    const generatePersons = (numUsers = 1) => {
        return Array.from({ length: numUsers }, generatePerson);
    };

    const product = generatePersons();
    console.log(product);
}

// Execute the main function
main().catch(error => {
    console.error('Error:', error);
});









// import { faker, fakerTH } from '@faker-js/faker';
// import fs from 'fs/promises'; 

// // Async function to read and parse JSON file
// async function loadThaiNames() {
//     const data = await fs.readFile('./thainame-data.json', 'utf8');
//     return JSON.parse(data);
// }

// async function loadThaiProvinceData() {
//     const data = await fs.readFile('./thaiprovince-data.json', 'utf8');
//     return JSON.parse(data);
// }

// async function main() {
//     // Load Thai names data
//     const thaiNamesData = await loadThaiNames();

//     // Extract male and female names
//     const maleNames = thaiNamesData.thaiName[0].maleName;
//     const femaleNames = thaiNamesData.thaiName[1].femaleName;

//     // Load Thai province data
//     const thaiProvinceData = await loadThaiProvinceData();

//     // Extract provinces and districts
//     const provinces = thaiProvinceData.provinces;

//     // Function to generate a random Thai first name
//     function getRandomThaiFirstName(gender) {
//         if (gender === 'male') {
//             return faker.helpers.arrayElement(maleNames);
//         } else if (gender === 'female') {
//             return faker.helpers.arrayElement(femaleNames);
//         } else {
//             throw new Error('Gender must be "male" or "female"');
//         }
//     }

//     // Function to get a random thai location
//     function genRandomthaiProvince() {
//         const province = faker.helpers.arrayElement(Object.keys(provinces));
//         const districts = provinces[province];
//         const district = faker.helpers.arrayElement(Object.keys(districts));
//         const zipCodes = districts[district].map(({ zipcode }) => zipcode);
//         const zipCode = faker.helpers.arrayElement(zipCodes);

//         return `${district} ${province} ${zipCode}`;
//     }

//     // Function to generate a person 
//     function generatePerson() {
//         const gender = faker.helpers.arrayElement(['male', 'female']);
//         const firstName = getRandomThaiFirstName(gender);
//         const lastName = fakerTH.person.lastName();  
//         const email = faker.internet.email();
//         const sex = gender === 'male' ? 'ชาย' : 'หญิง'; 
//         const location = genRandomthaiProvince();

//         return {
//             ชื่อ: firstName,
//             นามสกุล: lastName,
//             เพศ: sex,
//             อีเมล์: email,
//             ที่อยู่สำหรับจัดส่ง: location,
//         };
//     }

//     const generatePersons = (numUsers = 1) => {
//         return Array.from({ length: numUsers }, generatePerson);
//     };

//     const product = generatePersons();
//     console.log(product);
// }

// // Execute the main function
// main().catch(error => {
//     console.error('Error:', error);
// });
