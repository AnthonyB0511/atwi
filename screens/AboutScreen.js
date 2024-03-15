import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';


const AboutScreen = () => {
    const navigation = useNavigation();
    const linkedinProfile = () => {
        Linking.openURL('https://www.linkedin.com/in/abecque/');
    };
    return (
        <View style={styles.container}>
            <Image source={require('../assets/img/atwi_complete.png')} style={{ width: 250, height: 250 }} />
            <View style={styles.content}>
                <Text style={styles.text}>
                    En tant que passionné de jeux de société et de code, l'idée de réaliser And The Winner Is était évidente !
                </Text>
                <Text style={styles.text}>
                    Pour moi, le développement doit être une occasion d'utiliser la tech pour résoudre un problème du quotidien.

                </Text>
                <Text style={styles.text}>
                    Cela ne vous est jamais arrivé de jouer à un jeu (de société ou autre) et ne pas avoir de quoi noter vos scores ?
                </Text>
                <Text style={styles.text}>
                    Moi oui, du coup arrive And The Winner Is ... petite application pour noter ses scores au fur et à mesure.
                </Text>
                <Text style={styles.text}>
                    En espérant que cette application dans cette V1 vous plaira. Et surtout bon jeu !
                </Text>

            </View>
            <SafeAreaView style={styles.safeArea}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="backward" size={20} color='#F7B72F' />
                        <Text style={styles.nav}>Retour</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={linkedinProfile} style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="linkedin" size={25} color='#F7B72F' />
                        <Text style={styles.nav}>Me contacter</Text>
                    </TouchableOpacity>
                </View>


            </SafeAreaView >
        </View >
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242F40',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
    content: {
        width: 320
    },
    text: {
        color: '#F7B72F',
        fontFamily: "ProtestRiot",
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'justify',
    },
    safeArea: {
        flexDirection: 'row',
        borderTopColor: '#F7B72F',
        borderTopWidth: 2,
        borderStyle: 'solid',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#242F40',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    nav: {
        color: '#F7B72F',
        fontSize: 20,
        marginLeft: 10,
        fontFamily: "ProtestRiot"
    }

});
export default AboutScreen;