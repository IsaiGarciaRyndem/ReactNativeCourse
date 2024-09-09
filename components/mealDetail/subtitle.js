import {StyleSheet, Text, View} from "react-native";

function Subtitle({children}) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    );
}
export default Subtitle;
const styles = StyleSheet.create({
    subtitleContainer: {
        margin: 6,
        padding: 6,
        borderBottomColor: '#33241CC9',
        borderBottomWidth: 2,
        marginHorizontal: 24,
        marginVertical: 4
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#33241CC9'
    },
});
