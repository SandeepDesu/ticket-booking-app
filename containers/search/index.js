import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { TabView } from 'react-native-tab-view';
import Header from '../../components/header';
import OneWay from '../../components/one-way';
import TwoWay from '../../components/two-way';

const FirstRoute = () => (
    <OneWay />
);
const SecondRoute = () => (
    <TwoWay />
);
class SearchContainer extends Component {
    constructor() {
        super();
        this.state = {
            index: 0,
            routes: [
                { key: 'oneWay', title: 'One-Way' },
                { key: 'twoWay', title: 'Two-Way' },
            ],
        };
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header />
                <View style={{ borderWidth: 1 }}></View>
                <View style={{ height: 30, alignItems: 'center', padding: 2 }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Search domestic & international flights</Text>
                </View>
                <View style={{ borderWidth: 1 }}></View>
                <TabView
                    navigationState={this.state}
                    renderScene={({ route }) => {
                        switch (route.key) {
                            case 'oneWay':
                                return <FirstRoute />;
                            case 'twoWay':
                                return <SecondRoute />;
                            default:
                                return null;
                        }
                    }}
                    onIndexChange={index => this.setState({ index })}
                    initialLayout={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
                />
            </View>
        )
    }
}

export default connect()(SearchContainer);