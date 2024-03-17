import React, { useState,useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [enteredClgName, setEnteredClgName]=useState('');
  const [clgNameIsValid, setClgNameIsValid]=useState('');
  const [formIsValid, setFormIsValid] = useState(false);


  
useEffect(()=>{
  
  setFormIsValid(
    enteredEmail.includes('@') && enteredPassword.trim().length && enteredClgName.trim().length > 6
  );

},[enteredEmail, enteredPassword,enteredClgName]);
  

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    
  };
  const clgNameChangeHandler = (event) => {
    setEnteredClgName(event.target.value);

    
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const validateClgNameHandler = () => {
    setClgNameIsValid(enteredClgName.trim().length > 6);
  };




  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword,enteredClgName);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            clgNameIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="clgName">College Name</label>
          <input
            type="text"
            id="clgName"
            value={enteredClgName}
            onChange={clgNameChangeHandler}
            onBlur={validateClgNameHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
