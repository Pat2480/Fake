import { Faker, faker } from "@faker-js/faker";
//Day2 ------------------------------------------------------------------------------------------------------------------------

//Airline ------------------------------------------------------------------------------------------------------------------------

// const Airline1 = faker.airline.flightNumber()
// const Airline2 = faker.airline.flightNumber({ addLeadingZeros: true })
// const Airline3 = faker.airline.flightNumber({ addLeadingZeros: true, length: 2 })
// const Airline4 = faker.airline.flightNumber({ length: 3})
// const Airline5 = faker.airline.flightNumber({ length: { min:2, max:3 } })

// const Airline6 = faker.airline.recordLocator()
// const Airline7 = faker.airline.recordLocator({ allowNumerics: true })
// const Airline8 = faker.airline.recordLocator({ allowVisuallySimilarCharacters: true })
// const Airline9 = faker.airline.recordLocator({ allowNumerics: true, allowVisuallySimilarCharacters: true})

// const Airline10 = faker.airline.seat()
// const Airline11 = faker.airline.seat({ aircraftType: 'regional'})
// const Airline12 = faker.airline.seat({ aircraftType: 'widebody'})


// console.log("Flight Number:",Airline1)
// console.log("Flight Number:",Airline2)
// console.log("Flight Number:",Airline3)
// console.log("Flight Number:",Airline4)
// console.log("Flight Number:",Airline5)

// console.log(Airline6)
// console.log(Airline7)
// console.log(Airline8)
// console.log(Airline9)

// console.log("Seat Number:",Airline10)
// console.log("Seat Number:",Airline11)
// console.log("Seat Number:",Airline12)

//Color ------------------------------------------------------------------------------------------------------------------------

// const Color1 = faker.color.cmyk()
// const Color2 = faker.color.cmyk({ format: 'decimal'})
// const Color3 = faker.color.cmyk({ format: 'css'})
// const Color4 = faker.color.cmyk({ format: 'binary'})

// const Color5 = faker.color.colorByCSSColorSpace()
// const Color6 = faker.color.colorByCSSColorSpace({ format: 'decimal'})
// const Color7 = faker.color.colorByCSSColorSpace({ format: 'css', space: 'display-p3'})
// const Color8 = faker.color.colorByCSSColorSpace({ format: 'binary'})

// const Color9 = faker.color.cssSupportedFunction()

// const Color10 = faker.color.hsl()
// const Color11 = faker.color.hsl({ format: 'decimal'})
// const Color12 = faker.color.hsl({ format: 'decimal', includeAlpha: true})
// const Color13 = faker.color.hsl({ format: 'css',})
// const Color14 = faker.color.hsl({ format: 'css', includeAlpha: true})
// const Color15 = faker.color.hsl({ format: 'binary'})
// const Color16 = faker.color.hsl({ format: 'binary', includeAlpha: true})

// console.log(Color1)
// console.log(Color2)
// console.log(Color3)
// console.log(Color4)

// console.log(Color5)
// console.log(Color6)
// console.log(Color7)
// console.log(Color8)

// console.log("Color function name:",Color9)

// console.log(Color10)
// console.log(Color11)
// console.log(Color12)
// console.log(Color13)
// console.log(Color14)
// console.log(Color15)
// console.log(Color16)


//Commerce ------------------------------------------------------------------------------------------------------------------------
// const Commerce1 = faker.commerce.isbn()
// const Commerce2 = faker.commerce.isbn({ variant: 10, separator: ' ' })
// const Commerce3 = faker.commerce.isbn({ separator: ' ' })
// const Commerce4 = faker.commerce.isbn({ variant: 13, separator: ' ' })

// const Commerce5 = faker.commerce.price()
// const Commerce6 = faker.commerce.price({min: 300})
// const Commerce7 = faker.commerce.price({min: 200, max:300})
// const Commerce8 = faker.commerce.price({min: 500, max:700,dec: 0})
// const Commerce9 = faker.commerce.price({min: 400, max:600,dec: 0})

// console.log(Commerce1)
// console.log(Commerce2)
// console.log(Commerce3)
// console.log(Commerce4)

// console.log(Commerce5)
// console.log(Commerce6)
// console.log(Commerce7)
// console.log(Commerce8)
// console.log(Commerce9)


