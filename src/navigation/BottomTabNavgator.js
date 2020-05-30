import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard, Contacts } from './../screens';
import { Colors } from './../styles';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Dashboard"
            tabBarOptions={{
                activeTintColor: Colors.DARK_ORANGE,
                labelStyle: {
                    fontSize: 16,
                },
            }}>
            <Tab.Screen name="Dashboard" component={Dashboard} />
            <Tab.Screen name="Contacts" component={Contacts} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
