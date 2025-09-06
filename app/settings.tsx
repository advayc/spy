import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Switch, Alert, Linking, TextInput } from 'react-native';
import * as Haptics from 'expo-haptics';
import { router } from 'expo-router';
import { ArrowLeft, Palette, RotateCcw, Heart, Volume2, VolumeX, Moon, Sun, Vibrate, Bell, Info, ExternalLink } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSettingsStore } from '@/stores/settings-store';

const colorSchemes = [
  { name: 'Ocean Blue', primary: '#007AFF', secondary: '#0056CC', accent: '#64B5F6' },
  { name: 'Forest Green', primary: '#4CAF50', secondary: '#2E7D32', accent: '#81C784' },
  { name: 'Sunset Orange', primary: '#FF9500', secondary: '#FF6F00', accent: '#FFB74D' },
  { name: 'Purple Magic', primary: '#9C27B0', secondary: '#6A1B9A', accent: '#BA68C8' },
  { name: 'Ruby Red', primary: '#F44336', secondary: '#C62828', accent: '#E57373' },
  { name: 'Golden Yellow', primary: '#FFC107', secondary: '#F57C00', accent: '#FFD54F' },
  { name: 'Midnight Dark', primary: '#37474F', secondary: '#263238', accent: '#607D8B' },
  { name: 'Pink Passion', primary: '#E91E63', secondary: '#AD1457', accent: '#F06292' },
];

