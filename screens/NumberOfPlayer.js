import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import CustomButton from '../components/CustomButton';
import CustomButtonValidation from '../components/CustomButtonValidation';
import PersonBlock from '../components/PersonBlock';


export default function NumberOfPlayers() {
    const [loading, setLoading] = useState(true);
    const [number, setNumber] = useState(1);
    const [error, setError] = useState("");
    const colors = ['#F4FA58', '#81DAF5', '#81F781', '#F79F81', '#E6E6E6', '#81F7BE', '#8181F7'];

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    const addPlayer = () => {
        setNumber(number + 1);
    };
    const delPlayer = () => {
        if (number > 1) {
            setNumber(number - 1);
        }

    };
    return (
        // <View style={styles.container}>
        //     {loading ? (
        //         <LoadingScreen />
        //     ) : (
        //         <View>
        //             <Text style={styles.text}>Nombre de joueurs</Text>
        //             <View style={styles.content}>
        //                 {number > 0 && <CustomButton title="-" onPress={delPlayer} />}

        //                 <Text style={styles.text}>{number}</Text>
        //                 <CustomButton title="+" onPress={addPlayer} />
        //             </View>
        //             <Text>{error}</Text>
        //             <CustomButtonValidation title="Valider" />
        //         </View>
        //     )}
        //     <StatusBar style="auto" />
        // </View>
        <View style={styles.container}>
            {loading ? (
                <LoadingScreen />
            ) : (
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <View style={styles.container}>
                        <View style={styles.button}>
                            <CustomButton title="+" onPress={addPlayer} />
                            {number > 1 && <CustomButton title="-" onPress={delPlayer} />}

                        </View>

                        {Array.from({ length: number }, (_, index) => (
                            <PersonBlock key={index} name={`Joueur ${index + 1}`} color={colors[index % colors.length]} />
                        ))}
                        <View style={{ marginTop: 20 }}>
                            <CustomButton title="Valider" />
                        </View>

                    </View>
                </ScrollView>
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
        paddingTop: 20
    },
    text: {
        color: '#F7B72F',
        fontWeight: '800',
        fontSize: 24,
    },
    content: {
        marginVertical: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        flexDirection: 'row'
    },
    scrollViewContent: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },


});