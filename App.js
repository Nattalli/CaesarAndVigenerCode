import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Main  from "./screens/Main";
import Code from "./screens/Code";
import PlotBuilder from "./screens/PlotBuilder";
import CodeCaesar from "./screens/CodeCaesar";
import Decode from "./screens/Decode";
import CodeVigener from "./screens/CodeVigener";
import DecodeCaesar from "./screens/DecodeCaesar";
import DecodeVigener from "./screens/DecodeVigener";
import AboutMe from "./screens/AboutMe"
import InputFileVigenerDecode from "./screens/InputFileVigenerDecode";
import InputFileCaesarDecode from "./screens/InputFileCaesarDecode";
import InputFileVigenerCode from "./screens/InputFileVigenerCode";
import InputFileCaesarCode from "./screens/InputFileCaesarCode";


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
                <Stack.Screen name="InputFileCaesarDecode" component={InputFileCaesarDecode} />
                <Stack.Screen name="InputFileCaesarCode" component={InputFileCaesarCode} />
                <Stack.Screen name="InputFileVigenerCode" component={InputFileVigenerCode} />
                <Stack.Screen name="InputFileVigenerDecode" component={InputFileVigenerDecode} />
                <Stack.Screen name="AboutMe" component={AboutMe} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MyStack;
