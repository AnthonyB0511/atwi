import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal, Alert } from 'react-native';
import CustomButtonValidation from './CustomButtonValidation';


const PersonBlock = ({ index, color, onPlayerChange, onScoreChange, player, updatePlayerWithHighestScore, reset }) => {
    // const [name, setName] = useState(`Joueur ${index + 1}`); // State pour le nom du joueur
    // const [score, setScore] = useState(player.score);
    const { name, score } = player;
    const [operationValue, setOperationValue] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalInputValue, setModalInputValue] = useState('');
    const handleScoreChange = (value) => {
        // setScore(score + value);
        const updatedPlayer = { ...player, score: score + value };
        onPlayerChange(index, updatedPlayer);
    };

    const handleShortPress = (value) => {
        handleScoreChange(value);
    };


    const handleLongPress = (value) => {
        setOperationValue(value);
        setModalVisible(true);
    };


    const handleModalButtonPress = (value) => {
        handleScoreChange(value);
        setModalVisible(false);
    };
    useEffect(() => {
        if (!modalVisible) {
            setModalInputValue('');
        }
    }, [modalVisible]);

    useEffect(() => {
        onScoreChange(score, name);
    }, [score, name]);



    const handleNameChange = (newName) => {
        updatePlayerWithHighestScore(player.name, newName);
        onPlayerChange(index, { name: newName, score: player.score });
    };



    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 5, marginTop: 25, backgroundColor: color, borderRadius: 10 }}>
            <TextInput
                value={name}
                onChangeText={handleNameChange} // Met à jour le nom du joueur lors de la saisie
                placeholder="Nom du joueur"
                placeholderTextColor='#242F40'
                style={{ fontFamily: "ProtestRiot", borderWidth: 1, color: '#242F40', borderColor: '#242F40', borderRadius: 5, paddingHorizontal: 5, width: 220, textAlign: 'center', fontSize: 20 }}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => handleShortPress(-1)}
                    onLongPress={() => handleLongPress(-1)}
                    style={{ backgroundColor: color, padding: 10, borderRadius: 5, marginRight: 10, width: 40 }}>
                    <Text style={{ color: '#242F40', textAlign: 'center', fontFamily: "ProtestRiot", fontSize: 24 }}>-</Text>
                </TouchableOpacity>
                <Text style={{ color: '#242F40', fontFamily: "ProtestRiot", width: 50, textAlign: 'center', fontSize: 22, fontFamily: "ProtestRiot" }}>{score}</Text>
                <TouchableOpacity
                    onPress={() => handleShortPress(1)}
                    onLongPress={() => handleLongPress(1)}
                    style={{ backgroundColor: color, padding: 10, borderRadius: 5, marginLeft: 10, width: 40 }}>
                    <Text style={{ color: '#242F40', textAlign: 'center', fontFamily: "ProtestRiot", fontSize: 24 }}>+</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#242F40' }}>
                    <View style={{ backgroundColor: '#242F40', padding: 20, borderRadius: 10, width: 300, justifyContent: 'center', borderColor: '#FBAC23', border: 1 }}>
                        <CustomButtonValidation title={`${operationValue * 5}`} onPress={() => handleModalButtonPress(operationValue * 5)} />
                        <CustomButtonValidation title={`${operationValue * 10}`} onPress={() => handleModalButtonPress(operationValue * 10)} />
                        <CustomButtonValidation title={`${operationValue * 15}`} onPress={() => handleModalButtonPress(operationValue * 15)} />
                        <CustomButtonValidation title={`${operationValue * 20}`} onPress={() => handleModalButtonPress(operationValue * 20)} />
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}>
                            <TextInput
                                value={modalInputValue}
                                onChangeText={setModalInputValue}
                                keyboardType="numeric"
                                placeholder="Autre valeur"
                                placeholderTextColor='#FBAC23'
                                style={{ borderWidth: 1, color: '#FBAC23', borderColor: '#FBAC23', borderRadius: 5, paddingHorizontal: 5, marginTop: 10, width: 240, textAlign: 'center', fontSize: 20, fontFamily: "ProtestRiot" }}
                            />
                        </View>

                        <CustomButtonValidation title="Confirmer" onPress={() => {
                            if (modalInputValue === '') {
                                Alert.alert('Erreur', 'Veuillez saisir une valeur.');
                            } else {
                                handleModalButtonPress(operationValue * parseInt(modalInputValue));
                            }
                        }} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default PersonBlock;
