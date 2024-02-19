import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

const PersonBlock = ({ name, color }) => {
    const [score, setScore] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [showInput, setShowInput] = useState(false);
    const [operationValue, setOperationValue] = useState(0);

    const inputRef = useRef(null);

    const handleLongPress = (value) => {
        setOperationValue(value);
        setInputValue('');
        setShowInput(true);
        inputRef.current.focus(); // Focusing the input when long pressed
    };

    const handleInputConfirm = () => {
        const newValue = parseInt(inputValue);
        if (!isNaN(newValue)) {
            setScore(score + (operationValue * newValue));
        }
        setInputValue('');
        setShowInput(false);
    };

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 5, marginTop: 25, backgroundColor: color, borderRadius: 10 }}>
            <Text style={{ color: '#242F40', fontWeight: 900, marginRight: 15, fontSize: 24 }}>{name}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => setScore(score - 1)}
                    onLongPress={() => handleLongPress(-1)}
                    style={{ backgroundColor: color, padding: 10, borderRadius: 5, marginRight: 10, width: 40 }}>
                    <Text style={{ color: '#242F40', textAlign: 'center', fontWeight: 900, fontSize: 24 }}>-</Text>
                </TouchableOpacity>
                {showInput ? (
                    <TextInput
                        ref={inputRef}
                        value={inputValue}
                        onChangeText={setInputValue}
                        onBlur={handleInputConfirm}
                        onSubmitEditing={handleInputConfirm}
                        keyboardType="numeric"
                        style={{ borderWidth: 1, borderColor: '#242F40', borderRadius: 5, paddingHorizontal: 5, width: 50, textAlign: 'center' }}
                    />
                ) : (
                    <Text style={{ color: '#242F40', fontWeight: 900, width: 50, textAlign: 'center', fontSize: 22 }}>{score}</Text>
                )}
                <TouchableOpacity
                    onPress={() => setScore(score + 1)}
                    onLongPress={() => handleLongPress(1)}
                    style={{ backgroundColor: color, padding: 10, borderRadius: 5, marginLeft: 10, width: 40 }}>
                    <Text style={{ color: '#242F40', textAlign: 'center', fontWeight: 900, fontSize: 24 }}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PersonBlock;
