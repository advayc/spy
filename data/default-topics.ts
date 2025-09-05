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
  },

  // Sports (25 topics)
  {
    id: '151',
    name: 'Football Stadium',
    category: 'sports',
    roles: ['Player', 'Coach', 'Referee', 'Fan', 'Mascot', 'Commentator', 'Security', 'Photographer']
  },
  {
    id: '152',
    name: 'Basketball Court',
    category: 'sports',
    roles: ['Player', 'Coach', 'Referee', 'Fan', 'Cheerleader', 'Commentator', 'Photographer', 'Water Boy']
  },
  {
    id: '153',
    name: 'Tennis Match',
    category: 'sports',
    roles: ['Player', 'Coach', 'Umpire', 'Ball Boy', 'Fan', 'Commentator', 'Photographer', 'Line Judge']
  },
  {
    id: '154',
    name: 'Swimming Pool',
    category: 'sports',
    roles: ['Swimmer', 'Coach', 'Lifeguard', 'Judge', 'Fan', 'Photographer', 'Pool Maintenance', 'Commentator']
  },
  {
    id: '155',
    name: 'Golf Course',
    category: 'sports',
    roles: ['Golfer', 'Caddie', 'Pro Shop Manager', 'Groundskeeper', 'Fan', 'Commentator', 'Photographer', 'Judge']
  },
  {
    id: '156',
    name: 'Boxing Ring',
    category: 'sports',
    roles: ['Boxer', 'Trainer', 'Referee', 'Fan', 'Corner Man', 'Commentator', 'Photographer', 'Ring Girl']
  },
  {
    id: '157',
    name: 'Ice Hockey Arena',
    category: 'sports',
    roles: ['Player', 'Coach', 'Referee', 'Fan', 'Mascot', 'Commentator', 'Photographer', 'Zamboni Driver']
  },
  {
    id: '158',
    name: 'Baseball Stadium',
    category: 'sports',
    roles: ['Player', 'Coach', 'Umpire', 'Fan', 'Mascot', 'Commentator', 'Photographer', 'Vendor']
  },
  {
    id: '159',
    name: 'Soccer Stadium',
    category: 'sports',
    roles: ['Player', 'Coach', 'Referee', 'Fan', 'Mascot', 'Commentator', 'Photographer', 'Security']
  },
  {
    id: '160',
    name: 'Volleyball Court',
    category: 'sports',
    roles: ['Player', 'Coach', 'Referee', 'Fan', 'Commentator', 'Photographer', 'Scorekeeper', 'Ball Retriever']
  },
  {
    id: '161',
    name: 'Track and Field',
    category: 'sports',
    roles: ['Athlete', 'Coach', 'Judge', 'Fan', 'Commentator', 'Photographer', 'Timer', 'Medical Staff']
  },
  {
    id: '162',
    name: 'Gymnastics Arena',
    category: 'sports',
    roles: ['Gymnast', 'Coach', 'Judge', 'Fan', 'Commentator', 'Photographer', 'Spotter', 'Equipment Manager']
  },
  {
    id: '163',
    name: 'Wrestling Match',
    category: 'sports',
    roles: ['Wrestler', 'Coach', 'Referee', 'Fan', 'Commentator', 'Photographer', 'Medical Staff', 'Timekeeper']
  },
  {
    id: '164',
    name: 'Martial Arts Dojo',
    category: 'sports',
    roles: ['Fighter', 'Sensei', 'Judge', 'Student', 'Parent', 'Photographer', 'Medical Staff', 'Announcer']
  },
  {
    id: '165',
    name: 'Skateboard Park',
    category: 'sports',
    roles: ['Skater', 'Judge', 'Photographer', 'Fan', 'Park Manager', 'Medical Staff', 'Equipment Vendor', 'Security']
  },
  {
    id: '166',
    name: 'Ski Resort',
    category: 'sports',
    roles: ['Skier', 'Instructor', 'Lift Operator', 'Guest', 'Photographer', 'Ski Patrol', 'Equipment Rental', 'Restaurant Staff']
  },
  {
    id: '167',
    name: 'Rock Climbing Gym',
    category: 'sports',
    roles: ['Climber', 'Instructor', 'Belayer', 'Route Setter', 'Guest', 'Photographer', 'Equipment Manager', 'Safety Inspector']
  },
  {
    id: '168',
    name: 'Cycling Race',
    category: 'sports',
    roles: ['Cyclist', 'Coach', 'Judge', 'Fan', 'Commentator', 'Photographer', 'Medical Staff', 'Mechanic']
  },
  {
    id: '169',
    name: 'Marathon Race',
    category: 'sports',
    roles: ['Runner', 'Spectator', 'Volunteer', 'Medical Staff', 'Photographer', 'Commentator', 'Water Station Staff', 'Race Official']
  },
  {
    id: '170',
    name: 'Formula 1 Race',
    category: 'sports',
    roles: ['Driver', 'Mechanic', 'Fan', 'Commentator', 'Photographer', 'Pit Crew', 'Race Official', 'Safety Marshal']
  },
  {
    id: '171',
    name: 'Surfing Competition',
    category: 'sports',
    roles: ['Surfer', 'Judge', 'Photographer', 'Fan', 'Commentator', 'Safety Personnel', 'Equipment Manager', 'Beach Official']
  },
  {
    id: '172',
    name: 'Bowling Alley',
    category: 'sports',
    roles: ['Bowler', 'League Organizer', 'Counter Staff', 'Maintenance', 'Spectator', 'Photographer', 'Pro Shop Manager', 'Food Service']
  },
  {
    id: '173',
    name: 'Badminton Court',
    category: 'sports',
    roles: ['Player', 'Coach', 'Referee', 'Spectator', 'Commentator', 'Photographer', 'Scorekeeper', 'Equipment Manager']
  },
  {
    id: '174',
    name: 'Table Tennis Tournament',
    category: 'sports',
    roles: ['Player', 'Coach', 'Umpire', 'Spectator', 'Commentator', 'Photographer', 'Ball Retriever', 'Tournament Director']
  },
  {
    id: '175',
    name: 'CrossFit Gym',
    category: 'sports',
    roles: ['Athlete', 'Coach', 'Judge', 'Member', 'Photographer', 'Equipment Manager', 'Nutritionist', 'Medical Staff']
  },

  // Music (25 topics)
  {
    id: '176',
    name: 'Concert Hall',
    category: 'music',
    roles: ['Musician', 'Conductor', 'Audience Member', 'Sound Engineer', 'Photographer', 'Security', 'Usher', 'Stage Manager']
  },
  {
    id: '177',
    name: 'Recording Studio',
    category: 'music',
    roles: ['Artist', 'Producer', 'Sound Engineer', 'Session Musician', 'Songwriter', 'Manager', 'Assistant', 'Intern']
  },
  {
    id: '178',
    name: 'Music Festival',
    category: 'music',
    roles: ['Performer', 'Fan', 'Security', 'Photographer', 'Vendor', 'Sound Technician', 'Stage Crew', 'Organizer']
  },
  {
    id: '179',
    name: 'Opera House',
    category: 'music',
    roles: ['Opera Singer', 'Conductor', 'Audience Member', 'Orchestra Member', 'Stage Hand', 'Costume Designer', 'Usher', 'Critic']
  },
  {
    id: '180',
    name: 'Jazz Club',
    category: 'music',
    roles: ['Jazz Musician', 'Singer', 'Audience Member', 'Bartender', 'Sound Engineer', 'Photographer', 'Music Critic', 'Club Owner']
  },
  {
    id: '181',
    name: 'Rock Concert',
    category: 'music',
    roles: ['Rock Star', 'Guitarist', 'Fan', 'Security', 'Photographer', 'Roadie', 'Sound Engineer', 'Groupie']
  },
  {
    id: '182',
    name: 'Hip-Hop Studio',
    category: 'music',
    roles: ['Rapper', 'Producer', 'DJ', 'Sound Engineer', 'Manager', 'Songwriter', 'Backup Dancer', 'Photographer']
  },
  {
    id: '183',
    name: 'Symphony Orchestra',
    category: 'music',
    roles: ['Violinist', 'Conductor', 'Audience Member', 'Cellist', 'Pianist', 'Flutist', 'Photographer', 'Music Director']
  },
  {
    id: '184',
    name: 'Country Music Venue',
    category: 'music',
    roles: ['Country Singer', 'Guitarist', 'Fan', 'Bartender', 'Sound Engineer', 'Photographer', 'Line Dancer', 'DJ']
  },
  {
    id: '185',
    name: 'Electronic Music Club',
    category: 'music',
    roles: ['DJ', 'Producer', 'Dancer', 'VJ', 'Sound Engineer', 'Photographer', 'Security', 'Promoter']
  },
  {
    id: '186',
    name: 'Music School',
    category: 'music',
    roles: ['Student', 'Teacher', 'Principal', 'Piano Tuner', 'Janitor', 'Parent', 'Photographer', 'Accompanist']
  },
  {
    id: '187',
    name: 'Broadway Musical',
    category: 'music',
    roles: ['Actor', 'Singer', 'Dancer', 'Audience Member', 'Director', 'Choreographer', 'Photographer', 'Usher']
  },
  {
    id: '188',
    name: 'Karaoke Bar',
    category: 'music',
    roles: ['Singer', 'Audience Member', 'DJ', 'Bartender', 'Photographer', 'Security', 'Waitress', 'Manager']
  },
  {
    id: '189',
    name: 'Music Store',
    category: 'music',
    roles: ['Customer', 'Sales Person', 'Manager', 'Guitar Technician', 'Music Teacher', 'Photographer', 'Delivery Person', 'Cashier']
  },
  {
    id: '190',
    name: 'Radio Station',
    category: 'music',
    roles: ['DJ', 'Producer', 'Sound Engineer', 'Music Director', 'Intern', 'Photographer', 'Station Manager', 'Advertiser']
  },
  {
    id: '191',
    name: 'Choir Practice',
    category: 'music',
    roles: ['Choir Member', 'Conductor', 'Pianist', 'Soloist', 'Music Director', 'Photographer', 'Parent', 'Assistant']
  },
  {
    id: '192',
    name: 'Music Video Set',
    category: 'music',
    roles: ['Artist', 'Director', 'Camera Operator', 'Dancer', 'Lighting Technician', 'Makeup Artist', 'Producer', 'Assistant']
  },
  {
    id: '193',
    name: 'Blues Bar',
    category: 'music',
    roles: ['Blues Musician', 'Singer', 'Audience Member', 'Bartender', 'Photographer', 'Sound Engineer', 'Harmonica Player', 'Owner']
  },
  {
    id: '194',
    name: 'Reggae Festival',
    category: 'music',
    roles: ['Reggae Artist', 'Fan', 'Photographer', 'Security', 'Vendor', 'Sound Technician', 'Stage Manager', 'Dancer']
  },
  {
    id: '195',
    name: 'Classical Concert',
    category: 'music',
    roles: ['Pianist', 'Violinist', 'Audience Member', 'Conductor', 'Page Turner', 'Photographer', 'Usher', 'Music Critic']
  },
  {
    id: '196',
    name: 'Punk Rock Show',
    category: 'music',
    roles: ['Punk Musician', 'Fan', 'Photographer', 'Security', 'Sound Engineer', 'Roadie', 'Venue Owner', 'Mosher']
  },
  {
    id: '197',
    name: 'Folk Music Gathering',
    category: 'music',
    roles: ['Folk Singer', 'Guitarist', 'Audience Member', 'Storyteller', 'Photographer', 'Sound Engineer', 'Organizer', 'Vendor']
  },
  {
    id: '198',
    name: 'Music Awards Show',
    category: 'music',
    roles: ['Nominee', 'Presenter', 'Audience Member', 'Photographer', 'Cameraman', 'Producer', 'Security', 'Usher']
  },
  {
    id: '199',
    name: 'Acoustic Coffee Shop',
    category: 'music',
    roles: ['Singer-Songwriter', 'Audience Member', 'Barista', 'Photographer', 'Sound Engineer', 'Open Mic Host', 'Customer', 'Manager']
  },
  {
    id: '200',
    name: 'Orchestra Pit',
    category: 'music',
    roles: ['Musician', 'Conductor', 'Performer on Stage', 'Audience Member', 'Sound Engineer', 'Photographer', 'Stage Manager', 'Music Director']
  },

  // Science (25 topics)
  {
    id: '201',
    name: 'Science Laboratory',
    category: 'science',
    roles: ['Scientist', 'Lab Assistant', 'Researcher', 'Graduate Student', 'Lab Manager', 'Safety Officer', 'Equipment Technician', 'Photographer']
  },
  {
    id: '202',
    name: 'Space Station',
    category: 'science',
    roles: ['Astronaut', 'Mission Commander', 'Flight Engineer', 'Ground Control', 'Scientist', 'Photographer', 'Medical Officer', 'Communications Specialist']
  },
  {
    id: '203',
    name: 'Observatory',
    category: 'science',
    roles: ['Astronomer', 'Telescope Operator', 'Graduate Student', 'Visitor', 'Photographer', 'Data Analyst', 'Maintenance Technician', 'Director']
  },
  {
    id: '204',
    name: 'Medical Research Facility',
    category: 'science',
    roles: ['Medical Researcher', 'Lab Technician', 'Test Subject', 'Ethics Committee Member', 'Photographer', 'Data Analyst', 'Lab Manager', 'Graduate Student']
  },
  {
    id: '205',
    name: 'Particle Accelerator',
    category: 'science',
    roles: ['Physicist', 'Engineer', 'Technician', 'Visitor', 'Photographer', 'Safety Officer', 'Data Analyst', 'Research Director']
  },
  {
    id: '206',
    name: 'Marine Biology Station',
    category: 'science',
    roles: ['Marine Biologist', 'Diver', 'Research Assistant', 'Boat Captain', 'Photographer', 'Equipment Technician', 'Student', 'Station Manager']
  },
  {
    id: '207',
    name: 'Chemistry Lab',
    category: 'science',
    roles: ['Chemist', 'Lab Assistant', 'Graduate Student', 'Safety Officer', 'Photographer', 'Equipment Manager', 'Research Director', 'Visiting Scientist']
  },
  {
    id: '208',
    name: 'Natural History Museum',
    category: 'science',
    roles: ['Curator', 'Visitor', 'Tour Guide', 'Researcher', 'Photographer', 'Security Guard', 'Janitor', 'Gift Shop Worker']
  },
  {
    id: '209',
    name: 'Genetics Lab',
    category: 'science',
    roles: ['Geneticist', 'Lab Technician', 'Bioinformatician', 'Photographer', 'Equipment Specialist', 'Ethics Officer', 'Graduate Student', 'Lab Manager']
  },
  {
    id: '210',
    name: 'Weather Station',
    category: 'science',
    roles: ['Meteorologist', 'Weather Observer', 'Data Analyst', 'Equipment Technician', 'Photographer', 'Research Assistant', 'Station Manager', 'Visitor']
  },
  {
    id: '211',
    name: 'Archaeological Dig Site',
    category: 'science',
    roles: ['Archaeologist', 'Graduate Student', 'Local Worker', 'Site Director', 'Photographer', 'Conservator', 'Surveyor', 'Security Guard']
  },
  {
    id: '212',
    name: 'Nuclear Power Plant',
    category: 'science',
    roles: ['Nuclear Engineer', 'Technician', 'Safety Inspector', 'Security Guard', 'Photographer', 'Plant Manager', 'Control Room Operator', 'Maintenance Worker']
  },
  {
    id: '213',
    name: 'Robotics Lab',
    category: 'science',
    roles: ['Robotics Engineer', 'Programmer', 'Technician', 'Graduate Student', 'Photographer', 'Lab Manager', 'Test Subject', 'Visitor']
  },
  {
    id: '214',
    name: 'Planetarium',
    category: 'science',
    roles: ['Astronomer', 'Visitor', 'Presenter', 'Technician', 'Photographer', 'Student', 'Teacher', 'Manager']
  },
  {
    id: '215',
    name: 'Forensics Lab',
    category: 'science',
    roles: ['Forensic Scientist', 'Lab Technician', 'Detective', 'Photographer', 'Evidence Clerk', 'DNA Analyst', 'Lab Manager', 'Court Reporter']
  },
  {
    id: '216',
    name: 'Botanical Garden',
    category: 'science',
    roles: ['Botanist', 'Visitor', 'Gardener', 'Tour Guide', 'Photographer', 'Student', 'Researcher', 'Gift Shop Worker']
  },
  {
    id: '217',
    name: 'Seismic Monitoring Station',
    category: 'science',
    roles: ['Seismologist', 'Data Analyst', 'Equipment Technician', 'Photographer', 'Research Assistant', 'Station Manager', 'Emergency Coordinator', 'Visitor']
  },
  {
    id: '218',
    name: 'Vaccine Research Center',
    category: 'science',
    roles: ['Immunologist', 'Clinical Researcher', 'Test Subject', 'Lab Technician', 'Photographer', 'Ethics Committee Member', 'Data Manager', 'Research Director']
  },
  {
    id: '219',
    name: 'Environmental Research Station',
    category: 'science',
    roles: ['Environmental Scientist', 'Field Researcher', 'Data Collector', 'Photographer', 'Equipment Technician', 'Station Manager', 'Graduate Student', 'Local Guide']
  },
  {
    id: '220',
    name: 'Neuroscience Lab',
    category: 'science',
    roles: ['Neuroscientist', 'Research Subject', 'Lab Technician', 'Graduate Student', 'Photographer', 'Equipment Specialist', 'Data Analyst', 'Lab Manager']
  },
  {
    id: '221',
    name: 'Solar Observatory',
    category: 'science',
    roles: ['Solar Physicist', 'Observatory Technician', 'Data Analyst', 'Photographer', 'Visitor', 'Graduate Student', 'Equipment Manager', 'Director']
  },
  {
    id: '222',
    name: 'Paleontology Dig',
    category: 'science',
    roles: ['Paleontologist', 'Graduate Student', 'Local Worker', 'Site Director', 'Photographer', 'Fossil Preparator', 'Surveyor', 'Security Guard']
  },
  {
    id: '223',
    name: 'Quantum Physics Lab',
    category: 'science',
    roles: ['Quantum Physicist', 'Research Assistant', 'Graduate Student', 'Lab Technician', 'Photographer', 'Equipment Specialist', 'Theoretical Physicist', 'Lab Manager']
  },
  {
    id: '224',
    name: 'Antarctic Research Base',
    category: 'science',
    roles: ['Research Scientist', 'Base Commander', 'Equipment Technician', 'Cook', 'Photographer', 'Medical Officer', 'Communications Operator', 'Meteorologist']
  },
  {
    id: '225',
    name: 'Crystallography Lab',
    category: 'science',
    roles: ['Crystallographer', 'X-ray Technician', 'Graduate Student', 'Photographer', 'Equipment Manager', 'Data Analyst', 'Research Director', 'Lab Assistant']
  },

  // History (25 topics)
  {
    id: '226',
    name: 'Medieval Castle',
    category: 'history',
    roles: ['King', 'Queen', 'Knight', 'Peasant', 'Blacksmith', 'Archer', 'Cook', 'Court Jester']
  },
  {
    id: '227',
    name: 'Ancient Rome',
    category: 'history',
    roles: ['Emperor', 'Gladiator', 'Senator', 'Slave', 'Centurion', 'Merchant', 'Citizen', 'Chariot Racer']
  },
  {
    id: '228',
    name: 'Wild West Town',
    category: 'history',
    roles: ['Sheriff', 'Outlaw', 'Saloon Owner', 'Cowboy', 'Banker', 'Doctor', 'Bartender', 'Town Mayor']
  },
  {
    id: '229',
    name: 'Ancient Egypt',
    category: 'history',
    roles: ['Pharaoh', 'Priest', 'Scribe', 'Slave', 'Pyramid Builder', 'Merchant', 'Noble', 'Embalmer']
  },
  {
    id: '230',
    name: 'Pirate Ship',
    category: 'history',
    roles: ['Captain', 'First Mate', 'Cook', 'Navigator', 'Gunner', 'Sailor', 'Cabin Boy', 'Prisoner']
  },
  {
    id: '231',
    name: 'Victorian London',
    category: 'history',
    roles: ['Gentleman', 'Lady', 'Butler', 'Maid', 'Detective', 'Street Sweeper', 'Merchant', 'Chimney Sweep']
  },
  {
    id: '232',
    name: 'Samurai Village',
    category: 'history',
    roles: ['Samurai', 'Daimyo', 'Peasant', 'Monk', 'Blacksmith', 'Geisha', 'Merchant', 'Ronin']
  },
  {
    id: '233',
    name: 'Renaissance Italy',
    category: 'history',
    roles: ['Artist', 'Patron', 'Merchant', 'Noble', 'Peasant', 'Priest', 'Scholar', 'Apprentice']
  },
  {
    id: '234',
    name: 'Colonial America',
    category: 'history',
    roles: ['Colonial Governor', 'Farmer', 'Blacksmith', 'Merchant', 'Native American', 'Soldier', 'Preacher', 'Indentured Servant']
  },
  {
    id: '235',
    name: 'Ancient Greece',
    category: 'history',
    roles: ['Philosopher', 'Citizen', 'Slave', 'Politician', 'Soldier', 'Merchant', 'Athlete', 'Oracle']
  },
  {
    id: '236',
    name: 'Stone Age Settlement',
    category: 'history',
    roles: ['Hunter', 'Gatherer', 'Shaman', 'Toolmaker', 'Elder', 'Child', 'Cave Painter', 'Fire Keeper']
  },
  {
    id: '237',
    name: '1920s Speakeasy',
    category: 'history',
    roles: ['Bootlegger', 'Flapper', 'Bartender', 'Jazz Musician', 'Police Officer', 'Gangster', 'Customer', 'Singer']
  },
  {
    id: '238',
    name: 'World War II Bunker',
    category: 'history',
    roles: ['General', 'Soldier', 'Radio Operator', 'Medic', 'Resistance Fighter', 'Spy', 'Code Breaker', 'Prisoner of War']
  },
  {
    id: '239',
    name: 'Viking Longhouse',
    category: 'history',
    roles: ['Jarl', 'Viking Warrior', 'Skald', 'Thrall', 'Blacksmith', 'Shield Maiden', 'Trader', 'Seer']
  },
  {
    id: '240',
    name: 'Aztec Temple',
    category: 'history',
    roles: ['High Priest', 'Emperor', 'Warrior', 'Scribe', 'Merchant', 'Slave', 'Artisan', 'Farmer']
  },
  {
    id: '241',
    name: 'Industrial Revolution Factory',
    category: 'history',
    roles: ['Factory Owner', 'Worker', 'Foreman', 'Child Laborer', 'Union Organizer', 'Engineer', 'Inspector', 'Mechanic']
  },
  {
    id: '242',
    name: 'Gold Rush Camp',
    category: 'history',
    roles: ['Prospector', 'Saloon Owner', 'Merchant', 'Sheriff', 'Banker', 'Doctor', 'Claim Jumper', 'Supply Runner']
  },
  {
    id: '243',
    name: 'Mongol Encampment',
    category: 'history',
    roles: ['Khan', 'Warrior', 'Horse Trainer', 'Shaman', 'Trader', 'Scout', 'Captive', 'Archer']
  },
  {
    id: '244',
    name: 'Ottoman Palace',
    category: 'history',
    roles: ['Sultan', 'Vizier', 'Janissary', 'Eunuch', 'Concubine', 'Scribe', 'Merchant', 'Ambassador']
  },
  {
    id: '245',
    name: 'Mayan City',
    category: 'history',
    roles: ['Priest King', 'Astronomer', 'Warrior', 'Scribe', 'Merchant', 'Farmer', 'Artisan', 'Slave']
  },
  {
    id: '246',
    name: 'French Revolution',
    category: 'history',
    roles: ['Revolutionary', 'Aristocrat', 'Peasant', 'Executioner', 'Politician', 'Journalist', 'Soldier', 'Citizen']
  },
  {
    id: '247',
    name: 'Cold War Berlin',
    category: 'history',
    roles: ['CIA Agent', 'KGB Spy', 'East German Guard', 'West Berlin Citizen', 'Journalist', 'Smuggler', 'Diplomat', 'Refugee']
  },
  {
    id: '248',
    name: 'Salem Witch Trials',
    category: 'history',
    roles: ['Accused Witch', 'Judge', 'Puritan Minister', 'Townsperson', 'Accuser', 'Magistrate', 'Witness', 'Executioner']
  },
  {
    id: '249',
    name: 'Chinese Imperial Court',
    category: 'history',
    roles: ['Emperor', 'Empress', 'Eunuch', 'Mandarin', 'Concubine', 'Guard', 'Servant', 'Court Physician']
  },
  {
    id: '250',
    name: 'Inca Empire',
    category: 'history',
    roles: ['Sapa Inca', 'High Priest', 'Warrior', 'Quipu Keeper', 'Farmer', 'Artisan', 'Messenger', 'Noble']
  },

  // Internet (25 topics)
  {
    id: '251',
    name: 'Social Media Office',
    category: 'internet',
    roles: ['Content Creator', 'Social Media Manager', 'Influencer', 'Photographer', 'Video Editor', 'Community Manager', 'Analytics Specialist', 'Brand Manager']
  },
  {
    id: '252',
    name: 'Gaming Tournament',
    category: 'internet',
    roles: ['Pro Gamer', 'Streamer', 'Commentator', 'Fan', 'Tournament Organizer', 'Photographer', 'Sponsor Rep', 'Technical Support']
  },
  {
    id: '253',
    name: 'Tech Startup Office',
    category: 'internet',
    roles: ['CEO', 'Developer', 'Designer', 'Investor', 'Intern', 'Marketing Manager', 'Product Manager', 'Sales Rep']
  },
  {
    id: '254',
    name: 'YouTube Studio',
    category: 'internet',
    roles: ['YouTuber', 'Video Editor', 'Camera Operator', 'Subscriber', 'Sponsor', 'Channel Manager', 'Thumbnail Designer', 'Sound Engineer']
  },
  {
    id: '255',
    name: 'Data Center',
    category: 'internet',
    roles: ['Network Engineer', 'Server Administrator', 'Security Guard', 'Technician', 'Manager', 'Photographer', 'Maintenance Worker', 'Visitor']
  },
  {
    id: '256',
    name: 'Podcast Studio',
    category: 'internet',
    roles: ['Host', 'Co-host', 'Guest', 'Producer', 'Sound Engineer', 'Listener', 'Sponsor', 'Editor']
  },
  {
    id: '257',
    name: 'E-commerce Warehouse',
    category: 'internet',
    roles: ['Warehouse Worker', 'Manager', 'Delivery Driver', 'Customer Service Rep', 'Photographer', 'Quality Control', 'Inventory Specialist', 'Packer']
  },
  {
    id: '258',
    name: 'Streaming Platform Office',
    category: 'internet',
    roles: ['Content Curator', 'Algorithm Engineer', 'UX Designer', 'Data Analyst', 'Customer Support', 'Photographer', 'Product Manager', 'Marketing Specialist']
  },
  {
    id: '259',
    name: 'Cybersecurity Firm',
    category: 'internet',
    roles: ['Ethical Hacker', 'Security Analyst', 'Penetration Tester', 'Cybersecurity Consultant', 'Incident Responder', 'Photographer', 'Research Director', 'Sales Engineer']
  },
  {
    id: '260',
    name: 'Virtual Reality Studio',
    category: 'internet',
    roles: ['VR Developer', 'Game Designer', 'Test User', 'Motion Capture Actor', 'Photographer', 'Creative Director', 'Technical Artist', 'Producer']
  },
  {
    id: '261',
    name: 'Crypto Trading Floor',
    category: 'internet',
    roles: ['Crypto Trader', 'Blockchain Developer', 'Investment Advisor', 'Market Analyst', 'Photographer', 'Compliance Officer', 'Day Trader', 'Exchange Manager']
  },
  {
    id: '262',
    name: 'Online Learning Platform',
    category: 'internet',
    roles: ['Online Instructor', 'Student', 'Course Developer', 'Technical Support', 'Photographer', 'Learning Designer', 'Platform Administrator', 'Content Reviewer']
  },
  {
    id: '263',
    name: 'Digital Marketing Agency',
    category: 'internet',
    roles: ['Digital Marketer', 'SEO Specialist', 'Content Writer', 'Graphic Designer', 'Photographer', 'Account Manager', 'PPC Specialist', 'Analytics Expert']
  },
  {
    id: '264',
    name: 'Online Marketplace',
    category: 'internet',
    roles: ['Seller', 'Buyer', 'Customer Service Rep', 'Platform Developer', 'Photographer', 'Trust & Safety Officer', 'Payment Processor', 'Marketplace Manager']
  },
  {
    id: '265',
    name: 'Cloud Computing Center',
    category: 'internet',
    roles: ['Cloud Architect', 'DevOps Engineer', 'System Administrator', 'Customer', 'Photographer', 'Security Specialist', 'Technical Support', 'Sales Engineer']
  },
  {
    id: '266',
    name: 'Meme Creation Studio',
    category: 'internet',
    roles: ['Meme Creator', 'Viral Content Manager', 'Social Media Strategist', 'Graphic Designer', 'Photographer', 'Community Manager', 'Trend Analyst', 'Content Moderator']
  },
  {
    id: '267',
    name: 'NFT Marketplace',
    category: 'internet',
    roles: ['Digital Artist', 'NFT Collector', 'Blockchain Developer', 'Art Curator', 'Photographer', 'Marketplace Admin', 'Crypto Investor', 'Community Manager']
  },
  {
    id: '268',
    name: 'TikTok House',
    category: 'internet',
    roles: ['TikToker', 'Content Manager', 'Choreographer', 'Videographer', 'Photographer', 'Social Media Manager', 'Brand Partner', 'House Manager']
  },
  {
    id: '269',
    name: 'Online Gaming Guild',
    category: 'internet',
    roles: ['Guild Leader', 'Raid Member', 'Streamer', 'Moderator', 'Photographer', 'Community Manager', 'Esports Coach', 'Game Analyst']
  },
  {
    id: '270',
    name: 'Web Development Agency',
    category: 'internet',
    roles: ['Web Developer', 'UX Designer', 'Project Manager', 'Client', 'Photographer', 'SEO Specialist', 'Quality Assurance Tester', 'Creative Director']
  },
  {
    id: '271',
    name: 'Online Dating Platform',
    category: 'internet',
    roles: ['Dating App User', 'Algorithm Engineer', 'Safety Moderator', 'Customer Support', 'Photographer', 'Product Manager', 'Marketing Specialist', 'Data Scientist']
  },
  {
    id: '272',
    name: 'Artificial Intelligence Lab',
    category: 'internet',
    roles: ['AI Researcher', 'Machine Learning Engineer', 'Data Scientist', 'Ethics Officer', 'Photographer', 'Product Manager', 'Research Director', 'Test Engineer']
  },
  {
    id: '273',
    name: 'Internet Cafe',
    category: 'internet',
    roles: ['Customer', 'Cafe Owner', 'Tech Support', 'Gamer', 'Photographer', 'Student', 'Tourist', 'Security Guard']
  },
  {
    id: '274',
    name: 'Online News Website',
    category: 'internet',
    roles: ['Journalist', 'Editor', 'Reader', 'Photographer', 'Web Developer', 'Social Media Manager', 'Fact Checker', 'News Director']
  },
  {
    id: '275',
    name: 'Remote Work Hub',
    category: 'internet',
    roles: ['Remote Worker', 'IT Support', 'Coworking Manager', 'Digital Nomad', 'Photographer', 'Cafe Staff', 'Network Administrator', 'Community Coordinator']
  }
];