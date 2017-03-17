import * as util from './utilities';

export const addBio = (state, action) => {
    const newBio = state.concat({
        id: action.id,
        title: action.title
    });
    return newBio;
};

export const editBio = (state, action) => {
    const newBio = util.updateItemInArray(state, action, bio => {
        return util.updateObject(bio, {title: action.title});
    });
    return newBio;
};