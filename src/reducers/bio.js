import * as util from './utilities';

const addBio = (state, action) => {
    const newBio = state.concat({
        id: action.id,
        title: action.title
    });
    return newBio;
};

const editBio = (state, action) => {
    const newBio = util.updateItemInArray(state, action, bio => {
        return util.updateObject(bio, {title: action.title});
    });
    return newBio;
};

const bioReducer = util.createReducer([], {
    'ADD_BIO': addBio,
    'EDIT_BIO': editBio
});

export default bioReducer