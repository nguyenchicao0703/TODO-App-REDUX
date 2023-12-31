import { StyleSheet, Text, View, TextInput, TouchableHighlight, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { useDispatch, useSelector } from 'react-redux'
import uuid from 'react-native-uuid'
import { todosRemainingSelector } from '../../redux/selectors'
import Checkbox from '../Checkbox'
import { todosSlice } from './todosSlice'

const TodoList = () => {
    const [todoName, setTodoName] = useState('');
    const [selectedPriority, setSelectedPriority] = useState('Medium');

    const dispatch = useDispatch();
    const todoList = useSelector(todosRemainingSelector);

    const handleAddButtonClick = () => {
        dispatch(
            todosSlice.actions.addTodo({
                id: uuid.v4(),
                name: todoName,
                priority: selectedPriority,
                completed: false,
            }));
        setTodoName('');
        setSelectedPriority('Medium');
    }

    return (
        <>
            <ScrollView>
                {todoList.map(todo =>
                    <Checkbox key={todo.id} id={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed} />
                )}
            </ScrollView>
            <View style={styles.inputView}>
                <TextInput style={styles.input} value={todoName} onChangeText={(text) => setTodoName(text)} placeholder='Enter to-do' placeholderTextColor={'#AAAAAA'} />
                <Picker
                    style={styles.picker}
                    selectedValue={selectedPriority}
                    pickerStyleType={styles.picker}
                    onValueChange={(itemValue) =>
                        setSelectedPriority(itemValue)
                    }>
                    <Picker.Item label="High" value="High" />
                    <Picker.Item label="Medium" value="Medium" />
                    <Picker.Item label="Low" value="Low" />
                </Picker>
                <TouchableHighlight style={styles.button} onPress={handleAddButtonClick}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableHighlight>
            </View>
        </>
    )
}

export default TodoList

const styles = StyleSheet.create({
    inputView: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
    },
    input: {
        flex: 3,
        borderWidth: 1,
        borderColor: '#AAAAAA',
        paddingLeft: 20,
        fontSize: 16,
        color: 'black',
        backgroundColor: 'white'
    },
    picker: {
        flex: 2,
        backgroundColor: '#9E9E9E'
    },
    button: {
        flex: 1,
        backgroundColor: 'blue',
        borderWidth: 1,
        borderColor: 'blue',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 16
    }
})