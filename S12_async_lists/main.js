const mainList = document.querySelector('.mainList');

let newContent = ``;

const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('could not fetch the data');
      }
    });
    request.open('GET', resource);
    request.send();
  });
};

// // using fetch()
//   async function getTodos(resource) {
//     let response = await fetch(resource);
//     if(response.status !== 200){
//         throw new Error('could not fetch data...');
//     }
//     let data = await response.json();
//     return data;
// }

getTodos('list/nursery.json').then(data => {
  console.log('promise 1 resolved:', data);
  newContent += `<h2>${data[0].category}</h2>`;
  data.forEach((item) => {
    newContent += `<li>${item.text}</li>`;
  });
  return getTodos('list/grocery.json');

}).then(data => {
  console.log('promise 2 resolved:', data);
  newContent += `<h2>${data[0].category}</h2>`;
  data.forEach((item) => {
    newContent += `<li>${item.text}</li>`;
  });
  return getTodos('list/butcher.json');

}).then(data => {
  console.log('promise 3 resolved:', data);
  newContent += `<h2>${data[0].category}</h2>`;
  data.forEach((item) => {
    newContent += `<li>${item.text}</li>`;
  });
  mainList.innerHTML = newContent;

}).catch(err => {
  console.log('promise rejected:', err);
});