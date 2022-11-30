import * as React from 'react';
import { 
    useState
} from 'react';
import {
    Text,
    SafeAreaView, 
    TextInput, 
    TouchableOpacity, 
    View,
    StyleSheet,
} from "react-native";

const AuthAcceuil = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const MessageError = () => {
        if (email.length === 0) {
            setError("Entrer un numéro, addresse email ou nom d'utilisateur Valid !");
        } else {
            checkInput();
        }
    }

    console.log(email);

    const checkInput = () => {
        const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        const regexPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (regexEmail.test(email)) {
            console.log("email valid");
        } else {
            if (regexPhone.test(email)) {
                console.log("phone number valid");
            }
        }
    }
    
    return (
        <SafeAreaView>
            <View style={styles.view}>
                <TextInput style={styles.input} placeholder='Phone, email où nom d utilisateur' value={email} onChangeText={(email) => setEmail(email)}/>
                    <Text style={styles.styleMessage}>{error}</Text>
                <TouchableOpacity onPress={MessageError} style={styles.buttonNext}>
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
        borderRadius: 4,
        marginTop: 102
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
    },
    styleMessage: {
        color: "red"
    }
});

export default AuthAcceuil;