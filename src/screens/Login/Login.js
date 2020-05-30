import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { userLogin } from './actions';
import { Container } from './Login.style';

const Login = ({ userLogin }) => {
    return (
        <Container.Wrapper>
            <Text>Login Page</Text>
            <Button onPress={() => userLogin()} title="Login" />
        </Container.Wrapper>
    );
};

Login.propTypes = {
    userLogin: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
    userLogin: () => dispatch(userLogin()),
});

export default connect(
    null,
    mapDispatchToProps,
)(Login);
