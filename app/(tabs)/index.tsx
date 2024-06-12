import {StyleSheet, Text, View} from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import CustomButton from "@/components/Button/CustomButton";
import CustomInput from "@/components/CustomInput";
import React, {useState} from "react";
import CustomField from "@/components/CustomField";
import iconTermo from "@/assets/images/clima-quente.png";
import iconUmidade from "@/assets/images/umidade.png";

export default function HomeScreen() {
    const [text, setText] = useState('');
    const handlePress = () => {
        alert('Botão pressionado!');
    };
  return (
   <ThemedView style={styles.container}>
       <ThemedView style={styles.Server}>
           <CustomInput label={'Servidor:'} value={text} onChangeText={setText} placeholder={'http://192.168.0.151'} />
       </ThemedView>
       <CustomButton title={'Conectar'} onPress={handlePress} color="#008080"/>
       <ThemedView style={styles.acoes}>
           <CustomButton title={'Ligar'} onPress={handlePress} color="#33D685"/>
           <CustomButton title={'Desligar'} onPress={handlePress} color="#FF3333"/>
       </ThemedView>
       <ThemedView style={styles.modelo}>
            <Text style={{fontSize: 24, color:'white', fontWeight:'bold'}}>Servidor Web ESP32</Text>
            <Text style={{fontSize: 24, color:'white'}}>Sensor DHT</Text>
       </ThemedView>
       <ThemedView>
           <CustomField img={iconTermo}
                        label="Temperatura"
                        value="25º" />
           <CustomField img={iconUmidade}
                        label="Umidade"
                        value="79º" />
       </ThemedView>
       <ThemedView>
           <Text style={styles.title}>Estado do LED: </Text>
           <View style={styles.statusLed}>
               <Text style={styles.title}>Teste</Text>
           </View>
       </ThemedView>
   </ThemedView>
  );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        display: "flex",
        gap:5,
        flex:1
    },
    modelo: {
        gap: 15,
        padding: 20,
        alignItems:"center"
    },
    Server:{
        display:"flex",
        alignItems: 'center',
        flexDirection:"row"
    },
    acoes:{
        padding: 10,
        gap: 20,
        flexDirection: "row"
    },
    title: {
        gap: 10,
        color:'white',
        fontSize: 15,
        marginBottom: 20,
    },
    statusLed: {
        borderRadius: 5,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3385FF'
    }
});
