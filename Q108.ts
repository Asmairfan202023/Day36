// Question108:Compare two strings to check if they are identical, ignoring case sensitivity.
function compareTwostring(str1:string,str2:string):boolean{
    return str1.toLowerCase() ===str2.toLowerCase();
}
const string1 = "World";
const string2 = "hello";

if (compareTwostring(string1, string2)) {
    console.log("The strings are identical (ignoring case).");
} else {
    console.log("The strings are not identical (ignoring case).");
}