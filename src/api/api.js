import axios from "axios";

export const signIn = async (email, password) => {

    return axios.post('https://pre-onboarding-selection-task.shop/auth/signin', {
        email: email,
        password: password
    });
}

export const signUp = async (email, password) => {

    return axios.post('https://pre-onboarding-selection-task.shop/auth/signup', {
        email: email,
        password: password
    });
}

export const createTodo = async (todo) => {

    return axios.post('https://pre-onboarding-selection-task.shop/todos', {
        todo: todo,
    })
};

export const getTodos = async (accessToken) => {

    return axios.get('https://pre-onboarding-selection-task.shop/todos', {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        }
    })
};

export const updateTodo = async (id, todo, isCompleted, accessToken) => {

    return axios.put('https://pre-onboarding-selection-task.shop/todos/' + id, {
        todo: todo,
        isCompleted: isCompleted,
    }, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
};

export const deleteTodo = async (id, accessToken) => {

    return axios.delete('https://pre-onboarding-selection-task.shop/todos/' + id, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
};