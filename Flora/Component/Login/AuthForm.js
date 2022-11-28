import * as React from 'react';
import {
    Text,
    SafeAreaView, 
    TextInput, 
    TouchableOpacity, 
    View
} from "react-native";

const AuthForm = () => {
    return (
        <SafeAreaView>
            <View>
                <TextInput placeholder='Phone, email or username'/>
                <TouchableOpacity>
                    <Text>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Forgot Password ?</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default AuthForm;