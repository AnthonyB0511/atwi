import { View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButtonValidation";

const AboutScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Je suis Anthony et je suis passionné de jeux de société et de code.
            </Text>
            <Text style={styles.text}>
                Pour moi, le développement doit être une occasion d'utiliser la tech pour résoudre un problème du quotidien.
                Cela ne vous est jamais arrivé de jouer à un jeu (de société ou autre) et ne pas avoir de quoi noter vos scores !
            </Text>
            <Text style={styles.text}>
                Moi oui, du coup arrive And The Winner Is ... petite application pour noter ses scores au fur et à mesure.
            </Text>
            <Text style={styles.text}>
                En espérant que cette application dans cette V1 vous plaira. Et surtout bon jeu !
            </Text>
            <CustomButton title="Retour" onPress={() => navigation.goBack()} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242F40',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
    },
    text: {
        color: '#F7B72F',
        fontWeight: '800',
        fontSize: 20
    },

});
export default AboutScreen;