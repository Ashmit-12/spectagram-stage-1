import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottamTabNavigator from './tabnavigator'
import Profile from '../screens/profile'

const Drawer=createDrawerNavigator()

const DrawerNavigator=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={BottamTabNavigator} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    )
}
export default DrawerNavigator