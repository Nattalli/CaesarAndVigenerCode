import React, { Component } from "react";
import {StyleSheet, View, Text } from "react-native";
import {ProgressChart} from "react-native-chart-kit";
import RNPickerSelect from 'react-native-picker-select';

let valueFirst = 20;
let valueSecond = 40;
let valueThird = 60;

const values = [
    { label: '10', value: 10 },
    { label: '20', value: 20 },
    { label: '30', value: 30 },
    { label: '40', value: 40 },
    { label: '50', value: 50 },
    { label: '60', value: 60 },
    { label: '70', value: 70 },
    { label: '80', value: 80 },
    { label: '90', value: 90 },
    { label: '100', value: 100 },
]


function changeValueFirst(newValue) {
    valueFirst = newValue;
    return valueFirst;
}

function changeValueSecond(newValue) {
    valueSecond = newValue;
    return valueSecond;
}

function changeValueThird(newValue) {
    valueThird = newValue;
    return valueThird;
}

function getData() {
    return [valueFirst / 100, valueSecond / 100, valueThird / 100]
}



class PlotBuilder extends Component{

    constructor(props){
        super(props);
        this.state = { time: Date.now() };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.mainText}>
                    Гарненький графік
                </Text>
                <ProgressChart
                    id="new-chart"
                    data={getData()}
                    width={400}
                    height={220}
                    chartConfig={{
                        backgroundGradientFrom: '#eff3ff',
                        backgroundGradientTo: '#efefef',
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(100, 50, 150, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                    }}
                    style={styles.plot}
                />
                <RNPickerSelect
                    onValueChange={(value) => changeValueFirst(value)}
                    items={values}
                    style={{
                        ...pickerSelectStyles,
                        iconContainer: {
                            top: 20,
                            right: 10,
                        },
                        placeholder: {
                            color: '#8F5CFF',
                            fontSize: 19,
                        },
                    }}
                />
                <RNPickerSelect
                    onValueChange={(value) => changeValueSecond(value)}
                    items={values}
                    style={{
                        ...pickerSelectStyles,
                        iconContainer: {
                            top: 20,
                            right: 10,
                        },
                        placeholder: {
                            color: '#8F5CFF',
                            fontSize: 19,
                        },
                    }}
                />
                <RNPickerSelect
                    onValueChange={(value) => changeValueThird(value)}
                    items={values}
                    style={{
                        ...pickerSelectStyles,
                        iconContainer: {
                            top: 20,
                            right: 10,
                        },
                        placeholder: {
                            color: '#8F5CFF',
                            fontSize: 19,
                        },

                    }}
                />
            </View>
        );
    }
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 150,
        marginLeft: 40
    },
    mainText: {
        color: '##222222',
        width: 327,
        height: 98,
        fontSize: 40,
        lineHeight: 49,
        textAlign: 'center'
    },
    plot: {
        marginTop: 50,
        marginBottom: 50
    },
    buttonStyle: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 19,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 4,
        color: 'black',
        paddingRight: 39,
    },
});

export default PlotBuilder;
