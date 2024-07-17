import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { accentColor, secondaryColor } from '../colors';
import { CategoryProvider } from '../CategoryProvider';

const tabLayout = () => {
    return (
        <CategoryProvider>
            <Tabs screenOptions={{
                tabBarActiveTintColor: accentColor,
                tabBarStyle: { backgroundColor: secondaryColor },
            }}>
                <Tabs.Screen
                    name="index"
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Transactions',
                        tabBarIcon: ({color}:{color : string}) => <FontAwesome size={28} name="money" color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="budget"
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Budget',
                        tabBarIcon: ({color}:{color : string}) => <FontAwesome size={28} name="bank" color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="settings"
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Settings',
                        tabBarIcon: ({color}:{color : string}) => <FontAwesome size={28} name="cog" color={color} />,
                    }}
                />
            </Tabs>
        </CategoryProvider>
    );
}

export default tabLayout;

