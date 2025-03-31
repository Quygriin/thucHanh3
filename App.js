import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'HOME') return <Ionicons name="home" size={size} color={color} />;
            if (route.name === 'ORDER') return <Ionicons name="fast-food" size={size} color={color} />;
            if (route.name === 'PIZZA') return <Ionicons name="pizza" size={size} color={color} />;
            if (route.name === 'INBOX') return <Ionicons name="notifications" size={size} color={color} />;
            if (route.name === 'PROFILE') return <Ionicons name="person" size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FF5733',
          tabBarInactiveTintColor: '#888',
          tabBarLabelStyle: {
            fontSize: 12,
            marginTop: -5,
            marginBottom: 5,
          },
          tabBarStyle: {
            height: 60,
            borderTopWidth: 1,
            borderTopColor: '#f2f2f2',
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="HOME" component={HomeScreen} />
        <Tab.Screen name="ORDER" component={CartScreen} />
    
        <Tab.Screen name="PROFILE" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}