import React, { Component } from 'react';
import { View, FlatList, RefreshControl, Text } from 'react-native';
import { ButtonLayout, Spinner, OfflineNotice, AdMobBanner } from './Common';
import TrackListItem from './ListItems/TrackListItem';

class TrackListScreen extends Component {
    state = {
        isLoading: false,
        isRequestFailed: false,
        requestFailedMessage: '',
        listData: []
    };

    componentDidMount() {
        var title = this.props.route.params.title;
        var tracks = this.props.route.params.tracks;

        this.props.navigation.setOptions({
            headerTitle: title
        });

        this.setState({
            listData: tracks
        });
    }

    renderContentRow = dataRow => {
        return (
            // <Text>aaaaaaaa</Text>
            <TrackListItem dataRow={dataRow} navigation={this.props.navigation} />
        );
    };

    renderEmptyLayout() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center' }}>No available data</Text>
            </View>
        );
    }


    renderData() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Spinner />
                </View>
            );
        } else if (this.state.listData.length == 0) {
            return this.renderEmptyLayout();
        } else {
            return (
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                    <FlatList
                        style={{ marginBottom: 20 }}
                        data={this.state.listData}
                        renderItem={this.renderContentRow}
                        extraData={this.state}
                        keyExtractor={(item, index) => index.toString()}
                        style={{ padding: 8 }}
                        refreshControl={
                            <RefreshControl
                                //refresh control used for the Pull to Refresh
                                refreshing={this.state.isLoading}
                                onRefresh={() => this.loadData()}
                            />
                        }
                    />
                </View>
            );
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.renderData()}
            </View>
        );
    }
}


export default TrackListScreen;