import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import MultiSelect from 'react-native-multiple-select'
import { useDispatch } from 'react-redux'
import { filtersSlice } from './Filters/filtersSlice'

const data = [
    { id: '1', name: 'High', value: 'High' },
    { id: '2', name: 'Medium', value: 'Medium' },
    { id: '3', name: 'Low', value: 'Low' },
];

const MultiSelectsPriority = () => {
    const [selectedId, setSelectedId] = useState([]);

    const dispatch = useDispatch();

    const handlePriorityChangeItems = (priorityItems) => {
        setSelectedId(priorityItems);

        const selectedValues = priorityItems.map((itemId) => {
            const selectedItem = data.find((item) => item.id === itemId);
            return selectedItem ? selectedItem.value : null;
        });

        dispatch(filtersSlice.actions.priorityFilterChange(selectedValues));
    };

    return (
        <MultiSelect
            items={data}
            uniqueKey="id"
            onSelectedItemsChange={handlePriorityChangeItems}
            selectedItems={selectedId}
            hideSubmitButton={true}
            selectText="Select options"
            searchInputPlaceholderText="Search options..."
            tagRemoveIconColor="blue"
            tagBorderColor="blue"
            tagTextColor="blue"
            selectedItemTextColor="blue"
            selectedItemIconColor="blue"
            itemTextColor="#000"
            displayKey="name"
            searchInputStyle={styles.dropdownSearchInput}
            submitButtonColor="blue"
            submitButtonText="Submit"
            styleDropdownMenu={styles.dropdownContainer}
            fontSize={16}
            styleDropdownMenuSubsection={styles.dropdownMenuSubsection}
            styleIndicator={styles.dropdownCustomIcon}
            styleRowList={styles.rowList}
        />
    )
}

export default MultiSelectsPriority

const styles = StyleSheet.create({
    dropdownContainer: {
        marginTop: 5,
        height: 50
    },
    dropdownMenuSubsection: {
        marginHorizontal: 20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#AAAAAA',
        paddingLeft: 12
    },
    dropdownSearchInput: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#AAAAAA',
        paddingLeft: 12,
        color: 'black',
        marginTop: 10,
        fontSize: 16,
        marginBottom: 5
    },
    rowList: {
        borderWidth: 1,
        marginBottom: 5,
        marginHorizontal: 10
    },
})