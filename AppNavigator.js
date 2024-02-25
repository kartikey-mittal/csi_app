import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailsScreen';
import LeadScreen from './screens/LeadScreen';
import AssignTask_Screen from './screens/AssignTask_Screen';
import LoginScreen from './screens/LoginScreen';
import ReviewTask_Screen from './screens/ReviewTask_Screen';
import SignupScreen from './screens/SignupScreen';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: true }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="AssignTask" component={AssignTask_Screen} />
                <Stack.Screen name="ReviewTask" component={ReviewTask_Screen} />
                <Stack.Screen name="Lead" component={LeadScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
           
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
