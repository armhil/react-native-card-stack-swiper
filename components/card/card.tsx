import React from 'react';
import { View } from 'react-native';
import { CardProps } from './types';

export const Card = (props: CardProps) =>
    (<View style={props.style} >
        {props.children}
    </View>);

export default Card;
