const mainList = document.querySelector('.mainList');

let newContent = ``;

// const getList = async () => {
//     // nursery list
//     const nurseryResponse = await fetch('list/nursery.json');

//     if(nurseryResponse.status !== 200){
//         throw new Error('could not fetch data...');
//     }

//     const nurseryData = await nurseryResponse.json();


//     // grocery list
//     const groceryResponse = await fetch('list/grocery.json');

//     if(groceryResponse.status !== 200){
//         throw new Error('could not fetch data...');
//     }

//     const groceryData = await groceryResponse.json();

//     // butcher list
//     const butcherResponse = await fetch('list/butcher.json');

//     if(butcherResponse.status !== 200){
//         throw new Error('could not fetch data...');
//     }

//     const butcherData = await butcherResponse.json();

//     // return all data
//     return [nurseryData, groceryData, butcherData];
// };
const resources = ['list/butcher.json', 'list/nursery.json', 'list/grocery.json']

async function newList(resource) {
    let response = await fetch(resource);
    if(response.status !== 200){
        throw new Error('could not fetch data...');
    }
    let data = await response.json();
    return data;
}


resources.forEach(newList()
.then(data => {
    newContent += `<h2>${data[0].category}</h2>`;
    data.forEach((item) => {
        newContent += `<li>${item.text}</li>`;
    });
    mainList.innerHTML = newContent;
    
}).catch(err => console.log('rejected:', err.message)));
