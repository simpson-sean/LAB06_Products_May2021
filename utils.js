export function findById(instrumentList, id) {
    for (let item of instrumentList) {
    // check if the first thing in the array has an id that matches the id from the parameter
        if (id === item.id) {
        // if the ids match, return that object
            return item;
        }
    // otherwise, try it out with the next object in the array
    }

    // if you never find a match, return null;
    return null;
}