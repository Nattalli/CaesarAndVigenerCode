import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Main  from "./screens/Main";
import Code from "./screens/Code";
import PlotBuilder from "./screens/PlotBuilder";
import CodeCaesar from "./screens/CodeCaesar";
import Decode from "./screens/Decode";
import CodeVigener from "./screens/CodeVigener";
import InputFile from "./screens/InputFile";
import DecodeCaesar from "./screens/DecodeCaesar";
import DecodeVigener from "./screens/DecodeVigener";
import AboutMe from "./screens/AboutMe"


const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name="Main"
                    component={Main}
                />
                <Stack.Screen name="Code" component={Code} />
                <Stack.Screen name="Decode" component={Decode} />
                <Stack.Screen name="PlotBuilder" component={PlotBuilder} />
                <Stack.Screen name="CodeCaesar" component={CodeCaesar} />
                <Stack.Screen name="CodeVigener" component={CodeVigener} />
                <Stack.Screen name="DecodeCaesar" component={DecodeCaesar} />
                <Stack.Screen name="DecodeVigener" component={DecodeVigener} />
                <Stack.Screen name="InputFile" component={InputFile} />
                <Stack.Screen name="AboutMe" component={AboutMe} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MyStack;
