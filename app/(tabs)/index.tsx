import {StyleSheet, Text, View} from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import CustomButton from "@/components/Button/CustomButton";
import CustomInput from "@/components/CustomInput";
import React, {useEffect, useState} from "react";
import CustomField from "@/components/CustomField";
import iconTermo from "@/assets/images/clima-quente.png";
import iconUmidade from "@/assets/images/umidade.png";
import axios from "axios";

export default function HomeScreen() {
    const [text, setText] = useState('http://herculanodebiasi.dyndns-ip.com:9090');
    const [textLed, setTextLed] = useState('');
    const [data, setData] = useState<temp | null>(null);
    const [error, setError] = useState('');
    

    interface temp {
        temperatura: number,
        umidade: number;
    }

    const fetchData = async () => {
       try {        
           const { data } = await axios.get<temp>(`${text}/lesensor`)
           setData(data)
       } catch (error: any){
            setError(error.message);;
       }
    }

    const fetchOff = async () => {
        try {        
            const off = await axios.get(`${text}/ledoff`)    
                  
        } catch (error: any){
            setError(error.message);
        }
        setTextLed('Desligado');  
     }

     const fetchOn = async () => {
        try {        
            const off = await axios.get(`${text}/ledon`)    
                  
        } catch (error: any){
            setError(error.message);
        }
        setTextLed('Ligado');  
     }


    useEffect(() => {        
        fetchData(); // Execute fetchData initially    
        
        const intervalId = setInterval(fetchData, 60000); // Execute fetchData every 5 seconds
        
        // Cleanup interval on component unmount
       // return () => clearInterval(intervalId);
    }, []);
        


  return (
   <ThemedView style={styles.container}>
       <ThemedView style={styles.Server}>        
           <CustomInput label={'Servidor:'} value={text} onChangeText={setText} placeholder={'http://192.168.0.151'} />           
       </ThemedView>    
       {error && (<Text style={{color:'white'}}>{error}</Text>)}
       <CustomButton title={'Conectar'} onPress={fetchData} color="#008080"/>
       <Text></Text>
       <ThemedView style={styles.acoes}>
           <CustomButton title={'Ligar'} onPress={fetchOn} color="#33D685"/>
           <CustomButton title={'Desligar'} onPress={fetchOff} color="#FF3333"/>
       </ThemedView>
       <ThemedView style={styles.modelo}>
            <Text style={{fontSize: 24, color:'white', fontWeight:'bold'}}>Servidor Web ESP32</Text>
            <Text style={{fontSize: 24, color:'white'}}>Sensor DHT</Text>
       </ThemedView>
       <ThemedView>
           <CustomField img={iconTermo}
                        label="Temperatura"
                        value= {data?.temperatura} />
           <CustomField img={iconUmidade}
                        label="Umidade"
                        value={data?.umidade} />
       </ThemedView>
       <ThemedView style={{backgroundColor:'#000'}}>
           <Text style={styles.title}>Estado do LED:</Text>
           <View style={styles.statusLed}>               
               <Text style={{color:'white'}}>{textLed}</Text>               
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
        flex:1,
        backgroundColor: '#000'
    },
    modelo: {
        gap: 15,
        padding: 20,
        alignItems:"center",
        backgroundColor: '#000'
    },
    Server:{
        display:"flex",
        alignItems: 'center',
        flexDirection:"row",
        backgroundColor: '#000'
    },
    acoes:{
        padding: 10,
        gap: 20,
        flexDirection: "row",
        backgroundColor: '#000'

    },
    title: {
        gap: 10,
        color:'white',
        fontSize: 15,
        marginBottom: 20,
        backgroundColor: '#000'     
    },
    statusLed: {
        borderRadius: 5,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3385FF'
    }
});
