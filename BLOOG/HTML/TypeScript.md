# TypeScript Documentation

- prerequisities: Javascript

Chapters:

1. Introduction
2. Environment setup
3. First Typescript program
4. Data Types - built-in

   - number, string, boolean, void, undefined, null

5. Data Types - user-defined

   - union type
   - Array type
   - tuple type
   - enum type
   - any type
   - object type
   - custom type

6. class

   - class basic, object
   - inheritance
   - abstract class
   - Encapsulation and access modifiers

7. interface
8. Generic
9. Module- export, import
10. typescript configuration
11. Build tools
12. convert js project to ts

### 1. Introduction

#### 1.1 What is TypeScript?

- In a simple words, Types + JavaScript = TypeScript
- It is a superset of JS
- developed and maintained by Microsoft

#### 1.2 Why TypeScript?

- JS Check types in run time while typescript add static typing to JS so we can handle errors before running the program.
- increase readability and code quality
- popular JS libraray Angular use TypeScript.
- It can be used in both: client and server side.
- Intellisense IDE Support while coding: code completion, content assist and code hinting

#### 1.3 TS Versions

- earlier versions
- TypeScript 1.0 October 2014
- TypeScript 2.0 September 2016
- TypeScript 3.0 July 2018
- TypeScript 4.0 - latest release August 2020

#### 1.4 Example:

```js
// index.js
// without typescript
function addNumbers(num1, num2) {
  console.log(num1 + num2);
}

addNumbers(20, 30);
addNumbers(20, "30");

// with typescript
// without typescript
function addNumbers(num1: number, num2: number) {
  console.log(num1 + num2);
}

addNumbers(20, 30); // no error
addNumbers(20, "30"); // error

// without typescript
let x;
x = 20; // correct
x = "anisul"; // correct
x = true; // correct
x = [10, 20]; // correct

// with typescript
let x: number;
x = 20; // correct
x = "20"; // Not correct
x = true; // Not correct
x = [10, 20]; // Not correct
```

### 2. Environment setup

#### 2.1 Install and use typescript

- Text Editor: VS Code
- Install node & typescript
  ```js
     npm intsall typescript --save-dev (local)
     npm install -g typescript (global)
     npx tsc fileName.ts
  ```
- check various versions:

  ```js
    node --version
    npm --version
    tsc --version
  ```

#### 2.2 How does it work?

- index.ts -> tsc index.ts -> index.js

### 3. First typescript program

#### 3.1 Example

- typescript file extension is .ts
- Run the following program using `tsc index.ts` command and then `node index.js`

  ```js
  // index.ts

  // without ts
  function addNumbers(num1, num2) {
    console.log(num1 + num2);
  }

  addNumbers(20, 30);
  addNumbers(20, "30");

  // correct one using ts
  function addNumbers(num1: number, num2:number) {
    console.log(num1 + num2);
  }

  addNumbers(20, 30);
  addNumbers(20, "30");


  let num1 = 20;
  console.log(num1);

  let name= "anisul islam";
  name. //intellisense support will be here
  ```

- some compiler flag
  - tsc index.js --watch

### 4. Built-in data types

- Any (super type)
  - built in types: number, string, boolean, void, null, undefined etc.
  - user-defined types: Arrays, Enums, Classes, interfaces etc.
- example of built-in types

  ```js
  // string TYPE EXAMPLE
  let firstName: string;
  let lastName: string;
  let fullName: string;
  let occupation: string;

  firstName = "Anisul";
  lastName = " Islam";
  occupation = "student";

  console.log(firstName);
  console.log(lastName);
  console.log(occupation);

  // toUpperCase()
  console.log(firstName.toUpperCase());

  // toLowerCase()
  console.log(firstName.toLowerCase());

  // split([separator[,limit]])
  console.log(fullName.split(" "));

  // concat()
  fullName = firstName.concat(lastName);

  console.log(`User ${fullName} is a ${occupation}`);

  let userName: string;
  let id: number;
  let isLoggedIn: boolean;

  console.log(userId.toLowerCase()); // error here

  function display(): void {
    console.log("Hi I am display");
  }
  display();
  ```

- inferred Typing
  ```js
  let userName = "anis"; // data type inferred as string
  ```

### 5. User-defined data types

#### 5.1 Union Type

