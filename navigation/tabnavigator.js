import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

import Feed from '../screens/feed';
import CreatePost from '../screens/createpost';

const Tab= createBottomTabNavigator()

const BottamTabNavigator=()=>{
    return(
        <Tab.Navigator
         screenOptions={({route})=>({
tabBarIcon:({focused,color,size})=>{
    let iconName 
    if(route.name==='Feed'){
        iconName=focused
        ?'book'
        :'book-outline'

    }
    else if(route.name==='CreatePost'){
        iconName=focused
        ?'create'
        :'create-outline'
    }
    return <Ionicons name={iconName} size={size} color={color} />
}

         })
         } 
         tabBarOptions={{
             activeTintColor:'tomato',
             inactiveTintColor:'gray'

         }}
         >
             <Tab.Screen name="Feed" component={Feed}/>
             <Tab.Screen name="CreatePost" component={CreatePost}/>

        </Tab.Navigator>
    )

}
export default BottamTabNavigator