import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';

const Destination2 = (props: any) => {

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'column', 
            backgroundColor: '#fff', 
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 10
        },
        headerTextStyles: {
            fontSize: 24, 
            textAlign: 'center', 
            fontWeight: 'bold', 
            color: '#0c91eb', 
            fontFamily: 'Roboto',
        },
        placeInfoTextStyles: {
            fontSize: 16, 
            textAlign: 'center', 
            color: 'black', 
            fontFamily: 'Roboto',
            fontStyle: 'italic',
            paddingHorizontal: 5
        },
        infoContainer: {
            height: '80%', 
            alignItems: 'center',
            justifyContent: 'center',
            width: '97%'
        },
        imageStyles: {
            height: '50%', 
            width: Dimensions.get('window').width-20, 
            borderTopLeftRadius: 30, 
            borderBottomRightRadius: 30
        },
        buttonStyles: {
            backgroundColor: '#0c91eb', 
            padding: 10, 
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        buttonTextStyles: {
            fontSize: 20, 
            color: 'white', 
            fontWeight: '700'
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.headerTextStyles}>
                    2. Rabindra Setu aka Howrah Bridge
                </Text>
                <Image source={require('../../assets/images/Kolkata-City-Profile.jpg')} style={styles.imageStyles} resizeMethod={"resize"} resizeMode={"center"} />
                <Text style={styles.placeInfoTextStyles}>
                    The Howrah Bridge is synonymous to Kolkata, and has remained the face to the City of Joy since antiquity. One of the early engineering and architectural marvels of Bengal, the bridge is sixth longest suspended span cantilever bridge in the world.
                </Text>
            </View>
            
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '95%', height: '20%', alignItems: 'center'}}>
                <TouchableOpacity style={styles.buttonStyles} onPress={() => {if(props.navigation.canGoBack()) props.navigation.goBack()}}>
                    <Text style={styles.buttonTextStyles}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyles} onPress={() => props.navigation.navigate('Destination3')}>
                    <Text style={styles.buttonTextStyles}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Destination2;