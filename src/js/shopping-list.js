export const key = "shoppingList";

export function addToShList(bookItem) {
  let shoppingList = localStorage.getItem(key);
  let list = shoppingList ? JSON.parse(shoppingList) : [];

  if (!list.some(book => book._id === bookItem._id)) {
    list.push(bookItem);
    localStorage.setItem(key, JSON.stringify(list));
    console.log('added to list');
  } else {
    console.log('book is already in the list');
  }
}

export function removeFromShList(bookItem) {
  let shoppingList = localStorage.getItem(key);
  if (shoppingList) {
    let list = JSON.parse(shoppingList);
    const index = list.findIndex(book => book._id === bookItem._id);

    if (index !== -1) {
      list.splice(index, 1);
      localStorage.setItem(key, JSON.stringify(list));
      console.log('removed from list');
    } else {
      console.error('book not found in list');
    }
  } else {
    console.error('error with shopping list');
  }
}

export function checkBookInShList(bookItem) {
  let shoppingList = localStorage.getItem(key);
  if (shoppingList) {
    let list = JSON.parse(shoppingList);
    return list.some(book => book._id === bookItem._id);
  }
  return false;
}

export function deleteFromShList(id){
  let list = localStorage.getItem(key);
  if(!list){
    return false;
  }else{
    let shoppingList = JSON.parse(list);
    const deleteIndex = shoppingList.findIndex(item => item._id === id);
    if(deleteIndex != -1){
      shoppingList.splice(deleteIndex, 1);
      localStorage.setItem(key, JSON.stringify(shoppingList));
      return true;
    }else{
      return false;
    }
  }
}
