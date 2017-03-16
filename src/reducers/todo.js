import * as util from './utilities';
export const addTodo = (state, action) => {
    const newTodo = state.concat({
        id: action.id,
        text: action.text,
        completed: false
    });
    return newTodo;
};

export const toggleTodo = (state, action) => {
    const newTodo = util.updateItemInArray(state, action.id, todo => {
        return util.updateObject(todo, {completed: !todo.completed});
    });
    return newTodo;
};

export const editTodo = (state, action) => {
    const newTodo = util.updateItemInArray(state, action.id, todo => {
        return util.updateObject(todo, {text: action.text});
    });
    return newTodo;
};
