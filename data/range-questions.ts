// Range game questions - each person gets the same prompt except one who gets a range
export interface RangeQuestion {
  id: string;
  category: string;
  prompt: string; // What everyone gets
  rangePrompt: string; // What the outlier gets
  expectedRange?: string; // Optional hint about typical answers
}

export const rangeQuestions: RangeQuestion[] = [
  // Age & Life Events
  {
    id: 'first-kiss-age',
    category: 'Life Events',
    prompt: 'Normal age of first kiss',
    rangePrompt: 'Range: 1-20',
    expectedRange: '13-16'
  },
  {
    id: 'average-marks',
    category: 'Life Events',
    prompt: 'Average marks in school',
    rangePrompt: 'Range: 0-100',
    expectedRange: '60-90'
  },
  {
    id: 'driving-age',
    category: 'Life Events', 
    prompt: 'Age you learned to drive',
    rangePrompt: 'Range: 10-25',
    expectedRange: '16-18'
  },
  {
    id: 'moved-out-age',
    category: 'Life Events',
    prompt: 'Age you moved out of parents house',
    rangePrompt: 'Range: 15-35',
    expectedRange: '18-22'
  },
  {
    id: 'first-job-age',
    category: 'Life Events',
    prompt: 'Age of your first paid job',
    rangePrompt: 'Range: 12-25',
    expectedRange: '15-18'
  },
  {
    id: 'college-graduation-age',
    category: 'Life Events',
    prompt: 'Age when you graduated college',
    rangePrompt: 'Range: 18-30',
    expectedRange: '21-23'
  },
  {
    id: 'marriage-age',
    category: 'Life Events',
    prompt: 'Ideal age to get married',
    rangePrompt: 'Range: 18-40',
    expectedRange: '25-30'
  },
  {
    id: 'first-phone-age',
    category: 'Life Events',
    prompt: 'Age you got your first phone',
    rangePrompt: 'Range: 8-18',
    expectedRange: '12-14'
  },
  {
    id: 'wisdom-teeth-age',
    category: 'Life Events',
    prompt: 'Age when wisdom teeth came in',
    rangePrompt: 'Range: 16-30',
    expectedRange: '17-21'
  },
  {
    id: 'lost-tooth-age',
    category: 'Life Events',
    prompt: 'Age you lost your first tooth',
    rangePrompt: 'Range: 4-10',
    expectedRange: '5-7'
  },
  {
    id: 'learned-to-read-age',
    category: 'Life Events',
    prompt: 'Age you learned to read',
    rangePrompt: 'Range: 3-8',
    expectedRange: '4-6'
  },

  // Numbers & Quantities
  {
    id: 'hours-sleep',
    category: 'Daily Life',
    prompt: 'Hours of sleep you need per night',
    rangePrompt: 'Range: 3-12',
    expectedRange: '7-9'
  },
  {
    id: 'coffee-cups',
    category: 'Daily Life',
    prompt: 'Cups of coffee you drink per day',
    rangePrompt: 'Range: 0-10',
    expectedRange: '1-3'
  },
  {
    id: 'shower-minutes',
    category: 'Daily Life',
    prompt: 'Minutes you spend in the shower',
    rangePrompt: 'Range: 2-60',
    expectedRange: '8-15'
  },
  {
    id: 'phone-hours',
    category: 'Daily Life',
    prompt: 'Hours on your phone per day',
    rangePrompt: 'Range: 1-16',
    expectedRange: '3-6'
  },
  {
    id: 'meals-per-day',
    category: 'Daily Life',
    prompt: 'Number of meals you eat per day',
    rangePrompt: 'Range: 1-8',
    expectedRange: '2-3'
  },
  {
    id: 'books-per-year',
    category: 'Hobbies',
    prompt: 'Books you read per year',
    rangePrompt: 'Range: 0-100',
    expectedRange: '5-20'
  },
  {
    id: 'exercise-hours-week',
    category: 'Health',
    prompt: 'Hours you exercise per week',
    rangePrompt: 'Range: 0-20',
    expectedRange: '2-5'
  },
  {
    id: 'social-media-apps',
    category: 'Technology',
    prompt: 'Number of social media apps you use',
    rangePrompt: 'Range: 0-15',
    expectedRange: '2-5'
  },
  {
    id: 'streaming-services',
    category: 'Entertainment',
    prompt: 'Number of streaming services you pay for',
    rangePrompt: 'Range: 0-5',
    expectedRange: '2-4'
  },
  {
    id: 'shoes-owned',
    category: 'Fashion',
    prompt: 'Number of pairs of shoes you own',
    rangePrompt: 'Range: 1-100',
    expectedRange: '8-20'
  },

  // Money & Spending
  {
    id: 'coffee-price',
    category: 'Money',
    prompt: 'How much you spend on coffee per month ($)',
    rangePrompt: 'Range: $0-500',
    expectedRange: '$20-80'
  },
  {
    id: 'lunch-price',
    category: 'Money',
    prompt: 'How much you spend on lunch ($)',
    rangePrompt: 'Range: $0-50',
    expectedRange: '$8-15'
  },
  {
    id: 'phone-bill',
    category: 'Money',
    prompt: 'Monthly phone bill ($)',
    rangePrompt: 'Range: $10-200',
    expectedRange: '$30-80'
  },
  {
    id: 'gas-per-week',
    category: 'Money',
    prompt: 'Money spent on gas per week ($)',
    rangePrompt: 'Range: $0-150',
    expectedRange: '$25-60'
  },
  {
    id: 'groceries-weekly',
    category: 'Money',
    prompt: 'Weekly grocery budget ($)',
    rangePrompt: 'Range: $20-300',
    expectedRange: '$50-120'
  },
  {
    id: 'vacation-budget',
    category: 'Money',
    prompt: 'Annual vacation budget ($)',
    rangePrompt: 'Range: $0-10000',
    expectedRange: '$500-3000'
  },
  {
    id: 'movie-ticket-price',
    category: 'Money',
    prompt: 'Price you expect to pay for movie ticket ($)',
    rangePrompt: 'Range: $5-30',
    expectedRange: '$10-18'
  },
  {
    id: 'tip-percentage',
    category: 'Money',
    prompt: 'Percentage you tip at restaurants (%)',
    rangePrompt: 'Range: 0-50%',
    expectedRange: '15-20%'
  },
  {
    id: 'birthday-gift-budget',
    category: 'Money',
    prompt: 'Budget for friend\'s birthday gift ($)',
    rangePrompt: 'Range: $5-200',
    expectedRange: '$20-50'
  },
  {
    id: 'car-budget',
    category: 'Money',
    prompt: 'Budget for your next car ($)',
    rangePrompt: 'Range: $1000-100000',
    expectedRange: '$15000-35000'
  },

  // Preferences & Ratings
  {
    id: 'pizza-rating',
    category: 'Food',
    prompt: 'Rate pizza out of 10',
    rangePrompt: 'Range: 1-10',
    expectedRange: '7-9'
  },
  {
    id: 'ideal-temperature',
    category: 'Preferences',
    prompt: 'Ideal room temperature (°C)',
    rangePrompt: 'Range: 15-30°C',
    expectedRange: '20-24°C'
  },
  {
    id: 'spice-tolerance',
    category: 'Food',
    prompt: 'Spice tolerance level (1-10)',
    rangePrompt: 'Range: 1-10',
    expectedRange: '4-7'
  },
  {
    id: 'movie-length-ideal',
    category: 'Entertainment',
    prompt: 'Ideal movie length (minutes)',
    rangePrompt: 'Range: 60-240',
    expectedRange: '90-120'
  },
  {
    id: 'party-size-ideal',
    category: 'Social',
    prompt: 'Ideal number of people at a party',
    rangePrompt: 'Range: 2-100',
    expectedRange: '8-20'
  },
  {
    id: 'vacation-days-ideal',
    category: 'Travel',
    prompt: 'Ideal vacation length (days)',
    rangePrompt: 'Range: 1-30',
    expectedRange: '5-10'
  },
  {
    id: 'workout-intensity',
    category: 'Health',
    prompt: 'Workout intensity preference (1-10)',
    rangePrompt: 'Range: 1-10',
    expectedRange: '5-7'
  },
  {
    id: 'music-volume',
    category: 'Music',
    prompt: 'Preferred music volume level (1-10)',
    rangePrompt: 'Range: 1-10',
    expectedRange: '6-8'
  },
  {
    id: 'texting-response-time',
    category: 'Communication',
    prompt: 'Minutes to respond to a text',
    rangePrompt: 'Range: 1-1440',
    expectedRange: '5-60'
  },

  // Frequency & Habits
  {
    id: 'haircut-frequency',
    category: 'Grooming',
    prompt: 'Weeks between haircuts',
    rangePrompt: 'Range: 2-52',
    expectedRange: '4-8'
  },
  {
    id: 'laundry-frequency',
    category: 'Chores',
    prompt: 'Days between doing laundry',
    rangePrompt: 'Range: 1-30',
    expectedRange: '7-14'
  },
  {
    id: 'grocery-shopping-frequency',
    category: 'Chores',
    prompt: 'Days between grocery shopping',
    rangePrompt: 'Range: 1-21',
    expectedRange: '7-10'
  },
  {
    id: 'car-wash-frequency',
    category: 'Maintenance',
    prompt: 'Weeks between washing your car',
    rangePrompt: 'Range: 1-52',
    expectedRange: '2-4'
  },
  {
    id: 'dentist-frequency',
    category: 'Health',
    prompt: 'Months between dentist visits',
    rangePrompt: 'Range: 3-24',
    expectedRange: '6-12'
  },
  {
    id: 'oil-change-frequency',
    category: 'Maintenance',
    prompt: 'Months between oil changes',
    rangePrompt: 'Range: 2-12',
    expectedRange: '3-6'
  },
  {
    id: 'social-media-check',
    category: 'Technology',
    prompt: 'Times you check social media per day',
    rangePrompt: 'Range: 0-200',
    expectedRange: '10-30'
  },
  {
    id: 'restaurant-frequency',
    category: 'Food',
    prompt: 'Times you eat out per week',
    rangePrompt: 'Range: 0-21',
    expectedRange: '2-5'
  },
  {
    id: 'movie-theater-frequency',
    category: 'Entertainment',
    prompt: 'Movies you see in theater per year',
    rangePrompt: 'Range: 0-50',
    expectedRange: '3-12'
  },
  {
    id: 'family-call-frequency',
    category: 'Family',
    prompt: 'Days between calling family',
    rangePrompt: 'Range: 1-365',
    expectedRange: '3-14'
  },

  // Physical & Health
  {
    id: 'steps-per-day',
    category: 'Health',
    prompt: 'Steps you walk per day',
    rangePrompt: 'Range: 1000-30000',
    expectedRange: '5000-12000'
  },
  {
    id: 'water-glasses-daily',
    category: 'Health',
    prompt: 'Glasses of water you drink daily',
    rangePrompt: 'Range: 1-20',
    expectedRange: '4-8'
  },
  {
    id: 'height-inches',
    category: 'Physical',
    prompt: 'Your height in inches',
    rangePrompt: 'Range: 48-84',
    expectedRange: '60-72'
  },
  {
    id: 'ideal-weight',
    category: 'Health',
    prompt: 'Your ideal weight (lbs)',
    rangePrompt: 'Range: 90-300',
    expectedRange: '120-180'
  },
  {
    id: 'resting-heart-rate',
    category: 'Health',
    prompt: 'Your resting heart rate (bpm)',
    rangePrompt: 'Range: 50-120',
    expectedRange: '60-80'
  },
  {
    id: 'flexibility-rating',
    category: 'Physical',
    prompt: 'Rate your flexibility (1-10)',
    rangePrompt: 'Range: 1-10',
    expectedRange: '4-7'
  },
  {
    id: 'pain-tolerance',
    category: 'Physical',
    prompt: 'Rate your pain tolerance (1-10)',
    rangePrompt: 'Range: 1-10',
    expectedRange: '5-7'
  },
  {
    id: 'energy-level',
    category: 'Health',
    prompt: 'Average energy level (1-10)',
    rangePrompt: 'Range: 1-10',
    expectedRange: '5-7'
  },
  {
    id: 'sick-days-yearly',
    category: 'Health',
    prompt: 'Days you\'re sick per year',
    rangePrompt: 'Range: 0-50',
    expectedRange: '2-8'
  },
  {
    id: 'vitamins-daily',
    category: 'Health',
    prompt: 'Number of vitamins/supplements you take daily',
    rangePrompt: 'Range: 0-20',
    expectedRange: '0-3'
  },

  // Skills & Abilities  
  {
    id: 'typing-speed',
    category: 'Skills',
    prompt: 'Typing speed (words per minute)',
    rangePrompt: 'Range: 10-150',
    expectedRange: '30-60'
  },
  {
    id: 'cooking-skill',
    category: 'Skills',
    prompt: 'Rate your cooking skills (1-10)',
    rangePrompt: 'Range: 1-10',
    expectedRange: '4-7'
  },
  {
    id: 'driving-skill',
    category: 'Skills',
    prompt: 'Rate your driving skills (1-10)',
    rangePrompt: 'Range: 1-10',
    expectedRange: '6-8'
  },
  {
    id: 'math-skill',
    category: 'Skills',
    prompt: 'Rate your math skills (1-10)',
    rangePrompt: 'Range: 1-10',
    expectedRange: '5-7'
  },
  {
    id: 'language-count',
    category: 'Skills',
    prompt: 'Number of languages you speak',
    rangePrompt: 'Range: 1-10',
    expectedRange: '1-2'
  },
  {
    id: 'instrument-count',
    category: 'Skills',
    prompt: 'Number of instruments you can play',
    rangePrompt: 'Range: 0-10',
    expectedRange: '0-2'
  },
  {
    id: 'sports-skill',
    category: 'Skills',
    prompt: 'Rate your athletic ability (1-10)',
    rangePrompt: 'Range: 1-10',
    expectedRange: '4-7'
  },
  {
    id: 'art-skill',
    category: 'Skills',
    prompt: 'Rate your artistic ability (1-10)',
    rangePrompt: 'Range: 1-10',
    expectedRange: '3-6'
  },
  {
    id: 'public-speaking-skill',
    category: 'Skills',
    prompt: 'Rate your public speaking (1-10)',
    rangePrompt: 'Range: 1-10',
    expectedRange: '4-6'
  },
  {
    id: 'technology-skill',
    category: 'Skills',
    prompt: 'Rate your tech savviness (1-10)',
    rangePrompt: 'Range: 1-10',
    expectedRange: '6-8'
  },

  // Travel & Geography
  {
    id: 'countries-visited',
    category: 'Travel',
    prompt: 'Number of countries you\'ve visited',
    rangePrompt: 'Range: 0-50',
    expectedRange: '2-10'
  },
  {
    id: 'states-visited',
    category: 'Travel',
    prompt: 'Number of US states you\'ve visited',
    rangePrompt: 'Range: 1-50',
    expectedRange: '5-15'
  },
  {
    id: 'flights-yearly',
    category: 'Travel',
    prompt: 'Number of flights you take per year',
    rangePrompt: 'Range: 0-100',
    expectedRange: '2-8'
  },
  {
    id: 'road-trip-hours',
    category: 'Travel',
    prompt: 'Max hours you\'ll drive in one day',
    rangePrompt: 'Range: 1-20',
    expectedRange: '6-10'
  },
  {
    id: 'hotel-price-comfort',
    category: 'Travel',
    prompt: 'Price per night for comfortable hotel ($)',
    rangePrompt: 'Range: $30-500',
    expectedRange: '$80-150'
  },
  {
    id: 'packing-hours',
    category: 'Travel',
    prompt: 'Hours to pack for a week trip',
    rangePrompt: 'Range: 0.5-10',
    expectedRange: '1-3'
  },
  {
    id: 'travel-planning-weeks',
    category: 'Travel',
    prompt: 'Weeks in advance you plan trips',
    rangePrompt: 'Range: 0-52',
    expectedRange: '2-12'
  },
  {
    id: 'passport-check-frequency',
    category: 'Travel',
    prompt: 'Months between checking passport expiration',
    rangePrompt: 'Range: 1-60',
    expectedRange: '6-24'
  },
  {
    id: 'luggage-weight',
    category: 'Travel',
    prompt: 'Weight of your typical suitcase (lbs)',
    rangePrompt: 'Range: 10-70',
    expectedRange: '25-45'
  },
  {
    id: 'souvenir-budget',
    category: 'Travel',
    prompt: 'Souvenir budget per trip ($)',
    rangePrompt: 'Range: $0-300',
    expectedRange: '$20-80'
  },

  // Technology & Digital Life
  {
    id: 'passwords-total',
    category: 'Technology',
    prompt: 'Number of online accounts you have',
    rangePrompt: 'Range: 5-500',
    expectedRange: '20-80'
  },
  {
    id: 'email-unread',
    category: 'Technology',
    prompt: 'Unread emails in your inbox',
    rangePrompt: 'Range: 0-10000',
    expectedRange: '5-100'
  },
  {
    id: 'phone-storage-used',
    category: 'Technology',
    prompt: 'Percentage of phone storage used (%)',
    rangePrompt: 'Range: 10-99%',
    expectedRange: '50-80%'
  },
  {
    id: 'apps-downloaded',
    category: 'Technology',
    prompt: 'Apps downloaded on your phone',
    rangePrompt: 'Range: 10-300',
    expectedRange: '50-120'
  },
  {
    id: 'backup-frequency',
    category: 'Technology',
    prompt: 'Days between backing up your phone',
    rangePrompt: 'Range: 1-365',
    expectedRange: '7-30'
  },
  {
    id: 'wifi-speed-home',
    category: 'Technology',
    prompt: 'Home internet speed (Mbps)',
    rangePrompt: 'Range: 1-1000',
    expectedRange: '25-200'
  },
  {
    id: 'streaming-hours-daily',
    category: 'Technology',
    prompt: 'Hours of streaming content per day',
    rangePrompt: 'Range: 0-16',
    expectedRange: '2-5'
  },
  {
    id: 'online-shopping-frequency',
    category: 'Technology',
    prompt: 'Online purchases per month',
    rangePrompt: 'Range: 0-50',
    expectedRange: '2-8'
  },
  {
    id: 'device-upgrade-frequency',
    category: 'Technology',
    prompt: 'Years between phone upgrades',
    rangePrompt: 'Range: 1-10',
    expectedRange: '2-4'
  },
  {
    id: 'video-game-hours',
    category: 'Technology',
    prompt: 'Hours gaming per week',
    rangePrompt: 'Range: 0-50',
    expectedRange: '3-10'
  },

  // Relationships & Social
  {
    id: 'close-friends-count',
    category: 'Social',
    prompt: 'Number of close friends you have',
    rangePrompt: 'Range: 0-20',
    expectedRange: '3-8'
  },
  {
    id: 'contacts-phone',
    category: 'Social',
    prompt: 'Contacts saved in your phone',
    rangePrompt: 'Range: 10-2000',
    expectedRange: '100-400'
  },
  {
    id: 'dates-before-relationship',
    category: 'Relationships',
    prompt: 'Dates before becoming exclusive',
    rangePrompt: 'Range: 1-20',
    expectedRange: '3-8'
  },
  {
    id: 'relationship-length-ideal',
    category: 'Relationships',
    prompt: 'Ideal relationship length before marriage (years)',
    rangePrompt: 'Range: 0.5-10',
    expectedRange: '2-5'
  },
  {
    id: 'social-events-monthly',
    category: 'Social',
    prompt: 'Social events you attend per month',
    rangePrompt: 'Range: 0-30',
    expectedRange: '2-8'
  },
  {
    id: 'birthday-parties-yearly',
    category: 'Social',
    prompt: 'Birthday parties you attend per year',
    rangePrompt: 'Range: 0-50',
    expectedRange: '3-12'
  },
  {
    id: 'wedding-guest-count',
    category: 'Social',
    prompt: 'Ideal number of wedding guests',
    rangePrompt: 'Range: 10-500',
    expectedRange: '50-150'
  },
  {
    id: 'small-talk-comfort',
    category: 'Social',
    prompt: 'Comfort with small talk (1-10)',
    rangePrompt: 'Range: 1-10',
    expectedRange: '4-7'
  },
  {
    id: 'group-project-preference',
    category: 'Social',
    prompt: 'Ideal group project size',
    rangePrompt: 'Range: 1-10',
    expectedRange: '2-4'
  },
  {
    id: 'party-hosting-frequency',
    category: 'Social',
    prompt: 'Times you host parties per year',
    rangePrompt: 'Range: 0-20',
    expectedRange: '1-4'
  },

  // Food & Dining
  {
    id: 'spicy-scoville',
    category: 'Food',
    prompt: 'Spiciest pepper you can handle (Scoville units)',
    rangePrompt: 'Range: 0-2000000',
    expectedRange: '1000-10000'
  },
  {
    id: 'coffee-ounces-daily',
    category: 'Food',
    prompt: 'Ounces of coffee you drink daily',
    rangePrompt: 'Range: 0-64',
    expectedRange: '8-24'
  },
  {
    id: 'vegetables-daily',
    category: 'Food',
    prompt: 'Servings of vegetables per day',
    rangePrompt: 'Range: 0-10',
    expectedRange: '2-5'
  },
  {
    id: 'fast-food-monthly',
    category: 'Food',
    prompt: 'Fast food meals per month',
    rangePrompt: 'Range: 0-90',
    expectedRange: '2-10'
  },
  {
    id: 'cooking-hours-weekly',
    category: 'Food',
    prompt: 'Hours spent cooking per week',
    rangePrompt: 'Range: 0-30',
    expectedRange: '3-8'
  },
  {
    id: 'restaurant-tip-amount',
    category: 'Food',
    prompt: 'Typical restaurant tip ($)',
    rangePrompt: 'Range: $0-50',
    expectedRange: '$3-15'
  },
  {
    id: 'grocery-list-items',
    category: 'Food',
    prompt: 'Items on typical grocery list',
    rangePrompt: 'Range: 5-100',
    expectedRange: '15-35'
  },
  {
    id: 'leftovers-days',
    category: 'Food',
    prompt: 'Days you\'ll eat leftovers',
    rangePrompt: 'Range: 1-7',
    expectedRange: '2-4'
  },
  {
    id: 'snacks-daily',
    category: 'Food',
    prompt: 'Snacks you eat per day',
    rangePrompt: 'Range: 0-10',
    expectedRange: '1-3'
  },
  {
    id: 'food-delivery-monthly',
    category: 'Food',
    prompt: 'Food delivery orders per month',
    rangePrompt: 'Range: 0-50',
    expectedRange: '2-8'
  },

  // Entertainment & Hobbies
  {
    id: 'tv-shows-watching',
    category: 'Entertainment',
    prompt: 'TV shows you\'re currently watching',
    rangePrompt: 'Range: 0-20',
    expectedRange: '2-6'
  },
  {
    id: 'concerts-yearly',
    category: 'Entertainment',
    prompt: 'Concerts you attend per year',
    rangePrompt: 'Range: 0-30',
    expectedRange: '1-5'
  },
  {
    id: 'hobbies-active',
    category: 'Hobbies',
    prompt: 'Number of active hobbies',
    rangePrompt: 'Range: 0-15',
    expectedRange: '2-5'
  },
  {
    id: 'board-games-owned',
    category: 'Entertainment',
    prompt: 'Board games you own',
    rangePrompt: 'Range: 0-100',
    expectedRange: '3-15'
  },
  {
    id: 'podcast-subscriptions',
    category: 'Entertainment',
    prompt: 'Podcasts you subscribe to',
    rangePrompt: 'Range: 0-50',
    expectedRange: '3-10'
  },
  {
    id: 'youtube-hours-daily',
    category: 'Entertainment',
    prompt: 'Hours of YouTube per day',
    rangePrompt: 'Range: 0-12',
    expectedRange: '1-3'
  },
  {
    id: 'museum-visits-yearly',
    category: 'Culture',
    prompt: 'Museum visits per year',
    rangePrompt: 'Range: 0-20',
    expectedRange: '1-4'
  },
  {
    id: 'art-supplies-cost',
    category: 'Hobbies',
    prompt: 'Annual spending on hobby supplies ($)',
    rangePrompt: 'Range: $0-2000',
    expectedRange: '$50-300'
  },
  {
    id: 'festival-attendance',
    category: 'Entertainment',
    prompt: 'Festivals you attend per year',
    rangePrompt: 'Range: 0-10',
    expectedRange: '0-2'
  },
  {
    id: 'creative-projects-yearly',
    category: 'Hobbies',
    prompt: 'Creative projects you complete per year',
    rangePrompt: 'Range: 0-50',
    expectedRange: '2-10'
  },

  // Work & Career
  {
    id: 'work-hours-weekly',
    category: 'Work',
    prompt: 'Hours you work per week',
    rangePrompt: 'Range: 10-80',
    expectedRange: '35-45'
  },
  {
    id: 'commute-minutes',
    category: 'Work',
    prompt: 'Minutes of commute each way',
    rangePrompt: 'Range: 0-120',
    expectedRange: '15-45'
  },
  {
    id: 'vacation-days-yearly',
    category: 'Work',
    prompt: 'Vacation days you take per year',
    rangePrompt: 'Range: 0-30',
    expectedRange: '10-20'
  },
  {
    id: 'meetings-weekly',
    category: 'Work',
    prompt: 'Meetings you attend per week',
    rangePrompt: 'Range: 0-30',
    expectedRange: '3-10'
  },
  {
    id: 'career-changes',
    category: 'Work',
    prompt: 'Career changes you expect in lifetime',
    rangePrompt: 'Range: 0-10',
    expectedRange: '2-5'
  },
  {
    id: 'networking-events-yearly',
    category: 'Work',
    prompt: 'Professional networking events per year',
    rangePrompt: 'Range: 0-50',
    expectedRange: '2-8'
  },
  {
    id: 'work-from-home-days',
    category: 'Work',
    prompt: 'Work from home days per week',
    rangePrompt: 'Range: 0-5',
    expectedRange: '1-3'
  },
  {
    id: 'job-satisfaction',
    category: 'Work',
    prompt: 'Job satisfaction level (1-10)',
    rangePrompt: 'Range: 1-10',
    expectedRange: '6-8'
  },
  {
    id: 'salary-expectation',
    category: 'Work',
    prompt: 'Ideal annual salary ($)',
    rangePrompt: 'Range: $20k-500k',
    expectedRange: '$50k-100k'
  },
  {
    id: 'retirement-age-goal',
    category: 'Work',
    prompt: 'Age you want to retire',
    rangePrompt: 'Range: 50-80',
    expectedRange: '62-67'
  },

  // Random & Quirky
  {
    id: 'alarm-snoozes',
    category: 'Habits',
    prompt: 'Times you hit snooze in the morning',
    rangePrompt: 'Range: 0-10',
    expectedRange: '1-3'
  },
  {
    id: 'useless-facts-known',
    category: 'Knowledge',
    prompt: 'Useless facts you know',
    rangePrompt: 'Range: 5-1000',
    expectedRange: '20-100'
  },
  {
    id: 'superstitions-believed',
    category: 'Beliefs',
    prompt: 'Superstitions you believe in',
    rangePrompt: 'Range: 0-20',
    expectedRange: '0-3'
  },
  {
    id: 'lucky-numbers',
    category: 'Beliefs',
    prompt: 'Your lucky number',
    rangePrompt: 'Range: 1-100',
    expectedRange: '7, 13, 21'
  },
  {
    id: 'celebrity-encounters',
    category: 'Experience',
    prompt: 'Celebrities you\'ve met',
    rangePrompt: 'Range: 0-20',
    expectedRange: '0-2'
  },
  {
    id: 'weird-talents',
    category: 'Skills',
    prompt: 'Weird talents you have',
    rangePrompt: 'Range: 0-10',
    expectedRange: '1-3'
  },
  {
    id: 'broken-bones',
    category: 'Experience',
    prompt: 'Bones you\'ve broken',
    rangePrompt: 'Range: 0-10',
    expectedRange: '0-2'
  },
  {
    id: 'embarrassing-moments-monthly',
    category: 'Experience',
    prompt: 'Embarrassing moments per month',
    rangePrompt: 'Range: 0-20',
    expectedRange: '1-5'
  },
  {
    id: 'conspiracy-theories-believed',
    category: 'Beliefs',
    prompt: 'Conspiracy theories you believe',
    rangePrompt: 'Range: 0-20',
    expectedRange: '0-2'
  },
  {
    id: 'inside-jokes-active',
    category: 'Social',
    prompt: 'Active inside jokes you have',
    rangePrompt: 'Range: 0-50',
    expectedRange: '3-12'
  }
];

// Get random question excluding recently used ones
export function getRandomQuestion(excludeIds: string[] = []): RangeQuestion {
  const available = rangeQuestions.filter(q => !excludeIds.includes(q.id));
  if (available.length === 0) {
    // If all questions used, reset and use any
    return rangeQuestions[Math.floor(Math.random() * rangeQuestions.length)];
  }
  return available[Math.floor(Math.random() * available.length)];
}

// Get questions by category
export function getQuestionsByCategory(category: string): RangeQuestion[] {
  return rangeQuestions.filter(q => q.category === category);
}

// Get all unique categories
export function getQuestionCategories(): string[] {
  return [...new Set(rangeQuestions.map(q => q.category))];
}
