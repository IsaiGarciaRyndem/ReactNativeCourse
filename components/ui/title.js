import {StyleSheet, Text} from "react-native";
import {Colors} from "../../constans/colors";

function title({children}){
    return (
        <Text style={styles.title}>{children}</Text>
    );
}
export default title;
const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.primary400,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.primary300,
        padding: 10
    }
})
