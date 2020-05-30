import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { retrieveData } from '@utils/helpers';
import UnauthNavigator from './UnauthNavigator';
import AuthNavigator from './AuthNavigator';
import { AUTHRIZATION_TOKEN_KEY } from './../constants';

import { restoreToken } from './../screens/Login/actions';

const Navigation = ({ user, restoreTokens }) => {
    useEffect(() => {
        retrieveData(AUTHRIZATION_TOKEN_KEY).then(res => {
            if (res) restoreTokens({ isAuthenticated: true });
        });
    }, [restoreTokens]);

    return user.isLoading ? (
        <View>
            <Text>Loading...</Text>
        </View>
    ) : (
        <NavigationContainer>
            {user.isAuthenticated ? <AuthNavigator /> : <UnauthNavigator />}
        </NavigationContainer>
    );
};

Navigation.propTypes = {
    restoreTokens: PropTypes.func,
    user: PropTypes.object,
};

const mapStateToProps = ({ user }) => ({
    user,
});

const mapDispatchToProps = dispatch => ({
    restoreTokens: payload => dispatch(restoreToken(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Navigation);
