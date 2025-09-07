// Helper to get all emojis (flattened)
function getAllEmojis() {
  // Use a similar emoji list as topics.tsx
  return [
    '🎯','📊','🎲','⚡','🏆','🎮','🎪','🎨','⭐','✨','🔥','🎉','🎈','🎁','🎀','🎊','💎','🔮','🔔','🎶','🎵','🎤','🎧','📣','📢','🔊','🔈','💡','📚','📖','💰','💸','💳','📅','📆','🗓','🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🍈','🍒','🍑','🥭','🍍','🥥','🥝','🍅','🍆','🥑','🥦','🥬','🥒','🌽','🥕','🥔','🍠','🥐','🍞','🥖','🥨','🧀','🥚','🍳','🥓','🥩','🍗','🍖','🌭','🍔','🍟','🍕','🥪','🥙','🌮','🌯','🥗','🍲','🍜','🍝','🍣','🍤','🍙','🍚','🍱','🥟','🍥','🍡','🍦','🍨','🍧','🎂','🍰','🧁','🥧','🍫','🍬','🍭','🍮','😀','😃','😄','😊','😍','😘','🥰','😎','🤓','😜','😛','😇','🥳','🤗','🙂','🙃','😉','😌','😋','😻','🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐸','🐵','🐔','🐧','🐦','🐤','🦆','🦅','🦉','🦇','🐺','🐗','🐴','🦄','🐝','🐛','🦋','🐌','🐞','🐜','🦗','🕷','🦂','🦀','🐍','🐢','🦎','🦖','🦕','🐙','🦑','🦐','🦞','🐠','🐟','🐬','🐳','🦈','🐊','🐅','🐆','🦒','🦓','🦍','🦧','🐘','🦛','🦏','🐪','🐫','🦙','🐐','🦌','🐕','🐩','🦮','🐈','🐓','🦃','🦚','🦜','🦢','🦩','🕊','🐇','🦝','🦨','🦡','🦫','🦦','🦥'
  ];
}
// Helper to get all emojis (flattened)
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, TextInput, Alert, FlatList, Modal } from 'react-native';
import { router } from 'expo-router';
import { ChevronLeft, Plus, Trash2, Edit2, Target } from 'lucide-react-native';
import { useRangeTopicsStore, CustomRangeQuestion, RangeCategory } from '@/stores/range-topics-store';
import { useTheme } from '@/hooks/useTheme';
import { getQuestionCategories } from '@/data/range-questions';

