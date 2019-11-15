import React from 'react';
import PropTypes from 'prop-types';

function Login(props) {
  const { title, loginLabel, passwordLabel, submitBtnLabel } = props;

  return (
    <div>
      <h1>{title}</h1>

      <div>
        <label>{loginLabel}: </label>
        <input type='text' />
      </div>

      <div>
        <label>{passwordLabel}: </label>
        <input type='password' />
      </div>

      <button>
        {submitBtnLabel}
      </button>
    </div>
  );
}

Login.propTypes = {
  title: PropTypes.string,
  loginLabel: PropTypes.string,
  passwordLabel: PropTypes.string,
  submitBtnLabel: PropTypes.string
};

Login.defaultProps = {
  title: 'Login',
  loginLabel: 'username',
  passwordLabel: 'password',
  submitBtnLabel: 'submit'
}

export default Login;
