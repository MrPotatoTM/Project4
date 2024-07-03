function isStrongPassword(password) {
    if (password.length < 8) {
        return false;
    }
    if (password.search(/password/ig) != -1) {
        return false;
    }
    if (password.search(/[A-Z]+/g) == -1) {
        return false;
    }
    if (password.search(/\d+/g) == -1) {
        return false;
    }
    if (password.search(/[^A-Za-z0-9]/g) == -1) {
        return false;
    }
    if (password.search(/(.)\1{3,}/g) != -1) {
        return false;
    }
    return true;
}


console.log("Testing isStrongPassword()...");

console.log("Qwerty - " + isStrongPassword("Qwerty"));                   // false - Too short, no number, no special character
console.log("passwordQwerty - " + isStrongPassword("passwordQwerty"));   // false - Contains "password"
console.log("qwerty123 - " + isStrongPassword("qwerty123"));             // false - No uppercase chars, no special character
console.log("Qwerty123 - " + isStrongPassword("Qwerty123"));             // false - No special character
console.log("Qaaaa123! - " + isStrongPassword("Qaaaa123!"));             // false - Repeated sequence of four
console.log("Qwerty123! - " + isStrongPassword("Qwerty123!"));           // true

// Do NOT remove the following line:
export default isStrongPassword;
