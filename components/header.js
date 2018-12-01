import React from 'react';
import { View, Text, StatusBar } from 'react-native';

export default Header = (props) => {
    return (
        <View>
            <StatusBar backgroundColor={'red'} barStyle="light-content" />
            <View style={{ height: 60,flexDirection: 'row', justifyContent: 'center',padding:2 }}>
                <Text style={{fontSize:30,fontWeight:'bold',color:'green'}}>eTravos</Text>
            </View>
        </View>
    )
}