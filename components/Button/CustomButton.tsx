import {Text, StyleSheet, Pressable, View} from 'react-native';

interface CustomButtonProps {
    color: string,
    title: string,
    onPress?: () => void
}

export default function CustomButton({color, title, onPress}: CustomButtonProps) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable onPress={onPress} style={({pressed}) => [
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
const styles = StyleSheet.create({
    buttonContainer: {
        marginVertical: 10,
        minWidth: 100
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