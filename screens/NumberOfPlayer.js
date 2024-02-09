import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';


export default function NumberOfPlayers() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <View style={styles.container}>
            {loading ? (
                <LoadingScreen />
            ) : (
                <View>
                    <Text style={styles.text}>Nombre de joueurs</Text>
                </View>
            )}
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242F40',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#F7B72F',
        fontWeight: '800',
        fontSize: 24,
    }
});