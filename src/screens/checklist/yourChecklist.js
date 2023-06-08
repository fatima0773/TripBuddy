import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ProfileComponent from '../../components/profileComponent';
import TabNavigation from './components/tabNavigation';
import ChecklistContainer from './components/checklistContainer';

const YourChecklist = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [checklist, setChecklist] = useState([
    { id: 1, name: 'Clothes', packed: false },
    { id: 2, name: 'Shoes', packed: true },
    { id: 3, name: 'Passport', packed: false },
  ]);
  const [newItemName, setNewItemName] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedItemName, setEditedItemName] = useState('');

  const handleToggleItem = (itemId) => {
    setChecklist((prevChecklist) =>
      prevChecklist.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleAddItem = () => {
    if (newItemName.trim() !== '') {
      const newItem = {
        id: Date.now(),
        name: newItemName,
        packed: false,
      };

      setChecklist((prevChecklist) => [...prevChecklist, newItem]);
      setNewItemName('');
    }
  };

  const handleEditItem = () => {
    if (selectedItems.length === 1) {
      setEditMode(true);
      const selectedItem = checklist.find(
        (item) => item.id === selectedItems[0]
      );
      setEditedItemName(selectedItem.name);
    }
  };

  const handleSaveEditItem = () => {
    if (editedItemName.trim() !== '') {
      setChecklist((prevChecklist) =>
        prevChecklist.map((item) =>
          item.id === selectedItems[0] ? { ...item, name: editedItemName } : item
        )
      );
      setEditMode(false);
      setEditedItemName('');
      setSelectedItems([]);
    }
  };

  const handleDeleteSelectedItem = () => {
    setChecklist((prevChecklist) =>
      prevChecklist.filter((item) => !selectedItems.includes(item.id))
    );
    setSelectedItems([]);
  };

  const handleSelectItem = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((id) => id !== itemId)
      );
    } else {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, itemId]);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#25605C" />
      <View style={{ padding: 25 }}>
        
        {/* Profile */}
        <ProfileComponent
          imageSource={require('../../assets/images/profile.png')}
          name="Vania"
        />

        {/* Heading */}
        <View style={styles.headingRow}>
          <Text style={styles.heading1}>Your Checklist</Text>
          <TouchableOpacity style={styles.newItemButton} onPress={handleAddItem}>
            <Text style={styles.newItemButtonText}>Add New Item</Text>
          </TouchableOpacity>
        </View>

        {/* Tab navigation */}
        <TabNavigation
          checklist={checklist}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Checklist items */}
        <ChecklistContainer
          checklist={checklist}
          activeTab={activeTab}
          handleToggleItem={handleToggleItem}
          handleSelectItem={handleSelectItem}
          handleSaveEditItem={handleSaveEditItem}
          handleEditItem={handleEditItem}
          setEditedItemName={setEditedItemName}
          setNewItemName={setNewItemName}
          selectedItems={selectedItems}
          editMode={editMode}
          editedItemName={editedItemName}
          newItemName={newItemName}
        />

        {/* Bottom buttons */}
        <View style={styles.bottomButtonsContainer}>
          {!editMode && selectedItems.length === 1 && (
            <TouchableOpacity style={styles.bottomButton} onPress={handleEditItem}>
              <Text style={styles.bottomButtonText}>Edit</Text>
            </TouchableOpacity>
          )}
          {selectedItems.length > 0 && (
            <TouchableOpacity
              style={styles.bottomButton}
              onPress={handleDeleteSelectedItem}
            >
              <Text style={styles.bottomButtonText}>Delete</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading1: {
    color: '#274B47',
    fontSize: 35,
    fontWeight: '600',
    paddingBottom: 20,
  },
  newItemButton: {
    backgroundColor: '#25605C',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: -15,
  },
  newItemButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 10,
  },
  bottomButton: {
    backgroundColor: '#25605C',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginLeft: 10,
  },
  bottomButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default YourChecklist;
