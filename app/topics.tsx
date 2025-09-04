import React, { useCallback, useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, TextInput, Alert, FlatList, Platform } from 'react-native';
import { router } from 'expo-router';
import { ChevronLeft, Plus, Trash2, Search, LayoutGrid } from 'lucide-react-native';
import { useTopicsStore, Topic } from '@/stores/topics-store';

export default function TopicsScreen() {
  console.log('[Topics] render TopicsScreen');
  const { topics, addTopic, removeTopic } = useTopicsStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('locations');
  const [newTopicName, setNewTopicName] = useState<string>('');
  const [newTopicRoles, setNewTopicRoles] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [sort, setSort] = useState<'alpha' | 'recent'>('alpha');

  const categories: Array<{ id: string; name: string; icon: string }> = [
    { id: 'locations', name: 'Locations', icon: '📍' },
    { id: 'movies', name: 'Movies', icon: '🎬' },
    { id: 'tv-shows', name: 'TV Shows', icon: '📺' },
    { id: 'pop-culture', name: 'Pop Culture', icon: '⭐' },
    { id: 'events', name: 'Events', icon: '🎉' },
    { id: 'famous-people', name: 'Famous People', icon: '👑' },
  ];

  const categoryTopics = useMemo(() => topics.filter((t) => t.category === selectedCategory), [topics, selectedCategory]);

  const filteredTopics = useMemo(() => {
    const base = categoryTopics.filter((t) => t.name.toLowerCase().includes(search.toLowerCase()));
    if (sort === 'alpha') return [...base].sort((a, b) => a.name.localeCompare(b.name));
    return base;
  }, [categoryTopics, search, sort]);

  const categoryEmoji = useCallback((id: string) => {
    switch (id) {
      case 'locations':
        return '📍';
      case 'movies':
        return '🎬';
      case 'tv-shows':
        return '📺';
      case 'pop-culture':
        return '⭐';
      case 'events':
        return '🎉';
      case 'famous-people':
        return '👑';
      default:
        return '🗂️';
    }
  }, []);

  const presetSuggestions = useMemo(() => {
    if (selectedCategory === 'locations') return ['Coffee Shop ☕', 'University 🎓', 'Bus Station 🚌', 'Pharmacy 💊', 'Post Office 📮'];
    if (selectedCategory === 'movies') return ['Spider-Man 🕷️', 'Avatar 🌊', 'Top Gun ✈️'];
    if (selectedCategory === 'tv-shows') return ['The Witcher ⚔️', 'The Last of Us 🍄'];
    if (selectedCategory === 'pop-culture') return ['Esports Arena 🎮', 'Podcast Studio 🎙️'];
    if (selectedCategory === 'events') return ['Hackathon 💻', 'Job Fair 🧑\u200d💼'];
    if (selectedCategory === 'famous-people') return ['Taylor Swift ✨', 'Elon Musk 🚀', 'Lionel Messi ⚽', 'Beyoncé 👑', 'MrBeast 🎁'];
    return [];
  }, [selectedCategory]);

  const handleAddTopic = useCallback(() => {
    console.log('[Topics] Add topic pressed', { selectedCategory, newTopicName, newTopicRoles });
    if (!newTopicName.trim() || !newTopicRoles.trim()) {
      Alert.alert('Missing info', 'Enter a topic name and at least 3 roles separated by commas.');
      return;
    }
    const roles = newTopicRoles
      .split(',')
      .map((r) => r.trim())
      .filter((r) => r);
    if (roles.length < 3) {
      Alert.alert('Not enough roles', 'Please add at least 3 roles.');
      return;
    }
    addTopic({ name: newTopicName.trim(), category: selectedCategory, roles });
    setNewTopicName('');
    setNewTopicRoles('');
  }, [addTopic, newTopicName, newTopicRoles, selectedCategory]);

  const handleDeleteTopic = useCallback(
    (topicId: string) => {
      Alert.alert('Delete Topic', 'Are you sure you want to delete this topic?', [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => removeTopic(topicId) },
      ]);
    },
    [removeTopic]
  );

  const renderTopic = useCallback(
    ({ item }: { item: Pick<Topic, 'id' | 'name' | 'roles' | 'category'> }) => (
      <TouchableOpacity testID={`topic-card-${item.id}`} style={styles.topicCard} activeOpacity={0.9}>
        <View style={styles.topicHeader}>
          <Text numberOfLines={2} style={styles.topicName}>
            {item.name}
          </Text>
          <TouchableOpacity testID={`delete-topic-${item.id}`} style={styles.deleteButton} onPress={() => handleDeleteTopic(item.id)}>
            <Trash2 size={14} color="#FF3B30" />
          </TouchableOpacity>
        </View>
        <View style={styles.emojiBadge}>
          <Text style={styles.emojiText}>{categoryEmoji(selectedCategory)}</Text>
        </View>
        <View style={styles.rolesContainer}>
          {item.roles.slice(0, 3).map((role: string, index: number) => (
            <View key={index} style={styles.roleTag}>
              <Text style={styles.roleText}>{role}</Text>
            </View>
          ))}
          {item.roles.length > 3 && (
            <View style={styles.moreRolesTag}>
              <Text style={styles.moreRolesText}>+{item.roles.length - 3}</Text>
            </View>
          )}
        </View>
        <View style={styles.cardFooter}>
          <Text style={styles.footerText}>{item.roles.length} roles</Text>
          <Text style={styles.footerText}>{Platform.OS === 'web' ? '🖱️' : '📱'}</Text>
        </View>
      </TouchableOpacity>
    ),
    [categoryEmoji, handleDeleteTopic, selectedCategory]
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity testID="back-button" onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={24} color="#0A84FF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Manage Topics ✨</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryTabs}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            testID={`category-${category.id}`}
            style={[styles.categoryTab, selectedCategory === category.id && styles.categoryTabSelected]}
            onPress={() => setSelectedCategory(category.id)}
          >
            <Text style={styles.categoryTabIcon}>{category.icon}</Text>
            <Text style={[styles.categoryTabText, selectedCategory === category.id && styles.categoryTabTextSelected]}>
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.searchRow}>
          <View style={styles.searchInputWrap}>
            <Search size={16} color="#888" />
            <TextInput
              testID="search-input"
              style={styles.searchInput}
              placeholder="Search topics 🔎"
              placeholderTextColor="#666666"
              value={search}
              onChangeText={setSearch}
            />
          </View>
          <TouchableOpacity
            testID="sort-toggle"
            onPress={() => setSort((s) => (s === 'alpha' ? 'recent' : 'alpha'))}
            style={styles.sortButton}
          >
            <LayoutGrid size={16} color="#0A84FF" />
            <Text style={styles.sortButtonText}>{sort === 'alpha' ? 'A→Z' : 'Recent'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.addSection}>
          <Text style={styles.sectionTitle}>Add New Topic 💡</Text>
          <TextInput
            testID="new-topic-name"
            style={styles.input}
            placeholder={`Topic name ${selectedCategory === 'famous-people' ? '👤' : '📝'}`}
            placeholderTextColor="#666666"
            value={newTopicName}
            onChangeText={setNewTopicName}
          />
          {presetSuggestions.length > 0 && (
            <View style={styles.presetChips}>
              {presetSuggestions.map((p) => (
                <TouchableOpacity key={p} testID={`preset-${p}`} onPress={() => setNewTopicName(p)} style={styles.chip}>
                  <Text style={styles.chipText}>{p}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          <TextInput
            testID="new-topic-roles"
            style={[styles.input, styles.rolesInput]}
            placeholder="Roles (comma separated) 👥 e.g. Fan, Manager, Security"
            placeholderTextColor="#666666"
            value={newTopicRoles}
            onChangeText={setNewTopicRoles}
            multiline
          />
          <TouchableOpacity testID="add-topic" style={styles.addButton} onPress={handleAddTopic}>
            <Plus size={20} color="#0A84FF" />
            <Text style={styles.addButtonText}>Add Topic</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.topicsSection}>
          <Text style={styles.sectionTitle}>
            {categories.find((c) => c.id === selectedCategory)?.name} ({filteredTopics.length})
          </Text>
          <FlatList
            data={filteredTopics}
            renderItem={renderTopic}
            keyExtractor={(item) => item.id}
            numColumns={3}
            columnWrapperStyle={styles.topicsGrid}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.topicsList}
          />
        </View>
      </ScrollView>
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
  placeholder: {
    width: 40,
  },
  categoryTabs: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  categoryTab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 12,
    borderRadius: 20,
    backgroundColor: '#111111',
    gap: 8,
    borderWidth: 1,
    borderColor: '#1f1f1f',
  },
  categoryTabSelected: {
    backgroundColor: '#0A84FF',
    borderColor: '#0A84FF',
  },
  categoryTabIcon: {
    fontSize: 16,
  },
  categoryTabText: {
    color: '#9ca3af',
    fontSize: 14,
    fontWeight: '500',
  },
  categoryTabTextSelected: {
    color: 'white',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 8,
  },
  searchInputWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#111111',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderColor: '#1f1f1f',
    borderWidth: 1,
  },
  searchInput: {
    flex: 1,
    color: 'white',
    fontSize: 16,
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#0A84FF',
    backgroundColor: '#0a0a0a',
  },
  sortButtonText: {
    color: '#0A84FF',
    fontSize: 14,
    fontWeight: '600',
  },
  addSection: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#111111',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    color: 'white',
    fontSize: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#1f1f1f',
  },
  presetChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12,
  },
  chip: {
    backgroundColor: '#0f172a',
    borderColor: '#1e3a8a',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },
  chipText: {
    color: '#93c5fd',
    fontSize: 12,
    fontWeight: '600',
  },
  rolesInput: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a0a0a',
    borderRadius: 12,
    paddingVertical: 14,
    gap: 8,
    borderWidth: 1,
    borderColor: '#0A84FF',
  },
  addButtonText: {
    color: '#0A84FF',
    fontSize: 16,
    fontWeight: '500',
  },
  topicsSection: {
    marginBottom: 40,
  },
  topicsGrid: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  topicsList: {
    paddingBottom: 20,
  },
  topicCard: {
    width: '31%',
    backgroundColor: '#111111',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    aspectRatio: 1,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#1f1f1f',
  },
  topicHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  topicName: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
    flex: 1,
    lineHeight: 16,
  },
  deleteButton: {
    padding: 4,
    marginLeft: 4,
  },
  emojiBadge: {
    position: 'absolute',
    right: 8,
    top: 6,
    backgroundColor: '#0a0a0a',
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: '#1f1f1f',
  },
  emojiText: {
    fontSize: 12,
  },
  rolesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    flex: 1,
  },
  roleTag: {
    backgroundColor: '#1f2937',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  roleText: {
    color: '#cbd5e1',
    fontSize: 10,
    fontWeight: '500',
  },
  moreRolesTag: {
    backgroundColor: '#0A84FF',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  moreRolesText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '500',
  },
  cardFooter: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    color: '#8b949e',
    fontSize: 11,
    fontWeight: '600',
  },
});