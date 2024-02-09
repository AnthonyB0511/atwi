import React, { useState, useEffect } from 'react';
import { View, Animated, Easing } from 'react-native';

const DotAnimation = () => {
    const [dot1Scale] = useState(new Animated.Value(1));
    const [dot2Scale] = useState(new Animated.Value(1));
    const [dot3Scale] = useState(new Animated.Value(1));

    const animateDots = () => {
        Animated.sequence([
            Animated.timing(dot1Scale, {
                toValue: 1.5,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
            Animated.timing(dot1Scale, {
                toValue: 1,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
            Animated.timing(dot2Scale, {
                toValue: 1.5,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
            Animated.timing(dot2Scale, {
                toValue: 1,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
            Animated.timing(dot3Scale, {
                toValue: 1.5,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
            Animated.timing(dot3Scale, {
                toValue: 1,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
        ]).start(() => animateDots());
    };

    useEffect(() => {
        animateDots();
    }, []);

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Animated.View
                    style={{
                        width: 15,
                        height: 15,
                        borderRadius: 10,
                        backgroundColor: '#FBAC23',
                        marginHorizontal: 5,
                        transform: [{ scale: dot1Scale }],
                    }}
                />
                <Animated.View
                    style={{
                        width: 15,
                        height: 15,
                        borderRadius: 10,
                        backgroundColor: '#FBAC23',
                        marginHorizontal: 5,
                        transform: [{ scale: dot2Scale }],
                    }}
                />
                <Animated.View
                    style={{
                        width: 15,
                        height: 15,
                        borderRadius: 10,
                        backgroundColor: '#FBAC23',
                        marginHorizontal: 5,
                        transform: [{ scale: dot3Scale }],
                    }}
                />
            </View>
        </View>
    );
};

export default DotAnimation;