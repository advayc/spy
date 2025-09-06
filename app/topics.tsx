import React, { useCallback, useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, TextInput, Alert, FlatList, Modal, Pressable, Switch } from 'react-native';
import { router } from 'expo-router';
import { ChevronLeft, Plus, Trash2, Edit2 } from 'lucide-react-native';
import { useTopicsStore, Topic } from '@/stores/topics-store';
import { useCategoriesStore, builtinCategories } from '@/stores/categories-store';
import { useSettingsStore } from '@/stores/settings-store';

export default function TopicsScreen() {
  const { colorScheme } = useSettingsStore();
  const { topics, addTopic, removeTopic, updateTopic } = useTopicsStore();
  const { customCategories, addCategory, removeCategory, updateCategory, getAllCategories, getCategory } = useCategoriesStore();
  const [editingTopic, setEditingTopic] = useState<Topic | null>(null);
  const [editingTopicName, setEditingTopicName] = useState<string>('');
  const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null);
  const [editingCategoryName, setEditingCategoryName] = useState<string>('');
  const [editingCategoryIcon, setEditingCategoryIcon] = useState<string>('');
  const [editingCategoryUseRoles, setEditingCategoryUseRoles] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [newTopicName, setNewTopicName] = useState<string>('');
  const [newCategoryName, setNewCategoryName] = useState<string>('');
  const [newCategoryIcon, setNewCategoryIcon] = useState<string>('⭐');
  const [newCategoryUseRoles, setNewCategoryUseRoles] = useState<boolean>(true);
  const [showAddCategory, setShowAddCategory] = useState<boolean>(false);
  const [showAddTopic, setShowAddTopic] = useState<boolean>(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);

  const categories = getAllCategories();

  const getTopicsCountForCategory = useCallback((categoryId: string) => {
    return topics.filter(topic => topic.category === categoryId).length;
  }, [topics]);

  const getCategoryTopics = useCallback((categoryId: string) => {
    return topics.filter(topic => topic.category === categoryId);
  }, [topics]);

  const handleAddTopic = useCallback(() => {
    if (!selectedCategory || !newTopicName.trim()) {
      Alert.alert('Missing info', 'Enter a topic name.');
      return;
    }
    
    const cat = getCategory(selectedCategory);
    const roles = cat && cat.useRoles ? ['Player 1', 'Player 2', 'Player 3', 'Spy'] : [];
    addTopic({ name: newTopicName.trim(), category: selectedCategory, roles });
    setNewTopicName('');
    setShowAddTopic(false);
  }, [addTopic, newTopicName, selectedCategory, getCategory]);

  const handleDeleteTopic = useCallback((topicId: string) => {
    Alert.alert('Delete Topic', 'Are you sure you want to delete this topic?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => removeTopic(topicId) },
    ]);
  }, [removeTopic]);

  const handleDeleteCategory = useCallback((categoryId: string) => {
    const categoryTopics = getCategoryTopics(categoryId);
    if (categoryTopics.length > 0) {
      Alert.alert(
        'Delete Category', 
        `This category has ${categoryTopics.length} topics. Delete all topics in this category?`,
        [
          { text: 'Cancel', style: 'cancel' },
          { 
            text: 'Delete', 
            style: 'destructive', 
            onPress: () => {
              categoryTopics.forEach(topic => removeTopic(topic.id));
              // Remove custom category metadata (not for built-ins)
              if (!builtinCategories[categoryId]) {
                removeCategory(categoryId);
              }
            }
          },
        ]
      );
    } else {
      // No topics; just remove custom category if applicable
      if (!builtinCategories[categoryId]) {
        removeCategory(categoryId);
      }
    }
  }, [getCategoryTopics, removeTopic, removeCategory]);

  const renderCategoryItem = useCallback(({ item }: { item: { id: string; name: string; icon: string; useRoles: boolean } }) => {
    const topicsCount = getTopicsCountForCategory(item.id);
    
    return (
      <TouchableOpacity 
        style={styles.categoryItem}
        onPress={() => setSelectedCategory(item.id)}
      >
        <View style={styles.categoryHeader}>
          <View style={styles.categoryInfo}>
            <Text style={styles.categoryEmoji}>{item.icon}</Text>
            <Text style={styles.categoryName}>{item.name}</Text>
          </View>
          <View style={styles.categoryActions}>
            <TouchableOpacity 
              style={styles.editButton}
              onPress={() => startEditCategory(item.id)}
            >
              <Edit2 size={16} color="#0A84FF" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.deleteButton}
              onPress={() => handleDeleteCategory(item.id)}
            >
              <Trash2 size={16} color="#FF3B30" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.topicsCount}>{topicsCount} topics • {item.useRoles ? 'Roles on' : 'No roles'}</Text>
      </TouchableOpacity>
    );
  }, [getTopicsCountForCategory, handleDeleteCategory]);

  const renderTopicItem = useCallback(({ item }: { item: Topic }) => {
    return (
      <TouchableOpacity style={styles.topicItem}>
        <View style={styles.topicHeader}>
          <Text style={styles.topicName}>{item.name}</Text>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <TouchableOpacity style={styles.editButton} onPress={() => startEditTopic(item)}>
              <Edit2 size={14} color="#0A84FF" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.deleteTopicButton}
              onPress={() => handleDeleteTopic(item.id)}
            >
              <Trash2 size={14} color="#FF3B30" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.rolesCount}>{item.roles.length} roles</Text>
      </TouchableOpacity>
    );
  }, [handleDeleteTopic]);

  const startEditTopic = (topic: Topic) => {
    setEditingTopic(topic);
    setEditingTopicName(topic.name);
  };

  const saveEditTopic = () => {
    if (editingTopic && editingTopicName.trim()) {
      updateTopic(editingTopic.id, { name: editingTopicName.trim() });
      setEditingTopic(null);
    }
  };

  const cancelEditTopic = () => {
    setEditingTopic(null);
    setEditingTopicName('');
  };

  const startEditCategory = (catId: string) => {
    const cat = getCategory(catId);
    if (!cat) return;
    setEditingCategoryId(catId);
    setEditingCategoryName(cat.name);
    setEditingCategoryIcon(cat.icon);
    setEditingCategoryUseRoles(cat.useRoles ?? true);
  };

  const saveEditCategory = () => {
    if (!editingCategoryId) return;
    // only allow updating custom categories
    if (!builtinCategories[editingCategoryId]) {
      updateCategory(editingCategoryId, { name: editingCategoryName.trim(), icon: editingCategoryIcon, useRoles: editingCategoryUseRoles });
    }
    setEditingCategoryId(null);
  };

  const cancelEditCategory = () => {
    setEditingCategoryId(null);
    setEditingCategoryName('');
    setEditingCategoryIcon('');
    setEditingCategoryUseRoles(true);
  };

  if (selectedCategory) {
    const category = categories.find(c => c.id === selectedCategory);
    const categoryTopics = getCategoryTopics(selectedCategory);

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => setSelectedCategory(null)} 
            style={styles.backButton}
          >
            <ChevronLeft size={24} color="#0A84FF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{category?.name}</Text>
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => setShowAddTopic(true)}
          >
            <Plus size={24} color="#0A84FF" />
          </TouchableOpacity>
        </View>

        {showAddTopic && (
          <View style={styles.addTopicSection}>
            <TextInput
              style={styles.addTopicInput}
              placeholder={`Add topic to ${category?.name}`}
              placeholderTextColor="#666666"
              value={newTopicName}
              onChangeText={setNewTopicName}
              autoFocus
            />
            <View style={styles.addTopicActions}>
              <TouchableOpacity 
                style={styles.cancelButton}
                onPress={() => {
                  setShowAddTopic(false);
                  setNewTopicName('');
                }}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.saveButton}
                onPress={handleAddTopic}
              >
                <Text style={styles.saveButtonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        <FlatList
          data={categoryTopics}
          renderItem={renderTopicItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.topicsList}
          showsVerticalScrollIndicator={false}
        />
        {/* Topic Edit Modal */}
        <Modal
          visible={!!editingTopic}
          animationType="slide"
          transparent={true}
          onRequestClose={cancelEditTopic}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Edit Topic</Text>
              <TextInput
                style={styles.modalInput}
                value={editingTopicName}
                onChangeText={setEditingTopicName}
                placeholder="Topic name"
                placeholderTextColor="#999"
              />
              <View style={styles.modalButtons}>
                <Pressable style={[styles.modalButton, styles.modalCancel]} onPress={cancelEditTopic}>
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </Pressable>
                <Pressable style={[styles.modalButton, styles.modalSave]} onPress={saveEditTopic}>
                  <Text style={[styles.modalButtonText, { color: '#fff' }]}>Save</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => router.back()} 
          style={styles.backButton}
        >
          <ChevronLeft size={24} color="#0A84FF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Topics</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => setShowAddCategory(true)}
        >
          <Plus size={24} color="#0A84FF" />
        </TouchableOpacity>
      </View>

      {showAddCategory && (
        <View style={styles.addCategorySection}>
          <TextInput
            style={styles.addCategoryInput}
            placeholder="Category name (e.g., Animals)"
            placeholderTextColor="#666666"
            value={newCategoryName}
            onChangeText={setNewCategoryName}
            autoFocus
          />
          <View style={styles.emojiAndRolesRow}>
            {/* Emoji Picker */}
            <TouchableOpacity
              style={styles.emojiPicker}
              onPress={() => setShowEmojiPicker(true)}
            >
              <Text style={styles.emojiLabel}>Icon:</Text>
              <Text style={styles.emojiDisplay}>{newCategoryIcon}</Text>
            </TouchableOpacity>
            {/* Checkbox */}
            <TouchableOpacity
              style={styles.rolesCheckbox}
              onPress={() => setNewCategoryUseRoles(v => !v)}
            >
              <Text style={styles.checkboxIcon}>{newCategoryUseRoles ? '✅' : '⬜️'}</Text>
              <Text style={styles.checkboxLabel}>Use roles</Text>
            </TouchableOpacity>
          </View>
          {showEmojiPicker && (
            <View style={styles.emojiPickerModal}>
              {/* Simple emoji selector, you can expand this list */}
              {['⭐','🐾','🎲','🎉','🦁','🐶','🐱','🐼','🐸','🦊','🐵','🐧','🐦','🐤','🐺','🦄','🐝','🐛','🦋','🐌','🐞','🐢','🐍','🦖','🦕','🐙','🦑','🦐','🦞','🦀','🐡','🐠','🐟','🐬','🐳','🐋','🦈','🐊','🐅','🐆','🦓','🦍','🦧','🐘','🦣','🦛','🦏','🐪','🐫','🦒','🦘','🦬','🐃','🐂','🐄','🐎','🐖','🐏','🐑','🦙','🐐','🦌','🐕','🐩','🦮','🐕‍🦺','🐈','🐈‍⬛','🪶','🐓','🦃','🦤','🦚','🦜','🦢','🦩','🕊','🐇','🦝','🦨','🦡','🦫','🦦','🦥','🐁','🐀','🐿','🦔'].map(emoji => (
                <TouchableOpacity key={emoji} onPress={() => { setNewCategoryIcon(emoji); setShowEmojiPicker(false); }}>
                  <Text style={styles.emojiOption}>{emoji}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          <View style={styles.addTopicActions}>
            <TouchableOpacity 
              style={styles.cancelButton}
              onPress={() => {
                setShowAddCategory(false);
                setNewCategoryName('');
                setNewCategoryIcon('⭐');
                setNewCategoryUseRoles(true);
              }}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.saveButton}
              onPress={() => {
                const name = newCategoryName.trim();
                if (!name) return;
                addCategory({ name, icon: newCategoryIcon || '⭐', useRoles: newCategoryUseRoles });
                setShowAddCategory(false);
                setNewCategoryName('');
                setNewCategoryIcon('⭐');
                setNewCategoryUseRoles(true);
              }}
            >
              <Text style={styles.saveButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.categoriesList}
        showsVerticalScrollIndicator={false}
      />

      {/* Category Edit Modal */}
      <Modal
        visible={!!editingCategoryId}
        animationType="slide"
        transparent={true}
        onRequestClose={cancelEditCategory}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Category</Text>
            <TextInput
              style={styles.modalInput}
              value={editingCategoryName}
              onChangeText={setEditingCategoryName}
              placeholder="Category name"
              placeholderTextColor="#999"
            />
            <TextInput
              style={styles.modalInput}
              value={editingCategoryIcon}
              onChangeText={setEditingCategoryIcon}
              placeholder="Icon (emoji or text)"
              placeholderTextColor="#999"
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
              <Text style={{ marginRight: 8, color: 'white' }}>Use Roles</Text>
              <Switch value={editingCategoryUseRoles} onValueChange={setEditingCategoryUseRoles} />
            </View>
            <View style={styles.modalButtons}>
              <Pressable style={[styles.modalButton, styles.modalCancel]} onPress={cancelEditCategory}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </Pressable>
              <Pressable style={[styles.modalButton, styles.modalSave]} onPress={saveEditCategory}>
                <Text style={[styles.modalButtonText, { color: '#fff' }]}>Save</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  addButton: {
    padding: 8,
  },
  categoriesList: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  categoryItem: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  categoryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  categoryEmoji: {
    fontSize: 20,
    marginRight: 12,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    flex: 1,
  },
  categoryActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  editButton: {
    padding: 8,
  },
  deleteButton: {
    padding: 8,
  },
  topicsCount: {
    fontSize: 14,
    color: '#666666',
    marginLeft: 32,
  },
  topicsList: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  topicItem: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  topicHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  topicName: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    flex: 1,
  },
  deleteTopicButton: {
    padding: 8,
  },
  rolesCount: {
    fontSize: 14,
    color: '#666666',
  },
  addTopicSection: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#111111',
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
  },
  addTopicInput: {
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: 'white',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  addTopicActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },
  cancelButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#2a2a2a',
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  saveButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#0A84FF',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  addCategorySection: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#111111',
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
  },
  addCategoryInput: {
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: 'white',
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  emojiAndRolesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginTop: 8,
  },
  emojiPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 12,
  },
  emojiLabel: {
    color: '#aaa',
    fontSize: 16,
    marginRight: 6,
  },
  emojiDisplay: {
    fontSize: 24,
  },
  rolesCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  checkboxIcon: {
    fontSize: 22,
    marginRight: 6,
  },
  checkboxLabel: {
    color: 'white',
    fontSize: 16,
  },
  emojiPickerModal: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#111',
    borderRadius: 12,
    padding: 12,
    marginVertical: 8,
    maxHeight: 180,
  },
  emojiOption: {
    fontSize: 28,
    margin: 6,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    width: '100%',
    maxWidth: 520,
    backgroundColor: '#111',
    borderRadius: 12,
    padding: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginBottom: 12,
  },
  modalInput: {
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: 'white',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
    marginTop: 8,
  },
  modalButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  modalCancel: {
    backgroundColor: '#2a2a2a',
  },
  modalSave: {
    backgroundColor: '#0A84FF',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
});
