let nextUserId = 0;
export const addUser = (email, password, username) => {
    return {
        type: 'ADD_USER',
        id: nextUserId++,
        email,
        password,
        username
    }
};

export const loginUser = (password, username) => {
    return {
        type: 'LOG_IN',
        password,
        username
    }
};

export const logoutUser = (id) => {
    return {
        type: 'LOG_OUT',
        id
    }
};

