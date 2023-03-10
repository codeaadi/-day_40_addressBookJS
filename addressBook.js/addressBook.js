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
let firstName = getUserInput(prompt("Eter the first name : "), "^[A-Z][a-zA-Z]{2,}");
let lastName = getUserInput(prompt("Enter the last name : "), "^[A-Z][a-zA-Z]{2,}");
let address = getUserInput(prompt("Enter the address : "), "[a-zA-Z\w\d\s]{3,}");
let city = getUserInput(prompt("Enter the city name : "), "[a-zA-Z\w\d\s]{3,}");
let state = getUserInput(prompt("Enter the state name : "), "[a-zA-Z\w\d\s]{3,}");
let zip = getUserInput(prompt("Enter the zip code : "), "[0-9]{6}");
let phoneNo = getUserInput(prompt("Enter the phone number : "), "^(91)?([ ])?[6-9]{1}[0-9]{9}$");
let email = getUserInput(prompt("Enter the email address : "), "^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)*@([a-z1-9]+)([.][a-z]*)?(\.[a-z]{2,})$");
const addressbook = new Array();
let contact = "";
function createContact() {
    contact = new Contact(f_name, l_name, address, city, state, zip, ph_no, email);
}
function getUserInput(value, regexPattern) {
    let regex = RegExp(regexPattern);
    if(regex.test(value)) {
        return value;
    }
    else {
        console.log("Invalid input");
        value = prompt("Enter valid input");
        getUserInput(value, regexPattern);
    }
}
function addContact() {
    createContact();
    addressbook.push(contact);
    console.log(addressbook.toString());
}
addContact();