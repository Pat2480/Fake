import { faker, fakerTH } from '@faker-js/faker';
import fs from 'fs/promises'; 

// Async function to read and parse JSON file.
async function loadThaiNames() {
    const data = await fs.readFile('./thainame-data.json', 'utf8');
    return JSON.parse(data);
}

async function loadThaiProvinceData() {
    const data = await fs.readFile('./thaiprovince-data.json', 'utf8');
    return JSON.parse(data);
}

async function main() {
    // Load data
    const thaiNamesData = await loadThaiNames();
    const thaiProvinceData = await loadThaiProvinceData();
    // Extract data
    const maleNames = thaiNamesData.thaiName[0].maleName;
    const femaleNames = thaiNamesData.thaiName[1].femaleName;
    const provinces = thaiProvinceData.provinces;

    // Function to generate a random Thai first name.
    function getRandomThaiFirstName(gender) {
        if (gender === 'male') {
            return faker.helpers.arrayElement(maleNames);
        } else if (gender === 'female') {
            return faker.helpers.arrayElement(femaleNames);
        } else {
            throw new Error('Gender must be "male" or "female"');
        }
    }

    // Function to get a random thai location from JSON.
    function genRandomthaiProvince() {
        const province = faker.helpers.arrayElement(Object.keys(provinces));
        const districts = provinces[province];
        const district = faker.helpers.arrayElement(Object.keys(districts));
        const zipCodes = districts[district].map(({ zipcode }) => zipcode);
        const zipCode = faker.helpers.arrayElement(zipCodes);

        return `${district} ${province} ${zipCode}`;
    }

    // Function to generate a person info for shipping.
    function generatePerson() {
        const gender = faker.helpers.arrayElement(['male', 'female']);
        const firstName = getRandomThaiFirstName(gender);
        const lastName = fakerTH.person.lastName();  
        const email = faker.internet.email();
        const sex = gender === 'male' ? 'ชาย' : 'หญิง'; 
        const location = genRandomthaiProvince();
        const phone = faker.helpers.fromRegExp('[0][6-9][0-9]-[0-9]{3}-[0-4]{4}');

        return {
            ชื่อ: firstName,
            นามสกุล: lastName,
            เพศ: sex,
            อีเมล์: email,
            ที่อยู่สำหรับจัดส่ง: location,
            เบอร์โทร: phone
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