export default function SettingsScreen() {
  const {
    colorScheme,
    setColorScheme,
  customSchemes,
  addCustomScheme,
  removeCustomScheme,
    rolesEnabled,
    setRolesEnabled,
    soundEnabled,
    setSoundEnabled,
    vibrationsEnabled,
    setVibrationsEnabled,
    darkMode,
    setDarkMode,
    notificationsEnabled,
    setNotificationsEnabled,
    autoStartTimer,
    setAutoStartTimer,
    resetAllSettings,
  } = useSettingsStore();

  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showCustomCreator, setShowCustomCreator] = useState(false);
  const [customName, setCustomName] = useState('Custom');
  const [customPrimary, setCustomPrimary] = useState('#4F46E5');
  const [customSecondary, setCustomSecondary] = useState('#0EA5E9');
  const [customAccent, setCustomAccent] = useState('#93C5FD');

  const hexValid = (hex: string) => /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/.test(hex.trim());
  const canSaveCustom = useMemo(() => (
    customName.trim().length > 0 && hexValid(customPrimary) && hexValid(customSecondary) && hexValid(customAccent)
  ), [customName, customPrimary, customSecondary, customAccent]);

  const handleResetSettings = () => {
    Alert.alert(
      'Reset All Settings',
      'Are you sure you want to reset all settings to default? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: () => {
            resetAllSettings();
            Alert.alert('Settings Reset', 'All settings have been reset to default values.');
          },
        },
      ]
    );
  };

  const handleSupportDeveloper = () => {
    Linking.openURL('https://advay.ca').catch(() => {
      Alert.alert('Error', 'Could not open the website. Please visit advay.ca manually.');
    });
  };

  const SettingItem = ({ icon: Icon, title, subtitle, rightComponent, onPress }: any) => (
    <TouchableOpacity style={styles.settingItem} onPress={onPress}>
      <View style={styles.settingLeft}>
        <View style={[styles.iconContainer, { backgroundColor: `${colorScheme.primary}20` }]}>
          <Icon size={20} color={colorScheme.primary} />
        </View>
        <View style={styles.settingText}>
          <Text style={styles.settingTitle}>{title}</Text>
          {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}
        </View>
      </View>
      {rightComponent}
    </TouchableOpacity>
  );

  const ColorSchemeItem = ({ scheme, isSelected }: any) => (
    <TouchableOpacity
      style={[styles.colorSchemeItem, isSelected && styles.selectedColorScheme]}
      onPress={() => {
        setColorScheme(scheme);
        setShowColorPicker(false);
        if (vibrationsEnabled) {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        }
        Alert.alert('Color Scheme Changed', `Switched to ${scheme.name}!`);
      }}
    >
      <LinearGradient
        colors={[scheme.primary, scheme.secondary]}
        style={styles.colorPreview}
      />
      <Text style={styles.colorSchemeName}>{scheme.name}</Text>
      {isSelected && (
        <View style={styles.selectedIndicator}>
          <Text style={styles.selectedIcon}>✓</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Color Scheme Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Appearance</Text>
          
          <SettingItem
            icon={Palette}
            title="Color Scheme"
            subtitle={colorScheme.name}
            onPress={() => setShowColorPicker(!showColorPicker)}
            rightComponent={
              <TouchableOpacity onPress={() => setShowColorPicker(!showColorPicker)}>
                <LinearGradient
                  colors={[colorScheme.primary, colorScheme.secondary]}
                  style={styles.colorIndicator}
                />
              </TouchableOpacity>
            }
          />

          {showColorPicker && (
            <View style={styles.colorPicker}>
              {colorSchemes.map((scheme, index) => (
                <ColorSchemeItem
                  key={index}
                  scheme={scheme}
                  isSelected={scheme.name === colorScheme.name}
                />
              ))}

              {customSchemes.length > 0 && (
                <View style={{ marginTop: 12 }}>
                  <Text style={[styles.sectionTitle, { fontSize: 16, marginBottom: 8 }]}>Your Schemes</Text>
                  {customSchemes.map((scheme) => (
                    <View key={scheme.name} style={styles.customRow}>
                      <TouchableOpacity style={[styles.colorSchemeItem, { flex: 1 }]} onPress={() => setColorScheme(scheme)}>
                        <LinearGradient colors={[scheme.primary, scheme.secondary]} style={styles.colorPreview} />
                        <Text style={styles.colorSchemeName}>{scheme.name}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => removeCustomScheme(scheme.name)} style={styles.deleteCustomBtn}>
                        <Text style={{ color: '#FF6B6B', fontWeight: '600' }}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              )}

              <TouchableOpacity style={styles.createCustomBtn} onPress={() => setShowCustomCreator(v => !v)}>
                <Text style={styles.createCustomText}>{showCustomCreator ? 'Close custom creator' : 'Create custom gradient'}</Text>
              </TouchableOpacity>

              {showCustomCreator && (
                <View style={styles.customCreator}>
                  <TextInput
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor="#888"
                    value={customName}
                    onChangeText={setCustomName}
                  />
                  <View style={styles.row}>
                    <TextInput
                      style={[styles.input, styles.inputHalf]}
                      placeholder="#Primary"
                      placeholderTextColor="#888"
                      value={customPrimary}
                      onChangeText={setCustomPrimary}
                      autoCapitalize="none"
                    />
                    <TextInput
                      style={[styles.input, styles.inputHalf]}
                      placeholder="#Secondary"
                      placeholderTextColor="#888"
                      value={customSecondary}
                      onChangeText={setCustomSecondary}
                      autoCapitalize="none"
                    />
                  </View>
                  <TextInput
                    style={styles.input}
                    placeholder="#Accent"
                    placeholderTextColor="#888"
                    value={customAccent}
                    onChangeText={setCustomAccent}
                    autoCapitalize="none"
                  />
                  <LinearGradient colors={[hexValid(customPrimary) ? customPrimary : '#333', hexValid(customSecondary) ? customSecondary : '#333']} style={styles.previewLarge} />
                  <TouchableOpacity
                    disabled={!canSaveCustom}
                    onPress={() => {
                      addCustomScheme({ name: customName.trim(), primary: customPrimary.trim(), secondary: customSecondary.trim(), accent: customAccent.trim() });
                      if (vibrationsEnabled) Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                      Alert.alert('Saved', 'Custom gradient saved and applied.');
                      setShowCustomCreator(false);
                    }}
                    style={[styles.saveCustomBtn, !canSaveCustom && { opacity: 0.5 }]}
                  >
                    <Text style={styles.saveCustomText}>Save & Apply</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}

          <SettingItem
            icon={darkMode ? Moon : Sun}
            title="Dark Mode"
            subtitle="Toggle between light and dark theme"
            rightComponent={
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                trackColor={{ false: '#767577', true: colorScheme.primary }}
                thumbColor={darkMode ? '#f4f3f4' : '#f4f3f4'}
              />
            }
          />
        </View>

        {/* Game Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Game Settings</Text>
          
          <SettingItem
            icon={RotateCcw}
            title="Disable Roles"
            subtitle="Remove spy/civilian roles from all games"
            rightComponent={
              <Switch
                value={!rolesEnabled}
                onValueChange={(value) => setRolesEnabled(!value)}
                trackColor={{ false: '#767577', true: colorScheme.primary }}
                thumbColor={!rolesEnabled ? '#f4f3f4' : '#f4f3f4'}
              />
            }
          />

          <SettingItem
            icon={RotateCcw}
            title="Auto-start Timer"
            subtitle="Automatically start round timer when game begins"
            rightComponent={
              <Switch
                value={autoStartTimer}
                onValueChange={setAutoStartTimer}
                trackColor={{ false: '#767577', true: colorScheme.primary }}
                thumbColor={autoStartTimer ? '#f4f3f4' : '#f4f3f4'}
              />
            }
          />
        </View>

        {/* Audio & Feedback */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Audio & Feedback</Text>
          
          <SettingItem
            icon={soundEnabled ? Volume2 : VolumeX}
            title="Sound Effects"
            subtitle="Enable sound effects and audio feedback"
            rightComponent={
              <Switch
                value={soundEnabled}
                onValueChange={setSoundEnabled}
                trackColor={{ false: '#767577', true: colorScheme.primary }}
                thumbColor={soundEnabled ? '#f4f3f4' : '#f4f3f4'}
              />
            }
          />

          <SettingItem
            icon={Vibrate}
            title="Vibrations"
            subtitle="Enable haptic feedback and vibrations"
            rightComponent={
              <Switch
                value={vibrationsEnabled}
                onValueChange={setVibrationsEnabled}
                trackColor={{ false: '#767577', true: colorScheme.primary }}
                thumbColor={vibrationsEnabled ? '#f4f3f4' : '#f4f3f4'}
              />
            }
          />

          <SettingItem
            icon={Bell}
            title="Notifications"
            subtitle="Receive game notifications and reminders"
            rightComponent={
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{ false: '#767577', true: colorScheme.primary }}
                thumbColor={notificationsEnabled ? '#f4f3f4' : '#f4f3f4'}
              />
            }
          />
        </View>

        {/* Support & Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support & Information</Text>
          
          <SettingItem
            icon={Heart}
            title="Support Developer"
            subtitle="Visit advay.ca to support the developer"
            onPress={handleSupportDeveloper}
            rightComponent={<ExternalLink size={20} color="#888" />}
          />

          <SettingItem
            icon={Info}
            title="App Version"
            subtitle="1.0.0"
            rightComponent={null}
          />
        </View>

        {/* Reset Section */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.resetButton} onPress={handleResetSettings}>
            <RotateCcw size={20} color="#FF6B6B" />
            <Text style={styles.resetButtonText}>Reset All Settings</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  placeholder: {
    width: 40,
  },
  scrollContainer: {
    flex: 1,
  },
  section: {
    marginTop: 32,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#111',
    borderRadius: 12,
    marginBottom: 8,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  settingText: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
  settingSubtitle: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
  },
  colorIndicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  colorPicker: {
    marginTop: 16,
    marginBottom: 8,
  },
  colorSchemeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#222',
    borderRadius: 8,
    marginBottom: 8,
  },
  selectedColorScheme: {
    backgroundColor: '#333',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  colorPreview: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
  },
  colorSchemeName: {
    fontSize: 16,
    color: 'white',
    flex: 1,
  },
  selectedIndicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedIcon: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: '#222',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FF6B6B',
    gap: 8,
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FF6B6B',
  },
  bottomPadding: {
    height: 32,
  },
  customRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  deleteCustomBtn: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: '#221616',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3a1f1f',
  },
  createCustomBtn: {
    alignSelf: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
    marginTop: 8,
  },
  createCustomText: {
    color: '#ddd',
    fontWeight: '500',
  },
  customCreator: {
    marginTop: 12,
    backgroundColor: '#151515',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  input: {
    backgroundColor: '#111',
    color: 'white',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#2a2a2a',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
  },
  inputHalf: {
    flex: 1,
  },
  previewLarge: {
    height: 44,
    borderRadius: 10,
    marginTop: 4,
    marginBottom: 8,
  },
  saveCustomBtn: {
    backgroundColor: '#222',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  saveCustomText: {
    color: 'white',
    fontWeight: '600',
  },
});
