import React, { Component } from "react";
import { View, Text, Alert, Image } from "react-native";
import { Card, CardItem } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from "react-native-gesture-handler";

const TrackListItem = (props) => {
    const { id, title } = props.dataRow.item;

    return (
        <TouchableOpacity
            onPress={() => openTrackListScreen(props)}>
            <View style={{ padding: 10, backgroundColor: '#fff', margin: 10 }}>
                <Text style={{ color: '#000', fontSize: 16, padding: 10 }}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const openTrackListScreen = (props) => {
    const { title, media } = props.dataRow.item;

    var url = "";
    if (media && media.mp3 && media.mp3.url) {
        url = media.mp3.url;
    }
    props.navigation.navigate('TrackScreen', {
        title: title,
        url: url
    });
}

export default TrackListItem;

