import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState, useMemo } from 'react'
import RadioGroup from 'react-native-radio-buttons-group'
import { useDispatch } from 'react-redux'
import { searchFilterChange } from '../../redux/actions'

const Filter = () => {
    const [selectedId, setSelectedId] = useState();
    const [searchText, setSearchText] = useState('');

    const dispatch = useDispatch();

    const handleSearchChangeText = (text) => {
        setSearchText(text);
        dispatch(searchFilterChange(text));
    }

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
                onPress={setSelectedId}
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