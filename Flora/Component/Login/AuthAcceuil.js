import * as React from 'react';
import {
    Text,
    SafeAreaView, 
    TextInput, 
    TouchableOpacity, 
    View,
    StyleSheet,
} from "react-native";

const AuthAcceuil = () => {
    return (
        <SafeAreaView>
            <View style={styles.view}>
                <TextInput style={styles.input} placeholder='Phone, email or username'/>
                <TouchableOpacity style={styles.buttonNext}>
                    <Text style={styles.styleNext}>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonPassword}>
                    <Text style={styles.stylePassword}>Forgot Password ?</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    view: {
        top: 150
    },
    input: {
        marginLeft: "auto",
        marginRight: "auto",
        borderWidth: 1,
        borderColor: "#CFD9DE",
        height: 58,
        width: 300,
        borderRadius: 4
    },
    buttonNext: {
        marginLeft: "auto",
        marginRight: "auto",
        width: 300,
        height: 36,
        backgroundColor: "#0F1419",
        borderRadius: 9999,
        marginTop: 26,
    },
    styleNext: {
        color: "#FFFFFF",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontSize: 15,
        lineHeight: 20,
        marginRight: "auto",
        marginLeft: "auto",
        top: 5
    },
    buttonPassword: {
        marginLeft: "auto",
        marginRight: "auto",
        width: 300,
        height: 36,
        borderRadius: 9999,
        marginTop: 26,
        borderColor: "#CFD9DE",
        borderWidth: 1
    },
    stylePassword: {
        color: "#0F1419",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontSize: 15,
        lineHeight: 20,
        marginRight: "auto",
        marginLeft: "auto",
        top: 5        
    }
});

export default AuthAcceuil;