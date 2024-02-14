import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      StyleSheet.setStyleAttributePreprocessor('backgroundColor', (value) => value.replace('black', 'white'));
    } else {
      StyleSheet.setStyleAttributePreprocessor('backgroundColor', (value) => value.replace('white', 'black'));
    }
  };

  return (
    <View style={[styles.container, darkMode && styles.darkModeContainer]}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.setting}>
        <Text>Dark Mode:</Text>
        <Switch
          value={darkMode}
          onValueChange={toggleDarkMode}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Light mode background color
  },
  darkModeContainer: {
    backgroundColor: 'black', // Dark mode background color
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  setting: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SettingsScreen;
