import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, TextInput, Alert, FlatList, Modal } from 'react-native';
import { router } from 'expo-router';
import { ChevronLeft, Plus, Trash2, Edit2 } from 'lucide-react-native';
import { useRangeTopicsStore, CustomRangeQuestion, RangeCategory } from '@/stores/range-topics-store';
import { useCategoriesStore } from '@/stores/categories-store';
import { useTheme } from '@/hooks/useTheme';
import { getQuestionCategories, getQuestionsByCategory } from '@/data/range-questions';

interface CategoryWithRoles extends RangeCategory {
  useRoles: boolean;
}

function getAllEmojis() {
  return [
    '🎯','📊','🎲','⚡','🏆','🎮','🎪','🎨','⭐','✨','🔥','🎉','🎈','🎁','🎀','🎊','💎','🔮','🔔','🎶','🎵','🎤','🎧','📣','📢','🔊','🔈','💡','📚','📖','💰','💸','💳','📅','📆','🗓','🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🍈','🍒','🍑','🥭','🍍','🥥','🥝','🍅','🍆','🥑','🥦','🥬','🥒','🌽','🥕','🥔','🍠','🥐','🍞','🥖','🥨','🧀','🥚','🍳','🥓','🥩','🍗','🍖','🌭','🍔','🍟','🍕','🥪','🥙','🌮','🌯','🥗','🍲','🍜','🍝','🍣','🍤','🍙','🍚','🍱','🥟','🍥','🍡','🍦','🍨','🍧','🎂','🍰','🧁','🥧','🍫','🍬','🍭','🍮','😀','😃','😄','😊','😍','😘','🥰','😎','🤓','😜','😛','😇','🥳','🤗','🙂','🙃','😉','😌','😋','😻','🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐸','🐵','🐔','🐧','🐦','🐤','🦆','🦅','🦉','🦇','🐺','🐗','🐴','🦄','🐝','🐛','🦋','🐌','🐞','🐜','🦗','🕷','🦂','🦀','🐍','🐢','🦎','🦖','🦕','🐙','🦑','🦐','🦞','🐠','🐟','🐬','🐳','🦈','🐊','🐅','🐆','🦒','🦓','🦍','🦧','🐘','🦛','🦏','🐪','🐫','🦙','🐐','🦌','🐕','🐩','🦮','🐈','🐓','🦃','🦚','🦜','🦢','🦩','🕊','🐇','🦝','🦨','🦡','🦫','🦦','🦥'
  ];
}

