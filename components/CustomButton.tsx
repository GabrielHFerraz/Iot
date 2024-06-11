import React from 'react';
import {Text, StyleSheet, Pressable, View} from 'react-native';

export default class CustomButton extends React.Component {
    render() {
        const { title, onPress, color } = this.props;
        return (
            <View style={styles.buttonContainer}>
                <Pressable onPress={onPress}
                           style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#ddd' : color,
                        },
                        styles.button,
                    ]}
                >
                    <Text style={styles.text}>{title}</Text>
                </Pressable>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    buttonContainer: {
        marginVertical: 10,
        minWidth:100
    },
    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});