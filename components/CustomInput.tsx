// CustomInput.js

import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

class CustomInput extends React.Component<{
    label: any,
    value: any,
    onChangeText: any,
    placeholder: any
}> {
    render() {
        let {label, value, onChangeText, placeholder} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.label}>{label}</Text>
                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomColor: '#ccc',
        gap:5
    },
    label: {
        marginBottom: 5,
        fontSize: 16,
        color: 'white',
    },
    input: {
        minWidth:'70%',
        maxWidth:'70%',
        color: 'white',
        height: 20,
        borderColor: 'white',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
    },
});

export default CustomInput;
