class LocalStorage {
  static getItem(field) {
    try {
      const item = localStorage.getItem(field);
      if (item === null) {
        return undefined;
      }
      return JSON.parse(item);
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  static setItem(field, item) {
    try {
      const stringifiedItem = JSON.stringify(item);
      localStorage.setItem(field, stringifiedItem);
    } catch (error) {
      console.error(error);
    }
  }

  static removeItem(field) {
    try {
      localStorage.removeItem(field);
    } catch (error) {
      console.error(error);
    }
  }

  static clearLocalStorage() {
    try {
      localStorage.clear();
    } catch (error) {
      console.error(error);
    }
  }
}

export default LocalStorage;
