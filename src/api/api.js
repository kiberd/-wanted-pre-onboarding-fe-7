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