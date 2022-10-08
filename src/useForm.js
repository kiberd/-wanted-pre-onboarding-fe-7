import React, { useEffect, useState } from 'react';

const useForm = ({
    initialValues,
    onSubmit,
    validate
}) => {

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (event) => {
        setSubmitting(true);
        event.preventDefault();
        // setErrors(validate(values));
    };

    useEffect(() => {
        setErrors(validate(values));
    } ,[values])

    useEffect(() => {
        if (submitting) {

            // 제출 시 로직 처리
            if (Object.values(errors).length !== 0){
                alert(Object.values(errors)[0]);
            } else {
                onSubmit(values);
            }

            setSubmitting(false);
        }

    } ,[errors, onSubmit, submitting, values]);

    return {
        values,
        errors,
        submitting,
        handleChange,
        handleSubmit
    }
    
};

export default useForm;