//import { faker, fakerTH } from '@faker-js/faker';
import {faker, fakerTH} from '@faker-js/faker';
import { createRequire } from 'module';
const require = createRequire(import.meta.url)

const randomStreet = fakerTH.location.street();
const randomCity = fakerTH.location.city();
const randomState = fakerTH.location.state();
const randomZipcode = fakerTH.location.zipCode();
const randomCountry = "ไทย";
const randomLatitude = fakerTH.location.latitude();
const randomLongitude = fakerTH.location.longitude();

console.log("Fake Thai Address:");
console.log("ถนน:", randomStreet);
console.log("จังหวัด:", randomCity);
console.log("อำเภอ:", randomState);
console.log("รหัสไปรษณีย์", randomZipcode);
console.log("ประเทศ:", randomCountry);
console.log("Latitude:", randomLatitude);
console.log("Longitude:", randomLongitude);





