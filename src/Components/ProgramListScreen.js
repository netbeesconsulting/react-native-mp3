import React, { Component } from 'react';
import { View, FlatList, RefreshControl, Text } from 'react-native';
import { connect } from 'react-redux';
import { getProgramsAction } from '../Actions';
import ProgramListItem from './ListItems/ProgramListItem';
import { ButtonLayout, Spinner, OfflineNotice, AdMobBanner } from './Common';

class ProgramListScreen extends Component {
    state = {
        isLoading: false,
        isRequestFailed: false,
        requestFailedMessage: '',
        listData: []
    };

    selectedData = null;

    static getDerivedStateFromProps(props, state) {
        if (state.isLoading && props.isRequestFailed) {
            state.isLoading = false;
            // assign prop values to state
            return props;
        } else if (state.isLoading && props.programs) {
            state.isLoading = false;
            state.listData = props.programs;
            return props;
        }
        return null;
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        this.setState({
            isLoading: true,
            isRequestFailed: false,
            requestFailedMessage: '',
            listData: []
        });

        this.props.getProgramsAction();
    }

    renderContentRow = dataRow => {
        return (
            <ProgramListItem dataRow={dataRow} navigation={this.props.navigation} />
        );
    };

    renderEmptyLayout() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center' }}>No available data</Text>
            </View>
        );
    }

    renderErrorMsg() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}>
                <Text
                    style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 16
                    }}>{this.props.requestFailedMessage}</Text>
                <ButtonLayout
                    text={'Retry'}
                    icon={'refresh'}
                    onPress={() => this.loadData()}
                    style={{
                        width: 150,
                        alignSelf: 'center',
                        marginTop: 20,
                        justifyContent: 'center',
                    }}
                />
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
        } else if (this.state.isRequestFailed) {
            return this.renderErrorMsg();
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


const mapStateToProps = state => {
    var isRequestFailed = state.main.isRequestFailed;
    var requestFailedMessage = state.main.requestFailedMessage;
    var programs = state.main.programs;
    return {
        programs,
        isRequestFailed,
        requestFailedMessage,
    };
}

export default connect(mapStateToProps, { getProgramsAction })(ProgramListScreen);