import {Image, StyleSheet, Text, View} from "react-native";
import Title from "../components/ui/title";
import {Colors} from "../constans/colors";
import PrimaryButton from "../components/ui/primaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    return (
        <View style={styles.gameOverScreen}>
            <Title>GAME OVER!</Title>
            <View style={styles.body}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../assets/img/success.png')} />
                </View>
                <Text style={styles.summaryText}>Your phone need <Text style={styles.highLight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highLight}>{userNumber}</Text>.</Text>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </View>
    );
}
export default GameOverScreen;
const styles =  StyleSheet.create({
    gameOverScreen: {
        paddingTop: 20,
        gap: 30,
        flex: 1,
        paddingHorizontal: 30
    },
    body: {
      flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 400,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: Colors.primary300
    },
    image: {
        height: '100%',
        width: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#312a2a',
    },
    highLight: {
        fontFamily: 'open-sans-bold',
        color: 'yellow'
    }
})
