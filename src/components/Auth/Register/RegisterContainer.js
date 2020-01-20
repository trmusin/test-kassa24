import React from 'react';
import { withFormik } from 'formik'
import RegisterForm from "./RegisterForm";
import {setUserData} from "../../../redux/reducers/authReducer";
import connect from "react-redux/es/connect/connect";


const mapStateToProps = ({auth}) => {
    return{
        isAuth: auth.isAuth
    }
};

export default connect(mapStateToProps)(withFormik({
    validate: values => {
        let errors = {};
        if (!values.name) {
            errors.name = 'Введите логин';
        } else if (
            values.name.length<4
        ) {
            errors.name = 'Логин должен быть более 3 символов';
        }
        if (!values.password) {
            errors.password = 'Введите пароль';
        } else if (
            !/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(values.password)
        ) {
            errors.password = 'Пароль должен содержать цифры, заглавные и прописные буквы!';
        }
        if (!values.repeatPassword) {
            errors.repeatPassword = 'Повторите пароль';
        } else if (
            !(values.password===values.repeatPassword)
        ) {
            errors.repeatPassword = 'Пароли не совпадают';
        }
        return errors;
    },
    handleSubmit(values, { props, setSubmitting }) {
        let user ={
            login: values.name,
            password: values.password
        };
        props.dispatch(setUserData(user));
        setSubmitting(false);
    },
    displayName: 'RegisterForm'

})(RegisterForm));