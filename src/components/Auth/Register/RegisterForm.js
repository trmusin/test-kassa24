import React from 'react';
import Form from "antd/es/form/Form";
import Input from "antd/es/input/Input";
import Icon from "antd/es/icon/index";
import { Link } from "react-router-dom";
import Button from "antd/es/button/button";
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';



const RegisterForm =(props)=>{

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
                <h1>Зарегистрируйтесь в приложении</h1>
                <p>Для входа Вам нужно зарегистрироваться</p>
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
                      <Form.Item
                          hasFeedback
                          validateStatus= {
                              !touched.repeatPassword ? '' : errors.repeatPassword ? 'error' : 'success'
                          }
                          help={!touched.repeatPassword ? '' : errors.repeatPassword}

                      >
                          <Input
                              id="repeatPassword"
                              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                              placeholder="Повторите пароль"
                              size='large'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.repeatPassword}
                          />
                      </Form.Item>
                      <Link to='/description'>
                          <Button
                              onClick={handleSubmit} size='large' type='primary'
                              disabled={isSubmitting}
                          >
                              Зарегистрироваться
                          </Button>
                      </Link>
                  </Form>
                  <Link to='/description'>
                      О приложнии
                  </Link>
              </div>
            </div>
        </div>
    )
};

RegisterForm.propTypes = {
    values: PropTypes.object,
    errors:PropTypes.object,
    touched: PropTypes.object,
    handleChange: PropTypes.func,
    handleBlur: PropTypes.func,
    handleSubmit: PropTypes.func,
    isSubmitting: PropTypes.bool,
    isAuth: PropTypes.bool,
};

export default RegisterForm;