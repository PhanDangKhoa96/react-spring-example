function printHyphen(string) {
    // Split by space and converting
    // String to list and

    var lis = string.split(" ");

    // joining the list and storing in string

    string = lis.join("-");

    // returning the string
    console.log(string);
}

printHyphen(
    "What is and why use a Discovery Phase – Saigon Digital’s take on an important step in every project"
);
