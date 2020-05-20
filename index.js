
// regex for only number from 0 to 9:
// document.getElementById("").addEventListener("input",  (e) => {
// const numbers = /^[0-9]+$/;
// if(e.target.value < 0 || !e.target.value.match(numbers)) {
//     e.target.value = 0;
// } else if (e.target.value > 8 || e.target.value.toString().length > 1){
//     e.target.value = 8;
// }

PRODUCTS = loadJSON("products.json");
let purchase = new Purchase();

function showProductList() {
    let rows = document.getElementById("products");
    PRODUCTS.forEach(function (product, index) {

        let tableRow = document.createElement("tr");
        rows.appendChild(tableRow);

        tableRow.innerHTML = `<th scope="row">${index + 1}</th>
                         <td>${product.name}</td>
                         <td>${product.price} DKK</td> 
                         <td><input type="number" id="${product.name}" value="0" min="0" max="10" class="form-control"></td>`;
    });
}

function showDeliveryOptions() {
    let elements = document.getElementById("deliveryOptions");
    DELIVERY_OPTIONS.forEach(function (element, index) {

        let div = document.createElement("div");
        div.classList.add("form-check");
        elements.appendChild(div);

        div.innerHTML = `<input class="form-check-input" type="radio" name="deliveryOption" id="${element.name}" value="${element.name}">
                         <label class="form-check-label" for="${element.name}">${element.name} - ${element.price} DKK</label>`;

        document.getElementById(element.name).addEventListener("click",  (e) => {
            try {
                console.log("Delivery option: ", e.target.id);
                purchase.setDeliveryOption(e.target.id);
            } catch (error) {
                console.log(error);
            }
        });
    });


}

function setFirstName() {
    let firstName = document.getElementById("firstName").value;
    try {
        console.log("First name: ", firstName);
        purchase.setFirstName(firstName);
    } catch (error) {
        console.log(error);
    }
}

function setLastName() {
    let lastName = document.getElementById("lastName").value;
    try {
        console.log("Last name: ", lastName);
        purchase.setLastName(lastName);
    } catch (error) {
        console.log(error);
    }
}

function setAge() {
    let age = document.getElementById("age").value;
    try {
        console.log("Age: ", age);
        purchase.setAge(age);
    } catch (error) {
        console.log(error);
    }
}

function setEmailAddress() {
    let emailAddress = document.getElementById("emailAddress").value;
    try {
        console.log("Email: ", emailAddress);
        purchase.setEmail(emailAddress);
    } catch (error) {
        console.log(error);
    }
}

function setAddress() {
    let address = document.getElementById("address").value;
    try {
        console.log("Address: ", address);
        purchase.setAddress(address);
    } catch (error) {
        console.log(error);
    }
}

function setCardNumber() {
    let cardNumber = document.getElementById("cardNumber").value;
    try {
        console.log("Card number: ", cardNumber);
        purchase.setCardNumber(cardNumber);
    } catch (error) {
        console.log(error);
    }
}

function setCardSecurityCode() {
    let cardSecurityCode = document.getElementById("cardSecurityCode").value;
    try {
        console.log("Card security code: ", cardSecurityCode);
        purchase.setCardSecurityCode(cardSecurityCode);
    } catch (error) {
        console.log(error);
    }
}

function showReceipt() {
    alert(purchase.buyProducts());
}