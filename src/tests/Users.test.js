import {createStore, combineReducers} from 'redux';
import expect, {createSpy, spyOn, isSpy} from 'expect';
import deepFreeze from 'deep-freeze';
import * as actions from '../actions/userActions';
import usersReducer from '../reducers/users';

it('creates an action to add users.', () => {
    const email = 'test@gmail.com';
    const password = 'password';
    const username = 'tester';
    const actionAfter = {
        type: 'ADD_USER',
        id: 0,
        email,
        password,
        username
    };

    deepFreeze(actionAfter);

    expect(
        actions.addUser(email, password, username)
    ).toEqual(actionAfter);
});

it('adds a user.', () => {
    const stateBefore = [];
    const email = 'test1@gmail.com';
    const password = 'password';
    const username = 'tester';
    const action = actions.addUser(email, password, username);
    const stateAfter = [
        {
            id: 1,
            email,
            password,
            username,
            isLoggedIn: true
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        usersReducer(stateBefore, action)
    ).toEqual(stateAfter);
});

it('creates an action to login user.', () => {
    const password = 'password';
    const username = 'tester';
    const actionAfter = {
        type: 'LOG_IN',
        password,
        username
    };

    deepFreeze(actionAfter);

    expect(
        actions.loginUser(password, username)
    ).toEqual(actionAfter);
});

it('logs in user.', () => {
    const email = 'test1@gmail.com';
    const password = 'password';
    const username = 'tester';
    const stateBefore = [
        {
            id: 1,
            email,
            password,
            username,
            isLoggedIn: false
        },
        {
            id: 2,
            email: 'test2@gmail.com',
            password,
            username: 'TestMaster',
            isLoggedIn: false
        }
    ];
    const action = actions.loginUser(password,username);
    const stateAfter = [
        {
            id: 1,
            email,
            password,
            username,
            isLoggedIn: true
        },
        {
            id: 2,
            email: 'test2@gmail.com',
            password,
            username: 'TestMaster',
            isLoggedIn: false
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        usersReducer(stateBefore, action)
    ).toEqual(stateAfter);
});

it('creates an action to logout user.', () => {
    const id = 1;
    const actionAfter = {
        type: 'LOG_OUT',
        id
    };

    deepFreeze(actionAfter);

    expect(
        actions.logoutUser(id)
    ).toEqual(actionAfter);
});

it('logs out user.', () => {
    const id = 1;
    const email = 'test1@gmail.com';
    const password = 'password';
    const username = 'tester';
    const stateBefore = [
        {
            id: 1,
            email,
            password,
            username,
            isLoggedIn: true
        }
    ];
    const action = actions.logoutUser(id);
    const stateAfter = [
        {
            id: 1,
            email,
            password,
            username,
            isLoggedIn: false
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        usersReducer(stateBefore, action)
    ).toEqual(stateAfter);
});