import React from "react";
import { View, ActivityIndicator } from "react-native";
import { HEADER_BAR_COLOR } from "../../Common/GlobalDataStore";
// import { Spinner } from 'native-base';

const Spinner = ({ size, color='#000' }) => {
    return(
        <View style = {styles.spinnerStyle}>
            <ActivityIndicator
                size={50}
                color={color}
            />
        </View>
    );
};

const styles = {
    spinnerStyle: {
        alignItems: 'center'
    }
}

export { Spinner };