- Union Type - more than one type for variable or function parameter

  ```js
  let userId: string | number;

  // userId = 101; // no error
  // userId = "101"; // no error
  // userId = true; // error

  function userIdDataType(userId: string | number) {
    console.log(typeof userId);
  }

  userIdDataType("123"); // no error
  userIdDataType(123); // no error
  // userIdDataType(true); // error
  ```

#### 5.2 Array

- Array Type- similar data

  ```js
  // let users = ["anis", "rabu", "pinky"];

  // let users: string[];
  // users = ["anis", "rabu", "pinky"];

  let users: Array<string>;
  users = ["anis", "rabu", "pinky"];

  // for (let index = 0; index < users.length; index++) {
  //   const element = users[index];
  //   console.log(element);
  // }

  // users.forEach((element) => {
  //   console.log(element);
  // });

  users.sort();
  console.log(users);

  users.push("limon");
  console.log(users);

  users.pop();
  console.log(users);

  users.unshift("milton");
  console.log(users);

  users.shift();
  console.log(users);

  // multi-types array
  // let users: (number | string)[];
  // users = [10, "anis", 25, 35, "islam"];
  ```

  #### 5.3 Tuple Type

- Tuple Type - Mixed data type

  ```js
  let users: [number, String];
  users = [101, "anis"];

  console.log(users);
  console.log(users[0]);
  console.log(users[1]);

  users.push(102, "sakib");
  console.log(users);
  ```

  #### 5.4 Enum Type

- Enum Type: no duplicate data, helps to store constants

  ```js
  // enum example
  // helps us to store constants

  // numeric enum
  enum UserRequest {
    ReadData,
    // ReadData = 2,
    SaveData,
    UpdateData,
  }

  console.log(UserRequest);
  console.log(UserRequest.ReadData);
  console.log(UserRequest.SaveData);

  // string enum
  enum UserRequest {
    ReadData = "READ_DATA",
    // ReadData = 2,
    SaveData = "SAVE_DATA",
    UpdateData = "UPDATE_DATA",
  }

  console.log(UserRequest);
  console.log(UserRequest.ReadData);
  console.log(UserRequest.SaveData);
  console.log(UserRequest["UpdateData"]);

  // Heterogeneous enum
    enum User {
    id = 101,
    name = "anisul",
    }

  ```

  #### 5.5 any Type

- any Type: if you have no knowledge about the variable type use any type: user input values

  ```js
  let password: any;
  let passwords: any[];
  ```

  #### 5.6 object Type

- object Type: can store value as key value pair

  ```js
  let names: object;
  names = { name1: "anis" };
  console.log(names);

  let users: object[];
  users = [];

  let user1: { userName: string, userId: number };
  user1 = { userName: "anis", userId: 101 };
  users.push(user1);

  let user2: { userName: string, userId: number };
  user2 = { userName: "rabu", userId: 102 };

  users.push(user2);

  for (const key in users) {
    console.log(users[key]["userName"]);
  }
  ```

#### 5.7 Custom Type

- custom Type: you can create your own type

  ```js
  type User = { userName: string, userId: number };

  let users: User[];
  users = [];

  let user1: User;
  user1 = { userName: "anis", userId: 101 };
  users.push(user1);

  let user2: User;
  user2 = { userName: "rabu", userId: 102 };
  users.push(user2);

  let user3: User;
  user3 = { userName: "lucky", userId: 103 };
  users.push(user3);

  // console.log(users);

  type RequestType = "GET" | "POST";
  let getRequest: RequestType;
  getRequest = "GET";

  function requestHandler(requestType: RequestType) {
    console.log(requestType);
  }
  requestHandler("GET");
  ```

### 6. class

#### 6.1 class basics and objects

- class can have constructor, properties, methods
- create object - let objectName = new className();
- Example

  ```js
  class User {
    // properties, methods, constructor
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
      this.userName = userName;
      this.age = age;
    }

    display(): void {
      console.log(`username: ${this.userName}, age: ${this.age}`);
    }
  }

  let user1 = new User("Anisul Islam", 25);
  user1.display();

  let user2 = new User("Rabeya Islam", 31);
  user2.display();
  ```

#### 6.2 Inheritance

- inheritance helps us to acquire properties of one class to another

```js
class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`username: ${this.userName}, age: ${this.age}`);
  }
}

class Student extends User {
  studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }
  display(): void {
    console.log(
      `username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
    );
  }
}

