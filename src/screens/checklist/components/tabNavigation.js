import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TabButton = ({ label, count, isActive, onPress }) => {
  return (
    <TouchableOpacity style={styles.tabButton} onPress={onPress}>
      <Text style={styles.tabButtonText}>
        <View style={{ marginBottom: 5 }}>
            <Text style={[styles.tabLabelText, isActive && styles.activeTabButtonText]}>{label}{'  '}</Text>
        </View>
        <View style={[styles.tabNumberContainer, isActive && styles.activeTabNumberContainer]}>
          <Text style={{color: 'white'}}>{count}</Text>
        </View>
      </Text>
    </TouchableOpacity>
  );
};

const TabNavigation = ({ checklist, activeTab, setActiveTab }) => {
  const allCount = checklist.length;
  const packedCount = checklist.filter((item) => item.packed).length;
  const unpackedCount = checklist.filter((item) => !item.packed).length;

  return (
    <View style={styles.tabContainer}>
      <TabButton
        label="All"
        count={allCount}
        isActive={activeTab === 'all'}
        onPress={() => setActiveTab('all')}
      />
      <Text style={styles.tabSeparator}>|</Text>
      <TabButton
        label="Packed"
        count={packedCount}
        isActive={activeTab === 'packed'}
        onPress={() => setActiveTab('packed')}
      />
      <Text style={styles.tabSeparator}>|</Text>
      <TabButton
        label="Unpacked"
        count={unpackedCount}
        isActive={activeTab === 'unpacked'}
        onPress={() => setActiveTab('unpacked')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  tabButton: {
    paddingVertical: 10,
  },
  tabNumberContainer: {
    backgroundColor: 'rgba(53, 53, 53, 0.4)',
    borderRadius: 5,
    paddingHorizontal: 6,
    marginBottom: 8,
  },
  activeTabNumberContainer: {
    backgroundColor: '#25605C',
  },
  tabLabelText: {
    color: 'rgba(53, 53, 53, 0.4)',
    fontSize: 20,
    fontWeight: 'bold'
  },
  activeTabButtonText: {
    color: '#25605C',
    fontWeight: 'bold',
  },
  tabSeparator: {
    color: 'rgba(53, 53, 53, 0.4)',
    fontSize: 20,
    marginTop: 8,
    marginHorizontal: 25
  },
});

export default TabNavigation;
