import React from 'react';
import Form from "antd/es/form/Form";
import Input from "antd/es/input/Input";
import Icon from "antd/es/icon/index";
import { Link } from "react-router-dom";
import Button from "antd/es/button/button";
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';



const LoginForm =(props)=>{

    const{
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isAuth
    } = props;

    const { from } = props.location.state || { from: { pathname: '/' } };
    if (isAuth === true) {
        return <Redirect to={from} />
    }
    return(
        <div>
            <div>
                <h1>Войдите в приложение</h1>
                <p>Пожалуйста, введите логин и пароль</p>
            </div>
            <div>
                <div>
                    <Form onSubmit={handleSubmit} className="AppAuthForm">
                        <Form.Item
                            hasFeedback
                            validateStatus={
                                !touched.name ? '' : errors.name ? 'error' : 'success'
                            }
                            help={errors.name}
                        >
                            <Input
                                id="name"
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Ваше имя"
                                size='large'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                        </Form.Item>
                        <Form.Item
                            hasFeedback
                            validateStatus= {
                                !touched.password ? '' : errors.password ? 'error' : 'success'
                            }
                            help={!touched.password ? '' : errors.password}

                        >
                            <Input
                                id="password"
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Введите пароль"
                                size='large'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                        </Form.Item>
                        <Button
                            onClick={handleSubmit} size='large' type='primary'
                            disabled={isSubmitting}
                        >
                            Войти в приложение
                        </Button>
                    </Form>
                    <Link to='/register'>
                        Зарегистрироваться
                    </Link>
                </div>
            </div>
        </div>
    )
};

LoginForm.propTypes = {
    values: PropTypes.object,
    errors:PropTypes.object,
    touched: PropTypes.object,
    handleChange: PropTypes.func,
    handleBlur: PropTypes.func,
    handleSubmit: PropTypes.func,
    isSubmitting: PropTypes.bool,
    isAuth: PropTypes.bool,
};

export default LoginForm;