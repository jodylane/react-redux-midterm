let nextBioId = 0;
export const addBio = (title) => {
    return {
        type: 'ADD_BIO',
        id: nextBioId++,
        title
    };
};

export const editBio = (id, title) => {
    return {
        type: 'EDIT_BIO',
        id,
        title
    };
};