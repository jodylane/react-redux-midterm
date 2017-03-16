export const addTodo = (state, action) => {
    const newTodos = state.concat({
        id: action.id,
        text: action.text,
        completed: false
    });
    return newTodos
};

const updateObject = (oldObject, newValues) => {
    // Encapsulate the idea of passing a new object as the first parameter
    // to Object.assign to ensure we correctly copy data instead of mutating
    return Object.assign({}, oldObject, newValues);
};

const updateItemInArray = (array, itemId, updateItemCallback) => {
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
export const toggleTodo = (state, action) => {
    const newTodos = updateItemInArray(state, action.id, todo => {
        return updateObject(todo, {completed: !todo.completed});
    });
    return newTodos;
};

export const editTodo = (state, action) => {
    const newTodos = updateItemInArray(state, action.id, todo => {
        return updateObject(todo, {text: action.text});
    });
    return newTodos
};
