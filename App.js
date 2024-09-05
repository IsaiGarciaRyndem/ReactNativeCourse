import {ImageBackground, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import StartGameScreen from "./screens/startGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import GameScreen from "./screens/gameScreen";
import {Colors} from "./constans/colors";
import GameOverScreen from "./screens/gameOverScreen";

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guestRounds, setGuestRounds] = useState(0);

   function pickedNumberHandler(pickedNumber) {
       setUserNumber(pickedNumber);
       setGameIsOver(false);
   }

    function gameOverHandler(){
        setGameIsOver(true)
    }

    function starNewGameHandler(){
       setUserNumber(null);
       setGuestRounds(0);
    }

   let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />
    if(userNumber){
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    }
    if(gameIsOver && userNumber){
        screen = <GameOverScreen userNumber={userNumber} roundsNumber={guestRounds} onStartNewGame={starNewGameHandler} />
    }

  return (
      <>
        <StatusBar barStyle={'light-content'}/>
        <LinearGradient colors={[Colors.secondary500, Colors.primary500]}  style={styles.root}>
            <ImageBackground
                source={require('./assets/img/background.jpg')}
                resizeMode={'cover'}
                style={styles.root}
                imageStyle={styles.backgroundImage}
            >
                <SafeAreaView style={styles.safeArea}>
                    {screen}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
      </>

);
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    safeArea: {
      flex: 1
    },
    backgroundImage: {
      opacity: 0.5,
    }
});
