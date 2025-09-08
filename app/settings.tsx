import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Switch, Alert, Linking, TextInput, Modal, Pressable } from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft, Palette, RotateCcw, Heart, Volume2, VolumeX, Moon, Sun, Vibrate, Bell, Info, ExternalLink, Eye, Target } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSettingsStore } from '@/stores/settings-store';
import { useTheme } from '@/hooks/useTheme';
import { useVibration } from '@/hooks/useVibration';

const colorSchemes = [
  { name: 'Ocean Blue',   primary: '#007AFF', secondary: '#2196F3', accent: '#5AC8FA' },
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
    defaultGameMode,
    setDefaultGameMode,
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
  minSpies,
  setMinSpies,
  maxSpies,
  setMaxSpies,
  allowMaxSpies,
  setAllowMaxSpies,
  } = useSettingsStore();

  const { colors } = useTheme();
  const vibrate = useVibration();

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
            vibrate.success();
            Alert.alert('Settings Reset', 'All settings have been reset to default values.');
          },
        },
      ]
    );
  };

  const handleSupportDeveloper = () => {
    vibrate.light();
    Linking.openURL('https://advay.ca').catch(() => {
      Alert.alert('Error', 'Could not open the website. Please visit advay.ca manually.');
    });
  };

  // Local inputs for min/max spies
  const [localMinSpies, setLocalMinSpies] = useState(String(minSpies ?? 0));
  const [localMaxSpies, setLocalMaxSpies] = useState(String(maxSpies ?? 8));
  const [localAllowMaxSpies, setLocalAllowMaxSpies] = useState<boolean>(Boolean(allowMaxSpies));

  // Docs modal
  const [showDocsModal, setShowDocsModal] = useState(false);

  const docs = [
    { type: 'title', text: 'How to play — Spy' },
    { type: 'heading', text: 'Objective' },
    { type: 'paragraph', text: "One or more players are spies who don't know the secret word. The other players know the word and must identify the spies by asking questions." },
    { type: 'heading', text: 'Setup' },
    { type: 'list', items: [ 'Enter player names on the Create Game screen.', 'Choose a topic or word list.', 'Choose number of spies or select Random (the app will pick between the configured min and max spies).' ] },
    { type: 'heading', text: 'Gameplay' },
    { type: 'list', items: [ 'Start the round. Each player will be privately shown their role and the secret word (except spies).', 'Players take turns asking questions to figure out who the spies are.', 'After discussion or a timer, players vote on who they think the spy is.', 'Reveal roles and repeat as desired.' ] },
    { type: 'heading', text: 'Range Game (alternate mode)' },
    { type: 'paragraph', text: "In Range Game, all players receive the same question except one player who receives a numeric range as their 'answer'. Players try to identify who has the range by asking questions and comparing answers. Example: Question: 'Age you learned to drive' — civilians answer with a single value, the range player sees something like '10-25'." },
    { type: 'heading', text: 'Settings' },
    { type: 'list', items: [ 'Settings → Game Settings → Spy count limits: configure Minimum and Maximum spies used when Random is selected. Maximum is capped at 8.', 'Disable Roles turns off spy/civilian roles for party variations.' ] },
    { type: 'heading', text: 'Tips' },
    { type: 'list', items: [ 'For small groups (4-6), 1 spy is usually best.', 'For larger groups, increase spies but keep balance in mind.', 'Use roles and timers to control pacing.' ] },
  ];

  const applyMinSpies = () => {
    const n = parseInt(localMinSpies || '0', 10);
    if (isNaN(n) || n < 0) {
      Alert.alert('Invalid', 'Minimum spies must be 0 or more.');
      setLocalMinSpies(String(minSpies ?? 0));
      return;
    }
    setMinSpies(n);
    vibrate.success();
  };

  const applyMaxSpies = () => {
    const n = parseInt(localMaxSpies || '0', 10);
    if (isNaN(n) || n < 0) {
      Alert.alert('Invalid', 'Maximum spies must be 0 or more.');
      setLocalMaxSpies(String(maxSpies ?? 8));
      return;
    }
    if (n > 8) {
      Alert.alert('Limited', 'Maximum spies are capped at 8. It has been reduced to 8.');
      setLocalMaxSpies('8');
      setMaxSpies(8);
      vibrate.success();
      return;
    }
    setMaxSpies(n);
    vibrate.success();
  };

  const SettingItem = ({ icon: Icon, title, subtitle, rightComponent, onPress }: any) => (
    <TouchableOpacity style={[styles.settingItem, { backgroundColor: colors.surface }]} onPress={onPress}>
      <View style={styles.settingLeft}>
        <View style={[styles.iconContainer, { backgroundColor: `${colorScheme.primary}20` }]}>
          <Icon size={20} color={colorScheme.primary} />
        </View>
        <View style={styles.settingText}>
          <Text style={[styles.settingTitle, { color: colors.text }]}>{title}</Text>
          {subtitle && <Text style={[styles.settingSubtitle, { color: colors.textSecondary }]}>{subtitle}</Text>}
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
        vibrate.medium();
        Alert.alert('Color Scheme Changed', `Switched to ${scheme.name}!`);
      }}
    >
      <LinearGradient
        colors={[scheme.primary, scheme.secondary]}
        style={styles.colorPreview}
      />
      <Text style={[styles.colorSchemeName, { color: colors.text }]}>{scheme.name}</Text>
      {isSelected && (
        <View style={styles.selectedIndicator}>
          <Text style={styles.selectedIcon}>✓</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Settings</Text>
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
                      vibrate.success();
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
            icon={defaultGameMode === 'spy' ? Eye : Target}
            title="Default Game Mode"
            subtitle={`Quick Start will launch ${defaultGameMode === 'spy' ? 'Guess the Spy' : 'Range Game'}`}
            rightComponent={
              <View style={styles.gameModeSelector}>
                <TouchableOpacity
                  style={[
                    styles.gameModeOption,
                    defaultGameMode === 'spy' && styles.gameModeOptionActive
                  ]}
                  onPress={() => setDefaultGameMode('spy')}
                >
                  <Eye size={16} color={defaultGameMode === 'spy' ? '#fff' : colorScheme.primary} />
                  <Text style={[
                    styles.gameModeOptionText,
                    { color: defaultGameMode === 'spy' ? '#fff' : colorScheme.primary }
                  ]}>Spy</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.gameModeOption,
                    defaultGameMode === 'range' && styles.gameModeOptionActive
                  ]}
                  onPress={() => setDefaultGameMode('range')}
                >
                  <Target size={16} color={defaultGameMode === 'range' ? '#fff' : colorScheme.primary} />
                  <Text style={[
                    styles.gameModeOptionText,
                    { color: defaultGameMode === 'range' ? '#fff' : colorScheme.primary }
                  ]}>Range</Text>
                </TouchableOpacity>
              </View>
            }
          />
          
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

          {/* Min / Max Spies */}
          <View style={{ marginTop: 12 }}>
            <Text style={[styles.settingTitle, { marginLeft: 4 }]}>Spy count limits</Text>
            <Text style={[styles.settingSubtitle, { marginLeft: 4, marginBottom: 8 }]}>Set the minimum and maximum number of spies allowed when using random spy selection. Toggle "Allow max spies" to allow up to the number of players.</Text>

            <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <Text style={[styles.settingSubtitle, { marginBottom: 6 }]}>Minimum spies</Text>
                <TextInput
                  keyboardType="number-pad"
                  value={localMinSpies}
                  onChangeText={setLocalMinSpies}
                  onEndEditing={applyMinSpies}
                  style={[styles.input, { backgroundColor: colors.surface, color: colors.text }]}
                />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={[styles.settingSubtitle, { marginBottom: 6 }]}>Maximum spies</Text>
                <TextInput
                  keyboardType="number-pad"
                  value={localMaxSpies}
                  onChangeText={setLocalMaxSpies}
                  onEndEditing={applyMaxSpies}
                  style={[styles.input, { backgroundColor: colors.surface, color: colors.text }]}
                />
              </View>
            </View>
            <View style={{ marginTop: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View style={{ flex: 1 }}>
                <Text style={[styles.settingTitle, { marginLeft: 4, fontSize: 14 }]}>Allow max spies = players</Text>
                <Text style={[styles.settingSubtitle, { marginLeft: 4 }]}>When enabled, the maximum spies equals the current number of players (inclusive).</Text>
              </View>
              <Switch
                value={localAllowMaxSpies}
                onValueChange={(v) => {
                  setLocalAllowMaxSpies(v);
                  setAllowMaxSpies(v);
                  vibrate.medium();
                }}
                trackColor={{ false: '#767577', true: colorScheme.primary }}
                thumbColor={localAllowMaxSpies ? '#f4f3f4' : '#f4f3f4'}
              />
            </View>
          </View>
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
            icon={Info}
            title="Help / How to play"
            subtitle="Open the in-app guide and gameplay tips"
            onPress={() => setShowDocsModal(true)}
            rightComponent={<ExternalLink size={20} color="#888" />}
          />

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
            subtitle="1.1.0"
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

      {/* Docs Modal */}
      <Modal
        visible={showDocsModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowDocsModal(false)}
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.docsContainer}>
            <View style={styles.docsHeader}>
              <Text style={styles.docsTitle}>Help & How to play</Text>
              <Pressable onPress={() => setShowDocsModal(false)} style={styles.docsCloseBtn}>
                <Text style={{ color: '#fff', fontWeight: '600' }}>Close</Text>
              </Pressable>
            </View>
            <ScrollView style={{ padding: 12 }}>
              {docs.map((block, i) => {
                if (block.type === 'title') {
                  return <Text key={i} style={[styles.docsTitle, { fontSize: 20 }]}>{block.text}</Text>;
                }
                if (block.type === 'heading') {
                  return <Text key={i} style={styles.docsHeading}>{block.text}</Text>;
                }
                if (block.type === 'paragraph') {
                  return <Text key={i} style={styles.docsText}>{block.text}</Text>;
                }
                if (block.type === 'list') {
                  return (
                    <View key={i} style={{ marginBottom: 8 }}>
                      {(block.items || []).map((it: string, j: number) => (
                        <Text key={j} style={styles.docsListItem}>• {it}</Text>
                      ))}
                    </View>
                  );
                }
                return null;
              })}
            </ScrollView>
          </View>
        </SafeAreaView>
      </Modal>

        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
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
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 8,
    borderRadius: 12,
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
  gameModeSelector: {
    flexDirection: 'row',
    gap: 8,
  },
  gameModeOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
    gap: 6,
  },
  gameModeOptionActive: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  gameModeOptionText: {
    fontSize: 12,
    fontWeight: '500',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
  },
  docsContainer: {
    marginHorizontal: 16,
    backgroundColor: '#0f0f0f',
    borderRadius: 12,
    overflow: 'hidden',
    maxHeight: '80%'
  },
  docsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#222'
  },
  docsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white'
  },
  docsCloseBtn: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#222',
    borderRadius: 8,
  },
  docsText: {
    color: '#ddd',
    marginBottom: 12,
    fontSize: 14,
    lineHeight: 20,
  },
  docsHeading: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 8,
    marginBottom: 6,
  },
  docsListItem: {
    color: '#ddd',
    fontSize: 14,
    marginBottom: 6,
    marginLeft: 6,
  },
});
