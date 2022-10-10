import axios from "axios";

const access_token = localStorage.getItem("access_token");

export const signIn = async (email, password) => {

    // return axios.post('https://pre-onboarding-selection-task.shop/auth/signin', {
        return axios.post(process.env.REACT_APP_ENDPOINT + 'auth/signin', {
        email: email,
        password: password
    });
}

export const signUp = async (email, password) => {

    return axios.post(process.env.REACT_APP_ENDPOINT + 'auth/signup', {
        email: email,
        password: password
    });
}

export const createTodo = async (todo) => {

    return axios.post(process.env.REACT_APP_ENDPOINT + 'todos', {
        todo: todo,
    }, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    })
};

export const getTodos = async () => {

    return axios
        .get(process.env.REACT_APP_ENDPOINT + 'todos', {
            headers: {
                Authorization: `Bearer ${access_token}`,
            }
        })
};

export const updateTodo = async (id, todo, isCompleted) => {

    return axios.put(process.env.REACT_APP_ENDPOINT + 'todos/' + id, {
        todo: todo,
        isCompleted: isCompleted,
    }, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    })
};

export const deleteTodo = async (id) => {

    return axios.delete(process.env.REACT_APP_ENDPOINT + 'todos/' + id, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    })
};