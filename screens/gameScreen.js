import {Alert, FlatList, StyleSheet, Text, View} from "react-native";
import Title from "../components/ui/title";
import {useEffect, useState} from "react";
import NumberContainer from "../components/game/numberContainer";
import PrimaryButton from "../components/ui/primaryButton";
import Card from "../components/ui/cards";
import InstructionText from "../components/ui/instructionText";
import {Ionicons} from '@expo/vector-icons';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max-min)) + min;
    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100

function GameScreen({userNumber, onGameOver}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if(currentGuess === userNumber){
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    function newGuessHandler(direction) {
        if(
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ){
            Alert.alert(
                'Dont lie!',
                'You know this is wrong...',
                {
                    text: 'sorry',
                    style: 'cancel'
                }
            );
            return;
        }

        if(direction === 'lower'){
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds => [newRndNumber,...prevGuessRounds])
    }

    return (
      <View style={styles.screen}>
          <Title>Opponent's Guess</Title>
          <NumberContainer>{currentGuess}</NumberContainer>
          <Card>
              <InstructionText>Higher or lower ?</InstructionText>
              <View style={styles.buttons}>
                  <View style={styles.buttonContent}>
                      <PrimaryButton onPress={newGuessHandler.bind(this, 'lower')}>
                          <Ionicons name="remove" size={24} color="white" />
                      </PrimaryButton>
                  </View>
                  <View style={styles.buttonContent}>
                      <PrimaryButton onPress={newGuessHandler.bind(this, 'greater')}>
                          <Ionicons name="add" size={24} color="white" />
                      </PrimaryButton>
                  </View>
              </View>
          </Card>
          <View style={styles.listContent}>
              <FlatList
                  automaticallyAdjustsScrollIndicatorInsets={false}
                  data={guessRounds}
                  renderItem={(itemData) => <Text style={styles.item}>{itemData.item}</Text>}
                  keyExtractor={(item) => item}
              />
          </View>
      </View>
    );
}
export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 15,
        gap: 30
    },
    buttons: {
        flexDirection: 'row',
        gap: 15
    },
    buttonContent: {
        flex: 1
    },
    listContent: {
        padding: 20,
        flex: 1
    },
    item: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10
    }
})
