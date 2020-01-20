import React from 'react';
import { withFormik } from 'formik'
import {logInUseData } from "../../../redux/reducers/authReducer";
import connect from "react-redux/es/connect/connect";
import LoginForm from "./loginForm";



const mapStateToProps = ({auth}) => {
    return{
        isAuth: auth.isAuth,
    }
};

export default connect(mapStateToProps)(withFormik({

    validate: values => {
        let errors = {};
        if (!values.name) {
            errors.name = 'Введите логин';
        }
        if (!values.password) {
            errors.password = 'Введите пароль';
        }
        return errors;
    },
    handleSubmit(values, { props, setSubmitting }) {
        let user ={
            login: values.name,
            password: values.password
        };
        props.dispatch(logInUseData(user));
        setSubmitting(false);

    },
    displayName: 'LoginForm'

})(LoginForm));