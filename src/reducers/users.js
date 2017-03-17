import * as util from './utilities';
export const addUser = (state, action) => {
    const newUser = state.concat({
        id: action.id,
        email: action.email,
        password: action.password,
        username: action.username,
        isLoggedIn: true
    });
    return newUser;
};

export const loginUser = (state, action) => {
    const newUser = util.updateItemInArray(state, action, item => {
        return util.updateObject(item, { isLoggedIn: !item.isLoggedIn });
    });
    return newUser;
};

export const logoutUser = (state, action) => {
    const newUser = util.updateItemInArray(state, action, user => {
        return util.updateObject(user, {isLoggedIn: !user.isLoggedIn});
    });
    return newUser;
};
