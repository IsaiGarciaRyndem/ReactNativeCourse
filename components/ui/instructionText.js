import {StyleSheet, Text} from "react-native";

function InstructionText({children}) {
    return (
        <Text style={styles.instructionText}>Enter a number</Text>

    );
}
export default InstructionText;
const styles = StyleSheet.create({
    instructionText: {
        fontSize: 24,
        color: 'white'
    },
})
