import axios from "axios";

const access_token = localStorage.getItem("access_token");
// const access_token = "dfdf";


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

    console.log(access_token);

    return axios.post('https://pre-onboarding-selection-task.shop/todos', {
        todo: todo,
    }, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    })
};

export const getTodos = async () => {

    return axios
        .get('https://pre-onboarding-selection-task.shop/todos', {
            headers: {
                Authorization: `Bearer ${access_token}`,
            }
        })
};

export const updateTodo = async (id, todo, isCompleted) => {

    return axios.put('https://pre-onboarding-selection-task.shop/todos/' + id, {
        todo: todo,
        isCompleted: isCompleted,
    }, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    })
};

export const deleteTodo = async (id) => {

    return axios.delete('https://pre-onboarding-selection-task.shop/todos/' + id, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    })
};