import { 
    StyleSheet,
    View 
} from "react-native";
import Header from "../Component/Component-Forfait/Header";
import Footer from "../Component/Base/Footer";

const Forfait = () => {
    return (
        <View style={style.Forfait}>
            <Header/>
            <Footer/>
        </View>
    );
}

export default Forfait;

const style = StyleSheet.create({
    Forfait: {
        backgroundColor: "#000000",
        width: 393,
        height: 825
    }
});