export const localStorageHelper = {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key) {
    const stored = localStorage.getItem(key);
    return stored == null ? undefined : JSON.parse(stored);
  },
  remove(key) {
    localStorage.removeItem(key);
  },
};

export const noDuplicates = (arr1, arr2) =>
  arr2.filter((element) => {
    let found = true;
    for (let el of arr1) {
      if (el.id === element.id) found = false;
    }
    return found;
  });
