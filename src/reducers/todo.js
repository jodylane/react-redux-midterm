import * as util from './utilities';
const addTodo = (state, action) => {
    const newTodo = state.concat({
        id: action.id,
        text: action.text,
        completed: false
    });
    return newTodo;
};

const toggleTodo = (state, action) => {
    const newTodo = util.updateItemInArray(state, action, todo => {
        return util.updateObject(todo, {completed: !todo.completed});
    });
    return newTodo;
};

const editTodo = (state, action) => {
    const newTodo = util.updateItemInArray(state, action, todo => {
        return util.updateObject(todo, {text: action.text});
    });
    return newTodo;
};

const todosReducer = util.createReducer([],{
    'ADD_TODO': addTodo,
    'TOGGLE_TODO': toggleTodo,
    'EDIT_TODO': editTodo,
});
export default todosReducer