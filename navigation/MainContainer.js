import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

// Screens
import DiagramScreen from './screen/DiagramScreen';
import SettingTimeScreen from './screen/SettingTimeScreen';

// Screen names
const diagramName = 'Trạng thái hoạt động'
const settingName = 'Cài đặt thời gian'

const Tab = createBottomTabNavigator();


export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={diagramName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === diagramName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn === settingName) {
                        iconName = focused ? 'settings' : 'settings-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
            })}
            >

            
            <Tab.Screen name={diagramName} component={DiagramScreen}/>
            <Tab.Screen name={settingName} component={SettingTimeScreen}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
};
