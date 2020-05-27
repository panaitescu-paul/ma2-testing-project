// Order of execution:
// ls / dir
// cd to folder
// to install the dependencies run: npm install
// to run just the tests: npm test
// to test code coverage: npm run coverage
let mocha = require('mocha');
let chai = require('chai');
let describe = mocha.describe;
let expect = chai.expect;
let assert = require('chai').assert;

chai.should();
const loadJsonFile = require('load-json-file');
let Purchase = require("./purchase");

describe('Test the First Name field', () => {
    let purchase;

    beforeEach(async () => {
        purchase = new Purchase();
    });

    it('should be valid', () => {
        const data = [
            "Pa",
            "Pau",
            "Paulspaulspaulspaulspaulspaulspaulspaul",
            "Paulspaulspaulspaulspaulspaulspaulspauls",
            "Paul-Danish-Alphabet-Æo-Øo",
            "Paul-Dash"
        ];
        data.forEach(value => {
            expect(() => purchase.setFirstName(value)).to.not.throw('First Name cannot be shorter than 2 characters.') &&
            expect(() => purchase.setFirstName(value)).to.not.throw('First Name cannot be longer than 40 characters.') &&
            expect(() => purchase.setFirstName(value)).to.not.throw('First Name is of incorrect formatting.') &&
            expect(() => purchase.setFirstName(value)).to.not.throw('firstName must be a string.');
        });
    });

    it('should be shorter than 2 characters', () => {
        const data = [
            "P"
        ];
        data.forEach(value => {
            expect(() => purchase.setFirstName(value)).to.throw('First Name cannot be shorter than 2 characters.');
        });
    });

    it('should be longer than 40 characters.', () => {
        const data = [
            "Paulspaulspaulspaulspaulspaulspaulspaulss"
        ];
        data.forEach(value => {
            expect(() => purchase.setFirstName(value)).to.throw('First Name cannot be longer than 40 characters.');
        });
    });

    it('should have incorrect formatting', () => {
        const data = [
            "Paul-Nondanishalphabet诶诶诶诶诶诶",
            "Paul-Specialcharacters!@#$%^&*()"
        ];
        data.forEach(value => {
            expect(() => purchase.setFirstName(value)).to.throw('First Name is of incorrect formatting.');
        });
    });

    it('should not be a string.', () => {
        const data = [
            5
        ];
        data.forEach(value => {
            expect(() => purchase.setFirstName(value)).to.throw('firstName must be a string.');
        });
    });
});

describe('Test the Last Name field', () => {
    let purchase;

    beforeEach(async () => {
        purchase = new Purchase();
    });

    it('should be valid', () => {
        const data = [
            "Pa",
            "Pan",
            "Panaitescupanaitescupanaitescupanaitescupanaitescuanaitesc",
            "Panaitescupanaitescupanaitescupanaitescupanaitescuanaitescu",
            "Panaitescu-Danish-Alphabet-Æo-Øo",
            "Panaitescu-Dash"
        ];
        data.forEach(value => {
            expect(() => purchase.setLastName(value)).to.not.throw('Last Name cannot be shorter than 2 characters.') &&
            expect(() => purchase.setLastName(value)).to.not.throw('Last Name cannot be longer than 60 characters.') &&
            expect(() => purchase.setLastName(value)).to.not.throw('Last Name is of incorrect formatting.') &&
            expect(() => purchase.setLastName(value)).to.not.throw('lastName must be a string.');
        });
    });

    it('should be shorter than 2 characters', () => {
        const data = [
            "P"
        ];
        data.forEach(value => {
            expect(() => purchase.setLastName(value)).to.throw('Last Name cannot be shorter than 2 characters.');
        });
    });

    it('should be longer than 60 characters.', () => {
        const data = [
            "Panaitescupanaitescupanaitescupanaitescupanaitescupanaitescul"
        ];
        data.forEach(value => {
            expect(() => purchase.setLastName(value)).to.throw('Last Name cannot be longer than 60 characters.');
        });
    });

    it('should have incorrect formatting', () => {
        const data = [
            "Panaitescu-Nondanishalphabet诶诶诶诶诶诶",
            "Panaitescu-Specialcharacters!@#$%^&*()"
        ];
        data.forEach(value => {
            expect(() => purchase.setLastName(value)).to.throw('Last Name is of incorrect formatting.');
        });
    });

    it('should not be a string.', () => {
        const data = [
            5
        ];
        data.forEach(value => {
            expect(() => purchase.setLastName(value)).to.throw('lastName must be a string.');
        });
    });
});


describe('Test the Age field', () => {
    let purchase;

    beforeEach(async () => {
        purchase = new Purchase();
    });

    describe('Age field', () => {
        it('should be valid', () => {
            const data = [
                14,
                15,
                149,
                150
            ];
            data.forEach(value => {
                expect(() => purchase.setAge(value)).to.not.throw('Age cannot be smaller than 14.') &&
                expect(() => purchase.setAge(value)).to.not.throw('Age cannot be bigger than 150.') &&
                expect(() => purchase.setAge(value)).to.not.throw('age must be an integer.');
            });
        });

        it('should be smaller than 14.', () => {
            const data = [
                13
            ];
            data.forEach(value => {
                expect(() => purchase.setAge(value)).to.throw('Age cannot be smaller than 14.');
            });
        });

        it('should be bigger than 150.', () => {
            const data = [
                151
            ];
            data.forEach(value => {
                expect(() => purchase.setAge(value)).to.throw('Age cannot be bigger than 150.');
            });
        });

        it('should be an integer.', () => {
            const data = [
                23.5,
                "twenty-three$"
            ];
            data.forEach(value => {
                expect(() => purchase.setAge(value)).to.throw('age must be an integer.');
            });
        });
    });
});

describe('Test the Address field', () => {
    let purchase;

    beforeEach(async () => {
        purchase = new Purchase();
    });

    it('should be valid', () => {
        const data = [
            "Albert",
            "Alberts",
            "Niels Bohrs Alle 23, 5230 Odense M, Odense, Denmark but the address needs to be exactly one hundred nineteen, soo......",
            "thisistwentysevencharactersthisistwentysevencharactersthisistwentysevencharactersthisistwentysevencharactersthisistwenty",
            "Botanisk Centralbibliotek, Sølvgade 83, opg. S, DK-1307 København K., DENMARK"
        ];
        data.forEach(value => {
            expect(() => purchase.setAddress(value)).to.not.throw('Address cannot be shorter than 6 characters.') &&
            expect(() => purchase.setAddress(value)).to.not.throw('Address cannot be longer than 120 characters.') &&
            expect(() => purchase.setAddress(value)).to.not.throw('Address is of incorrect formatting.') &&
            expect(() => purchase.setAddress(value)).to.not.throw('address must be a string.');
        });
    });

    it('should be shorter than 6 characters.', () => {
        const data = [
            "Alber"
        ];
        data.forEach(value => {
            expect(() => purchase.setAddress(value)).to.throw('Address cannot be shorter than 6 characters.');
        });
    });

    it('should be longer than 120 characters.', () => {
        const data = [
            "thisistwentysevencharactersthisistwentysevencharactersthisistwentysevencharactersthisistwentysevencharactersthisistwentys"
        ];
        data.forEach(value => {
            expect(() => purchase.setAddress(value)).to.throw('Address cannot be longer than 120 characters.');
        });
    });

    it('should have incorrect formatting', () => {
        const data = [
            "Martin Rebas, Gyllenkrooksgatan 1, 412 84 GÖTEBORG, SWEDEN",
            "Peter Mogensen, c/o Fictional Company, Niels Bohrs Alle 23, 1330"
        ];
        data.forEach(value => {
            expect(() => purchase.setAddress(value)).to.throw('Address is of incorrect formatting.');
        });
    });

    it('should not be a string.', () => {
        const data = [
            100
        ];
        data.forEach(value => {
            expect(() => purchase.setAddress(value)).to.throw('address must be a string.');
        });
    });
});

