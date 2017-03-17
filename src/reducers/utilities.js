export const updateObject = (oldObject, newValues) => {
    // Encapsulate the idea of passing a new object as the first parameter
    // to Object.assign to ensure we correctly copy data instead of mutating
    return Object.assign({}, oldObject, newValues);
};

export const updateItemInArray = (array, action, updateItemCallback) => {
    const updateItems = array.map(item => {
        if (action.type == 'LOG_IN') {
            if (item.username !== action.username || item.password !== action.password) {
                return item;
            }
        } else {
            if (item.id !== action.id) {
                // Since we only want to update one item, preserve all others as they are now
                return item;
            }
        }
        // Use the provided callback to create an updated item
        const updatedItem = updateItemCallback(item);
        return updatedItem;
    });
    return updateItems;
};

export const createReducer = (initState, handlers) => {
    const reducer = (state = initState, action) => {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        } else {
            return state
        }
    };
    return reducer;
};