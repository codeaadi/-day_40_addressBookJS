console.log("Welcome To AddressBook");
class Contact {
  constructor(firstName, lastName, address, city, state, zip, phoneNo, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phoneNo = phoneNo;
    this.email = email;
  }
  set firstName(firstName) {
    this.firstName = firstName;
  }
  get firstName() {
    return this.firstName;
  }
  set lastName(lastName) {
    this.lastName = lastName;
  }
  get lastName() {
    return this.lastName;
  }
  set address(address) {
    this.address = address;
  }
  get address() {
    return this.address;
  }
  set city(city) {
    this.city = city;
  }
  get city() {
    return this.city;
  }
  set state(state) {
    this.state = state;
  }
  get state() {
    return this.state;
  }
  set zip(zip) {
    this.zip = zip;
  }
  get zip() {
    return this.zip;
  }
  set phoneNo(phoneNo) {
    this.phoneNo = phoneNo;
  }
  get phoneNo() {
    this.phoneNo;
  }
  set email(email) {
    this.email = email;
  }
  get email() {
    this.email;
  }

  tostring() {
    return (
      "First Name = " +
      this.firstName +
      ", Last Name = " +
      this.lastName +
      ", Address = " +
      this.address +
      ", city = " +
      this.city +
      ", State = " +
      this.state +
      ", Zip = " +
      this.zip +
      ", Email = " +
      this.email
    );
  }
}

const prompt = require("prompt-sync")({sigint:true}); 
const addressbook = new Array();
let contact = "";
let createContact = () => {
    let f_name = getUserInput(prompt("Eter the first name : "), "^[A-Z][a-zA-Z]{2,}");
    let l_name = getUserInput(prompt("Enter the last name : "), "^[A-Z][a-zA-Z]{2,}");
    let address = getUserInput(prompt("Enter the address : "), "[a-zA-Z\w\d\s]{3,}");
    let city = getUserInput(prompt("Enter the city name : "), "[a-zA-Z\w\d\s]{3,}");
    let state = getUserInput(prompt("Enter the state name : "), "[a-zA-Z\w\d\s]{3,}");
    let zip = getUserInput(prompt("Enter the zip code : "), "[0-9]{6}");
    let ph_no = getUserInput(prompt("Enter the phone number : "), "^(91)?([ ])?[6-9]{1}[0-9]{9}$");
    let email = getUserInput(prompt("Enter the email address : "), "^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)*@([a-z1-9]+)([.][a-z]*)?(\.[a-z]{2,})$");
    contact = new Contact(f_name, l_name, address, city, state, zip, ph_no, email);
}
let getUserInput = (value, regexPattern) => {
    let regex = RegExp(regexPattern);
    if(regex.test(value)) {
        return value;
    }
    else {
        console.log("Invalid input");
        value = prompt("Enter valid input : ");
        getUserInput(value, regexPattern);
    }
}
let addContact = () => {
    createContact();
    addressbook.push(contact);
}
let display = () => {
    console.log(addressbook.toString());
}

let search = () => {
    let searchByname = prompt("Enter the first name to search ");
    for(let i = 0; i < addressbook.length; i++) {
        if(searchByname == addressbook[i].getF_name) {
            return i;
        }
    }
}
//uc4 search the contact by name and edit it 
let editContact = () => {
    let i = search();
    let option2 = prompt("Edit 1. First name 2. Last name 3. Address 4. City 5. State 6. Zip code 7. Phone number 8. Email address ");
    let value = prompt("Enter the data needs to be changed ");
        switch(option2) {
            case '1':
                addressbook[i].setF_name = value;
                break;
            case '2':
                addressbook[i].setL_name = value;
                break;
            case '3':
                addressbook[i].setAddress = value;
                break;
            case '4':
                addressbook[i].setCity = value;
                break;
            case '5':
                addressbook[i].setState = value;
                break;
            case '6':
                addressbook[i].setZip = value;
                break;
            case '7':
                addressbook[i].setPh_no = value;
                break;
            case '8':
                addressbook[i].setEmail= value;
                break;
            default:
            console.log("Invalid option");                
        }
}
//uc5 search by name and delete the contact
let deleteContact = () => {
    let i = search();
    delete addressbook[i];
    console.log("Contact has been deleted successfully");
}
//uc6 count the contacts using reduce()
let countOfContacts = () => { let count = addressbook.reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue), []
  ).filter(item => item.enabled).length;
console.log(count+1);
};
// let option1 = 0;
let menu = () => {
let option1 = prompt("Menu: 1. Add Contact 2. Search By name and edit it 3. Display 4. Search By name and delete it 5. Count of contacts 6. Exit ");
switch (option1) {
    case '1':
        addContact();
        menu();
        break;
    case '2':
        editContact();
        menu();
        break;
    case '3':
        display();
        menu();
        break;
    case '4':
        deleteContact();
        menu();
        break; 
    case '5':
        countOfContacts();
        menu();
        break;      
    case '6':
        break;         
    default:
        console.log("Invalid option");
        menu();    
    }
}
menu();