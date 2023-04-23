function storeData(key: string, value: string) {
  localStorage.setItem(key, value);
}

function getData(key: string) {
  return localStorage.getItem(key);
}

function removeDataByKey(key: string) {
  localStorage.removeItem(key);
}

function removeAllData() {
  localStorage.clear();
}

export { storeData, getData, removeDataByKey, removeAllData };
