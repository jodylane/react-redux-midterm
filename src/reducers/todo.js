import * as util from './utilities';
export const addTodo = (state, action) => {
    const newTodos = state.concat({
        id: action.id,
        text: action.text,
        completed: false
    });
    return newTodos
};

export const toggleTodo = (state, action) => {
    const newTodos = util.updateItemInArray(state, action.id, todo => {
        return util.updateObject(todo, {completed: !todo.completed});
    });
    return newTodos;
};

export const editTodo = (state, action) => {
    const newTodos = util.updateItemInArray(state, action.id, todo => {
        return util.updateObject(todo, {text: action.text});
    });
    return newTodos
};
