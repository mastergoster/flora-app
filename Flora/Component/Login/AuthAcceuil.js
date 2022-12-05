import * as React from 'react';
import { 
    useState,
} from 'react';
import {
    Text,
    SafeAreaView, 
    TextInput, 
    TouchableOpacity, 
    View,
    StyleSheet,
} from "react-native";
import axios from "react-native-axios";
import Linking from "expo";
import { useNavigation } from '@react-navigation/native';

const AuthAcceuil = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [invalid, setInvalid] = useState("");

    const navigation = useNavigation();

    const MessageError = () => {
        if (email.length === 0) {
            setError(<Text style={styles.styleMessage}>Veuillez remplir le champ !</Text>);
        } else {
            checkInput();
        }
    }

    const checkInput = () => {
        const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        const regexPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (regexEmail.test(email) || regexPhone.test(email)) {
            console.log("email, phone valid");
            navigation.navigate("Login", {name : "Login" });
            // handleSubmit();
        } else {
            setError('');
            setError(<Text style={styles.styleMessage}>Numéro de téléphone, Email ou nom utilisateur invalid</Text>);
            if (error.length != 0) {
                setError('');
            }
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const response = axios.post("api", {
            email
        });
        if ("data" in response) {
            navigation.navigate("Login", {name : "Login" });
        } else {
            setInvalid(<Text>Identifiant ou mot de passe incorrect !</Text>);
        }
    }
    
    return (
        <SafeAreaView>
            <View style={styles.view}>
                <TextInput style={[styles.input, {borderColor: error ? "red" : "#CFD9DE"}]} placeholder='Phone, email où nom d utilisateur' value={email} onChangeText={(email) => setEmail(email)}/>
                        {/* input empty ! or phone or email is not valid */}
                    {error}
                        {/* email or phone do not exist*/}
                    {invalid}
                <TouchableOpacity onPress={MessageError} style={styles.buttonNext}>
                    <Text style={styles.styleNext}>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonPassword}>
                    <Text onPress={() => Linking.openURL("https://coworkinmoulins.fr/mdpoublie")} style={styles.stylePassword}>Forgot Password ?</Text>
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
        marginTop: 102,
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
        marginLeft: "auto",
        marginTop: 20
    },
    styleInvalid: {
        color: "red",
        marginRight: "auto",
        marginLeft: "auto",
    },
    styleInputInvalid: {
        marginLeft: "auto",
        marginRight: "auto",
        borderWidth: 1,
        borderColor: "#CFD9DE",
        height: 58,
        width: 300,
        borderRadius: 4,
        marginTop: 102,   
    }
});

export default AuthAcceuil;