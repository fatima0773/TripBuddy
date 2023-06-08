import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const renderItem = (item, handleSelectItem, handleToggleItem, selectedItems) => (
  <TouchableOpacity
    key={item.id}
    style={[ styles.checklistItem, selectedItems.includes(item.id) && styles.selectedItem]}
    onPress={() => handleSelectItem(item.id)}>
    <Text style={[ styles.checklistItemText, item.packed && styles.checklistItemTextPacked ]}> {item.name} </Text>
    <TouchableOpacity
        style={[ styles.checklistCheckbox, item.packed && styles.checkedCheckbox ]}
        onPress={() => handleToggleItem(item.id)}
    >{item.packed && <Text style={styles.checkmark}>✓</Text>}
    </TouchableOpacity>
  </TouchableOpacity>
);

const ChecklistContainer = ({
  checklist,
  activeTab,
  handleToggleItem,
  handleSelectItem,
  selectedItems,
  editMode,
  editedItemName,
  setEditedItemName,
  handleSaveEditItem,
  newItemName,
  setNewItemName,
}) => {
  return (
    <View style={styles.checklistContainer}>
      {checklist
        .filter(
          (item) =>
            activeTab === 'all' ||
            (activeTab === 'packed' && item.packed) ||
            (activeTab === 'unpacked' && !item.packed)
        )
        .map((item) => renderItem(item, handleSelectItem, handleToggleItem, selectedItems))}

      {(editMode && selectedItems.length === 1) || !editMode ? (
        <View style={styles.TextInputContainer}>
          <TextInput
            style={styles.checklistTextInput}
            placeholder="Enter item name"
            color="#353535"
            placeholderTextColor="#353535"
            value={editMode ? editedItemName : newItemName}
            onChangeText={editMode ? setEditedItemName : setNewItemName}
          />
          {editMode && (
            <TouchableOpacity
              style={styles.saveEditButton}
              onPress={handleSaveEditItem}
            >
              <Text style={styles.saveEditText}>Save</Text>
            </TouchableOpacity>
          )}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  checklistContainer: {
    marginTop: 20,
  },
  checklistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexWrap: 'wrap',
    backgroundColor: '#E5E5E5',
  },
  checklistItemText: {
    flex: 1,
    fontSize: 16,
    color: '#353535',
    marginLeft: 10,
  },
  checklistItemTextPacked: {
    textDecorationLine: 'line-through',
  },
  selectedItem: {
    backgroundColor: '#cdd1cd',
    borderColor: 'white',
  },
  checklistCheckbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#25605C',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkedCheckbox: {
    backgroundColor: '#25605C',
  },
  checkmark: {
    color: 'white',
    fontSize: 16,
  },
  TextInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderRadius: 10,
    paddingVertical: 10,
    flexWrap: 'wrap',
    borderWidth: 0,
  },
  checklistTextInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  saveEditButton: {
    backgroundColor: '#25605C',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 10,
  },
  saveEditText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ChecklistContainer;
