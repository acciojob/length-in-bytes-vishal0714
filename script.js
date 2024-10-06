const byteSize = (str) => {
    // Create a new Blob object with the given string
    const blob = new Blob([str]);
    // Return the size of the Blob in bytes
    return blob.size;
};

// Examples
console.log(byteSize('hello world')); // Output: 11
console.log(byteSize('안녕하세요')); // Output: 15
console.log(byteSize('')); // Output: 0

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
