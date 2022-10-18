import React from "react";
import {StyleSheet, Text, View} from 'react-native';

const Code = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>
                Hi! Plot
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    sectionTitle: {
        color: '##222222',
        width: 327,
        height: 98,
        fontSize: 40,
        lineHeight: 49,
        textAlign: 'center'
    }
});

export default Code;
