
function loadItems(){
  return fetch('data/data.json')
  .then(response => response.json())
}


loadItems()
  .then(items =>{
    displayItems(items);
    setEventListener(items);
  })
  .catch(console.log)