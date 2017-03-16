import { createStore, combineReducers } from 'redux';
import expect, {createSpy, spyOn, isSpy} from 'expect';
import deepFreeze from 'deep-freeze';
import * as actions from '../actions/todoActions';
import * as reducers from '../reducers/todo'

it('adds a todo', () => {
    const stateBefore = [];
    const action = actions.addTodo('Learn Redux');
    const stateAfter = [
        {
            id: 0,
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