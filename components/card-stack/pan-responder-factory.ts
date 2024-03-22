import { GestureResponderEvent, PanResponder, PanResponderGestureState, PanResponderInstance } from 'react-native';

const onMoveHandler = (evt: GestureResponderEvent, state: PanResponderGestureState) => {
    const isVerticalSwipe = Math.pow(state.dx, 2) < Math.pow(state.dy, 2);
    return isVerticalSwipe ? false : Math.sqrt(Math.pow(state.dx, 2) + Math.pow(state.dy, 2)) > 10
}

export function createPanResponder(): PanResponderInstance {
    return PanResponder.create({
        //
        onStartShouldSetPanResponder: (evt, gestureState) => false,
        //
        onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
        //
        onMoveShouldSetPanResponder: onMoveHandler,
        //
        onMoveShouldSetPanResponderCapture: onMoveHandler,
        
    })

}