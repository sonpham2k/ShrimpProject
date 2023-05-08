import * as React from 'react';
import {Text, View} from 'react-native';

export default function SettingTimeScreen({navigation}) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigation('Diagram')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Setting Time Screen</Text>
        </View>
    );
}