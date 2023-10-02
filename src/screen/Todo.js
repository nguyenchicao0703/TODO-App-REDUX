import { StyleSheet, Text, View, TextInput, TouchableHighlight, KeyboardAvoidingView } from 'react-native'
import React, { useState, useMemo } from 'react'
import { Checkbox, Filters } from '../component'
import RadioGroup from 'react-native-radio-buttons-group'
import { Picker } from '@react-native-picker/picker'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/actions'
import uuid from 'react-native-uuid'
import { todoListSelector } from '../redux/selectors'

const Todo = () => {
    const [selectedId, setSelectedId] = useState();
    const [todoName, setTodoName] = useState('');
    const [selectedPriority, setSelectedPriority] = useState('Medium');

    // Redux
    const dispatch = useDispatch();
    const todoList = useSelector(todoListSelector);

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
            {todoList.map(todo =>
                <Checkbox key={todo.id} text={todo.name} priority={todo.priority} />
            )}
            <KeyboardAvoidingView style={styles.keyboardAvoidingContainer} behavior="padding">
                <View style={styles.view_input}>
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
                        <Text style={styles.button_text}>Add</Text>
                    </TouchableHighlight>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

export default Todo

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
    keyboardAvoidingContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    view_input: {
        marginHorizontal: 20,
        flexDirection: 'row',
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
        borderColor: 'blue',
        justifyContent: 'center'
    },
    button_text: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 16
    }
})