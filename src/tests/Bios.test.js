import { createStore, combineReducers } from 'redux';
import expect, {createSpy, spyOn, isSpy} from 'expect';
import deepFreeze from 'deep-freeze';
import * as actions from '../actions/bioActions';
import bioReducer from '../reducers/bio';

it('creates an action to add bio.', () => {
    const id = 0;
    const title = 'Title';
    const actionAfter = {
        type: 'ADD_BIO',
        id,
        title
    };

    deepFreeze(actionAfter);

    expect(
        actions.addBio(title)
    ).toEqual(actionAfter);
});

it('adds a bio.', () => {
    const stateBefore = [];
    const title = 'Learn Redux';
    const action = actions.addBio(title);
    const stateAfter = [
        {
            id: 1,
            title
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        bioReducer(stateBefore, action)
    ).toEqual(stateAfter);
});

it('creates an action to edit bio.', () => {
    const id = 1;
    const title = 'Title';
    const actionAfter = {
        type: 'EDIT_BIO',
        id,
        title
    };

    deepFreeze(actionAfter);

    expect(
        actions.editBio(id, title)
    ).toEqual(actionAfter);
});

it('edits a bio.', () => {
    const id = 1;
    const title = 'New Title';
    const stateBefore = [
        {
            id: 1,
            title: 'Title'
        }
    ];
    const action = actions.editBio(id, title);
    const stateAfter = [
        {
            id,
            title
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        bioReducer(stateBefore, action)
    ).toEqual(stateAfter);
});