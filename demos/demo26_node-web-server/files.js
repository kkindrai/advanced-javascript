const fileSystem = require("fs");

let fileName = "example-file.txt";




/**
 * Deleting a file (async)
 */

let nameOfFileToDelete = "demo.txt";
// fileSystem.unlink(nameOfFileToDelete, err => {
//     if(err) console.error(err);
// })

/**
 * Deleting Sync
 */
fileSystem.unlinkSync(nameOfFileToDelete);











/**
 * Creating a new File (async)
 */
let fileNameToBeCreated = "generated.txt";
let myText = "This is the data I want in here";
// fileSystem.writeFile(fileNameToBeCreated, myText, err => {
//     if(err) console.error(err);
// })


/**
 * Creating a new file (sync)
 */
// fileSystem.writeFileSync(fileNameToBeCreated, myText);














/**
 * Renaming File Names (ASYNC)
 */
// let newFileName = "renamed-example-file.txt";
// fileSystem.rename(fileName, newFileName, err => {
//     if(err) console.error(err);
// })

/**
 * Renaming File Names (NOT ASYNC)
 */
// let newFileName = "renamed-example-file.txt";
// fileSystem.renameSync(fileName, newFileName);








/**
 * appendFile Method (ASYNC)
 */
// let newText = "Some new text for my file";
// fileSystem.appendFile(fileName, newText, err => {
//     if(err) console.error(err);
// })

/**
 * appendFile Method (NOT ASYNC)
 */
let newText = "More new text";
fileSystem.appendFileSync(fileName, newText);







/**
 * readFileSync Method (sync)
 */
// let content = fileSystem.readFileSync(fileName);
// console.log(content.toString());




/**
 * readFile (ASYNC)
 * Apparently not as effective a way to perform this
 */
// fileSystem.readFile(fileName, (err, data) => {
    
//     // If an issue...
//     if(err) {
//         console.error(err);
//     } else {
//         // log data
//         console.log(data.toString());
//     }

// })