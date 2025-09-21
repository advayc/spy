import React, { useCallback, useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, TextInput, Alert, FlatList, Modal, Pressable } from 'react-native';
import { router } from 'expo-router';
import { ChevronLeft, Plus, Trash2, Edit2 } from 'lucide-react-native';
import { useTopicsStore, Topic } from '@/stores/topics-store';
import { useCategoriesStore, builtinCategories } from '@/stores/categories-store';
import { useTheme } from '@/hooks/useTheme';

// Emoji categories with comprehensive list and keywords
const emojiCategories = {
  Smileys: [
    { emoji: '😀', keywords: ['smile', 'happy', 'face', 'grinning'] },
    { emoji: '😃', keywords: ['smile', 'happy', 'face', 'big eyes'] },
    { emoji: '😄', keywords: ['smile', 'happy', 'face', 'laughing'] },
    { emoji: '😊', keywords: ['smile', 'happy', 'face', 'content'] },
    { emoji: '😍', keywords: ['love', 'heart eyes', 'face', 'admire'] },
    { emoji: '😘', keywords: ['kiss', 'face', 'love', 'blowing kiss'] },
    { emoji: '🥰', keywords: ['love', 'face', 'smiling', 'hearts'] },
    { emoji: '😎', keywords: ['cool', 'sunglasses', 'face', 'confident'] },
    { emoji: '🤓', keywords: ['nerd', 'glasses', 'face', 'smart'] },
    { emoji: '😜', keywords: ['winking', 'tongue', 'face', 'playful'] },
    { emoji: '😛', keywords: ['tongue', 'face', 'silly', 'playful'] },
    { emoji: '😇', keywords: ['angel', 'halo', 'face', 'innocent'] },
    { emoji: '🥳', keywords: ['party', 'celebration', 'face', 'hat'] },
    { emoji: '🤗', keywords: ['hug', 'face', 'smiling', 'friendly'] },
    { emoji: '🙂', keywords: ['smile', 'face', 'subtle', 'content'] },
    { emoji: '🙃', keywords: ['upside down', 'face', 'silly', 'smile'] },
    { emoji: '😉', keywords: ['wink', 'face', 'playful', 'flirt'] },
    { emoji: '😌', keywords: ['calm', 'face', 'relaxed', 'peaceful'] },
    { emoji: '😋', keywords: ['yum', 'tongue', 'face', 'delicious'] },
    { emoji: '😻', keywords: ['cat', 'love', 'heart eyes', 'cute'] },
  ],
  Animals: [
    { emoji: '🐶', keywords: ['dog', 'puppy', 'pet', 'animal'] },
    { emoji: '🐱', keywords: ['cat', 'kitten', 'pet', 'animal'] },
    { emoji: '🐭', keywords: ['mouse', 'rodent', 'animal'] },
    { emoji: '🐹', keywords: ['hamster', 'pet', 'animal'] },
    { emoji: '🐰', keywords: ['rabbit', 'bunny', 'animal'] },
    { emoji: '🦊', keywords: ['fox', 'animal', 'wild'] },
    { emoji: '🐻', keywords: ['bear', 'animal', 'wild'] },
    { emoji: '🐼', keywords: ['panda', 'animal', 'cute'] },
    { emoji: '🐨', keywords: ['koala', 'animal', 'cute'] },
    { emoji: '🐯', keywords: ['tiger', 'animal', 'wild'] },
    { emoji: '🦁', keywords: ['lion', 'animal', 'wild', 'king'] },
    { emoji: '🐮', keywords: ['cow', 'animal', 'farm'] },
    { emoji: '🐷', keywords: ['pig', 'animal', 'farm'] },
    { emoji: '🐸', keywords: ['frog', 'animal', 'amphibian'] },
    { emoji: '🐵', keywords: ['monkey', 'animal', 'primate'] },
    { emoji: '🐔', keywords: ['chicken', 'animal', 'farm', 'bird'] },
    { emoji: '🐧', keywords: ['penguin', 'animal', 'bird', 'cold'] },
    { emoji: '🐦', keywords: ['bird', 'animal', 'flying'] },
    { emoji: '🐤', keywords: ['chick', 'baby bird', 'animal', 'cute'] },
    { emoji: '🦆', keywords: ['duck', 'animal', 'bird', 'water'] },
    { emoji: '🦅', keywords: ['eagle', 'animal', 'bird', 'wild'] },
    { emoji: '🦉', keywords: ['owl', 'animal', 'bird', 'night'] },
    { emoji: '🦇', keywords: ['bat', 'animal', 'night', 'flying'] },
    { emoji: '🐺', keywords: ['wolf', 'animal', 'wild'] },
    { emoji: '🐗', keywords: ['boar', 'animal', 'wild'] },
    { emoji: '🐴', keywords: ['horse', 'animal', 'farm'] },
    { emoji: '🦄', keywords: ['unicorn', 'animal', 'mythical'] },
    { emoji: '🐝', keywords: ['bee', 'insect', 'animal'] },
    { emoji: '🐛', keywords: ['bug', 'insect', 'caterpillar', 'animal'] },
    { emoji: '🦋', keywords: ['butterfly', 'insect', 'animal'] },
    { emoji: '🐌', keywords: ['snail', 'animal', 'slow'] },
    { emoji: '🐞', keywords: ['ladybug', 'insect', 'animal'] },
    { emoji: '🐜', keywords: ['ant', 'insect', 'animal'] },
    { emoji: '🦗', keywords: ['cricket', 'insect', 'animal'] },
    { emoji: '🕷', keywords: ['spider', 'insect', 'animal'] },
    { emoji: '🦂', keywords: ['scorpion', 'animal', 'arachnid'] },
    { emoji: '🦀', keywords: ['crab', 'animal', 'sea'] },
    { emoji: '🐍', keywords: ['snake', 'animal', 'reptile'] },
    { emoji: '🐢', keywords: ['turtle', 'animal', 'reptile'] },
    { emoji: '🦎', keywords: ['lizard', 'animal', 'reptile'] },
    { emoji: '🦖', keywords: ['dinosaur', 't-rex', 'animal', 'prehistoric'] },
    { emoji: '🦕', keywords: ['dinosaur', 'sauropod', 'animal', 'prehistoric'] },
    { emoji: '🐙', keywords: ['octopus', 'animal', 'sea'] },
    { emoji: '🦑', keywords: ['squid', 'animal', 'sea'] },
    { emoji: '🦐', keywords: ['shrimp', 'animal', 'sea'] },
    { emoji: '🦞', keywords: ['lobster', 'animal', 'sea'] },
    { emoji: '🐠', keywords: ['fish', 'animal', 'sea', 'tropical'] },
    { emoji: '🐟', keywords: ['fish', 'animal', 'sea'] },
    { emoji: '🐬', keywords: ['dolphin', 'animal', 'sea'] },
    { emoji: '🐳', keywords: ['whale', 'animal', 'sea', 'spouting'] },
    { emoji: '🦈', keywords: ['shark', 'animal', 'sea'] },
    { emoji: '🐊', keywords: ['crocodile', 'animal', 'reptile'] },
    { emoji: '🐅', keywords: ['tiger', 'animal', 'wild'] },
    { emoji: '🐆', keywords: ['leopard', 'animal', 'wild'] },
    { emoji: '🦒', keywords: ['giraffe', 'animal', 'wild'] },
    { emoji: '🦓', keywords: ['zebra', 'animal', 'wild'] },
    { emoji: '🦍', keywords: ['gorilla', 'animal', 'primate'] },
    { emoji: '🦧', keywords: ['orangutan', 'animal', 'primate'] },
    { emoji: '🐘', keywords: ['elephant', 'animal', 'wild'] },
    { emoji: '🦛', keywords: ['hippo', 'animal', 'wild'] },
    { emoji: '🦏', keywords: ['rhino', 'animal', 'wild'] },
    { emoji: '🐪', keywords: ['camel', 'animal', 'desert'] },
    { emoji: '🐫', keywords: ['camel', 'two-hump', 'animal', 'desert'] },
    { emoji: '🦙', keywords: ['llama', 'animal', 'farm'] },
    { emoji: '🐐', keywords: ['goat', 'animal', 'farm'] },
    { emoji: '🦌', keywords: ['deer', 'animal', 'wild'] },
    { emoji: '🐕', keywords: ['dog', 'pet', 'animal'] },
    { emoji: '🐩', keywords: ['poodle', 'dog', 'pet', 'animal'] },
    { emoji: '🦮', keywords: ['guide dog', 'dog', 'pet', 'animal'] },
    { emoji: '🐈', keywords: ['cat', 'pet', 'animal'] },
    { emoji: '🐓', keywords: ['rooster', 'animal', 'farm', 'bird'] },
    { emoji: '🦃', keywords: ['turkey', 'animal', 'bird'] },
    { emoji: '🦚', keywords: ['peacock', 'animal', 'bird'] },
    { emoji: '🦜', keywords: ['parrot', 'animal', 'bird'] },
    { emoji: '🦢', keywords: ['swan', 'animal', 'bird'] },
    { emoji: '🦩', keywords: ['flamingo', 'animal', 'bird'] },
    { emoji: '🕊', keywords: ['dove', 'animal', 'bird', 'peace'] },
    { emoji: '🐇', keywords: ['rabbit', 'bunny', 'animal'] },
    { emoji: '🦝', keywords: ['raccoon', 'animal', 'wild'] },
    { emoji: '🦨', keywords: ['skunk', 'animal', 'wild'] },
    { emoji: '🦡', keywords: ['badger', 'animal', 'wild'] },
    { emoji: '🦫', keywords: ['beaver', 'animal', 'wild'] },
    { emoji: '🦦', keywords: ['otter', 'animal', 'wild'] },
    { emoji: '🦥', keywords: ['sloth', 'animal', 'wild'] },
  ],
  Objects: [
    { emoji: '⚽', keywords: ['soccer', 'ball', 'sport'] },
    { emoji: '🏀', keywords: ['basketball', 'sport', 'ball'] },
    { emoji: '🏈', keywords: ['football', 'american', 'sport', 'ball'] },
    { emoji: '⚾', keywords: ['baseball', 'sport', 'ball'] },
    { emoji: '🎾', keywords: ['tennis', 'sport', 'ball'] },
    { emoji: '🏐', keywords: ['volleyball', 'sport', 'ball'] },
    { emoji: '🏉', keywords: ['rugby', 'sport', 'ball'] },
    { emoji: '🎱', keywords: ['pool', 'billiards', 'sport', 'ball'] },
    { emoji: '🏓', keywords: ['ping pong', 'table tennis', 'sport'] },
    { emoji: '🏸', keywords: ['badminton', 'sport', 'racket'] },
    { emoji: '🏒', keywords: ['hockey', 'sport', 'ice'] },
    { emoji: '🏑', keywords: ['field hockey', 'sport'] },
    { emoji: '🏏', keywords: ['cricket', 'sport', 'bat'] },
    { emoji: '⛳', keywords: ['golf', 'sport', 'flag'] },
    { emoji: '🏹', keywords: ['archery', 'sport', 'bow'] },
    { emoji: '🎣', keywords: ['fishing', 'sport', 'fish'] },
    { emoji: '🥊', keywords: ['boxing', 'sport', 'glove'] },
    { emoji: '🥋', keywords: ['martial arts', 'sport', 'karate'] },
    { emoji: '⛸', keywords: ['ice skating', 'sport', 'skate'] },
    { emoji: '🎿', keywords: ['skiing', 'sport', 'snow'] },
    { emoji: '🛷', keywords: ['sled', 'sport', 'snow'] },
    { emoji: '🛹', keywords: ['skateboard', 'sport'] },
    { emoji: '🛼', keywords: ['roller skate', 'sport'] },
    { emoji: '🚗', keywords: ['car', 'vehicle', 'transport'] },
    { emoji: '🚕', keywords: ['taxi', 'vehicle', 'transport'] },
    { emoji: '🚙', keywords: ['suv', 'car', 'vehicle', 'transport'] },
    { emoji: '🚌', keywords: ['bus', 'vehicle', 'transport'] },
    { emoji: '🚎', keywords: ['trolleybus', 'vehicle', 'transport'] },
    { emoji: '🏎', keywords: ['racecar', 'vehicle', 'sport'] },
    { emoji: '🚓', keywords: ['police car', 'vehicle', 'emergency'] },
    { emoji: '🚑', keywords: ['ambulance', 'vehicle', 'emergency'] },
    { emoji: '🚒', keywords: ['fire truck', 'vehicle', 'emergency'] },
    { emoji: '🚜', keywords: ['tractor', 'vehicle', 'farm'] },
    { emoji: '🚀', keywords: ['rocket', 'space', 'vehicle'] },
    { emoji: '🛸', keywords: ['ufo', 'space', 'vehicle'] },
    { emoji: '🚁', keywords: ['helicopter', 'vehicle', 'air'] },
    { emoji: '🛶', keywords: ['canoe', 'boat', 'water'] },
    { emoji: '⛵', keywords: ['sailboat', 'boat', 'water'] },
    { emoji: '🚤', keywords: ['speedboat', 'boat', 'water'] },
    { emoji: '🛳', keywords: ['ship', 'boat', 'water'] },
    { emoji: '✈️', keywords: ['airplane', 'vehicle', 'air', 'travel'] },
    { emoji: '🚂', keywords: ['train', 'vehicle', 'transport'] },
    { emoji: '🚃', keywords: ['train car', 'vehicle', 'transport'] },
    { emoji: '🎡', keywords: ['ferris wheel', 'ride', 'amusement'] },
    { emoji: '🎢', keywords: ['roller coaster', 'ride', 'amusement'] },
    { emoji: '🎠', keywords: ['carousel', 'ride', 'amusement'] },
  ],
  Symbols: [
    { emoji: '⭐', keywords: ['star', 'favorite', 'shine'] },
    { emoji: '✨', keywords: ['sparkles', 'shine', 'magic'] },
    { emoji: '🌟', keywords: ['star', 'glowing', 'shine'] },
    { emoji: '💫', keywords: ['dizzy', 'star', 'sparkle'] },
    { emoji: '🔥', keywords: ['fire', 'flame', 'hot'] },
    { emoji: '💥', keywords: ['explosion', 'boom', 'crash'] },
    { emoji: '🎉', keywords: ['party', 'celebration', 'popper'] },
    { emoji: '🎈', keywords: ['balloon', 'party', 'celebration'] },
    { emoji: '🎁', keywords: ['gift', 'present', 'celebration'] },
    { emoji: '🎀', keywords: ['ribbon', 'bow', 'gift'] },
    { emoji: '🎊', keywords: ['confetti', 'party', 'celebration'] },
    { emoji: '💎', keywords: ['gem', 'diamond', 'jewel'] },
    { emoji: '🔮', keywords: ['crystal ball', 'magic', 'fortune'] },
    { emoji: '🔔', keywords: ['bell', 'notification', 'sound'] },
    { emoji: '🎶', keywords: ['music', 'notes', 'song'] },
    { emoji: '🎵', keywords: ['music', 'note', 'song'] },
    { emoji: '🎤', keywords: ['microphone', 'music', 'sing'] },
    { emoji: '🎧', keywords: ['headphones', 'music', 'audio'] },
    { emoji: '📣', keywords: ['megaphone', 'announcement', 'loud'] },
    { emoji: '📢', keywords: ['speaker', 'announcement', 'loud'] },
    { emoji: '🔊', keywords: ['speaker', 'sound', 'volume'] },
    { emoji: '🔈', keywords: ['speaker', 'sound', 'low volume'] },
    { emoji: '🔍', keywords: ['magnifying glass', 'search', 'zoom'] },
    { emoji: '🔎', keywords: ['magnifying glass', 'search', 'zoom'] },
    { emoji: '💡', keywords: ['light bulb', 'idea', 'bright'] },
    { emoji: '📚', keywords: ['books', 'reading', 'study'] },
    { emoji: '📖', keywords: ['book', 'reading', 'open book'] },
    { emoji: '📒', keywords: ['notebook', 'writing', 'study'] },
    { emoji: '📜', keywords: ['scroll', 'paper', 'ancient'] },
    { emoji: '📰', keywords: ['newspaper', 'news', 'paper'] },
    { emoji: '🔖', keywords: ['bookmark', 'reading', 'save'] },
    { emoji: '🏷', keywords: ['tag', 'label', 'price'] },
    { emoji: '💰', keywords: ['money', 'bag', 'cash'] },
    { emoji: '💸', keywords: ['money', 'cash', 'flying'] },
    { emoji: '💳', keywords: ['credit card', 'money', 'payment'] },
    { emoji: '🧾', keywords: ['receipt', 'paper', 'payment'] },
    { emoji: '📅', keywords: ['calendar', 'date', 'schedule'] },
    { emoji: '📆', keywords: ['calendar', 'date', 'schedule'] },
    { emoji: '🗓', keywords: ['calendar', 'spiral', 'schedule'] },
  ],
  Food: [
    { emoji: '🍎', keywords: ['apple', 'fruit', 'red'] },
    { emoji: '🍐', keywords: ['pear', 'fruit'] },
    { emoji: '🍊', keywords: ['orange', 'fruit', 'citrus'] },
    { emoji: '🍋', keywords: ['lemon', 'fruit', 'citrus'] },
    { emoji: '🍌', keywords: ['banana', 'fruit'] },
    { emoji: '🍉', keywords: ['watermelon', 'fruit'] },
    { emoji: '🍇', keywords: ['grapes', 'fruit'] },
    { emoji: '🍓', keywords: ['strawberry', 'fruit', 'berry'] },
    { emoji: '🍈', keywords: ['melon', 'fruit'] },
    { emoji: '🍒', keywords: ['cherries', 'fruit', 'berry'] },
    { emoji: '🍑', keywords: ['peach', 'fruit'] },
    { emoji: '🥭', keywords: ['mango', 'fruit'] },
    { emoji: '🍍', keywords: ['pineapple', 'fruit'] },
    { emoji: '🥥', keywords: ['coconut', 'fruit'] },
    { emoji: '🥝', keywords: ['kiwi', 'fruit'] },
    { emoji: '🍅', keywords: ['tomato', 'vegetable', 'fruit'] },
    { emoji: '🍆', keywords: ['eggplant', 'vegetable'] },
    { emoji: '🥑', keywords: ['avocado', 'fruit'] },
    { emoji: '🥦', keywords: ['broccoli', 'vegetable'] },
    { emoji: '🥬', keywords: ['lettuce', 'vegetable', 'leafy'] },
    { emoji: '🥒', keywords: ['cucumber', 'vegetable'] },
    { emoji: '🌽', keywords: ['corn', 'vegetable'] },
    { emoji: '🥕', keywords: ['carrot', 'vegetable'] },
    { emoji: '🥔', keywords: ['potato', 'vegetable'] },
    { emoji: '🍠', keywords: ['sweet potato', 'vegetable'] },
    { emoji: '🥐', keywords: ['croissant', 'bread', 'pastry'] },
    { emoji: '🍞', keywords: ['bread', 'loaf'] },
    { emoji: '🥖', keywords: ['baguette', 'bread'] },
    { emoji: '🥨', keywords: ['pretzel', 'snack'] },
    { emoji: '🧀', keywords: ['cheese', 'food'] },
    { emoji: '🥚', keywords: ['egg', 'food'] },
    { emoji: '🍳', keywords: ['fried egg', 'cooking', 'food'] },
    { emoji: '🥓', keywords: ['bacon', 'food', 'meat'] },
    { emoji: '🥩', keywords: ['steak', 'meat', 'food'] },
    { emoji: '🍗', keywords: ['chicken leg', 'meat', 'food'] },
    { emoji: '🍖', keywords: ['meat', 'bone', 'food'] },
    { emoji: '🌭', keywords: ['hot dog', 'food', 'sausage'] },
    { emoji: '🍔', keywords: ['hamburger', 'food', 'burger'] },
    { emoji: '🍟', keywords: ['fries', 'food', 'french fries'] },
    { emoji: '🍕', keywords: ['pizza', 'food'] },
    { emoji: '🥪', keywords: ['sandwich', 'food'] },
    { emoji: '🥙', keywords: ['wrap', 'food', 'pita'] },
    { emoji: '🌮', keywords: ['taco', 'food', 'mexican'] },
    { emoji: '🌯', keywords: ['burrito', 'food', 'mexican'] },
    { emoji: '🥗', keywords: ['salad', 'food', 'healthy'] },
    { emoji: '🍲', keywords: ['soup', 'food', 'stew'] },
    { emoji: '🍜', keywords: ['noodles', 'food', 'ramen'] },
    { emoji: '🍝', keywords: ['spaghetti', 'food', 'pasta'] },
    { emoji: '🍣', keywords: ['sushi', 'food', 'japanese'] },
    { emoji: '🍤', keywords: ['shrimp', 'food', 'seafood'] },
    { emoji: '🍙', keywords: ['rice ball', 'food', 'japanese'] },
    { emoji: '🍚', keywords: ['rice', 'food'] },
    { emoji: '🍱', keywords: ['bento', 'food', 'japanese'] },
    { emoji: '🥟', keywords: ['dumpling', 'food'] },
    { emoji: '🍥', keywords: ['fish cake', 'food', 'japanese'] },
    { emoji: '🍡', keywords: ['dango', 'food', 'japanese'] },
    { emoji: '🍦', keywords: ['ice cream', 'food', 'dessert'] },
    { emoji: '🍨', keywords: ['ice cream', 'food', 'dessert'] },
    { emoji: '🍧', keywords: ['shaved ice', 'food', 'dessert'] },
    { emoji: '🎂', keywords: ['cake', 'food', 'dessert', 'birthday'] },
    { emoji: '🍰', keywords: ['cake', 'food', 'dessert'] },
    { emoji: '🧁', keywords: ['cupcake', 'food', 'dessert'] },
    { emoji: '🥧', keywords: ['pie', 'food', 'dessert'] },
    { emoji: '🍫', keywords: ['chocolate', 'food', 'dessert'] },
    { emoji: '🍬', keywords: ['candy', 'food', 'sweet'] },
    { emoji: '🍭', keywords: ['lollipop', 'food', 'sweet'] },
    { emoji: '🍮', keywords: ['custard', 'food', 'dessert'] },
  ],
  Nature: [
    { emoji: '🌱', keywords: ['plant', 'sprout', 'nature'] },
    { emoji: '🌲', keywords: ['tree', 'evergreen', 'nature'] },
    { emoji: '🌳', keywords: ['tree', 'deciduous', 'nature'] },
    { emoji: '🌴', keywords: ['palm tree', 'nature', 'tropical'] },
    { emoji: '🌵', keywords: ['cactus', 'nature', 'desert'] },
    { emoji: '🌾', keywords: ['wheat', 'plant', 'nature'] },
    { emoji: '🌿', keywords: ['herb', 'plant', 'nature'] },
    { emoji: '☘️', keywords: ['shamrock', 'plant', 'nature'] },
    { emoji: '🍀', keywords: ['clover', 'plant', 'nature', 'luck'] },
    { emoji: '🍁', keywords: ['maple leaf', 'nature', 'fall'] },
    { emoji: '🍂', keywords: ['fallen leaf', 'nature', 'fall'] },
    { emoji: '🍃', keywords: ['leaves', 'nature', 'wind'] },
    { emoji: '🌸', keywords: ['cherry blossom', 'flower', 'nature'] },
    { emoji: '🌹', keywords: ['rose', 'flower', 'nature'] },
    { emoji: '🌺', keywords: ['hibiscus', 'flower', 'nature'] },
    { emoji: '🌻', keywords: ['sunflower', 'flower', 'nature'] },
    { emoji: '🌼', keywords: ['flower', 'blossom', 'nature'] },
    { emoji: '🌷', keywords: ['tulip', 'flower', 'nature'] },
    { emoji: '🌞', keywords: ['sun', 'nature', 'bright'] },
    { emoji: '🌝', keywords: ['moon', 'full moon', 'nature'] },
    { emoji: '🌚', keywords: ['moon', 'new moon', 'nature'] },
    { emoji: '🌙', keywords: ['crescent moon', 'nature'] },
    { emoji: '☀️', keywords: ['sun', 'nature', 'bright'] },
    { emoji: '⭐', keywords: ['star', 'nature', 'shine'] },
    { emoji: '✨', keywords: ['sparkles', 'nature', 'shine'] },
    { emoji: '⚡', keywords: ['lightning', 'nature', 'storm'] },
    { emoji: '🔥', keywords: ['fire', 'nature', 'flame'] },
    { emoji: '🌈', keywords: ['rainbow', 'nature', 'color'] },
    { emoji: '☁️', keywords: ['cloud', 'nature', 'weather'] },
    { emoji: '❄️', keywords: ['snowflake', 'nature', 'winter'] },
    { emoji: '☃️', keywords: ['snowman', 'nature', 'winter'] },
    { emoji: '⛄', keywords: ['snowman', 'nature', 'winter'] },
    { emoji: '🌬', keywords: ['wind', 'nature', 'weather'] },
    { emoji: '💧', keywords: ['water', 'droplet', 'nature'] },
    { emoji: '💦', keywords: ['water', 'splash', 'nature'] },
    { emoji: '☔', keywords: ['umbrella', 'rain', 'nature', 'weather'] },
    { emoji: '☂️', keywords: ['umbrella', 'nature', 'weather'] },
    { emoji: '🌊', keywords: ['wave', 'water', 'nature', 'ocean'] },
  ],
};
type EmojiCategoryKey = keyof typeof emojiCategories;

