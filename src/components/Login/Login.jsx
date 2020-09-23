import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { requiredField } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import styles from '../common/FormsControls/FormsControls.module.css';


const LoginForm = (props) => { 
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Email'} name={'email'} type="text" component={Input} validate={[requiredField]}/>
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} type={"password"} component={Input} validate={[requiredField]} />
                </div>
                <div>
                    <Field  name={'rememberMe'} type={'checkbox'} component={Input} />Remember me
                </div>
                { props.error &&<div className={styles.formSummaryError}>
                    {props.error}
                </div> }
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => { 
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
        console.log(formData);//zdes mozhno delat PUT zapros na API auth/login
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    };

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);