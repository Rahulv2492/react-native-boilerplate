import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavgator from './BottomTabNavgator';
import { Colors } from './../styles';
const Stack = createStackNavigator();

const getTitle = route => {
    console.log('route', route);
    const routeName = route.state
        ? route.state.routes[route.state.index].name
        : 'Dashboard';
    switch (routeName) {
        case 'Dashboard':
            return 'Dashboard';
        case 'Contacts':
            return 'Contacts';
        default:
            break;
    }
};
const AuthNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.DARK_ORANGE,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <Stack.Screen
                name="Dashboard"
                component={BottomTabNavgator}
                options={({ route }) => ({ title: getTitle(route) })}
            />
        </Stack.Navigator>
    );
};

export default AuthNavigator;
