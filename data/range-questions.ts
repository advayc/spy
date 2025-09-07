// Range game questions - each person gets the same prompt except one who gets a range
export interface RangeQuestion {
  id: string;
  category: string;
  prompt: string; // What everyone gets
  rangePrompt: string; // What the spy gets
}

export const rangeQuestions: RangeQuestion[] = [
  // Age & Life Events
  {
    id: 'first-kiss-age',
    category: 'Life Events',
    prompt: 'Normal age of first kiss',
    rangePrompt: 'Range: 1-20'
  },
  {
    id: 'average-marks',
    category: 'Life Events',
    prompt: 'Average marks in school',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'driving-age',
    category: 'Life Events', 
    prompt: 'Age you learned to drive',
    rangePrompt: 'Range: 10-25'
  },
  {
    id: 'moved-out-age',
    category: 'Life Events',
    prompt: 'Age you moved out of parents house',
    rangePrompt: 'Range: 15-35'
  },
  {
    id: 'first-job-age',
    category: 'Life Events',
    prompt: 'Age of your first paid job',
    rangePrompt: 'Range: 12-25'
  },
  {
    id: 'college-graduation-age',
    category: 'Life Events',
    prompt: 'Number of streaming services you have',
    rangePrompt: 'Range: 0-5'
  },
  // Additional Life Events questions
  {
    id: 'first-smartphone-age',
    category: 'Life Events',
    prompt: 'Age you got your first smartphone',
    rangePrompt: 'Range: 8-30'
  },
  {
    id: 'first-pet-age',
    category: 'Life Events',
    prompt: 'Age you got your first pet',
    rangePrompt: 'Range: 1-25'
  },
  {
    id: 'college-start-age',
    category: 'Life Events',
    prompt: 'Age you started college/university',
    rangePrompt: 'Range: 17-35'
  },
  {
    id: 'high-school-graduation-age',
    category: 'Life Events',
    prompt: 'Age you graduated high school',
    rangePrompt: 'Range: 16-20'
  },
  {
    id: 'marriage-age',
    category: 'Life Events',
    prompt: 'Age you got married',
    rangePrompt: 'Range: 18-60'
  },
  {
    id: 'first-child-age',
    category: 'Life Events',
    prompt: 'Age you had your first child',
    rangePrompt: 'Range: 18-45'
  },
  {
    id: 'first-car-age',
    category: 'Life Events',
    prompt: 'Age you bought your first car',
    rangePrompt: 'Range: 16-35'
  },
  {
    id: 'drivers-license-age',
    category: 'Life Events',
    prompt: 'Age you got your driver\'s license',
    rangePrompt: 'Range: 14-28'
  },
  {
    id: 'current-city-move-age',
    category: 'Life Events',
    prompt: 'Age you moved to your current city',
    rangePrompt: 'Range: 0-70'
  },
  {
    id: 'full-time-work-age',
    category: 'Life Events',
    prompt: 'Age you started working full-time',
    rangePrompt: 'Range: 16-40'
  },
  {
    id: 'retirement-age',
    category: 'Life Events',
    prompt: 'Age you plan to retire',
    rangePrompt: 'Range: 20-75'
  },
  {
    id: 'learn-swim-age',
    category: 'Life Events',
    prompt: 'Age you learned to swim',
    rangePrompt: 'Range: 1-40'
  },
  {
    id: 'learn-bike-age',
    category: 'Life Events',
    prompt: 'Age you learned to ride a bike',
    rangePrompt: 'Range: 3-25'
  },
  {
    id: 'first-tattoo-age',
    category: 'Life Events',
    prompt: 'Age you got your first tattoo',
    rangePrompt: 'Range: 16-50'
  },
  {
    id: 'first-dating-age',
    category: 'Life Events',
    prompt: 'Age you started dating',
    rangePrompt: 'Range: 12-25'
  },
  {
    id: 'first-breakup-age',
    category: 'Life Events',
    prompt: 'Age you had your first breakup',
    rangePrompt: 'Range: 12-30'
  },
  {
    id: 'first-solo-travel-age',
    category: 'Life Events',
    prompt: 'Age you first traveled alone',
    rangePrompt: 'Range: 16-40'
  },
  {
    id: 'regular-exercise-age',
    category: 'Life Events',
    prompt: 'Age you started exercising regularly',
    rangePrompt: 'Range: 10-50'
  },
  {
    id: 'quit-smoking-age',
    category: 'Life Events',
    prompt: 'Age you quit smoking',
    rangePrompt: 'Range: 18-60'
  },
  {
    id: 'serious-saving-age',
    category: 'Life Events',
    prompt: 'Age you started saving money seriously',
    rangePrompt: 'Range: 18-45'
  },
  {
    id: 'shoes-owned',
    category: 'Fashion',
    prompt: 'Number of pairs of shoes you own',
    rangePrompt: 'Range: 1-100'
  },
  // Additional Fashion questions
  {
    id: 'watches-owned',
    category: 'Fashion',
    prompt: 'Number of watches you own',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'hats-owned',
    category: 'Fashion',
    prompt: 'Number of hats you own',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'jackets-owned',
    category: 'Fashion',
    prompt: 'Number of jackets you own',
    rangePrompt: 'Range: 1-30'
  },
  {
    id: 'suits-owned',
    category: 'Fashion',
    prompt: 'Number of suits you own',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'belts-owned',
    category: 'Fashion',
    prompt: 'Number of belts you own',
    rangePrompt: 'Range: 0-15'
  },
  {
    id: 'scarves-owned',
    category: 'Fashion',
    prompt: 'Number of scarves you own',
    rangePrompt: 'Range: 0-25'
  },
  {
    id: 'jewelry-pieces-owned',
    category: 'Fashion',
    prompt: 'Number of jewelry pieces you own',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'bags-owned',
    category: 'Fashion',
    prompt: 'Number of bags/purses you own',
    rangePrompt: 'Range: 0-30'
  },
  {
    id: 'sunglasses-owned',
    category: 'Fashion',
    prompt: 'Number of pairs of sunglasses you own',
    rangePrompt: 'Range: 0-15'
  },
  {
    id: 'sneakers-owned',
    category: 'Fashion',
    prompt: 'Number of pairs of shoes you own',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'boots-owned',
    category: 'Fashion',
    prompt: 'Number of pairs of boots you own',
    rangePrompt: 'Range: 0-15'
  },
  {
    id: 'coats-owned',
    category: 'Fashion',
    prompt: 'Number of coats you own',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'ties-owned',
    category: 'Fashion',
    prompt: 'Number of ties you own',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'gloves-owned',
    category: 'Fashion',
    prompt: 'Number of pairs of gloves you own',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'umbrellas-owned',
    category: 'Fashion',
    prompt: 'Number of umbrellas you own',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'wallets-owned',
    category: 'Fashion',
    prompt: 'Number of wallets you own',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'backpacks-owned',
    category: 'Fashion',
    prompt: 'Number of backpacks you own',
    rangePrompt: 'Range: 0-15'
  },
  {
    id: 'swimwear-owned',
    category: 'Fashion',
    prompt: 'Number of swimwear items you own',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'pajamas-owned',
    category: 'Fashion',
    prompt: 'Number of sets of pajamas you own',
    rangePrompt: 'Range: 1-20'
  },

  // Money & Spending
  {
    id: 'coffee-price',
    category: 'Money',
    prompt: 'How much you spend on coffee per month ($)',
    rangePrompt: 'Range: $0-500'
  },
  {
    id: 'lunch-price',
    category: 'Money',
    prompt: 'How much you spend on lunch ($)',
    rangePrompt: 'Range: $0-50'
  },
  {
    id: 'phone-bill',
    category: 'Money',
    prompt: 'Monthly phone bill ($)',
    rangePrompt: 'Range: $10-200'
  },
  {
    id: 'gas-per-week',
    category: 'Money',
    prompt: 'Money spent on gas per week ($)',
    rangePrompt: 'Range: $0-150'
  },
  {
    id: 'groceries-weekly',
    category: 'Money',
    prompt: 'Weekly grocery budget ($)',
    rangePrompt: 'Range: $20-300'
  },
  {
    id: 'vacation-budget',
    category: 'Money',
    prompt: 'Annual vacation budget ($)',
    rangePrompt: 'Range: $0-10000'
  },
  {
    id: 'movie-ticket-price',
    category: 'Money',
    prompt: 'Price you expect to pay for movie ticket ($)',
    rangePrompt: 'Range: $5-30'
  },
  {
    id: 'tip-percentage',
    category: 'Money',
    prompt: 'Percentage you tip at restaurants (%)',
    rangePrompt: 'Range: 0-50%'
  },
  {
    id: 'birthday-gift-budget',
    category: 'Money',
    prompt: 'Budget for friend\'s birthday gift ($)',
    rangePrompt: 'Range: $5-200'
  },
  {
    id: 'car-budget',
    category: 'Money',
    prompt: 'Budget for your next car ($)',
    rangePrompt: 'Range: $1000-100000'
  },
  // Additional Money questions
  {
    id: 'monthly-rent',
    category: 'Money',
    prompt: 'Monthly rent/mortgage payment ($)',
    rangePrompt: 'Range: $0-5000'
  },
  {
    id: 'monthly-utilities',
    category: 'Money',
    prompt: 'Monthly utility bills ($)',
    rangePrompt: 'Range: $50-800'
  },
  {
    id: 'monthly-insurance',
    category: 'Money',
    prompt: 'Monthly insurance premiums ($)',
    rangePrompt: 'Range: $50-1000'
  },
  {
    id: 'monthly-subscriptions',
    category: 'Money',
    prompt: 'Monthly subscription services cost ($)',
    rangePrompt: 'Range: $0-200'
  },
  {
    id: 'weekly-entertainment',
    category: 'Money',
    prompt: 'Weekly entertainment budget ($)',
    rangePrompt: 'Range: $0-500'
  },
  {
    id: 'monthly-clothing',
    category: 'Money',
    prompt: 'Monthly clothing budget ($)',
    rangePrompt: 'Range: $0-1000'
  },
  {
    id: 'annual-car-insurance',
    category: 'Money',
    prompt: 'Annual car insurance cost ($)',
    rangePrompt: 'Range: $300-3000'
  },
  {
    id: 'monthly-gym',
    category: 'Money',
    prompt: 'Monthly gym membership ($)',
    rangePrompt: 'Range: $0-200'
  },
  {
    id: 'weekly-alcohol',
    category: 'Money',
    prompt: 'Weekly alcohol spending ($)',
    rangePrompt: 'Range: $0-200'
  },
  {
    id: 'monthly-beauty',
    category: 'Money',
    prompt: 'Monthly beauty/personal care spending ($)',
    rangePrompt: 'Range: $0-500'
  },
  {
    id: 'annual-taxes',
    category: 'Money',
    prompt: 'Annual tax preparation cost ($)',
    rangePrompt: 'Range: $0-2000'
  },
  {
    id: 'monthly-debt',
    category: 'Money',
    prompt: 'Monthly debt payments ($)',
    rangePrompt: 'Range: $0-2000'
  },
  {
    id: 'weekly-fast-food',
    category: 'Money',
    prompt: 'Weekly fast food budget ($)',
    rangePrompt: 'Range: $0-200'
  },
  {
    id: 'monthly-transportation',
    category: 'Money',
    prompt: 'Monthly transportation cost ($)',
    rangePrompt: 'Range: $0-800'
  },
  {
    id: 'annual-home-maintenance',
    category: 'Money',
    prompt: 'Annual home maintenance budget ($)',
    rangePrompt: 'Range: $0-5000'
  },
  {
    id: 'monthly-childcare',
    category: 'Money',
    prompt: 'Monthly childcare cost ($)',
    rangePrompt: 'Range: $0-2000'
  },
  {
    id: 'weekly-coffee-shop',
    category: 'Money',
    prompt: 'Weekly coffee shop spending ($)',
    rangePrompt: 'Range: $0-100'
  },
  {
    id: 'monthly-dining-out',
    category: 'Money',
    prompt: 'Monthly dining out budget ($)',
    rangePrompt: 'Range: $0-1000'
  },
  {
    id: 'annual-gifts',
    category: 'Money',
    prompt: 'Annual gift giving budget ($)',
    rangePrompt: 'Range: $0-2000'
  },
  {
    id: 'monthly-savings',
    category: 'Money',
    prompt: 'Monthly savings amount ($)',
    rangePrompt: 'Range: $0-5000'
  },

  // Preferences & Ratings
  {
    id: 'pizza-rating',
    category: 'Food',
    prompt: 'Rate pizza out of 10',
    rangePrompt: 'Range: 1-10'
  },
  {
    id: 'ideal-temperature',
    category: 'Preferences',
    prompt: 'Ideal room temperature (°C)',
    rangePrompt: 'Range: 15-30°C'
  },
  {
    id: 'spice-tolerance',
    category: 'Food',
    prompt: 'Spice tolerance level (1-10)',
    rangePrompt: 'Range: 1-10'
  },
  {
    id: 'movie-length-ideal',
    category: 'Entertainment',
    prompt: 'Ideal movie length (minutes)',
    rangePrompt: 'Range: 60-240'
  },
  {
    id: 'party-size-ideal',
    category: 'Social',
    prompt: 'Ideal number of people at a party',
    rangePrompt: 'Range: 2-100'
  },
  {
    id: 'vacation-days-ideal',
    category: 'Travel',
    prompt: 'Ideal vacation length (days)',
    rangePrompt: 'Range: 1-30'
  },
  {
    id: 'workout-intensity',
    category: 'Health',
    prompt: 'Workout intensity preference (1-10)',
    rangePrompt: 'Range: 1-10'
  },
  {
    id: 'music-volume',
    category: 'Music',
    prompt: 'Preferred music volume level (1-10)',
    rangePrompt: 'Range: 1-10'
  },
  // Additional Music questions
  {
    id: 'songs-in-library',
    category: 'Music',
    prompt: 'Number of songs in your music library',
    rangePrompt: 'Range: 0-50000'
  },
  {
    id: 'playlists-have',
    category: 'Music',
    prompt: 'Number of playlists you have',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'concerts-attended-music',
    category: 'Music',
    prompt: 'Number of concerts you\'ve been to',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'instruments-play',
    category: 'Music',
    prompt: 'Number of instruments you play',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'music-lessons-taken',
    category: 'Music',
    prompt: 'Number of music lessons you\'ve taken',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'karaoke-songs-known',
    category: 'Music',
    prompt: 'Number of karaoke songs you know',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'vinyl-records-owned',
    category: 'Music',
    prompt: 'Number of vinyl records you own',
    rangePrompt: 'Range: 0-200'
  },
  {
    id: 'cds-owned',
    category: 'Music',
    prompt: 'Number of CDs you own',
    rangePrompt: 'Range: 0-500'
  },
  {
    id: 'cassette-tapes-owned',
    category: 'Music',
    prompt: 'Number of cassette tapes you own',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'music-videos-watched',
    category: 'Music',
    prompt: 'Number of music videos you\'ve watched',
    rangePrompt: 'Range: 0-1000'
  },
  {
    id: 'music-festivals-attended',
    category: 'Music',
    prompt: 'Number of music festivals you\'ve attended',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'band-t-shirts-owned',
    category: 'Music',
    prompt: 'Number of band t-shirts you own',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'autographed-albums',
    category: 'Music',
    prompt: 'Number of autographed albums you have',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'music-awards-won',
    category: 'Music',
    prompt: 'Number of music awards you\'ve won',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'times-performed-publicly',
    category: 'Music',
    prompt: 'Number of times you\'ve performed publicly',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'songs-written',
    category: 'Music',
    prompt: 'Number of songs you\'ve written',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'music-genres-liked',
    category: 'Music',
    prompt: 'Number of music genres you like',
    rangePrompt: 'Range: 1-20'
  },
  {
    id: 'favorite-artists',
    category: 'Music',
    prompt: 'Number of favorite artists',
    rangePrompt: 'Range: 1-50'
  },
  {
    id: 'favorite-bands',
    category: 'Music',
    prompt: 'Number of favorite bands',
    rangePrompt: 'Range: 1-30'
  },
  {
    id: 'music-streaming-hours-daily',
    category: 'Music',
    prompt: 'Hours of music streaming per day',
    rangePrompt: 'Range: 0-16'
  },
  {
    id: 'texting-response-time',
    category: 'Communication',
    prompt: 'Minutes to respond to a text',
    rangePrompt: 'Range: 1-1440'
  },
  // Additional Communication questions
  {
    id: 'languages-spoken-fluently',
    category: 'Communication',
    prompt: 'Number of languages you speak fluently',
    rangePrompt: 'Range: 1-5'
  },
  {
    id: 'languages-understood',
    category: 'Communication',
    prompt: 'Number of languages you understand',
    rangePrompt: 'Range: 1-8'
  },
  {
    id: 'languages-learning',
    category: 'Communication',
    prompt: 'Number of languages you\'re learning',
    rangePrompt: 'Range: 0-3'
  },
  {
    id: 'emails-sent-daily-comm',
    category: 'Communication',
    prompt: 'Number of emails you send daily',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'texts-sent-daily-comm',
    category: 'Communication',
    prompt: 'Number of texts you send daily',
    rangePrompt: 'Range: 0-200'
  },
  {
    id: 'calls-made-daily',
    category: 'Communication',
    prompt: 'Number of calls you make daily',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'video-calls-weekly-comm',
    category: 'Communication',
    prompt: 'Number of video calls you make weekly',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'letters-written-monthly',
    category: 'Communication',
    prompt: 'Number of letters you write monthly',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'postcards-sent-yearly',
    category: 'Communication',
    prompt: 'Number of postcards you send yearly',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'thank-you-notes-monthly',
    category: 'Communication',
    prompt: 'Number of thank you notes you write monthly',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'birthday-cards-sent-yearly',
    category: 'Communication',
    prompt: 'Number of birthday cards you send yearly',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'christmas-cards-sent-yearly',
    category: 'Communication',
    prompt: 'Number of Christmas cards you send yearly',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'times-talk-to-self-daily',
    category: 'Communication',
    prompt: 'Number of times you talk to yourself daily',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'times-interrupt-others-daily',
    category: 'Communication',
    prompt: 'Number of times you interrupt others daily',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'times-get-interrupted-daily',
    category: 'Communication',
    prompt: 'Number of times you get interrupted daily',
    rangePrompt: 'Range: 0-30'
  },
  {
    id: 'compliments-received-daily',
    category: 'Communication',
    prompt: 'Number of compliments you receive daily',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'criticisms-received-weekly',
    category: 'Communication',
    prompt: 'Number of criticisms you receive weekly',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'arguments-had-monthly',
    category: 'Communication',
    prompt: 'Number of arguments you have monthly',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'apologies-given-monthly',
    category: 'Communication',
    prompt: 'Number of apologies you give monthly',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'apologies-received-monthly',
    category: 'Communication',
    prompt: 'Number of apologies you receive monthly',
    rangePrompt: 'Range: 0-10'
  },
  // Additional Preferences questions
  {
    id: 'shower-temperature',
    category: 'Preferences',
    prompt: 'Preferred shower temperature (°C)',
    rangePrompt: 'Range: 30-50°C'
  },
  {
    id: 'sleep-hours-nightly',
    category: 'Preferences',
    prompt: 'Preferred sleeping hours per night',
    rangePrompt: 'Range: 4-12'
  },
  {
    id: 'wake-up-time',
    category: 'Preferences',
    prompt: 'Preferred wake-up time',
    rangePrompt: 'Range: 4:00-12:00'
  },
  {
    id: 'bedtime',
    category: 'Preferences',
    prompt: 'Preferred bedtime',
    rangePrompt: 'Range: 20:00-4:00'
  },
  {
    id: 'pillows-number',
    category: 'Preferences',
    prompt: 'Preferred number of pillows',
    rangePrompt: 'Range: 1-6'
  },
  {
    id: 'mattress-firmness',
    category: 'Preferences',
    prompt: 'Preferred mattress firmness (1-10)',
    rangePrompt: 'Range: 1-10'
  },
  {
    id: 'room-lighting',
    category: 'Preferences',
    prompt: 'Preferred room lighting level (1-10)',
    rangePrompt: 'Range: 1-10'
  },
  {
    id: 'concentration-noise',
    category: 'Preferences',
    prompt: 'Preferred noise level for concentration (1-10)',
    rangePrompt: 'Range: 1-10'
  },
  {
    id: 'screen-time-hours',
    category: 'Preferences',
    prompt: 'Preferred number of hours screen time daily',
    rangePrompt: 'Range: 0-16'
  },
  {
    id: 'books-read-yearly',
    category: 'Preferences',
    prompt: 'Preferred number of books read yearly',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'movies-watched-monthly',
    category: 'Preferences',
    prompt: 'Preferred number of movies watched monthly',
    rangePrompt: 'Range: 0-30'
  },
  {
    id: 'music-genres-liked',
    category: 'Preferences',
    prompt: 'Number of music genres you like',
    rangePrompt: 'Range: 1-20'
  },
  {
    id: 'coffee-temperature',
    category: 'Preferences',
    prompt: 'Preferred coffee temperature',
    rangePrompt: 'Range: 40-90°C'
  },
  {
    id: 'ice-cream-flavors',
    category: 'Preferences',
    prompt: 'Number of ice cream flavors you like',
    rangePrompt: 'Range: 1-20'
  },
  {
    id: 'pizza-toppings',
    category: 'Preferences',
    prompt: 'Number of pizza toppings you prefer',
    rangePrompt: 'Range: 1-10'
  },
  {
    id: 'vacation-destinations',
    category: 'Preferences',
    prompt: 'Number of vacation destinations you like',
    rangePrompt: 'Range: 1-50'
  },
  {
    id: 'outdoor-weather',
    category: 'Preferences',
    prompt: 'Preferred weather for outdoor activities',
    rangePrompt: 'Range: 10-35°C'
  },
  {
    id: 'exercise-time-day',
    category: 'Preferences',
    prompt: 'Preferred time of day for exercise',
    rangePrompt: 'Range: 5:00-22:00'
  },
  {
    id: 'hobby-hours-weekly',
    category: 'Preferences',
    prompt: 'Preferred number of hours for hobbies weekly',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'social-circle-size',
    category: 'Preferences',
    prompt: 'Preferred number of friends in social circle',
    rangePrompt: 'Range: 1-100'
  },

  // Frequency & Habits
  {
    id: 'haircut-frequency',
    category: 'Grooming',
    prompt: 'Weeks between haircuts',
    rangePrompt: 'Range: 2-52'
  },
  // Additional Grooming questions
  {
    id: 'shower-minutes-daily',
    category: 'Grooming',
    prompt: 'Minutes spent showering daily',
    rangePrompt: 'Range: 5-30'
  },
  {
    id: 'teeth-brushing-daily',
    category: 'Grooming',
    prompt: 'Times you brush your teeth daily',
    rangePrompt: 'Range: 1-3'
  },
  {
    id: 'flossing-daily',
    category: 'Grooming',
    prompt: 'Times you floss daily',
    rangePrompt: 'Range: 0-2'
  },
  {
    id: 'hair-brushing-daily',
    category: 'Grooming',
    prompt: 'Times you brush your hair daily',
    rangePrompt: 'Range: 0-3'
  },
  {
    id: 'shaving-frequency',
    category: 'Grooming',
    prompt: 'Times you shave daily/weekly',
    rangePrompt: 'Range: 0-7'
  },
  {
    id: 'nail-trimming-weekly',
    category: 'Grooming',
    prompt: 'Times you trim your nails weekly',
    rangePrompt: 'Range: 0-2'
  },
  {
    id: 'face-washing-daily',
    category: 'Grooming',
    prompt: 'Times you wash your face daily',
    rangePrompt: 'Range: 1-3'
  },
  {
    id: 'moisturizing-daily',
    category: 'Grooming',
    prompt: 'Times you moisturize daily',
    rangePrompt: 'Range: 0-2'
  },
  {
    id: 'sunscreen-application-daily',
    category: 'Grooming',
    prompt: 'Times you apply sunscreen daily',
    rangePrompt: 'Range: 0-2'
  },
  {
    id: 'hair-styling-daily',
    category: 'Grooming',
    prompt: 'Times you style your hair daily',
    rangePrompt: 'Range: 0-2'
  },
  {
    id: 'clothes-changing-daily',
    category: 'Grooming',
    prompt: 'Times you change your clothes daily',
    rangePrompt: 'Range: 1-3'
  },
  {
    id: 'clothes-ironing-weekly',
    category: 'Grooming',
    prompt: 'Times you iron your clothes weekly',
    rangePrompt: 'Range: 0-7'
  },
  {
    id: 'clothes-dry-cleaning-monthly',
    category: 'Grooming',
    prompt: 'Times you dry clean your clothes monthly',
    rangePrompt: 'Range: 0-4'
  },
  {
    id: 'manicures-pedicures-monthly',
    category: 'Grooming',
    prompt: 'Times you get manicures/pedicures monthly',
    rangePrompt: 'Range: 0-2'
  },
  {
    id: 'haircuts-monthly',
    category: 'Grooming',
    prompt: 'Times you get haircuts monthly',
    rangePrompt: 'Range: 0-1'
  },
  {
    id: 'hair-dyeing-monthly',
    category: 'Grooming',
    prompt: 'Times you dye your hair monthly',
    rangePrompt: 'Range: 0-1'
  },
  {
    id: 'facials-monthly',
    category: 'Grooming',
    prompt: 'Times you get facials monthly',
    rangePrompt: 'Range: 0-4'
  },
  {
    id: 'massages-monthly',
    category: 'Grooming',
    prompt: 'Times you get massages monthly',
    rangePrompt: 'Range: 0-4'
  },
  {
    id: 'deodorant-application-daily',
    category: 'Grooming',
    prompt: 'Times you use deodorant daily',
    rangePrompt: 'Range: 1-2'
  },
  {
    id: 'perfume-application-daily',
    category: 'Grooming',
    prompt: 'Times you use perfume/cologne daily',
    rangePrompt: 'Range: 0-2'
  },
  {
    id: 'laundry-frequency',
    category: 'Chores',
    prompt: 'Days between doing laundry',
    rangePrompt: 'Range: 1-30'
  },
  {
    id: 'laundry-frequency',
    category: 'Chores',
    prompt: 'Days between doing laundry',
    rangePrompt: 'Range: 1-30'
  },
  {
    id: 'grocery-shopping-frequency',
    category: 'Chores',
    prompt: 'Days between grocery shopping',
    rangePrompt: 'Range: 1-21'
  },
  // Additional Chores questions
  {
    id: 'kitchen-cleaning-minutes-daily',
    category: 'Chores',
    prompt: 'Minutes spent cleaning kitchen daily',
    rangePrompt: 'Range: 5-60'
  },
  {
    id: 'bathroom-cleaning-minutes-weekly',
    category: 'Chores',
    prompt: 'Minutes spent cleaning bathroom weekly',
    rangePrompt: 'Range: 10-120'
  },
  {
    id: 'vacuuming-minutes-weekly',
    category: 'Chores',
    prompt: 'Minutes spent vacuuming weekly',
    rangePrompt: 'Range: 10-60'
  },
  {
    id: 'dusting-minutes-weekly',
    category: 'Chores',
    prompt: 'Minutes spent dusting weekly',
    rangePrompt: 'Range: 5-30'
  },
  {
    id: 'lawn-mowing-minutes-weekly',
    category: 'Chores',
    prompt: 'Minutes spent mowing lawn weekly',
    rangePrompt: 'Range: 0-120'
  },
  {
    id: 'plant-watering-minutes-weekly',
    category: 'Chores',
    prompt: 'Minutes spent watering plants weekly',
    rangePrompt: 'Range: 5-30'
  },
  {
    id: 'dish-washing-minutes-daily',
    category: 'Chores',
    prompt: 'Minutes spent washing dishes daily',
    rangePrompt: 'Range: 5-45'
  },
  {
    id: 'dishwasher-loading-daily',
    category: 'Chores',
    prompt: 'Times you load/unload dishwasher daily',
    rangePrompt: 'Range: 0-2'
  },
  {
    id: 'trash-taking-out-weekly',
    category: 'Chores',
    prompt: 'Times you take out trash weekly',
    rangePrompt: 'Range: 1-7'
  },
  {
    id: 'recycling-weekly',
    category: 'Chores',
    prompt: 'Times you do recycling weekly',
    rangePrompt: 'Range: 0-7'
  },
  {
    id: 'closet-organizing-monthly',
    category: 'Chores',
    prompt: 'Times you organize closets monthly',
    rangePrompt: 'Range: 0-4'
  },
  {
    id: 'window-cleaning-monthly',
    category: 'Chores',
    prompt: 'Times you clean windows monthly',
    rangePrompt: 'Range: 0-2'
  },
  {
    id: 'car-washing-monthly',
    category: 'Chores',
    prompt: 'Times you wash your car monthly',
    rangePrompt: 'Range: 0-4'
  },
  {
    id: 'sheet-changing-weekly',
    category: 'Chores',
    prompt: 'Times you change sheets weekly',
    rangePrompt: 'Range: 0-2'
  },
  {
    id: 'laundry-folding-weekly',
    category: 'Chores',
    prompt: 'Times you fold laundry weekly',
    rangePrompt: 'Range: 1-7'
  },
  {
    id: 'ironing-clothes-weekly',
    category: 'Chores',
    prompt: 'Times you iron clothes weekly',
    rangePrompt: 'Range: 0-7'
  },
  {
    id: 'meal-cooking-weekly',
    category: 'Chores',
    prompt: 'Times you cook meals weekly',
    rangePrompt: 'Range: 0-21'
  },
  {
    id: 'meal-prepping-weekly',
    category: 'Chores',
    prompt: 'Times you do meal prepping weekly',
    rangePrompt: 'Range: 0-7'
  },
  {
    id: 'grocery-shopping-weekly',
    category: 'Chores',
    prompt: 'Times you go grocery shopping weekly',
    rangePrompt: 'Range: 1-3'
  },
  {
    id: 'bill-paying-monthly',
    category: 'Chores',
    prompt: 'Times you pay bills monthly',
    rangePrompt: 'Range: 1-4'
  },
  {
    id: 'car-wash-frequency',
    category: 'Maintenance',
    prompt: 'Weeks between washing your car',
    rangePrompt: 'Range: 1-52'
  },
  {
    id: 'dentist-frequency',
    category: 'Health',
    prompt: 'Months between dentist visits',
    rangePrompt: 'Range: 3-24'
  },
  {
    id: 'car-wash-frequency',
    category: 'Maintenance',
    prompt: 'Weeks between washing your car',
    rangePrompt: 'Range: 1-52'
  },
  {
    id: 'oil-change-frequency',
    category: 'Maintenance',
    prompt: 'Months between oil changes',
    rangePrompt: 'Range: 2-12'
  },
  // Additional Maintenance questions
  {
    id: 'miles-driven-yearly',
    category: 'Maintenance',
    prompt: 'Miles you drive yearly',
    rangePrompt: 'Range: 1000-50000'
  },
  {
    id: 'gas-gallons-monthly',
    category: 'Maintenance',
    prompt: 'Gallons of gas you use monthly',
    rangePrompt: 'Range: 10-200'
  },
  {
    id: 'oil-changes-yearly',
    category: 'Maintenance',
    prompt: 'Oil changes you get yearly',
    rangePrompt: 'Range: 1-6'
  },
  {
    id: 'tire-rotations-yearly',
    category: 'Maintenance',
    prompt: 'Tire rotations you get yearly',
    rangePrompt: 'Range: 0-2'
  },
  {
    id: 'car-washes-monthly',
    category: 'Maintenance',
    prompt: 'Car washes you get monthly',
    rangePrompt: 'Range: 0-4'
  },
  {
    id: 'car-detailing-yearly',
    category: 'Maintenance',
    prompt: 'Car detailing you get yearly',
    rangePrompt: 'Range: 0-2'
  },
  {
    id: 'home-repairs-yearly',
    category: 'Maintenance',
    prompt: 'Home repairs you do yearly',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'plumbing-issues-yearly',
    category: 'Maintenance',
    prompt: 'Plumbing issues you fix yearly',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'electrical-issues-yearly',
    category: 'Maintenance',
    prompt: 'Electrical issues you fix yearly',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'painting-yearly',
    category: 'Maintenance',
    prompt: 'Painting you do yearly',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'roof-repairs-yearly',
    category: 'Maintenance',
    prompt: 'Roof repairs you get yearly',
    rangePrompt: 'Range: 0-2'
  },
  {
    id: 'hvac-maintenance-yearly',
    category: 'Maintenance',
    prompt: 'HVAC maintenance you get yearly',
    rangePrompt: 'Range: 0-2'
  },
  {
    id: 'appliance-repairs-yearly',
    category: 'Maintenance',
    prompt: 'Appliance repairs you get yearly',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'pest-control-yearly',
    category: 'Maintenance',
    prompt: 'Pest control you get yearly',
    rangePrompt: 'Range: 0-4'
  },
  {
    id: 'lawn-care-monthly',
    category: 'Maintenance',
    prompt: 'Lawn care you get monthly',
    rangePrompt: 'Range: 0-12'
  },
  {
    id: 'snow-removal-yearly',
    category: 'Maintenance',
    prompt: 'Snow removal you do yearly',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'pool-maintenance-monthly',
    category: 'Maintenance',
    prompt: 'Pool maintenance you do monthly',
    rangePrompt: 'Range: 0-12'
  },
  {
    id: 'bike-maintenance-yearly',
    category: 'Maintenance',
    prompt: 'Bike maintenance you do yearly',
    rangePrompt: 'Range: 0-4'
  },
  {
    id: 'equipment-calibration-yearly',
    category: 'Maintenance',
    prompt: 'Equipment calibration you get yearly',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'warranty-claims-yearly',
    category: 'Maintenance',
    prompt: 'Warranty claims you file yearly',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'social-media-check',
    category: 'Technology',
    prompt: 'Times you check social media per day',
    rangePrompt: 'Range: 0-200'
  },
  {
    id: 'restaurant-frequency',
    category: 'Food',
    prompt: 'Times you eat out per week',
    rangePrompt: 'Range: 0-21'
  },
  {
    id: 'movie-theater-frequency',
    category: 'Entertainment',
    prompt: 'Movies you see in theater per year',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'family-call-frequency',
    category: 'Family',
    prompt: 'Days between calling family',
    rangePrompt: 'Range: 1-365'
  },
  // Additional Family questions
  {
    id: 'siblings-have',
    category: 'Family',
    prompt: 'Siblings you have',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'cousins-have',
    category: 'Family',
    prompt: 'Cousins you have',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'aunts-uncles-have',
    category: 'Family',
    prompt: 'Aunts/uncles you have',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'grandparents-have',
    category: 'Family',
    prompt: 'Grandparents you have',
    rangePrompt: 'Range: 0-4'
  },
  {
    id: 'nieces-nephews-have',
    category: 'Family',
    prompt: 'Nieces/nephews you have',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'children-have',
    category: 'Family',
    prompt: 'Children you have',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'grandchildren-have',
    category: 'Family',
    prompt: 'Grandchildren you have',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'family-reunions-attend-yearly',
    category: 'Family',
    prompt: 'Family reunions you attend yearly',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'family-photos-have',
    category: 'Family',
    prompt: 'Family photos you have',
    rangePrompt: 'Range: 0-1000'
  },
  {
    id: 'family-videos-have',
    category: 'Family',
    prompt: 'Family videos you have',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'family-recipes-know',
    category: 'Family',
    prompt: 'Family recipes you know',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'family-traditions-maintain',
    category: 'Family',
    prompt: 'Family traditions you maintain',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'family-heirlooms-own',
    category: 'Family',
    prompt: 'Family heirlooms you own',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'family-pets-had',
    category: 'Family',
    prompt: 'Family pets you have had',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'family-vacations-taken',
    category: 'Family',
    prompt: 'Family vacations you have taken',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'family-weddings-attended',
    category: 'Family',
    prompt: 'Family weddings you have attended',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'family-funerals-attended',
    category: 'Family',
    prompt: 'Family funerals you have attended',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'family-birthdays-celebrate',
    category: 'Family',
    prompt: 'Family birthdays you celebrate',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'family-holidays-observe',
    category: 'Family',
    prompt: 'Family holidays you observe',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'family-phone-calls-weekly',
    category: 'Family',
    prompt: 'Family phone calls you make weekly',
    rangePrompt: 'Range: 0-20'
  },

  // Physical & Health
  {
    id: 'steps-per-day',
    category: 'Health',
    prompt: 'Steps you walk per day',
    rangePrompt: 'Range: 1000-30000',
  },
  {
    id: 'water-glasses-daily',
    category: 'Health',
    prompt: 'Glasses of water you drink daily',
    rangePrompt: 'Range: 1-20',
  },
  {
    id: 'height-inches',
    category: 'Physical',
    prompt: 'Your height in inches',
    rangePrompt: 'Range: 48-84',
  },
  {
    id: 'ideal-weight',
    category: 'Health',
    prompt: 'Your ideal weight (lbs)',
    rangePrompt: 'Range: 90-300',
  },
  {
    id: 'resting-heart-rate',
    category: 'Health',
    prompt: 'Your resting heart rate (bpm)',
    rangePrompt: 'Range: 50-120',
  },
  {
    id: 'flexibility-rating',
    category: 'Physical',
    prompt: 'Rate your flexibility (1-10)',
    rangePrompt: 'Range: 1-10',
  },
  {
    id: 'pain-tolerance',
    category: 'Physical',
    prompt: 'Rate your pain tolerance (1-10)',
    rangePrompt: 'Range: 1-10',
  },
  // Additional Physical questions
  {
    id: 'push-ups-can-do',
    category: 'Physical',
    prompt: 'Push-ups you can do',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'sit-ups-can-do',
    category: 'Physical',
    prompt: 'Sit-ups you can do',
    rangePrompt: 'Range: 0-200'
  },
  {
    id: 'pull-ups-can-do',
    category: 'Physical',
    prompt: 'Pull-ups you can do',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'miles-run-without-stopping',
    category: 'Physical',
    prompt: 'Miles you can run without stopping',
    rangePrompt: 'Range: 0-26'
  },
  {
    id: 'miles-walk-without-stopping',
    category: 'Physical',
    prompt: 'Miles you can walk without stopping',
    rangePrompt: 'Range: 1-50'
  },
  {
    id: 'pounds-can-lift',
    category: 'Physical',
    prompt: 'Pounds you can lift',
    rangePrompt: 'Range: 10-500'
  },
  {
    id: 'hours-stay-awake',
    category: 'Physical',
    prompt: 'Hours you can stay awake',
    rangePrompt: 'Range: 16-48'
  },
  {
    id: 'hours-can-sleep',
    category: 'Physical',
    prompt: 'Hours you can sleep',
    rangePrompt: 'Range: 4-16'
  },
  {
    id: 'temperature-degrees-tolerate',
    category: 'Physical',
    prompt: 'Degrees of temperature you can tolerate',
    rangePrompt: 'Range: 0-50°C'
  },
  {
    id: 'feet-can-jump',
    category: 'Physical',
    prompt: 'Feet you can jump',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'seconds-hold-breath',
    category: 'Physical',
    prompt: 'Seconds you can hold your breath',
    rangePrompt: 'Range: 10-300'
  },
  {
    id: 'mph-can-run',
    category: 'Physical',
    prompt: 'Miles per hour you can run',
    rangePrompt: 'Range: 4-15'
  },
  {
    id: 'calories-burn-daily',
    category: 'Physical',
    prompt: 'Calories you burn daily',
    rangePrompt: 'Range: 1000-5000'
  },
  {
    id: 'steps-take-daily',
    category: 'Physical',
    prompt: 'Steps you take daily',
    rangePrompt: 'Range: 1000-50000'
  },
  {
    id: 'flights-stairs-climb-daily',
    category: 'Physical',
    prompt: 'Flights of stairs you climb daily',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'hours-spend-standing-daily',
    category: 'Physical',
    prompt: 'Hours you spend standing daily',
    rangePrompt: 'Range: 0-16'
  },
  {
    id: 'hours-spend-sitting-daily',
    category: 'Physical',
    prompt: 'Hours you spend sitting daily',
    rangePrompt: 'Range: 0-16'
  },
  {
    id: 'pounds-weigh',
    category: 'Physical',
    prompt: 'Pounds you weigh',
    rangePrompt: 'Range: 80-400'
  },
  {
    id: 'inches-measure',
    category: 'Physical',
    prompt: 'Inches you measure (height)',
    rangePrompt: 'Range: 48-84'
  },
  {
    id: 'shoe-size-wear',
    category: 'Physical',
    prompt: 'Shoe size you wear',
    rangePrompt: 'Range: 5-15'
  },
  {
    id: 'energy-level',
    category: 'Health',
    prompt: 'Average energy level (1-10)',
    rangePrompt: 'Range: 1-10',
  },
  {
    id: 'sick-days-yearly',
    category: 'Health',
    prompt: 'Days you\'re sick per year',
    rangePrompt: 'Range: 0-50',
  },
  {
    id: 'vitamins-daily',
    category: 'Health',
    prompt: 'Number of vitamins/supplements you take daily',
    rangePrompt: 'Range: 0-20',
  },
  // Additional Health questions
  {
    id: 'doctors-seen-yearly',
    category: 'Health',
    prompt: 'Number of doctors you see yearly',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'medications-daily',
    category: 'Health',
    prompt: 'Number of medications you take daily',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'allergies-have',
    category: 'Health',
    prompt: 'Number of allergies you have',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'surgeries-had',
    category: 'Health',
    prompt: 'Number of surgeries you\'ve had',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'broken-bones-health',
    category: 'Health',
    prompt: 'Number of broken bones you\'ve had',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'stitches-had',
    category: 'Health',
    prompt: 'Number of stitches you\'ve had',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'vaccines-had',
    category: 'Health',
    prompt: 'Number of vaccines you\'ve had',
    rangePrompt: 'Range: 0-30'
  },
  {
    id: 'blood-tests-yearly',
    category: 'Health',
    prompt: 'Number of blood tests you\'ve had yearly',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'dental-cleanings-yearly',
    category: 'Health',
    prompt: 'Number of dental cleanings yearly',
    rangePrompt: 'Range: 0-4'
  },
  {
    id: 'eye-exams-yearly',
    category: 'Health',
    prompt: 'Number of eye exams yearly',
    rangePrompt: 'Range: 0-2'
  },
  {
    id: 'physical-exams-yearly',
    category: 'Health',
    prompt: 'Number of physical exams yearly',
    rangePrompt: 'Range: 0-2'
  },
  {
    id: 'mental-health-sessions',
    category: 'Health',
    prompt: 'Number of mental health sessions yearly',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'therapy-sessions-had',
    category: 'Health',
    prompt: 'Number of therapy sessions you\'ve had',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'hospital-stays',
    category: 'Health',
    prompt: 'Number of hospital stays you\'ve had',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'emergency-visits',
    category: 'Health',
    prompt: 'Number of emergency room visits you\'ve had',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'specialists-see',
    category: 'Health',
    prompt: 'Number of specialists you see',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'health-apps-used',
    category: 'Health',
    prompt: 'Number of health apps you use',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'fitness-trackers-owned',
    category: 'Health',
    prompt: 'Number of fitness trackers you\'ve owned',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'yoga-sessions-weekly',
    category: 'Health',
    prompt: 'Number of yoga sessions weekly',
    rangePrompt: 'Range: 0-7'
  },
  {
    id: 'meditation-sessions-daily',
    category: 'Health',
    prompt: 'Number of meditation sessions daily',
    rangePrompt: 'Range: 0-5'
  },

  // Skills & Abilities  
  {
    id: 'typing-speed',
    category: 'Skills',
    prompt: 'Typing speed (words per minute)',
    rangePrompt: 'Range: 10-150',
  },
  {
    id: 'cooking-skill',
    category: 'Skills',
    prompt: 'Rate your cooking skills (1-10)',
    rangePrompt: 'Range: 1-10',
  },
  {
    id: 'driving-skill',
    category: 'Skills',
    prompt: 'Rate your driving skills (1-10)',
    rangePrompt: 'Range: 1-10',
  },
  {
    id: 'math-skill',
    category: 'Skills',
    prompt: 'Rate your math skills (1-10)',
    rangePrompt: 'Range: 1-10',
  },
  {
    id: 'language-count',
    category: 'Skills',
    prompt: 'Number of languages you speak',
    rangePrompt: 'Range: 1-10',
  },
  {
    id: 'instrument-count',
    category: 'Skills',
    prompt: 'Number of instruments you can play',
    rangePrompt: 'Range: 0-10',
  },
  {
    id: 'sports-skill',
    category: 'Skills',
    prompt: 'Rate your athletic ability (1-10)',
    rangePrompt: 'Range: 1-10',
  },
  {
    id: 'art-skill',
    category: 'Skills',
    prompt: 'Rate your artistic ability (1-10)',
    rangePrompt: 'Range: 1-10',
  },
  {
    id: 'public-speaking-skill',
    category: 'Skills',
    prompt: 'Rate your public speaking (1-10)',
    rangePrompt: 'Range: 1-10',
  },
  {
    id: 'technology-skill',
    category: 'Skills',
    prompt: 'Rate your tech savviness (1-10)',
    rangePrompt: 'Range: 1-10',
  },
  // Additional Skills questions
  {
    id: 'programming-languages-known',
    category: 'Skills',
    prompt: 'Programming languages you know',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'recipes-can-cook',
    category: 'Skills',
    prompt: 'Recipes you can cook',
    rangePrompt: 'Range: 1-100'
  },
  {
    id: 'knots-can-tie',
    category: 'Skills',
    prompt: 'Knots you can tie',
    rangePrompt: 'Range: 1-20'
  },
  {
    id: 'dances-can-do',
    category: 'Skills',
    prompt: 'Dances you can do',
    rangePrompt: 'Range: 0-15'
  },
  {
    id: 'magic-tricks-known',
    category: 'Skills',
    prompt: 'Magic tricks you know',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'jokes-known',
    category: 'Skills',
    prompt: 'Jokes you know',
    rangePrompt: 'Range: 0-200'
  },
  {
    id: 'poems-can-recite',
    category: 'Skills',
    prompt: 'Poems you can recite',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'songs-can-sing',
    category: 'Skills',
    prompt: 'Songs you can sing',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'speeches-can-give',
    category: 'Skills',
    prompt: 'Speeches you can give',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'presentations-can-give',
    category: 'Skills',
    prompt: 'Presentations you can give',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'languages-can-translate',
    category: 'Skills',
    prompt: 'Languages you can translate',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'instruments-can-tune',
    category: 'Skills',
    prompt: 'Instruments you can tune',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'cars-can-fix',
    category: 'Skills',
    prompt: 'Cars you can fix',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'computers-can-build',
    category: 'Skills',
    prompt: 'Computers you can build',
    rangePrompt: 'Range: 0-3'
  },
  {
    id: 'websites-can-design',
    category: 'Skills',
    prompt: 'Websites you can design',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'books-can-recommend',
    category: 'Skills',
    prompt: 'Books you can recommend',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'movies-can-critique',
    category: 'Skills',
    prompt: 'Movies you can critique',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'wines-can-identify',
    category: 'Skills',
    prompt: 'Wines you can identify',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'beers-can-distinguish',
    category: 'Skills',
    prompt: 'Beers you can distinguish',
    rangePrompt: 'Range: 0-30'
  },
  {
    id: 'weird-talents',
    category: 'Skills',
    prompt: 'Weird talents you have',
    rangePrompt: 'Range: 0-10'
  },

  // Travel & Geography
  {
    id: 'countries-visited',
    category: 'Travel',
    prompt: 'Number of countries you\'ve visited',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'states-visited',
    category: 'Travel',
    prompt: 'Number of US states you\'ve visited',
    rangePrompt: 'Range: 1-50'
  },
  {
    id: 'flights-yearly',
    category: 'Travel',
    prompt: 'Number of flights you take per year',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'road-trip-hours',
    category: 'Travel',
    prompt: 'Max hours you\'ll drive in one day',
    rangePrompt: 'Range: 1-20',
  },
  {
    id: 'hotel-price-comfort',
    category: 'Travel',
    prompt: 'Price per night for comfortable hotel ($)',
    rangePrompt: 'Range: $30-500',
  },
  {
    id: 'packing-hours',
    category: 'Travel',
    prompt: 'Hours to pack for a week trip',
    rangePrompt: 'Range: 0.5-10',
  },
  {
    id: 'travel-planning-weeks',
    category: 'Travel',
    prompt: 'Weeks in advance you plan trips',
    rangePrompt: 'Range: 0-52',
  },
  {
    id: 'passport-check-frequency',
    category: 'Travel',
    prompt: 'Months between checking passport expiration',
    rangePrompt: 'Range: 1-60',
  },
  {
    id: 'luggage-weight',
    category: 'Travel',
    prompt: 'Weight of your typical suitcase (lbs)',
    rangePrompt: 'Range: 10-70',
  },
  {
    id: 'souvenir-budget',
    category: 'Travel',
    prompt: 'Souvenir budget per trip ($)',
    rangePrompt: 'Range: $0-300',
  },
  // Additional Travel questions
  {
    id: 'cities-lived-in',
    category: 'Travel',
    prompt: 'Number of cities you\'ve lived in',
    rangePrompt: 'Range: 1-20'
  },
  {
    id: 'houses-apartments-lived',
    category: 'Travel',
    prompt: 'Number of houses/apartments you\'ve lived in',
    rangePrompt: 'Range: 1-15'
  },
  {
    id: 'schools-attended',
    category: 'Travel',
    prompt: 'Number of schools you\'ve attended',
    rangePrompt: 'Range: 1-10'
  },
  {
    id: 'jobs-held',
    category: 'Travel',
    prompt: 'Number of jobs you\'ve had',
    rangePrompt: 'Range: 1-20'
  },
  {
    id: 'cars-owned',
    category: 'Travel',
    prompt: 'Number of cars you\'ve owned',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'pets-owned-total',
    category: 'Travel',
    prompt: 'Number of pets you\'ve owned',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'phones-owned',
    category: 'Travel',
    prompt: 'Number of phones you\'ve owned',
    rangePrompt: 'Range: 1-15'
  },
  {
    id: 'computers-owned',
    category: 'Travel',
    prompt: 'Number of computers you\'ve owned',
    rangePrompt: 'Range: 1-10'
  },
  {
    id: 'bikes-owned',
    category: 'Travel',
    prompt: 'Number of bikes you\'ve owned',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'boats-owned',
    category: 'Travel',
    prompt: 'Number of boats you\'ve owned',
    rangePrompt: 'Range: 0-3'
  },
  {
    id: 'countries-visited-travel',
    category: 'Travel',
    prompt: 'Number of countries you\'ve visited',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'continents-visited',
    category: 'Travel',
    prompt: 'Number of continents you\'ve visited',
    rangePrompt: 'Range: 1-7'
  },
  {
    id: 'islands-visited',
    category: 'Travel',
    prompt: 'Number of islands you\'ve visited',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'mountains-climbed',
    category: 'Travel',
    prompt: 'Number of mountains you\'ve climbed',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'deserts-visited',
    category: 'Travel',
    prompt: 'Number of deserts you\'ve visited',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'forests-hiked',
    category: 'Travel',
    prompt: 'Number of forests you\'ve hiked in',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'beaches-visited',
    category: 'Travel',
    prompt: 'Number of beaches you\'ve visited',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'lakes-swum',
    category: 'Travel',
    prompt: 'Number of lakes you\'ve swum in',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'rivers-crossed',
    category: 'Travel',
    prompt: 'Number of rivers you\'ve crossed',
    rangePrompt: 'Range: 0-30'
  },
  {
    id: 'oceans-sailed',
    category: 'Travel',
    prompt: 'Number of oceans you\'ve sailed on',
    rangePrompt: 'Range: 0-5'
  },

  // Technology & Digital Life
  {
    id: 'passwords-total',
    category: 'Technology',
    prompt: 'Number of online accounts you have',
    rangePrompt: 'Range: 5-500',
  },
  {
    id: 'email-unread',
    category: 'Technology',
    prompt: 'Unread emails in your inbox',
    rangePrompt: 'Range: 0-10000',
  },
  {
    id: 'phone-storage-used',
    category: 'Technology',
    prompt: 'Percentage of phone storage used (%)',
    rangePrompt: 'Range: 10-99%',
  },
  {
    id: 'apps-downloaded',
    category: 'Technology',
    prompt: 'Apps downloaded on your phone',
    rangePrompt: 'Range: 10-300',
  },
  {
    id: 'backup-frequency',
    category: 'Technology',
    prompt: 'Days between backing up your phone',
    rangePrompt: 'Range: 1-365',
  },
  {
    id: 'wifi-speed-home',
    category: 'Technology',
    prompt: 'Home internet speed (Mbps)',
    rangePrompt: 'Range: 1-1000',
  },
  {
    id: 'streaming-hours-daily',
    category: 'Technology',
    prompt: 'Hours of streaming content per day',
    rangePrompt: 'Range: 0-16',
  },
  {
    id: 'online-shopping-frequency',
    category: 'Technology',
    prompt: 'Online purchases per month',
    rangePrompt: 'Range: 0-50',
  },
  {
    id: 'device-upgrade-frequency',
    category: 'Technology',
    prompt: 'Years between phone upgrades',
    rangePrompt: 'Range: 1-10',
  },
  {
    id: 'video-game-hours',
    category: 'Technology',
    prompt: 'Hours gaming per week',
    rangePrompt: 'Range: 0-50',
  },
  // Additional Technology questions
  {
    id: 'devices-owned',
    category: 'Technology',
    prompt: 'Number of devices you own',
    rangePrompt: 'Range: 1-20'
  },
  {
    id: 'chargers-owned',
    category: 'Technology',
    prompt: 'Number of chargers you have',
    rangePrompt: 'Range: 1-10'
  },
  {
    id: 'cables-owned',
    category: 'Technology',
    prompt: 'Number of cables you have',
    rangePrompt: 'Range: 5-50'
  },
  {
    id: 'batteries-replaced-yearly',
    category: 'Technology',
    prompt: 'Batteries you replace yearly',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'software-updates-monthly',
    category: 'Technology',
    prompt: 'Software updates you install monthly',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'antivirus-scans-monthly',
    category: 'Technology',
    prompt: 'Antivirus scans you run monthly',
    rangePrompt: 'Range: 0-4'
  },
  {
    id: 'cloud-storage-accounts',
    category: 'Technology',
    prompt: 'Cloud storage accounts you have',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'email-accounts',
    category: 'Technology',
    prompt: 'Email accounts you have',
    rangePrompt: 'Range: 1-10'
  },
  {
    id: 'social-media-accounts',
    category: 'Technology',
    prompt: 'Social media accounts you have',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'websites-visited-daily',
    category: 'Technology',
    prompt: 'Websites you visit daily',
    rangePrompt: 'Range: 5-50'
  },
  {
    id: 'browser-tabs-open',
    category: 'Technology',
    prompt: 'Browser tabs you keep open',
    rangePrompt: 'Range: 1-100'
  },
  {
    id: 'bookmarks-have',
    category: 'Technology',
    prompt: 'Bookmarks you have',
    rangePrompt: 'Range: 0-1000'
  },
  {
    id: 'downloads-monthly',
    category: 'Technology',
    prompt: 'Downloads you do monthly',
    rangePrompt: 'Range: 0-200'
  },
  {
    id: 'uploads-monthly',
    category: 'Technology',
    prompt: 'Uploads you do monthly',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'photos-taken-monthly',
    category: 'Technology',
    prompt: 'Photos you take monthly',
    rangePrompt: 'Range: 0-1000'
  },
  {
    id: 'videos-recorded-monthly',
    category: 'Technology',
    prompt: 'Videos you record monthly',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'screenshots-taken-daily',
    category: 'Technology',
    prompt: 'Screenshots you take daily',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'passwords-have',
    category: 'Technology',
    prompt: 'Passwords you have',
    rangePrompt: 'Range: 5-200'
  },
  {
    id: 'two-factor-auths',
    category: 'Technology',
    prompt: 'Two-factor authentications you use',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'vpn-connections-monthly',
    category: 'Technology',
    prompt: 'VPN connections you make monthly',
    rangePrompt: 'Range: 0-30'
  },

  // Relationships & Social
  {
    id: 'close-friends-count',
    category: 'Social',
    prompt: 'Number of close friends you have',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'contacts-phone',
    category: 'Social',
    prompt: 'Contacts saved in your phone',
    rangePrompt: 'Range: 10-2000'
  },
  {
    id: 'dates-before-relationship',
    category: 'Relationships',
    prompt: 'Dates before becoming exclusive',
    rangePrompt: 'Range: 1-20'
  },
  {
    id: 'relationship-length-ideal',
    category: 'Relationships',
    prompt: 'Ideal relationship length before marriage (years)',
    rangePrompt: 'Range: 0.5-10'
  },
  // Additional Relationships questions
  {
    id: 'ex-partners-have',
    category: 'Relationships',
    prompt: 'Ex-partners you have',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'serious-relationships-had',
    category: 'Relationships',
    prompt: 'Serious relationships you have had',
    rangePrompt: 'Range: 0-15'
  },
  {
    id: 'dates-been-on',
    category: 'Relationships',
    prompt: 'Dates you have been on',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'marriage-proposals-received',
    category: 'Relationships',
    prompt: 'Marriage proposals you have received',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'engagements-had',
    category: 'Relationships',
    prompt: 'Engagements you have had',
    rangePrompt: 'Range: 0-3'
  },
  {
    id: 'weddings-been-in',
    category: 'Relationships',
    prompt: 'Weddings you have been in',
    rangePrompt: 'Range: 0-2'
  },
  {
    id: 'divorces-had',
    category: 'Relationships',
    prompt: 'Divorces you have had',
    rangePrompt: 'Range: 0-2'
  },
  {
    id: 'long-distance-relationships-had',
    category: 'Relationships',
    prompt: 'Long-distance relationships you have had',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'international-relationships-had',
    category: 'Relationships',
    prompt: 'International relationships you have had',
    rangePrompt: 'Range: 0-3'
  },
  {
    id: 'relationships-lasted-over-year',
    category: 'Relationships',
    prompt: 'Relationships that lasted over a year',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'relationships-lasted-over-5-years',
    category: 'Relationships',
    prompt: 'Relationships that lasted over 5 years',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'relationships-lasted-over-10-years',
    category: 'Relationships',
    prompt: 'Relationships that lasted over 10 years',
    rangePrompt: 'Range: 0-3'
  },
  {
    id: 'times-been-cheated-on',
    category: 'Relationships',
    prompt: 'Times you have been cheated on',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'times-cheated',
    category: 'Relationships',
    prompt: 'Times you have cheated',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'times-been-proposed-to',
    category: 'Relationships',
    prompt: 'Times you have been proposed to',
    rangePrompt: 'Range: 0-3'
  },
  {
    id: 'times-proposed',
    category: 'Relationships',
    prompt: 'Times you have proposed',
    rangePrompt: 'Range: 0-3'
  },
  {
    id: 'love-letters-written',
    category: 'Relationships',
    prompt: 'Love letters you have written',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'love-letters-received',
    category: 'Relationships',
    prompt: 'Love letters you have received',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'anniversary-celebrations-had',
    category: 'Relationships',
    prompt: 'Anniversary celebrations you have had',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'couples-counseling-sessions',
    category: 'Relationships',
    prompt: 'Couples counseling sessions you have had',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'social-events-monthly',
    category: 'Social',
    prompt: 'Social events you attend per month',
    rangePrompt: 'Range: 0-30'
  },
  {
    id: 'birthday-parties-yearly',
    category: 'Social',
    prompt: 'Birthday parties you attend per year',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'wedding-guest-count',
    category: 'Social',
    prompt: 'Ideal number of wedding guests',
    rangePrompt: 'Range: 10-500'
  },
  {
    id: 'small-talk-comfort',
    category: 'Social',
    prompt: 'Comfort with small talk (1-10)',
    rangePrompt: 'Range: 1-10'
  },
  {
    id: 'group-project-preference',
    category: 'Social',
    prompt: 'Ideal group project size',
    rangePrompt: 'Range: 1-10'
  },
  {
    id: 'party-hosting-frequency',
    category: 'Social',
    prompt: 'Times you host parties per year',
    rangePrompt: 'Range: 0-20'
  },
  // Additional Social questions
  {
    id: 'social-media-friends',
    category: 'Social',
    prompt: 'Number of social media friends/followers',
    rangePrompt: 'Range: 0-10000'
  },
  {
    id: 'texts-sent-daily',
    category: 'Social',
    prompt: 'Number of text messages sent daily',
    rangePrompt: 'Range: 0-200'
  },
  {
    id: 'phone-calls-weekly',
    category: 'Social',
    prompt: 'Number of phone calls made weekly',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'emails-sent-daily',
    category: 'Social',
    prompt: 'Number of emails sent daily',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'video-calls-weekly',
    category: 'Social',
    prompt: 'Number of video calls made weekly',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'group-chats-in',
    category: 'Social',
    prompt: 'Number of group chats you\'re in',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'people-hugged-daily',
    category: 'Social',
    prompt: 'Number of people you hug daily',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'compliments-given-weekly',
    category: 'Social',
    prompt: 'Number of compliments you give weekly',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'thank-yous-sent-monthly',
    category: 'Social',
    prompt: 'Number of thank you notes you send monthly',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'birthday-parties-attended',
    category: 'Social',
    prompt: 'Number of birthday parties you attend yearly',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'weddings-attended',
    category: 'Social',
    prompt: 'Number of weddings you attend yearly',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'funerals-attended',
    category: 'Social',
    prompt: 'Number of funerals you attend yearly',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'reunions-attended',
    category: 'Social',
    prompt: 'Number of reunions you attend yearly',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'networking-events-attended',
    category: 'Social',
    prompt: 'Number of networking events you attend yearly',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'volunteer-activities',
    category: 'Social',
    prompt: 'Number of volunteer activities you participate in yearly',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'clubs-memberships',
    category: 'Social',
    prompt: 'Number of clubs/organizations you\'re member of',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'sports-teams',
    category: 'Social',
    prompt: 'Number of sports teams you\'re on',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'committees-on',
    category: 'Social',
    prompt: 'Number of committees you\'re on',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'boards-on',
    category: 'Social',
    prompt: 'Number of boards you\'re on',
    rangePrompt: 'Range: 0-3'
  },
  {
    id: 'mentorship-relationships',
    category: 'Social',
    prompt: 'Number of mentorship relationships you have',
    rangePrompt: 'Range: 0-10'
  },

  // Food & Dining
  {
    id: 'spicy-scoville',
    category: 'Food',
    prompt: 'Spiciest pepper you can handle (Scoville units)',
    rangePrompt: 'Range: 0-2000000'
  },
  {
    id: 'coffee-ounces-daily',
    category: 'Food',
    prompt: 'Ounces of coffee you drink daily',
    rangePrompt: 'Range: 0-64'
  },
  {
    id: 'vegetables-daily',
    category: 'Food',
    prompt: 'Servings of vegetables per day',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'fast-food-monthly',
    category: 'Food',
    prompt: 'Fast food meals per month',
    rangePrompt: 'Range: 0-90'
  },
  {
    id: 'cooking-hours-weekly',
    category: 'Food',
    prompt: 'Hours spent cooking per week',
    rangePrompt: 'Range: 0-30'
  },
  {
    id: 'restaurant-tip-amount',
    category: 'Food',
    prompt: 'Typical restaurant tip ($)',
    rangePrompt: 'Range: $0-50'
  },
  {
    id: 'grocery-list-items',
    category: 'Food',
    prompt: 'Items on typical grocery list',
    rangePrompt: 'Range: 5-100'
  },
  {
    id: 'leftovers-days',
    category: 'Food',
    prompt: 'Days you\'ll eat leftovers',
    rangePrompt: 'Range: 1-7'
  },
  {
    id: 'snacks-daily',
    category: 'Food',
    prompt: 'Snacks you eat per day',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'food-delivery-monthly',
    category: 'Food',
    prompt: 'Food delivery orders per month',
    rangePrompt: 'Range: 0-50'
  },
  // Additional Food questions
  {
    id: 'tea-cups-daily',
    category: 'Food',
    prompt: 'Cups of tea you drink daily',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'pizza-slices-sitting',
    category: 'Food',
    prompt: 'Slices of pizza you can eat in one sitting',
    rangePrompt: 'Range: 1-8'
  },
  {
    id: 'cereal-bowls-weekly',
    category: 'Food',
    prompt: 'Bowls of cereal you eat weekly',
    rangePrompt: 'Range: 0-21'
  },
  {
    id: 'fruit-servings-daily',
    category: 'Food',
    prompt: 'Servings of fruit per day',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'dairy-servings-daily',
    category: 'Food',
    prompt: 'Servings of dairy per day',
    rangePrompt: 'Range: 0-8'
  },
  {
    id: 'meals-cooked-weekly',
    category: 'Food',
    prompt: 'Meals you cook from scratch weekly',
    rangePrompt: 'Range: 0-21'
  },
  {
    id: 'cuisines-cooked',
    category: 'Food',
    prompt: 'Different cuisines you can cook',
    rangePrompt: 'Range: 1-20'
  },
  {
    id: 'favorite-spices',
    category: 'Food',
    prompt: 'Favorite spices you use regularly',
    rangePrompt: 'Range: 1-15'
  },
  {
    id: 'cookbooks-owned',
    category: 'Food',
    prompt: 'Number of cookbooks you own',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'desk-meals-weekly',
    category: 'Food',
    prompt: 'Meals you eat at desk per week',
    rangePrompt: 'Range: 0-21'
  },
  {
    id: 'takeout-orders-weekly',
    category: 'Food',
    prompt: 'Times you order takeout weekly',
    rangePrompt: 'Range: 0-14'
  },
  {
    id: 'protein-servings-daily',
    category: 'Food',
    prompt: 'Servings of protein per day',
    rangePrompt: 'Range: 1-8'
  },
  {
    id: 'soda-cups-weekly',
    category: 'Food',
    prompt: 'Cups of soda you drink weekly',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'chocolate-pieces-daily',
    category: 'Food',
    prompt: 'Pieces of chocolate you eat daily',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'bread-loaves-monthly',
    category: 'Food',
    prompt: 'Loaves of bread you buy monthly',
    rangePrompt: 'Range: 1-8'
  },
  {
    id: 'meat-pounds-monthly',
    category: 'Food',
    prompt: 'Pounds of meat you buy monthly',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'milk-gallons-monthly',
    category: 'Food',
    prompt: 'Gallons of milk you buy monthly',
    rangePrompt: 'Range: 1-6'
  },
  {
    id: 'pasta-boxes-monthly',
    category: 'Food',
    prompt: 'Boxes of pasta you buy monthly',
    rangePrompt: 'Range: 1-10'
  },
  {
    id: 'peanut-butter-jars-monthly',
    category: 'Food',
    prompt: 'Jars of peanut butter you buy monthly',
    rangePrompt: 'Range: 0-4'
  },
  {
    id: 'rice-bags-monthly',
    category: 'Food',
    prompt: 'Bags of rice you buy monthly',
    rangePrompt: 'Range: 0-6'
  },

  // Entertainment & Hobbies
  {
    id: 'tv-shows-watching',
    category: 'Entertainment',
    prompt: 'TV shows you\'re currently watching',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'concerts-yearly',
    category: 'Entertainment',
    prompt: 'Concerts you attend per year',
    rangePrompt: 'Range: 0-30'
  },
  {
    id: 'hobbies-active',
    category: 'Hobbies',
    prompt: 'Number of active hobbies',
    rangePrompt: 'Range: 0-15'
  },
  {
    id: 'board-games-owned',
    category: 'Entertainment',
    prompt: 'Board games you own',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'podcast-subscriptions',
    category: 'Entertainment',
    prompt: 'Podcasts you subscribe to',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'youtube-hours-daily',
    category: 'Entertainment',
    prompt: 'Hours of YouTube per day',
    rangePrompt: 'Range: 0-12'
  },
  // Additional Entertainment questions
  {
    id: 'movies-watchlist-ent',
    category: 'Entertainment',
    prompt: 'Number of movies in your watchlist',
    rangePrompt: 'Range: 0-200'
  },
  {
    id: 'books-reading-list-ent',
    category: 'Entertainment',
    prompt: 'Number of books on your reading list',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'tv-shows-watching-ent',
    category: 'Entertainment',
    prompt: 'TV shows you\'re currently watching',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'video-games-owned-ent',
    category: 'Entertainment',
    prompt: 'Number of video games you own',
    rangePrompt: 'Range: 0-500'
  },
  {
    id: 'streaming-services-ent',
    category: 'Entertainment',
    prompt: 'Number of streaming services you subscribe to',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'reading-hours-weekly-ent',
    category: 'Entertainment',
    prompt: 'Hours spent reading per week',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'concerts-attended-ent',
    category: 'Entertainment',
    prompt: 'Number of concerts you\'ve attended',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'theater-shows-seen-ent',
    category: 'Entertainment',
    prompt: 'Number of theater shows you\'ve seen',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'sports-events-attended-ent',
    category: 'Entertainment',
    prompt: 'Number of sports events you\'ve attended',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'comedy-shows-seen-ent',
    category: 'Entertainment',
    prompt: 'Number of comedy shows you\'ve seen',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'documentaries-watched-ent',
    category: 'Entertainment',
    prompt: 'Number of documentaries you watch yearly',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'podcasts-subscribed-ent',
    category: 'Entertainment',
    prompt: 'Number of podcasts you subscribe to',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'youtube-channels-ent',
    category: 'Entertainment',
    prompt: 'Number of YouTube channels you subscribe to',
    rangePrompt: 'Range: 0-500'
  },
  {
    id: 'social-media-follows-ent',
    category: 'Entertainment',
    prompt: 'Number of social media accounts you follow',
    rangePrompt: 'Range: 0-2000'
  },
  {
    id: 'newsletters-subscribed-ent',
    category: 'Entertainment',
    prompt: 'Number of newsletters you subscribe to',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'magazines-read-ent',
    category: 'Entertainment',
    prompt: 'Number of magazines you read monthly',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'newspapers-read-ent',
    category: 'Entertainment',
    prompt: 'Number of newspapers you read weekly',
    rangePrompt: 'Range: 0-7'
  },
  {
    id: 'radio-stations-ent',
    category: 'Entertainment',
    prompt: 'Number of radio stations you listen to',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'tv-channels-watched-ent',
    category: 'Entertainment',
    prompt: 'Number of TV channels you watch regularly',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'live-streams-watched-ent',
    category: 'Entertainment',
    prompt: 'Number of live streams you watch monthly',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'museum-visits-yearly',
    category: 'Culture',
    prompt: 'Museum visits per year',
    rangePrompt: 'Range: 0-20'
  },
  // Additional Culture questions
  {
    id: 'art-galleries-visited',
    category: 'Culture',
    prompt: 'Art galleries you have visited',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'historical-sites-visited',
    category: 'Culture',
    prompt: 'Historical sites you have visited',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'monuments-seen',
    category: 'Culture',
    prompt: 'Monuments you have seen',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'castles-toured',
    category: 'Culture',
    prompt: 'Castles you have toured',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'churches-visited',
    category: 'Culture',
    prompt: 'Churches you have visited',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'temples-visited',
    category: 'Culture',
    prompt: 'Temples you have visited',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'mosques-visited',
    category: 'Culture',
    prompt: 'Mosques you have visited',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'synagogues-visited',
    category: 'Culture',
    prompt: 'Synagogues you have visited',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'libraries-visited',
    category: 'Culture',
    prompt: 'Libraries you have visited',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'zoos-visited',
    category: 'Culture',
    prompt: 'Zoos you have visited',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'aquariums-visited',
    category: 'Culture',
    prompt: 'Aquariums you have visited',
    rangePrompt: 'Range: 0-15'
  },
  {
    id: 'planetariums-visited',
    category: 'Culture',
    prompt: 'Planetariums you have visited',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'science-centers-visited',
    category: 'Culture',
    prompt: 'Science centers you have visited',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'amusement-parks-visited',
    category: 'Culture',
    prompt: 'Amusement parks you have visited',
    rangePrompt: 'Range: 0-30'
  },
  {
    id: 'national-parks-visited',
    category: 'Culture',
    prompt: 'National parks you have visited',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'state-parks-visited',
    category: 'Culture',
    prompt: 'State parks you have visited',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'beaches-visited-culture',
    category: 'Culture',
    prompt: 'Beaches you have visited',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'mountains-climbed-culture',
    category: 'Culture',
    prompt: 'Mountains you have climbed',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'caves-explored',
    category: 'Culture',
    prompt: 'Caves you have explored',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'art-supplies-cost',
    category: 'Hobbies',
    prompt: 'Annual spending on hobby supplies ($)',
    rangePrompt: 'Range: $0-2000'
  },
  {
    id: 'festival-attendance',
    category: 'Entertainment',
    prompt: 'Festivals you attend per year',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'creative-projects-yearly',
    category: 'Hobbies',
    prompt: 'Creative projects you complete per year',
    rangePrompt: 'Range: 0-50'
  },
  // Additional Hobbies questions
  {
    id: 'books-read-this-year',
    category: 'Hobbies',
    prompt: 'Books you have read this year',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'movies-watched-this-year',
    category: 'Hobbies',
    prompt: 'Movies you have watched this year',
    rangePrompt: 'Range: 0-200'
  },
  {
    id: 'tv-shows-watched-this-year',
    category: 'Hobbies',
    prompt: 'TV shows you have watched this year',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'video-games-played-this-year',
    category: 'Hobbies',
    prompt: 'Video games you have played this year',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'sports-played-this-year',
    category: 'Hobbies',
    prompt: 'Sports you have played this year',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'concerts-attended-this-year',
    category: 'Hobbies',
    prompt: 'Concerts you have attended this year',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'museums-visited-this-year',
    category: 'Hobbies',
    prompt: 'Museums you have visited this year',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'hiking-trails-done-this-year',
    category: 'Hobbies',
    prompt: 'Hiking trails you have done this year',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'recipes-tried-this-year',
    category: 'Hobbies',
    prompt: 'Recipes you have tried this year',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'languages-studied-this-year',
    category: 'Hobbies',
    prompt: 'Languages you have studied this year',
    rangePrompt: 'Range: 0-3'
  },
  {
    id: 'instruments-practiced-this-year',
    category: 'Hobbies',
    prompt: 'Instruments you have practiced this year',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'art-pieces-created-this-year',
    category: 'Hobbies',
    prompt: 'Art pieces you have created this year',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'photos-taken-this-year',
    category: 'Hobbies',
    prompt: 'Photos you have taken this year',
    rangePrompt: 'Range: 0-1000'
  },
  {
    id: 'videos-made-this-year',
    category: 'Hobbies',
    prompt: 'Videos you have made this year',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'blogs-written-this-year',
    category: 'Hobbies',
    prompt: 'Blogs you have written this year',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'podcasts-listened-this-year',
    category: 'Hobbies',
    prompt: 'Podcasts you have listened to this year',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'online-courses-taken-this-year',
    category: 'Hobbies',
    prompt: 'Online courses you have taken this year',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'workshops-attended-this-year',
    category: 'Hobbies',
    prompt: 'Workshops you have attended this year',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'volunteer-hours-done-this-year',
    category: 'Hobbies',
    prompt: 'Volunteer hours you have done this year',
    rangePrompt: 'Range: 0-200'
  },
  {
    id: 'new-friends-made-this-year',
    category: 'Hobbies',
    prompt: 'New friends you have made this year',
    rangePrompt: 'Range: 0-20'
  },

  // Work & Career
  {
    id: 'work-hours-weekly',
    category: 'Work',
    prompt: 'Hours you work per week',
    rangePrompt: 'Range: 10-80'
  },
  {
    id: 'commute-minutes',
    category: 'Work',
    prompt: 'Minutes of commute each way',
    rangePrompt: 'Range: 0-120'
  },
  {
    id: 'vacation-days-yearly',
    category: 'Work',
    prompt: 'Vacation days you take per year',
    rangePrompt: 'Range: 0-30'
  },
  {
    id: 'meetings-weekly',
    category: 'Work',
    prompt: 'Meetings you attend per week',
    rangePrompt: 'Range: 0-30'
  },
  {
    id: 'career-changes',
    category: 'Work',
    prompt: 'Career changes you expect in lifetime',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'networking-events-yearly',
    category: 'Work',
    prompt: 'Professional networking events per year',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'work-from-home-days',
    category: 'Work',
    prompt: 'Work from home days per week',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'job-satisfaction',
    category: 'Work',
    prompt: 'Job satisfaction level (1-10)',
    rangePrompt: 'Range: 1-10'
  },
  {
    id: 'salary-expectation',
    category: 'Work',
    prompt: 'Ideal annual salary ($)',
    rangePrompt: 'Range: $20k-500k'
  },
  {
    id: 'retirement-age-goal',
    category: 'Work',
    prompt: 'Age you want to retire',
    rangePrompt: 'Range: 50-80'
  },
  // Additional Work questions
  {
    id: 'jobs-held-total',
    category: 'Work',
    prompt: 'Jobs you have held',
    rangePrompt: 'Range: 1-20'
  },
  {
    id: 'companies-worked-for',
    category: 'Work',
    prompt: 'Companies you have worked for',
    rangePrompt: 'Range: 1-15'
  },
  {
    id: 'industries-worked-in',
    category: 'Work',
    prompt: 'Industries you have worked in',
    rangePrompt: 'Range: 1-10'
  },
  {
    id: 'positions-held',
    category: 'Work',
    prompt: 'Positions you have held',
    rangePrompt: 'Range: 1-15'
  },
  {
    id: 'promotions-received',
    category: 'Work',
    prompt: 'Promotions you have received',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'raises-gotten',
    category: 'Work',
    prompt: 'Raises you have gotten',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'bonuses-received',
    category: 'Work',
    prompt: 'Bonuses you have received',
    rangePrompt: 'Range: 0-15'
  },
  {
    id: 'awards-won-work',
    category: 'Work',
    prompt: 'Awards you have won',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'patents-filed',
    category: 'Work',
    prompt: 'Patents you have filed',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'publications-written',
    category: 'Work',
    prompt: 'Publications you have written',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'conferences-presented-at',
    category: 'Work',
    prompt: 'Conferences you have presented at',
    rangePrompt: 'Range: 0-15'
  },
  {
    id: 'trainings-conducted',
    category: 'Work',
    prompt: 'Trainings you have conducted',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'mentees-had',
    category: 'Work',
    prompt: 'Mentees you have had',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'mentors-had',
    category: 'Work',
    prompt: 'Mentors you have had',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'professional-associations-member',
    category: 'Work',
    prompt: 'Professional associations you are member of',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'certifications-have',
    category: 'Work',
    prompt: 'Certifications you have',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'degrees-have',
    category: 'Work',
    prompt: 'Degrees you have',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'licenses-have',
    category: 'Work',
    prompt: 'Licenses you have',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'professional-development-hours-yearly',
    category: 'Work',
    prompt: 'Professional development hours yearly',
    rangePrompt: 'Range: 0-40'
  },
  {
    id: 'business-trips-taken',
    category: 'Work',
    prompt: 'Business trips you have taken',
    rangePrompt: 'Range: 0-50'
  },

  // Random & Quirky
  {
    id: 'alarm-snoozes',
    category: 'Habits',
    prompt: 'Times you hit snooze in the morning',
    rangePrompt: 'Range: 0-10'
  },
  // Additional Habits questions
  {
    id: 'phone-checks-hourly',
    category: 'Habits',
    prompt: 'Times you check your phone hourly',
    rangePrompt: 'Range: 0-60'
  },
  {
    id: 'clock-looks-daily',
    category: 'Habits',
    prompt: 'Times you look at the clock daily',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'um-said-speaking',
    category: 'Habits',
    prompt: 'Times you say um or like when speaking',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'nails-bitten-daily',
    category: 'Habits',
    prompt: 'Times you bite your nails daily',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'knuckles-cracked-daily',
    category: 'Habits',
    prompt: 'Times you crack your knuckles daily',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'foot-tapped-nervous',
    category: 'Habits',
    prompt: 'Times you tap your foot when nervous',
    rangePrompt: 'Range: 0-30'
  },
  {
    id: 'whistled-daily',
    category: 'Habits',
    prompt: 'Times you whistle daily',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'hummed-daily',
    category: 'Habits',
    prompt: 'Times you hum daily',
    rangePrompt: 'Range: 0-30'
  },
  {
    id: 'sing-shower-daily',
    category: 'Habits',
    prompt: 'Times you sing in the shower daily',
    rangePrompt: 'Range: 0-1'
  },
  {
    id: 'talk-self-daily',
    category: 'Habits',
    prompt: 'Times you talk to yourself daily',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'daydream-daily',
    category: 'Habits',
    prompt: 'Times you daydream daily',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'procrastinate-daily',
    category: 'Habits',
    prompt: 'Times you procrastinate daily',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'exercise-weekly',
    category: 'Habits',
    prompt: 'Times you exercise weekly',
    rangePrompt: 'Range: 0-14'
  },
  {
    id: 'meditate-daily',
    category: 'Habits',
    prompt: 'Times you meditate daily',
    rangePrompt: 'Range: 0-2'
  },
  {
    id: 'journal-daily',
    category: 'Habits',
    prompt: 'Times you journal daily',
    rangePrompt: 'Range: 0-1'
  },
  {
    id: 'pray-daily',
    category: 'Habits',
    prompt: 'Times you pray daily',
    rangePrompt: 'Range: 0-3'
  },
  {
    id: 'curse-daily',
    category: 'Habits',
    prompt: 'Times you curse daily',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'laugh-daily',
    category: 'Habits',
    prompt: 'Times you laugh daily',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'cry-monthly',
    category: 'Habits',
    prompt: 'Times you cry monthly',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'yawn-daily',
    category: 'Habits',
    prompt: 'Times you yawn daily',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'useless-facts-known',
    category: 'Knowledge',
    prompt: 'Useless facts you know',
    rangePrompt: 'Range: 5-1000'
  },
  // Additional Knowledge questions
  {
    id: 'history-facts-known',
    category: 'Knowledge',
    prompt: 'History facts you know',
    rangePrompt: 'Range: 10-1000'
  },
  {
    id: 'science-facts-known',
    category: 'Knowledge',
    prompt: 'Science facts you know',
    rangePrompt: 'Range: 10-1000'
  },
  {
    id: 'geography-facts-known',
    category: 'Knowledge',
    prompt: 'Geography facts you know',
    rangePrompt: 'Range: 10-500'
  },
  {
    id: 'literature-facts-known',
    category: 'Knowledge',
    prompt: 'Literature facts you know',
    rangePrompt: 'Range: 5-500'
  },
  {
    id: 'art-facts-known',
    category: 'Knowledge',
    prompt: 'Art facts you know',
    rangePrompt: 'Range: 5-300'
  },
  {
    id: 'music-facts-known',
    category: 'Knowledge',
    prompt: 'Music facts you know',
    rangePrompt: 'Range: 5-500'
  },
  {
    id: 'sports-facts-known',
    category: 'Knowledge',
    prompt: 'Sports facts you know',
    rangePrompt: 'Range: 5-1000'
  },
  {
    id: 'politics-facts-known',
    category: 'Knowledge',
    prompt: 'Politics facts you know',
    rangePrompt: 'Range: 5-200'
  },
  {
    id: 'economics-facts-known',
    category: 'Knowledge',
    prompt: 'Economics facts you know',
    rangePrompt: 'Range: 5-100'
  },
  {
    id: 'psychology-facts-known',
    category: 'Knowledge',
    prompt: 'Psychology facts you know',
    rangePrompt: 'Range: 5-200'
  },
  {
    id: 'philosophy-facts-known',
    category: 'Knowledge',
    prompt: 'Philosophy facts you know',
    rangePrompt: 'Range: 5-100'
  },
  {
    id: 'religion-facts-known',
    category: 'Knowledge',
    prompt: 'Religion facts you know',
    rangePrompt: 'Range: 5-200'
  },
  {
    id: 'mythology-facts-known',
    category: 'Knowledge',
    prompt: 'Mythology facts you know',
    rangePrompt: 'Range: 5-100'
  },
  {
    id: 'astronomy-facts-known',
    category: 'Knowledge',
    prompt: 'Astronomy facts you know',
    rangePrompt: 'Range: 5-100'
  },
  {
    id: 'biology-facts-known',
    category: 'Knowledge',
    prompt: 'Biology facts you know',
    rangePrompt: 'Range: 5-200'
  },
  {
    id: 'chemistry-facts-known',
    category: 'Knowledge',
    prompt: 'Chemistry facts you know',
    rangePrompt: 'Range: 5-100'
  },
  {
    id: 'physics-facts-known',
    category: 'Knowledge',
    prompt: 'Physics facts you know',
    rangePrompt: 'Range: 5-100'
  },
  {
    id: 'mathematics-facts-known',
    category: 'Knowledge',
    prompt: 'Mathematics facts you know',
    rangePrompt: 'Range: 5-200'
  },
  {
    id: 'computer-science-facts-known',
    category: 'Knowledge',
    prompt: 'Computer science facts you know',
    rangePrompt: 'Range: 5-100'
  },
  {
    id: 'medicine-facts-known',
    category: 'Knowledge',
    prompt: 'Medicine facts you know',
    rangePrompt: 'Range: 5-100'
  },
  {
    id: 'superstitions-believed',
    category: 'Beliefs',
    prompt: 'Superstitions you believe in',
    rangePrompt: 'Range: 0-20'
  },
  // Additional Beliefs questions
  {
    id: 'religions-studied',
    category: 'Beliefs',
    prompt: 'Religions you have studied',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'spiritual-practices-tried',
    category: 'Beliefs',
    prompt: 'Spiritual practices you have tried',
    rangePrompt: 'Range: 0-15'
  },
  {
    id: 'meditation-techniques-learned',
    category: 'Beliefs',
    prompt: 'Meditation techniques you have learned',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'yoga-poses-known',
    category: 'Beliefs',
    prompt: 'Yoga poses you know',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'tarot-readings-had',
    category: 'Beliefs',
    prompt: 'Tarot readings you have had',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'palm-readings-had',
    category: 'Beliefs',
    prompt: 'Palm readings you have had',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'astrology-charts-read',
    category: 'Beliefs',
    prompt: 'Astrology charts you have read',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'horoscopes-read',
    category: 'Beliefs',
    prompt: 'Horoscopes you have read',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'dreams-interpreted',
    category: 'Beliefs',
    prompt: 'Dreams you have interpreted',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'visions-had',
    category: 'Beliefs',
    prompt: 'Visions you have had',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'premonitions-had',
    category: 'Beliefs',
    prompt: 'Premonitions you have had',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'coincidences-noticed',
    category: 'Beliefs',
    prompt: 'Coincidences you have noticed',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'miracles-witnessed',
    category: 'Beliefs',
    prompt: 'Miracles you have witnessed',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'prayers-answered',
    category: 'Beliefs',
    prompt: 'Prayers you have answered',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'blessings-received',
    category: 'Beliefs',
    prompt: 'Blessings you have received',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'curses-believed',
    category: 'Beliefs',
    prompt: 'Curses you have believed in',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'ghosts-seen',
    category: 'Beliefs',
    prompt: 'Ghosts you have seen',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'ufos-sighted',
    category: 'Beliefs',
    prompt: 'UFOs you have sighted',
    rangePrompt: 'Range: 0-3'
  },
  {
    id: 'conspiracy-theories-researched',
    category: 'Beliefs',
    prompt: 'Conspiracy theories you have researched',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'alternative-medicines-tried',
    category: 'Beliefs',
    prompt: 'Alternative medicines you have tried',
    rangePrompt: 'Range: 0-15'
  },
  {
    id: 'lucky-numbers',
    category: 'Beliefs',
    prompt: 'Your lucky number',
    rangePrompt: 'Range: 1-100'
  },
  {
    id: 'celebrity-encounters',
    category: 'Experience',
    prompt: 'Celebrities you\'ve met',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'weird-talents',
    category: 'Skills',
    prompt: 'Weird talents you have',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'broken-bones',
    category: 'Experience',
    prompt: 'Bones you\'ve broken',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'embarrassing-moments-monthly',
    category: 'Experience',
    prompt: 'Embarrassing moments per month',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'conspiracy-theories-believed',
    category: 'Beliefs',
    prompt: 'Conspiracy theories you believe',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'inside-jokes-active',
    category: 'Social',
    prompt: 'Active inside jokes you have',
    rangePrompt: 'Range: 0-50'
  },
  // Additional Experience questions
  {
    id: 'accidents-been-in',
    category: 'Experience',
    prompt: 'Accidents you have been in',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'near-death-experiences',
    category: 'Experience',
    prompt: 'Near-death experiences you have had',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'life-changing-events',
    category: 'Experience',
    prompt: 'Life-changing events you have experienced',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'countries-lived-in',
    category: 'Experience',
    prompt: 'Countries you have lived in',
    rangePrompt: 'Range: 1-10'
  },
  {
    id: 'cultures-immersed-in',
    category: 'Experience',
    prompt: 'Cultures you have immersed in',
    rangePrompt: 'Range: 1-15'
  },
  {
    id: 'languages-learned',
    category: 'Experience',
    prompt: 'Languages you have learned',
    rangePrompt: 'Range: 1-8'
  },
  {
    id: 'jobs-quit',
    category: 'Experience',
    prompt: 'Jobs you have quit',
    rangePrompt: 'Range: 0-15'
  },
  {
    id: 'relationships-ended',
    category: 'Experience',
    prompt: 'Relationships you have ended',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'friendships-lost',
    category: 'Experience',
    prompt: 'Friendships you have lost',
    rangePrompt: 'Range: 0-30'
  },
  {
    id: 'pets-lost',
    category: 'Experience',
    prompt: 'Pets you have lost',
    rangePrompt: 'Range: 0-10'
  },
  {
    id: 'homes-lost',
    category: 'Experience',
    prompt: 'Homes you have lost',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'possessions-lost',
    category: 'Experience',
    prompt: 'Possessions you have lost',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'opportunities-missed',
    category: 'Experience',
    prompt: 'Opportunities you have missed',
    rangePrompt: 'Range: 0-20'
  },
  {
    id: 'chances-taken',
    category: 'Experience',
    prompt: 'Chances you have taken',
    rangePrompt: 'Range: 0-30'
  },
  {
    id: 'risks-taken',
    category: 'Experience',
    prompt: 'Risks you have taken',
    rangePrompt: 'Range: 0-25'
  },
  {
    id: 'adventures-had',
    category: 'Experience',
    prompt: 'Adventures you have had',
    rangePrompt: 'Range: 0-50'
  },
  {
    id: 'journeys-taken',
    category: 'Experience',
    prompt: 'Journeys you have taken',
    rangePrompt: 'Range: 0-100'
  },
  {
    id: 'discoveries-made',
    category: 'Experience',
    prompt: 'Discoveries you have made',
    rangePrompt: 'Range: 0-30'
  },
  {
    id: 'inventions-created',
    category: 'Experience',
    prompt: 'Inventions you have created',
    rangePrompt: 'Range: 0-5'
  },
  {
    id: 'creations-made',
    category: 'Experience',
    prompt: 'Creations you have made',
    rangePrompt: 'Range: 0-50'
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
