import React from 'react';
import { View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#FEC601',
            tabBarStyle: { backgroundColor: '#1D171D' },
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    tabBarLabel: 'Transactions',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="money" color={color} />,
                }}
            />
            <Tabs.Screen
                name="budget"
                options={{
                    headerShown: false,
                    tabBarLabel: 'Budget',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="bank" color={color} />,
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    headerShown: false,
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                }}
            />
        </Tabs>
    );
}

// const tabStyle = StyleSheet.create({
//     tabContainer: {
//         backgroundColor: '1D171D'
//     }
// })