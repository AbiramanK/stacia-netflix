function storeData(key: string, value: string) {
  localStorage.setItem(key, value);
}

async function getData(key: string) {
  return await localStorage.getItem(key);
}

async function removeKey(key: string) {
  await localStorage.removeItem(key);
}

async function removeAll() {
  await localStorage.clear();
}

export { storeData, getData, removeKey, removeAll };
