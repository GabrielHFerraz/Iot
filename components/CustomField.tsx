// CustomField.js

import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class CustomField extends Component {
    render() {
        const { imageSource, label, value } = this.props;
        return (
            <View style={styles.container}>
                <Image source={imageSource} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.label}>{label}</Text>
                    <Text style={styles.value}>{value}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        gap: 5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'green'
    },
    image: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    textContainer: {
        gap:30,
        flexDirection: 'row',
    },
    label: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    value: {
        backgroundColor:'red',
        textAlign:'right',
        color: 'white',
        fontSize: 24,
    },
});

export default CustomField;
