import { 
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
    Text
} from "react-native";

const Header = () => {
    return (
        <View>
            <Image style={style.Logo} source={require("../../asset/LogoWhite.png")}/>
            <View style={style.ContainerTitle}>
                <Text style={style.Choix}>Choix forfait</Text>
                <Text style={style.Adherent}>Adhérent</Text>
            </View>
            <View>
                <View style={style.Container}>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.Text}>1 heures</Text>
                        <Text style={style.Text}>2.5 €</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.Text}>1/2 Jour</Text>
                        <Text style={style.Text}>6 €</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.Text}>1 Jour</Text>
                        <Text style={style.Text}>10 €</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.Container}>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.Text}>25 Heures</Text>
                        <Text style={style.Text}>25 €</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.Text}>55 Heures</Text>
                        <Text style={style.Text}>50 €</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.Text}>125 Heures</Text>
                        <Text style={style.Text}>100 €</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.Container}>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.TextPerso}>Mois</Text>
                        <Text style={style.TextPerso}>Illimités</Text>
                        <Text style={style.TextPerso}>100 €</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Mois}>
                        <Text style={style.Text}>Domiciliation entreprise</Text>
                        <Text style={style.Text}>+ Mois illimités 120 €</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Header;

const style = StyleSheet.create({
    Logo: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 65
    },
    button: {
        backgroundColor: "#FFFFFF",
        borderRadius: 9999,
        width: 110,
        height: 110
    },
    Container: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 30
    },
    Text: {
        textAlign: "center",
        fontSize: 18,
        top: 35
    },
    Mois: {
        backgroundColor: "#FFFFFF",
        borderRadius: 9999,
        width: 231,
        height: 110
    },
    ContainerTitle: {
        marginTop: 30
    },
    Choix: {
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: 36,
        color: "#FFFFFF"
    },
    Adherent: {
        marginLeft: "auto",
        marginRight: "auto",
        color: "#008F39",
        fontSize: 24,
        marginTop: 10
    },
    TextPerso: {
        textAlign: "center",
        fontSize: 18,
        top: 20
    }
});