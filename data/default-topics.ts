import { Topic } from '@/stores/topics-store';

export const defaultTopics: Topic[] = [
  // Locations (expanded)
  {
    id: '1',
    name: 'Airport',
    category: 'locations',
    roles: ['Pilot', 'Flight Attendant', 'Security Guard', 'Passenger', 'Baggage Handler', 'Air Traffic Controller', 'Customs Officer', 'Gate Agent']
  },
  {
    id: '2',
    name: 'Hospital',
    category: 'locations',
    roles: ['Doctor', 'Nurse', 'Patient', 'Surgeon', 'Receptionist', 'Paramedic', 'Janitor', 'Security Guard']
  },
  {
    id: '3',
    name: 'School',
    category: 'locations',
    roles: ['Teacher', 'Student', 'Principal', 'Janitor', 'Librarian', 'Coach', 'Cafeteria Worker', 'Security Guard']
  },
  {
    id: '4',
    name: 'Restaurant',
    category: 'locations',
    roles: ['Chef', 'Waiter', 'Customer', 'Manager', 'Bartender', 'Dishwasher', 'Host', 'Food Critic']
  },
  {
    id: '5',
    name: 'Bank',
    category: 'locations',
    roles: ['Teller', 'Customer', 'Manager', 'Security Guard', 'Loan Officer', 'Vault Technician', 'Accountant', 'Janitor']
  },
  {
    id: '6',
    name: 'Casino',
    category: 'locations',
    roles: ['Dealer', 'Gambler', 'Security Guard', 'Bartender', 'Pit Boss', 'Cocktail Waitress', 'Bouncer', 'High Roller']
  },
  {
    id: '7',
    name: 'Beach',
    category: 'locations',
    roles: ['Lifeguard', 'Tourist', 'Surfer', 'Vendor', 'Photographer', 'Beach Cleaner', 'Fisherman', 'Sunbather']
  },
  {
    id: '8',
    name: 'Airplane',
    category: 'locations',
    roles: ['Pilot', 'Flight Attendant', 'Passenger', 'Co-pilot', 'Air Marshal', 'Child', 'Business Traveler', 'Nervous Flyer']
  },
  {
    id: '9',
    name: 'Movie Theater',
    category: 'locations',
    roles: ['Moviegoer', 'Usher', 'Projectionist', 'Concession Worker', 'Manager', 'Ticket Taker', 'Janitor', 'Film Critic']
  },
  {
    id: '10',
    name: 'Gym',
    category: 'locations',
    roles: ['Personal Trainer', 'Gym Member', 'Receptionist', 'Janitor', 'Bodybuilder', 'Yoga Instructor', 'Manager', 'Nutritionist']
  },
  {
    id: '11',
    name: 'Library',
    category: 'locations',
    roles: ['Librarian', 'Student', 'Author', 'Researcher', 'Child', 'Security Guard', 'Volunteer', 'Book Club Member']
  },
  {
    id: '12',
    name: 'Police Station',
    category: 'locations',
    roles: ['Police Officer', 'Detective', 'Criminal', 'Lawyer', 'Witness', 'Dispatcher', 'Chief', 'Janitor']
  },
  {
    id: '13',
    name: 'Subway',
    category: 'locations',
    roles: ['Conductor', 'Passenger', 'Ticket Inspector', 'Busker', 'Commuter', 'Tourist', 'Maintenance Worker', 'Security Guard']
  },
  {
    id: '14',
    name: 'Supermarket',
    category: 'locations',
    roles: ['Cashier', 'Customer', 'Manager', 'Stock Clerk', 'Security Guard', 'Butcher', 'Baker', 'Shopper']
  },
  {
    id: '15',
    name: 'Hotel',
    category: 'locations',
    roles: ['Guest', 'Receptionist', 'Bellhop', 'Housekeeper', 'Manager', 'Concierge', 'Security Guard', 'Room Service']
  },
  {
    id: '16',
    name: 'Cruise Ship',
    category: 'locations',
    roles: ['Captain', 'Passenger', 'Crew Member', 'Entertainment Director', 'Chef', 'Bartender', 'Lifeguard', 'Photographer']
  },
  {
    id: '17',
    name: 'Zoo',
    category: 'locations',
    roles: ['Zookeeper', 'Visitor', 'Veterinarian', 'Tour Guide', 'Security Guard', 'Gift Shop Worker', 'Photographer', 'Child']
  },
  {
    id: '18',
    name: 'Amusement Park',
    category: 'locations',
    roles: ['Ride Operator', 'Visitor', 'Mascot', 'Security Guard', 'Food Vendor', 'Maintenance Worker', 'Photographer', 'Lost Child']
  },
  {
    id: '19',
    name: 'Office Building',
    category: 'locations',
    roles: ['Employee', 'Boss', 'Receptionist', 'Janitor', 'Security Guard', 'IT Support', 'Intern', 'Delivery Person']
  },
  {
    id: '20',
    name: 'Prison',
    category: 'locations',
    roles: ['Guard', 'Prisoner', 'Warden', 'Visitor', 'Lawyer', 'Doctor', 'Chaplain', 'Cook']
  },
  {
    id: '21',
    name: 'Shopping Mall',
    category: 'locations',
    roles: ['Shopper', 'Store Clerk', 'Security Guard', 'Mall Cop', 'Food Court Worker', 'Janitor', 'Photographer', 'Lost Child']
  },
  {
    id: '22',
    name: 'Train Station',
    category: 'locations',
    roles: ['Conductor', 'Passenger', 'Ticket Seller', 'Platform Worker', 'Commuter', 'Tourist', 'Vendor', 'Security Guard']
  },
  {
    id: '23',
    name: 'Stadium',
    category: 'locations',
    roles: ['Athlete', 'Coach', 'Fan', 'Vendor', 'Security Guard', 'Commentator', 'Medic', 'Referee']
  },
  {
    id: '24',
    name: 'Museum',
    category: 'locations',
    roles: ['Curator', 'Visitor', 'Security Guard', 'Tour Guide', 'Artist', 'Photographer', 'Janitor', 'Child']
  },
  {
    id: '25',
    name: 'Church',
    category: 'locations',
    roles: ['Priest', 'Congregant', 'Choir Member', 'Organist', 'Volunteer', 'Visitor', 'Security Guard', 'Janitor']
  },
  {
    id: '26',
    name: 'Farm',
    category: 'locations',
    roles: ['Farmer', 'Worker', 'Visitor', 'Animal', 'Mechanic', 'Salesperson', 'Child', 'Tour Guide']
  },
  {
    id: '27',
    name: 'Factory',
    category: 'locations',
    roles: ['Worker', 'Manager', 'Engineer', 'Security Guard', 'Inspector', 'Janitor', 'Mechanic', 'Supervisor']
  },
  {
    id: '28',
    name: 'Park',
    category: 'locations',
    roles: ['Visitor', 'Jogger', 'Picnicker', 'Vendor', 'Security Guard', 'Photographer', 'Child', 'Gardener']
  },
  {
    id: '29',
    name: 'Concert Hall',
    category: 'locations',
    roles: ['Musician', 'Audience Member', 'Conductor', 'Stage Manager', 'Sound Engineer', 'Security Guard', 'Usher', 'Critic']
  },
  {
    id: '30',
    name: 'Art Gallery',
    category: 'locations',
    roles: ['Artist', 'Visitor', 'Curator', 'Security Guard', 'Photographer', 'Buyer', 'Janitor', 'Critic']
  },

  // Movies (expanded)
  {
    id: '31',
    name: 'Titanic',
    category: 'movies',
    roles: ['Captain', 'First Class Passenger', 'Third Class Passenger', 'Crew Member', 'Musician', 'Lookout', 'Engineer', 'Survivor']
  },
  {
    id: '32',
    name: 'Star Wars',
    category: 'movies',
    roles: ['Jedi', 'Sith', 'Rebel', 'Stormtrooper', 'Pilot', 'Droid', 'Princess', 'Smuggler']
  },
  {
    id: '33',
    name: 'Harry Potter',
    category: 'movies',
    roles: ['Student', 'Professor', 'Wizard', 'Muggle', 'Death Eater', 'Auror', 'House Elf', 'Ghost']
  },
  {
    id: '34',
    name: 'The Matrix',
    category: 'movies',
    roles: ['The One', 'Agent', 'Rebel', 'Oracle', 'Architect', 'Zion Citizen', 'Program', 'Red Pill']
  },
  {
    id: '35',
    name: 'Jurassic Park',
    category: 'movies',
    roles: ['Paleontologist', 'Park Visitor', 'Security Guard', 'Scientist', 'Tour Guide', 'Hunter', 'Veterinarian', 'Computer Programmer']
  },
  {
    id: '36',
    name: 'The Godfather',
    category: 'movies',
    roles: ['Don', 'Consigliere', 'Soldier', 'FBI Agent', 'Civilian', 'Lawyer', 'Judge', 'Rival Family Member']
  },
  {
    id: '37',
    name: 'Inception',
    category: 'movies',
    roles: ['Extractor', 'Architect', 'Forger', 'Chemist', 'Subject', 'Projection', 'Tourist', 'Security']
  },
  {
    id: '38',
    name: 'The Dark Knight',
    category: 'movies',
    roles: ['Batman', 'Joker', 'Police Officer', 'Civilian', 'District Attorney', 'Mob Boss', 'Bank Robber', 'Commissioner']
  },
  {
    id: '39',
    name: 'Avengers',
    category: 'movies',
    roles: ['Superhero', 'Villain', 'S.H.I.E.L.D. Agent', 'Civilian', 'Scientist', 'Military', 'Reporter', 'Government Official']
  },
  {
    id: '40',
    name: 'Pirates of the Caribbean',
    category: 'movies',
    roles: ['Pirate Captain', 'Crew Member', 'Royal Navy', 'Blacksmith', 'Governor', 'Cursed Pirate', 'Merchant', 'Tavern Keeper']
  },
  {
    id: '41',
    name: 'Lord of the Rings',
    category: 'movies',
    roles: ['Hobbit', 'Wizard', 'Elf', 'Dwarf', 'Human', 'Orc', 'Ranger', 'King']
  },
  {
    id: '42',
    name: 'Shrek',
    category: 'movies',
    roles: ['Ogre', 'Princess', 'Donkey', 'Dragon', 'Fairy Tale Character', 'Knight', 'King', 'Villager']
  },
  {
    id: '43',
    name: 'Finding Nemo',
    category: 'movies',
    roles: ['Clownfish', 'Blue Tang', 'Shark', 'Sea Turtle', 'Pelican', 'Dentist', 'Diver', 'Aquarium Fish']
  },
  {
    id: '44',
    name: 'The Lion King',
    category: 'movies',
    roles: ['Lion Cub', 'Lion King', 'Meerkat', 'Warthog', 'Hyena', 'Mandrill', 'Hornbill', 'Lioness']
  },
  {
    id: '45',
    name: 'Frozen',
    category: 'movies',
    roles: ['Ice Queen', 'Princess', 'Snowman', 'Reindeer', 'Ice Harvester', 'Troll', 'Duke', 'Villager']
  },
  {
    id: '46',
    name: 'Toy Story',
    category: 'movies',
    roles: ['Cowboy Toy', 'Space Ranger', 'Child', 'Parent', 'Toy Store Employee', 'Dog', 'Dinosaur Toy', 'Potato Head']
  },
  {
    id: '47',
    name: 'The Terminator',
    category: 'movies',
    roles: ['Terminator', 'Human Resistance', 'Time Traveler', 'Police Officer', 'Scientist', 'Civilian', 'Soldier', 'Computer']
  },
  {
    id: '48',
    name: 'Ghostbusters',
    category: 'movies',
    roles: ['Ghostbuster', 'Ghost', 'Scientist', 'Secretary', 'EPA Agent', 'Hotel Manager', 'Possessed Person', 'Client']
  },
  {
    id: '49',
    name: 'Back to the Future',
    category: 'movies',
    roles: ['Time Traveler', 'Scientist', 'Teenager', 'Parent', 'Bully', 'Principal', 'Mayor', 'Clock Tower Worker']
  },
  {
    id: '50',
    name: 'Jaws',
    category: 'movies',
    roles: ['Shark Hunter', 'Police Chief', 'Marine Biologist', 'Mayor', 'Beach Goer', 'Boat Captain', 'Fisherman', 'Tourist']
  },
  {
    id: '51',
    name: 'The Shawshank Redemption',
    category: 'movies',
    roles: ['Prisoner', 'Warden', 'Guard', 'Librarian', 'Banker', 'Lawyer', 'Construction Worker', 'Brewer']
  },
  {
    id: '52',
    name: 'Pulp Fiction',
    category: 'movies',
    roles: ['Gangster', 'Boxer', 'Waitress', 'Hitman', 'Drug Dealer', 'Director', 'Actor', 'Wife']
  },
  {
    id: '53',
    name: 'Forrest Gump',
    category: 'movies',
    roles: ['Runner', 'President', 'Friend', 'Mother', 'Doctor', 'Soldier', 'Businessman', 'Shrimper']
  },
  {
    id: '54',
    name: 'The Silence of the Lambs',
    category: 'movies',
    roles: ['FBI Agent', 'Psychiatrist', 'Serial Killer', 'Police Officer', 'Victim', 'Doctor', 'Student', 'Guard']
  },
  {
    id: '55',
    name: 'Fight Club',
    category: 'movies',
    roles: ['Insomniac', 'Soap Maker', 'Project Manager', 'Waiter', 'Mechanic', 'Doctor', 'Narrator', 'Support Group Member']
  },

  // TV Shows (expanded)
  {
    id: '56',
    name: 'Friends',
    category: 'tv-shows',
    roles: ['Coffee Shop Regular', 'Waiter', 'Actor', 'Masseuse', 'Paleontologist', 'Chef', 'Fashion Executive', 'Statistician']
  },
  {
    id: '57',
    name: 'The Office',
    category: 'tv-shows',
    roles: ['Regional Manager', 'Salesperson', 'Receptionist', 'Accountant', 'HR Representative', 'Warehouse Worker', 'Temp', 'Corporate Executive']
  },
  {
    id: '58',
    name: 'Game of Thrones',
    category: 'tv-shows',
    roles: ['King', 'Queen', 'Knight', 'Maester', 'Assassin', 'Merchant', 'Wildling', 'Dragon']
  },
  {
    id: '59',
    name: 'Breaking Bad',
    category: 'tv-shows',
    roles: ['Chemistry Teacher', 'DEA Agent', 'Drug Dealer', 'Lawyer', 'Car Wash Owner', 'Student', 'Police Officer', 'Cartel Member']
  },
  {
    id: '60',
    name: 'Stranger Things',
    category: 'tv-shows',
    roles: ['Kid with Powers', 'Sheriff', 'Scientist', 'Monster', 'High School Student', 'Government Agent', 'Lab Worker', 'Parent']
  },
  {
    id: '61',
    name: 'The Simpsons',
    category: 'tv-shows',
    roles: ['Nuclear Plant Worker', 'Bartender', 'Elementary Student', 'Baby', 'Shopkeeper', 'Police Chief', 'Principal', 'Reverend']
  },
  {
    id: '62',
    name: 'Seinfeld',
    category: 'tv-shows',
    roles: ['Comedian', 'Writer', 'Postal Worker', 'Architect', 'Diner Owner', 'Neighbor', 'Barber', 'Cab Driver']
  },
  {
    id: '63',
    name: 'Lost',
    category: 'tv-shows',
    roles: ['Crash Survivor', 'Doctor', 'Fugitive', 'Lottery Winner', 'Rock Star', 'Con Artist', 'Polar Bear', 'Other']
  },
  {
    id: '64',
    name: 'The Walking Dead',
    category: 'tv-shows',
    roles: ['Sheriff', 'Zombie', 'Survivor', 'Doctor', 'Farmer', 'Governor', 'Crossbow Hunter', 'Katana Warrior']
  },
  {
    id: '65',
    name: 'House of Cards',
    category: 'tv-shows',
    roles: ['Politician', 'Journalist', 'Chief of Staff', 'Lobbyist', 'Secret Service', 'Voter', 'Judge', 'Activist']
  },
  {
    id: '66',
    name: 'Sherlock',
    category: 'tv-shows',
    roles: ['Detective', 'Doctor', 'Criminal Mastermind', 'Police Inspector', 'Landlady', 'Government Official', 'Cab Driver', 'Victim']
  },
  {
    id: '67',
    name: 'The Big Bang Theory',
    category: 'tv-shows',
    roles: ['Physicist', 'Waitress', 'Engineer', 'Astrophysicist', 'Microbiologist', 'Comic Book Store Owner', 'Mother', 'Neighbor']
  },
  {
    id: '68',
    name: 'How I Met Your Mother',
    category: 'tv-shows',
    roles: ['Architect', 'Lawyer', 'Kindergarten Teacher', 'Bartender', 'News Anchor', 'Robin', 'Barney', 'Ted']
  },
  {
    id: '69',
    name: 'Dexter',
    category: 'tv-shows',
    roles: ['Blood Analyst', 'Serial Killer', 'Police Officer', 'FBI Agent', 'Victim', 'Forensic Expert', 'Bay Harbor Butcher', 'Dark Passenger']
  },
  {
    id: '70',
    name: 'Mad Men',
    category: 'tv-shows',
    roles: ['Ad Executive', 'Secretary', 'Creative Director', 'Account Manager', 'Copywriter', 'Client', 'Housewife', 'Bartender']
  },
  {
    id: '71',
    name: 'Westworld',
    category: 'tv-shows',
    roles: ['Host', 'Guest', 'Programmer', 'Narrative Director', 'Security', 'Technician', 'Board Member', 'Outlaw']
  },
  {
    id: '72',
    name: 'The Crown',
    category: 'tv-shows',
    roles: ['Queen', 'Prime Minister', 'Royal Family Member', 'Private Secretary', 'Photographer', 'Journalist', 'Bodyguard', 'Servant']
  },
  {
    id: '73',
    name: 'Narcos',
    category: 'tv-shows',
    roles: ['DEA Agent', 'Drug Lord', 'Cartel Member', 'Police Officer', 'Politician', 'Journalist', 'Pilot', 'Money Launderer']
  },
  {
    id: '74',
    name: 'Black Mirror',
    category: 'tv-shows',
    roles: ['Tech CEO', 'Social Media User', 'AI', 'Gamer', 'Politician', 'Journalist', 'Programmer', 'Virtual Reality User']
  },
  {
    id: '75',
    name: 'The Mandalorian',
    category: 'tv-shows',
    roles: ['Bounty Hunter', 'The Child', 'Imperial Officer', 'Rebel', 'Mechanic', 'Cantina Owner', 'Pilot', 'Jedi']
  },
  {
    id: '76',
    name: 'The Sopranos',
    category: 'tv-shows',
    roles: ['Mob Boss', 'Therapist', 'Wife', 'Associate', 'FBI Agent', 'Doctor', 'Uncle', 'Nephew']
  },
  {
    id: '77',
    name: 'True Detective',
    category: 'tv-shows',
    roles: ['Detective', 'Partner', 'Suspect', 'Victim', 'Journalist', 'Lawyer', 'Police Chief', 'Cult Member']
  },
  {
    id: '78',
    name: 'The Wire',
    category: 'tv-shows',
    roles: ['Detective', 'Drug Dealer', 'Teacher', 'Mayor', 'Journalist', 'Dock Worker', 'Politician', 'Corner Boy']
  },
  {
    id: '79',
    name: 'Succession',
    category: 'tv-shows',
    roles: ['CEO', 'Son', 'Daughter', 'Wife', 'Advisor', 'Journalist', 'Lawyer', 'Board Member']
  },
  {
    id: '80',
    name: 'The Boys',
    category: 'tv-shows',
    roles: ['Superhero', 'Villain', 'Journalist', 'Corporate Executive', 'Sidekick', 'Government Agent', 'Fan', 'Scientist']
  },

  // Pop Culture (expanded)
  {
    id: '81',
    name: 'Marvel Universe',
    category: 'pop-culture',
    roles: ['Superhero', 'Villain', 'S.H.I.E.L.D. Agent', 'Civilian', 'Scientist', 'Reporter', 'Government Official', 'Sidekick']
  },
  {
    id: '82',
    name: 'DC Universe',
    category: 'pop-culture',
    roles: ['Superhero', 'Supervillain', 'Commissioner', 'Reporter', 'Billionaire', 'Alien', 'Amazonian', 'Speedster']
  },
  {
    id: '83',
    name: 'Pokemon',
    category: 'pop-culture',
    roles: ['Pokemon Trainer', 'Gym Leader', 'Pokemon', 'Professor', 'Team Rocket', 'Nurse Joy', 'Officer Jenny', 'Elite Four']
  },
  {
    id: '84',
    name: 'Disney Princesses',
    category: 'pop-culture',
    roles: ['Princess', 'Prince', 'Villain', 'Fairy Godmother', 'Sidekick Animal', 'King', 'Queen', 'Witch']
  },
  {
    id: '85',
    name: 'Hogwarts',
    category: 'pop-culture',
    roles: ['Gryffindor Student', 'Slytherin Student', 'Hufflepuff Student', 'Ravenclaw Student', 'Professor', 'Ghost', 'House Elf', 'Headmaster']
  },
  {
    id: '86',
    name: 'Star Trek',
    category: 'pop-culture',
    roles: ['Captain', 'First Officer', 'Engineer', 'Doctor', 'Security Officer', 'Communications Officer', 'Alien', 'Red Shirt']
  },
  {
    id: '87',
    name: 'Anime Convention',
    category: 'pop-culture',
    roles: ['Cosplayer', 'Anime Fan', 'Voice Actor', 'Vendor', 'Security', 'Photographer', 'Manga Artist', 'Convention Staff']
  },
  {
    id: '88',
    name: 'Social Media',
    category: 'pop-culture',
    roles: ['Influencer', 'Follower', 'Troll', 'Content Creator', 'Moderator', 'Advertiser', 'Algorithm', 'Viral Video Star']
  },
  {
    id: '89',
    name: 'Gaming Community',
    category: 'pop-culture',
    roles: ['Pro Gamer', 'Streamer', 'Game Developer', 'Viewer', 'Moderator', 'Sponsor', 'Tournament Organizer', 'Casual Player']
  },
  {
    id: '90',
    name: 'Comic Con',
    category: 'pop-culture',
    roles: ['Cosplayer', 'Comic Artist', 'Celebrity Guest', 'Fan', 'Vendor', 'Security', 'Photographer', 'Panel Moderator']
  },
  {
    id: '91',
    name: 'TikTok',
    category: 'pop-culture',
    roles: ['Content Creator', 'Dancer', 'Comedian', 'Viewer', 'Algorithm', 'Brand Partner', 'Viral Trend Starter', 'Comment Troll']
  },
  {
    id: '92',
    name: 'Netflix Binge',
    category: 'pop-culture',
    roles: ['Binge Watcher', 'Show Creator', 'Actor', 'Netflix Algorithm', 'Critic', 'Casual Viewer', 'Subscription Sharer', 'Skip Intro Clicker']
  },
  {
    id: '93',
    name: 'Meme Culture',
    category: 'pop-culture',
    roles: ['Meme Creator', 'Viral Sensation', 'Reddit User', 'Instagram Memer', 'Boomer', 'Gen Z', 'Millennial', 'Normie']
  },
  {
    id: '94',
    name: 'YouTube',
    category: 'pop-culture',
    roles: ['YouTuber', 'Subscriber', 'Hater', 'Sponsor', 'Editor', 'Thumbnail Designer', 'Algorithm', 'Comment Section Warrior']
  },
  {
    id: '95',
    name: 'Fortnite',
    category: 'pop-culture',
    roles: ['Pro Player', 'Casual Gamer', 'Streamer', 'Skin Collector', 'Default Skin', 'Victory Royale Winner', 'Storm Victim', 'Builder']
  },
  {
    id: '96',
    name: 'K-Pop',
    category: 'pop-culture',
    roles: ['Idol', 'Fan', 'Producer', 'Choreographer', 'Trainee', 'Music Video Director', 'Sasaeng Fan', 'Anti-Fan']
  },
  {
    id: '97',
    name: 'Cryptocurrency',
    category: 'pop-culture',
    roles: ['Bitcoin Maximalist', 'Day Trader', 'HODLER', 'Miner', 'Scammer', 'Whale', 'Paper Hands', 'Diamond Hands']
  },
  {
    id: '98',
    name: 'Among Us',
    category: 'pop-culture',
    roles: ['Crewmate', 'Impostor', 'Emergency Meeting Caller', 'Task Completer', 'Vent User', 'Sus Player', 'Detective', 'Silent Player']
  },
  {
    id: '99',
    name: 'Minecraft',
    category: 'pop-culture',
    roles: ['Builder', 'Miner', 'Redstone Engineer', 'PvP Player', 'Speedrunner', 'Modder', 'Server Admin', 'Griefer']
  },
  {
    id: '100',
    name: 'Twitch',
    category: 'pop-culture',
    roles: ['Streamer', 'Viewer', 'Moderator', 'Subscriber', 'Donator', 'Troll', 'Emote Spammer', 'Raid Leader']
  },
  {
    id: '101',
    name: 'Super Bowl',
    category: 'pop-culture',
    roles: ['Quarterback', 'Coach', 'Fan', 'Cheerleader', 'Commentator', 'Comedian', 'Advertiser', 'Party Host']
  },
  {
    id: '102',
    name: 'Olympics',
    category: 'pop-culture',
    roles: ['Athlete', 'Coach', 'Spectator', 'Journalist', 'Sponsor', 'Volunteer', 'Medalist', 'Trainer']
  },
  {
    id: '103',
    name: 'Grammy Awards',
    category: 'pop-culture',
    roles: ['Musician', 'Producer', 'Fan', 'Journalist', 'Presenter', 'Record Label Exec', 'Backstage Crew', 'Celebrity Guest']
  },
  {
    id: '104',
    name: 'Met Gala',
    category: 'pop-culture',
    roles: ['Celebrity', 'Designer', 'Fashion Critic', 'Photographer', 'VIP Guest', 'Security', 'Stylist', 'Curator']
  },
  {
    id: '105',
    name: 'Coachella',
    category: 'pop-culture',
    roles: ['Headliner', 'Festival Goer', 'Vendor', 'Security', 'Photographer', 'Camping Enthusiast', 'DJ', 'VIP']
  },

  // Events (expanded)
  {
    id: '106',
    name: 'Wedding',
    category: 'events',
    roles: ['Bride', 'Groom', 'Best Man', 'Maid of Honor', 'Wedding Planner', 'Photographer', 'DJ', 'Caterer']
  },
  {
    id: '107',
    name: 'Birthday Party',
    category: 'events',
    roles: ['Birthday Person', 'Party Guest', 'Parent', 'Entertainer', 'Photographer', 'Caterer', 'Gift Giver', 'Party Crasher']
  },
  {
    id: '108',
    name: 'Corporate Party',
    category: 'events',
    roles: ['CEO', 'Employee', 'HR Manager', 'Caterer', 'Security', 'Photographer', 'DJ', 'Intern']
  },
  {
    id: '109',
    name: 'Music Festival',
    category: 'events',
    roles: ['Headliner', 'Opening Act', 'Festival Goer', 'Security Guard', 'Sound Engineer', 'Vendor', 'Photographer', 'Stage Manager']
  },
  {
    id: '110',
    name: 'Graduation Ceremony',
    category: 'events',
    roles: ['Graduate', 'Family Member', 'Principal', 'Valedictorian', 'Photographer', 'Security', 'Usher', 'Faculty']
  },
  {
    id: '111',
    name: 'Halloween Party',
    category: 'events',
    roles: ['Vampire', 'Witch', 'Ghost', 'Zombie', 'Superhero', 'Party Host', 'Trick-or-Treater', 'Costume Judge']
  },
  {
    id: '112',
    name: 'Christmas Party',
    category: 'events',
    roles: ['Santa Claus', 'Elf', 'Reindeer', 'Party Guest', 'Gift Giver', 'Carol Singer', 'Photographer', 'Caterer']
  },
  {
    id: '113',
    name: 'New Year\'s Eve Party',
    category: 'events',
    roles: ['Party Host', 'Midnight Kisser', 'Resolution Maker', 'Champagne Popper', 'DJ', 'Security', 'Designated Driver', 'Party Crasher']
  },
  {
    id: '114',
    name: 'Baby Shower',
    category: 'events',
    roles: ['Expecting Mother', 'Father-to-be', 'Grandmother', 'Best Friend', 'Party Planner', 'Gift Giver', 'Game Host', 'Photographer']
  },
  {
    id: '115',
    name: 'Retirement Party',
    category: 'events',
    roles: ['Retiree', 'Boss', 'Coworker', 'Family Member', 'HR Representative', 'Caterer', 'Speech Giver', 'Gift Presenter']
  },
  {
    id: '116',
    name: 'Prom Night',
    category: 'events',
    roles: ['Prom King', 'Prom Queen', 'Student', 'Chaperone', 'DJ', 'Photographer', 'Limo Driver', 'Wallflower']
  },
  {
    id: '117',
    name: 'Sporting Event',
    category: 'events',
    roles: ['Athlete', 'Coach', 'Referee', 'Fan', 'Commentator', 'Cheerleader', 'Mascot', 'Vendor']
  },
  {
    id: '118',
    name: 'Art Gallery Opening',
    category: 'events',
    roles: ['Artist', 'Gallery Owner', 'Art Critic', 'Collector', 'Curator', 'Waiter', 'Security Guard', 'Journalist']
  },
  {
    id: '119',
    name: 'Charity Gala',
    category: 'events',
    roles: ['Philanthropist', 'Celebrity Guest', 'Auctioneer', 'Donor', 'Organizer', 'Waiter', 'Photographer', 'Volunteer']
  },
  {
    id: '120',
    name: 'Book Launch',
    category: 'events',
    roles: ['Author', 'Publisher', 'Literary Agent', 'Book Critic', 'Fan', 'Bookstore Owner', 'Journalist', 'Photographer']
  },
  {
    id: '121',
    name: 'Food Festival',
    category: 'events',
    roles: ['Celebrity Chef', 'Food Critic', 'Vendor', 'Food Blogger', 'Hungry Visitor', 'Judge', 'Organizer', 'Local Restaurant Owner']
  },
  {
    id: '122',
    name: 'Tech Conference',
    category: 'events',
    roles: ['Keynote Speaker', 'Startup Founder', 'Investor', 'Developer', 'Journalist', 'Attendee', 'Booth Representative', 'Security']
  },
  {
    id: '123',
    name: 'Fashion Show',
    category: 'events',
    roles: ['Model', 'Fashion Designer', 'Fashion Critic', 'Photographer', 'Makeup Artist', 'Stylist', 'Buyer', 'Celebrity Guest']
  },
  {
    id: '124',
    name: 'Political Rally',
    category: 'events',
    roles: ['Politician', 'Campaign Manager', 'Supporter', 'Protester', 'Journalist', 'Security', 'Volunteer', 'Undecided Voter']
  },
  {
    id: '125',
    name: 'Escape Room',
    category: 'events',
    roles: ['Game Master', 'Team Leader', 'Puzzle Solver', 'Panic-er', 'Time Keeper', 'Hint Asker', 'Lock Picker', 'Red Herring Follower']
  },
  {
    id: '126',
    name: 'Concert',
    category: 'events',
    roles: ['Headliner', 'Opening Act', 'Fan', 'Security', 'Sound Engineer', 'Photographer', 'VIP', 'Roadie']
  },
  {
    id: '127',
    name: 'Comedy Show',
    category: 'events',
    roles: ['Comedian', 'Audience Member', 'Club Owner', 'Waiter', 'Sound Guy', 'Photographer', 'Critic', 'Fan']
  },
  {
    id: '128',
    name: 'Theater Performance',
    category: 'events',
    roles: ['Actor', 'Director', 'Audience Member', 'Stage Manager', 'Lighting Technician', 'Critic', 'Usher', 'Backstage Crew']
  },
  {
    id: '129',
    name: 'Carnival',
    category: 'events',
    roles: ['Carnival Barker', 'Visitor', 'Ride Operator', 'Vendor', 'Security', 'Photographer', 'Child', 'Game Booth Attendant']
  },
  {
    id: '130',
    name: 'Parade',
    category: 'events',
    roles: ['Marcher', 'Spectator', 'Band Member', 'Float Designer', 'Photographer', 'Security', 'Organizer', 'Vendor']
  },

  // Additional common locations
  {
    id: '131',
    name: 'Coffee Shop',
    category: 'locations',
    roles: ['Barista', 'Customer', 'Remote Worker', 'Student', 'Manager', 'Health Inspector', 'Musician', 'Baker']
  },
  {
    id: '132',
    name: 'University',
    category: 'locations',
    roles: ['Professor', 'Student', 'Dean', 'Janitor', 'Security', 'Researcher', 'Athlete', 'Librarian']
  },
  {
    id: '133',
    name: 'Bus Station',
    category: 'locations',
    roles: ['Bus Driver', 'Commuter', 'Tourist', 'Ticket Seller', 'Security', 'Vendor', 'Lost Child', 'Mechanic']
  },
  {
    id: '134',
    name: 'Pharmacy',
    category: 'locations',
    roles: ['Pharmacist', 'Customer', 'Cashier', 'Manager', 'Security', 'Delivery Driver', 'Nurse', 'Sales Rep']
  },
  {
    id: '135',
    name: 'Post Office',
    category: 'locations',
    roles: ['Clerk', 'Customer', 'Mail Carrier', 'Supervisor', 'Security', 'Customs Officer', 'Courier', 'Packager']
  },

  // Famous People (each as a topic with themed roles)
  {
    id: '136',
    name: 'Taylor Swift',
    category: 'famous-people',
    roles: ['Singer', 'Guitarist', 'Tour Manager', 'Security', 'Fan', 'Publicist', 'Dancer', 'Sound Engineer']
  },
  {
    id: '137',
    name: 'Elon Musk',
    category: 'famous-people',
    roles: ['CEO', 'Engineer', 'PR Manager', 'Investor', 'Driver', 'Designer', 'Assistant', 'Security']
  },
  {
    id: '138',
    name: 'Lionel Messi',
    category: 'famous-people',
    roles: ['Forward', 'Coach', 'Referee', 'Team Doctor', 'Fan', 'Commentator', 'Goalkeeper', 'Agent']
  },
  {
    id: '139',
    name: 'Beyoncé',
    category: 'famous-people',
    roles: ['Singer', 'Dancer', 'Producer', 'Stylist', 'Fan', 'Security', 'Tour Manager', 'Makeup Artist']
  },
  {
    id: '140',
    name: 'MrBeast',
    category: 'famous-people',
    roles: ['YouTuber', 'Editor', 'Contestant', 'Cameraperson', 'Sponsor', 'Fan', 'Manager', 'Security']
  },
  {
    id: '141',
    name: 'Oprah Winfrey',
    category: 'famous-people',
    roles: ['Host', 'Guest', 'Producer', 'Audience Member', 'Publicist', 'Researcher', 'Camera Operator', 'Assistant']
  },
  {
    id: '142',
    name: 'Rihanna',
    category: 'famous-people',
    roles: ['Singer', 'Fashion Designer', 'Makeup Artist', 'Stylist', 'Fan', 'Security', 'Producer', 'Photographer']
  },
  {
    id: '143',
    name: 'LeBron James',
    category: 'famous-people',
    roles: ['Player', 'Coach', 'Referee', 'Fan', 'Commentator', 'Physiotherapist', 'Agent', 'Mascot']
  },
  {
    id: '144',
    name: 'Greta Thunberg',
    category: 'famous-people',
    roles: ['Activist', 'Journalist', 'Politician', 'Scientist', 'Organizer', 'Speaker', 'Volunteer', 'Photographer']
  },
  {
    id: '145',
    name: 'Dwayne Johnson',
    category: 'famous-people',
    roles: ['Actor', 'Stunt Double', 'Director', 'Fan', 'Trainer', 'Agent', 'Security', 'Producer']
  },
  {
    id: '146',
    name: 'Billie Eilish',
    category: 'famous-people',
    roles: ['Singer', 'Producer', 'Fan', 'Security', 'Tour Manager', 'Songwriter', 'Dancer', 'Stylist']
  },
  {
    id: '147',
    name: 'Zendaya',
    category: 'famous-people',
    roles: ['Actor', 'Stylist', 'Director', 'Publicist', 'Fan', 'Photographer', 'Makeup Artist', 'Security']
  },
  {
    id: '148',
    name: 'Keanu Reeves',
    category: 'famous-people',
    roles: ['Actor', 'Stunt Coordinator', 'Director', 'Fan', 'Motorcyclist', 'Agent', 'Bodyguard', 'Publicist']
  },
  {
    id: '149',
    name: 'Ariana Grande',
    category: 'famous-people',
    roles: ['Singer', 'Dancer', 'Fan', 'Security', 'Producer', 'Makeup Artist', 'Stylist', 'Tour Manager']
  },
  {
    id: '150',
    name: 'Harry Styles',
    category: 'famous-people',
    roles: ['Singer', 'Guitarist', 'Fan', 'Security', 'Stylist', 'Publicist', 'Tour Manager', 'Photographer']
  }
];