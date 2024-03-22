import React from 'react';
import { View } from 'react-native';

type CardProps = {
    children: any;
    style: any;
}

export const Card = (props: CardProps) =>
    (<View style={props.style} >
        {props.children}
    </View>);

export default Card;
