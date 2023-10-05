import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { Filter, TodoList } from '../component'

const Todo = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.name_app}>TODO APP with REDUX</Text>
            <Filter />
            <View style={styles.line}></View>
            <TodoList />
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
        fontWeight: '600'
    },
    line: {
        width: '100%',
        height: 0.5,
        backgroundColor: '#AAAAAA',
        marginTop: 5
    },
})