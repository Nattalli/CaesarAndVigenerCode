import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Main  from "./screens/Main";
import Code from "./screens/Code";
import Plot from "./screens/Plot";
import InputOutput from "./screens/InputOutput";
import Decode from "./screens/Decode";

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{ title: 'Code your text' }}
                />
                <Stack.Screen name="Code" component={Code} />
                <Stack.Screen name="Decode" component={Decode} />
                <Stack.Screen name="Plot" component={Plot} />
                <Stack.Screen name="InputOutput" component={InputOutput} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MyStack;
