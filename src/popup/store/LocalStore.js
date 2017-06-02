export const saveInLocal = (name, thing) => {
    localStorage.setItem(name, JSON.stringify(thing));
};

export const getInLocal = (name) => JSON.parse(localStorage.getItem(name));

export const hasInLocal = (name) => localStorage.getItem(name) ? true : false;
