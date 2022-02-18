import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Dashboard = (props: any) => {

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'column', 
            flex: 1, 
            backgroundColor: '#fff', 
            alignItems: 'center', 
            paddingVertical: 10
        },
        topTextContainer: {
            width: Dimensions.get('window').width-20
        },
        topLeftBorderStyle: {
            height: 60, 
            width: 60, 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            borderLeftColor: '#0c91eb', 
            borderLeftWidth: 2, 
            borderTopColor: '#0c91eb', 
            borderTopWidth: 2, 
            borderTopLeftRadius: 18
        },
        headerTextStyles: {
            fontSize: 36, 
            textAlign: 'center', 
            fontWeight: '600', 
            color: 'black', 
            fontFamily: 'Roboto'
        },
        bottomRightBorderStyle: {
            height: 60, 
            width: 60, 
            position: 'absolute', 
            bottom: 0, 
            right: 0, 
            borderRightColor: '#0c91eb', 
            borderRightWidth: 2, 
            borderBottomColor: '#0c91eb', 
            borderBottomWidth: 2, 
            borderBottomRightRadius: 18
        },
        imageContainer: {
            height: '75%', 
            alignItems: 'center'
        },
        imageStyles: {
            height: '100%', 
            width: Dimensions.get('window').width-20, 
            borderTopLeftRadius: 30, 
            borderBottomRightRadius: 30
        },
        buttonStyles: {
            backgroundColor: '#0c91eb', 
            padding: 10, 
            borderRadius: 10
        },
        buttonTextStyles: {
            fontSize: 20, 
            color: 'white', 
            fontWeight: '700'
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.topTextContainer}>
                <View style={styles.topLeftBorderStyle} />
                <Text style={styles.headerTextStyles}>
                    Places to visit when you step in Kolkata
                </Text>
                <View style={styles.bottomRightBorderStyle} />
            </View>

            <View style={styles.imageContainer}>
                <Image source={require('../../assets/images/Princep-Ghat-6.jpg')} style={styles.imageStyles} resizeMethod={"resize"} resizeMode={"center"} />
            </View>
            <TouchableOpacity style={styles.buttonStyles} onPress={() => props.navigation.navigate('destination1')}>
                <Text style={styles.buttonTextStyles}>Start touring !</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Dashboard;