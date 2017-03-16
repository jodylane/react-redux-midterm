import { createStore, combineReducers } from 'redux';
import expect, {createSpy, spyOn, isSpy} from 'expect';
import deepFreeze from 'deep-freeze';
import * as actions from '../actions/todoActions';
import * as reducers from '../reducers/todo'

it('creates an action to add todo', () => {
    const text = 'Hello World';
    const actionAfter = {
        type: 'ADD_TODO',
        id: 0,
        text
    };

    deepFreeze(actionAfter);

    expect(
        actions.addTodo(text)
    ).toEqual(actionAfter);
});

it('adds a todo', () => {
    const stateBefore = [];
    const action = actions.addTodo('Learn Redux');
    const stateAfter = [
        {
            id: 1,
            text: 'Learn Redux',
            completed: false
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        reducers.addTodo(stateBefore, action)
    ).toEqual(stateAfter);
});

it('auto increments its id for every todo', () => {
   const statebefore = [
       {
           id: 1,
           text: 'Learn Redux',
           completed: false
       }
   ];
    const action = actions.addTodo('Go Shopping');
    const stateAfter = [
        {
            id: 1,
            text: 'Learn Redux',
            completed: false
        },
        {
            id: 2,
            text: 'Go Shopping',
            completed: false
        }
    ];

    deepFreeze(statebefore);
    deepFreeze(action);

    expect(
        reducers.addTodo(statebefore, action)
    ).toEqual(stateAfter);
});

it('creates an action to toggle todo', () => {
    const id = 0;
    const actionAfter = {
        type: 'TOGGLE_TODO',
        id
    };

    deepFreeze(actionAfter);

    expect(
        actions.toggleTodo(id)
    ).toEqual(actionAfter);
});

it('toggles a todo', () => {
    const stateBefore = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        }
    ];
    const action = actions.toggleTodo(0);
    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: true
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        reducers.toggleTodo(stateBefore, action)
    ).toEqual(stateAfter);
});

it('creats an action to edit todo', () => {
    const id = 0;
    const text = 'Hello World';
    const actionAfter = {
        type: 'EDIT_TODO',
        id,
        text
    };

    deepFreeze(actionAfter);

    expect(
        actions.editTodo(id,text)
    ).toEqual(actionAfter);
});

it('edits a todo', () => {
    const stateBefore = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        }
    ];
    const action = actions.editTodo(0, 'Go Shopping');
    const stateAfter = [
        {
            id: 0,
            text: 'Go Shopping',
            completed: false
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        reducers.editTodo(stateBefore, action)
    ).toEqual(stateAfter);
});