//Datatype ------------------------------------------------------------------------------------------------------------------------
// const Datatype1 = faker.datatype.array()
// const Datatype2 = faker.datatype.array(3)
// const Datatype3 = faker.datatype.array({ min:3, max:5})

// const Datatype4 = faker.datatype.bigInt({ min: 1000000n})

// const Datatype5 = faker.datatype.float({ precision: 0.01})
// const Datatype6 = faker.datatype.float({ precision: 0.001})

// console.log(Datatype1)
// console.log(Datatype2)
// console.log(Datatype3)

// console.log("bigInt:",Datatype4)
// console.log("float:", Datatype5)
// console.log("float:", Datatype6)

// function generateProduct() {
//     const productMaterial = faker.commerce.productMaterial();
//     const productName = faker.commerce.productName();
//     const productDescription = faker.commerce.productDescription();

//     const combinedDescription = ` ${productName}, ${productMaterial}, ${productDescription}`;
//     const ProductPrice = faker.commerce.price({min: 500, max: 900, dec: 0, symbol: '฿'})
//     const Stock = faker.finance.amount({min: 1, max: 100, dec: 0})

//     return {
//         Name: combinedDescription,
//         productp: ProductPrice,
//         products: Stock
//     };
// }

// const product = generateProduct();
// console.log(product);


// โจทย์ 1. ------------------------------------------------------------------------------------------------------------------------
// function generateProduct() {
//     const productName = faker.commerce.productName();
//     const productDescription = faker.commerce.productDescription();

//     // const combinedDescription = `${productName}, ${productMaterial} ${productName}, ${productAdjective} ${productName}.`;
//     const combinedblahblah = `${productName} is ${productDescription}.`;
//     const ProductPrice = faker.commerce.price({min: 500, max: 900, symbol: '฿'});
//     const ProductStock = faker.finance.amount({min: 1, max: 100, dec: 0});
//     return {
//         Name: productName,
//         // Name: combinedDescription,
//         Description: combinedblahblah,
//         Price: ProductPrice,
//         Stock: ProductStock,
//     };   
// };
// const generateProducts = (numUsers = 50) => {
//     return Array.from({length: numUsers}, generateProduct);
// }
// const product = generateProducts();
// console.log(product);

// enumValue 

// const Color = {
//     Red: 'Red',
//     Green: 'Green',
//     Blue: 'Blue'
// };

// const Direction = {
//     North: 'North', 
//     South: 'South'
// }

// const HttpStatus = {
//     Ok: 200, 
//     Created: 201, 
//     BadRequest: 400, 
//     Unauthorized: 401
// }

// const getRandomEnumValue = enumObject => {
//     const values = Object.values(enumObject);
//     return values[Math.floor(Math.random() * values.length)];
// };

// // Using the function to get a random color
// console.log(getRandomEnumValue(Color));
// console.log(getRandomEnumValue(Direction));
// console.log(getRandomEnumValue(HttpStatus));

//โจทย์ 2. ------------------------------------------------------------------------------------------------------------------------

function generatePerson() {
    
    const personFName = faker.person.firstName({sex: 'female' | 'male'});
    const personSName = faker.person.lastName({sex: 'female' | 'male'});
    const personEmail = faker.internet.email();
    const combinedEmail = `${personFName}_${personEmail}`;
    const personSex = faker.person.sex();
    const personBirth = faker.date.birthdate();
    const personBankacc = faker.finance.account();
    const personBankaccn = faker.finance.accountName();
    const personCreditCard = faker.finance.creditCardNumber();
    const psecondaryAdd = faker.location.secondaryAddress();
    const pState = faker.location.state();
    const pStreetAdd = faker.location.street();
    const pZipcode = faker.location.zipCode();
    const pCountry = faker.location.country();
    const combinedAddress = `${psecondaryAdd} ${pState} ${pStreetAdd} ${pCountry} ${pZipcode}`;

    return {
        FirstName: personFName,
        LastName: personSName,
        Sex: personSex,
        Email: combinedEmail,
        Birthdate: personBirth,
        BackAccount: personBankacc,
        BankAccountName: personBankaccn,
        CreditCardNo: personCreditCard,
        Adress: combinedAddress,
    };   
};
const generatePersons = (numUsers = 10) => {
    return Array.from({length: numUsers}, generatePerson);
}
const product = generatePersons();
console.log(product);