import { Topic } from '@/stores/topics-store';

export const defaultTopics: Topic[] = [
  // locations
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
  {
    id: '31',
    name: 'Coffee Shop',
    category: 'locations',
    roles: ['Barista', 'Customer', 'Manager', 'Writer', 'Student', 'Business Person', 'Photographer', 'Regular']
  },
  {
    id: '32',
    name: 'Fire Station',
    category: 'locations',
    roles: ['Firefighter', 'Chief', 'Dispatcher', 'Paramedic', 'Volunteer', 'Mechanic', 'Dog Handler', 'Trainer']
  },
  {
    id: '33',
    name: 'Post Office',
    category: 'locations',
    roles: ['Postal Worker', 'Customer', 'Manager', 'Security Guard', 'Mail Sorter', 'Delivery Driver', 'Photographer', 'Janitor']
  },
  {
    id: '34',
    name: 'Gas Station',
    category: 'locations',
    roles: ['Attendant', 'Customer', 'Manager', 'Mechanic', 'Security Guard', 'Cashier', 'Delivery Driver', 'Regular Customer']
  },
  {
    id: '35',
    name: 'Laundromat',
    category: 'locations',
    roles: ['Customer', 'Owner', 'Maintenance Worker', 'Student', 'Homeless Person', 'Photographer', 'Security Guard', 'Regular']
  },
  {
    id: '36',
    name: 'Barber Shop',
    category: 'locations',
    roles: ['Barber', 'Customer', 'Apprentice', 'Regular', 'Photographer', 'Security Guard', 'Owner', 'Delivery Person']
  },
  {
    id: '37',
    name: 'Bookstore',
    category: 'locations',
    roles: ['Owner', 'Customer', 'Author', 'Librarian', 'Student', 'Photographer', 'Security Guard', 'Book Club Member']
  },
  {
    id: '38',
    name: 'Pharmacy',
    category: 'locations',
    roles: ['Pharmacist', 'Customer', 'Doctor', 'Nurse', 'Delivery Driver', 'Security Guard', 'Photographer', 'Regular']
  },
  {
    id: '39',
    name: 'Dentist Office',
    category: 'locations',
    roles: ['Dentist', 'Patient', 'Hygienist', 'Assistant', 'Receptionist', 'Child', 'Anxious Patient', 'Regular']
  },
  {
    id: '40',
    name: 'Car Dealership',
    category: 'locations',
    roles: ['Salesperson', 'Customer', 'Manager', 'Mechanic', 'Finance Officer', 'Security Guard', 'Test Driver', 'Photographer']
  },
  {
    id: '41',
    name: 'Hair Salon',
    category: 'locations',
    roles: ['Stylist', 'Customer', 'Apprentice', 'Receptionist', 'Regular', 'Photographer', 'Security Guard', 'Owner']
  },
  {
    id: '42',
    name: 'Grocery Store',
    category: 'locations',
    roles: ['Cashier', 'Customer', 'Manager', 'Stock Clerk', 'Butcher', 'Baker', 'Security Guard', 'Regular Shopper']
  },
  // movies
  {
    id: '43',
    name: 'Titanic',
    category: 'movies',
    roles: ['Captain', 'First Class Passenger', 'Third Class Passenger', 'Crew Member', 'Musician', 'Lookout', 'Engineer', 'Survivor']
  },
  {
    id: '44',
    name: 'Star Wars',
    category: 'movies',
    roles: ['Jedi', 'Sith', 'Rebel', 'Stormtrooper', 'Pilot', 'Droid', 'Princess', 'Smuggler']
  },
  {
    id: '45',
    name: 'Harry Potter',
    category: 'movies',
    roles: ['Student', 'Professor', 'Wizard', 'Muggle', 'Death Eater', 'Auror', 'House Elf', 'Ghost']
  },
  {
    id: '46',
    name: 'The Matrix',
    category: 'movies',
    roles: ['The One', 'Agent', 'Rebel', 'Oracle', 'Architect', 'Zion Citizen', 'Program', 'Red Pill']
  },
  {
    id: '47',
    name: 'Jurassic Park',
    category: 'movies',
    roles: ['Paleontologist', 'Park Visitor', 'Security Guard', 'Scientist', 'Tour Guide', 'Hunter', 'Veterinarian', 'Computer Programmer']
  },
  {
    id: '48',
    name: 'Interstellar',
    category: 'movies',
    roles: ['Astronaut', 'Farmer', 'Scientist', 'Engineer', 'Professor', 'Student', 'Pilot', 'Mission Control']
  },
  {
    id: '49',
    name: 'Inception',
    category: 'movies',
    roles: ['Extractor', 'Architect', 'Forger', 'Chemist', 'Subject', 'Projection', 'Tourist', 'Security']
  },
  {
    id: '50',
    name: 'The Dark Knight',
    category: 'movies',
    roles: ['Batman', 'Joker', 'Police Officer', 'Civilian', 'District Attorney', 'Mob Boss', 'Bank Robber', 'Commissioner']
  },
  {
    id: '51',
    name: 'Avengers Endgame',
    category: 'movies',
    roles: ['Superhero', 'Villain', 'S.H.I.E.L.D. Agent', 'Civilian', 'Scientist', 'Military', 'Reporter', 'Government Official']
  },
  {
    id: '52',
    name: 'Pirates of the Caribbean',
    category: 'movies',
    roles: ['Pirate Captain', 'Crew Member', 'Royal Navy', 'Blacksmith', 'Governor', 'Cursed Pirate', 'Merchant', 'Tavern Keeper']
  },
  {
    id: '53',
    name: 'Back to the Future',
    category: 'movies',
    roles: ['Time Traveler', 'Scientist', 'Teenager', 'Parent', 'Bully', 'Principal', 'Mayor', 'Clock Tower Worker']
  },
  {
    id: '54',
    name: 'Shrek',
    category: 'movies',
    roles: ['Ogre', 'Princess', 'Donkey', 'Dragon', 'Fairy Tale Character', 'Knight', 'King', 'Villager']
  },
  {
    id: '55',
    name: 'Finding Nemo',
    category: 'movies',
    roles: ['Clownfish', 'Blue Tang', 'Shark', 'Sea Turtle', 'Pelican', 'Dentist', 'Diver', 'Aquarium Fish']
  },
  {
    id: '56',
    name: 'The Lion King',
    category: 'movies',
    roles: ['Lion Cub', 'Lion King', 'Meerkat', 'Warthog', 'Hyena', 'Mandrill', 'Hornbill', 'Lioness']
  },
  {
    id: '57',
    name: 'Aladdin',
    category: 'movies',
    roles: ['Genie', 'Princess Jasmine', 'Aladdin', 'Jafar', 'Magic Carpet', 'Sultan', 'Agrabah Guard', 'Street Vendor']
  },
  {
    id: '58',
    name: 'Toy Story',
    category: 'movies',
    roles: ['Cowboy Toy', 'Space Ranger', 'Child', 'Parent', 'Toy Store Employee', 'Dog', 'Dinosaur Toy', 'Potato Head']
  },
  {
    id: '59',
    name: 'Avengers: Infinity War',
    category: 'movies',
    roles: ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Doctor Strange', 'Spider-Man', 'Thanos']
  },
  {
    id: '60',
    name: 'Ghostbusters',
    category: 'movies',
    roles: ['Ghostbuster', 'Ghost', 'Scientist', 'Secretary', 'EPA Agent', 'Hotel Manager', 'Possessed Person', 'Client']
  },
  {
    id: '61',
    name: 'Jaws',
    category: 'movies',
    roles: ['Shark Hunter', 'Police Chief', 'Marine Biologist', 'Mayor', 'Beach Goer', 'Boat Captain', 'Fisherman', 'Tourist']
  },
  {
    id: '62',
    name: 'Spiderman into the spiderverse',
    category: 'movies',
    roles: ['Young Superhero', 'Mentor Superhero', 'Female Superhero', 'Villain', 'Uncle', 'Animal Superhero', 'Noir Superhero', 'Mecha Superhero']
  },
  {
    id: '63',
    name: 'Forrest Gump',
    category: 'movies',
    roles: ['Runner', 'President', 'Friend', 'Mother', 'Doctor', 'Soldier', 'Businessman', 'Shrimper']
  },
  {
    id: '64',
    name: 'Black Panther',
    category: 'movies',
    roles: ['King/Superhero', 'Princess/Scientist', 'General/Warrior', 'Spy', 'Villain/Rival', 'CIA Agent', 'Tribal Elder', 'Bodyguard']
  },
  {
    id: '65',
    name: 'Fight Club',
    category: 'movies',
    roles: ['Insomniac', 'Soap Maker', 'Project Manager', 'Waiter', 'Mechanic', 'Doctor', 'Narrator', 'Support Group Member']
  },
  {
    id: '66',
    name: 'Oppenheimer',
    category: 'movies',
    roles: ['Physicist', 'Military General', 'Scientist', 'Politician', 'Wife', 'Colleague', 'Security Officer', 'Student']
  },
  {
    id: '67',
    name: 'Monsters, Inc',
    category: 'movies',
    roles: ['Monster Scarer', 'Assistant Monster', 'Human Child', 'Factory Owner', 'Government Agent', 'Coworker Monster', 'Exiled Monster', 'Child Detection Agent']
  },
  {
    id: '68',
    name: 'Monsters, University',
    category: 'movies',
    roles: ['College Student', 'Rival Student', 'Dean', 'Fraternity Brother', 'Professor', 'Scare Coach', 'Librarian', 'Campus Security']
  },
  {
    id: '69',
    name: 'Minions',
    category: 'movies',
    roles: ['Minion', 'Master Villain', 'Evil Genius', 'Queen', 'Guard', 'Inventor', 'Family Member', 'Thief']
  },
  {
    id: '70',
    name: 'Despicable Me',
    category: 'movies',
    roles: ['Adoptive Father', 'Helper', 'Child', 'Rival Villain', 'Secret Agent', 'Inventor', 'Teacher', 'Financier']
  },
  {
    id: '71',
    name: 'Kung Fu Panda',
    category: 'movies',
    roles: ['Panda Warrior', 'Master Teacher', 'Furious Five Warrior', 'Villain', 'Elder Sage', 'Goose Father', 'Noodle Shop Owner', 'Messenger Bird']
  },
  {
    id: '72',
    name: 'Karate Kid',
    category: 'movies',
    roles: ['Teen Student', 'Maintenance Man/Sensei', 'Bully', 'Love Interest', 'Mother', 'Tournament Fighter', 'Referee', 'Friend']
  },
  {
    id: '73',
    name: 'Deadpool',
    category: 'movies',
    roles: ['Superhero', 'Villain', 'S.H.I.E.L.D. Agent', 'Civilian', 'Scientist', 'Military', 'Reporter', 'Government Official']
  },
  {
    id: '74',
    name: 'Big Hero 6',
    category: 'movies',
    roles: ['Superhero', 'Villain', 'S.H.I.E.L.D. Agent', 'Civilian', 'Scientist', 'Military', 'Reporter', 'Government Official']
  },
  {
    id: '75',
    name: 'The Lego Movie',
    category: 'movies',
    roles: ['Builder', 'Rebel Leader', 'Evil Lord', 'Tech Wizard', 'Superhero Ally', 'Pirate', 'Astronaut', 'Magical Creature']
  },
  {
    id: '76',
    name: 'Avatar',
    category: 'movies',
    roles: ['Disabled Marine', 'Scientist', 'Na\'vi Princess', 'Clan Leader', 'Colonel', 'Pilot', 'Biologist', 'Miner']
  },
  {
    id: '77',
    name: 'Captain America: Civil War',
    category: 'movies',
    roles: ['Superhero', 'Villain', 'S.H.I.E.L.D. Agent', 'Civilian', 'Scientist', 'Military', 'Reporter', 'Government Official']
  },
  {
    id: '78',
    name: 'Rocky',
    category: 'movies',
    roles: ['Boxer', 'Trainer', 'Opponent', 'Love Interest', 'Promoter', 'Commentator', 'Friend', 'Manager']
  },
  {
    id: '79',
    name: 'Creed',
    category: 'movies',
    roles: ['Boxer', 'Trainer', 'Opponent', 'Girlfriend', 'Promoter', 'Commentator', 'Mother', 'Manager']
  },
  {
    id: '80',
    name: 'Top Gun',
    category: 'movies',
    roles: ['Fighter Pilot', 'Instructor', 'Rival Pilot', 'Love Interest', 'Commander', 'Navigator', 'Friend', 'Admiral']
  },
  {
    id: '81',
    name: 'Top Gun: Maverick',
    category: 'movies',
    roles: ['Fighter Pilot', 'Instructor', 'Rival Pilot', 'Love Interest', 'Commander', 'Navigator', 'Friend', 'Admiral']
  },
  {
    id: '82',
    name: 'F1 The Movie',
    category: 'movies',
    roles: ['Race Driver', 'Team Owner', 'Engineer', 'Rival Driver', 'Mechanic', 'Reporter', 'Sponsor', 'Pit Boss']
  },
  {
    id: '83',
    name: 'Mission: Impossible',
    category: 'movies',
    roles: ['IMF Agent', 'Villain', 'Tech Expert', 'Team Member', 'Director', 'Double Agent', 'Hacker', 'Pilot']
  },
  {
    id: '84',
    name: 'Fast and Furious',
    category: 'movies',
    roles: ['Street Racer', 'Undercover Cop', 'Mechanic', 'Villain', 'Family Member', 'Hacker', 'Agent', 'Driver']
  },
  {
    id: '85',
    name: 'The Social Network',
    category: 'movies',
    roles: ['College Student', 'Programmer', 'Investor', 'Lawyer', 'Co-Founder', 'Girlfriend', 'Club President', 'Twin']
  },
  {
    id: '86',
    name: 'Charlie and the Chocolate Factory',
    category: 'movies',
    roles: ['Chocolate Factory Owner', 'Child Ticket Winner', 'Parent', 'Oompa-Loompa', 'Rival Child', 'Grandparent', 'Reporter', 'Inventor']
  },
  {
    id: '87',
    name: 'Dr Strange',
    category: 'movies',
    roles: ['Superhero', 'Villain', 'S.H.I.E.L.D. Agent', 'Civilian', 'Scientist', 'Military', 'Reporter', 'Government Official']
  },
  {
    id: '88',
    name: 'Spiderman 2',
    category: 'movies',
    roles: ['Superhero', 'Villain', 'S.H.I.E.L.D. Agent', 'Civilian', 'Scientist', 'Military', 'Reporter', 'Government Official']
  },
  {
    id: '89',
    name: 'Deadpool and Wolverine',
    category: 'movies',
    roles: ['Superhero', 'Villain', 'S.H.I.E.L.D. Agent', 'Civilian', 'Scientist', 'Military', 'Reporter', 'Government Official']
  },
  {
    id: '90',
    name: 'Guardians of the Galaxy',
    category: 'movies',
    roles: ['Superhero', 'Villain', 'S.H.I.E.L.D. Agent', 'Civilian', 'Scientist', 'Military', 'Reporter', 'Government Official']
  },
  {
    id: '91',
    name: 'Iron Man',
    category: 'movies',
    roles: ['Superhero', 'Villain', 'S.H.I.E.L.D. Agent', 'Civilian', 'Scientist', 'Military', 'Reporter', 'Government Official']
  },
  {
    id: '92',
    name: 'Man of Steel',
    category: 'movies',
    roles: ['Superhero', 'Villain', 'Government Agent', 'Civilian', 'Scientist', 'Military', 'Reporter', 'Parent']
  },
  {
    id: '93',
    name: 'Superman (new)',
    category: 'movies',
    roles: ['Superhero', 'Villain', 'Government Agent', 'Civilian', 'Scientist', 'Military', 'Reporter', 'Parent']
  },
  {
    id: '94',
    name: 'Venom',
    category: 'movies',
    roles: ['Superhero', 'Villain', 'S.H.I.E.L.D. Agent', 'Civilian', 'Scientist', 'Military', 'Reporter', 'Government Official']
  },
  {
    id: '95',
    name: 'Morbius',
    category: 'movies',
    roles: ['Superhero', 'Villain', 'S.H.I.E.L.D. Agent', 'Civilian', 'Scientist', 'Military', 'Reporter', 'Government Official']
  },
  {
    id: '96',
    name: 'Ratatouille',
    category: 'movies',
    roles: ['Rat Chef', 'Human Chef', 'Food Critic', 'Head Chef', 'Waiter', 'Dishwasher', 'Food Inspector', 'Restaurant Owner']
  },
  {
    id: '97',
    name: 'Gran Turismo',
    category: 'movies',
    roles: ['Gamer Turned Racer', 'Trainer', 'Team Manager', 'Rival Racer', 'Father', 'Marketing Exec', 'Mechanic', 'Sponsor']
  },
  {
    id: '98',
    name: 'Cars',
    category: 'movies',
    roles: ['Rookie Racer', 'Tow Truck', 'Judge', 'Mechanic', 'Reporter', 'Sponsor', 'Rival Racer', 'Love Interest']
  },
  {
    id: '99',
    name: 'Cars 2',
    category: 'movies',
    roles: ['Spy', 'Racer', 'Villain', 'Secret Agent', 'Inventor', 'Queen', 'Mechanic', 'Rival']
  },
  {
    id: '100',
    name: 'Cars 3',
    category: 'movies',
    roles: ['Veteran Racer', 'Trainee', 'Trainer', 'Rival Racer', 'Sponsor', 'Mechanic', 'Reporter', 'Fan']
  },
  {
    id: '101',
    name: 'Hotel Transylvania',
    category: 'movies',
    roles: ['Hotel Owner/Vampire', 'Human Guest', 'Daughter', 'Frankenstein', 'Werewolf', 'Mummy', 'Invisible Man', 'Blob']
  },
  {
    id: '102',
    name: 'Cloudy with a Chance of Meatballs',
    category: 'movies',
    roles: ['Inventor', 'Weather Reporter', 'Mayor', 'Cop', 'Cameraman', 'Baby', 'Monkey', 'Scientist']
  },
  // tv shows
  {
    id: '103',
    name: 'Friends',
    category: 'tv-shows',
    roles: ['Coffee Shop Regular', 'Waiter', 'Actor', 'Masseuse', 'Paleontologist', 'Chef', 'Fashion Executive', 'Statistician']
  },
  {
    id: '104',
    name: 'The Office',
    category: 'tv-shows',
    roles: ['Regional Manager', 'Salesperson', 'Receptionist', 'Accountant', 'HR Representative', 'Warehouse Worker', 'Temp', 'Corporate Executive']
  },
  {
    id: '105',
    name: 'iCarly',
    category: 'tv-shows',
    roles: ['Web Show Host', 'Technical Producer', 'Artist Friend', 'Principal', 'Doorman', 'Teacher', 'Sibling', 'Parent']
  },
  {
    id: '106',
    name: 'Breaking Bad',
    category: 'tv-shows',
    roles: ['Chemistry Teacher', 'DEA Agent', 'Drug Dealer', 'Lawyer', 'Car Wash Owner', 'Student', 'Police Officer', 'Cartel Member']
  },
  {
    id: '107',
    name: 'Stranger Things',
    category: 'tv-shows',
    roles: ['Kid with Powers', 'Sheriff', 'Scientist', 'Monster', 'High School Student', 'Government Agent', 'Lab Worker', 'Parent']
  },
  {
    id: '108',
    name: 'The Simpsons',
    category: 'tv-shows',
    roles: ['Nuclear Plant Worker', 'Bartender', 'Elementary Student', 'Baby', 'Shopkeeper', 'Police Chief', 'Principal', 'Reverend']
  },
  {
    id: '109',
    name: 'Never Have I Ever',
    category: 'tv-shows',
    roles: ['High School Student', 'Mother', 'Therapist', 'Friend', 'Love Interest', 'Grandmother', 'Teacher', 'Cousin']
  },
  {
    id: '110',
    name: 'Lost',
    category: 'tv-shows',
    roles: ['Crash Survivor', 'Doctor', 'Fugitive', 'Lottery Winner', 'Rock Star', 'Con Artist', 'Polar Bear', 'Other']
  },
  {
    id: '111',
    name: 'SpongeBob SquarePants',
    category: 'tv-shows',
    roles: ['Fry Cook', 'Neighbor', 'Boss', 'Cashier', 'Superhero', 'Villain', 'Pet Snail', 'Driving Instructor']
  },
  {
    id: '112',
    name: 'The Big Bang Theory',
    category: 'tv-shows',
    roles: ['Physicist', 'Waitress', 'Engineer', 'Astrophysicist', 'Microbiologist', 'Comic Book Store Owner', 'Mother', 'Neighbor']
  },
  {
    id: '113',
    name: 'How I Met Your Mother',
    category: 'tv-shows',
    roles: ['Architect', 'Lawyer', 'Kindergarten Teacher', 'Bartender', 'News Anchor', 'Robin', 'Barney', 'Ted']
  },
  {
    id: '114',
    name: 'Modern Family',
    category: 'tv-shows',
    roles: ['Family Patriarch', 'Real Estate Agent', 'Philanthropist', 'College Student', 'Physical Therapist', 'Housekeeper', 'Pilot', 'Lawyer']
  },
  {
    id: '115',
    name: 'The Bachelor',
    category: 'tv-shows',
    roles: ['Bachelor', 'Contestant', 'Host', 'Producer', 'Cameraman', 'Makeup Artist', 'Security', 'Medical Staff']
  },
  {
    id: '116',
    name: 'Grey\'s Anatomy',
    category: 'tv-shows',
    roles: ['Surgeon', 'Intern', 'Nurse', 'Patient', 'Chief of Surgery', 'Anesthesiologist', 'Hospital Administrator', 'Medical Student']
  },
  {
    id: '117',
    name: 'The Rookie',
    category: 'tv-shows',
    roles: ['Rookie Police Officer', 'Training Officer', 'Sergeant', 'Detective', 'Captain', 'Wife', 'Criminal', 'Victim']
  },
  {
    id: '118',
    name: 'The Fairly OddParents',
    category: 'tv-shows',
    roles: ['Kid with Fairies', 'Fairy Godmother', 'Fairy Godfather', 'Baby Fairy', 'Parent', 'Bully', 'Teacher', 'Fairy Hunter']
  },
  {
    id: '119',
    name: 'Naruto',
    category: 'tv-shows',
    roles: ['Ninja Student', 'Team Leader', 'Rival Ninja', 'Female Teammate', 'Villain', 'Hokage', 'Teacher', 'Beast Host']
  },
  {
    id: '120',
    name: 'The Mandalorian',
    category: 'tv-shows',
    roles: ['Bounty Hunter', 'The Child', 'Imperial Officer', 'Rebel', 'Mechanic', 'Cantina Owner', 'Pilot', 'Jedi']
  },
  {
    id: '121',
    name: 'One Piece',
    category: 'tv-shows',
    roles: ['Pirate Captain', 'Swordsman', 'Navigator', 'Sniper', 'Cook', 'Doctor', 'Archaeologist', 'Robot Shipwright']
  },
  {
    id: '122',
    name: 'Black Mirror',
    category: 'tv-shows',
    roles: ['Tech CEO', 'Social Media User', 'AI', 'Gamer', 'Politician', 'Journalist', 'Programmer', 'Virtual Reality User']
  },
  {
    id: '123',
    name: 'Attack on Titan',
    category: 'tv-shows',
    roles: ['Survey Corps Member', 'Titan Shifter', 'Commander', 'Scientist', 'Military Police', 'Garrison Soldier', 'Trainee', 'Civilian']
  },
  {
    id: '124',
    name: 'The Boys',
    category: 'tv-shows',
    roles: ['Vigilante Leader', 'Superhero', 'CIA Handler', 'Corporate Exec', 'British Butcher', 'Frenchie', 'Mother\'s Milk', 'The Female']
  },
  {
    id: '125',
    name: 'Cobra Kai',
    category: 'tv-shows',
    roles: ['Karate Sensei', 'Rival Sensei', 'Student', 'Teen Fighter', 'Parent', 'Tournament Organizer', 'Friend', 'Bully']
  },
  {
    id: '126',
    name: 'Squid Game',
    category: 'tv-shows',
    roles: ['Contestant', 'Masked Guard', 'Front Man', 'VIP Observer', 'Game Designer', 'Recruiter', 'Police Officer', 'Debtor']
  },
  {
    id: '127',
    name: 'WandaVision',
    category: 'tv-shows',
    roles: ['Superhero Witch', 'Android Husband', 'Neighbor Witch', 'S.W.O.R.D Agent', 'Director', 'Scientist', 'Twin Child', 'Fake Brother']
  },
  {
    id: '128',
    name: 'Fresh Off the Boat',
    category: 'tv-shows',
    roles: ['Restaurant Owner', 'Wife', 'Eldest Son', 'Middle Son', 'Youngest Son', 'Grandmother', 'Neighbor', 'School Friend']
  },
  {
    id: '129',
    name: 'Full House',
    category: 'tv-shows',
    roles: ['Widower Father', 'Rock Star Uncle', 'Comedian Best Friend', 'Eldest Daughter', 'Middle Daughter', 'Youngest Daughter', 'Baby', 'Neighbor Kid']
  },
  {
    id: '130',
    name: 'Beyblade',
    category: 'tv-shows',
    roles: ['Beyblade Player', 'Rival Player', 'Team Member', 'Coach', 'Scientist', 'Commentator', 'Villain', 'Mechanic']
  },
  {
    id: '131',
    name: 'Prison Break',
    category: 'tv-shows',
    roles: ['Structural Engineer', 'Prison Inmate', 'Doctor', 'Guard', 'Lawyer', 'FBI Agent', 'Conspirator', 'Brother']
  },
  {
    id: '132',
    name: 'Avatar: The Last Airbender',
    category: 'tv-shows',
    roles: ['Airbender Avatar', 'Waterbender', 'Boomerang Warrior', 'Blind Earthbender', 'Fire Prince', 'Fire Lord', 'Uncle', 'Animal Companion']
  },
  {
    id: '133',
    name: 'Victorious',
    category: 'tv-shows',
    roles: ['Aspiring Singer', 'Talented Actor', 'Puppeteer', 'Tech Whiz', 'Teacher', 'Principal', 'Mean Girl', 'Musician']
  },
  // pop culture
  {
    id: '134',
    name: 'Marvel Universe',
    category: 'pop-culture',
    roles: ['Superhero', 'Villain', 'S.H.I.E.L.D. Agent', 'Civilian', 'Scientist', 'Reporter', 'Government Official', 'Sidekick']
  },
  {
    id: '135',
    name: 'DC Universe',
    category: 'pop-culture',
    roles: ['Superhero', 'Supervillain', 'Commissioner', 'Reporter', 'Billionaire', 'Alien', 'Amazonian', 'Speedster']
  },
  {
    id: '136',
    name: 'Pokemon',
    category: 'pop-culture',
    roles: ['Pokemon Trainer', 'Gym Leader', 'Pokemon', 'Professor', 'Team Rocket', 'Nurse Joy', 'Officer Jenny', 'Elite Four']
  },
  {
    id: '137',
    name: 'Disney Princesses',
    category: 'pop-culture',
    roles: ['Princess', 'Prince', 'Villain', 'Fairy Godmother', 'Sidekick Animal', 'King', 'Queen', 'Witch']
  },
  {
    id: '138',
    name: 'Hogwarts',
    category: 'pop-culture',
    roles: ['Gryffindor Student', 'Slytherin Student', 'Hufflepuff Student', 'Ravenclaw Student', 'Professor', 'Ghost', 'House Elf', 'Headmaster']
  },
  {
    id: '139',
    name: 'Star Trek',
    category: 'pop-culture',
    roles: ['Captain', 'First Officer', 'Engineer', 'Doctor', 'Security Officer', 'Communications Officer', 'Alien', 'Red Shirt']
  },
  {
    id: '140',
    name: 'Anime Convention',
    category: 'pop-culture',
    roles: ['Cosplayer', 'Anime Fan', 'Voice Actor', 'Vendor', 'Security', 'Photographer', 'Manga Artist', 'Convention Staff']
  },
  {
    id: '141',
    name: 'Social Media',
    category: 'pop-culture',
    roles: ['Influencer', 'Follower', 'Troll', 'Content Creator', 'Moderator', 'Advertiser', 'Algorithm', 'Viral Video Star']
  },
  {
    id: '142',
    name: 'Gaming Community',
    category: 'pop-culture',
    roles: ['Pro Gamer', 'Streamer', 'Game Developer', 'Viewer', 'Moderator', 'Sponsor', 'Tournament Organizer', 'Casual Player']
  },
  {
    id: '143',
    name: 'Comic Con',
    category: 'pop-culture',
    roles: ['Cosplayer', 'Comic Artist', 'Celebrity Guest', 'Fan', 'Vendor', 'Security', 'Photographer', 'Panel Moderator']
  },
  {
    id: '144',
    name: 'TikTok',
    category: 'pop-culture',
    roles: ['Content Creator', 'Dancer', 'Comedian', 'Viewer', 'Algorithm', 'Brand Partner', 'Viral Trend Starter', 'Comment Troll']
  },
  {
    id: '145',
    name: 'Netflix Binge',
    category: 'pop-culture',
    roles: ['Binge Watcher', 'Show Creator', 'Actor', 'Netflix Algorithm', 'Critic', 'Casual Viewer', 'Subscription Sharer', 'Skip Intro Clicker']
  },
  {
    id: '146',
    name: 'Memes',
    category: 'pop-culture',
    roles: ['Meme Creator', 'Viral Sensation', 'Reddit User', 'Instagram Memer', 'Boomer', 'Gen Z', 'Millennial', 'Normie']
  },
  {
    id: '147',
    name: 'YouTube',
    category: 'pop-culture',
    roles: ['YouTuber', 'Subscriber', 'Hater', 'Sponsor', 'Editor', 'Thumbnail Designer', 'Algorithm', 'Comment Section Warrior']
  },
  {
    id: '148',
    name: 'Fortnite',
    category: 'pop-culture',
    roles: ['Pro Player', 'Casual Gamer', 'Streamer', 'Skin Collector', 'Default Skin', 'Victory Royale Winner', 'Storm Victim', 'Builder']
  },
  {
    id: '149',
    name: 'K-Pop',
    category: 'pop-culture',
    roles: ['Idol', 'Fan', 'Producer', 'Choreographer', 'Trainee', 'Music Video Director', 'Sasaeng Fan', 'Anti-Fan']
  },
  {
    id: '150',
    name: 'Cryptocurrency',
    category: 'pop-culture',
    roles: ['Bitcoin Maximalist', 'Day Trader', 'HODLER', 'Miner', 'Scammer', 'Whale', 'Paper Hands', 'Diamond Hands']
  },
  {
    id: '151',
    name: 'Among Us',
    category: 'pop-culture',
    roles: ['Crewmate', 'Impostor', 'Emergency Meeting Caller', 'Task Completer', 'Vent User', 'Sus Player', 'Detective', 'Silent Player']
  },
  {
    id: '152',
    name: 'Minecraft',
    category: 'pop-culture',
    roles: ['Builder', 'Miner', 'Redstone Engineer', 'PvP Player', 'Speedrunner', 'Modder', 'Server Admin', 'Griefer']
  },
  {
    id: '153',
    name: 'Twitch',
    category: 'pop-culture',
    roles: ['Streamer', 'Viewer', 'Moderator', 'Subscriber', 'Donator', 'Troll', 'Emote Spammer', 'Raid Leader']
  },
  {
    id: '154',
    name: 'Super Bowl',
    category: 'pop-culture',
    roles: ['Quarterback', 'Coach', 'Fan', 'Cheerleader', 'Commentator', 'Comedian', 'Advertiser', 'Party Host']
  },
  {
    id: '155',
    name: 'Olympics',
    category: 'pop-culture',
    roles: ['Athlete', 'Coach', 'Spectator', 'Journalist', 'Sponsor', 'Volunteer', 'Medalist', 'Trainer']
  },
  {
    id: '156',
    name: 'Grammy Awards',
    category: 'pop-culture',
    roles: ['Musician', 'Producer', 'Fan', 'Journalist', 'Presenter', 'Record Label Exec', 'Backstage Crew', 'Celebrity Guest']
  },
  {
    id: '157',
    name: 'Met Gala',
    category: 'pop-culture',
    roles: ['Celebrity', 'Designer', 'Fashion Critic', 'Photographer', 'VIP Guest', 'Security', 'Stylist', 'Curator']
  },
  {
    id: '158',
    name: 'Coachella',
    category: 'pop-culture',
    roles: ['Headliner', 'Festival Goer', 'Vendor', 'Security', 'Photographer', 'Camping Enthusiast', 'DJ', 'VIP']
  },
  // events
  {
    id: '159',
    name: 'Wedding',
    category: 'events',
    roles: ['Bride', 'Groom', 'Best Man', 'Maid of Honor', 'Wedding Planner', 'Photographer', 'DJ', 'Caterer']
  },
  {
    id: '160',
    name: 'Birthday Party',
    category: 'events',
    roles: ['Birthday Person', 'Party Guest', 'Parent', 'Entertainer', 'Photographer', 'Caterer', 'Gift Giver', 'Party Crasher']
  },
  {
    id: '161',
    name: 'Corporate Party',
    category: 'events',
    roles: ['CEO', 'Employee', 'HR Manager', 'Caterer', 'Security', 'Photographer', 'DJ', 'Intern']
  },
  {
    id: '162',
    name: 'Music Festival',
    category: 'events',
    roles: ['Headliner', 'Opening Act', 'Festival Goer', 'Security Guard', 'Sound Engineer', 'Vendor', 'Photographer', 'Stage Manager']
  },
  {
    id: '163',
    name: 'Graduation Ceremony',
    category: 'events',
    roles: ['Graduate', 'Family Member', 'Principal', 'Valedictorian', 'Photographer', 'Security', 'Usher', 'Faculty']
  },
  {
    id: '164',
    name: 'Halloween Party',
    category: 'events',
    roles: ['Vampire', 'Witch', 'Ghost', 'Zombie', 'Superhero', 'Party Host', 'Trick-or-Treater', 'Costume Judge']
  },
  {
    id: '165',
    name: 'Christmas Party',
    category: 'events',
    roles: ['Santa Claus', 'Elf', 'Reindeer', 'Party Guest', 'Gift Giver', 'Carol Singer', 'Photographer', 'Caterer']
  },
  {
    id: '166',
    name: 'New Year\'s Eve Party',
    category: 'events',
    roles: ['Party Host', 'Midnight Kisser', 'Resolution Maker', 'Champagne Popper', 'DJ', 'Security', 'Designated Driver', 'Party Crasher']
  },
  {
    id: '167',
    name: 'Baby Shower',
    category: 'events',
    roles: ['Expecting Mother', 'Father-to-be', 'Grandmother', 'Best Friend', 'Party Planner', 'Gift Giver', 'Game Host', 'Photographer']
  },
  {
    id: '168',
    name: 'Retirement Party',
    category: 'events',
    roles: ['Retiree', 'Boss', 'Coworker', 'Family Member', 'HR Representative', 'Caterer', 'Speech Giver', 'Gift Presenter']
  },
  {
    id: '169',
    name: 'Prom Night',
    category: 'events',
    roles: ['Prom King', 'Prom Queen', 'Student', 'Chaperone', 'DJ', 'Photographer', 'Limo Driver', 'Wallflower']
  },
  {
    id: '170',
    name: 'Sporting Event',
    category: 'events',
    roles: ['Athlete', 'Coach', 'Referee', 'Fan', 'Commentator', 'Cheerleader', 'Mascot', 'Vendor']
  },
  {
    id: '171',
    name: 'Art Gallery Opening',
    category: 'events',
    roles: ['Artist', 'Gallery Owner', 'Art Critic', 'Collector', 'Curator', 'Waiter', 'Security Guard', 'Journalist']
  },
  {
    id: '172',
    name: 'Charity Gala',
    category: 'events',
    roles: ['Philanthropist', 'Celebrity Guest', 'Auctioneer', 'Donor', 'Organizer', 'Waiter', 'Photographer', 'Volunteer']
  },
  {
    id: '173',
    name: 'Book Launch',
    category: 'events',
    roles: ['Author', 'Publisher', 'Literary Agent', 'Book Critic', 'Fan', 'Bookstore Owner', 'Journalist', 'Photographer']
  },
  {
    id: '174',
    name: 'Food Festival',
    category: 'events',
    roles: ['Celebrity Chef', 'Food Critic', 'Vendor', 'Food Blogger', 'Hungry Visitor', 'Judge', 'Organizer', 'Local Restaurant Owner']
  },
  {
    id: '175',
    name: 'Tech Conference',
    category: 'events',
    roles: ['Keynote Speaker', 'Startup Founder', 'Investor', 'Developer', 'Journalist', 'Attendee', 'Booth Representative', 'Security']
  },
  {
    id: '176',
    name: 'Fashion Show',
    category: 'events',
    roles: ['Model', 'Fashion Designer', 'Fashion Critic', 'Photographer', 'Makeup Artist', 'Stylist', 'Buyer', 'Celebrity Guest']
  },
  {
    id: '177',
    name: 'Political Rally',
    category: 'events',
    roles: ['Politician', 'Campaign Manager', 'Supporter', 'Protester', 'Journalist', 'Security', 'Volunteer', 'Undecided Voter']
  },
  {
    id: '178',
    name: 'Escape Room',
    category: 'events',
    roles: ['Game Master', 'Team Leader', 'Puzzle Solver', 'Panic-er', 'Time Keeper', 'Hint Asker', 'Lock Picker', 'Red Herring Follower']
  },
  {
    id: '179',
    name: 'Concert',
    category: 'events',
    roles: ['Headliner', 'Opening Act', 'Fan', 'Security', 'Sound Engineer', 'Photographer', 'VIP', 'Roadie']
  },
  {
    id: '180',
    name: 'Comedy Show',
    category: 'events',
    roles: ['Comedian', 'Audience Member', 'Club Owner', 'Waiter', 'Sound Guy', 'Photographer', 'Critic', 'Fan']
  },
  {
    id: '181',
    name: 'Theater Performance',
    category: 'events',
    roles: ['Actor', 'Director', 'Audience Member', 'Stage Manager', 'Lighting Technician', 'Critic', 'Usher', 'Backstage Crew']
  },
  {
    id: '182',
    name: 'Carnival',
    category: 'events',
    roles: ['Carnival Barker', 'Visitor', 'Ride Operator', 'Vendor', 'Security', 'Photographer', 'Child', 'Game Booth Attendant']
  },
  {
    id: '183',
    name: 'Parade',
    category: 'events',
    roles: ['Marcher', 'Spectator', 'Band Member', 'Float Designer', 'Photographer', 'Security', 'Organizer', 'Vendor']
  },
  // addtl common locs
  {
    id: '184',
    name: 'University',
    category: 'locations',
    roles: ['Professor', 'Student', 'Dean', 'Janitor', 'Security', 'Researcher', 'Athlete', 'Librarian']
  },
  {
    id: '185',
    name: 'Bus Station',
    category: 'locations',
    roles: ['Bus Driver', 'Commuter', 'Tourist', 'Ticket Seller', 'Security', 'Vendor', 'Lost Child', 'Mechanic']
  },
    {
      id: '186',
      name: 'Aquarium',
      category: 'locations',
      roles: ['Marine Biologist', 'Visitor', 'Tour Guide', 'Security', 'Cashier', 'Janitor', 'Photographer', 'Child']
    },
    {
      id: '187',
      name: 'Train Station',
      category: 'locations',
      roles: ['Train Conductor', 'Passenger', 'Ticket Inspector', 'Vendor', 'Security', 'Janitor', 'Lost Traveler', 'Mechanic']
    },
    {
      id: '188',
      name: 'Amusement Park',
      category: 'locations',
      roles: ['Ride Operator', 'Visitor', 'Mascot', 'Security', 'Vendor', 'Maintenance Worker', 'Photographer', 'Child']
    },
    {
      id: '189',
      name: 'Mountain Cabin',
      category: 'locations',
      roles: ['Hiker', 'Caretaker', 'Guest', 'Chef', 'Guide', 'Wildlife Expert', 'Photographer', 'Child']
    },
    {
      id: '190',
      name: 'Zoo',
      category: 'locations',
      roles: ['Zookeeper', 'Visitor', 'Tour Guide', 'Security', 'Vendor', 'Veterinarian', 'Photographer', 'Child']
    },
    {
      id: '191',
      name: 'Subway Station',
      category: 'locations',
      roles: ['Train Operator', 'Commuter', 'Security', 'Vendor', 'Janitor', 'Lost Child', 'Musician', 'Ticket Seller']
    },
    {
      id: '192',
      name: 'Botanical Garden',
      category: 'locations',
      roles: ['Gardener', 'Visitor', 'Tour Guide', 'Security', 'Photographer', 'Botanist', 'Vendor', 'Child']
    },
    {
      id: '193',
      name: 'Skate Park',
      category: 'locations',
      roles: ['Skater', 'Spectator', 'Coach', 'Security', 'Vendor', 'Photographer', 'Child', 'Maintenance Worker']
    },
    {
      id: '194',
      name: 'Ice Rink',
      category: 'locations',
      roles: ['Skater', 'Coach', 'Spectator', 'Security', 'Vendor', 'Photographer', 'Child', 'Maintenance Worker']
    },
    {
      id: '195',
      name: 'Bowling Alley',
      category: 'locations',
      roles: ['Bowler', 'Spectator', 'Coach', 'Security', 'Vendor', 'Photographer', 'Child', 'Maintenance Worker']
    },
  // famous ppl
  {
    id: '186',
    name: 'Taylor Swift',
    category: 'famous-people',
    roles: ['Singer', 'Guitarist', 'Tour Manager', 'Security', 'Fan', 'Publicist', 'Dancer', 'Sound Engineer']
  },
  {
    id: '187',
    name: 'Elon Musk',
    category: 'famous-people',
    roles: ['CEO', 'Engineer', 'PR Manager', 'Investor', 'Driver', 'Designer', 'Assistant', 'Security']
  },
  {
    id: '188',
    name: 'Lionel Messi',
    category: 'famous-people',
    roles: ['Forward', 'Coach', 'Referee', 'Team Doctor', 'Fan', 'Commentator', 'Goalkeeper', 'Agent']
  },
  {
    id: '189',
    name: 'Beyoncé',
    category: 'famous-people',
    roles: ['Singer', 'Dancer', 'Producer', 'Stylist', 'Fan', 'Security', 'Tour Manager', 'Makeup Artist']
  },
  {
    id: '190',
    name: 'MrBeast',
    category: 'famous-people',
    roles: ['YouTuber', 'Editor', 'Contestant', 'Cameraperson', 'Sponsor', 'Fan', 'Manager', 'Security']
  },
  {
    id: '191',
    name: 'Oprah Winfrey',
    category: 'famous-people',
    roles: ['Host', 'Guest', 'Producer', 'Audience Member', 'Publicist', 'Researcher', 'Camera Operator', 'Assistant']
  },
  {
    id: '192',
    name: 'Rihanna',
    category: 'famous-people',
    roles: ['Singer', 'Fashion Designer', 'Makeup Artist', 'Stylist', 'Fan', 'Security', 'Producer', 'Photographer']
  },
  {
    id: '193',
    name: 'LeBron James',
    category: 'famous-people',
    roles: ['Player', 'Coach', 'Referee', 'Fan', 'Commentator', 'Physiotherapist', 'Agent', 'Mascot']
  },
    {
      id: '196',
      name: 'Stephen Curry',
      category: 'famous-people',
      roles: ['Player', 'Coach', 'Referee', 'Fan', 'Commentator', 'Physiotherapist', 'Agent', 'Mascot']
    },
    {
      id: '197',
      name: 'Michael Jordan',
      category: 'famous-people',
      roles: ['Player', 'Coach', 'Referee', 'Fan', 'Commentator', 'Physiotherapist', 'Agent', 'Mascot']
    },
    {
      id: '198',
      name: 'Kobe Bryant',
      category: 'famous-people',
      roles: ['Player', 'Coach', 'Referee', 'Fan', 'Commentator', 'Physiotherapist', 'Agent', 'Mascot']
    },
  {
    id: '194',
    name: 'Shaquille O\'Neal',
    category: 'famous-people',
    roles: ['Activist', 'Journalist', 'Politician', 'Scientist', 'Organizer', 'Speaker', 'Volunteer', 'Photographer']
  },
  {
    id: '195',
    name: 'Dwayne Johnson',
    category: 'famous-people',
    roles: ['Actor', 'Stunt Double', 'Director', 'Fan', 'Trainer', 'Agent', 'Security', 'Producer']
  },
  {
    id: '196',
    name: 'IShowSpeed',
    category: 'famous-people',
    roles: ['Streamer', 'YouTuber', 'Fan', 'Editor', 'Security', 'Manager', 'Gamer', 'Content Creator']
  },
  {
    id: '197',
    name: 'Zendaya',
    category: 'famous-people',
    roles: ['Actor', 'Stylist', 'Director', 'Publicist', 'Fan', 'Photographer', 'Makeup Artist', 'Security']
  },
  {
    id: '198',
    name: 'Keanu Reeves',
    category: 'famous-people',
    roles: ['Actor', 'Stunt Coordinator', 'Director', 'Fan', 'Motorcyclist', 'Agent', 'Bodyguard', 'Publicist']
  },
  {
    id: '199',
    name: 'Emma Watson',
    category: 'famous-people',
    roles: ['Actor', 'Activist', 'Fan', 'Security', 'Producer', 'Makeup Artist', 'Stylist', 'Public Speaker']
  },
  {
    id: '200',
    name: 'Tom Holland',
    category: 'famous-people',
    roles: ['Actor', 'Stuntman', 'Fan', 'Security', 'Stylist', 'Publicist', 'Tour Manager', 'Photographer']
  },
  // sports
  {
    id: '201',
    name: 'Football Stadium',
    category: 'sports',
    roles: ['Player', 'Coach', 'Referee', 'Fan', 'Mascot', 'Commentator', 'Security', 'Photographer']
  },
  {
    id: '202',
    name: 'Basketball Court',
    category: 'sports',
    roles: ['Player', 'Coach', 'Referee', 'Fan', 'Cheerleader', 'Commentator', 'Photographer', 'Water Boy']
  },
  {
    id: '203',
    name: 'Tennis Match',
    category: 'sports',
    roles: ['Player', 'Coach', 'Umpire', 'Ball Boy', 'Fan', 'Commentator', 'Photographer', 'Line Judge']
  },
  {
    id: '204',
    name: 'Swimming Pool',
    category: 'sports',
    roles: ['Swimmer', 'Coach', 'Lifeguard', 'Judge', 'Fan', 'Photographer', 'Pool Maintenance', 'Commentator']
  },
  {
    id: '205',
    name: 'Golf Course',
    category: 'sports',
    roles: ['Golfer', 'Caddie', 'Pro Shop Manager', 'Groundskeeper', 'Fan', 'Commentator', 'Photographer', 'Judge']
  },
  {
    id: '206',
    name: 'Boxing Ring',
    category: 'sports',
    roles: ['Boxer', 'Trainer', 'Referee', 'Fan', 'Corner Man', 'Commentator', 'Photographer', 'Ring Girl']
  },
  {
    id: '207',
    name: 'Ice Hockey Arena',
    category: 'sports',
    roles: ['Player', 'Coach', 'Referee', 'Fan', 'Mascot', 'Commentator', 'Photographer', 'Zamboni Driver']
  },
  {
    id: '208',
    name: 'Baseball Stadium',
    category: 'sports',
    roles: ['Player', 'Coach', 'Umpire', 'Fan', 'Mascot', 'Commentator', 'Photographer', 'Vendor']
  },
  {
    id: '209',
    name: 'Soccer Stadium',
    category: 'sports',
    roles: ['Player', 'Coach', 'Referee', 'Fan', 'Mascot', 'Commentator', 'Photographer', 'Security']
  },
  {
    id: '210',
    name: 'Volleyball Court',
    category: 'sports',
    roles: ['Player', 'Coach', 'Referee', 'Fan', 'Commentator', 'Photographer', 'Scorekeeper', 'Ball Retriever']
  },
  {
    id: '211',
    name: 'Track and Field',
    category: 'sports',
    roles: ['Athlete', 'Coach', 'Judge', 'Fan', 'Commentator', 'Photographer', 'Timer', 'Medical Staff']
  },
  {
    id: '212',
    name: 'Gymnastics Arena',
    category: 'sports',
    roles: ['Gymnast', 'Coach', 'Judge', 'Fan', 'Commentator', 'Photographer', 'Spotter', 'Equipment Manager']
  },
  {
    id: '213',
    name: 'Wrestling Match',
    category: 'sports',
    roles: ['Wrestler', 'Coach', 'Referee', 'Fan', 'Commentator', 'Photographer', 'Medical Staff', 'Timekeeper']
  },
  {
    id: '214',
    name: 'Martial Arts Dojo',
    category: 'sports',
    roles: ['Fighter', 'Sensei', 'Judge', 'Student', 'Parent', 'Photographer', 'Medical Staff', 'Announcer']
  },
  {
    id: '215',
    name: 'Skateboard Park',
    category: 'sports',
    roles: ['Skater', 'Judge', 'Photographer', 'Fan', 'Park Manager', 'Medical Staff', 'Equipment Vendor', 'Security']
  },
  {
    id: '216',
    name: 'Ski Resort',
    category: 'sports',
    roles: ['Skier', 'Instructor', 'Lift Operator', 'Guest', 'Photographer', 'Ski Patrol', 'Equipment Rental', 'Restaurant Staff']
  },
  {
    id: '217',
    name: 'Rock Climbing Gym',
    category: 'sports',
    roles: ['Climber', 'Instructor', 'Belayer', 'Route Setter', 'Guest', 'Photographer', 'Equipment Manager', 'Safety Inspector']
  },
  {
    id: '218',
    name: 'Cycling Race',
    category: 'sports',
    roles: ['Cyclist', 'Coach', 'Judge', 'Fan', 'Commentator', 'Photographer', 'Medical Staff', 'Mechanic']
  },
  {
    id: '219',
    name: 'Marathon Race',
    category: 'sports',
    roles: ['Runner', 'Spectator', 'Volunteer', 'Medical Staff', 'Photographer', 'Commentator', 'Water Station Staff', 'Race Official']
  },
  {
    id: '220',
    name: 'Formula 1 Race',
    category: 'sports',
    roles: ['Driver', 'Mechanic', 'Fan', 'Commentator', 'Photographer', 'Pit Crew', 'Race Official', 'Safety Marshal']
  },
  {
    id: '221',
    name: 'Surfing Competition',
    category: 'sports',
    roles: ['Surfer', 'Judge', 'Photographer', 'Fan', 'Commentator', 'Safety Personnel', 'Equipment Manager', 'Beach Official']
  },
  {
    id: '222',
    name: 'Bowling Alley',
    category: 'sports',
    roles: ['Bowler', 'League Organizer', 'Counter Staff', 'Maintenance', 'Spectator', 'Photographer', 'Pro Shop Manager', 'Food Service']
  },
  {
    id: '223',
    name: 'Badminton Court',
    category: 'sports',
    roles: ['Player', 'Coach', 'Referee', 'Spectator', 'Commentator', 'Photographer', 'Scorekeeper', 'Equipment Manager']
  },
  {
    id: '224',
    name: 'Table Tennis Tournament',
    category: 'sports',
    roles: ['Player', 'Coach', 'Umpire', 'Spectator', 'Commentator', 'Photographer', 'Ball Retriever', 'Tournament Director']
  },
  {
    id: '225',
    name: 'CrossFit Gym',
    category: 'sports',
    roles: ['Athlete', 'Coach', 'Judge', 'Member', 'Photographer', 'Equipment Manager', 'Nutritionist', 'Medical Staff']
  },
  {
    id: '226',
    name: 'Cricket Match',
    category: 'sports',
    roles: ['Batsman', 'Bowler', 'Wicket Keeper', 'Umpire', 'Fan', 'Commentator', 'Coach', 'Physiotherapist']
  },
  {
    id: '227',
    name: 'Rugby Field',
    category: 'sports',
    roles: ['Player', 'Coach', 'Referee', 'Fan', 'Commentator', 'Medical Staff', 'Equipment Manager', 'Security']
  },
  {
    id: '228',
    name: 'Horse Racing Track',
    category: 'sports',
    roles: ['Jockey', 'Trainer', 'Owner', 'Betting Clerk', 'Spectator', 'Commentator', 'Veterinarian', 'Stable Hand']
  },
  {
    id: '229',
    name: 'Tennis Court',
    category: 'sports',
    roles: ['Player', 'Coach', 'Referee', 'Spectator', 'Commentator', 'Photographer', 'Equipment Manager', 'Medical Staff']
  },
  {
    id: '230',
    name: 'Archery Range',
    category: 'sports',
    roles: ['Archer', 'Coach', 'Judge', 'Spectator', 'Equipment Manager', 'Medical Staff', 'Photographer', 'Range Officer']
  },
  {
    id: '231',
    name: 'Horse Riding',
    category: 'sports',
    roles: ['Rider', 'Trainer', 'Groom', 'Veterinarian', 'Spectator', 'Judge', 'Equipment Manager', 'Stable Manager']
  },
  {
    id: '232',
    name: 'Fencing Club',
    category: 'sports',
    roles: ['Fencer', 'Coach', 'Referee', 'Spectator', 'Equipment Manager', 'Medical Staff', 'Judge', 'Scorekeeper']
  },
  {
    id: '233',
    name: 'Triathlon',
    category: 'sports',
    roles: ['Athlete', 'Coach', 'Spectator', 'Medical Staff', 'Transition Official', 'Photographer', 'Volunteer', 'Commentator']
  },
  {
    id: '234',
    name: 'Weightlifting Competition',
    category: 'sports',
    roles: ['Weightlifter', 'Coach', 'Judge', 'Spectator', 'Spotter', 'Medical Staff', 'Equipment Manager', 'Commentator']
  },
  {
    id: '235',
    name: 'Darts Tournament',
    category: 'sports',
    roles: ['Player', 'Referee', 'Spectator', 'Commentator', 'Scorekeeper', 'Equipment Manager', 'Bar Staff', 'Tournament Director']
  },
  // music
  {
    id: '236',
    name: 'Concert Hall',
    category: 'music',
    roles: ['Musician', 'Conductor', 'Audience Member', 'Sound Engineer', 'Photographer', 'Security', 'Usher', 'Stage Manager']
  },
  {
    id: '237',
    name: 'Recording Studio',
    category: 'music',
    roles: ['Artist', 'Producer', 'Sound Engineer', 'Session Musician', 'Songwriter', 'Manager', 'Assistant', 'Intern']
  },
  {
    id: '238',
    name: 'Music Festival',
    category: 'music',
    roles: ['Performer', 'Fan', 'Security', 'Photographer', 'Vendor', 'Sound Technician', 'Stage Crew', 'Organizer']
  },
  {
    id: '239',
    name: 'Opera House',
    category: 'music',
    roles: ['Opera Singer', 'Conductor', 'Audience Member', 'Orchestra Member', 'Stage Hand', 'Costume Designer', 'Usher', 'Critic']
  },
  {
    id: '240',
    name: 'Jazz Club',
    category: 'music',
    roles: ['Jazz Musician', 'Singer', 'Audience Member', 'Bartender', 'Sound Engineer', 'Photographer', 'Music Critic', 'Club Owner']
  },
  {
    id: '241',
    name: 'Rock Concert',
    category: 'music',
    roles: ['Rock Star', 'Guitarist', 'Fan', 'Security', 'Photographer', 'Roadie', 'Sound Engineer', 'Groupie']
  },
  {
    id: '242',
    name: 'Hip-Hop Studio',
    category: 'music',
    roles: ['Rapper', 'Producer', 'DJ', 'Sound Engineer', 'Manager', 'Songwriter', 'Backup Dancer', 'Photographer']
  },
  {
    id: '243',
    name: 'Symphony Orchestra',
    category: 'music',
    roles: ['Violinist', 'Conductor', 'Audience Member', 'Cellist', 'Pianist', 'Flutist', 'Photographer', 'Music Director']
  },
  {
    id: '244',
    name: 'Country Music Venue',
    category: 'music',
    roles: ['Country Singer', 'Guitarist', 'Fan', 'Bartender', 'Sound Engineer', 'Photographer', 'Line Dancer', 'DJ']
  },
  {
    id: '245',
    name: 'Electronic Music Club',
    category: 'music',
    roles: ['DJ', 'Producer', 'Dancer', 'VJ', 'Sound Engineer', 'Photographer', 'Security', 'Promoter']
  },
  {
    id: '246',
    name: 'Music School',
    category: 'music',
    roles: ['Student', 'Teacher', 'Principal', 'Piano Tuner', 'Janitor', 'Parent', 'Photographer', 'Accompanist']
  },
  {
    id: '247',
    name: 'Broadway Musical',
    category: 'music',
    roles: ['Actor', 'Singer', 'Dancer', 'Audience Member', 'Director', 'Choreographer', 'Photographer', 'Usher']
  },
  {
    id: '248',
    name: 'Karaoke Bar',
    category: 'music',
    roles: ['Singer', 'Audience Member', 'DJ', 'Bartender', 'Photographer', 'Security', 'Waitress', 'Manager']
  },
  {
    id: '249',
    name: 'Music Store',
    category: 'music',
    roles: ['Customer', 'Sales Person', 'Manager', 'Guitar Technician', 'Music Teacher', 'Photographer', 'Delivery Person', 'Cashier']
  },
  {
    id: '250',
    name: 'Radio Station',
    category: 'music',
    roles: ['DJ', 'Producer', 'Sound Engineer', 'Music Director', 'Intern', 'Photographer', 'Station Manager', 'Advertiser']
  },
  {
    id: '251',
    name: 'Choir Practice',
    category: 'music',
    roles: ['Choir Member', 'Conductor', 'Pianist', 'Soloist', 'Music Director', 'Photographer', 'Parent', 'Assistant']
  },
  {
    id: '252',
    name: 'Music Video Set',
    category: 'music',
    roles: ['Artist', 'Director', 'Camera Operator', 'Dancer', 'Lighting Technician', 'Makeup Artist', 'Producer', 'Assistant']
  },
  {
    id: '253',
    name: 'Blues Bar',
    category: 'music',
    roles: ['Blues Musician', 'Singer', 'Audience Member', 'Bartender', 'Photographer', 'Sound Engineer', 'Harmonica Player', 'Owner']
  },
  {
    id: '254',
    name: 'Reggae Festival',
    category: 'music',
    roles: ['Reggae Artist', 'Fan', 'Photographer', 'Security', 'Vendor', 'Sound Technician', 'Stage Manager', 'Dancer']
  },
  {
    id: '255',
    name: 'Classical Concert',
    category: 'music',
    roles: ['Pianist', 'Violinist', 'Audience Member', 'Conductor', 'Page Turner', 'Photographer', 'Usher', 'Music Critic']
  },
  {
    id: '256',
    name: 'Punk Rock Show',
    category: 'music',
    roles: ['Punk Musician', 'Fan', 'Photographer', 'Security', 'Sound Engineer', 'Roadie', 'Venue Owner', 'Mosher']
  },
  {
    id: '257',
    name: 'Folk Music Gathering',
    category: 'music',
    roles: ['Folk Singer', 'Guitarist', 'Audience Member', 'Storyteller', 'Photographer', 'Sound Engineer', 'Organizer', 'Vendor']
  },
  {
    id: '258',
    name: 'Music Awards Show',
    category: 'music',
    roles: ['Nominee', 'Presenter', 'Audience Member', 'Photographer', 'Cameraman', 'Producer', 'Security', 'Usher']
  },
  {
    id: '259',
    name: 'Acoustic Coffee Shop',
    category: 'music',
    roles: ['Singer-Songwriter', 'Audience Member', 'Barista', 'Photographer', 'Sound Engineer', 'Open Mic Host', 'Customer', 'Manager']
  },
  {
    id: '260',
    name: 'Orchestra Pit',
    category: 'music',
    roles: ['Musician', 'Conductor', 'Performer on Stage', 'Audience Member', 'Sound Engineer', 'Photographer', 'Stage Manager', 'Music Director']
  },
  // science
  {
    id: '261',
    name: 'Science Laboratory',
    category: 'science',
    roles: ['Scientist', 'Lab Assistant', 'Researcher', 'Graduate Student', 'Lab Manager', 'Safety Officer', 'Equipment Technician', 'Photographer']
  },
  {
    id: '262',
    name: 'Space Station',
    category: 'science',
    roles: ['Astronaut', 'Mission Commander', 'Flight Engineer', 'Ground Control', 'Scientist', 'Photographer', 'Medical Officer', 'Communications Specialist']
  },
  {
    id: '263',
    name: 'Observatory',
    category: 'science',
    roles: ['Astronomer', 'Telescope Operator', 'Graduate Student', 'Visitor', 'Photographer', 'Data Analyst', 'Maintenance Technician', 'Director']
  },
  {
    id: '264',
    name: 'Medical Research Facility',
    category: 'science',
    roles: ['Medical Researcher', 'Lab Technician', 'Test Subject', 'Ethics Committee Member', 'Photographer', 'Data Analyst', 'Lab Manager', 'Graduate Student']
  },
  {
    id: '265',
    name: 'Particle Accelerator',
    category: 'science',
    roles: ['Physicist', 'Engineer', 'Technician', 'Visitor', 'Photographer', 'Safety Officer', 'Data Analyst', 'Research Director']
  },
  {
    id: '266',
    name: 'Marine Biology Station',
    category: 'science',
    roles: ['Marine Biologist', 'Diver', 'Research Assistant', 'Boat Captain', 'Photographer', 'Equipment Technician', 'Student', 'Station Manager']
  },
  {
    id: '267',
    name: 'Chemistry Lab',
    category: 'science',
    roles: ['Chemist', 'Lab Assistant', 'Graduate Student', 'Safety Officer', 'Photographer', 'Equipment Manager', 'Research Director', 'Visiting Scientist']
  },
  {
    id: '268',
    name: 'Natural History Museum',
    category: 'science',
    roles: ['Curator', 'Visitor', 'Tour Guide', 'Researcher', 'Photographer', 'Security Guard', 'Janitor', 'Gift Shop Worker']
  },
  {
    id: '269',
    name: 'Genetics Lab',
    category: 'science',
    roles: ['Geneticist', 'Lab Technician', 'Bioinformatician', 'Photographer', 'Equipment Specialist', 'Ethics Officer', 'Graduate Student', 'Lab Manager']
  },
  {
    id: '270',
    name: 'Weather Station',
    category: 'science',
    roles: ['Meteorologist', 'Weather Observer', 'Data Analyst', 'Equipment Technician', 'Photographer', 'Research Assistant', 'Station Manager', 'Visitor']
  },
  {
    id: '271',
    name: 'Archaeological Dig Site',
    category: 'science',
    roles: ['Archaeologist', 'Graduate Student', 'Local Worker', 'Site Director', 'Photographer', 'Conservator', 'Surveyor', 'Security Guard']
  },
  {
    id: '272',
    name: 'Nuclear Power Plant',
    category: 'science',
    roles: ['Nuclear Engineer', 'Technician', 'Safety Inspector', 'Security Guard', 'Photographer', 'Plant Manager', 'Control Room Operator', 'Maintenance Worker']
  },
  {
    id: '273',
    name: 'Robotics Lab',
    category: 'science',
    roles: ['Robotics Engineer', 'Programmer', 'Technician', 'Graduate Student', 'Photographer', 'Lab Manager', 'Test Subject', 'Visitor']
  },
  {
    id: '274',
    name: 'Planetarium',
    category: 'science',
    roles: ['Astronomer', 'Visitor', 'Presenter', 'Technician', 'Photographer', 'Student', 'Teacher', 'Manager']
  },
  {
    id: '275',
    name: 'Forensics Lab',
    category: 'science',
    roles: ['Forensic Scientist', 'Lab Technician', 'Detective', 'Photographer', 'Evidence Clerk', 'DNA Analyst', 'Lab Manager', 'Court Reporter']
  },
  {
    id: '276',
    name: 'Botanical Garden',
    category: 'science',
    roles: ['Botanist', 'Visitor', 'Gardener', 'Tour Guide', 'Photographer', 'Student', 'Researcher', 'Gift Shop Worker']
  },
  {
    id: '277',
    name: 'Seismic Monitoring Station',
    category: 'science',
    roles: ['Seismologist', 'Data Analyst', 'Equipment Technician', 'Photographer', 'Research Assistant', 'Station Manager', 'Emergency Coordinator', 'Visitor']
  },
  {
    id: '278',
    name: 'Vaccine Research Center',
    category: 'science',
    roles: ['Immunologist', 'Clinical Researcher', 'Test Subject', 'Lab Technician', 'Photographer', 'Ethics Committee Member', 'Data Manager', 'Research Director']
  },
  {
    id: '279',
    name: 'Environmental Research Station',
    category: 'science',
    roles: ['Environmental Scientist', 'Field Researcher', 'Data Collector', 'Photographer', 'Equipment Technician', 'Station Manager', 'Graduate Student', 'Local Guide']
  },
  {
    id: '280',
    name: 'Neuroscience Lab',
    category: 'science',
    roles: ['Neuroscientist', 'Research Subject', 'Lab Technician', 'Graduate Student', 'Photographer', 'Equipment Specialist', 'Data Analyst', 'Lab Manager']
  },
  {
    id: '281',
    name: 'Solar Observatory',
    category: 'science',
    roles: ['Solar Physicist', 'Observatory Technician', 'Data Analyst', 'Photographer', 'Visitor', 'Graduate Student', 'Equipment Manager', 'Director']
  },
  {
    id: '282',
    name: 'Paleontology Dig',
    category: 'science',
    roles: ['Paleontologist', 'Graduate Student', 'Local Worker', 'Site Director', 'Photographer', 'Fossil Preparator', 'Surveyor', 'Security Guard']
  },
  {
    id: '283',
    name: 'Quantum Physics Lab',
    category: 'science',
    roles: ['Quantum Physicist', 'Research Assistant', 'Graduate Student', 'Lab Technician', 'Photographer', 'Equipment Specialist', 'Theoretical Physicist', 'Lab Manager']
  },
  {
    id: '284',
    name: 'Antarctic Research Base',
    category: 'science',
    roles: ['Research Scientist', 'Base Commander', 'Equipment Technician', 'Cook', 'Photographer', 'Medical Officer', 'Communications Operator', 'Meteorologist']
  },
  {
    id: '285',
    name: 'Crystallography Lab',
    category: 'science',
    roles: ['Crystallographer', 'X-ray Technician', 'Graduate Student', 'Photographer', 'Equipment Manager', 'Data Analyst', 'Research Director', 'Lab Assistant']
  },
  // history
  {
    id: '286',
    name: 'Medieval Castle',
    category: 'history',
    roles: ['King', 'Queen', 'Knight', 'Peasant', 'Blacksmith', 'Archer', 'Cook', 'Court Jester']
  },
  {
    id: '287',
    name: 'Ancient Rome',
    category: 'history',
    roles: ['Emperor', 'Gladiator', 'Senator', 'Slave', 'Centurion', 'Merchant', 'Citizen', 'Chariot Racer']
  },
  {
    id: '288',
    name: 'Wild West Town',
    category: 'history',
    roles: ['Sheriff', 'Outlaw', 'Saloon Owner', 'Cowboy', 'Banker', 'Doctor', 'Bartender', 'Town Mayor']
  },
  {
    id: '289',
    name: 'Ancient Egypt',
    category: 'history',
    roles: ['Pharaoh', 'Priest', 'Scribe', 'Slave', 'Pyramid Builder', 'Merchant', 'Noble', 'Embalmer']
  },
  {
    id: '290',
    name: 'Pirate Ship',
    category: 'history',
    roles: ['Captain', 'First Mate', 'Cook', 'Navigator', 'Gunner', 'Sailor', 'Cabin Boy', 'Prisoner']
  },
  {
    id: '291',
    name: 'Victorian London',
    category: 'history',
    roles: ['Gentleman', 'Lady', 'Butler', 'Maid', 'Detective', 'Street Sweeper', 'Merchant', 'Chimney Sweep']
  },
  {
    id: '292',
    name: 'Samurai Village',
    category: 'history',
    roles: ['Samurai', 'Daimyo', 'Peasant', 'Monk', 'Blacksmith', 'Geisha', 'Merchant', 'Ronin']
  },
  {
    id: '293',
    name: 'Renaissance Italy',
    category: 'history',
    roles: ['Artist', 'Patron', 'Merchant', 'Noble', 'Peasant', 'Priest', 'Scholar', 'Apprentice']
  },
  {
    id: '294',
    name: 'Colonial America',
    category: 'history',
    roles: ['Colonial Governor', 'Farmer', 'Blacksmith', 'Merchant', 'Native American', 'Soldier', 'Preacher', 'Indentured Servant']
  },
  {
    id: '295',
    name: 'Ancient Greece',
    category: 'history',
    roles: ['Philosopher', 'Citizen', 'Slave', 'Politician', 'Soldier', 'Merchant', 'Athlete', 'Oracle']
  },
  {
    id: '296',
    name: 'Stone Age Settlement',
    category: 'history',
    roles: ['Hunter', 'Gatherer', 'Shaman', 'Toolmaker', 'Elder', 'Child', 'Cave Painter', 'Fire Keeper']
  },
  {
    id: '297',
    name: '1920s Speakeasy',
    category: 'history',
    roles: ['Bootlegger', 'Flapper', 'Bartender', 'Jazz Musician', 'Police Officer', 'Gangster', 'Customer', 'Singer']
  },
  {
    id: '298',
    name: 'World War II Bunker',
    category: 'history',
    roles: ['General', 'Soldier', 'Radio Operator', 'Medic', 'Resistance Fighter', 'Spy', 'Code Breaker', 'Prisoner of War']
  },
  {
    id: '299',
    name: 'Viking Longhouse',
    category: 'history',
    roles: ['Jarl', 'Viking Warrior', 'Skald', 'Thrall', 'Blacksmith', 'Shield Maiden', 'Trader', 'Seer']
  },
  {
    id: '300',
    name: 'Aztec Temple',
    category: 'history',
    roles: ['High Priest', 'Emperor', 'Warrior', 'Scribe', 'Merchant', 'Slave', 'Artisan', 'Farmer']
  },
  {
    id: '301',
    name: 'Industrial Revolution Factory',
    category: 'history',
    roles: ['Factory Owner', 'Worker', 'Foreman', 'Child Laborer', 'Union Organizer', 'Engineer', 'Inspector', 'Mechanic']
  },
  {
    id: '302',
    name: 'Gold Rush Camp',
    category: 'history',
    roles: ['Prospector', 'Saloon Owner', 'Merchant', 'Sheriff', 'Banker', 'Doctor', 'Claim Jumper', 'Supply Runner']
  },
  {
    id: '303',
    name: 'Mongol Encampment',
    category: 'history',
    roles: ['Khan', 'Warrior', 'Horse Trainer', 'Shaman', 'Trader', 'Scout', 'Captive', 'Archer']
  },
  {
    id: '304',
    name: 'Ottoman Palace',
    category: 'history',
    roles: ['Sultan', 'Vizier', 'Janissary', 'Eunuch', 'Concubine', 'Scribe', 'Merchant', 'Ambassador']
  },
  {
    id: '305',
    name: 'Mayan City',
    category: 'history',
    roles: ['Priest King', 'Astronomer', 'Warrior', 'Scribe', 'Merchant', 'Farmer', 'Artisan', 'Slave']
  },
  {
    id: '306',
    name: 'French Revolution',
    category: 'history',
    roles: ['Revolutionary', 'Aristocrat', 'Peasant', 'Executioner', 'Politician', 'Journalist', 'Soldier', 'Citizen']
  },
  {
    id: '307',
    name: 'Cold War Berlin',
    category: 'history',
    roles: ['CIA Agent', 'KGB Spy', 'East German Guard', 'West Berlin Citizen', 'Journalist', 'Smuggler', 'Diplomat', 'Refugee']
  },
  {
    id: '308',
    name: 'Salem Witch Trials',
    category: 'history',
    roles: ['Accused Witch', 'Judge', 'Puritan Minister', 'Townsperson', 'Accuser', 'Magistrate', 'Witness', 'Executioner']
  },
  {
    id: '309',
    name: 'Chinese Imperial Court',
    category: 'history',
    roles: ['Emperor', 'Empress', 'Eunuch', 'Mandarin', 'Concubine', 'Guard', 'Servant', 'Court Physician']
  },
  {
    id: '310',
    name: 'Inca Empire',
    category: 'history',
    roles: ['Sapa Inca', 'High Priest', 'Warrior', 'Quipu Keeper', 'Farmer', 'Artisan', 'Messenger', 'Noble']
  },
  // internet
  {
    id: '311',
    name: 'Social Media Office',
    category: 'internet',
    roles: ['Content Creator', 'Social Media Manager', 'Influencer', 'Photographer', 'Video Editor', 'Community Manager', 'Analytics Specialist', 'Brand Manager']
  },
  {
    id: '312',
    name: 'Gaming Tournament',
    category: 'internet',
    roles: ['Pro Gamer', 'Streamer', 'Commentator', 'Fan', 'Tournament Organizer', 'Photographer', 'Sponsor Rep', 'Technical Support']
  },
  {
    id: '313',
    name: 'Tech Startup Office',
    category: 'internet',
    roles: ['CEO', 'Developer', 'Designer', 'Investor', 'Intern', 'Marketing Manager', 'Product Manager', 'Sales Rep']
  },
  {
    id: '314',
    name: 'YouTube Studio',
    category: 'internet',
    roles: ['YouTuber', 'Video Editor', 'Camera Operator', 'Subscriber', 'Sponsor', 'Channel Manager', 'Thumbnail Designer', 'Sound Engineer']
  },
  {
    id: '315',
    name: 'Data Center',
    category: 'internet',
    roles: ['Network Engineer', 'Server Administrator', 'Security Guard', 'Technician', 'Manager', 'Photographer', 'Maintenance Worker', 'Visitor']
  },
  {
    id: '316',
    name: 'Podcast Studio',
    category: 'internet',
    roles: ['Host', 'Co-host', 'Guest', 'Producer', 'Sound Engineer', 'Listener', 'Sponsor', 'Editor']
  },
  {
    id: '317',
    name: 'E-commerce Warehouse',
    category: 'internet',
    roles: ['Warehouse Worker', 'Manager', 'Delivery Driver', 'Customer Service Rep', 'Photographer', 'Quality Control', 'Inventory Specialist', 'Packer']
  },
  {
    id: '318',
    name: 'Streaming Platform Office',
    category: 'internet',
    roles: ['Content Curator', 'Algorithm Engineer', 'UX Designer', 'Data Analyst', 'Customer Support', 'Photographer', 'Product Manager', 'Marketing Specialist']
  },
  {
    id: '319',
    name: 'Cybersecurity Firm',
    category: 'internet',
    roles: ['Ethical Hacker', 'Security Analyst', 'Penetration Tester', 'Cybersecurity Consultant', 'Incident Responder', 'Photographer', 'Research Director', 'Sales Engineer']
  },
  {
    id: '320',
    name: 'Virtual Reality Studio',
    category: 'internet',
    roles: ['VR Developer', 'Game Designer', 'Test User', 'Motion Capture Actor', 'Photographer', 'Creative Director', 'Technical Artist', 'Producer']
  },
  {
    id: '321',
    name: 'Crypto Trading Floor',
    category: 'internet',
    roles: ['Crypto Trader', 'Blockchain Developer', 'Investment Advisor', 'Market Analyst', 'Photographer', 'Compliance Officer', 'Day Trader', 'Exchange Manager']
  },
  {
    id: '322',
    name: 'Online Learning Platform',
    category: 'internet',
    roles: ['Online Instructor', 'Student', 'Course Developer', 'Technical Support', 'Photographer', 'Learning Designer', 'Platform Administrator', 'Content Reviewer']
  },
  {
    id: '323',
    name: 'Digital Marketing Agency',
    category: 'internet',
    roles: ['Digital Marketer', 'SEO Specialist', 'Content Writer', 'Graphic Designer', 'Photographer', 'Account Manager', 'PPC Specialist', 'Analytics Expert']
  },
  {
    id: '324',
    name: 'Online Marketplace',
    category: 'internet',
    roles: ['Seller', 'Buyer', 'Customer Service Rep', 'Platform Developer', 'Photographer', 'Trust & Safety Officer', 'Payment Processor', 'Marketplace Manager']
  },
  {
    id: '325',
    name: 'Cloud Computing Center',
    category: 'internet',
    roles: ['Cloud Architect', 'DevOps Engineer', 'System Administrator', 'Customer', 'Photographer', 'Security Specialist', 'Technical Support', 'Sales Engineer']
  },
  {
    id: '326',
    name: 'Meme Creation Studio',
    category: 'internet',
    roles: ['Meme Creator', 'Viral Content Manager', 'Social Media Strategist', 'Graphic Designer', 'Photographer', 'Community Manager', 'Trend Analyst', 'Content Moderator']
  },
  {
    id: '327',
    name: 'NFT Marketplace',
    category: 'internet',
    roles: ['Digital Artist', 'NFT Collector', 'Blockchain Developer', 'Art Curator', 'Photographer', 'Marketplace Admin', 'Crypto Investor', 'Community Manager']
  },
  {
    id: '328',
    name: 'TikTok House',
    category: 'internet',
    roles: ['TikToker', 'Content Manager', 'Choreographer', 'Videographer', 'Photographer', 'Social Media Manager', 'Brand Partner', 'House Manager']
  },
  {
    id: '329',
    name: 'Online Dating Platform',
    category: 'internet',
    roles: ['Dating App User', 'Algorithm Engineer', 'Safety Moderator', 'Customer Support', 'Photographer', 'Product Manager', 'Marketing Specialist', 'Data Scientist']
  },
  {
    id: '330',
    name: 'Artificial Intelligence Lab',
    category: 'internet',
    roles: ['AI Researcher', 'Machine Learning Engineer', 'Data Scientist', 'Ethics Officer', 'Photographer', 'Product Manager', 'Research Director', 'Test Engineer']
  },
  {
    id: '331',
    name: 'Internet Cafe',
    category: 'internet',
    roles: ['Customer', 'Cafe Owner', 'Tech Support', 'Gamer', 'Photographer', 'Student', 'Tourist', 'Security Guard']
  },
  {
    id: '332',
    name: 'Online News Website',
    category: 'internet',
    roles: ['Journalist', 'Editor', 'Reader', 'Photographer', 'Web Developer', 'Social Media Manager', 'Fact Checker', 'News Director']
  },
  {
    id: '333',
    name: 'Remote Work Hub',
    category: 'internet',
    roles: ['Remote Worker', 'IT Support', 'Coworking Manager', 'Digital Nomad', 'Photographer', 'Cafe Staff', 'Network Administrator', 'Community Coordinator']
  }
];