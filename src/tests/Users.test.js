import { createStore, combineReducers } from 'redux';
import expect, {createSpy, spyOn, isSpy} from 'expect';
import deepFreeze from 'deep-freeze';
import * as actions from '../actions/userActions';
import * as reducers from '../reducers/users';