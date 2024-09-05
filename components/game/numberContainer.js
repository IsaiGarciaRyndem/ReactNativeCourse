import {StyleSheet, Text, View} from "react-native";
import {Colors} from "../../constans/colors";

function NumberContainer({children}) {
    return (
      <View style={styles.container}>
          <Text style={styles.numberText}>{children}</Text>
      </View>
    );
}
export default NumberContainer;
const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.primary300,
        padding: 24,
        margin: 24,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.primary300,
        fontSize: 36,
        fontWeight: 'bold'
    }
})
