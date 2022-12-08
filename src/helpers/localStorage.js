export const getItemFromLocalStorage = name => +localStorage.getItem(name);

export const setCuntNumberInLocalStorage = (fieldName, prevNumber) => {
    if (!prevNumber) {
        localStorage.setItem(fieldName, !!prevNumber + 1);
    } else {
        localStorage.setItem(fieldName, prevNumber + 1);
    }
}
