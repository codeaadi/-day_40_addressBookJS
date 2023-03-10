class AddressBook{
    constructor(...parameters){
        this.firstName = parameters[0];
        this.lastName = parameters[1];
        this.address = parameters[2];
        this.city = parameters[3];
        this.state = parameters[4];
        this.zip = parameters[5];
        this.phoneNumber = parameters[6];
        this.email = parameters[7];
    }

    get firstName(){ return this._firstName; }
    set firstName(fName){
        let fNameRegExp = RegExp("^[A-Z]{1}[a-z]{2,}");
        if(fNameRegExp.test(fName))
            this._firstName = fName;
        else throw 'FirstName is Not Matched';
    }

    get lastName(){ return this._lastName; }
    set lastName(lName){
        let lNameRegExp = RegExp("^[A-Z]{1}[a-z]{2,}");
        if(lNameRegExp.test(lName))
            this._lastName = lName;
        else throw 'LastName is Not Matched';
    }

    get address(){ return this._address; }
    set address(address){
        let addressRegex = RegExp('^[a-z A-z]{4,}');
        if(addressRegex.test(address))
            this._address = address;
        else throw 'Address is not Matched';
    }

    get city(){ return this._city; }
    set city(city){
        let cityRegex = RegExp('^[a-z A-z]{4,}');
        if(cityRegex.test(city))
            this._city = city;
        else throw 'City is not Matched';
    }

    get state(){ return this._state; }
    set state(state){
        let stateRegex = RegExp('^[a-z A-z]{4,}');
        if(stateRegex.test(state))
            this._state = state;
        else throw 'State is not Matched';
    }

    get zip(){ return this._zip; }
    set zip(zip){
        let zipRegex = RegExp('^[1-9]{1}[0-9]{5,}$');
        if(zipRegex.test(zip))
            this._zip = zip;
        else throw 'Zip is not Matched';
    }

    get phoneNumber(){ return this._phoneNumber;}
    set phoneNumber(phoneNo){
        let phoneRegex = new RegExp("^(\\d{2})( )([6-9]{1})(\\d{9})");
        if(phoneRegex.test(phoneNo)){
            this._phoneNumber = phoneNo;
        }else{
            throw "PhoneNumber is not Matched";
        }
    }

    get email(){ return this._email;}
    set email(e){
        let emailRegex = new RegExp("^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$");
        if(emailRegex.test(e)){
            this._email = e;
        }else{
            console.log("Email is not Matched");
        }
    }

    toString(){
        return "FirstName = " + this.firstName + ", LastName = " + this.lastName + ", Address = " + this.address +
                ", City = " + this.city + ", State = " + this.state + ", Zip = " + this.zip + ", PhoneNumber = " + this.phoneNumber + ", Email = " + this.email;
    }
}

let person = new AddressBook("Kallavai", "Sravanthi", "abcd", "Anantapur", "AndhraPradesh", "123456" , "98 9908229348", "srav12@gmail.com");
console.log(person.toString());
try{
    person.firstName = "kallavai";
    console.log(person.firstName);
}catch(e){
    console.error(e);
}
try{
    person.lastName = "Ka";
    console.log(person.lastName);
}catch(e){
    console.error(e);
}
try{
    person.address = "abc";
    console.log(person.address);
}catch(e){
    console.error(e);
}
try{
    person.city = "Atp";
    console.log(person.city);
}catch(e){
    console.error(e);
}
try{
    person.state = "Ap";
    console.log(person.state);
}catch(e){
    console.error(e);
}
try{
    person.zip = "123";
    console.log(person.zip);
}catch(e){
    console.error(e);
}
try{
    person.phoneNumber = "9908229348";
}catch(e){
    console.error(e);
}
try{
    person.email = "kalavai@gmail";
    console.log(person.email);
}catch(e){
    console.log(e);
}

let person1 = new AddressBook("Sravanthi", "Kallavai", "Abcde", "RangaReddy", "Telangana", "123453", "88 8765435621","kalva32@gmail.com" );
let person2 = new AddressBook("Bhavya", "Maligi", "Abcde", "Bbbbb", "Ddddd","234564", "99 8765435665", "bhavya122@gmail.com");
let addressBookArray = [];
addressBookArray[0] = person1;
addressBookArray[1] = person2;
console.log(addressBookArray);

//Uc4-Editing City which has firstName = "Sravanthi"
let objIndex = addressBookArray.findIndex((obj => obj.firstName == "Sravanthi"));
console.log("Before Update : " + addressBookArray[objIndex]);
addressBookArray[objIndex].city = "Kurnool";
console.log("After Update : " + addressBookArray[objIndex]);

//Uc5-Remove contact based on FirstName
let person3 = new AddressBook("Hema", "Manfdh", "Bgrfd", "Hyderabad", "Maharastra", "564763", "78 9876789654", "hema43@gmail.com" );
addressBookArray[2] = person3;
console.log(addressBookArray);
let index = addressBookArray.findIndex((obj => obj.firstName == "Hema"));
addressBookArray.splice(index, 1);
console.log("After Deletion");
console.log(addressBookArray);

//Uc6-Ability to find Number of Contacts in AddressBook
let count = addressBookArray.reduce((counter, person) => counter + 1, 0);
console.log(count);

//Uc7-Duplicate Check on Person Name
let person4 = new AddressBook("Bhavya", "Abgcd", "Gtfvs", "Gtdhuj", "Ngtdbd","675873", "99 8756473425", "bhg23@gmail.com");
if(addressBookArray.findIndex(contact => contact.firstName == person4.firstName) == -1){
    addressBookArray[3] = person4;
}
else{
    console.log("Duplicate Entry");
}
console.log(addressBookArray);