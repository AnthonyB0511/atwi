import { TouchableOpacity, Text, StyleSheet } from "react-native";



const CustomButtonValidation = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
);
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#F7B72F',
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        margin: 10,
    },
    buttonText: {
        color: '#242F40',
        fontSize: 18,
        fontFamily: "ProtestRiot"
    },
});

export default CustomButtonValidation;