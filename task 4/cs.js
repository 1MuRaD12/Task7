let Password;
let Username;
do {
    Username = prompt("Enter Username");
} while (Username.length < 8);

do {
    Password = prompt("Enter Password");
} while (Password.length < 10);

