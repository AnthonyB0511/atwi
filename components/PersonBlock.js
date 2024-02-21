import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal, Alert } from 'react-native';
import CustomButtonValidation from './CustomButtonValidation';

const PersonBlock = ({ initialName, color }) => {
    const [name, setName] = useState(initialName); // State pour le nom du joueur
    const [score, setScore] = useState(0);
    const [operationValue, setOperationValue] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalInputValue, setModalInputValue] = useState('');

    const handleShortPress = (value) => {
        setScore(score + value);
    };

    const handleLongPress = (value) => {
        setOperationValue(value);
        setModalVisible(true);
    };
    useEffect(() => {
        if (!modalVisible) {
            setModalInputValue('');
        }
    }, [modalVisible]);

    const handleModalButtonPress = (value) => {
        setScore(score + value);
        setModalVisible(false);
    };

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 5, marginTop: 25, backgroundColor: color, borderRadius: 10 }}>
            <TextInput
                value={name}
                onChangeText={setName} // Met à jour le nom du joueur lors de la saisie
                placeholder="Nom du joueur"
                placeholderTextColor='#242F40'
                style={{ borderWidth: 1, color: '#242F40', borderColor: '#242F40', borderRadius: 5, paddingHorizontal: 5, marginTop: 10, width: 220, textAlign: 'center', fontSize: 20 }}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => handleShortPress(-1)}
                    onLongPress={() => handleLongPress(-1)}
                    style={{ backgroundColor: color, padding: 10, borderRadius: 5, marginRight: 10, width: 40 }}>
                    <Text style={{ color: '#242F40', textAlign: 'center', fontWeight: 900, fontSize: 24 }}>-</Text>
                </TouchableOpacity>
                <Text style={{ color: '#242F40', fontWeight: 900, width: 50, textAlign: 'center', fontSize: 22 }}>{score}</Text>
                <TouchableOpacity
                    onPress={() => handleShortPress(1)}
                    onLongPress={() => handleLongPress(1)}
                    style={{ backgroundColor: color, padding: 10, borderRadius: 5, marginLeft: 10, width: 40 }}>
                    <Text style={{ color: '#242F40', textAlign: 'center', fontWeight: 900, fontSize: 24 }}>+</Text>
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
                                style={{ borderWidth: 1, color: '#FBAC23', borderColor: '#FBAC23', borderRadius: 5, paddingHorizontal: 5, marginTop: 10, width: 240, textAlign: 'center', fontSize: 20 }}
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
