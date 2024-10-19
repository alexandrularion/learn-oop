/*
Asynchronous operations allow code to perform tasks that might take
some time, without blocking the execution of other tasks. 
    For example: 
    1. fetching data from a server
    2. reading a file
    3. waiting for a user action

JavaScript is single-threaded, meaning it can only do one thing at a time
in the main thread.

Asynchronous programming helps make it appear non-blocking by allowing
operations to happen in the background.

 */

// 1. Callbacks - A callback is a function passed as an arguemnt to another function.

/**
 * Simulates a network request to access specific data from a server
 * @param {Function} callback  helps us to work with the data outside the function
 */
function fetchData(callback) {
  setTimeout(function () {
    const data = { message: "Data fetched!" };
    callback(data);
  }, 5000); // setTimeout - used to simulated a network delay
}

fetchData(function (message) {
  console.log(message); // { message: "Data fetched!" }
});

console.log("After fetching data");

fetchData(function (message) {
  console.log(message);
});

// 2. Promises - A promise represents a value that may be available now
// in the future, or never. Is an improvement for callbacks for handling async operations.

// A promise can be in one of these three states: Pending, Fulfilled, Rejected
// Pending: Initial state, neither fullfilled nor rejected
// Fulfilled: The operation completed succesfully
// Rejected: The operation failed

const fetchData2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const status = "fail";
    if (status === "success") {
      resolve({ message: "Data fetched!" });
    } else {
      reject("Error fetching data");
    }
  }, 15000);
});

fetchData2
  .then(function (data) {
    console.log(data); // { message: "Data fetched!" }
  })
  .catch(function (message) {
    console.log(message); // "Error fetching data"
  })
  .finally(function () {
    console.log(
      "The finally method is called always at the end of the promise."
    );
  });

// 3. async / await - introduced in ES2017 (ES8)
// async - marks a function that should return a promise or consumes a promise
// await - pauses the execution of the function until the promise resolves
// helps us to write cleaner and more readable code that looks synchronous

async function fetchData3() {
  try {
    const data = await new Promise(function (resolve) {
      setTimeout(function () {
        resolve({ message: "Data fetched 3!" });
      }, 20000);
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData3();
