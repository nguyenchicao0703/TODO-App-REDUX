import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native'
import React, { useState, useMemo } from 'react'
import { Checkbox, Filters } from './src/component'
import RadioGroup from 'react-native-radio-buttons-group'
import { Picker } from '@react-native-picker/picker'

const App = () => {
  const [selectedId, setSelectedId] = useState();
  const [selectedLanguage, setSelectedLanguage] = useState();

  const radioButtons = useMemo(() => ([
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Hight',
      value: 'hight'
    },
    {
      id: '2',
      label: 'Medium',
      value: 'medium'
    },
    {
      id: '3',
      label: 'Low',
      value: 'low'
    }
  ]), []);

  return (
    <View style={styles.container}>
      <Text style={styles.name_app}>TODO APP with REDUX</Text>
      <Text style={styles.title}>Search</Text>
      <Filters placeholder={'Input search text'} />
      <Text style={styles.title}>Filter By Status</Text>
      <RadioGroup
        containerStyle={styles.radio_button}
        radioButtons={radioButtons}
        onPress={setSelectedId}
        selectedId={selectedId}
        layout='row'
      />
      <Text style={styles.title}>Filter By Priority</Text>
      <Filters placeholder={'Please select'} />
      <View style={styles.line}></View>
      <Checkbox text={'Learn React'} priority={'High'} />
      <Checkbox text={'Learn Redux'} priority={'Medium'} />
      <Checkbox text={'Learn Javascript'} priority={'Low'} />
      <View style={styles.view_input}>
        <TextInput style={styles.input} />
        <Picker
          style={styles.picker}
          selectedValue={selectedLanguage}
          pickerStyleType={styles.picker}
          onValueChange={(itemValue) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="High" value="high" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="Low" value="low" />
        </Picker>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.button_text}>Add</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  name_app: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '600',
  },
  title: {
    color: 'black',
    fontSize: 18,
    marginTop: 20,
    fontWeight: '500',
    marginLeft: 20
  },
  radio_button: {
    marginHorizontal: 10,
    marginTop: 5
  },
  line: {
    width: '100%',
    height: 0.1,
    backgroundColor: '#AAAAAA',
    marginTop: 20
  },
  view_input: {
    marginHorizontal: 20,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    marginBottom: 20
  },
  input: {
    flex: 3,
    borderWidth: 1,
    borderColor: '#AAAAAA',
    paddingLeft: 20,
    fontSize: 16,
    color: 'black'
  },
  picker: {
    flex: 2,
    backgroundColor: 'lightgray'
  },
  button: {
    flex: 1,
    backgroundColor: 'blue',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'blue',
    justifyContent: 'center'
  },
  button_text: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 16
  }
})