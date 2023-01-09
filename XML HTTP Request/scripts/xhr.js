console.clear();

const makeRequest = (method, url, data) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = () => {
      let value = xhr.response;
      console.log(JSON.parse(value));
    };

    xhr.onerror = () => {
      console.log("Error Occured");
    };

    xhr.send(JSON.stringify(data));
  });
};

const getData = () => {
  makeRequest("GET", "https://jsonplaceholder.typicode.com/posts")
  .then((res)=> console.log(res))
};

// const sendData = () => {
//   makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
//     title: "Meww",
//     body: "Hot",
//     userId: 1,
//   });
// };

// const updateData = () => {
//   makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts//1", {
//     id: 1,
//     title: "Bark",
//     body: "Crap",
//     userId: 1,
//   });
// };

// const updateSingleData = () => {
//   makeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1", {
//     title: "Changed",
//   });
// };

// const deleteData = () => {
//   makeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
// };

getData();
