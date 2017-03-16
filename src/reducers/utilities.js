export const updateObject = (oldObject, newValues) => {
    // Encapsulate the idea of passing a new object as the first parameter
    // to Object.assign to ensure we correctly copy data instead of mutating
    return Object.assign({}, oldObject, newValues);
};

export const updateItemInArray = (array, itemId, updateItemCallback) => {
    const updateItems = array.map(item => {

        if(item.id !== itemId){
            // Since we only want to update one item, preserve all others as they are now
            return item;
        }

        // Use the provided callback to create an updated item
        const updatedItem = updateItemCallback(item);
        return updatedItem;
    });
    return updateItems;
};

export const updateUserInArray = (array, password, username, updateUserCallback) => {
    const updateUsers = array.map (user => {
        if(user.username !== username && user.password !== password){
            return user;
        }

        const updatedUser = updateUserCallback(user);
        return updatedUser;
    });
    return updateUsers;
};