export default function RangeTopicsScreen() {
  const { colors } = useTheme();
  const { 
    customQuestions, 
    customCategories,
    addCustomQuestion,
    updateCustomQuestion,
    removeCustomQuestion,
    addCustomCategory,
    updateCustomCategory,
    removeCustomCategory,
    getQuestionsForCategory
  } = useRangeTopicsStore();

  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [showAddQuestion, setShowAddQuestion] = useState(false);
  const [editingCategory, setEditingCategory] = useState<RangeCategory | null>(null);
  const [editingQuestion, setEditingQuestion] = useState<CustomRangeQuestion | null>(null);

  // Category form state
  const [categoryName, setCategoryName] = useState('');
  const [categoryIcon, setCategoryIcon] = useState('🎯');
  const [useKeyboardEmoji, setUseKeyboardEmoji] = useState<boolean>(false);
  const [manualEmoji, setManualEmoji] = useState<string>('');

  // Question form state
  const [questionPrompt, setQuestionPrompt] = useState('');
  const [questionRange, setQuestionRange] = useState('');
  const [questionCategory, setQuestionCategory] = useState('');
  const [questionExpectedRange, setQuestionExpectedRange] = useState('');

  // Get all available categories (default + custom)
  const allCategories = [
    ...getQuestionCategories().map(cat => ({ 
      id: cat, 
      name: cat, 
      icon: getCategoryIcon(cat), 
      isCustom: false 
    })),
    ...customCategories
  ];

  // get built-in questions for a category
  const getBuiltinQuestionsFor = (catId: string) => {
    const { rangeQuestions } = require('@/data/range-questions');
    return rangeQuestions.filter((q: any) => q.category === catId);
  };

  const getTotalQuestionCount = (catId: string) => {
    const builtin = getBuiltinQuestionsFor(catId).length;
    const custom = getQuestionsForCategory(catId).length;
    return builtin + custom;
  };

  const handleAddCategory = () => {
    if (!categoryName.trim()) {
      Alert.alert('Missing Info', 'Please enter a category name.');
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

  const handleEditCategory = (category: RangeCategory) => {
    setEditingCategory(category);
    setCategoryName(category.name);
    setCategoryIcon(category.icon);
    setShowAddCategory(true);
  };

  const handleUpdateCategory = () => {
    if (!editingCategory || !categoryName.trim()) return;

    updateCustomCategory(editingCategory.id, {
      name: categoryName.trim(),
      icon: categoryIcon,
    });

    setEditingCategory(null);
    setCategoryName('');
    setCategoryIcon('🎯');
    setShowAddCategory(false);
  };

  const handleDeleteCategory = (category: RangeCategory) => {
    if (!category.isCustom) {
      Alert.alert('Cannot Delete', 'Built-in categories cannot be deleted.');
      return;
    }

    const questionsCount = getQuestionsForCategory(category.id).length;
    const message = questionsCount > 0 
      ? `This will delete the category and all ${questionsCount} questions in it. Continue?`
      : 'Delete this category?';

    Alert.alert('Delete Category', message, [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => removeCustomCategory(category.id) },
    ]);
  };

  const handleAddQuestion = () => {
    if (!questionPrompt.trim() || !questionRange.trim() || !questionCategory) {
      Alert.alert('Missing Info', 'Please fill in all required fields.');
      return;
    }

    addCustomQuestion({
      prompt: questionPrompt.trim(),
      rangePrompt: questionRange.trim(),
      category: questionCategory,
      expectedRange: questionExpectedRange.trim() || undefined,
    });

    setQuestionPrompt('');
    setQuestionRange('');
    setQuestionCategory('');
    setQuestionExpectedRange('');
    setShowAddQuestion(false);
  };

  const handleEditQuestion = (question: CustomRangeQuestion) => {
    setEditingQuestion(question);
    setQuestionPrompt(question.prompt);
    setQuestionRange(question.rangePrompt);
    setQuestionCategory(question.category);
    setQuestionExpectedRange(question.expectedRange || '');
    setShowAddQuestion(true);
  };

  const handleUpdateQuestion = () => {
    if (!editingQuestion || !questionPrompt.trim() || !questionRange.trim() || !questionCategory) return;

    updateCustomQuestion(editingQuestion.id, {
      prompt: questionPrompt.trim(),
      rangePrompt: questionRange.trim(),
      category: questionCategory,
      expectedRange: questionExpectedRange.trim() || undefined,
    });

    setEditingQuestion(null);
    setQuestionPrompt('');
    setQuestionRange('');
    setQuestionCategory('');
    setQuestionExpectedRange('');
    setShowAddQuestion(false);
  };

  const handleDeleteQuestion = (question: CustomRangeQuestion) => {
    Alert.alert('Delete Question', 'Are you sure you want to delete this question?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => removeCustomQuestion(question.id) },
    ]);
  };

  // (no single selectedCategory mode; categories expand inline)

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: `${colors.primary}20` }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={24} color={colors.primary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Range Game Topics</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => setShowAddCategory(true)}
        >
          <Plus size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        <View style={styles.categoriesGrid}>
          {allCategories.map((category) => {
            const expanded = expandedCategories.includes(category.id);
            const builtinCount = getBuiltinQuestionsFor(category.id).length;
            const customCount = getQuestionsForCategory(category.id).length;
            return (
              <View key={category.id} style={[styles.categoryCard, { backgroundColor: colors.surface }]}> 
                <TouchableOpacity
                  style={styles.categoryHeader}
                  onPress={() => {
                    if (expanded) setExpandedCategories(expandedCategories.filter(id => id !== category.id));
                    else setExpandedCategories([...expandedCategories, category.id]);
                  }}
                >
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                    <Text style={styles.categoryIcon}>{category.icon}</Text>
                    <View>
                      <Text style={[styles.categoryName, { color: colors.text }]}>{category?.name ?? 'Unknown'}</Text>
                      <Text style={[styles.categoryCount, { color: colors.textSecondary }]}>{builtinCount + customCount} questions</Text>
                    </View>
                  </View>
                  <View style={styles.categoryActions}>
                    {category.isCustom && (
                      <>
                        <TouchableOpacity
                          onPress={() => handleEditCategory(category)}
                          style={styles.actionButton}
                        >
                          <Edit2 size={16} color={colors.primary} />
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => handleDeleteCategory(category)}
                          style={styles.actionButton}
                        >
                          <Trash2 size={16} color={colors.error} />
                        </TouchableOpacity>
                      </>
                    )}
                  </View>
                </TouchableOpacity>

                {expanded && (
                  <View style={{ marginTop: 12 }}>
                    {/* Show built-in questions first (read-only) */}
                    {getBuiltinQuestionsFor(category.id).map((q: any) => (
                      <View key={q.id} style={[styles.questionCard, { backgroundColor: colors.surface }]}>
                        <Text style={[styles.questionPrompt, { color: colors.text }]}>{q.prompt}</Text>
                        <Text style={[styles.questionRange, { color: colors.accent }]}>{q.rangePrompt}</Text>
                        {q.expectedRange && <Text style={[styles.questionExpected, { color: colors.textSecondary }]}>{q.expectedRange}</Text>}
                      </View>
                    ))}

                    {/* Custom questions (editable) */}
                    {getQuestionsForCategory(category.id).map((question) => (
                      <View key={question.id} style={[styles.questionCard, { backgroundColor: colors.surface }]}>
                        <View style={styles.questionHeader}>
                          <Text style={[styles.questionPrompt, { color: colors.text }]}>{question.prompt}</Text>
                          <View style={styles.questionActions}>
                            <TouchableOpacity onPress={() => handleEditQuestion(question)} style={styles.actionButton}>
                              <Edit2 size={16} color={colors.primary} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleDeleteQuestion(question)} style={styles.actionButton}>
                              <Trash2 size={16} color={colors.error} />
                            </TouchableOpacity>
                          </View>
                        </View>
                        <Text style={[styles.questionRange, { color: colors.accent }]}>Range: {question.rangePrompt}</Text>
                        {question.expectedRange && <Text style={[styles.questionExpected, { color: colors.textSecondary }]}>Expected: {question.expectedRange}</Text>}
                      </View>
                    ))}

                    <View style={{ marginTop: 8 }}>
                      <TouchableOpacity style={[styles.modalButton, { backgroundColor: colors.primary }]} onPress={() => { setQuestionCategory(category.id); setShowAddQuestion(true); }}>
                        <Text style={[styles.modalButtonText, { color: 'white' }]}>Add Question</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>

      <Modal
        visible={showAddCategory}
        transparent={true}
        animationType="slide"
        onRequestClose={() => {
          setShowAddCategory(false);
          setEditingCategory(null);
          setCategoryName('');
          setCategoryIcon('🎯');
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modal, { backgroundColor: colors.surface, maxHeight: '80%' }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={[styles.modalTitle, { color: colors.text }]}> 
                {editingCategory ? 'Edit Category' : 'Add Category'}
              </Text>
              <TextInput
                style={[styles.input, { backgroundColor: colors.background, color: colors.text, borderColor: colors.border }]}
                placeholder="Category name"
                placeholderTextColor={colors.textSecondary}
                value={categoryName}
                onChangeText={setCategoryName}
                autoFocus
              />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <Text style={styles.emojiPickerTitle}>Pick an emoji</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity onPress={() => setUseKeyboardEmoji(v => !v)} style={{ marginRight: 12 }}>
                    <Text style={{ color: colors.primary }}>{useKeyboardEmoji ? 'Picker' : 'Keyboard'}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setShowAddCategory(false)}>
                    <Text style={{ color: colors.primary, fontSize: 18 }}>✕</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {useKeyboardEmoji ? (
                <View>
                  <TextInput
                    style={[styles.input, { backgroundColor: colors.background, color: colors.text, borderColor: colors.border }]}
                    placeholder="Type or paste emoji"
                    placeholderTextColor={colors.textSecondary}
                    value={manualEmoji}
                    onChangeText={setManualEmoji}
                    autoFocus
                  />
                  <View style={{ flexDirection: 'row', justifyContent: 'flex-end', gap: 8, marginTop: 8 }}>
                    <TouchableOpacity onPress={() => { setManualEmoji(''); setUseKeyboardEmoji(false); }} style={[styles.modalButton, { backgroundColor: colors.background }]}>
                      <Text style={[styles.modalButtonText, { color: colors.text }]}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { if (manualEmoji.trim()) { setCategoryIcon(Array.from(manualEmoji.trim())[0]); setManualEmoji(''); setUseKeyboardEmoji(false); } }} style={[styles.modalButton, { backgroundColor: colors.primary }]}>
                      <Text style={[styles.modalButtonText, { color: '#fff' }]}>Use</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <FlatList
                  data={getAllEmojis()}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={[styles.iconOption, { backgroundColor: categoryIcon === item ? colors.primary : colors.background }]}
                      onPress={() => setCategoryIcon(item)}
                    >
                      <Text style={styles.iconOptionText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item) => item}
                  numColumns={8}
                  contentContainerStyle={[styles.emojiGrid, { paddingBottom: 20 }]}
                  showsVerticalScrollIndicator={true}
                  style={{ maxHeight: 240 }}
                />
              )}
              <View style={styles.modalActions}>
                <TouchableOpacity
                  style={[styles.modalButton, { backgroundColor: colors.background }]}
                  onPress={() => {
                    setShowAddCategory(false);
                    setEditingCategory(null);
                    setCategoryName('');
                    setCategoryIcon('🎯');
                  }}
                >
                  <Text style={[styles.modalButtonText, { color: colors.text }]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, { backgroundColor: colors.primary }]}
                  onPress={editingCategory ? handleUpdateCategory : handleAddCategory}
                >
                  <Text style={[styles.modalButtonText, { color: 'white' }]}> 
                    {editingCategory ? 'Update' : 'Add'}
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Add Question Modal */}
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
          setQuestionExpectedRange('');
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modal, { backgroundColor: colors.surface }]}>
            <Text style={[styles.modalTitle, { color: colors.text }]}>
              {editingQuestion ? 'Edit Question' : 'Add Question'}
            </Text>
            
            <TextInput
              style={[styles.input, { backgroundColor: colors.background, color: colors.text, borderColor: colors.border }]}
              placeholder="Question (e.g., 'Age you learned to drive')"
              placeholderTextColor={colors.textSecondary}
              value={questionPrompt}
              onChangeText={setQuestionPrompt}
              autoFocus
            />

            <TextInput
              style={[styles.input, { backgroundColor: colors.background, color: colors.text, borderColor: colors.border }]}
              placeholder="Range (e.g., 'Range: 10-25')"
              placeholderTextColor={colors.textSecondary}
              value={questionRange}
              onChangeText={setQuestionRange}
            />

            <View style={styles.pickerContainer}>
              <Text style={[styles.pickerLabel, { color: colors.text }]}>Category:</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryPicker}>
                {allCategories.map((category) => (
                  <TouchableOpacity
                    key={category.id}
                    style={[
                      styles.categoryPickerOption,
                      { 
                        backgroundColor: questionCategory === category.id ? colors.primary : colors.background,
                        borderColor: colors.border
                      }
                    ]}
                    onPress={() => setQuestionCategory(category.id)}
                  >
                    <Text style={styles.categoryPickerIcon}>{category.icon}</Text>
                    <Text style={[
                      styles.categoryPickerText,
                      { color: questionCategory === category.id ? 'white' : colors.text }
                    ]}>
                      {category?.name ?? 'Unknown'}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            <TextInput
              style={[styles.input, { backgroundColor: colors.background, color: colors.text, borderColor: colors.border }]}
              placeholder="Expected range (optional, e.g., '13-16')"
              placeholderTextColor={colors.textSecondary}
              value={questionExpectedRange}
              onChangeText={setQuestionExpectedRange}
            />

            <View style={styles.modalActions}>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: colors.background }]}
                onPress={() => {
                  setShowAddQuestion(false);
                  setEditingQuestion(null);
                  setQuestionPrompt('');
                  setQuestionRange('');
                  setQuestionCategory('');
                  setQuestionExpectedRange('');
                }}
              >
                <Text style={[styles.modalButtonText, { color: colors.text }]}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: colors.primary }]}
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
    'Experience': '🎟️'
  };
  return iconMap[category] || '❓';
}