let student1 = new Student("keya", 31, 1302020015);
student1.display();

let user1 = new User("Anisul Islam", 25);
user1.display();

// let user2 = new User("Rabeya Islam", 31);
// user2.display();
```

#### 6.3 Abstract class

- abstraction helps us to hide the implementation of something
- class declared with abstract keyword
- object can not be created from abstract class
- if a class extends abstract class; it must inherit all the abstract methods
- example

  ```js
  abstract class User {
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
      this.userName = userName;
      this.age = age;
    }

    abstract display(): void;
  }

  class Student extends User {
    studentId: number;

    constructor(userName: string, age: number, studentId: number) {
      super(userName, age);
      this.studentId = studentId;
    }
    display(): void {
      console.log(
        `username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
      );
    }
  }

  let student1 = new Student("keya", 31, 1302020015);
  student1.display();

  ```

#### 6.4 Encapsulation and access modifiers

- 4 key principles of Object Oriented Programming (OOP): Inheritance, Abstraction, Encapsulation, Polymorphism.
- Encapsulation helps us to manage the visibility of class members.
- Access modifiers: public, private, protected, readonly
- example

  ```js
    // public, private, protected, readonly
    class User {
      readonly userName: string;
      public age: number;

      constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
      }

      display(): void {
        console.log(`username: ${this.userName}, age: ${this.age}`);
      }
    }

    class Student extends User {
      private studentId: number;

      constructor(userName: string, age: number, studentId: number) {
        super(userName, age);
        this.studentId = studentId;
      }
      display(): void {
        console.log(
          `username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
        );
      }

      setStudentId(studentId: number): void {
        this.studentId = studentId;
      }

      getStudentId(): number {
        return this.studentId;
      }
    }

    let student1 = new Student("keya", 31, 1302020015);
    student1.setStudentId(1302020017);
    console.log(student1.getStudentId());
    // student1.display();

    let user1 = new User("robi", 23);
    console.log(user1.userName);
    // user1.display();

  ```

### 7. Interface

- interface

#### Example

### 8. DOM Manipulation with typescript

#### Example
```html
   <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>welcome</h1>
    <form class="user-form">
      <div>
        <label for="username">Username: </label>
        <input type="text" id="username" />
      </div>
      <div>
        <label for="useremail">email: </label>
        <input type="email" id="useremail" />
      </div>

      <div>
        <label for="country">Country: </label>
        <select name="country" id="country">
          <option value="bangladesh">bangladesh</option>
          <option value="india">india</option>
        </select>
      </div>

      <div>
        <label for="feedback">feedback: </label>
        <textarea name="feedback" id="feedback" cols="30" rows="5"></textarea>
      </div>
      <button type="submit">save</button>
    </form>
    <script src="../dist/index.js"></script>
  </body>
</html>

```

```ts
   const form = document.querySelector(".user-form") as HTMLFormElement;
console.log(form);

const userNameInput = document.querySelector("#username") as HTMLInputElement;
console.log(userNameInput);

const userEmailInput = document.querySelector("#useremail") as HTMLInputElement;
console.log(userEmailInput);

const userCountrySelect = document.querySelector(
  "#country"
) as HTMLSelectElement;
console.log(userCountrySelect);

const userFeedback = document.querySelector("#feedback") as HTMLTextAreaElement;
console.log(userFeedback);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let userData = {
    userName: userNameInput.value,
    userEmail: userEmailInput.value,
    userCountry: userCountrySelect.value,
    userFeedback: userFeedback.value,
  };
  console.log(userData);
});


