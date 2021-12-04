import React, { Component } from "react";
import { View, Text, Alert, Image } from "react-native";
import { Card, CardItem } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from "react-native-gesture-handler";

const ProgramListItem = (props) => {
    const { title, tracks } = props.dataRow.item;

    return (
        <TouchableOpacity
            onPress={() => openTrackListScreen(props)}>
            <View style={{ padding: 10, backgroundColor: '#fff', margin:10 }}>
                <Text style={{ color: '#000', fontSize: 16, padding: 10 }}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const openTrackListScreen = (props) => {
    const { title, tracks } = props.dataRow.item;
    props.navigation.navigate('TrackListScreen', {
        title: title,
        tracks: tracks
    });
}

export default ProgramListItem;

