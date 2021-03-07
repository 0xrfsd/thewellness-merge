import React, { Component } from "react";
import { ScrollView, Image, ImageBackground, Pressable, Text, View, SafeAreaView } from "react-native";

import Casa from '../../../assets/images/background.jpg';
import Carousel from "./Carousel";

const HouseScreen = ({ navigation }) => {
   return (
      // <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      // <Image source={Casa} style={{ width: '100%', height: '40%', marginTop: -20 }}/>
      // <View style={{ marginTop: '30%', width: '100%', paddingLeft: 20, paddingRight: 20 }}>
      // <Text style={{ textAlign: 'center', fontSize: 25 }}>Wellness</Text>
      // <Text style={{ textAlign: 'center', fontSize: 20 }}>Encontre a propríedade perfeita para se hospedar.</Text>
      // <View style={{ marginTop: 10, borderRadius: 5, width: '100%', height: 45, backgroundColor: 'red', justifyContent: 'center' }}>
      // <Text style={{ textAlign: 'center' }}>Cadastre-se</Text>
      // </View>
      // <View style={{ marginTop: 10, borderRadius: 5, width: '100%', height: 45, justifyContent: 'center' }}>
      // <Text style={{ textAlign: 'center' }}>Entrar</Text>
      // </View>
      // </View>
      // </View>
<View style={{ flex: 1 }}>
<Carousel />
         <View style={{ marginTop: '100%', flex: 1, paddingLeft: 20, paddingRight: 20, position: 'absolute', width: '100%', height: '60%', borderRadius: 20, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ margnBottom: 20 }}>
            <Text style={{ fontSize: 26, color: '#333', textAlign: 'center' }}>Wellness</Text>
            <Text style={{ fontSize: 20, color: '#333', textAlign: 'center', marginTop: 10 }}>Desfrute de experiências incríveis conosco.</Text>
            <Text style={{ fontSize: 20, color: '#333', textAlign: 'center', marginTop: 10 }}>🌿🏡✨</Text>
            </View>
            <Pressable onPress={() => navigation.navigate("Destination Search")} style={{ marginLeft: 20, marginRight: 20, marginTop: 20, justifyContent: 'center', alignItems: 'center', borderRadius: 5, width: '100%', height: 50, backgroundColor: '#f15454', justifyContent: 'center' }}>
               <Text style={{ fontSize: 14, color: '#333', textAlign: 'center' }}>Ainda não possui uma conta? Crie uma agora.</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Destination Search")} style={{ marginLeft: 20, marginRight: 20,  justifyContent: 'center', alignItems: 'center', marginTop: 10, borderRadius: 5, width: '100%', height: 50, backgroundColor: '#f15454', justifyContent: 'center' }}>
               <Text style={{ fontSize: 16, color: '#333', textAlign: 'center' }}>Já possui uma conta? Entre agora.</Text>
            </Pressable>
         </View>
</View>
   );
};

export default HouseScreen;
