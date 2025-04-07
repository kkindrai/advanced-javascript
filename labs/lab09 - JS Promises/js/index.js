// this code uses a fakeJSON data API just to call on
// url: https://softwium.com/api/peoples

const init = () => {

    // Call the Functional & Non Functional APIS
    callPromise(true);
    callPromise(false);
}


/**
 * callPromise Function
 * 
 * calls the promise
 * 
 * @param {*} functional true/false if promise errors out or works
 */
const callPromise = async functional => {

    // Assign Local Variables
    let url = '';
    let apiCall = '';


    if (functional) {
        // The Functional Promise Call
        url = 'https://softwium.com/api/peoples';
        apiCall = await fetch(url)
            .then(results => {
                console.log('Successful Promise: ' + results);
            }).catch(error => {
                console.error('Unable to Resolve Request:' + error);
        });


    } else {
        // The Errored Promise Call (broken URL)
        url = 'http://THIS_IS_NOT_A_LINK.com/json';
        apiCall = await fetch(url)
            .then(results => {
                return results.json();
            }).then(jsonResults => {
                console.log('Successful Promise: ' + jsonResults);
            }).catch(error => {
                console.error('Unable to Resolve Request: ' + error);
        });

    }



}


window.onload = init;