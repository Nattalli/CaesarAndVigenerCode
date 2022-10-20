import React from "react";
import { View } from "react-native";
import {ProgressChart} from "react-native-chart-kit";


const PlotBuilder = () => {

    return (
        <View>
            <ProgressChart
                data={[0.4, 0.6, 0.8]}
                width={400}
                height={220}
                chartConfig={{
                    backgroundColor: '#1cc910',
                    backgroundGradientFrom: '#eff3ff',
                    backgroundGradientTo: '#efefef',
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                }}
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />

        </View>
    )
}

export default PlotBuilder;
