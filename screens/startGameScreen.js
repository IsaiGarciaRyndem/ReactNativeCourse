import {Alert, StyleSheet, TextInput, View} from "react-native";
import PrimaryButton from "../components/ui/primaryButton";
import {useState} from "react";
import Title from "../components/ui/title";
import Card from "../components/ui/cards";
import InstructionText from "../components/ui/instructionText";

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function inputHandler(text){
        setEnteredNumber(text)
    }
    function resetInputHandler(){
        setEnteredNumber('');
    }
    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            // Show alert
           Alert.alert(
                'Invalid number',
                'Number has to be a number between 1 and 99',
                [{text: 'I got it', style: 'destructive', onPress: resetInputHandler}]);
        }

        onPickNumber(chosenNumber);
    }

    return (
      <View>
          <View style={styles.title}>
              <Title>Guess My Number</Title>
          </View>
          <Card>
              <View style={styles.inputContent}>
                  <InstructionText>Enter a number</InstructionText>
                  <TextInput
                      style={styles.inputText}
                      keyboardType={'number-pad'}
                      maxLength={2} autoCapitalize={'none'}
                      autoCorrect={false}
                      keyboardAppearance={'dark'}
                      value={enteredNumber}
                      onChangeText={inputHandler}
                  />
              </View>
              <View style={styles.buttons}>
                  <View style={styles.buttonContainer}>
                      <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                  </View>
                  <View style={styles.buttonContainer}>
                      <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                  </View>
              </View>
          </Card>
      </View>
    );
}
export default StartGameScreen;

const styles = StyleSheet.create({
    inputText: {
        borderRadius: 5,
        padding: 5,
        height: 50,
        fontSize: 32,
        borderBottomColor: 'yellow',
        borderBottomWidth: 1,
        color: 'yellow',
        textAlign: 'center',
        width: 60
    },
    buttons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10
    },
    buttonContainer: {
      flex: 1
    },
    title: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:40
    },
    inputContent: {
        alignItems: 'center'
    }
})
