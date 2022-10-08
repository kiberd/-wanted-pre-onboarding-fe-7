
const validator = {
    email: (value) => value.includes("@"),
    password: (value) => value.length > 7
}
export const validate = (values) => {
    
    const message = {};

    Object.entries(values).map((entry) => {
        const key = entry[0];
        const value = entry[1];
        if (!validator[key](value)) {
            message[key] = `${key} 검증 오류`;
        };
    });

    return message;
}