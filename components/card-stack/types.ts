import React from "react"

export type CardStackProps = {
    // children of the component
    children: Array<React.Component> | React.Component;
    secondCardZoom: number;
    loop: boolean;
    // initial card's index
    initialIndex: number;
    onSwipeStart: Function;
    onSwiped: Function;
    onSwipeEnd: Function;
    onSwipedLeft: Function;
}
/*
CardStack.propTypes = {

    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    cardContainerStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    secondCardZoom: PropTypes.number,
    loop: PropTypes.bool,
    initialIndex: PropTypes.number,
    renderNoMoreCards: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    onSwipeStart: PropTypes.func,
    onSwipeEnd: PropTypes.func,
    onSwiped: PropTypes.func,
    onSwipedLeft: PropTypes.func,
    onSwipedRight: PropTypes.func,
    onSwipedTop: PropTypes.func,
    onSwipedBottom: PropTypes.func,
    onSwiped: PropTypes.func,
    onSwipedAll: PropTypes.func,
    onSwipe: PropTypes.func,
  
    disableBottomSwipe: PropTypes.bool,
    disableLeftSwipe: PropTypes.bool,
    disableRightSwipe: PropTypes.bool,
    disableTopSwipe: PropTypes.bool,
    verticalSwipe: PropTypes.bool,
    verticalThreshold: PropTypes.number,
  
    horizontalSwipe: PropTypes.bool,
    horizontalThreshold: PropTypes.number,
    outputRotationRange: PropTypes.array,
    duration: PropTypes.number
  }
  
  CardStack.defaultProps = {
  
    style: {},
    cardContainerStyle: {},
    secondCardZoom: 0.95,
    loop: false,
    initialIndex: 0,
    renderNoMoreCards: () => { return (<Text>No More Cards</Text>) },
    onSwipeStart: () => null,
    onSwipeEnd: () => null,
    onSwiped: () => { },
    onSwipedLeft: () => { },
    onSwipedRight: () => { },
    onSwipedTop: () => { },
    onSwipedBottom: () => { },
    onSwipedAll: async () => { },
    onSwipe: () => { },
  
    disableBottomSwipe: false,
    disableLeftSwipe: false,
    disableRightSwipe: false,
    disableTopSwipe: false,
    verticalSwipe: true,
    verticalThreshold: height / 4,
    horizontalSwipe: true,
    horizontalThreshold: width / 2,
    outputRotationRange: ['-15deg', '0deg', '15deg'],
    duration: 300
  }
  */