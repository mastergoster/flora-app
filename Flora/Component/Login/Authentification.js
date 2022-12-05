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

const Authentification = () => {
    const [password, setPassword] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        const response = axios.post("/api", {

        });
    }

    return (
        <SafeAreaView>
            <View style={styles.view}>
                <Text style={styles.username}>Username</Text>
                <TextInput value={password} onChangeText={(password) => setPassword(password)} style={styles.input} placeholder='Password'/>
                <TouchableOpacity style={styles.buttonNext}>
                    <Text style={styles.styleNext}>Next</Text>
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
        marginTop: 14
    },
    username: {
        marginLeft: "auto",
        marginRight: "auto",
        height: 58,
        width: 300,
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
});

export default Authentification;