export default function TopicsScreen() {
  const { colors } = useTheme();
  
  // All hooks must be at the top level - never inside try/catch or conditionals
  const topicsStore = useTopicsStore();
  const categoriesStore = useCategoriesStore();
  const deletedBuiltinTopicIds = useTopicsStore(state => state.deletedBuiltinTopicIds);
  
  // Destructure store values
  const {
    topics = [],
    addTopic,
    removeTopic,
    updateTopic
  } = topicsStore;
  
  const {
    customCategories = [],
    addCategory,
    removeCategory,
    updateCategory,
    getAllCategories,
    getCategory
  } = categoriesStore;
  const [editingTopic, setEditingTopic] = useState<Topic | null>(null);
  const [editingTopicName, setEditingTopicName] = useState<string>('');
  const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null);
  const [editingCategoryName, setEditingCategoryName] = useState<string>('');
  const [editingCategoryIcon, setEditingCategoryIcon] = useState<string>('');
  // Removed per-category Use Roles editing; roles are managed globally or by built-in defaults
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [newTopicName, setNewTopicName] = useState<string>('');
  const [newCategoryName, setNewCategoryName] = useState<string>('');
  const [newCategoryIcon, setNewCategoryIcon] = useState<string>('⭐');
  const [showAddCategory, setShowAddCategory] = useState<boolean>(false);
  const [showAddTopic, setShowAddTopic] = useState<boolean>(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
  const [useKeyboardEmoji, setUseKeyboardEmoji] = useState<boolean>(false);
  const [manualEmoji, setManualEmoji] = useState<string>('');
  const [emojiSearch, setEmojiSearch] = useState<string>('');
  const [selectedEmojiCategory, setSelectedEmojiCategory] = useState<EmojiCategoryKey>('Smileys');
  // Removed per-category spies controls; managed in Settings instead.

  // No MAX spies cap here; not editable per-category.

  // Safely get categories with error handling
  let categories: Array<{id: string; name: string; icon: string; useRoles: boolean}> = [];
  try {
    categories = getAllCategories ? getAllCategories() : [];
  } catch (error) {
    console.error('Error getting categories:', error);
    categories = [];
  }

  const getTopicsCountForCategory = useCallback((categoryId: string) => {
    try {
      return topics ? topics.filter(topic => topic?.category === categoryId).length : 0;
    } catch (error) {
      console.error('Error counting topics:', error);
      return 0;
    }
  }, [topics]);

  const getCategoryTopics = useCallback((categoryId: string) => {
    try {
      return topics ? topics.filter(topic => topic?.category === categoryId) : [];
    } catch (error) {
      console.error('Error getting category topics:', error);
      return [];
    }
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
    const isBuiltinCategory = builtinCategories[categoryId];
    
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
              // Always invoke removeCategory; built-ins will be hidden via the store
              removeCategory(categoryId);
              
              // Show info about restoring built-in categories
              if (isBuiltinCategory) {
                setTimeout(() => {
                  Alert.alert(
                    'Category Hidden', 
                    'This built-in category has been hidden. You can restore all default categories in Settings if needed.',
                    [{ text: 'OK' }]
                  );
                }, 500);
              }
            }
          },
        ]
      );
    } else {
      // Always invoke removeCategory; built-ins will be hidden via the store
      removeCategory(categoryId);
      
      // Show info about restoring built-in categories
      if (isBuiltinCategory) {
        setTimeout(() => {
          Alert.alert(
            'Category Hidden', 
            'This built-in category has been hidden. You can restore all default categories in Settings if needed.',
            [{ text: 'OK' }]
          );
        }, 200);
      }
    }
  }, [getCategoryTopics, removeTopic, removeCategory]);

  const renderCategoryItem = useCallback(({ item }: { item: { id: string; name: string; icon: string; useRoles: boolean } }) => {
    const topicsCount = getTopicsCountForCategory(item.id);
  const meta = getCategory(item.id);

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
              <Edit2 size={16} color={colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.deleteButton}
              onPress={() => handleDeleteCategory(item.id)}
            >
              <Trash2 size={16} color="#FF3B30" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.topicsCount}>{topicsCount} topics</Text>
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
              <Edit2 size={14} color={colors.primary} />
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
    // Per-category Use Roles is not editable here
  };

  const saveEditCategory = () => {
    if (!editingCategoryId) return;
    if (!builtinCategories[editingCategoryId]) {
      updateCategory(editingCategoryId, { name: editingCategoryName.trim(), icon: editingCategoryIcon });
    }
    setEditingCategoryId(null);
    setEmojiSearch('');
  };

  const cancelEditCategory = () => {
    setEditingCategoryId(null);
    setEditingCategoryName('');
    setEditingCategoryIcon('');
    setEmojiSearch('');
  };

  // Emoji picker filtering
  // Emoji picker: show all emojis at once (flatten all categories)
  const filteredEmojis = useMemo(() => {
    return Object.values(emojiCategories).flat().map(item => item.emoji);
  }, []);

  const renderEmojiItem = useCallback(({ item }: { item: string }) => (
    <TouchableOpacity 
      style={styles.emojiOption}
      onPress={() => {
        if (editingCategoryId) {
          setEditingCategoryIcon(item);
        } else {
          setNewCategoryIcon(item);
        }
        setShowEmojiPicker(false);
        setEmojiSearch('');
      }}
    >
      <Text style={styles.emojiOptionText}>{item}</Text>
    </TouchableOpacity>
  ), [editingCategoryId]);

  if (selectedCategory) {
  const category = categories.find(c => c.id === selectedCategory);
  // Filter out deleted builtin topics
  const categoryTopics = getCategoryTopics(selectedCategory);
  const visibleCategoryTopics = categoryTopics.filter(
    topic => !deletedBuiltinTopicIds.includes(topic.id)
  );

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => setSelectedCategory(null)} 
            style={styles.backButton}
          >
            <ChevronLeft size={24} color={colors.primary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{category?.name}</Text>
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => setShowAddTopic(true)}
          >
            <Plus size={24} color={colors.primary} />
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
          data={visibleCategoryTopics}
          renderItem={renderTopicItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.topicsList}
          showsVerticalScrollIndicator={false}
        />
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
          <ChevronLeft size={24} color={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Topics</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => setShowAddCategory(true)}
        >
          <Plus size={24} color={colors.primary} />
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
            <TouchableOpacity
              style={styles.emojiPicker}
              onPress={() => setShowEmojiPicker(true)}
            >
              <Text style={styles.emojiLabel}>Icon:</Text>
              <Text style={styles.emojiDisplay}>{newCategoryIcon}</Text>
            </TouchableOpacity>
            {/* Roles toggle removed from category UI */}
          </View>
          {showEmojiPicker && (
            <View style={[styles.emojiPickerModal, { height: '60%' }]}> 
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <Text style={styles.emojiPickerTitle}>Pick an emoji</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity onPress={() => setUseKeyboardEmoji(v => !v)} style={{ marginRight: 12 }}>
                    <Text style={{ color: '#0A84FF', fontSize: 14 }}>{useKeyboardEmoji ? 'Picker' : 'Keyboard'}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setShowEmojiPicker(false)}>
                    <Text style={{ color: '#0A84FF', fontSize: 18 }}>✕</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {useKeyboardEmoji ? (
                <View>
                  <Text style={{ color: 'white', marginBottom: 8 }}>Type or paste an emoji and press Use</Text>
                  <TextInput
                    value={manualEmoji}
                    onChangeText={setManualEmoji}
                    placeholder="😀"
                    placeholderTextColor="#666"
                    style={styles.emojiSearchInput}
                    autoFocus
                  />
                  <View style={{ flexDirection: 'row', justifyContent: 'flex-end', gap: 8, marginTop: 8 }}>
                    <TouchableOpacity onPress={() => { setManualEmoji(''); setUseKeyboardEmoji(false); }} style={styles.cancelButton}>
                      <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                      const val = manualEmoji.trim();
                      if (val) {
                        const ch = Array.from(val)[0];
                        setNewCategoryIcon(ch);
                        setShowEmojiPicker(false);
                        setManualEmoji('');
                        setUseKeyboardEmoji(false);
                      }
                    }} style={styles.saveButton}>
                      <Text style={styles.saveButtonText}>Use</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <FlatList
                  data={filteredEmojis}
                  renderItem={renderEmojiItem}
                  keyExtractor={(item) => item}
                  numColumns={8}
                  contentContainerStyle={[styles.emojiGrid, { paddingBottom: 20 }]}
                  showsVerticalScrollIndicator={true}
                  style={{ flex: 1 }}
                />
              )}
            </View>
          )}
          {/* Spies controls removed from category UI */}
          <View style={styles.addTopicActions}>
            <TouchableOpacity 
              style={styles.cancelButton}
              onPress={() => {
                setShowAddCategory(false);
                setNewCategoryName('');
                setNewCategoryIcon('⭐');
                setEmojiSearch('');
              }}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.saveButton}
              onPress={() => {
                const name = newCategoryName.trim();
                if (!name) return;
                addCategory({ name, icon: newCategoryIcon || '⭐', useRoles: true });
                setShowAddCategory(false);
                setNewCategoryName('');
                setNewCategoryIcon('⭐');
                setEmojiSearch('');
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
            <View style={styles.emojiAndRolesRow}>
              <TouchableOpacity
                style={styles.emojiPicker}
                onPress={() => setShowEmojiPicker(true)}
              >
                <Text style={styles.emojiLabel}>Icon:</Text>
                <Text style={styles.emojiDisplay}>{editingCategoryIcon}</Text>
              </TouchableOpacity>
              {/* Per-category Use Roles toggle removed */}
            </View>
            {showEmojiPicker && (
              <View style={styles.emojiPickerModal}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <Text style={styles.emojiPickerTitle}>Pick an emoji</Text>
                  <TouchableOpacity onPress={() => setShowEmojiPicker(false)}>
                    <Text style={{ color: '#0A84FF', fontSize: 16 }}>✕</Text>
                  </TouchableOpacity>
                </View>
                <TextInput
                  style={styles.emojiSearchInput}
                  placeholder="Search emojis..."
                  placeholderTextColor="#666"
                  value={emojiSearch}
                  onChangeText={setEmojiSearch}
                />
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.emojiCategoryTabs}>
                  {Object.keys(emojiCategories).map(category => (
                      <TouchableOpacity
                        key={category}
                        style={[
                          styles.emojiCategoryTab,
                          selectedEmojiCategory === category && styles.emojiCategoryTabActive,
                        ]}
                        onPress={() => setSelectedEmojiCategory(category as EmojiCategoryKey)}
                      >
                        <Text style={styles.emojiCategoryTabText}>{category}</Text>
                      </TouchableOpacity>
                    ))}
                </ScrollView>
                <FlatList
                  data={filteredEmojis}
                  renderItem={renderEmojiItem}
                  keyExtractor={(item) => item}
                  numColumns={6}
                  contentContainerStyle={styles.emojiGrid}
                  showsVerticalScrollIndicator={false}
                  style={{ maxHeight: 200 }}
                />
              </View>
            )}
            {/* Per-category spies controls removed from modal */}
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
  // Removed stray fontSize: 24 line
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
  // Removed duplicate emojiPickerModal style
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
  emojiCategoryTabs: {
    paddingVertical: 8,
    gap: 8,
  },
  emojiCategoryTab: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: '#222',
  },
  emojiCategoryTabActive: {
    backgroundColor: '#0A84FF',
  },
  emojiCategoryTabText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
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