export default function RangeTopicsScreen() {
  const { colors } = useTheme();
  const { 
    customQuestions, 
    customCategories,
    addCustomQuestion,
    updateCustomQuestion,
    removeCustomQuestion,
    removeBuiltinQuestion,
    addCustomCategory,
    updateCustomCategory,
    removeCustomCategory,
    getQuestionsForCategory,
    deletedBuiltinQuestionIds
  } = useRangeTopicsStore();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [showAddQuestion, setShowAddQuestion] = useState(false);
  const [editingCategory, setEditingCategory] = useState<RangeCategory | null>(null);
  const [editingQuestion, setEditingQuestion] = useState<CustomRangeQuestion | null>(null);
  const [categoryName, setCategoryName] = useState('');
  const [categoryIcon, setCategoryIcon] = useState('🎯');
  const [useKeyboardEmoji, setUseKeyboardEmoji] = useState<boolean>(false);
  const [manualEmoji, setManualEmoji] = useState<string>('');
  const [questionPrompt, setQuestionPrompt] = useState('');
  const [questionRange, setQuestionRange] = useState('');
  const [questionCategory, setQuestionCategory] = useState('');

  const makeId = (s: string) => s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const { getCategory: getGlobalCategory } = useCategoriesStore();

  const allCategories: CategoryWithRoles[] = [
    ...getQuestionCategories().map(cat => {
      const slug = makeId(cat);
      const globalCat = getGlobalCategory(slug);
      return {
        id: cat,
        name: cat,
        icon: getCategoryIcon(cat),
        isCustom: false,
        useRoles: globalCat?.useRoles ?? true,
      };
    }),
    ...customCategories.map(cat => ({
      ...cat,
      isCustom: true,
      useRoles: true,
    })),
  ];

  const getBuiltinQuestionsFor = (categoryId: string) => {
    return getQuestionsByCategory(categoryId);
  };

  const handleAddCategory = () => {
    if (!categoryName.trim()) {
      Alert.alert('Error', 'Please enter a category name.');
      return;
    }
    addCustomCategory({
      name: categoryName.trim(),
      icon: categoryIcon,
    });
    setCategoryName('');
    setCategoryIcon('🎯');
    setShowAddCategory(false);
  };

  const handleEditCategory = (category: CategoryWithRoles) => {
    setEditingCategory(category);
    setCategoryName(category.name);
    setCategoryIcon(category.icon);
    setShowAddCategory(true);
  };

  const handleUpdateCategory = () => {
    if (!editingCategory || !categoryName.trim()) return;
    if (!editingCategory.isCustom) {
      Alert.alert('Built-in category', 'You can’t edit built-in categories.');
      setEditingCategory(null);
      setCategoryName('');
      setCategoryIcon('🎯');
      setShowAddCategory(false);
      return;
    }
    updateCustomCategory(editingCategory.id, {
      name: categoryName.trim(),
      icon: categoryIcon,
    });
    setEditingCategory(null);
    setCategoryName('');
    setCategoryIcon('🎯');
    setShowAddCategory(false);
  };

  const handleDeleteCategory = (category: CategoryWithRoles) => {
    if (!category.isCustom) {
      Alert.alert('Built-in category', 'You can’t delete built-in categories.');
      return;
    }
    const questions = getQuestionsForCategory(category.id);
    if (questions.length > 0) {
      Alert.alert(
        'Delete Category',
        `This category has ${questions.length} custom questions. Delete all questions in this category?`,
        [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Delete',
            style: 'destructive',
            onPress: () => {
              questions.forEach(q => removeCustomQuestion(q.id));
              removeCustomCategory(category.id);
            },
          },
        ]
      );
    } else {
      removeCustomCategory(category.id);
    }
  };

  const handleAddQuestion = () => {
    if (!questionPrompt.trim() || !questionRange.trim() || !questionCategory) {
      Alert.alert('Error', 'Please fill in all required fields.');
      return;
    }
    addCustomQuestion({
      prompt: questionPrompt.trim(),
      rangePrompt: questionRange.trim(),
      category: questionCategory,
    });
    setShowAddQuestion(false);
    setEditingQuestion(null);
    setQuestionPrompt('');
    setQuestionRange('');
    setQuestionCategory('');
  };

  const handleUpdateQuestion = () => {
    if (!editingQuestion) return;
    if (!questionPrompt.trim() || !questionRange.trim() || !questionCategory) {
      Alert.alert('Error', 'Please fill in all required fields.');
      return;
    }
    updateCustomQuestion(editingQuestion.id, {
      prompt: questionPrompt.trim(),
      rangePrompt: questionRange.trim(),
      category: questionCategory,
    });
    setShowAddQuestion(false);
    setEditingQuestion(null);
    setQuestionPrompt('');
    setQuestionRange('');
    setQuestionCategory('');
  };

  const handleEditQuestion = (q: CustomRangeQuestion) => {
    setEditingQuestion(q);
    setQuestionPrompt(q.prompt);
    setQuestionRange(q.rangePrompt);
    setQuestionCategory(q.category);
    setShowAddQuestion(true);
  };

  const handleDeleteQuestion = (q: CustomRangeQuestion) => {
    if (!q.isCustom) {
      Alert.alert('Delete Question', 'Are you sure you want to delete this built-in question?', [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => removeBuiltinQuestion(q.id) },
      ]);
      return;
    }
    Alert.alert('Delete Question', 'Are you sure you want to delete this question?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => removeCustomQuestion(q.id) },
    ]);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <TouchableOpacity 
          onPress={() => selectedCategory ? setSelectedCategory(null) : router.back()} 
          style={styles.backButton}
        >
          <ChevronLeft size={24} color={colors.primary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>
          {selectedCategory ? allCategories.find(c => c.id === selectedCategory)?.name || 'Questions' : 'Range Game Topics'}
        </Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            if (selectedCategory) {
              setQuestionCategory(selectedCategory);
              setShowAddQuestion(true);
            } else {
              setShowAddCategory(true);
            }
          }}
        >
          <Plus size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>

      {selectedCategory ? (
        <FlatList
          data={[
            ...getBuiltinQuestionsFor(selectedCategory)
              .filter(q => !deletedBuiltinQuestionIds.includes(q.id))
              .map(q => ({ ...q, isCustom: false })),
            ...getQuestionsForCategory(selectedCategory).map(q => ({ ...q, isCustom: true })),
          ]}
          renderItem={({ item }) => (
            <View style={[styles.categoryItem, { backgroundColor: colors.surface, borderColor: colors.border }]}> 
              <View style={styles.categoryHeader}>
                <View style={styles.categoryInfo}>
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.categoryName, { color: colors.text }]}>{item.prompt}</Text>
                    <Text style={[styles.topicsCount, { color: colors.textSecondary, textAlign: 'left' }]}>Range: {item.rangePrompt}</Text>
                  </View>
                </View>
                <View style={styles.categoryActions}>
                  <TouchableOpacity onPress={() => handleEditQuestion(item)} style={styles.editButton}>
                    <Edit2 size={16} color={colors.primary} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleDeleteQuestion(item)} style={styles.deleteButton}>
                    <Trash2 size={16} color="#FF3B30" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.questionsList}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <FlatList
          data={allCategories}
          renderItem={({ item }) => {
            const builtinCount = getBuiltinQuestionsFor(item.id).length;
            const customCount = getQuestionsForCategory(item.id).length;
            return (
              <View style={[styles.categoryItem, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                <TouchableOpacity
                  style={styles.categoryHeader}
                  onPress={() => setSelectedCategory(item.id)}
                >
                  <View style={styles.categoryInfo}>
                    <Text style={[styles.categoryEmoji, { color: colors.text }]}>{item.icon}</Text>
                    <Text style={[styles.categoryName, { color: colors.text }]}>{item?.name ?? 'Unknown'}</Text>
                  </View>
                  <View style={styles.categoryActions}>
                    <TouchableOpacity onPress={() => handleEditCategory(item)} style={styles.editButton}>
                      <Edit2 size={16} color={colors.primary} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleDeleteCategory(item)} style={styles.deleteButton}>
                      <Trash2 size={16} color="#FF3B30" />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
                <Text style={[styles.topicsCount, { color: colors.textSecondary }]}>{builtinCount + customCount} questions • {item.useRoles ? 'Roles on' : 'No roles'}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.categoriesList}
          showsVerticalScrollIndicator={false}
        />
      )}

      <Modal
        visible={showAddCategory}
        transparent={true}
        animationType="slide"
        onRequestClose={() => {
          setShowAddCategory(false);
          setEditingCategory(null);
          setCategoryName('');
          setCategoryIcon('🎯');
          setUseKeyboardEmoji(false);
          setManualEmoji('');
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: '#111' }]}>
            <Text style={[styles.modalTitle, { color: 'white' }]}> 
              {editingCategory ? 'Edit Category' : 'Add Category'}
            </Text>
            <TextInput
              style={[styles.modalInput, { backgroundColor: '#1a1a1a', color: 'white', borderColor: '#2a2a2a' }]}
              placeholder="Category name"
              placeholderTextColor="#999"
              value={categoryName}
              onChangeText={setCategoryName}
              autoFocus
            />
            <View style={styles.emojiAndRolesRow}>
              <TouchableOpacity
                style={[styles.emojiPicker, { backgroundColor: '#222' }]}
                onPress={() => setUseKeyboardEmoji(true)}
              >
                <Text style={[styles.emojiLabel, { color: 'white' }]}>Icon:</Text>
                <Text style={styles.emojiDisplay}>{categoryIcon}</Text>
              </TouchableOpacity>
            </View>
            {useKeyboardEmoji && (
              <View style={[styles.emojiPickerModal, { backgroundColor: '#222' }]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <Text style={[styles.emojiPickerTitle, { color: 'white' }]}>Pick an emoji</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => setUseKeyboardEmoji(false)} style={{ marginRight: 12 }}>
                      <Text style={{ color: '#0A84FF', fontSize: 14 }}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <TextInput
                  style={[styles.emojiSearchInput, { backgroundColor: '#1a1a1a', color: 'white', borderColor: '#2a2a2a' }]}
                  placeholder="Type or paste emoji"
                  placeholderTextColor="#666"
                  value={manualEmoji}
                  onChangeText={setManualEmoji}
                  autoFocus
                />
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', gap: 8, marginTop: 8 }}>
                  <TouchableOpacity
                    onPress={() => { setManualEmoji(''); setUseKeyboardEmoji(false); }}
                    style={[styles.cancelButton, { backgroundColor: '#2a2a2a' }]}
                  >
                    <Text style={[styles.cancelButtonText, { color: 'white' }]}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      if (manualEmoji.trim()) {
                        setCategoryIcon(Array.from(manualEmoji.trim())[0]);
                        setManualEmoji('');
                        setUseKeyboardEmoji(false);
                      }
                    }}
                    style={[styles.saveButton, { backgroundColor: '#0A84FF' }]}
                  >
                    <Text style={[styles.saveButtonText, { color: 'white' }]}>Use</Text>
                  </TouchableOpacity>
                </View>
                <FlatList
                  data={getAllEmojis()}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={[styles.emojiOption, { backgroundColor: categoryIcon === item ? '#0A84FF' : '#222' }]}
                      onPress={() => {
                        setCategoryIcon(item);
                        setUseKeyboardEmoji(false);
                      }}
                    >
                      <Text style={styles.emojiOptionText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item) => item}
                  numColumns={8}
                  contentContainerStyle={[styles.emojiGrid, { paddingBottom: 20 }]}
                  showsVerticalScrollIndicator={true}
                  style={{ maxHeight: 200 }}
                />
              </View>
            )}
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalCancel, { backgroundColor: '#2a2a2a' }]}
                onPress={() => {
                  setShowAddCategory(false);
                  setEditingCategory(null);
                  setCategoryName('');
                  setCategoryIcon('🎯');
                  setUseKeyboardEmoji(false);
                  setManualEmoji('');
                }}
              >
                <Text style={[styles.modalButtonText, { color: 'white' }]}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalSave, { backgroundColor: '#0A84FF' }]}
                onPress={editingCategory ? handleUpdateCategory : handleAddCategory}
              >
                <Text style={[styles.modalButtonText, { color: 'white' }]}> 
                  {editingCategory ? 'Update' : 'Add'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        visible={showAddQuestion}
        transparent={true}
        animationType="slide"
        onRequestClose={() => {
          setShowAddQuestion(false);
          setEditingQuestion(null);
          setQuestionPrompt('');
          setQuestionRange('');
          setQuestionCategory('');
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: '#111' }]}>
            <Text style={[styles.modalTitle, { color: 'white' }]}>
              {editingQuestion ? 'Edit Question' : 'Add Question'}
            </Text>
            <TextInput
              style={[styles.modalInput, { backgroundColor: '#1a1a1a', color: 'white', borderColor: '#2a2a2a' }]}
              placeholder="Question (e.g., 'Age you learned to drive')"
              placeholderTextColor="#999"
              value={questionPrompt}
              onChangeText={setQuestionPrompt}
              autoFocus
            />
            <TextInput
              style={[styles.modalInput, { backgroundColor: '#1a1a1a', color: 'white', borderColor: '#2a2a2a' }]}
              placeholder="Range (e.g., 'Range: 10-25')"
              placeholderTextColor="#999"
              value={questionRange}
              onChangeText={setQuestionRange}
            />
            <View style={styles.pickerContainer}>
              <Text style={[styles.pickerLabel, { color: 'white' }]}>Category:</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryPicker}>
                {allCategories.map((category) => (
                  <TouchableOpacity
                    key={category.id}
                    style={[
                      styles.categoryPickerOption,
                      { 
                        backgroundColor: questionCategory === category.id ? '#0A84FF' : '#1a1a1a',
                        borderColor: '#2a2a2a'
                      }
                    ]}
                    onPress={() => setQuestionCategory(category.id)}
                  >
                    <Text style={styles.categoryPickerIcon}>{category.icon}</Text>
                    <Text style={[
                      styles.categoryPickerText,
                      { color: questionCategory === category.id ? 'white' : 'white' }
                    ]}>
                      {category?.name ?? 'Unknown'}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalCancel, { backgroundColor: '#2a2a2a' }]}
                onPress={() => {
                  setShowAddQuestion(false);
                  setEditingQuestion(null);
                  setQuestionPrompt('');
                  setQuestionRange('');
                  setQuestionCategory('');
                }}
              >
                <Text style={[styles.modalButtonText, { color: 'white' }]}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalSave, { backgroundColor: '#0A84FF' }]}
                onPress={editingQuestion ? handleUpdateQuestion : handleAddQuestion}
              >
                <Text style={[styles.modalButtonText, { color: 'white' }]}>
                  {editingQuestion ? 'Update' : 'Add'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

function getCategoryIcon(category: string): string {
  const iconMap: Record<string, string> = {
    'Life Events': '🎂',
    'Food': '🍕',
    'Money': '💰',
    'Relationships': '💝',
    'Work': '💼',
    'Education': '📚',
    'Sports': '⚽',
    'Music': '🎵',
    'Fashion': '👗',
    'Home': '🏠',
    'Miscellaneous': '🔮',
    'Daily Life': '🕒',
    'Hobbies': '🎨',
    'Health': '💪',
    'Technology': '💻',
    'Entertainment': '🎬',
    'Preferences': '⭐',
    'Social': '🫂',
    'Travel': '✈️',
    'Physical': '🏋️',
    'Skills': '🧠',
    'Culture': '🏛️',
    'Family': '👪',
    'Grooming': '💇',
    'Chores': '🧺',
    'Maintenance': '🛠️',
    'Habits': '🔁',
    'Knowledge': '📖',
    'Beliefs': '🕊️',
    'Experience': '🎟️',
    'Communication': '💬'
  };
  return iconMap[category] || '❓';
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
  content: {
    flex: 1,
  },
  categoriesList: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  questionsList: {
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
    color: 'white',
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
    textAlign: 'left',
    marginLeft: 0,
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
  topicActions: {
    flexDirection: 'row',
    gap: 12,
  },
  editTopicButton: {
    padding: 8,
  },
  deleteTopicButton: {
    padding: 8,
  },
  rolesCount: {
    fontSize: 14,
    color: '#666666',
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
    marginRight: 8,
  },
  emojiLabel: {
    color: 'white',
    fontSize: 16,
    marginRight: 6,
  },
  emojiDisplay: {
    fontSize: 24,
    marginRight: 6,
  },
  emojiPickerModal: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    backgroundColor: '#222',
    borderRadius: 16,
    padding: 16,
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
    maxHeight: 300,
    marginVertical: 8,
  },
  emojiPickerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginBottom: 12,
    textAlign: 'center',
  },
  emojiSearchInput: {
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: 'white',
    borderWidth: 1,
    borderColor: '#2a2a2a',
    marginBottom: 8,
  },
  emojiGrid: {
    paddingVertical: 8,
  },
  emojiOption: {
    width: '16.66%',
    alignItems: 'center',
    padding: 6,
  },
  emojiOptionText: {
    fontSize: 28,
  },
  pickerContainer: {
    marginBottom: 16,
  },
  pickerLabel: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
    color: 'white',
  },
  categoryPicker: {
    flexDirection: 'row',
  },
  categoryPickerOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  categoryPickerIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  categoryPickerText: {
    fontSize: 12,
    fontWeight: '500',
    color: 'white',
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
});