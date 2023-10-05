import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox'
import { useDispatch } from 'react-redux'
import { toggleTodoStatus } from '../redux/actions'

const Checkbox = ({ id, name, priority, completed }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(completed);

    const dispatch = useDispatch();

    const handleToggleTodoStatus = (newValue) => {
        setToggleCheckBox(newValue);
        dispatch(toggleTodoStatus(id));
    }

    const priorityData = {
        High: { backgroundColor: '#FFD6D7', borderColor: 'red', textPriorityColor: 'red' },
        Medium: { backgroundColor: '#C7FCD8', borderColor: 'green', textPriorityColor: 'green' },
        Low: { backgroundColor: '#544F4F', borderColor: '#544F4F', textPriorityColor: 'white' },
    };

    const { backgroundColor, borderColor, textPriorityColor } = priorityData[priority];

    return (
        <View style={styles.container}>
            <CheckBox
                style={[styles.checkbox, { opacity: toggleCheckBox ? 0.4 : 1 }]}
                disabled={false}
                value={toggleCheckBox}
                onValueChange={handleToggleTodoStatus}
                tintColors={{ true: '#404040', false: '#404040' }}
            />
            <Text style={[styles.text, { textDecorationLine: toggleCheckBox ? 'line-through' : 'none', opacity: toggleCheckBox ? 0.4 : 1 }]}>{name}</Text>
            <View style={[styles.priority, { backgroundColor, borderColor, opacity: toggleCheckBox ? 0.4 : 1 }]}>
                <Text style={[styles.priorityText, { color: textPriorityColor, textDecorationLine: toggleCheckBox ? 'line-through' : 'none' }]}>{priority}</Text>
            </View>
        </View>
    )
}

export default Checkbox

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 10,
    },
    checkbox: {
        transform: [{ scaleX: 1 }, { scaleY: 1 }],
    },
    text: {
        fontSize: 17,
        marginLeft: 5,
        flex: 1,
        color: 'black'
    },
    priority: {
        width: 65,
        height: 30,
        marginRight: 20,
        borderRadius: 5,
        borderWidth: 1.5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    priorityText: {
        fontSize: 12,
        justifyContent: 'center'
    },
})