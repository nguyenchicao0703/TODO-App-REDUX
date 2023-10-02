import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox'

const Checkbox = ({ text, priority }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    // Màu mặc định
    let priorityColor = '#FFCCCD';
    let borderColor = 'red';
    let textColor = 'white';
    let textColorPriority = 'white';
    let textDecorationLine = 'none';

    // Xác định màu sắc dựa trên giá trị priority
    if (toggleCheckBox) {
        priorityColor = 'red';
        borderColor = 'red';
        textColor = 'red';
        textDecorationLine = 'line-through';
    } else if (priority === 'High') {
        priorityColor = '#FFD1F3';
        borderColor = '#FA00B7';
        textColorPriority = '#FA00B7';
        textColor = '#404040'
    } else if (priority === 'Medium') {
        priorityColor = '#C7FCD8';
        borderColor = 'green';
        textColorPriority = 'green';
        textColor = '#404040'
    } else if (priority === 'Low') {
        priorityColor = '#544F4F';
        borderColor = '#544F4F';
        textColorPriority = 'white'
        textColor = '#404040'
    }

    return (
        <View style={styles.checkbox_view}>
            <CheckBox
                style={{ transform: [{ scaleX: 1 }, { scaleY: 1 }] }}
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                tintColors={{ true: 'red', false: '#404040' }} // true: turn on & false: turn off *Android only*
            />
            <Text style={{ textDecorationLine, color: textColor, fontSize: 17, marginLeft: 5, flex: 1, }}>{text}</Text>
            <View style={[styles.priority, { backgroundColor: priorityColor, borderColor: borderColor }]}>
                <Text style={{ fontSize: 12, color: textColorPriority }}>{priority}</Text>
            </View>
        </View>
    )
}

export default Checkbox

const styles = StyleSheet.create({
    checkbox_view: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 10
    },
    checkbox_text: {
        color: '#404040',
        fontSize: 17,
        marginLeft: 5,
        flex: 1,
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
})