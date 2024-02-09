import { StyleSheet, Image, View } from 'react-native';
import DotAnimation from '../components/DotAnimation';
export default function LoadingScreen() {
    return (
        <View style={styles.container} >
            <Image source={require('../assets/img/atwiLogoCards.png')} />
            <DotAnimation />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#242F40',
    },
});