describe('Test the Card Number field', () => {
    let purchase;

    beforeEach(async () => {
        purchase = new Purchase();
    });

    it('should be valid', () => {
        const data = [
            "1234123412341234"
        ];
        data.forEach(value => {
            expect(() => purchase.setCardNumber(value)).to.not.throw('Card number must be exactly 16 digits.') &&
            expect(() => purchase.setCardNumber(value)).to.not.throw('Card number is of incorrect formatting.') &&
            expect(() => purchase.setCardNumber(value)).to.not.throw('cardNumber must be a string.');
        });
    });

    it('should be exactly 16 digits.', () => {
        const data = [
            "123412341234123",
            "12341234123412345"
        ];
        data.forEach(value => {
            expect(() => purchase.setCardNumber(value)).to.throw('Card number must be exactly 16 digits.');
        });
    });

    it('should have incorrect formatting', () => {
        const data = [
            "1234-1234-1234-1",
            "1234 1234 1234 1"
        ];
        data.forEach(value => {
            expect(() => purchase.setCardNumber(value)).to.throw('Card number is of incorrect formatting.');
        });
    });

    it('should not be a string.', () => {
        const data = [
            5
        ];
        data.forEach(value => {
            expect(() => purchase.setCardNumber(value)).to.throw('cardNumber must be a string.');
        });
    });
});

describe('Test the Card Security Code field', () => {
    let purchase;

    beforeEach(async () => {
        purchase = new Purchase();
    });

    describe('Card Security Code field', () => {
        it('should be valid', () => {
            const data = [
                "012"
            ];
            data.forEach(value => {
                expect(() => purchase.setCardSecurityCode(value)).to.not.throw('Card security code must be exactly 3 digits.') &&
                expect(() => purchase.setCardSecurityCode(value)).to.not.throw('Card security code is of incorrect formatting.') &&
                expect(() => purchase.setCardSecurityCode(value)).to.not.throw('cardSecurityCode must be a string.');
            });
        });

        it('should be exactly 3 digits', () => {
            const data = [
                "01",
                "0123"
            ];
            data.forEach(value => {
                expect(() => purchase.setCardSecurityCode(value)).to.throw('Card security code must be exactly 3 digits.');
            });
        });

        it('should have incorrect formatting', () => {
            const data = [
                "OI2"
            ];
            data.forEach(value => {
                expect(() => purchase.setCardSecurityCode(value)).to.throw('Card security code is of incorrect formatting.');
            });
        });

        it('should not be a string', () => {
            const data = [
                5
            ];
            data.forEach(value => {
                expect(() => purchase.setCardSecurityCode(value)).to.throw('cardSecurityCode must be a string.');
            });
        });
    });
});

describe('Test the Delivery Options field', () => {
    let purchase;

    beforeEach(async () => {
        purchase = new Purchase();
    });

    describe('Delivery Options field', () => {
        it('should be valid', () => {
            const data = [
                "Nearest Pickup Point",
                "Company Delivery",
                "Home Delivery"
            ];
            data.forEach(value => {
                expect(() => purchase.setDeliveryOption(value)).to.not.throw('Invalid delivery option.') &&
                expect(() => purchase.setDeliveryOption(value)).to.not.throw('deliveryOption must be a string.');
            });
        });

        it('should be invalid delivery option', () => {
            const data = [
                "PostNord",
                "GLS"
            ];
            data.forEach(value => {
                expect(() => purchase.setDeliveryOption(value)).to.throw('Invalid delivery option.');
            });
        });

        it('should not be a string', () => {
            const data = [
                5,
                2.5
            ];
            data.forEach(value => {
                expect(() => purchase.setDeliveryOption(value)).to.throw('deliveryOption must be a string.');
            });
        });
    });
});

describe('Test the Product Quantity field', () => {
    let purchase;

    beforeEach(async () => {
        purchase = new Purchase();
    });

    describe('Product Quantity field', () => {
        let purchase;

        beforeEach(async () => {
            purchase = new Purchase();
            purchase.PRODUCTS = await loadJsonFile("products.json");
        });

        it('should be valid', () => {
            const data = [
                ["1", 0],
                ["1", 1],
                ["1", 2],
                ["1", 9],
                ["1", 10],
            ];
            data.forEach(value => {
                expect(() => purchase.setProductQuantity(value[0], value[1])).to.not.throw('Quantity cannot be negative.') &&
                expect(() => purchase.setProductQuantity(value[0], value[1])).to.not.throw('Quantity cannot be bigger than 10.') &&
                expect(() => purchase.setProductQuantity(value[0], value[1])).to.not.throw('quantity must be an integer.') &&
                expect(() => purchase.setProductQuantity(value[0], value[1])).to.not.throw('Invalid product id.') &&
                expect(() => purchase.setProductQuantity(value[0], value[1])).to.not.throw('id must be a string.');
            });
        });

        it('should be negative', () => {
            const data = [
                ["1", -1],
            ];
            console.log('purchase.PRODUCTS', purchase.PRODUCTS);
            data.forEach(value => {
                expect(() => purchase.setProductQuantity(value[0], value[1])).to.throw('Quantity cannot be negative.');
            });
        });

        it('should be bigger than 10', () => {
            const data = [
                ["1", 11],
            ];
            data.forEach(value => {
                expect(() => purchase.setProductQuantity(value[0], value[1])).to.throw('Quantity cannot be bigger than 10.');
            });
        });

        it('should not be an integer', () => {
            const data = [
                ["1", 5.5],
                ["1", "abcd#!@"],
            ];
            data.forEach(value => {
                expect(() => purchase.setProductQuantity(value[0], value[1])).to.throw('quantity must be an integer.');
            });
        });

        it('should not have a string id', () => {
            const data = [
                [1, 5],
            ];
            data.forEach(value => {
                expect(() => purchase.setProductQuantity(value[0], value[1])).to.throw('id must be a string.');
            });
        });
    });
});














