import {createStore, combineReducers} from 'redux';
import expect, {createSpy, spyOn, isSpy} from 'expect';
import deepFreeze from 'deep-freeze';
import * as actions from '../actions/todoActions';
import * as util from '../reducers/utilities';

it('updateObject returns new update object.', () => {
    const stateBefore = {
        id: 0,
        text: 'Hello World',
        completed: false
    };
    const stateAfter = {
        id: 0,
        text: 'Hello World',
        completed: true
    };

    deepFreeze(stateBefore);

    expect(
        util.updateObject(stateBefore, {completed: !stateBefore.completed})
    ).toEqual(stateAfter);
});

it('updateItemInArray returns new array with updated object.', () => {
    const id = 0;
    const text = 'Hello Redux';
    const stateBefore = [
        {
            id,
            text: 'Hello World',
            completed: false
        },
        {
            id: 1,
            text: 'Learn Redux',
            completed: false
        },
        {
            id: 2,
            text: 'Goodbye Redux',
            completed: false
        }
    ];
    const action = actions.editTodo(id, text);
    const stateAfter = [
        {
            id,
            text: text,
            completed: false
        },
        {
            id: 1,
            text: 'Learn Redux',
            completed: false
        },
        {
            id: 2,
            text: 'Goodbye Redux',
            completed: false
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        util.updateItemInArray(stateBefore, action, item => {
            return util.updateObject(item, {text: action.text})
        })
    ).toEqual(stateAfter);
});
