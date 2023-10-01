import { TextInput } from 'react-native'
import React from 'react'

export default function Filters({ placeholder }) {
    return (
        <TextInput
            style={{
                color: 'black',
                fontSize: 16,
                marginHorizontal: 20,
                borderWidth: 1,
                borderRadius: 5,
                marginTop: 5,
                paddingHorizontal: 12,
                borderColor: '#AAAAAA',
                fontWeight: '400'
            }}
            placeholder={placeholder}
            placeholderTextColor={'#AAAAAA'}
        />
    )
}