// describe('Purchase', () => {
//     describe('Product quantity', () => {
//         let purchase;
//
//         beforeEach(async () => {
//             purchase = new Purchase();
//             purchase.PRODUCTS = await loadJsonFile("products.json");
//         });
//
//         describe('check product id datatype', () => {
//             it('should accept string values', () => {
//                 const validValues = ["", "2", "sdaasad", "33", "-33.22", "false"];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setProductQuantity(value, 2)).to.not.throw('id must be a string.');
//                 });
//             });
//             it('should throw an error message if it is not a string', () => {
//                 const invalidValues = [1, 33, 2.44, true, -99, null, undefined];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setProductQuantity(value, 4)).to.throw('id must be a string.');
//                 });
//             });
//         });
//         describe('check quantity datatype', () => {
//             it('should accept integer values', () => {
//                 const validValues = [-100, -20, -1, 0, 1, 20, 100];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setProductQuantity("0", value)).to.not.throw('quantity must be an integer.');
//                 });
//             });
//             it('should throw an error message if it is not an integer', () => {
//                 const invalidValues = ["", true, null, undefined, 1.5, -1.5];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setProductQuantity("1", value)).to.throw('quantity must be an integer.');
//                 });
//             });
//             it('should throw an error message if it is not in the list of products', () => {
//                 const invalidValues = ["-1", "22", "100", "id", "true"];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setProductQuantity(value, 4)).to.throw('Invalid product id.');
//                 });
//             });
//         });
//         describe('check product id boundary values', () => {
//             it('should accept a string value that is in the list of products', () => {
//                 const validValues = ["1", "2", "19", "20"];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setProductQuantity(value, 4)).to.not.throw('Invalid product id.');
//                 });
//             });
//             it('should throw an error message if it is not in the list of products', () => {
//                 const invalidValues = ["-1", "22", "100", "id", "true"];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setProductQuantity(value, 4)).to.throw('Invalid product id.');
//                 });
//             });
//         });
//         describe('check quantity boundary values', () => {
//             it('should accept an integer that is positive', () => {
//                 const validValues = [0, 1, 2, 5, 10];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setProductQuantity('0', value)).to.not.throw('Quantity cannot be negative.');
//                 });
//             });
//             it('should throw an error message if it is negative', () => {
//                 const invalidValues = [-1, -2, -5, -10];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setProductQuantity("0", value)).to.throw('Quantity cannot be negative.');
//                 });
//             });
//             it('should accept an integer that is at most 10', () => {
//                 const validValues = [0, 1, 2, 5, 10];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setProductQuantity('0', value)).to.not.throw('Quantity cannot be bigger than 10.');
//                 });
//             });
//             it('should throw an error message if it is above 10', () => {
//                 const invalidValues = [11, 15, 20, 50];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setProductQuantity("0", value)).to.throw('Quantity cannot be bigger than 10.');
//                 });
//             });
//         });
//         describe('check product quantity changes', () => {
//             it('should start with an empty list of products', function () {
//                 purchase.productsList.should.deep.equal([]);
//             });
//             it('should add a product to the list of products', function () {
//                 purchase.setProductQuantity("0", 1);
//                 purchase.productsList[0].should.deep.equal({id: "0", quantity: 1});
//             });
//             it('should update the quantity of an existing product', function () {
//                 purchase.setProductQuantity("0", 1);
//                 purchase.setProductQuantity("0", 4);
//                 purchase.productsList[0].should.deep.equal({id: "0", quantity: 4});
//             });
//             it('should not add a product if quantity is 0', function () {
//                 purchase.setProductQuantity("0", 0);
//                 expect(purchase.productsList[0]).to.not.deep.equal({id: "0", quantity: 0});
//             });
//             it('should remove an existing product if quantity is 0', function () {
//                 purchase.setProductQuantity("0", 1);
//                 purchase.setProductQuantity("0", 0);
//                 expect(purchase.productsList[0]).to.not.deep.equal({id: "0", quantity: 0});
//             });
//         });
//         describe('check total price update', () => {
//             it('should increase by the price and quantity of a new product', function () {
//                 const product = purchase.PRODUCTS[0];
//                 purchase.setProductQuantity(product.id, 5);
//                 purchase.totalPrice.should.deep.equal(product.price * 5);
//             });
//             it('should change to the price and new quantity of an existing product', function () {
//                 const product = purchase.PRODUCTS[0];
//                 purchase.setProductQuantity(product.id, 5);
//                 purchase.setProductQuantity(product.id, 8);
//                 purchase.totalPrice.should.deep.equal(product.price * 8);
//             });
//             it('should change to zero if the product is removed', function () {
//                 const product = purchase.PRODUCTS[0];
//                 purchase.setProductQuantity(product.id, 5);
//                 purchase.setProductQuantity(product.id, 0);
//                 purchase.totalPrice.should.deep.equal(0);
//             });
//             // it('should change accordingly when all the products are added with quantity 10', function () {
//             //     const product = purchase.PRODUCTS[  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
//             //                                         10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
//             //     // purchase.setProductQuantity(product.id, 10);
//             //     // purchase.setProductQuantity(product.id, 10);
//             //
//             //     // product.forEach(value => {
//             //     //     purchase.setProductQuantity(value, 10);
//             //     // });
//             //
//             //     purchase.totalPrice.should.deep.equal(0);
//             // });
//         });
//     });
//     describe('First name', () => {
//         let purchase;
//
//         beforeEach(async () => {
//             purchase = new Purchase();
//         });
//
//         describe('Check the first name data type', () => {
//             it('should accept string values', () => {
//                 const validValues = ["", "Name", "sdaasad", "33", "-33.22", "false"];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setFirstName(value)).to.not.throw('firstName must be a string.');
//                 });
//             });
//             it('should throw an error if the first name is not a string', () => {
//                 const invalidValues = [1, 33, 2.44, true, -99];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setFirstName(value)).to.throw('firstName must be a string.');
//                 });
//             });
//         });
//
//         describe('Check the first name length', () => {
//             it('should throw an error if the first name is shorter than 2 characters', () => {
//                 const invalidValues = ["", "T", "S", "1"];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setFirstName(value)).to.throw('First Name cannot be shorter than 2 characters.');
//                 });
//             });
//             it('should accept characters longer than 2 for the first name', () => {
//                 const validValues = ["To", "12", "Mi", "Jack", "Lawrence"];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setFirstName(value)).to.not.throw('First Name cannot be shorter than 2 characters.');
//                 });
//             });
//             it('should throw an error if the first name is longer than 40 characters', () => {
//                 const invalidValues = ["12345678901234567890123456789012345678901", "sasasddsfsfdfsddsadsdssdfdasffdsfdasdsddssdafasdfasdsdfsfdaasfd"];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setFirstName(value)).to.throw('First Name cannot be longer than 40 characters.');
//                 });
//             });
//             it('should accept characters shorter than 40 for the first name', () => {
//                 const validValues = ["James", "Thomas", "1234567890123456789012345678901234567890", "Lawrence"];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setFirstName(value)).to.not.throw('First Name cannot be longer than 40 characters.');
//                 });
//             });
//         });
//         describe('Check the first name formatting', () => {
//             it('should throw an error if the first name is of incorrect formatting', () => {
//                 const invalidValues = ["NULL", "21211221", "lawrence", "james", "Constantin-razvan", "constantin-razvan", "constantin-Razvan", "true",
//                 "Răzvan", "发发发发", "Razvan!!!!", "Constantin#", "Itziar-Ituño"];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setFirstName(value)).to.throw('First Name is of incorrect formatting.');
//                 });
//             });
//             it('should accept character for first name of correct formatting', () => {
//                 const validValues = ["Lawrence", "James", "Constantin-Razvan", "Mark-Daniel", "Gustaf-Skarsgård", "Alex-Høgh"];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setFirstName(value)).to.not.throw('First Name is of incorrect formatting.');
//                 });
//             });
//         });
//         describe('Check the first name assigned value', () => {
//             it('should assign a string value to the variable', () => {
//                 purchase.setFirstName("Constantin-Razvan")
//                 assert.isString(purchase.buyer.firstName);
//             });
//             it('should be equal with the chosen value', () => {
//                 const validValues = ["Constantin-Razvan", "Marius-Daniel", "Dragos-Andrei", "Paul"];
//
//                 validValues.forEach(value => {
//                     purchase.setFirstName(value);
//                     purchase.buyer.firstName.should.equal(value);
//                 });
//             });
//         });
//     });
//     describe('Last name', () => {
//         let purchase;
//
//         beforeEach(async () => {
//             purchase = new Purchase();
//         });
//
//         describe('Check the last name data type', () => {
//             it('should accept string values', () => {
//                 const validValues = ["", "Name", "dsvasvdsd", "22", "-111.1", "true"];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setLastName(value)).to.not.throw('lastName must be a string.');
//                 });
//             });
//             it('should throw an error if the last name is not a string', () => {
//                 const invalidValues = [0, 2, 5.102, true, -39];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setLastName(value)).to.throw('lastName must be a string.');
//                 });
//             });
//         });
//
//         describe('Check the last name length', () => {
//             it('should throw an error if the last name is shorter than 2 characters', () => {
//                 const invalidValues = ["", "M", "Z", "1", "-"];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setLastName(value)).to.throw('Last Name cannot be shorter than 2 characters.');
//                 });
//             });
//             it('should accept characters longer than 2 for the Last Name', () => {
//                 const validValues = ["To", "12", "Vilanova", "Morrison", "Andersen", "false"];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setLastName(value)).to.not.throw('Last Name cannot be shorter than 2 characters.');
//                 });
//             });
//             it('should throw an error if the Last Name is longer than 60 characters', () => {
//                 const invalidValues = ["1234567890123456789012345678901234567890123456789012345678901", "VeryLongAnameAbove60charactersVeryLongAnameAbove60charactersVeryLongAnameAbove60charactersVeryLongAnameAbove60charactersVeryLongAnameAbove60characters"];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setLastName(value)).to.throw('Last Name cannot be longer than 60 characters.');
//                 });
//             });
//             it('should accept Last Name with less than 60 characters', () => {
//                 const validValues = ["James", "Thomas", "123456789012345678901234567890123456789012345678901234567890", "ShouldAcceptcharactersshorterthan60forthelastname"];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setLastName(value)).to.not.throw('Last Name cannot be longer than 40 characters.');
//                 });
//             });
//         });
//         describe('Check the last name formatting', () => {
//             it('should throw an error if the last name is of incorrect formatting', () => {
//                 const invalidValues = ["NULL", "21211221", "eriksen", "mocanasu", "Constantin-razvan", "constantin-razvan", "constantin-Razvan", "true",
//                     "Țărău", "发发发发", "Panaitescu!!!!", "Munteanu#", "Corberó"];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setLastName(value)).to.throw('Last Name is of incorrect formatting.');
//                 });
//             });
//             it('should accept character for last name of correct formatting', () => {
//                 const validValues = ["Tarau", "Corbero", "Munteanu", "Panaitescu", "Skarsgård", "Ilsø", "Århus", "Ellebæk"];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setLastName(value)).to.not.throw('Last Name is of incorrect formatting.');
//                 });
//             });
//         });
//         describe('Check the last name assigned value', () => {
//             it('should assign a string value to the variable', () => {
//                 purchase.setLastName("Ellebæk")
//                 assert.isString(purchase.buyer.lastName);
//             });
//             it('should be equal with the chosen value', () => {
//                 const validValues = ["Tarau", "Munteanu", "Mocanasu", "Panaitescu"];
//
//                 validValues.forEach(value => {
//                     purchase.setLastName(value);
//                     purchase.buyer.lastName.should.equal(value);
//                 });
//             });
//         });
//     });
//     describe('Age', () => {
//         let purchase;
//
//         beforeEach(async () => {
//             purchase = new Purchase();
//         });
//
//         describe('Check the age data type', () => {
//             it('should accept number values', () => {
//                 const validValues = [0, -999, 12, 1099999];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setAge(value)).to.not.throw('age must be an integer.');
//                 });
//             });
//             it('should throw an error if the age is not a number', () => {
//                 const invalidValues = ["", "1", true, "character", 22.22];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setAge(value)).to.throw('age must be an integer.');
//                 });
//             });
//         });
//
//         describe('Check the age boundaries', () => {
//             it('should throw an error if the age is smaller than 14', () => {
//                 const invalidValues = [13, 12, 0, 1, 6, 7, -1, -14];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setAge(value)).to.throw('Age cannot be smaller than 14.');
//                 });
//             });
//             it('should accept age bigger than 14', () => {
//                 const validValues = [14, 15, 22, 100, 114, 150, 149];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setAge(value)).to.not.throw('Age cannot be smaller than 14.');
//                 });
//             });
//             it('should throw an error if the age is bigger than 150', () => {
//                 const invalidValues = [151, 152, 180, 200, 1000, 2020, 9999999];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setAge(value)).to.throw('Age cannot be bigger than 150.');
//                 });
//             });
//             it('should accept age smaller than 150', () => {
//                 const validValues = [150, 149, 100, 75, 15, 14];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setAge(value)).to.not.throw('Age cannot be bigger than 150.');
//                 });
//             });
//         });
//         describe('Check the age assigned value', () => {
//             it('should assign a number value to the variable', () => {
//                 purchase.setAge(21);
//                 assert.isNumber(purchase.buyer.age);
//             });
//             it('should be equal with the chosen value', () => {
//                 const validValues = [21, 23, 14, 150];
//
//                 validValues.forEach(value => {
//                     purchase.setAge(value);
//                     purchase.buyer.age.should.equal(value);
//                 });
//             });
//         });
//     });
//     describe('Email', () => {
//         let purchase;
//
//         beforeEach(async () => {
//             purchase = new Purchase();
//         });
//
//         describe('check email datatype', () => {
//             it('should accept string values', function () {
//                 const validValues = ["", "asd", "asd@fgh.jkl"];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setEmail(value)).to.not.throw('email must be a string.');
//                 })
//             });
//
//             it('should not accept anything other than string values', function () {
//                 const invalidValues = [1, 1.1, true, null, undefined];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setEmail(value)).to.throw('email must be a string.');
//                 })
//             });
//         });
//
//         describe('check email length', () => {
//             it('should not accept empty string values', function () {
//                 const invalidValues = [""];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setEmail(value)).to.throw('Email cannot be shorter than 6 characters.');
//                 })
//             });
//
//             it('should not accept string values longer than 60 characters', function () {
//                 const invalidValues = ["asdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfg1",
//                     "asdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfg12"];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setEmail(value)).to.throw('Email cannot be longer than 60 characters.');
//                 })
//             });
//
//             it('should accept string values shorter than 60 characters', function () {
//                 const validValues = ["asd@email.com", "asd98714@email.com", "asdfgh@email.com"];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setEmail(value)).to.not.throw('Email cannot be longer than 60 characters.');
//                 })
//             });
//         });
//
//         describe('check email formatting', () => {
//             it('should not accept invalid email formats', function () {
//                 const invalidValues = ["asdfgh.com", "asd98714@2134com", "asdfghemailro"];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setEmail(value)).to.throw('Email is of incorrect formatting.');
//                 })
//             });
//
//             it('should accept valid email formats', function () {
//                 const validValues = ["asd@fgh.com", "asd98714@2134.com", "asdfgh@email.ro"];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setEmail(value)).to.not.throw('Email is of incorrect formatting.');
//                 })
//             });
//         });
//
//         describe('check assigned value', () => {
//             it('should assign a string value to the variable', function () {
//                 const validValue = "asd@fgh.com";
//
//                 purchase.setEmail(validValue);
//                 assert.isString(purchase.buyer.email);
//             });
//
//             it('should assign valid emails to the variable', function () {
//                 const validValues = ["asd@fgh.com", "asd98714@2134.com", "asdfgh@email.ro"];
//
//                 validValues.forEach(value => {
//                     purchase.setEmail(value);
//                     purchase.buyer.email.should.equal(value);
//                 });
//             });
//         });
//     });
//     describe('Address', () => {
//         let purchase;
//
//         beforeEach(async () => {
//             purchase = new Purchase();
//         });
//
//         describe('check address datatype', () => {
//             it('should accept string values', function () {
//                 const validValues = ["asd-14", "asd. 14, Footown Barvenue", "asd-14, Foo. Barvenue, 2630 Yeetsville, Republic of Kekistan"];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setAddress(value)).to.not.throw('address must be a string.');
//                 })
//             });
//
//             it('should not accept anything other than string values', function () {
//                 const invalidValues = [1, 1.1, true, null, undefined];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setAddress(value)).to.throw('address must be a string.');
//                 })
//             });
//         });
//
//         describe('check address length', () => {
//             it('should not accept string values shorter than 6 characters', function () {
//                 const invalidValues = ["", "a", "as", "asd", "asdf", "asdfg"];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setAddress(value)).to.throw('Address cannot be shorter than 6 characters.');
//                 })
//             });
//
//             it('should not accept string values longer than 120 characters', function () {
//                 const invalidValues = ["asdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfg1",
//                     "asdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfg12"];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setAddress(value)).to.throw('Address cannot be longer than 120 characters.');
//                 })
//             });
//
//             it('should accept string values shorter than 120 characters', function () {
//                 const validValues = ["asd-14", "asd. 14, Footown Barvenue", "asd-14, Foo. Barvenue, 2630 Yeetsville, Republic of Kekistan"];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setAddress(value)).to.not.throw('Address cannot be longer than 120 characters.');
//                 })
//             });
//         });
//
//         describe('check address formatting', () => {
//             it('should accept valid address formats', function () {
//                 const validValues = ["asd-14", "asd. 14, Footown Barvenue", "asd-14, Foo. Barvenue, 2630 Yeetsville, Republic of Kekistan"];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setAddress(value)).to.not.throw('Address is of incorrect formatting.');
//                 })
//             });
//
//             it('should not accept invalid email formats', function () {
//                 const invalidValues = ["asd+14", "a$d. 14, Footown_Barvenue", "asd@14, Foo. Barvenue, 2630 Y€€tsville, Republic of K€kistan"];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setAddress(value)).to.throw('Address is of incorrect formatting.');
//                 })
//             });
//         });
//
//         describe('check assigned value', () => {
//             it('should assign a string value to the variable', function () {
//                 const validValue = "asd. 14, Footown Barvenue";
//
//                 purchase.setAddress(validValue);
//                 assert.isString(purchase.shippingInfo.address);
//             });
//
//             it('should assign valid addresses to the variable', function () {
//                 const validValues = ["asd-14", "asd. 14, Footown Barvenue", "asd-14, Foo. Barvenue, 2630 Yeetsville, Republic of Kekistan"];
//
//                 validValues.forEach(value => {
//                     purchase.setAddress(value);
//                     purchase.shippingInfo.address.should.equal(value);
//                 })
//             });
//         });
//     });
//     describe('Card number', () => {
//         let purchase;
//
//         beforeEach(async () => {
//             purchase = new Purchase();
//         });
//
//         describe('check card number datatype', () => {
//             it('should accept string values', function () {
//                 const validValues = ["1234123412341234", "5678567856785678", "9012901290129012"];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setCardNumber(value)).to.not.throw('cardNumber must be a string.');
//                 })
//             });
//
//             it('should not accept anything other than string values', function () {
//                 const invalidValues = [1, 1.1, true, null, undefined];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setCardNumber(value)).to.throw('cardNumber must be a string.');
//                 })
//             });
//         });
//
//         describe('check card number length', () => {
//             it('should not accept string values longer than 16 characters', function () {
//                 const invalidValues = ["10000000000000000", "567856785678567890", "9012901290129012345"];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setCardNumber(value)).to.throw('Card number must be exactly 16 digits.');
//                 })
//             });
//
//             it('should not accept string values shorter than 16 characters', function () {
//                 const invalidValues = ["999999999999999", "123412341234123", "56785678567856", "9012901290129"];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setCardNumber(value)).to.throw('Card number must be exactly 16 digits.');
//                 })
//             });
//
//             it('should accept string values that are exactly 16 characters', function () {
//                 const validValues = ["1000000000000000", "1000000000000001", "9999999999999998", "9999999999999999", "asdf1234asdf1234", "1234123412341234", "!@#$asdf&*()kjhg"];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setCardNumber(value)).to.not.throw('Card number must be exactly 16 characters.');
//                 })
//             });
//         });
//
//         describe('check card number formatting', () => {
//             it('should accept valid card number formats', function () {
//                 const validValues = ["1234123412341234", "5678567856785678", "9012901290129012"];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setCardNumber(value)).to.not.throw('Card number is of incorrect formatting.');
//                 })
//             });
//
//             it('should not accept invalid card number formats', function () {
//                 const invalidValues = ["asdf1234asdf1234", "5678 5678 5678 5", "!@#$asdf&*()kjhg"];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setCardNumber(value)).to.throw('Card number is of incorrect formatting.');
//                 })
//             });
//         });
//
//         describe('check assigned value', () => {
//             it('should assign a string value to the variable', function () {
//                 const validValue = "1234123412341234";
//
//                 purchase.setCardNumber(validValue);
//                 assert.isString(purchase.shippingInfo.cardNumber);
//             });
//
//             it('should assign valid card numbers to the variable', function () {
//                 const validValues = ["1234123412341234", "5678567856785678", "9012901290129012"];
//
//                 validValues.forEach(value => {
//                     purchase.setCardNumber(value);
//                     purchase.shippingInfo.cardNumber.should.equal(value);
//                 })
//             });
//         });
//     });
//     describe('Card security code', () => {
//         let purchase;
//
//         beforeEach(async () => {
//             purchase = new Purchase();
//         });
//
//         describe('check card security code datatype', () => {
//             it('should accept string values', function () {
//                 const validValues = ["123", "456", "789"];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setCardSecurityCode(value)).to.not.throw('cardSecurityCode must be a string.');
//                 })
//             });
//
//             it('should not accept anything other than string values', function () {
//                 const invalidValues = [1, 1.1, true, null, undefined];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setCardSecurityCode(value)).to.throw('cardSecurityCode must be a string.');
//                 })
//             });
//         });
//
//         describe('check card security code length', () => {
//             it('should not accept string values longer than 3 characters', function () {
//                 const invalidValues = ["1000", "12345", "asdfg"];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setCardSecurityCode(value)).to.throw('Card security code must be exactly 3 digits.');
//                 })
//             });
//
//             it('should not accept string values shorter than 3 characters', function () {
//                 const invalidValues = ["", "99", "1", "a", "ad"];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setCardSecurityCode(value)).to.throw('Card security code must be exactly 3 digits.');
//                 })
//             });
//
//             it('should accept string values that are exactly 3 characters', function () {
//                 const validValues = ["100", "111", "998", "999", "asd", "!@#"];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setCardSecurityCode(value)).to.not.throw('Card security code must be exactly 3 digits.');
//                 })
//             });
//         });
//
//         describe('check card security code formatting', () => {
//             it('should accept valid card security code formats', function () {
//                 const validValues = ["123", "456", "789", "012"];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setCardSecurityCode(value)).to.not.throw('Card security code is of incorrect formatting.');
//                 })
//             });
//
//             it('should not accept invalid card number formats', function () {
//                 const invalidValues = ["asd", "!@#", "as2"];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setCardSecurityCode(value)).to.throw('Card security code is of incorrect formatting.');
//                 })
//             });
//         });
//
//         describe('check assigned value', () => {
//             it('should assign a string value to the variable', function () {
//                 const validValue = "123";
//
//                 purchase.setCardSecurityCode(validValue);
//                 assert.isString(purchase.shippingInfo.cardSecurityCode);
//             });
//
//             it('should assign valid card security codes to the variable', function () {
//                 const validValues = ["123", "456", "789" ,"012"];
//
//                 validValues.forEach(value => {
//                     purchase.setCardSecurityCode(value);
//                     purchase.shippingInfo.cardSecurityCode.should.equal(value);
//                 })
//             });
//         });
//     });
//     describe('Delivery option', () => {
//         let purchase;
//
//         beforeEach(async () => {
//             purchase = new Purchase();
//         });
//
//         describe('Check the delivery option data type', () => {
//             it('should accept string values', () => {
//                 const validValues = ["", "Delivery option", "Home Delivery", "Company Delivery", "-33.22", "false"];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setDeliveryOption(value)).to.not.throw('deliveryOption must be a string.');
//                 });
//             });
//             it('should throw an error if the delivery option is not a string', () => {
//                 const invalidValues = [0, 5, 7.44, false, -888];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setDeliveryOption(value)).to.throw('deliveryOption must be a string.');
//                 });
//             });
//         });
//         describe('Check the delivery option validity', () => {
//             it('should throw an error if the delivery option is of incorrect validity', () => {
//                 const invalidValues = ["NULL", "21211221", "Delivery", "PostNord", "false", "nearest pickup point", "company delivery", "home delivery",
//                 "Home delivery", "home Delivery"];
//
//                 invalidValues.forEach(value => {
//                     expect(() => purchase.setDeliveryOption(value)).to.throw('Invalid delivery option.');
//                 });
//             });
//             it('should accept character for delivery option of correct validity', () => {
//                 const validValues = ["Nearest Pickup Point", "Company Delivery", "Home Delivery"];
//
//                 validValues.forEach(value => {
//                     expect(() => purchase.setDeliveryOption(value)).to.not.throw('Invalid delivery option.');
//                 });
//             });
//         });
//         describe('Check the delivery option assigned value', () => {
//             it('should assign a string value to the variable', () => {
//                 purchase.setDeliveryOption("Home Delivery")
//                 assert.isString(purchase.shippingInfo.deliveryOption);
//             });
//             it('should be equal with the chosen value', () => {
//                 const validValues = ["Nearest Pickup Point", "Company Delivery", "Home Delivery"];
//
//                 validValues.forEach(value => {
//                     purchase.setDeliveryOption(value);
//                     purchase.shippingInfo.deliveryOption.should.equal(value);
//                 });
//             });
//         });
//         describe('Check the delivery option price addition to the total price', () => {
//             it('should the total price be 50 for the "Nearest Pickup Point" delivery option', () => {
//                 purchase.setDeliveryOption("Nearest Pickup Point")
//                 purchase.totalPrice.should.equal(50);
//             });
//             it('should the total price be 75 for the "Company Delivery" option', () => {
//                 purchase.setDeliveryOption("Company Delivery")
//                 purchase.totalPrice.should.equal(75);
//             });
//             it('should the total price be 100 for the "Home Delivery" option', () => {
//                 purchase.setDeliveryOption("Home Delivery")
//                 purchase.totalPrice.should.equal(100);
//             });
//         });
//     });
//     describe('Buy products', () => {
//         let purchase;
//
//         beforeEach(async () => {
//             purchase = new Purchase();
//             purchase.PRODUCTS = await loadJsonFile("products.json");
//         });
//
//         describe('Check the buy products return type', () => {
//             it('should return string values', () => {
//                 purchase.setFirstName("Constantin-Razvan");
//                 purchase.setLastName("Tarau");
//                 purchase.setAge(21);
//                 purchase.setEmail("cons0343@stud.kea.dk");
//                 purchase.setAddress("Albertslund");
//                 purchase.setCardNumber("1234123412341234");
//                 purchase.setCardSecurityCode("123");
//                 purchase.setDeliveryOption("Home Delivery");
//                 purchase.setProductQuantity("1", 3);
//                 purchase.setProductQuantity("2", 2);
//
//                 assert.isString(purchase.buyProducts());
//             });
//         });
//         describe('Check shopping cart empty', () => {
//             it('should throw an error if the shopping cart is empty', () => {
//                 purchase.setFirstName("Constantin-Razvan");
//                 purchase.setLastName("Tarau");
//                 purchase.setAge(21);
//                 purchase.setEmail("cons0343@stud.kea.dk");
//                 purchase.setAddress("Albertslund");
//                 purchase.setCardNumber("1234123412341234");
//                 purchase.setCardSecurityCode("123");
//                 purchase.setDeliveryOption("Home Delivery");
//
//                 expect(() => purchase.buyProducts()).to.throw('Shopping cart cannot be empty.');
//             });
//             it('should return a string if the shopping cart is not empty', () => {
//                 purchase.setFirstName("Constantin-Razvan");
//                 purchase.setLastName("Tarau");
//                 purchase.setAge(21);
//                 purchase.setEmail("cons0343@stud.kea.dk");
//                 purchase.setAddress("Albertslund");
//                 purchase.setCardNumber("1234123412341234");
//                 purchase.setCardSecurityCode("123");
//                 purchase.setDeliveryOption("Home Delivery");
//                 purchase.setProductQuantity("0", 6);
//                 purchase.setProductQuantity("17", 3);
//                 purchase.setProductQuantity("2", 4);
//                 purchase.setProductQuantity("10", 9);
//
//                 expect(() => purchase.buyProducts()).to.not.throw('Shopping cart cannot be empty.');
//             });
//         });
//         describe('Check adult-only products', () => {
//             it('should throw an error if the shopping cart contains adult-only products for a under 18 person', () => {
//                 purchase.setFirstName("Constantin-Razvan");
//                 purchase.setLastName("Tarau");
//                 purchase.setAge(17);
//                 purchase.setEmail("cons0343@stud.kea.dk");
//                 purchase.setAddress("Albertslund");
//                 purchase.setCardNumber("1234123412341234");
//                 purchase.setCardSecurityCode("123");
//                 purchase.setDeliveryOption("Home Delivery");
//                 purchase.setProductQuantity("3", 3);
//                 purchase.setProductQuantity("5", 2);
//                 purchase.setProductQuantity("10", 1);
//                 purchase.setProductQuantity("16", 4);
//
//                 expect(() => purchase.buyProducts()).to.throw('Shopping cart contains adult-only items.');
//             });
//             it('should return a string if the shopping cart contains adult-only products for an adult person', () => {
//                 purchase.setFirstName("Constantin-Razvan");
//                 purchase.setLastName("Tarau");
//                 purchase.setAge(21);
//                 purchase.setEmail("cons0343@stud.kea.dk");
//                 purchase.setAddress("Albertslund");
//                 purchase.setCardNumber("1234123412341234");
//                 purchase.setCardSecurityCode("123");
//                 purchase.setDeliveryOption("Home Delivery");
//                 purchase.setProductQuantity("3", 3);
//                 purchase.setProductQuantity("5", 2);
//                 purchase.setProductQuantity("10", 1);
//                 purchase.setProductQuantity("16", 4);
//
//                 expect(() => purchase.buyProducts()).to.not.throw('Shopping cart contains adult-only items.');
//             });
//         });
//         describe('Check buy products return values', () => {
//             it('should return the corresponding personal info, shipping info and products: 3 cheese and 2 water', () => {
//                 purchase.setFirstName("Constantin-Razvan");
//                 purchase.setLastName("Tarau");
//                 purchase.setAge(21);
//                 purchase.setEmail("cons0343@stud.kea.dk");
//                 purchase.setAddress("Albertslund");
//                 purchase.setCardNumber("1234123412341234");
//                 purchase.setCardSecurityCode("123");
//                 purchase.setDeliveryOption("Home Delivery");
//                 purchase.setProductQuantity("3", 3);
//                 purchase.setProductQuantity("5", 2);
//
//                 purchase.buyProducts().should.equal(`Name: Constantin-Razvan Tarau\n` +
//                     `Age: 21\n` +
//                     `Email: cons0343@stud.kea.dk\n` +
//                     `Address: Albertslund\n` +
//                     `Delivery: Home Delivery\n` +
//                     `Products: \n` +
//                     ` • Cheese: 36 DKK\n` +
//                     ` • Water: 20 DKK\n` +
//                     `Total Price: 156 DKK`
//                 );
//             });
//             it('should return the corresponding personal info, shipping info and products: 2 cucumber, 5 tomato, 2 wine, 6 beer, 1 sangria, 1 bread, 0 tequila, 3 apple pie, 2 apple', () => {
//                 purchase.setFirstName("Constantin-Razvan");
//                 purchase.setLastName("Tarau");
//                 purchase.setAge(21);
//                 purchase.setEmail("cons0343@stud.kea.dk");
//                 purchase.setAddress("Albertslund");
//                 purchase.setCardNumber("1234123412341234");
//                 purchase.setCardSecurityCode("123");
//                 purchase.setDeliveryOption("Company Delivery");
//
//                 purchase.setProductQuantity("1", 2);
//                 purchase.setProductQuantity("0", 5);
//                 purchase.setProductQuantity("8", 2);
//                 purchase.setProductQuantity("9", 6);
//                 purchase.setProductQuantity("13", 1);
//                 purchase.setProductQuantity("16", 1);
//                 purchase.setProductQuantity("12", 0);
//                 purchase.setProductQuantity("17", 3);
//                 purchase.setProductQuantity("20", 2);
//
//                 purchase.buyProducts().should.equal(`Name: Constantin-Razvan Tarau\n` +
//                     `Age: 21\n` +
//                     `Email: cons0343@stud.kea.dk\n` +
//                     `Address: Albertslund\n` +
//                     `Delivery: Company Delivery\n` +
//                     `Products: \n` +
//                     ` • Cucumber: 10 DKK\n` +
//                     ` • Tomato: 15 DKK\n` +
//                     ` • Wine: 50 DKK\n` +
//                     ` • Beer: 48 DKK\n` +
//                     ` • Sangria: 100 DKK\n` +
//                     ` • Bread: 9 DKK\n` +
//                     ` • Apple Pie: 27 DKK\n` +
//                     ` • Apple: 8 DKK\n` +
//                     `Total Price: 342 DKK`
//                 );
//             });
//             it('should return the corresponding personal info, shipping info and products: 10 onion, 8 apple, 9 agua fresca, 4 milk, 1 vodka, 3 cucumber, 0 banana, 7 orange, 5 orange juice', () => {
//                 purchase.setFirstName("Constantin-Razvan");
//                 purchase.setLastName("Tarau");
//                 purchase.setAge(21);
//                 purchase.setEmail("cons0343@stud.kea.dk");
//                 purchase.setAddress("Albertslund");
//                 purchase.setCardNumber("1234123412341234");
//                 purchase.setCardSecurityCode("123");
//                 purchase.setDeliveryOption("Company Delivery");
//
//                 purchase.setProductQuantity("2", 10);
//                 purchase.setProductQuantity("20", 8);
//                 purchase.setProductQuantity("15", 9);
//                 purchase.setProductQuantity("4", 4);
//                 purchase.setProductQuantity("11", 1);
//                 purchase.setProductQuantity("1", 3);
//                 purchase.setProductQuantity("19", 0);
//                 purchase.setProductQuantity("18", 7);
//                 purchase.setProductQuantity("18", 7);
//                 purchase.setProductQuantity("6", 5);
//                 purchase.setProductQuantity("6", 4);
//
//                 purchase.buyProducts().should.equal(`Name: Constantin-Razvan Tarau\n` +
//                     `Age: 21\n` +
//                     `Email: cons0343@stud.kea.dk\n` +
//                     `Address: Albertslund\n` +
//                     `Delivery: Company Delivery\n` +
//                     `Products: \n` +
//                     ` • Onion: 20 DKK\n` +
//                     ` • Apple: 32 DKK\n` +
//                     ` • Agua Fresca: 675 DKK\n` +
//                     ` • Milk: 32 DKK\n` +
//                     ` • Vodka: 130 DKK\n` +
//                     ` • Cucumber: 15 DKK\n` +
//                     ` • Orange: 28 DKK\n` +
//                     ` • Orange Juice: 56 DKK\n` +
//                     `Total Price: 1063 DKK`
//                 );
//             });
//             it('should return the corresponding personal info, shipping info and products for: each 21 available item, with quantity 1', () => {
//                 purchase.setFirstName("Paul");
//                 purchase.setLastName("Panaitescu");
//                 purchase.setAge(23);
//                 purchase.setEmail("paul0000@stud.kea.dk");
//                 purchase.setAddress("Albertslund");
//                 purchase.setCardNumber("1111222233334444");
//                 purchase.setCardSecurityCode("987");
//                 purchase.setDeliveryOption("Home Delivery");
//
//                 purchase.setProductQuantity("0", 1);
//                 purchase.setProductQuantity("1", 1);
//                 purchase.setProductQuantity("2", 1);
//                 purchase.setProductQuantity("3", 1);
//                 purchase.setProductQuantity("4", 1);
//                 purchase.setProductQuantity("5", 1);
//                 purchase.setProductQuantity("6", 1);
//                 purchase.setProductQuantity("7", 1);
//                 purchase.setProductQuantity("8", 1);
//                 purchase.setProductQuantity("9", 1);
//                 purchase.setProductQuantity("10", 1);
//                 purchase.setProductQuantity("11", 1);
//                 purchase.setProductQuantity("12", 1);
//                 purchase.setProductQuantity("13", 1);
//                 purchase.setProductQuantity("14", 1);
//                 purchase.setProductQuantity("15", 1);
//                 purchase.setProductQuantity("16", 1);
//                 purchase.setProductQuantity("17", 1);
//                 purchase.setProductQuantity("18", 1);
//                 purchase.setProductQuantity("19", 1);
//                 purchase.setProductQuantity("20", 1);
//
//                 purchase.buyProducts().should.equal(
//                     'Name: Paul Panaitescu\n' +
//                     'Age: 23\n' +
//                     'Email: paul0000@stud.kea.dk\n' +
//                     'Address: Albertslund\n' +
//                     'Delivery: Home Delivery\n' +
//                     'Products: \n' +
//                     ' • Tomato: 3 DKK\n' +
//                     ' • Cucumber: 5 DKK\n' +
//                     ' • Onion: 2 DKK\n' +
//                     ' • Cheese: 12 DKK\n' +
//                     ' • Milk: 8 DKK\n' +
//                     ' • Water: 10 DKK\n' +
//                     ' • Orange Juice: 14 DKK\n' +
//                     ' • Bubble Water: 8 DKK\n' +
//                     ' • Wine: 25 DKK\n' +
//                     ' • Beer: 8 DKK\n' +
//                     ' • Whiskey: 200 DKK\n' +
//                     ' • Vodka: 130 DKK\n' +
//                     ' • Tequila: 160 DKK\n' +
//                     ' • Sangria: 100 DKK\n' +
//                     ' • Spanish Sherry: 300 DKK\n' +
//                     ' • Agua Fresca: 75 DKK\n' +
//                     ' • Bread: 9 DKK\n' +
//                     ' • Apple Pie: 9 DKK\n' +
//                     ' • Orange: 4 DKK\n' +
//                     ' • Banana: 5 DKK\n' +
//                     ' • Apple: 4 DKK\n' +
//                     'Total Price: 1191 DKK'
//                 );
//             });
//             it('should return the corresponding personal info, shipping info and products for: each 21 available item, with quantity 10', () => {
//                 purchase.setFirstName("Paul");
//                 purchase.setLastName("Panaitescu");
//                 purchase.setAge(23);
//                 purchase.setEmail("paul0000@stud.kea.dk");
//                 purchase.setAddress("Albertslund");
//                 purchase.setCardNumber("1111222233334444");
//                 purchase.setCardSecurityCode("987");
//                 purchase.setDeliveryOption("Home Delivery");
//
//                 purchase.setProductQuantity("0", 10);
//                 purchase.setProductQuantity("1", 10);
//                 purchase.setProductQuantity("2", 10);
//                 purchase.setProductQuantity("3", 10);
//                 purchase.setProductQuantity("4", 10);
//                 purchase.setProductQuantity("5", 10);
//                 purchase.setProductQuantity("6", 10);
//                 purchase.setProductQuantity("7", 10);
//                 purchase.setProductQuantity("8", 10);
//                 purchase.setProductQuantity("9", 10);
//                 purchase.setProductQuantity("10", 10);
//                 purchase.setProductQuantity("11", 10);
//                 purchase.setProductQuantity("12", 10);
//                 purchase.setProductQuantity("13", 10);
//                 purchase.setProductQuantity("14", 10);
//                 purchase.setProductQuantity("15", 10);
//                 purchase.setProductQuantity("16", 10);
//                 purchase.setProductQuantity("17", 10);
//                 purchase.setProductQuantity("18", 10);
//                 purchase.setProductQuantity("19", 10);
//                 purchase.setProductQuantity("20", 10);
//
//                 purchase.buyProducts().should.equal(
//                     'Name: Paul Panaitescu\n' +
//                     'Age: 23\n' +
//                     'Email: paul0000@stud.kea.dk\n' +
//                     'Address: Albertslund\n' +
//                     'Delivery: Home Delivery\n' +
//                     'Products: \n' +
//                     ' • Tomato: 30 DKK\n' +
//                     ' • Cucumber: 50 DKK\n' +
//                     ' • Onion: 20 DKK\n' +
//                     ' • Cheese: 120 DKK\n' +
//                     ' • Milk: 80 DKK\n' +
//                     ' • Water: 100 DKK\n' +
//                     ' • Orange Juice: 140 DKK\n' +
//                     ' • Bubble Water: 80 DKK\n' +
//                     ' • Wine: 250 DKK\n' +
//                     ' • Beer: 80 DKK\n' +
//                     ' • Whiskey: 2000 DKK\n' +
//                     ' • Vodka: 1300 DKK\n' +
//                     ' • Tequila: 1600 DKK\n' +
//                     ' • Sangria: 1000 DKK\n' +
//                     ' • Spanish Sherry: 3000 DKK\n' +
//                     ' • Agua Fresca: 750 DKK\n' +
//                     ' • Bread: 90 DKK\n' +
//                     ' • Apple Pie: 90 DKK\n' +
//                     ' • Orange: 40 DKK\n' +
//                     ' • Banana: 50 DKK\n' +
//                     ' • Apple: 40 DKK\n' +
//                     'Total Price: 11010 DKK'
//                 );
//             });
//         });
//     });
// });