const styles = StyleSheet.create({
  emojiPickerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginBottom: 12,
    textAlign: 'center',
  },
  emojiGrid: {
    paddingVertical: 8,
  },
  iconOption: {
    width: '12.5%',
    alignItems: 'center',
    padding: 6,
  },
  iconOptionText: {
    fontSize: 28,
  },
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
    fontSize: 18,
    fontWeight: '600',
  },
  addButton: {
    padding: 8,
  },
  modeToggle: {
    flexDirection: 'row',
    margin: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 4,
  },
  modeButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  modeButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  categoriesGrid: {
    gap: 16,
  },
  categoryCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  categoryIcon: {
    fontSize: 32,
  },
  categoryActions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    padding: 4,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  categoryCount: {
    fontSize: 14,
  },
  backToCategoriesButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  backToCategoriesText: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 8,
  },
  emptyState: {
    alignItems: 'center',
    padding: 40,
    borderRadius: 12,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
  questionsList: {
    gap: 12,
  },
  questionCard: {
    padding: 16,
    borderRadius: 12,
  },
  questionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  questionPrompt: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    marginRight: 8,
  },
  questionActions: {
    flexDirection: 'row',
    gap: 8,
  },
  questionRange: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  questionExpected: {
    fontSize: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '90%',
    maxWidth: 400,
    borderRadius: 16,
    padding: 24,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  iconSelector: {
    marginBottom: 20,
  },
  iconSelectorLabel: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  iconOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  // Removed duplicate iconOption and iconOptionText styles
  pickerContainer: {
    marginBottom: 16,
  },
  pickerLabel: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
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
  },
  categoryPickerIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  categoryPickerText: {
    fontSize: 12,
    fontWeight: '500',
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
