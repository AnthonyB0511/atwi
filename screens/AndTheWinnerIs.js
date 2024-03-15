import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import LottieView from 'lottie-react-native';


const AndTheWinnerIs = ({ route }) => { // Assurez-vous de recevoir `route` en tant que paramètre
    const { topPlayers } = route.params;
    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <Image source={require('../assets/img/#242F40.png')} style={{ width: 320 }} />
            <LottieView
                source={require('../assets/Animation.json')}
                autoPlay
                loop={true}
                style={{ flexGrow: 0.5, width: 300 }}
            />

            {topPlayers.length === 1 ? (
                <Text style={styles.winner}>{topPlayers[0].name}</Text>
            ) : (
                <>
                    <Text style={styles.winner}>{topPlayers.map((player, index) => (
                        index === topPlayers.length - 1 ? player.name : `${player.name} || `
                    ))}</Text>
                    <Text style={styles.winner}>Il va falloir rejouer pour vous départager !</Text>
                </>


            )

            }
            <SafeAreaView style={styles.safeArea}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="backward" size={20} color='#F7B72F' />
                    <Text style={styles.nav} onPress={() => navigation.goBack()} >Retour</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('About')} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="question" size={20} color='#F7B72F' />
                    <Text style={styles.nav}>A propos</Text>
                </TouchableOpacity>


            </SafeAreaView>
        </View >

    );
};
export default AndTheWinnerIs;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242F40',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
    },
    winner: {
        fontSize: 25,
        color: '#F7B72F',
        textAlign: 'center',
        marginBottom: 50,
        fontFamily: "ProtestRiot"
    },
    moreWinner: {
        flexDirection: 'row'
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
