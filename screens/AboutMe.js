import React from "react";
import {Image, StyleSheet, Text, View} from 'react-native';

const AboutMe = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>
                Про автора:
            </Text>
            <Text style={styles.description}>
                Роботу виконала студентка групи ТТП-42
            </Text>
            <Text style={styles.description2}>
                Захарчук Наталія Геннадіївна
            </Text>
            <Image style={styles.image} source={require('../me.jpg')} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 100,
        paddingHorizontal: 34
    },
    sectionTitle: {
        color: '##222222',
        width: 327,
        height: 60,
        fontSize: 40,
        lineHeight: 49,
        textAlign: 'center'
    },
    description: {
        marginTop: 0,
        width: 327,
        height: 44,
        fontSize: 18,
        lineHeight: 22,
        textAlign: 'center',
        color: '#646464',
        paddingTop: 0,
    },
    description2: {
        marginTop: 10,
        width: 327,
        height: 44,
        fontSize: 20,
        lineHeight: 22,
        textAlign: 'center',
        color: '#8F5CFF',
        paddingTop: 0,
    },
    image: {
        height: 350,
        width: 350,
        borderRadius: 180,
        borderColor: '#8F5CFF',
        borderWidth: 2
    }
});

export default AboutMe;