```



<h3>Connect with me:</h3>
    
<p>    
    <a href=" https://www.alhikmah.my.id/p/mp3-al-quran.html " target="blank"><img align="center" src=" https://blogger.googleusercontent.com/img/a/AVvXsEg9eIay8tna_DF67-KXOjTi7tWE94ff-qrIPe799Nlqo06swM8UeWSzCg6T0RBZxofdUruY3W5sErCq4PcDMdyMhmULH1KN9iLT15ey7cjBrK6mfN1TP_RpbpIwTb-hmu32psrWmb_7wY1f8FWKqESLqCpnhAF9qLVhM3FQc6NBf-43kV69T5I-meVddw=s128" alt="img" height="30" width="40"/></a>    
    <a href="https://codepen.io/san3" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codepen.svg" alt="san3" height="30" width="40"/></a>
    <a href="https://dev.to/wahyu9kdl" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/devto.svg" alt="wahyu9kdl" height="30" width="40"/></a>
    <a href="https://twitter.com/Awfanspage" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="awfanspage" height="30" width="40"/></a>
    <a href="https://www.linkedin.com/in/ahmad-wahyudi-41b6841b6" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="https://www.linkedin.com/in/ahmad-wahyudi-41b6841b6" height="30" width="40"/></a>
    <a href="https://fb.com/awgroupchannel" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="awgroupchannel" height="30" width="40"/></a>
    <a href="https://instagram.com/awfanspage" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="awfanspage" height="30" width="40"/></a>
    <a href="https://dribbble.com/wahyu9kdl/shots" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/dribbble.svg" alt="wahyu9kdl" height="30" width="40"/></a>
    <a href="https://wahyu9kdl.medium.com" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg" alt="wahyu9kdl" height="30" width="40"/></a>
    <a href="https://m.youtube.com/channel/UC7CRa3nkxakAZx_aRsMwRyA/playlists" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg" alt="aw youtube channel" height="30" width="40"/></a>
    <a href="https://feeds.feedburner.com/Alhikmah9" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/rss.svg" alt="http://feedproxy.google.com/~r/blogspot/ghpgr/~3/vyr1fhc7dbi/informasi-cara-mendapatkan-ribuan.html" height="30" width="40"/></a>
    <a href="https://wahyu9kdl.github.io"><img align="center" src=" https://raw.githubusercontent.com/wahyu9kdl/wahyu9kdl.github.io/main/Aw-icon.png " alt="Logo awdev" height="30" /></a>
    <a href="https://m.facebook.com/Awgroupchannel" target="blank"><img  align="center" src=" https://camo.githubusercontent.com/97491cef561826228b265ef69be409bc19ac9b3894ba67f8ccd90e5f8283375a/68747470733a2f2f312e62702e626c6f6773706f742e636f6d2f2d4e6f32743975306f5f38592f594d43782d5662415767492f41414141414141414453492f7030786866775a4a37354d6e504c41664c79536471647a7464466e426132757367434c63424741735948512f733332302f636972636c652d63726f707065642e706e67" alt="Logo" height="30" width="40"/></a>
    <a href="https://devoloper.awdev.eu.org/devoloper.html" target="blank"><img align="center" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVcYb02UwFVHmvvZ5iA03AL1JF8zK-qCHfsru43rIHHA3Wrgv7Ab_Mtn08VvzVjaBVCiLO5KToZzWeFcZ66jplWsqFgDUH2azI2s0H6DhXd9F9iRPMnDLi2cU2McOl6YbXbYcSvZIpnUQx_v_iDtEBk4lJCaYFD3bJR6l765trHINJOfFBAatJH13C/s281/awdev.png " alt="Logo" height="30" width="40"/></a>
    <a href="https://www.awdev.eu.org" target="blank"><img  align="center" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4B2fk-VBn6xiGshk-q3MGnxL9BSOZkgbi0dWLVEu8yVRNCSLEAczznEB0lrQWdLLdFKb3KGFDjDDmEJGdGIVVla9oHv3buJVSPMoBFyJdKrh3GjnJfok5WevezH9y86pTq2qSfFvir-UsbmmKstKGx1FFsTD0kxLWTFmV4pYqKSHcVvzJ08_fKU8N/s1770/logo-www.awdev.eu.org.png " alt="Logo" height="30" width="40"/></a>    
    <a href="https://www.alhikmah.my.id" target="blank"><img align="center" src="https://raw.githubusercontent.com/wahyu9kdl/wahyu9kdl/main/logo.png " alt="Logo ALHIKMAH.MY.ID" height="30" /></a>
    <a href="https://www.blogger.com/follow-blog.g?blogID=392213471435482065" target="blank"><img align="center" src=" https://blogger.googleusercontent.com/img/a/AVvXsEhZo9w7yUEUyMZfWlEMwdLc5U6GgokdTUjEE2yH-MC7KtEPQtYWMaDdwenBNV-xPWOC9UZnOAob3hW7SiE0p46VzuArpYDjqFyAOEttFvL8r_OYnZHk8A-wzn6EoR3RucYBEjPngQboVFW3JLSAEaxt8j63jmjQqQyHvo4LRWxR907H75wEpCLAPoUSvg=s109" alt="" height="20" width="70"/></a>
 </p>

 <h3 align="left">Support:</h3>
 <p align="center">
 <i>Loved the tool? Please consider <a href="https://www.paypal.com/signin?returnUri=https%3A%2F%2Fwww.paypal.com%2Fmyaccount%2Ftransfer%2Fhomepage%2Fexternal%2Fprofile%3FflowContextData%3DdnQz6co9bTO3dXsoaSQoXrylmBBr7Z4w4NgW64GB_WDfmLR52ffZouE7E54etjPgewijP0OxmZksVyVuBbZSxh7v9r8PWndQTi1eJUMZCCj7rrJftUv11NTxekLdOnVJT8vh6pE128RXl6Lq4yOTwu0f2kutdDCQ_qZkx2CTsh1Z3f_OGWFAvKJiKVMHbhq3dn4SWoaIs2dY-I1dSekSdPbZuEHLmCfV3kIA3MpjsPC9xVmmiRxgIY0fsKhMIEnZZQdCZUSJTpNWAnvYDIc-pUIdstyJJzGtqMk0TeqjSG7LnM5jOZufDLI4W8Jbk14B1O-3rAfdL66TgrgjcVRK35l6WhQzVDZEWvimVxtUMuqCgf8gboCEKwLD3ywxApHbM23LBMJY9KBXh6ILB3oZCmB0wYYJxSwmpLiIEW%26amount%3D25%26currencyCode%3DAUD&onboardData=%7B%22country.x%22%3A%22ID%22%2C%22locale.x%22%3A%22id_ID%22%2C%22intent%22%3A%22paypalme%22%2C%22redirect_url%22%3A%22https%253A%252F%252Fwww.paypal.com%252Fmyaccount%252Ftransfer%252Fhomepage%252Fexternal%252Fprofile%253FflowContextData%253DdnQz6co9bTO3dXsoaSQoXrylmBBr7Z4w4NgW64GB_WDfmLR52ffZouE7E54etjPgewijP0OxmZksVyVuBbZSxh7v9r8PWndQTi1eJUMZCCj7rrJftUv11NTxekLdOnVJT8vh6pE128RXl6Lq4yOTwu0f2kutdDCQ_qZkx2CTsh1Z3f_OGWFAvKJiKVMHbhq3dn4SWoaIs2dY-I1dSekSdPbZuEHLmCfV3kIA3MpjsPC9xVmmiRxgIY0fsKhMIEnZZQdCZUSJTpNWAnvYDIc-pUIdstyJJzGtqMk0TeqjSG7LnM5jOZufDLI4W8Jbk14B1O-3rAfdL66TgrgjcVRK35l6WhQzVDZEWvimVxtUMuqCgf8gboCEKwLD3ywxApHbM23LBMJY9KBXh6ILB3oZCmB0wYYJxSwmpLiIEW%2526amount%253D25%2526currencyCode%253DAUD%22%2C%22sendMoneyText%22%3A%22Anda%2520mengirimkan%2520Ahmad%2520wahyudi%22%7D">donating</a>  💸 to help it improve!</i>
 </p>
 <a href="https://www.paypal.com/signin?returnUri=https%3A%2F%2Fwww.paypal.com%2Fmyaccount%2Ftransfer%2Fhomepage%2Fexternal%2Fprofile%3FflowContextData%3DdnQz6co9bTO3dXsoaSQoXrylmBBr7Z4w4NgW64GB_WDfmLR52ffZouE7E54etjPgewijP0OxmZksVyVuBbZSxh7v9r8PWndQTi1eJUMZCCj7rrJftUv11NTxekLdOnVJT8vh6pE128RXl6Lq4yOTwu0f2kutdDCQ_qZkx2CTsh1Z3f_OGWFAvKJiKVMHbhq3dn4SWoaIs2dY-I1dSekSdPbZuEHLmCfV3kIA3MpjsPC9xVmmiRxgIY0fsKhMIEnZZQdCZUSJTpNWAnvYDIc-pUIdstyJJzGtqMk0TeqjSG7LnM5jOZufDLI4W8Jbk14B1O-3rAfdL66TgrgjcVRK35l6WhQzVDZEWvimVxtUMuqCgf8gboCEKwLD3ywxApHbM23LBMJY9KBXh6ILB3oZCmB0wYYJxSwmpLiIEW%26amount%3D25%26currencyCode%3DAUD&onboardData=%7B%22country.x%22%3A%22ID%22%2C%22locale.x%22%3A%22id_ID%22%2C%22intent%22%3A%22paypalme%22%2C%22redirect_url%22%3A%22https%253A%252F%252Fwww.paypal.com%252Fmyaccount%252Ftransfer%252Fhomepage%252Fexternal%252Fprofile%253FflowContextData%253DdnQz6co9bTO3dXsoaSQoXrylmBBr7Z4w4NgW64GB_WDfmLR52ffZouE7E54etjPgewijP0OxmZksVyVuBbZSxh7v9r8PWndQTi1eJUMZCCj7rrJftUv11NTxekLdOnVJT8vh6pE128RXl6Lq4yOTwu0f2kutdDCQ_qZkx2CTsh1Z3f_OGWFAvKJiKVMHbhq3dn4SWoaIs2dY-I1dSekSdPbZuEHLmCfV3kIA3MpjsPC9xVmmiRxgIY0fsKhMIEnZZQdCZUSJTpNWAnvYDIc-pUIdstyJJzGtqMk0TeqjSG7LnM5jOZufDLI4W8Jbk14B1O-3rAfdL66TgrgjcVRK35l6WhQzVDZEWvimVxtUMuqCgf8gboCEKwLD3ywxApHbM23LBMJY9KBXh6ILB3oZCmB0wYYJxSwmpLiIEW%2526amount%253D25%2526currencyCode%253DAUD%22%2C%22sendMoneyText%22%3A%22Anda%2520mengirimkan%2520Ahmad%2520wahyudi%22%7D"/><img align="center"  src="https://img.shields.io/badge/support-PayPal-blue?logo=PayPal&style=flat-square&label=Donate" alt="sponsor github profile readme generator"/>
 </a>  
 <a href="https://trakteer.id/awfanspage/tip "><img align="center" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="30" width="100" alt="Support" /></a>
 <a href="https://ko-fi.com/Awfanspage"><img align="center" src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3" height="30" width="100" alt="Awfanspage" /></a>
 </p>

 <h3> LICENSE </h3>
 
 <a href="http://www.dmca.com/signup/createtakedown.aspx?mpi=takedown&affid=aff9cf0f75&showdiy=truee" target="blank"><img style="border-width:0" src=" https://blogger.googleusercontent.com/img/a/AVvXsEj33KfiYQAySqbIxVEc9pqMSAS2Pee5ow3EIA8poDOTk12d0APP-CR99QgHwWBJPVqLxlzKnVWMUVKGsrunZYwBIOkABA3qcfpy9b_SZDzakDN2QCNOAHdmxSG4RXrfAReyB1PkHXzc37aYGfS3Dc29693FJQtvrbQyXfNukGsMXWUZq0nWSqZAerwcjg" alt="" height="50" width="80"/></a>
 <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Lisensi Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />Ciptaan disebarluaskan di bawah <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Lisensi Creative Commons Atribusi 4.0 Internasional</a>.
 Copyright (c) 2022, Awde Score Code - AL HIKMAH [ Desain by : Alhikmah.my.id - awdev.eu.org] All rights reserved.
 For licensing, <a rel="license" href="https://www.alhikmah.my.id/p/license.html">see LICENSE.html</a>
 Copyright (c) 2022, Awdev - Desain by : Awdev Corporation All rights reserved.
 For licensing, <a rel="license" href="https://www.awdev.eu.org/p/license.html">see LICENSE.html</a>
 <!---
 wahyu9kdl/wahyu9kdl is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
 You can click the Preview link to take a look at your changes.
 --->
 <!--
 Copyright (c) 2021, Aw Score Code - AL HIKMAH [ Desain by : Aw Group Channel ] All rights reserved.
 For licensing, see LICENSE.html or https://kata-h.blogspot.com/p/license.html-->
 <!--
 Copyright (c) 2021, Aw Score Code - Desain by : Awdev Corporation All rights reserved.
 For licensing, see LICENSE.html or https://www.awdev.eu.org/p/license.html
 --><!--
 Copyright (c) 2021, Awde Score Code - AL HIKMAH [ Desain by : Awdev Devoloper ] All rights reserved.
 For licensing, see LICENSE.html or https://www.alhikmah.my.id/p/license.html-->


