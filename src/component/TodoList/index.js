import { StyleSheet, Text, View, TextInput, TouchableHighlight, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../redux/actions'
import uuid from 'react-native-uuid'
import { todosRemainingSelector } from '../../redux/selectors'
import Checkbox from '../Checkbox'

const TodoList = () => {
    const [todoName, setTodoName] = useState('');
    const [selectedPriority, setSelectedPriority] = useState('Medium');

    const dispatch = useDispatch();
    const todoList = useSelector(todosRemainingSelector);
    
    const handleAddButtonClick = () => {
        dispatch(addTodo({
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
            {todoList.map(todo =>
                <Checkbox key={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed} />
            )}
            <KeyboardAvoidingView style={styles.container} behavior='padding'>
                <View style={styles.inputView}>
                    <TextInput style={styles.input} value={todoName} onChangeText={(text) => setTodoName(text)} />
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
            </KeyboardAvoidingView>
        </>
    )
}

export default TodoList

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputView: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginBottom: 20,
        position: 'absolute',
        bottom: 0
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
        borderColor: 'blue',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 16
    }
})