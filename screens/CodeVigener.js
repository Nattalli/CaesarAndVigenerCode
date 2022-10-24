import React from "react";
import {StyleSheet, TextInput, SafeAreaView, View, Text, Pressable, Alert} from 'react-native';
const { cipher } = require('npm-vigenere-cipher');
import * as FileSystem from 'expo-file-system';

const CodeVigener = () => {

    const [number, onChangeNumber] = React.useState(null);
    const [number2, onChangeNumber2] = React.useState(null);
    const uri = 'file:///Users/Nataliya/Desktop/university/md/lab1/lab1/f.txt';

    function code () {
        const regMatch = /^[a-zA-Z]*$/.test(number2);
        if (number2 !== null) {
            if (number !== " " || regMatch || !isNaN(number2)) {
                try {
                    return cipher(number2, number)
                }
                catch {
                    Alert.alert("Not valid value!", "Value should be a numeric or alphabetic")
                }
            } else {
                if (number === null)
                {
                    return 1
                }
                else {
                    Alert.alert("Not valid value!", "Value should be a numeric or alphabetic")
                }
            }
        }
        else {
            return 1
        }
    }

    function toWrite(){
        return number + "\n" + code();
    }

    function download() {
        FileSystem.writeAsStringAsync(
            uri,
            toWrite()
        )
            .then(() => {
                Alert.alert(
                    "Success!",
                    uri
                );
            })
            .catch(error => {
                Alert.alert(
                    "Failure!",
                    error
                );
            });
    }

    return (
        <View style={styles.container}>
            <View style={styles.tasksWrapper}>
                <SafeAreaView>
                    <Text style={styles.sectionTitle}>Ввід:</Text>
                    <TextInput
                        multiline
                        numberOfLines={5}
                        style={styles.inputKey}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Key..."
                        keyboardType="numeric"
                    />
                </SafeAreaView>

                <TextInput
                        multiline
                        numberOfLines={12}
                        style={styles.input}
                        onChangeText={onChangeNumber2}
                        value={number2}
                        defaultValue=""
                        placeholder="Code..."
                        keyboardType="numeric"
                    />
                    <Text style={styles.sectionTitle}>Вивід:</Text>
                    <TextInput
                        multiline
                        numberOfLines={12}
                        style={styles.input}
                        value={code()}
                        placeholder="Code..."
                        keyboardType="numeric"
                        editable={false}
                    />
                <View style={styles.buttonArea}>
                    <Pressable
                        style={styles.buttonStyle}
                        onPress={() => download()}>
                        <Text style={styles.buttonText}>
                            Завантажити
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 85,
    },
    sectionTitle: {
        marginLeft: 45,
        color: '##222222',
        width: 327,
        height: 30,
        fontSize: 20,
        lineHeight: 22,
        textAlign: 'center'
    },
    input: {
        margin: 12,
        borderWidth: 0,
        borderRadius: 8,
        fontSize: 20,
        padding: 15,
        height: 192,
        marginHorizontal: 15,
        backgroundColor: '#F0F0F0'
    },
    inputKey: {
        margin: 12,
        borderWidth: 0,
        borderRadius: 8,
        fontSize: 20,
        padding: 15,
        height: 40,
        marginHorizontal: 15,
        backgroundColor: '#F0F0F0'
    },
    buttonStyle: {
        backgroundColor: '#8F5CFF',
        borderRadius: 30,
        width: 327,
        height: 50,
        paddingTop: 14,
        paddingHorizontal: 38,
        marginTop: 12
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
        lineHeight: 22,
        textAlign: 'center',
        height: 22,
    },
    buttonArea: {
        paddingTop: 35,
        marginLeft: 50
    }
});

export default CodeVigener;
