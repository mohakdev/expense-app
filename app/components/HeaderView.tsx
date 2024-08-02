import { View, Text, TouchableOpacity, Image, ImageSourcePropType, GestureResponderEvent } from 'react-native'
import React from 'react'
import mainStyles from '../styles/MainStyles';

interface IHeader {
    title : string,
    image : ImageSourcePropType | undefined,
    onClick : ((event: GestureResponderEvent) => void) | undefined,
}

const HeaderView = (props : IHeader) => {
  return (
    <View style={mainStyles.header}>
        <Text style={[mainStyles.title,{flex : 1}]}>{props.title}</Text>
        <TouchableOpacity onPress={props.onClick}>
            <Image style={{width : 40, height : 40}} source={props.image}/>
        </TouchableOpacity>
    </View>
  )
}

export default HeaderView;