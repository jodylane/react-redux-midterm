import * as util from './utilities';
export const setVisibility = (state = 'SHOW_ALL', action) => {
    return util.updateObject(state, { visibilityFilter: action.filter });
};