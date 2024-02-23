import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import CustomButton from '../components/CustomButton';
import PersonBlock from '../components/PersonBlock';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButtonValidation from '../components/CustomButtonValidation';
import { useNavigation } from '@react-navigation/native';



export default function NumberOfPlayers() {
    const [loading, setLoading] = useState(true);
    const [players, setPlayers] = useState([{ name: 'Joueur 1', score: 0 }]);
    const [playerWithHighestScore, setPlayerWithHighestScore] = useState(players);
    const colors = ['#F4FA58', '#81DAF5', '#81F781', '#F79F81', '#E6E6E6', '#81F7BE', '#8181F7'];
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const addPlayer = () => {
        const newPlayer = { name: `Joueur ${players.length + 1}`, score: 0 };
        setPlayers([...players, newPlayer]);
    };

    const delPlayer = () => {
        if (players.length > 1) {
            const updatedPlayers = players.slice(0, -1);
            setPlayers(updatedPlayers);
            const highestScore = Math.max(...updatedPlayers.map(player => player.score));
            const playersWithHighestScore = updatedPlayers.filter(player => player.score === highestScore);
            setPlayerWithHighestScore(playersWithHighestScore);;
        }
    };

    const handlePlayerChange = (index, updatedPlayer) => {
        const updatedPlayers = [...players];
        updatedPlayers[index] = updatedPlayer;
        setPlayers(updatedPlayers);
    };

    const handleScoreChange = (score, playerName) => {
        // Trouver le joueur dans le tableau players
        const updatedPlayers = players.map(player => {
            if (player.name === playerName) {
                // Mettre à jour le score du joueur
                return { ...player, score };
            }
            return player;
        });
        const highestScore = Math.max(...updatedPlayers.map(player => player.score));
        const playersWithHighestScore = updatedPlayers.filter(player => player.score === highestScore);
        setPlayerWithHighestScore(playersWithHighestScore);
    };



    const updatePlayerWithHighestScore = (oldName, newName) => {
        // Vérifier si le tableau des meilleurs joueurs est vide ou non
        if (playerWithHighestScore.length > 0) {
            const playerWithHighestScoreIndex = playerWithHighestScore.indexOf(oldName);
            if (playerWithHighestScoreIndex !== -1) {
                const newPlayerWithHighestScore = [...playerWithHighestScore];
                newPlayerWithHighestScore[playerWithHighestScoreIndex] = newName;
                setPlayerWithHighestScore(newPlayerWithHighestScore);
            }
        }
    };

    const reset = () => {
        const resetPlayer = players.map((player) => ({
            ...player,
            score: 0
        }));
        setPlayers(resetPlayer);
    };

    const endGame = () => {
        navigation.navigate('AndTheWinnerIs', { topPlayers: playerWithHighestScore });
    };


    return (
        <View style={styles.container}>
            {loading ? (
                <LoadingScreen />
            ) : (
                <>
                    <ScrollView contentContainerStyle={styles.scrollViewContent}>
                        <View style={styles.winner}>
                            <View style={styles.icon}>
                                <Icon name="trophy" size={20} color='#242F40' />
                            </View>
                            <Text style={styles.textWinner}>
                                {playerWithHighestScore.length > 1 ? (`${playerWithHighestScore.length} joueurs ex aequo`) : (`${playerWithHighestScore[0].name} : ${playerWithHighestScore[0].score} pts`)}
                            </Text>
                        </View>
                        <View style={styles.container}>
                            <View style={styles.button}>
                                <CustomButton title="+" onPress={addPlayer} />
                                {players.length > 1 && <CustomButton title="-" onPress={delPlayer} />}

                            </View>

                            {players.map((player, index) => (
                                <PersonBlock
                                    key={index}
                                    index={index}
                                    color={colors[index % colors.length]}
                                    player={player}
                                    onPlayerChange={handlePlayerChange}
                                    onScoreChange={handleScoreChange}
                                    updatePlayerWithHighestScore={updatePlayerWithHighestScore}
                                />
                            ))}


                            <View style={{ marginTop: 20 }}>
                                <CustomButtonValidation title="Fin de partie" onPress={endGame} />
                            </View>

                        </View>
                    </ScrollView>
                    <SafeAreaView style={styles.safeArea}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                            <TouchableOpacity
                                onPress={reset}
                                style={{ flexDirection: 'row', alignItems: 'center' }} >
                                <Icon name="backward" size={20} color='#F7B72F' />
                                <Text style={styles.nav}>Réinitialiser</Text></TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('About')}
                                style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="question" size={20} color='#F7B72F' />
                                <Text style={styles.nav}>A propos</Text></TouchableOpacity>
                        </View>


                    </SafeAreaView>
                </>
            )}

            <StatusBar style="auto" />
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
    winner: {
        marginTop: 50,
        flexDirection: 'row',
        backgroundColor: '#F7B72F',
        padding: 5,
        borderRadius: 10,
        width: 200,
        textAlign: 'center',
        justifyContent: 'center',
    },
    icon: {
        marginRight: 5
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
        marginLeft: 10
    }


});