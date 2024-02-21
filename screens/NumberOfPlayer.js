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
    const [highestScore, setHighestScore] = useState(0);
    const [scores, setScores] = useState([0]);
    const [playerWithHighestScore, setPlayerWithHighestScore] = useState([]);
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

    const getPlayerScore = (playerName) => {
        const playerIndex = parseInt(playerName.split(" ")[1]) - 1; // Obtient l'index du joueur à partir du nom
        return scores[playerIndex]; // Renvoie le score du joueur correspondant
    };
    const handleScoreChange = (score, playerName) => {
        const playerIndex = parseInt(playerName.split(" ")[1]) - 1; // Obtient l'index du joueur à partir du nom
        const currentScore = scores[playerIndex];

        if (score !== currentScore) {
            // Vérifie d'abord si le score a changé
            const newScores = [...scores];
            newScores[playerIndex] = score;
            setScores(newScores);

            if (score > highestScore) {
                setHighestScore(score);
                setPlayerWithHighestScore([playerName]);
            } else if (score < highestScore && playerName === playerWithHighestScore) {
                // Si le joueur perd le meilleur score, retirez-le de playerWithHighestScore
                setPlayerWithHighestScore(() => playerWithHighestScore.filter((player) => player !== playerName));

                // Recherchez le nouveau score le plus élevé parmi les joueurs restants
                let newHighestScore = 0;
                for (let i = 1; i <= number; i++) {
                    const playerScore = getPlayerScore(`Joueur ${i}`);
                    if (playerScore > newHighestScore) {
                        newHighestScore = playerScore;
                        setPlayerWithHighestScore(`Joueur ${i}`);
                    }
                }
                setHighestScore(newHighestScore);
            }
        }
    };



    return (
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
                        <Text style={styles.text}>{playerWithHighestScore} : {highestScore}</Text>

                        {Array.from({ length: number }, (_, index) => (
                            <PersonBlock
                                key={index}
                                initialIndex={index}
                                color={colors[index % colors.length]}
                                onScoreChange={handleScoreChange} />
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