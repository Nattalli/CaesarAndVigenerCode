import React from "react";
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';


const Main = ({navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Шифрування тексту< /Text>
                <Text style={styles.description}>методами Цезаря та Віженера</Text>
                <Image source={require('../main_image.png')} />
                <Pressable
                    style={styles.buttonStyle}
                    onPress={() => navigation.navigate('Code')}>
                    <Text style={styles.buttonText}>
                        Зашифрувати текст
                    </Text>
                </Pressable>
                <Pressable
                    style={styles.buttonStyle}
                    onPress={() => navigation.navigate('Decode')}>
                    <Text style={styles.buttonText}>
                        Дешифрувати текст
                    </Text>
                </Pressable>
                <Pressable
                    style={styles.buttonStyle}
                    onPress={() => navigation.navigate('PlotBuilder')}>
                    <Text style={styles.buttonText}>
                        Побудувати графік
                    </Text>
                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate('AboutMe')}>
                    <Text style={styles.buttonTextAboutMe}>
                        Про автора
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    tasksWrapper: {
        paddingTop: 90,
        marginLeft: 40
    },
    sectionTitle: {
        color: '##222222',
        width: 327,
        height: 98,
        fontSize: 40,
        lineHeight: 49,
        textAlign: 'center'
    },
    description: {
        marginTop: 8,
        width: 327,
        height: 44,
        fontSize: 18,
        lineHeight: 22,
        textAlign: 'center',
        color: '#646464'
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
    buttonTextAboutMe: {
        width: 327,
        paddingHorizontal: 38,
        marginTop: 12,
        color: '#8F5CFF',
        fontSize: 20,
        lineHeight: 22,
        textAlign: 'center',
        height: 22,
    }
});

export default Main;
