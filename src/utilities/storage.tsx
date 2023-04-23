function storeData(key: string, value: string) {
  localStorage.setItem(key, value);
}

function getData(key: string) {
  return localStorage.getItem(key);
}

function removeKey(key: string) {
  localStorage.removeItem(key);
}

function removeAll() {
  localStorage.clear();
}

export { storeData, getData, removeKey, removeAll };
