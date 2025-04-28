import React, { useState } from 'react';
import {
  SafeAreaView,
  Animated,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Menu, X, Home, User, Settings } from 'lucide-react-native';
import HomeScreen from './HomeScreens';
import ProfileScreen from './ProfileScreens';
import SettingsScreen from './SettingsScreens';

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const slideAnim = useState(new Animated.Value(-300))[0];

  const toggleMenu = () => {
    const toValue = menuOpen ? -300 : 0;

    Animated.timing(slideAnim, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { id: 1, title: 'Home', icon: Home },
    { id: 2, title: 'Profile', icon: User },
    { id: 3, title: 'Settings', icon: Settings },
  ];

  const handleTabPress = (title) => {
    setActiveTab(title);
    if (menuOpen) toggleMenu();
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <HomeScreen />;
      case 'Profile':
        return <ProfileScreen />;
      case 'Settings':
        return <SettingsScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          {menuOpen ? <X size={24} color="#000" /> : <Menu size={24} color="#000" />}
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My App</Text>
      </View>

      {menuOpen && (
        <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={toggleMenu} />
      )}

      <Animated.View style={[styles.menu, { transform: [{ translateX: slideAnim }] }]}>
        <ScrollView contentContainerStyle={styles.menuContent}>
          <Text style={styles.menuTitle}>Menu</Text>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.menuItem,
                activeTab === item.title && styles.activeMenuItem,
              ]}
              onPress={() => handleTabPress(item.title)}
            >
              <item.icon
                size={20}
                color={activeTab === item.title ? '#6200ee' : '#333'}
              />
              <Text
                style={[
                  styles.menuItemText,
                  activeTab === item.title && styles.activeMenuItemText,
                ]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Animated.View>

      <View style={styles.content}>{renderContent()}</View>

      <View style={styles.tabContainer}>
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <TouchableOpacity
              key={item.id}
              style={[styles.tab, activeTab === item.title && styles.activeTab]}
              onPress={() => handleTabPress(item.title)}
            >
              <Icon size={24} color={activeTab === item.title ? '#6200ee' : '#757575'} />
              <Text style={[styles.tabText, activeTab === item.title && styles.activeTabText]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 20,
    color: '#333',
  },
  menuButton: {
    padding: 5,
  },
  overlay: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1,
  },
  menu: {
    position: 'absolute',
    top: 60,
    left: 0,
    bottom: 0,
    width: 280,
    backgroundColor: '#fff',
    zIndex: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10,
    paddingVertical: 20,
  },
  menuContent: {
    paddingHorizontal: 20,
  },
  menuTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#000',
  },
  menuItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  menuItemText: {
    fontSize: 18,
    color: '#333',
  },
  content: {
    flex: 1,
    marginBottom: 60,
  },
  tabContainer: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  tabText: {
    fontSize: 12,
    marginTop: 4,
    color: '#757575',
  },
  activeTabText: {
    color: '#6200ee',
    fontWeight: 'bold',
  },
});

export default HamburgerMenu;