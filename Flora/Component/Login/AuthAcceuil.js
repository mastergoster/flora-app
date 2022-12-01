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
    NativeModule,
    DevSettings
} from "react-native";

const AuthAcceuil = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [valid, setValid] = useState("");

    const MessageError = () => {
        // Refresh();
        if (email.length === 0) {
            setError(<Text style={styles.styleMessage}>Veuillez remplir le champ !</Text>);
        } else {
            checkInput();
        }
    }

    // const Refresh = () => {
    //     if (setError.length != 0) {
    //         console.log("test refresh");
    //         setTimeout(() => {
    //             DevSettings.reload();
    //         }, 20000);
    //         // DevSettings.reload();
    //     }
    // }

    const checkInput = () => {
        const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        const regexPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (regexEmail.test(email)) {
            console.log("email valid");
            // handleSubmit();
        } else {
            if (regexPhone.test(email)) {
                console.log("phone number valid");
                // handleSubmit();
            } else {
                setValid(<Text>Numéro de téléphone, Email ou nom utilisateur invalid</Text>);
            }
        }
    }

    const handleSubmit = () => {

    }
    
    return (
        <SafeAreaView>
            <View style={styles.view}>
                <TextInput style={styles.input} placeholder='Phone, email où nom d utilisateur' value={email} onChangeText={(email) => setEmail(email)}/>
                    {error}
                    {valid}
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
        color: "red",
        marginRight: "auto",
        marginLeft: "auto"
    }
});

export default AuthAcceuil;