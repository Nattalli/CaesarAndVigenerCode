 import React, {useState} from "react";
 import RadioGroup from 'react-native-radio-buttons-group';
 import {Image, Pressable, StyleSheet, Text, View} from 'react-native';


 const radioButtonsData = [{
     id: '1',
     label: 'Завантажити з файлу',
     value: 'option1',
     borderColor: '#333333',
     color: '#8F5CFF',
     size: 20,
     selected: 'yes',
     labelStyle: {fontSize: 20},
 }, {
     id: '2',
     label: 'Ввести текст з клавіатури',
     value: 'option2',
     borderColor: '#333333',
     color: '#8F5CFF',
     size: 20,
     labelStyle: {fontSize: 20},
 }]

 const Code = ({navigation}) => {

     const [radioButtons, setRadioButtons] = useState(radioButtonsData)

     function onPressRadioButton(radioButtonsArray) {
         setRadioButtons(radioButtonsArray);
         getButtonValue();
     }

     function getButtonValue() {
        for (let button of radioButtons){
            if (button.selected === true){
                return button.value
            }
        }
     }

     function getNextPageNameCaesar() {
         let buttonValue = getButtonValue()
         console.log(buttonValue)
         if (buttonValue === "option1") {
             return "InputFile";
         }
         else {
             return "CodeCaesar";
         }
     }

     function getNextPageNameVigener() {
         let buttonValue = getButtonValue()
         if (buttonValue === "option1") {
             return "InputFile";
         }
         else {
             return "CodeVigener";
         }
     }

      return (
          <View style={styles.container}>
              <View style={styles.tasksWrapper}>
                  <Text style={styles.sectionTitle}>Зашифрувати текст</Text>
                  <Text style={styles.description}>методами Цезаря та Віженера</Text>
                  <Image source={require('../main_image.png')} />
                  <View style={styles.radioButton}>
                      <RadioGroup
                          radioButtons={radioButtons}
                          onPress={onPressRadioButton}
                      />
                  </View>
                  <Pressable
                      style={styles.buttonStyle}
                      onPress={() => navigation.navigate(String(getNextPageNameCaesar()))}>
                      <Text style={styles.buttonText}>
                          Шифр Цезаря
                      </Text>
                  </Pressable>
                  <Pressable
                      style={styles.buttonStyle}
                      onPress={() => navigation.navigate(String(getNextPageNameVigener()))}>
                      <Text style={styles.buttonText}>
                          Шифр Віженера
                      </Text>
                  </Pressable>
              </View>
          </View>
      )
 }


 const styles = StyleSheet.create({
     container: {
         flex: 1,
         backgroundColor: '#FFFFFF',
     },
     tasksWrapper: {
         paddingTop: 85,
         marginLeft: 50
     },
     sectionTitle: {
         color: '##222222',
         width: 327,
         height: 98,
         fontSize: 40,
         lineHeight: 49,
         textAlign: 'center'
     },
     description: {
         marginTop: 8,
         width: 327,
         height: 44,
         fontSize: 18,
         lineHeight: 22,
         textAlign: 'center',
         color: '#646464'
     },
     buttonStyle: {
         backgroundColor: '#8F5CFF',
         borderRadius: 30,
         width: 327,
         height: 50,
         paddingTop: 14,
         paddingHorizontal: 38,
         marginTop: 12
     },
     buttonText: {
         color: '#FFFFFF',
         fontSize: 20,
         lineHeight: 22,
         textAlign: 'center',
         height: 22,
     },
     radioButton: {
         flexDirection: 'row',
         justifyContent: 'space-between',
     }
 });

 export default Code;
