import React, { useCallback, useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, TextInput, Alert, FlatList } from 'react-native';
import { router } from 'expo-router';
import { ChevronLeft, Plus, Trash2, Edit2 } from 'lucide-react-native';
import { useTopicsStore, Topic } from '@/stores/topics-store';
import { useCategoriesStore, builtinCategories } from '@/stores/categories-store';

export default function TopicsScreen() {
  const { topics, addTopic, removeTopic } = useTopicsStore();
  const { customCategories, addCategory, removeCategory, updateCategory, getAllCategories, getCategory } = useCategoriesStore();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [newTopicName, setNewTopicName] = useState<string>('');
  const [newCategoryName, setNewCategoryName] = useState<string>('');
  const [newCategoryIcon, setNewCategoryIcon] = useState<string>('⭐');
  const [newCategoryUseRoles, setNewCategoryUseRoles] = useState<boolean>(true);
  const [showAddCategory, setShowAddCategory] = useState<boolean>(false);
  const [showAddTopic, setShowAddTopic] = useState<boolean>(false);

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
              onPress={() => setSelectedCategory(item.id)}
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
          <TouchableOpacity 
            style={styles.deleteTopicButton}
            onPress={() => handleDeleteTopic(item.id)}
          >
            <Trash2 size={14} color="#FF3B30" />
          </TouchableOpacity>
        </View>
        <Text style={styles.rolesCount}>{item.roles.length} roles</Text>
      </TouchableOpacity>
    );
  }, [handleDeleteTopic]);

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
          <TextInput
            style={[styles.addCategoryInput, { marginTop: 8 }]}
            placeholder="Icon (emoji, e.g., 🐾)"
            placeholderTextColor="#666666"
            value={newCategoryIcon}
            onChangeText={setNewCategoryIcon}
            maxLength={4}
          />
          <TouchableOpacity
            style={{ marginTop: 8 }}
            onPress={() => setNewCategoryUseRoles(v => !v)}
          >
            <Text style={{ color: 'white' }}>
              {newCategoryUseRoles ? '☑ Use roles' : '☐ No roles'}
            </Text>
          </TouchableOpacity>
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
});
