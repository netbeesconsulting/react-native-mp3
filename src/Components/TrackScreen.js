import React, { Component } from 'react';
import { View, Text, Image, Alert, Platform, Linking } from 'react-native';
import { ButtonLayout, Spinner, OfflineNotice, AdMobBanner } from './Common';
import { connect } from 'react-redux';

import { StackActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TrackPlayer, { useProgress } from 'react-native-track-player';
import Slider from '@react-native-community/slider';

class TrackScreen extends Component {
    url = "";

    state = {
        isStart: false,
        isPause: false
    }

    componentDidMount() {
        var title = this.props.route.params.title;
        this.url = this.props.route.params.url;

        this.props.navigation.setOptions({
            headerTitle: title
        });
    }

    componentWillUnmount() {
        this.stop();
    }

    start = async () => {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.add({
            url: this.url
        });
        await TrackPlayer.play();
        this.setState({ isStart: true });
    };

    pauseRestart = async () => {
        if (this.state.isPause) {
            await TrackPlayer.play();
        } else {
            await TrackPlayer.pause();
        }

        this.setState({ isPause: !this.state.isPause });
    };

    stop = async () => {
        await TrackPlayer.stop();
        this.setState({ isStart: false });
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>


                    <ButtonLayout
                        text={this.state.isStart ? "Restart" : "Play"}
                        type={1}
                        onPress={() => this.start()}
                        style={{
                            width: 150,
                            alignSelf: 'center',
                            marginTop: 30,
                            justifyContent: 'center',
                        }}
                    />

                    <ButtonLayout
                        text={this.state.isPause ? "Resume" : "Pause"}
                        type={1}
                        onPress={() => this.pauseRestart()}
                        style={{
                            width: 150,
                            alignSelf: 'center',
                            marginTop: 30,
                            justifyContent: 'center',
                        }}
                    />

                    <ButtonLayout
                        text={'Stop'}
                        type={1}
                        onPress={() => this.stop()}
                        style={{
                            width: 150,
                            alignSelf: 'center',
                            marginTop: 30,
                            justifyContent: 'center',
                        }}
                    />

                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

export default connect(mapStateToProps, {
})(TrackScreen);
