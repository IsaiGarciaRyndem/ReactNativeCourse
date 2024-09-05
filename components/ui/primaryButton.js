import {Pressable, StyleSheet, Text, View} from "react-native";
import {Colors} from "../../constans/colors";

function PrimaryButton({children, onPress}) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({pressed}) =>
                pressed ?
                    [styles.buttonInnerContainer, styles.pressed]
                    : styles.buttonInnerContainer }
                onPress={onPress}
            >
                <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>
    );
}
export default  PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 5,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary300,
        padding: 10,
    },
    text: {
        textAlign: 'center',
        color: '#fafafa',
        fontSize: 16
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: Colors.primary400
    }
})
