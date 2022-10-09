import React, { useState } from 'react';

const useInput = (initialValue, validator) => {

    const [value, setValue] = useState(initialValue);
    const [isValid, setIsValid] = useState(false)

    const onChange = (event) => {
        const { target: { value } } = event;
        if (typeof validator === "function") {

            if (validator(value)) {
                setIsValid(true);
            } else {
                setIsValid(false);
            }

        }
        setValue(value);
    }

    return { value, onChange, isValid }

};

export default useInput;