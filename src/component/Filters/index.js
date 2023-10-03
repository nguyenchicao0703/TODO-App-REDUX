import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState, useMemo } from 'react'
import RadioGroup from 'react-native-radio-buttons-group'
import { useDispatch } from 'react-redux'
import { searchFilterChange, statusFilterChange } from '../../redux/actions'

const Filter = () => {
    const [searchText, setSearchText] = useState('');
    const [selectedId, setSelectedId] = useState();

    const dispatch = useDispatch();

    const handleSearchChangeText = (text) => {
        setSearchText(text);
        dispatch(searchFilterChange(text));
    }

    const handleStatusChange = (status) => {
        setSelectedId(status);
        dispatch(statusFilterChange(radioButtons[status-1].value));
    }

    const radioButtons = useMemo(() => ([
        {
            id: '1',
            label: 'All',
            value: 'All'
        },
        {
            id: '2',
            label: 'Completed',
            value: 'Completed'
        },
        {
            id: '3',
            label: 'To do',
            value: 'Todo'
        }
    ]), []);

    return (
        <View>
            <Text style={styles.title}>Search</Text>
            <TextInput
                style={styles.input}
                placeholder={'Input filter text'}
                placeholderTextColor={'#AAAAAA'}
                value={searchText}
                onChangeText={handleSearchChangeText}
            />
            <Text style={styles.title}>Filter By Status</Text>
            <RadioGroup
                containerStyle={styles.radioButton}
                radioButtons={radioButtons}
                onPress={handleStatusChange}
                selectedId={selectedId}
                layout='row'
            />
            <Text style={styles.title}>Filter By Priority</Text>
            <TextInput
                style={styles.input}
                placeholder='Please select'
                placeholderTextColor={'#AAAAAA'}
            />
        </View>
    )
}

export default Filter

const styles = StyleSheet.create({
    radioButton: {
        marginHorizontal: 10,
        marginTop: 5
    },
    title: {
        color: 'black',
        fontSize: 18,
        marginTop: 20,
        fontWeight: '500',
        marginLeft: 20
    },
    input: {
        color: 'black',
        fontSize: 16,
        marginHorizontal: 20,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 5,
        paddingHorizontal: 12,
        borderColor: '#AAAAAA',
        fontWeight: '400'
    }
})