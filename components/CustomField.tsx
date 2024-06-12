import {View, Text, Image, StyleSheet, ImageSourcePropType} from 'react-native';

interface CustomFieldProps {
    label: string,
    value:string,
    img: ImageSourcePropType;
}

export default function CustomField ({label,value, img}: CustomFieldProps)
{
        return (
            <View style={styles.container}>
                <Image source={img} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.label}>{label}</Text>
                    <Text style={styles.value}>{value}</Text>
                </View>
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        gap: 5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
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
