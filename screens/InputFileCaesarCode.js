import React from 'react';
import {Alert, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {encrypt} from 'caesar-shift';
import * as FileSystem from 'expo-file-system';

let var1 = 1;
let var2 = "a";
let var3 = "a";

const InputCodeCaesar = () => {
    const uri = 'file:///Users/Nataliya/Desktop/university/md/lab1/lab1/f.txt';

    function saveValues(val1, val2, val3) {
        var1 = val1.toString();
        var2 = val2;
        var3 = val3;
        return [var1, var2, var3]
    }

    function code() {
        FileSystem.readAsStringAsync(
            uri
        )
            .then((values) => {
                Alert.alert(
                    "Success",
                    values
                )
                console.log(values);
                let textSplit = values.toString().split('\n');
                if (textSplit[1] !== null) {
                    if (textSplit[0] !== null || textSplit[0] !== " ") {
                        if (!isNaN(parseInt(textSplit[0]))) {
                            textSplit.push(encrypt(textSplit[0], textSplit[1]).toString())
                        } else {
                            alert("Key must be a number!")
                            textSplit.push("1")
                        }
                    } else {
                        textSplit.push(encrypt(1, textSplit[1]).toString())
                    }
                } else {
                    textSplit.push("")
                }
                console.log(textSplit)
                let a = saveValues(textSplit[0].toString(), textSplit[1], textSplit[2])
                return textSplit;
            })
            .catch(error => {
                Alert.alert(
                    "Failure!",
                    error
                );
            })
    }

    code();

    function toWrite(){
        return var1.toString() + "\n" + var3.toString();
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
                        onChangeText={var1.toString()}
                        value={var1}
                        placeholder="Key..."
                        keyboardType="numeric"
                        editable={false}
                    />
                </SafeAreaView>

                <TextInput
                    multiline
                    numberOfLines={12}
                    style={styles.input}
                    onChangeText={var2.toString()}
                    value={var2}
                    defaultValue=""
                    placeholder="Code..."
                    keyboardType="numeric"
                    editable={false}
                />
                <Text style={styles.sectionTitle}>Вивід:</Text>
                <TextInput
                    multiline
                    numberOfLines={12}
                    style={styles.input}
                    value={var3.toString()}
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

export default InputCodeCaesar;