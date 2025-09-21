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
  {
    id: '43',
    name: 'Disneyland',
    category: 'locations',
    roles: ['Cast Member', 'Guest', 'Character Performer', 'Security Guard', 'Photographer', 'Child', 'Parent', 'Maintenance Worker']
  },
  {
    id: '44',
    name: 'Universal Studios',
    category: 'locations',
    roles: ['Tour Guide', 'Visitor', 'Actor', 'Stunt Performer', 'Production Assistant', 'Security', 'Photographer', 'Theme Park Employee']
  },
  {
    id: '45',
    name: 'Escape Room',
    category: 'locations',
    roles: ['Game Master', 'Player', 'Puzzle Solver', 'Panic-er', 'Time Keeper', 'Hint Asker', 'Team Leader', 'First Timer']
  },
  {
    id: '46',
    name: 'Food Truck',
    category: 'locations',
    roles: ['Chef/Owner', 'Customer', 'Line Cook', 'Cashier', 'Food Blogger', 'Regular', 'Health Inspector', 'Street Vendor']
  },
  {
    id: '47',
    name: 'Co-working Space',
    category: 'locations',
    roles: ['Startup Founder', 'Freelancer', 'Remote Worker', 'Community Manager', 'Investor', 'Receptionist', 'Barista', 'Meeting Room Hopper']
  },
  {
    id: '48',
    name: 'Airbnb',
    category: 'locations',
    roles: ['Host', 'Guest', 'Cleaner', 'Neighbor', 'Property Manager', 'Check-in Greeter', 'Maintenance Worker', 'Local Guide']
  },
  {
    id: '49',
    name: 'Tesla Supercharger Station',
    category: 'locations',
    roles: ['Tesla Owner', 'EV Driver', 'Station Attendant', 'Maintenance Tech', 'Security Guard', 'Passerby', 'App User', 'Road Tripper']
  },
  {
    id: '50',
    name: 'Costco',
    category: 'locations',
    roles: ['Member', 'Employee', 'Sample Lady', 'Bulk Shopper', 'Receipt Checker', 'Cart Pusher', 'Tire Center Worker', 'Food Court Staff']
  },
  {
    id: '51',
    name: 'Apple Store',
    category: 'locations',
    roles: ['Genius Bar Employee', 'Customer', 'Product Specialist', 'Security Guard', 'Manager', 'Tech Support', 'Photographer', 'Line Waiter']
  },
  {
    id: '52',
    name: 'WeWork',
    category: 'locations',
    roles: ['Member', 'Community Manager', 'Startup Founder', 'Sales Rep', 'Maintenance Staff', 'Receptionist', 'Event Organizer', 'Coffee Drinker']
  },
  {
    id: '53',
    name: 'Starbucks Reserve Roastery',
    category: 'locations',
    roles: ['Barista', 'Customer', 'Manager', 'Coffee Taster', 'Tour Guide', 'Photographer', 'Blogger', 'Local']
  },
  {
    id: '54',
    name: 'IKEA Store',
    category: 'locations',
    roles: ['Customer', 'Employee', 'Designer', 'Cashier', 'Assembly Expert', 'Restaurant Staff', 'Child', 'Photographer']
  },
  {
    id: '55',
    name: 'Whole Foods Market',
    category: 'locations',
    roles: ['Customer', 'Employee', 'Chef', 'Cashier', 'Produce Manager', 'Meat Cutter', 'Bakery Worker', 'Customer Service']
  },
  {
    id: '56',
    name: 'Trader Joe\'s',
    category: 'locations',
    roles: ['Customer', 'Employee', 'Stock Clerk', 'Cashier', 'Sample Lady', 'Manager', 'Regular Shopper', 'Tourist']
  },
  {
    id: '57',
    name: 'Central Park',
    category: 'locations',
    roles: ['Jogger', 'Tourist', 'Street Performer', 'Vendor', 'Photographer', 'Dog Walker', 'Picnicker', 'Maintenance Worker']
  },
  {
    id: '58',
    name: 'Times Square',
    category: 'locations',
    roles: ['Tourist', 'Street Performer', 'Vendor', 'Photographer', 'Police Officer', 'Tour Guide', 'Street Artist', 'NYPD Officer']
  },
  {
    id: '59',
    name: 'Golden Gate Bridge',
    category: 'locations',
    roles: ['Tourist', 'Cyclist', 'Runner', 'Photographer', 'Maintenance Worker', 'Tour Guide', 'Local', 'Bridge Operator']
  },
  {
    id: '60',
    name: 'Hollywood Walk of Fame',
    category: 'locations',
    roles: ['Tourist', 'Celebrity', 'Photographer', 'Street Performer', 'Tour Guide', 'Vendor', 'Security Guard', 'Fan']
  },
  {
    id: '61',
    name: 'Las Vegas Strip',
    category: 'locations',
    roles: ['Tourist', 'Dealer', 'Show Performer', 'Security Guard', 'Bartender', 'Hotel Staff', 'Photographer', 'Gambler']
  },
  {
    id: '62',
    name: 'Grand Canyon',
    category: 'locations',
    roles: ['Tourist', 'Hiker', 'Ranger', 'Photographer', 'Guide', 'Geologist', 'Campground Host', 'Visitor']
  },
  {
    id: '63',
    name: 'Mount Rushmore',
    category: 'locations',
    roles: ['Tourist', 'Ranger', 'Photographer', 'Guide', 'Maintenance Worker', 'Historian', 'Visitor', 'Security']
  },
  {
    id: '64',
    name: 'Statue of Liberty',
    category: 'locations',
    roles: ['Tourist', 'Ranger', 'Photographer', 'Guide', 'Security Guard', 'Maintenance Worker', 'Ferry Captain', 'Immigration Officer']
  },
  {
    id: '65',
    name: 'White House',
    category: 'locations',
    roles: ['President', 'Staff Member', 'Security Guard', 'Tourist', 'Journalist', 'Chef', 'Gardener', 'Maintenance Worker']
  },
  {
    id: '66',
    name: 'Eiffel Tower',
    category: 'locations',
    roles: ['Tourist', 'Photographer', 'Vendor', 'Security Guard', 'Maintenance Worker', 'Tour Guide', 'Street Artist', 'Local']
  },
  {
    id: '67',
    name: 'Louvre Museum',
    category: 'locations',
    roles: ['Visitor', 'Curator', 'Security Guard', 'Tour Guide', 'Photographer', 'Art Restorer', 'Gift Shop Worker', 'Conservator']
  },
  {
    id: '68',
    name: 'Colosseum',
    category: 'locations',
    roles: ['Tourist', 'Archaeologist', 'Guide', 'Photographer', 'Security Guard', 'Maintenance Worker', 'Historian', 'Vendor']
  },
  {
    id: '69',
    name: 'Great Wall of China',
    category: 'locations',
    roles: ['Tourist', 'Hiker', 'Guide', 'Photographer', 'Security Guard', 'Maintenance Worker', 'Local', 'Vendor']
  },
  {
    id: '70',
    name: 'Taj Mahal',
    category: 'locations',
    roles: ['Tourist', 'Guide', 'Photographer', 'Security Guard', 'Maintenance Worker', 'Local', 'Vendor', 'Archaeologist']
  },
  {
    id: '71',
    name: 'Sydney Opera House',
    category: 'locations',
    roles: ['Performer', 'Audience Member', 'Tourist', 'Guide', 'Photographer', 'Security Guard', 'Maintenance Worker', 'Box Office Staff']
  },
  {
    id: '72',
    name: 'Burj Khalifa',
    category: 'locations',
    roles: ['Tourist', 'Office Worker', 'Security Guard', 'Maintenance Worker', 'Photographer', 'Guide', 'Hotel Guest', 'Restaurant Staff']
  },
  {
    id: '73',
    name: 'Petra',
    category: 'locations',
    roles: ['Tourist', 'Archaeologist', 'Guide', 'Photographer', 'Security Guard', 'Local', 'Vendor', 'Bedouin']
  },
  {
    id: '74',
    name: 'Machu Picchu',
    category: 'locations',
    roles: ['Tourist', 'Archaeologist', 'Guide', 'Photographer', 'Hiker', 'Local', 'Vendor', 'Ranger']
  },
  {
    id: '75',
    name: 'Stonehenge',
    category: 'locations',
    roles: ['Tourist', 'Archaeologist', 'Guide', 'Photographer', 'Druid', 'Security Guard', 'Local', 'Researcher']
  },
  {
    id: '76',
    name: 'Niagara Falls',
    category: 'locations',
    roles: ['Tourist', 'Photographer', 'Guide', 'Boat Captain', 'Security Guard', 'Maintenance Worker', 'Vendor', 'Local']
  },
  {
    id: '77',
    name: 'Mount Everest Base Camp',
    category: 'locations',
    roles: ['Climber', 'Guide', 'Sherpa', 'Photographer', 'Doctor', 'Cook', 'Porter', 'Tourist']
  },
  {
    id: '78',
    name: 'Galápagos Islands',
    category: 'locations',
    roles: ['Tourist', 'Naturalist Guide', 'Photographer', 'Researcher', 'Boat Captain', 'Chef', 'Marine Biologist', 'Park Ranger']
  },
  {
    id: '79',
    name: 'Amazon Rainforest',
    category: 'locations',
    roles: ['Tourist', 'Guide', 'Researcher', 'Photographer', 'Indigenous Person', 'Conservationist', 'Logger', 'Hunter']
  },
  {
    id: '80',
    name: 'Sahara Desert',
    category: 'locations',
    roles: ['Tourist', 'Guide', 'Photographer', 'Bedouin', 'Archaeologist', 'Camel Driver', 'Researcher', 'Local']
  },
  {
    id: '81',
    name: 'Antarctica Research Station',
    category: 'locations',
    roles: ['Scientist', 'Researcher', 'Pilot', 'Doctor', 'Cook', 'Maintenance Worker', 'Photographer', 'Tourist']
  },
  {
    id: '82',
    name: 'SpaceX Launch Site',
    category: 'locations',
    roles: ['Engineer', 'Technician', 'Security Guard', 'Scientist', 'Tourist', 'Photographer', 'Journalist', 'Astronaut']
  },
  {
    id: '83',
    name: 'CERN Laboratory',
    category: 'locations',
    roles: ['Physicist', 'Engineer', 'Technician', 'Security Guard', 'Scientist', 'Tourist', 'Guide', 'Researcher']
  },
  {
    id: '84',
    name: 'Area 51',
    category: 'locations',
    roles: ['Scientist', 'Security Guard', 'Pilot', 'Engineer', 'Tourist', 'Conspiracy Theorist', 'Journalist', 'Local']
  },
  {
    id: '85',
    name: 'Walt Disney World',
    category: 'locations',
    roles: ['Cast Member', 'Guest', 'Character Performer', 'Security Guard', 'Photographer', 'Tour Guide', 'Maintenance Worker', 'Food Service']
  },
  {
    id: '86',
    name: 'Madison Square Garden',
    category: 'locations',
    roles: ['Concert Goer', 'Sports Fan', 'Security Guard', 'Vendor', 'Photographer', 'Maintenance Worker', 'Box Office Staff', 'Tour Guide']
  },
  {
    id: '87',
    name: 'Royal Albert Hall',
    category: 'locations',
    roles: ['Concert Goer', 'Performer', 'Security Guard', 'Photographer', 'Tour Guide', 'Box Office Staff', 'Maintenance Worker', 'Sound Engineer']
  },
  {
    id: '88',
    name: 'Broadway Theater',
    category: 'locations',
    roles: ['Actor', 'Audience Member', 'Stage Manager', 'Security Guard', 'Photographer', 'Tour Guide', 'Box Office Staff', 'Costume Designer']
  },
  {
    id: '89',
    name: 'Hollywood Bowl',
    category: 'locations',
    roles: ['Concert Goer', 'Performer', 'Security Guard', 'Photographer', 'Tour Guide', 'Box Office Staff', 'Maintenance Worker', 'Sound Engineer']
  },
  {
    id: '90',
    name: 'Concert Arena',
    category: 'locations',
    roles: ['Concert Goer', 'Performer', 'Security Guard', 'Photographer', 'Tour Guide', 'Box Office Staff', 'Maintenance Worker', 'Sound Engineer']
  },
  {
    id: '91',
    name: 'Convention Center',
    category: 'locations',
    roles: ['Attendee', 'Vendor', 'Security Guard', 'Photographer', 'Panel Moderator', 'Cosplayer', 'Journalist', 'Artist']
  },
  {
    id: '92',
    name: 'Silicon Valley',
    category: 'locations',
    roles: ['Engineer', 'Product Manager', 'Security Guard', 'Office Worker', 'Tourist', 'Photographer', 'Journalist', 'Intern']
  },
  // movies
  {
    id: '93',
    name: 'Titanic',
    category: 'movies',
    roles: ['Captain', 'First Class Passenger', 'Third Class Passenger', 'Crew Member', 'Musician', 'Lookout', 'Engineer', 'Survivor']
  },
  {
    id: '94',
    name: 'Star Wars',
    category: 'movies',
    roles: ['Jedi', 'Sith', 'Rebel', 'Stormtrooper', 'Pilot', 'Droid', 'Princess', 'Smuggler']
  },
  {
    id: '95',
    name: 'Harry Potter',
    category: 'movies',
    roles: ['Student', 'Professor', 'Wizard', 'Muggle', 'Death Eater', 'Auror', 'House Elf', 'Ghost']
  },
  {
    id: '96',
    name: 'The Matrix',
    category: 'movies',
    roles: ['The One', 'Agent', 'Rebel', 'Oracle', 'Architect', 'Zion Citizen', 'Program', 'Red Pill']
  },
  {
    id: '97',
    name: 'Jurassic Park',
    category: 'movies',
    roles: ['Paleontologist', 'Park Visitor', 'Security Guard', 'Scientist', 'Tour Guide', 'Hunter', 'Veterinarian', 'Computer Programmer']
  },
  {
    id: '98',
    name: 'Interstellar',
    category: 'movies',
    roles: ['Astronaut', 'Farmer', 'Scientist', 'Engineer', 'Professor', 'Student', 'Pilot', 'Mission Control']
  },
  {
    id: '99',
    name: 'Inception',
    category: 'movies',
    roles: ['Extractor', 'Architect', 'Forger', 'Chemist', 'Subject', 'Projection', 'Tourist', 'Security']
  },
  {
    id: '100',
    name: 'The Dark Knight',
    category: 'movies',
    roles: ['Batman', 'Joker', 'Police Officer', 'Civilian', 'District Attorney', 'Mob Boss', 'Bank Robber', 'Commissioner']
  },
  {
    id: '101',
    name: 'Avengers Endgame',
    category: 'movies',
    roles: ['Superhero', 'Villain', 'S.H.I.E.L.D. Agent', 'Civilian', 'Scientist', 'Military', 'Reporter', 'Government Official']
  },
  {
    id: '102',
    name: 'Pirates of the Caribbean',
    category: 'movies',
    roles: ['Pirate Captain', 'Crew Member', 'Royal Navy', 'Blacksmith', 'Governor', 'Cursed Pirate', 'Merchant', 'Tavern Keeper']
  },
  {
    id: '103',
    name: 'Back to the Future',
    category: 'movies',
    roles: ['Time Traveler', 'Scientist', 'Teenager', 'Parent', 'Bully', 'Principal', 'Mayor', 'Clock Tower Worker']
  },
  {
    id: '104',
    name: 'Shrek',
    category: 'movies',
    roles: ['Ogre', 'Princess', 'Donkey', 'Dragon', 'Fairy Tale Character', 'Knight', 'King', 'Villager']
  },
  {
    id: '105',
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
    id: '106',
    name: 'Toy Story',
    category: 'movies',
    roles: ['Cowboy Toy', 'Space Ranger', 'Child', 'Parent', 'Toy Store Employee', 'Dog', 'Dinosaur Toy', 'Potato Head']
  },
  {
    id: '107',
    name: 'Avengers: Infinity War',
    category: 'movies',
    roles: ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Doctor Strange', 'Spider-Man', 'Thanos']
  },
  {
    id: '108',
    name: 'Ghostbusters',
    category: 'movies',
    roles: ['Ghostbuster', 'Ghost', 'Scientist', 'Secretary', 'EPA Agent', 'Hotel Manager', 'Possessed Person', 'Client']
  },
  {
    id: '109',
    name: 'Jaws',
    category: 'movies',
    roles: ['Shark Hunter', 'Police Chief', 'Marine Biologist', 'Mayor', 'Beach Goer', 'Boat Captain', 'Fisherman', 'Tourist']
  },
  {
    id: '110',
    name: 'Spiderman into the spiderverse',
    category: 'movies',
    roles: ['Young Superhero', 'Mentor Superhero', 'Female Superhero', 'Villain', 'Uncle', 'Animal Superhero', 'Noir Superhero', 'Mecha Superhero']
  },
  {
    id: '111',
    name: 'Forrest Gump',
    category: 'movies',
    roles: ['Runner', 'President', 'Friend', 'Mother', 'Doctor', 'Soldier', 'Businessman', 'Shrimper']
  },
  {
    id: '112',
    name: 'Black Panther',
    category: 'movies',
    roles: ['King/Superhero', 'Princess/Scientist', 'General/Warrior', 'Spy', 'Villain/Rival', 'CIA Agent', 'Tribal Elder', 'Bodyguard']
  },
  {
    id: '113',
    name: 'Fight Club',
    category: 'movies',
    roles: ['Insomniac', 'Soap Maker', 'Project Manager', 'Waiter', 'Mechanic', 'Doctor', 'Narrator', 'Support Group Member']
  },
  {
    id: '114',
    name: 'Oppenheimer',
    category: 'movies',
    roles: ['Physicist', 'Military General', 'Scientist', 'Politician', 'Wife', 'Colleague', 'Security Officer', 'Student']
  },
  {
    id: '115',
    name: 'Monsters, Inc',
    category: 'movies',
    roles: ['Monster Scarer', 'Assistant Monster', 'Human Child', 'Factory Owner', 'Government Agent', 'Coworker Monster', 'Exiled Monster', 'Child Detection Agent']
  },
  {
    id: '116',
    name: 'Monsters, University',
    category: 'movies',
    roles: ['College Student', 'Rival Student', 'Dean', 'Fraternity Brother', 'Professor', 'Scare Coach', 'Librarian', 'Campus Security']
  },
  {
    id: '117',
    name: 'Minions',
    category: 'movies',
    roles: ['Minion', 'Master Villain', 'Evil Genius', 'Queen', 'Guard', 'Inventor', 'Family Member', 'Thief']
  },
  {
    id: '118',
    name: 'Despicable Me',
    category: 'movies',
    roles: ['Adoptive Father', 'Helper', 'Child', 'Rival Villain', 'Secret Agent', 'Inventor', 'Teacher', 'Financier']
  },
  {
    id: '119',
    name: 'Kung Fu Panda',
    category: 'movies',
    roles: ['Panda Warrior', 'Master Teacher', 'Furious Five Warrior', 'Villain', 'Elder Sage', 'Goose Father', 'Noodle Shop Owner', 'Messenger Bird']
  },
  {
    id: '120',
    name: 'Karate Kid',
    category: 'movies',
    roles: ['Teen Student', 'Maintenance Man/Sensei', 'Bully', 'Love Interest', 'Mother', 'Tournament Fighter', 'Referee', 'Friend']
  },
  {
    id: '121',
    name: 'Deadpool',
    category: 'movies',
    roles: ['Superhero', 'Villain', 'S.H.I.E.L.D. Agent', 'Civilian', 'Scientist', 'Military', 'Reporter', 'Government Official']
  },
  {
    id: '122',
    name: 'Big Hero 6',
    category: 'movies',
    roles: ['Superhero', 'Villain', 'S.H.I.E.L.D. Agent', 'Civilian', 'Scientist', 'Military', 'Reporter', 'Government Official']
  },
  {
    id: '123',
    name: 'The Lego Movie',
    category: 'movies',
    roles: ['Builder', 'Rebel Leader', 'Evil Lord', 'Tech Wizard', 'Superhero Ally', 'Pirate', 'Astronaut', 'Magical Creature']
  },
  {
    id: '124',
    name: 'Avatar',
    category: 'movies',
    roles: ['Disabled Marine', 'Scientist', 'Na\'vi Princess', 'Clan Leader', 'Colonel', 'Pilot', 'Biologist', 'Miner']
  },
  {
    id: '125',
    name: 'Captain America: Civil War',
    category: 'movies',
    roles: ['Superhero', 'Villain', 'S.H.I.E.L.D. Agent', 'Civilian', 'Scientist', 'Military', 'Reporter', 'Government Official']
  },
  {
    id: '126',
    name: 'Rocky',
    category: 'movies',
    roles: ['Boxer', 'Trainer', 'Opponent', 'Love Interest', 'Promoter', 'Commentator', 'Friend', 'Manager']
  },
  {
    id: '127',
    name: 'Creed',
    category: 'movies',
    roles: ['Boxer', 'Trainer', 'Opponent', 'Girlfriend', 'Promoter', 'Commentator', 'Mother', 'Manager']
  },
  {
    id: '128',
    name: 'Top Gun',
    category: 'movies',
    roles: ['Fighter Pilot', 'Instructor', 'Rival Pilot', 'Love Interest', 'Commander', 'Navigator', 'Friend', 'Admiral']
  },
  {
    id: '129',
    name: 'Top Gun: Maverick',
    category: 'movies',
    roles: ['Fighter Pilot', 'Instructor', 'Rival Pilot', 'Love Interest', 'Commander', 'Navigator', 'Friend', 'Admiral']
  },
  {
    id: '130',
    name: 'F1 The Movie',
    category: 'movies',
    roles: ['Race Driver', 'Team Owner', 'Engineer', 'Rival Driver', 'Mechanic', 'Reporter', 'Sponsor', 'Pit Boss']
  },
  {
    id: '131',
    name: 'Mission: Impossible',
    category: 'movies',
    roles: ['IMF Agent', 'Villain', 'Tech Expert', 'Team Member', 'Director', 'Double Agent', 'Hacker', 'Pilot']
  },
  {
    id: '132',
    name: 'Fast and Furious',
    category: 'movies',
    roles: ['Street Racer', 'Undercover Cop', 'Mechanic', 'Villain', 'Family Member', 'Hacker', 'Agent', 'Driver']
  },
  {
    id: '133',
    name: 'The Social Network',
    category: 'movies',
    roles: ['College Student', 'Programmer', 'Investor', 'Lawyer', 'Co-Founder', 'Girlfriend', 'Club President', 'Twin']
  },
  {
    id: '134',
    name: 'Charlie and the Chocolate Factory',
    category: 'movies',
    roles: ['Chocolate Factory Owner', 'Child Ticket Winner', 'Parent', 'Oompa-Loompa', 'Rival Child', 'Grandparent', 'Reporter', 'Inventor']
  },
  {
    id: '135',
    name: 'Dr Strange',
    category: 'movies',
    roles: ['Superhero', 'Villain', 'S.H.I.E.L.D. Agent', 'Civilian', 'Scientist', 'Military', 'Reporter', 'Government Official']
  },
  {
    id: '136',
    name: 'Spiderman 2',
    category: 'movies',
    roles: ['Superhero', 'Villain', 'S.H.I.E.L.D. Agent', 'Civilian', 'Scientist', 'Military', 'Reporter', 'Government Official']
  },
  {
    id: '137',
    name: 'Deadpool and Wolverine',
    category: 'movies',
    roles: ['Superhero', 'Villain', 'S.H.I.E.L.D. Agent', 'Civilian', 'Scientist', 'Military', 'Reporter', 'Government Official']
  },
  {
    id: '138',
    name: 'Guardians of the Galaxy',
    category: 'movies',
    roles: ['Superhero', 'Villain', 'S.H.I.E.L.D. Agent', 'Civilian', 'Scientist', 'Military', 'Reporter', 'Government Official']
  },
  {
    id: '139',
    name: 'Iron Man',
    category: 'movies',
    roles: ['Superhero', 'Villain', 'S.H.I.E.L.D. Agent', 'Civilian', 'Scientist', 'Military', 'Reporter', 'Government Official']
  },
  {
    id: '140',
    name: 'Man of Steel',
    category: 'movies',
    roles: ['Superhero', 'Villain', 'Government Agent', 'Civilian', 'Scientist', 'Military', 'Reporter', 'Parent']
  },
  {
    id: '141',
    name: 'Superman (new)',
    category: 'movies',
    roles: ['Superhero', 'Villain', 'Government Agent', 'Civilian', 'Scientist', 'Military', 'Reporter', 'Parent']
  },
  {
    id: '142',
    name: 'Venom',
    category: 'movies',
    roles: ['Superhero', 'Villain', 'S.H.I.E.L.D. Agent', 'Civilian', 'Scientist', 'Military', 'Reporter', 'Government Official']
  },
  {
    id: '143',
    name: 'Morbius',
    category: 'movies',
    roles: ['Superhero', 'Villain', 'S.H.I.E.L.D. Agent', 'Civilian', 'Scientist', 'Military', 'Reporter', 'Government Official']
  },
  {
    id: '144',
    name: 'Ratatouille',
    category: 'movies',
    roles: ['Rat Chef', 'Human Chef', 'Food Critic', 'Head Chef', 'Waiter', 'Dishwasher', 'Food Inspector', 'Restaurant Owner']
  },
  {
    id: '145',
    name: 'Gran Turismo',
    category: 'movies',
    roles: ['Gamer Turned Racer', 'Trainer', 'Team Manager', 'Rival Racer', 'Father', 'Marketing Exec', 'Mechanic', 'Sponsor']
  },
  {
    id: '146',
    name: 'Cars',
    category: 'movies',
    roles: ['Rookie Racer', 'Tow Truck', 'Judge', 'Mechanic', 'Reporter', 'Sponsor', 'Rival Racer', 'Love Interest']
  },
  {
    id: '147',
    name: 'Cars 2',
    category: 'movies',
    roles: ['Spy', 'Racer', 'Villain', 'Secret Agent', 'Inventor', 'Queen', 'Mechanic', 'Rival']
  },
  {
    id: '148',
    name: 'Cars 3',
    category: 'movies',
    roles: ['Veteran Racer', 'Trainee', 'Trainer', 'Rival Racer', 'Sponsor', 'Mechanic', 'Reporter', 'Fan']
  },
  {
    id: '149',
    name: 'Hotel Transylvania',
    category: 'movies',
    roles: ['Hotel Owner/Vampire', 'Human Guest', 'Daughter', 'Frankenstein', 'Werewolf', 'Mummy', 'Invisible Man', 'Blob']
  },
  {
    id: '150',
    name: 'Cloudy with a Chance of Meatballs',
    category: 'movies',
    roles: ['Inventor', 'Weather Reporter', 'Mayor', 'Cop', 'Cameraman', 'Baby', 'Monkey', 'Scientist']
  },
  {
    id: '151',
    name: 'Spider-Man: No Way Home',
    category: 'movies',
    roles: ['Spider-Man', 'Doctor Strange', 'Villain', 'MJ', 'Ned', 'Aunt May', 'Green Goblin', 'Doctor Octopus']
  },
  {
    id: '152',
    name: 'Dune',
    category: 'movies',
    roles: ['Paul Atreides', 'Duke Leto', 'Lady Jessica', 'Chani', 'Duncan Idaho', 'Gurney Halleck', 'Baron Harkonnen', 'Stilgar']
  },
  {
    id: '153',
    name: 'John Wick',
    category: 'movies',
    roles: ['Assassin', 'Hotel Manager', 'Crime Boss', 'Hitman', 'Bouncer', 'Dog', 'Police Detective', 'Continental Staff']
  },
  {
    id: '154',
    name: 'Everything Everywhere All at Once',
    category: 'movies',
    roles: ['Laundromat Owner', 'Daughter', 'Husband', 'IRS Agent', 'Multiverse Fighter', 'Hot Dog Fingers', 'Raccacoonie', 'Bagel']
  },
  {
    id: '155',
    name: 'Black Widow',
    category: 'movies',
    roles: ['Black Widow', 'Red Guardian', 'Yelena Belova', 'Melina Vostokoff', 'Taskmaster', 'General Dreykov', 'Widow', 'S.H.I.E.L.D. Agent']
  },
  {
    id: '156',
    name: 'Barbie',
    category: 'movies',
    roles: ['Barbie', 'Ken', 'Weird Barbie', 'Allan', 'Gloria', 'Sasha', 'Ruth Handler', 'Mattel Executive']
  },
  {
    id: '157',
    name: 'The Batman',
    category: 'movies',
    roles: ['Batman', 'Riddler', 'Catwoman', 'Penguin', 'Commissioner Gordon', 'Alfred', 'Falcone', 'Police Officer']
  },
  {
    id: '158',
    name: 'Encanto',
    category: 'movies',
    roles: ['Mirabel', 'Luisa', 'Isabela', 'Bruno', 'Abuela', 'Julieta', 'Pepa', 'Camilo']
  },
  {
    id: '159',
    name: 'Top Gun: Maverick',
    category: 'movies',
    roles: ['Maverick', 'Rooster', 'Phoenix', 'Hangman', 'Admiral', 'Enemy Pilot', 'Instructor', 'Mechanic']
  },
  {
    id: '113',
    name: 'Turning Red',
    category: 'movies',
    roles: ['Mei Lee', 'Ming Lee', 'Miriam', 'Priya', 'Abby', 'Tyler', '4*Town Member', 'Grandma']
  },
  {
    id: '114',
    name: 'Luca',
    category: 'movies',
    roles: ['Sea Monster Kid', 'Human Friend', 'Vespa Owner', 'Fisherman', 'Grandmother', 'Bully', 'Race Official', 'Gelato Vendor']
  },
  {
    id: '115',
    name: 'The Super Mario Bros. Movie',
    category: 'movies',
    roles: ['Mario', 'Luigi', 'Princess Peach', 'Bowser', 'Toad', 'Donkey Kong', 'Kamek', 'Spike']
  },
  {
    id: '116',
    name: 'Scream',
    category: 'movies',
    roles: ['Final Girl', 'Ghostface', 'Sidney Prescott', 'Gale Weathers', 'Dewey Riley', 'Randy Meeks', 'Killer', 'Victim']
  },
  {
    id: '117',
    name: 'The Menu',
    category: 'movies',
    roles: ['Chef', 'Food Critic', 'Sous Chef', 'Wealthy Diner', 'Young Couple', 'Server', 'Investor', 'Assistant']
  },
  {
    id: '118',
    name: 'Avatar: The Way of Water',
    category: 'movies',
    roles: ['Na\'vi Warrior', 'Marine', 'Metkayina Chief', 'Scientist', 'Pilot', 'Avatar Driver', 'Ocean Creature', 'Military Officer']
  },
  {
    id: '119',
    name: 'Guardians of the Galaxy Vol. 3',
    category: 'movies',
    roles: ['Star-Lord', 'Gamora', 'Rocket', 'Groot', 'Drax', 'Nebula', 'Mantis', 'Adam Warlock']
  },
  {
    id: '120',
    name: 'Thor: Love and Thunder',
    category: 'movies',
    roles: ['Thor', 'Jane Foster', 'Loki', 'Valkyrie', 'Korg', 'Hulk', 'Zeus', 'Hercules']
  },
  {
    id: '121',
    name: 'Doctor Strange in the Multiverse of Madness',
    category: 'movies',
    roles: ['Doctor Strange', 'Scarlet Witch', 'America Chavez', 'Wong', 'Ancient One', 'Illuminati Member', 'Demon', 'Apprentice']
  },
  {
    id: '122',
    name: 'The Flash',
    category: 'movies',
    roles: ['Flash', 'Batman', 'Superman', 'Wonder Woman', 'Cyborg', 'Reverse Flash', 'Iris West', 'Barry Allen']
  },
  {
    id: '123',
    name: 'No Time to Die',
    category: 'movies',
    roles: ['James Bond', 'Moneypenny', 'Q', 'M', 'Villain', 'Ally', 'Spectre Member', 'Scientist']
  },
  {
    id: '124',
    name: 'Dune: Part Two',
    category: 'movies',
    roles: ['Paul Atreides', 'Chani', 'Lady Jessica', 'Baron Harkonnen', 'Feyd-Rautha', 'Stilgar', 'Gurney Halleck', 'Shadout Mapes']
  },
  {
    id: '125',
    name: 'Wonka',
    category: 'movies',
    roles: ['Willy Wonka', 'Noodle', 'Slugworth', 'Mrs. Scrubitt', 'Abacus Crunch', 'Lottie Bell', 'Piper Benz', 'Chief of Police']
  },
  {
    id: '126',
    name: 'Wicked',
    category: 'movies',
    roles: ['Elphaba', 'Glinda', 'Madame Morrible', 'Fiyero', 'Nessarose', 'Boq', 'Doctor Dillamond', 'Witch Hunter']
  },
  {
    id: '127',
    name: 'Joker: Folie à Deux',
    category: 'movies',
    roles: ['Joker', 'Harley Quinn', 'Arkham Guard', 'Lawyer', 'Judge', 'Psychiatrist', 'Journalist', 'Fan']
  },
  {
    id: '128',
    name: 'Deadpool & Wolverine',
    category: 'movies',
    roles: ['Deadpool', 'Wolverine', 'Lady Deadpool', 'Cassandra Nova', 'Paradox', 'Johnny Storm', 'Maria Rambeau', 'Mr. Sinister']
  },
  {
    id: '129',
    name: 'Furiosa: A Mad Max Saga',
    category: 'movies',
    roles: ['Furiosa', 'Immortan Joe', 'Dementus', 'Praetorian Jack', 'Mary Jabassa', 'War Boy', 'Organic Mechanic', 'Vuvalini']
  },
  {
    id: '130',
    name: 'Kingdom of the Planet of the Apes',
    category: 'movies',
    roles: ['Ape Leader', 'Human Survivor', 'Ape Scientist', 'Human Rebel', 'Ape Warrior', 'Human Child', 'Elder Ape', 'Human Soldier']
  },
  {
    id: '131',
    name: 'Alien: Romulus',
    category: 'movies',
    roles: ['Space Colonist', 'Android', 'Xenomorph', 'Corporation Rep', 'Engineer', 'Medic', 'Pilot', 'Security Officer']
  },
  {
    id: '132',
    name: 'Beetlejuice Beetlejuice',
    category: 'movies',
    roles: ['Beetlejuice', 'Lydia', 'Astrid', 'Delores', 'Charles', 'Barbara Maitland', 'Adam Maitland', 'Ghost']
  },
  {
    id: '133',
    name: 'Venom: The Last Dance',
    category: 'movies',
    roles: ['Venom', 'Eddie Brock', 'Carnage', 'Shriek', 'Riot', 'Lasher', 'Agony', 'Phage']
  },
  {
    id: '134',
    name: 'Sonic the Hedgehog 3',
    category: 'movies',
    roles: ['Sonic', 'Tails', 'Knuckles', 'Shadow', 'Dr. Robotnik', 'Tom Wachowski', 'Maddie Wachowski', 'Agent Stone']
  },
  {
    id: '135',
    name: 'Moana 2',
    category: 'movies',
    roles: ['Moana', 'Maui', 'Heihei', 'Tala', 'Sina', 'Tamatoa', 'Ocean Spirit', 'Villager']
  },
  {
    id: '136',
    name: 'Inside Out 2',
    category: 'movies',
    roles: ['Joy', 'Sadness', 'Anger', 'Fear', 'Disgust', 'Anxiety', 'Envy', 'Ennui']
  },
  {
    id: '137',
    name: 'The Wild Robot',
    category: 'movies',
    roles: ['Robot', 'Fox Kit', 'Goose', 'Bear Cub', 'Raccoon', 'Owl', 'Island Creature', 'Storm']
  },
  {
    id: '138',
    name: 'Wallace & Gromit: Vengeance Most Fowl',
    category: 'movies',
    roles: ['Inventor', 'Dog', 'Chicken', 'Villain', 'Shopkeeper', 'Police Officer', 'Baker', 'Neighbor']
  },
  {
    id: '139',
    name: 'Paddington in Peru',
    category: 'movies',
    roles: ['Bear', 'Aunt', 'Uncle', 'Hunter', 'Guide', 'Chef', 'Journalist', 'Local']
  },
  {
    id: '140',
    name: 'The Garfield Movie',
    category: 'movies',
    roles: ['Cat', 'Dog', 'Owner', 'Vet', 'Journalist', 'Chef', 'Tour Guide', 'Tourist']
  },
  {
    id: '141',
    name: 'Mufasa: The Lion King',
    category: 'movies',
    roles: ['Young Mufasa', 'Adult Mufasa', 'Scar', 'Sarabi', 'Rafiki', 'Zazu', 'Simba', 'Nala']
  },
  {
    id: '142',
    name: 'Gladiator II',
    category: 'movies',
    roles: ['Gladiator', 'Emperor', 'Senator', 'Slave', 'Arena Master', 'Tribune', 'Merchant', 'Priest']
  },
  {
    id: '143',
    name: 'Wicked: Part Two',
    category: 'movies',
    roles: ['Elphaba', 'Glinda', 'Fiyero', 'Nessarose', 'Boq', 'Madame Morrible', 'Doctor Dillamond', 'Witch Hunter']
  },
  {
    id: '144',
    name: 'Superman',
    category: 'movies',
    roles: ['Superman', 'Lois Lane', 'Lex Luthor', 'Jimmy Olsen', 'Perry White', 'General Zod', 'Martha Kent', 'Jonathan Kent']
  },
  {
    id: '145',
    name: 'Wonder Woman 3',
    category: 'movies',
    roles: ['Wonder Woman', 'Steve Trevor', 'Cheetah', 'Etta Candy', 'Antiope', 'Hippolyta', 'Ares', 'Doctor Poison']
  },
  {
    id: '146',
    name: 'Aquaman and the Lost Kingdom',
    category: 'movies',
    roles: ['Aquaman', 'Mera', 'Black Manta', 'Orm', 'Atlanna', 'Nuidis Vulko', 'Ocean Master', 'Karathen']
  },
  {
    id: '147',
    name: 'The Suicide Squad',
    category: 'movies',
    roles: ['Harley Quinn', 'Bloodsport', 'Peacemaker', 'King Shark', 'Ratcatcher', 'Polka-Dot Man', 'Rick Flag', 'Amanda Waller']
  },
  {
    id: '148',
    name: 'Birds of Prey',
    category: 'movies',
    roles: ['Harley Quinn', 'Black Canary', 'Huntress', 'Renée Montoya', 'Roman Sionis', 'Victor Zsasz', 'Cassandra Cain', 'Dinah Lance']
  },
  {
    id: '149',
    name: 'Jumanji: Welcome to the Jungle',
    category: 'movies',
    roles: ['Teenager', 'Professor', 'Fridge', 'Mouse', 'Video Game Character', 'Explorer', 'Cartographer', 'Zoologist']
  },
  {
    id: '150',
    name: 'Jungle Cruise',
    category: 'movies',
    roles: ['River Guide', 'Botanist', 'Explorer', 'Treasure Hunter', 'Local Guide', 'Ship Captain', 'Archaeologist', 'Adventurer']
  },
  {
    id: '151',
    name: 'The Lost City',
    category: 'movies',
    roles: ['Romance Author', 'Model', 'Publisher', 'Chloe\'s Sister', 'Treasure Hunter', 'Journalist', 'Local Guide', 'Archaeologist']
  },
  {
    id: '152',
    name: 'Bullet Train',
    category: 'movies',
    roles: ['Assassin', 'Target', 'Bodyguard', 'Elderly Man', 'Mother', 'Son', 'Gangster', 'Interpol Agent']
  },
  {
    id: '153',
    name: 'Poor Things',
    category: 'movies',
    roles: ['Young Woman', 'Scientist', 'Lawyer', 'Godwin Baxter', 'Bella Baxter', 'Max McCandles', 'Mrs. Prim', 'Duncan Wedderburn']
  },
  {
    id: '154',
    name: 'Anatomy of a Fall',
    category: 'movies',
    roles: ['Writer', 'Husband', 'Son', 'Lawyer', 'Detective', 'Journalist', 'Neighbor', 'Expert Witness']
  },
  {
    id: '155',
    name: 'Killers of the Flower Moon',
    category: 'movies',
    roles: ['Oil Baron', 'Native American', 'FBI Agent', 'Lawyer', 'Journalist', 'Doctor', 'Farmer', 'Politician']
  },
  // tv shows
  {
    id: '156',
    name: 'Friends',
    category: 'tv-shows',
    roles: ['Coffee Shop Regular', 'Waiter', 'Actor', 'Masseuse', 'Paleontologist', 'Chef', 'Fashion Executive', 'Statistician']
  },
  {
    id: '157',
    name: 'The Office',
    category: 'tv-shows',
    roles: ['Regional Manager', 'Salesperson', 'Receptionist', 'Accountant', 'HR Representative', 'Warehouse Worker', 'Temp', 'Corporate Executive']
  },
  {
    id: '158',
    name: 'iCarly',
    category: 'tv-shows',
    roles: ['Web Show Host', 'Technical Producer', 'Artist Friend', 'Principal', 'Doorman', 'Teacher', 'Sibling', 'Parent']
  },
  {
    id: '159',
    name: 'Breaking Bad',
    category: 'tv-shows',
    roles: ['Chemistry Teacher', 'DEA Agent', 'Drug Dealer', 'Lawyer', 'Car Wash Owner', 'Student', 'Police Officer', 'Cartel Member']
  },
  {
    id: '160',
    name: 'Stranger Things',
    category: 'tv-shows',
    roles: ['Kid with Powers', 'Sheriff', 'Scientist', 'Monster', 'High School Student', 'Government Agent', 'Lab Worker', 'Parent']
  },
  {
    id: '161',
    name: 'The Simpsons',
    category: 'tv-shows',
    roles: ['Nuclear Plant Worker', 'Bartender', 'Elementary Student', 'Baby', 'Shopkeeper', 'Police Chief', 'Principal', 'Reverend']
  },
  {
    id: '162',
    name: 'Never Have I Ever',
    category: 'tv-shows',
    roles: ['High School Student', 'Mother', 'Therapist', 'Friend', 'Love Interest', 'Grandmother', 'Teacher', 'Cousin']
  },
  {
    id: '163',
    name: 'Lost',
    category: 'tv-shows',
    roles: ['Crash Survivor', 'Doctor', 'Fugitive', 'Lottery Winner', 'Rock Star', 'Con Artist', 'Polar Bear', 'Other']
  },
  {
    id: '164',
    name: 'SpongeBob SquarePants',
    category: 'tv-shows',
    roles: ['Fry Cook', 'Neighbor', 'Boss', 'Cashier', 'Superhero', 'Villain', 'Pet Snail', 'Driving Instructor']
  },
  {
    id: '165',
    name: 'The Big Bang Theory',
    category: 'tv-shows',
    roles: ['Physicist', 'Waitress', 'Engineer', 'Astrophysicist', 'Microbiologist', 'Comic Book Store Owner', 'Mother', 'Neighbor']
  },
  {
    id: '166',
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
    id: '167',
    name: 'The Bachelor',
    category: 'tv-shows',
    roles: ['Bachelor', 'Contestant', 'Host', 'Producer', 'Cameraman', 'Makeup Artist', 'Security', 'Medical Staff']
  },
  {
    id: '168',
    name: 'Grey\'s Anatomy',
    category: 'tv-shows',
    roles: ['Surgeon', 'Intern', 'Nurse', 'Patient', 'Chief of Surgery', 'Anesthesiologist', 'Hospital Administrator', 'Medical Student']
  },
  {
    id: '169',
    name: 'The Rookie',
    category: 'tv-shows',
    roles: ['Rookie Police Officer', 'Training Officer', 'Sergeant', 'Detective', 'Captain', 'Wife', 'Criminal', 'Victim']
  },
  {
    id: '170',
    name: 'The Fairly OddParents',
    category: 'tv-shows',
    roles: ['Kid with Fairies', 'Fairy Godmother', 'Fairy Godfather', 'Baby Fairy', 'Parent', 'Bully', 'Teacher', 'Fairy Hunter']
  },
  {
    id: '171',
    name: 'Naruto',
    category: 'tv-shows',
    roles: ['Ninja Student', 'Team Leader', 'Rival Ninja', 'Female Teammate', 'Villain', 'Hokage', 'Teacher', 'Beast Host']
  },
  {
    id: '172',
    name: 'The Mandalorian',
    category: 'tv-shows',
    roles: ['Bounty Hunter', 'The Child', 'Imperial Officer', 'Rebel', 'Mechanic', 'Cantina Owner', 'Pilot', 'Jedi']
  },
  {
    id: '173',
    name: 'One Piece',
    category: 'tv-shows',
    roles: ['Pirate Captain', 'Swordsman', 'Navigator', 'Sniper', 'Cook', 'Doctor', 'Archaeologist', 'Robot Shipwright']
  },
  {
    id: '174',
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
    name: 'Mark Zuckerberg',
    category: 'famous-people',
    roles: ['CEO', 'Programmer', 'Investor', 'Philanthropist', 'Board Member', 'Entrepreneur', 'Public Speaker', 'Security']
  },
  {
    id: '187',
    name: 'Elon Musk',
    category: 'famous-people',
    roles: ['CEO', 'Engineer', 'Inventor', 'Investor', 'Entrepreneur', 'Pilot', 'Philanthropist', 'Public Speaker']
  },
  {
    id: '188',
    name: 'Jeff Bezos',
    category: 'famous-people',
    roles: ['CEO', 'Investor', 'Philanthropist', 'Entrepreneur', 'Pilot', 'Author', 'Explorer', 'Public Speaker']
  },
  {
    id: '189',
    name: 'Warren Buffett',
    category: 'famous-people',
    roles: ['Investor', 'CEO', 'Philanthropist', 'Businessman', 'Author', 'Teacher', 'Mentor', 'Public Speaker']
  },
  {
    id: '190',
    name: 'Bill Gates',
    category: 'famous-people',
    roles: ['Philanthropist', 'Investor', 'Author', 'Programmer', 'Entrepreneur', 'Teacher', 'Researcher', 'Public Speaker']
  },
  {
    id: '191',
    name: 'Mukesh Ambani',
    category: 'famous-people',
    roles: ['CEO', 'Businessman', 'Investor', 'Philanthropist', 'Chairman', 'Entrepreneur', 'Industrialist', 'Public Speaker']
  },
  {
    id: '192',
    name: 'Lionel Messi',
    category: 'famous-people',
    roles: ['Soccer Player', 'Forward', 'Captain', 'Family Man', 'Philanthropist', 'Businessman', 'Brand Ambassador', 'Public Speaker']
  },
  {
    id: '193',
    name: 'Cristiano Ronaldo',
    category: 'famous-people',
    roles: ['Soccer Player', 'Forward', 'Captain', 'Philanthropist', 'Businessman', 'Brand Ambassador', 'Entrepreneur', 'Public Speaker']
  },
  {
    id: '194',
    name: 'Beyoncé',
    category: 'famous-people',
    roles: ['Singer', 'Performer', 'Producer', 'Entrepreneur', 'Activist', 'Fashion Icon', 'Philanthropist', 'Businesswoman']
  },
  {
    id: '195',
    name: 'MrBeast',
    category: 'famous-people',
    roles: ['YouTuber', 'Entrepreneur', 'Philanthropist', 'Content Creator', 'Producer', 'Businessman', 'Influencer', 'Public Speaker']
  },
  {
    id: '196',
    name: 'Oprah Winfrey',
    category: 'famous-people',
    roles: ['TV Host', 'Producer', 'Philanthropist', 'Author', 'Entrepreneur', 'Activist', 'Mentor', 'Public Speaker']
  },
  {
    id: '197',
    name: 'Rihanna',
    category: 'famous-people',
    roles: ['Singer', 'Fashion Designer', 'Entrepreneur', 'Beauty Mogul', 'Philanthropist', 'Activist', 'Businesswoman', 'Public Speaker']
  },
  {
    id: '198',
    name: 'LeBron James',
    category: 'famous-people',
    roles: ['Basketball Player', 'Businessman', 'Philanthropist', 'Actor', 'Entrepreneur', 'Activist', 'Investor', 'Public Speaker']
  },
  {
    id: '199',
    name: 'Stephen Curry',
    category: 'famous-people',
    roles: ['Basketball Player', 'Philanthropist', 'Entrepreneur', 'Family Man', 'Brand Ambassador', 'Investor', 'Coach', 'Public Speaker']
  },
  {
    id: '200',
    name: 'Michael Jordan',
    category: 'famous-people',
    roles: ['Basketball Legend', 'Businessman', 'Entrepreneur', 'Investor', 'Philanthropist', 'Brand Ambassador', 'Mentor', 'Public Speaker']
  },
  {
    id: '201',
    name: 'Kobe Bryant',
    category: 'famous-people',
    roles: ['Basketball Legend', 'Entrepreneur', 'Philanthropist', 'Author', 'Mentor', 'Investor', 'Family Man', 'Public Speaker']
  },
  {
    id: '202',
    name: 'Shaquille O\'Neal',
    category: 'famous-people',
    roles: ['Basketball Legend', 'Actor', 'Entrepreneur', 'Philanthropist', 'Analyst', 'Businessman', 'Comedian', 'Public Speaker']
  },
  {
    id: '203',
    name: 'Dwayne Johnson',
    category: 'famous-people',
    roles: ['Actor', 'Producer', 'Wrestler', 'Entrepreneur', 'Philanthropist', 'Fitness Expert', 'Businessman', 'Public Speaker']
  },
  {
    id: '204',
    name: 'IShowSpeed',
    category: 'famous-people',
    roles: ['Streamer', 'YouTuber', 'Gamer', 'Content Creator', 'Entrepreneur', 'Influencer', 'Comedian', 'Public Speaker']
  },
  {
    id: '205',
    name: 'Zendaya',
    category: 'famous-people',
    roles: ['Actress', 'Fashion Icon', 'Producer', 'Activist', 'Entrepreneur', 'Philanthropist', 'Model', 'Public Speaker']
  },
  {
    id: '206',
    name: 'Keanu Reeves',
    category: 'famous-people',
    roles: ['Actor', 'Motorcyclist', 'Musician', 'Philanthropist', 'Internet Icon', 'Comedian', 'Writer', 'Public Speaker']
  },
  {
    id: '207',
    name: 'Emma Watson',
    category: 'famous-people',
    roles: ['Actress', 'Activist', 'Author', 'Philanthropist', 'Educator', 'Entrepreneur', 'Model', 'Public Speaker']
  },
  {
    id: '208',
    name: 'Tom Holland',
    category: 'famous-people',
    roles: ['Actor', 'Stuntman', 'Philanthropist', 'Entrepreneur', 'Brand Ambassador', 'Producer', 'Dancer', 'Public Speaker']
  },
  {
    id: '209',
    name: 'Taylor Swift',
    category: 'famous-people',
    roles: ['Singer-Songwriter', 'Entrepreneur', 'Philanthropist', 'Author', 'Producer', 'Businesswoman', 'Activist', 'Public Speaker']
  },
  {
    id: '210',
    name: 'Ryan Reynolds',
    category: 'famous-people',
    roles: ['Actor', 'Producer', 'Entrepreneur', 'Comedian', 'Philanthropist', 'Businessman', 'Brand Ambassador', 'Public Speaker']
  },
  {
    id: '211',
    name: 'Joe Rogan',
    category: 'famous-people',
    roles: ['Podcaster', 'Comedian', 'MMA Commentator', 'Entrepreneur', 'Author', 'Philanthropist', 'Martial Artist', 'Public Speaker']
  },
  {
    id: '212',
    name: 'Ariana Grande',
    category: 'famous-people',
    roles: ['Singer', 'Entrepreneur', 'Philanthropist', 'Activist', 'Producer', 'Businesswoman', 'Brand Ambassador', 'Public Speaker']
  },
  {
    id: '213',
    name: 'Chris Hemsworth',
    category: 'famous-people',
    roles: ['Actor', 'Producer', 'Fitness Expert', 'Entrepreneur', 'Philanthropist', 'Brand Ambassador', 'Father', 'Public Speaker']
  },
  {
    id: '214',
    name: 'Selena Gomez',
    category: 'famous-people',
    roles: ['Singer-Actress', 'Entrepreneur', 'Philanthropist', 'Activist', 'Producer', 'Businesswoman', 'Brand Ambassador', 'Public Speaker']
  },
  {
    id: '215',
    name: 'Ryan Gosling',
    category: 'famous-people',
    roles: ['Actor', 'Musician', 'Producer', 'Philanthropist', 'Comedian', 'Entrepreneur', 'Father', 'Public Speaker']
  },
  {
    id: '216',
    name: 'Timothée Chalamet',
    category: 'famous-people',
    roles: ['Actor', 'Producer', 'Philanthropist', 'Activist', 'Model', 'Entrepreneur', 'Artist', 'Public Speaker']
  },
  {
    id: '217',
    name: 'Emma Stone',
    category: 'famous-people',
    roles: ['Actress', 'Producer', 'Philanthropist', 'Entrepreneur', 'Activist', 'Model', 'Singer', 'Public Speaker']
  },
  {
    id: '218',
    name: 'Bad Bunny',
    category: 'famous-people',
    roles: ['Singer-Rapper', 'Entrepreneur', 'Philanthropist', 'Activist', 'Producer', 'Businessman', 'Artist', 'Public Speaker']
  },
  {
    id: '219',
    name: 'Billie Eilish',
    category: 'famous-people',
    roles: ['Singer-Songwriter', 'Producer', 'Philanthropist', 'Activist', 'Entrepreneur', 'Artist', 'Model', 'Public Speaker']
  },
  {
    id: '220',
    name: 'Olivia Rodrigo',
    category: 'famous-people',
    roles: ['Singer-Actress', 'Songwriter', 'Philanthropist', 'Activist', 'Producer', 'Entrepreneur', 'Artist', 'Public Speaker']
  },
  {
    id: '221',
    name: 'The Weeknd',
    category: 'famous-people',
    roles: ['Singer', 'Producer', 'Entrepreneur', 'Philanthropist', 'Activist', 'Businessman', 'Artist', 'Public Speaker']
  },
  {
    id: '222',
    name: 'Dua Lipa',
    category: 'famous-people',
    roles: ['Singer', 'Producer', 'Philanthropist', 'Activist', 'Entrepreneur', 'Model', 'Artist', 'Public Speaker']
  },
  {
    id: '223',
    name: 'Harry Styles',
    category: 'famous-people',
    roles: ['Singer-Actor', 'Producer', 'Philanthropist', 'Activist', 'Entrepreneur', 'Model', 'Artist', 'Public Speaker']
  },
  {
    id: '224',
    name: 'Lizzo',
    category: 'famous-people',
    roles: ['Singer-Rapper', 'Producer', 'Philanthropist', 'Activist', 'Entrepreneur', 'Model', 'Artist', 'Public Speaker']
  },
  {
    id: '225',
    name: 'Megan Thee Stallion',
    category: 'famous-people',
    roles: ['Rapper', 'Singer', 'Producer', 'Philanthropist', 'Activist', 'Entrepreneur', 'Model', 'Public Speaker']
  },
  {
    id: '226',
    name: 'Doja Cat',
    category: 'famous-people',
    roles: ['Singer-Rapper', 'Producer', 'Philanthropist', 'Activist', 'Entrepreneur', 'Model', 'Artist', 'Public Speaker']
  },
  {
    id: '227',
    name: 'Kanye West',
    category: 'famous-people',
    roles: ['Rapper', 'Designer', 'Producer', 'Entrepreneur', 'Philanthropist', 'Artist', 'Businessman', 'Public Speaker']
  },
  {
    id: '228',
    name: 'Drake',
    category: 'famous-people',
    roles: ['Rapper', 'Singer', 'Producer', 'Entrepreneur', 'Philanthropist', 'Businessman', 'Artist', 'Public Speaker']
  },
  {
    id: '229',
    name: 'Kendrick Lamar',
    category: 'famous-people',
    roles: ['Rapper', 'Producer', 'Philanthropist', 'Activist', 'Entrepreneur', 'Artist', 'Poet', 'Public Speaker']
  },
  {
    id: '230',
    name: 'Travis Scott',
    category: 'famous-people',
    roles: ['Rapper', 'Producer', 'Entrepreneur', 'Philanthropist', 'Designer', 'Artist', 'Businessman', 'Public Speaker']
  },
  {
    id: '231',
    name: 'Post Malone',
    category: 'famous-people',
    roles: ['Rapper-Singer', 'Producer', 'Entrepreneur', 'Philanthropist', 'Artist', 'Businessman', 'Model', 'Public Speaker']
  },
  {
    id: '232',
    name: 'Lil Nas X',
    category: 'famous-people',
    roles: ['Rapper-Singer', 'Producer', 'Philanthropist', 'Activist', 'Entrepreneur', 'Model', 'Artist', 'Public Speaker']
  },
  {
    id: '233',
    name: 'Machine Gun Kelly',
    category: 'famous-people',
    roles: ['Rapper-Actor', 'Producer', 'Entrepreneur', 'Philanthropist', 'Artist', 'Model', 'Musician', 'Public Speaker']
  },
  {
    id: '234',
    name: 'SZA',
    category: 'famous-people',
    roles: ['Singer', 'Producer', 'Philanthropist', 'Activist', 'Entrepreneur', 'Artist', 'Model', 'Public Speaker']
  },
  {
    id: '235',
    name: 'Halsey',
    category: 'famous-people',
    roles: ['Singer', 'Producer', 'Philanthropist', 'Activist', 'Entrepreneur', 'Artist', 'Model', 'Public Speaker']
  },
  {
    id: '236',
    name: 'Cardi B',
    category: 'famous-people',
    roles: ['Rapper', 'TV Personality', 'Producer', 'Philanthropist', 'Activist', 'Entrepreneur', 'Model', 'Public Speaker']
  },
  {
    id: '237',
    name: 'Nicki Minaj',
    category: 'famous-people',
    roles: ['Rapper', 'Singer', 'Producer', 'Entrepreneur', 'Philanthropist', 'Businesswoman', 'Model', 'Public Speaker']
  },
  {
    id: '238',
    name: 'Bruno Mars',
    category: 'famous-people',
    roles: ['Singer-Producer', 'Performer', 'Entrepreneur', 'Philanthropist', 'Artist', 'Businessman', 'Dancer', 'Public Speaker']
  },
  {
    id: '239',
    name: 'Justin Timberlake',
    category: 'famous-people',
    roles: ['Singer-Actor', 'Producer', 'Entrepreneur', 'Philanthropist', 'Businessman', 'Model', 'Dancer', 'Public Speaker']
  },
  {
    id: '240',
    name: 'Shawn Mendes',
    category: 'famous-people',
    roles: ['Singer', 'Songwriter', 'Producer', 'Philanthropist', 'Entrepreneur', 'Model', 'Artist', 'Public Speaker']
  },
  {
    id: '241',
    name: 'Ed Sheeran',
    category: 'famous-people',
    roles: ['Singer-Songwriter', 'Producer', 'Philanthropist', 'Entrepreneur', 'Artist', 'Businessman', 'Model', 'Public Speaker']
  },
  {
    id: '242',
    name: 'Adele',
    category: 'famous-people',
    roles: ['Singer-Songwriter', 'Producer', 'Philanthropist', 'Entrepreneur', 'Artist', 'Businesswoman', 'Model', 'Public Speaker']
  },
  {
    id: '243',
    name: 'Lady Gaga',
    category: 'famous-people',
    roles: ['Singer-Actress', 'Producer', 'Philanthropist', 'Activist', 'Entrepreneur', 'Artist', 'Model', 'Public Speaker']
  },
  {
    id: '244',
    name: 'Katy Perry',
    category: 'famous-people',
    roles: ['Singer', 'Producer', 'Philanthropist', 'Activist', 'Entrepreneur', 'Businesswoman', 'Model', 'Public Speaker']
  },
  {
    id: '245',
    name: 'Britney Spears',
    category: 'famous-people',
    roles: ['Singer', 'Performer', 'Producer', 'Philanthropist', 'Entrepreneur', 'Model', 'Dancer', 'Public Speaker']
  },
  {
    id: '246',
    name: 'Christina Aguilera',
    category: 'famous-people',
    roles: ['Singer-Actress', 'Producer', 'Philanthropist', 'Activist', 'Entrepreneur', 'Model', 'Dancer', 'Public Speaker']
  },
  {
    id: '247',
    name: 'Mariah Carey',
    category: 'famous-people',
    roles: ['Singer', 'Producer', 'Philanthropist', 'Entrepreneur', 'Businesswoman', 'Model', 'Activist', 'Public Speaker']
  },
  {
    id: '248',
    name: 'Whitney Houston',
    category: 'famous-people',
    roles: ['Singer-Actress', 'Producer', 'Philanthropist', 'Entrepreneur', 'Model', 'Dancer', 'Artist', 'Public Speaker']
  },
  {
    id: '249',
    name: 'Celine Dion',
    category: 'famous-people',
    roles: ['Singer', 'Performer', 'Producer', 'Philanthropist', 'Entrepreneur', 'Model', 'Artist', 'Public Speaker']
  },
  {
    id: '250',
    name: 'Michael Bublé',
    category: 'famous-people',
    roles: ['Singer', 'Performer', 'Producer', 'Philanthropist', 'Entrepreneur', 'Model', 'Artist', 'Public Speaker']
  },
  {
    id: '251',
    name: 'John Legend',
    category: 'famous-people',
    roles: ['Singer-Songwriter', 'Producer', 'Philanthropist', 'Activist', 'Entrepreneur', 'Model', 'Artist', 'Public Speaker']
  },
  {
    id: '252',
    name: 'Sam Smith',
    category: 'famous-people',
    roles: ['Singer', 'Songwriter', 'Producer', 'Philanthropist', 'Activist', 'Entrepreneur', 'Model', 'Public Speaker']
  },
  {
    id: '253',
    name: 'Lewis Capaldi',
    category: 'famous-people',
    roles: ['Singer-Songwriter', 'Producer', 'Philanthropist', 'Entrepreneur', 'Model', 'Artist', 'Comedian', 'Public Speaker']
  },
  {
    id: '254',
    name: 'Billie Joel',
    category: 'famous-people',
    roles: ['Singer-Songwriter', 'Producer', 'Philanthropist', 'Entrepreneur', 'Model', 'Artist', 'Pianist', 'Public Speaker']
  },
  {
    id: '255',
    name: 'Elton John',
    category: 'famous-people',
    roles: ['Singer-Songwriter', 'Producer', 'Philanthropist', 'Activist', 'Entrepreneur', 'Model', 'Pianist', 'Public Speaker']
  },
  {
    id: '256',
    name: 'Paul McCartney',
    category: 'famous-people',
    roles: ['Singer-Songwriter', 'Producer', 'Philanthropist', 'Entrepreneur', 'Model', 'Artist', 'Musician', 'Public Speaker']
  },
  // Additional Basketball Players
  {
    id: '257',
    name: 'Giannis Antetokounmpo',
    category: 'famous-people',
    roles: ['Basketball Player', 'MVP', 'Philanthropist', 'Entrepreneur', 'Brand Ambassador', 'Family Man', 'Athlete', 'Public Speaker']
  },
  {
    id: '258',
    name: 'Kevin Durant',
    category: 'famous-people',
    roles: ['Basketball Player', 'Entrepreneur', 'Philanthropist', 'Brand Ambassador', 'Investor', 'Actor', 'Athlete', 'Public Speaker']
  },
  {
    id: '259',
    name: 'Luka Dončić',
    category: 'famous-people',
    roles: ['Basketball Player', 'Superstar', 'Philanthropist', 'Brand Ambassador', 'Entrepreneur', 'Athlete', 'Model', 'Public Speaker']
  },
  {
    id: '260',
    name: 'Kawhi Leonard',
    category: 'famous-people',
    roles: ['Basketball Player', 'Champion', 'Philanthropist', 'Brand Ambassador', 'Entrepreneur', 'Athlete', 'Model', 'Public Speaker']
  },
  {
    id: '261',
    name: 'James Harden',
    category: 'famous-people',
    roles: ['Basketball Player', 'Superstar', 'Entrepreneur', 'Philanthropist', 'Brand Ambassador', 'Athlete', 'Model', 'Public Speaker']
  },
  {
    id: '262',
    name: 'Anthony Davis',
    category: 'famous-people',
    roles: ['Basketball Player', 'Champion', 'Philanthropist', 'Brand Ambassador', 'Entrepreneur', 'Athlete', 'Model', 'Public Speaker']
  },
  {
    id: '263',
    name: 'Russell Westbrook',
    category: 'famous-people',
    roles: ['Basketball Player', 'Superstar', 'Entrepreneur', 'Philanthropist', 'Brand Ambassador', 'Athlete', 'Model', 'Public Speaker']
  },
  {
    id: '264',
    name: 'Damian Lillard',
    category: 'famous-people',
    roles: ['Basketball Player', 'Superstar', 'Philanthropist', 'Brand Ambassador', 'Entrepreneur', 'Athlete', 'Model', 'Public Speaker']
  },
  {
    id: '265',
    name: 'Joel Embiid',
    category: 'famous-people',
    roles: ['Basketball Player', 'Superstar', 'Philanthropist', 'Brand Ambassador', 'Entrepreneur', 'Athlete', 'Model', 'Public Speaker']
  },
  {
    id: '266',
    name: 'Nikola Jokić',
    category: 'famous-people',
    roles: ['Basketball Player', 'MVP', 'Philanthropist', 'Brand Ambassador', 'Entrepreneur', 'Athlete', 'Model', 'Public Speaker']
  },
  {
    id: '267',
    name: 'Zion Williamson',
    category: 'famous-people',
    roles: ['Basketball Player', 'Superstar', 'Philanthropist', 'Brand Ambassador', 'Entrepreneur', 'Athlete', 'Model', 'Public Speaker']
  },
  {
    id: '268',
    name: 'Ja Morant',
    category: 'famous-people',
    roles: ['Basketball Player', 'Superstar', 'Philanthropist', 'Brand Ambassador', 'Entrepreneur', 'Athlete', 'Model', 'Public Speaker']
  },
  {
    id: '269',
    name: 'Jayson Tatum',
    category: 'famous-people',
    roles: ['Basketball Player', 'Superstar', 'Philanthropist', 'Brand Ambassador', 'Entrepreneur', 'Athlete', 'Model', 'Public Speaker']
  },
  {
    id: '270',
    name: 'Donovan Mitchell',
    category: 'famous-people',
    roles: ['Basketball Player', 'Superstar', 'Philanthropist', 'Brand Ambassador', 'Entrepreneur', 'Athlete', 'Model', 'Public Speaker']
  },
  {
    id: '271',
    name: 'Devin Booker',
    category: 'famous-people',
    roles: ['Basketball Player', 'Superstar', 'Philanthropist', 'Brand Ambassador', 'Entrepreneur', 'Athlete', 'Model', 'Public Speaker']
  },
  {
    id: '272',
    name: 'Trae Young',
    category: 'famous-people',
    roles: ['Basketball Player', 'Superstar', 'Philanthropist', 'Brand Ambassador', 'Entrepreneur', 'Athlete', 'Model', 'Public Speaker']
  },
  // MMA Fighters
  {
    id: '273',
    name: 'Conor McGregor',
    category: 'famous-people',
    roles: ['MMA Fighter', 'Entrepreneur', 'Philanthropist', 'Businessman', 'Boxer', 'Brand Ambassador', 'Athlete', 'Public Speaker']
  },
  {
    id: '274',
    name: 'Jon Jones',
    category: 'famous-people',
    roles: ['MMA Fighter', 'Entrepreneur', 'Philanthropist', 'Businessman', 'Brand Ambassador', 'Athlete', 'Model', 'Public Speaker']
  },
  {
    id: '275',
    name: 'Khabib Nurmagomedov',
    category: 'famous-people',
    roles: ['MMA Fighter', 'Entrepreneur', 'Philanthropist', 'Businessman', 'Brand Ambassador', 'Athlete', 'Model', 'Public Speaker']
  },
  {
    id: '276',
    name: 'Israel Adesanya',
    category: 'famous-people',
    roles: ['MMA Fighter', 'Entrepreneur', 'Philanthropist', 'Businessman', 'Brand Ambassador', 'Athlete', 'Model', 'Public Speaker']
  },
  // Soccer Players
  {
    id: '277',
    name: 'Kylian Mbappé',
    category: 'famous-people',
    roles: ['Soccer Player', 'Forward', 'Entrepreneur', 'Philanthropist', 'Brand Ambassador', 'Athlete', 'Model', 'Public Speaker']
  },
  {
    id: '278',
    name: 'Neymar Jr',
    category: 'famous-people',
    roles: ['Soccer Player', 'Forward', 'Entrepreneur', 'Philanthropist', 'Brand Ambassador', 'Athlete', 'Model', 'Public Speaker']
  },
  {
    id: '279',
    name: 'Erling Haaland',
    category: 'famous-people',
    roles: ['Soccer Player', 'Forward', 'Entrepreneur', 'Philanthropist', 'Brand Ambassador', 'Athlete', 'Model', 'Public Speaker']
  },
  // Additional Diverse Famous People
  {
    id: '280',
    name: 'Albert Einstein',
    category: 'famous-people',
    roles: ['Scientist', 'Physicist', 'Professor', 'Inventor', 'Author', 'Philosopher', 'Humanitarian', 'Public Speaker']
  },
  {
    id: '281',
    name: 'Marie Curie',
    category: 'famous-people',
    roles: ['Scientist', 'Physicist', 'Chemist', 'Professor', 'Researcher', 'Inventor', 'Humanitarian', 'Public Speaker']
  },
  {
    id: '282',
    name: 'Nelson Mandela',
    category: 'famous-people',
    roles: ['Political Leader', 'Activist', 'President', 'Humanitarian', 'Author', 'Lawyer', 'Prisoner', 'Public Speaker']
  },
  {
    id: '283',
    name: 'Mahatma Gandhi',
    category: 'famous-people',
    roles: ['Political Leader', 'Activist', 'Philosopher', 'Lawyer', 'Author', 'Humanitarian', 'Spiritual Leader', 'Public Speaker']
  },
  {
    id: '284',
    name: 'Martin Luther King Jr.',
    category: 'famous-people',
    roles: ['Civil Rights Leader', 'Activist', 'Pastor', 'Author', 'Humanitarian', 'Philosopher', 'Public Speaker', 'Scholar']
  },
  {
    id: '285',
    name: 'Malala Yousafzai',
    category: 'famous-people',
    roles: ['Activist', 'Author', 'Student', 'Humanitarian', 'Public Speaker', 'Educator', 'Advocate', 'Scholar']
  },
  {
    id: '286',
    name: 'Greta Thunberg',
    category: 'famous-people',
    roles: ['Climate Activist', 'Student', 'Author', 'Public Speaker', 'Advocate', 'Environmentalist', 'Youth Leader', 'Scholar']
  },
  {
    id: '287',
    name: 'Steve Jobs',
    category: 'famous-people',
    roles: ['Entrepreneur', 'Inventor', 'CEO', 'Designer', 'Philanthropist', 'Visionary', 'Businessman', 'Public Speaker']
  },
  {
    id: '288',
    name: 'Larry Page',
    category: 'famous-people',
    roles: ['Entrepreneur', 'Inventor', 'CEO', 'Engineer', 'Philanthropist', 'Businessman', 'Investor', 'Public Speaker']
  },
  {
    id: '289',
    name: 'Sergey Brin',
    category: 'famous-people',
    roles: ['Entrepreneur', 'Inventor', 'CEO', 'Engineer', 'Philanthropist', 'Businessman', 'Investor', 'Public Speaker']
  },
  {
    id: '290',
    name: 'Sundar Pichai',
    category: 'famous-people',
    roles: ['CEO', 'Engineer', 'Entrepreneur', 'Philanthropist', 'Businessman', 'Leader', 'Innovator', 'Public Speaker']
  },
  {
    id: '291',
    name: 'Satya Nadella',
    category: 'famous-people',
    roles: ['CEO', 'Engineer', 'Entrepreneur', 'Philanthropist', 'Businessman', 'Leader', 'Innovator', 'Public Speaker']
  },
  {
    id: '292',
    name: 'Tim Cook',
    category: 'famous-people',
    roles: ['CEO', 'Engineer', 'Entrepreneur', 'Philanthropist', 'Businessman', 'Leader', 'Innovator', 'Public Speaker']
  },
  {
    id: '293',
    name: 'Jack Ma',
    category: 'famous-people',
    roles: ['Entrepreneur', 'CEO', 'Philanthropist', 'Businessman', 'Investor', 'Teacher', 'Author', 'Public Speaker']
  },
  {
    id: '294',
    name: 'Richard Branson',
    category: 'famous-people',
    roles: ['Entrepreneur', 'CEO', 'Philanthropist', 'Businessman', 'Investor', 'Adventurer', 'Author', 'Public Speaker']
  },
  {
    id: '295',
    name: 'J.K. Rowling',
    category: 'famous-people',
    roles: ['Author', 'Philanthropist', 'Entrepreneur', 'Activist', 'Businesswoman', 'Teacher', 'Writer', 'Public Speaker']
  },
  {
    id: '296',
    name: 'George R.R. Martin',
    category: 'famous-people',
    roles: ['Author', 'Screenwriter', 'Producer', 'Philanthropist', 'Historian', 'Teacher', 'Writer', 'Public Speaker']
  },
  {
    id: '297',
    name: 'Stephen King',
    category: 'famous-people',
    roles: ['Author', 'Philanthropist', 'Entrepreneur', 'Activist', 'Businessman', 'Teacher', 'Writer', 'Public Speaker']
  },
  {
    id: '298',
    name: 'Michelle Obama',
    category: 'famous-people',
    roles: ['Author', 'Philanthropist', 'Activist', 'Lawyer', 'Educator', 'Public Speaker', 'First Lady', 'Advocate']
  },
  {
    id: '299',
    name: 'Barack Obama',
    category: 'famous-people',
    roles: ['President', 'Author', 'Philanthropist', 'Lawyer', 'Politician', 'Public Speaker', 'Leader', 'Advocate']
  },
  {
    id: '300',
    name: 'Queen Elizabeth II',
    category: 'famous-people',
    roles: ['Monarch', 'Leader', 'Philanthropist', 'Public Speaker', 'Diplomat', 'Head of State', 'Royal', 'Patron']
  },
  {
    id: '301',
    name: 'Pope Francis',
    category: 'famous-people',
    roles: ['Religious Leader', 'Pope', 'Philanthropist', 'Activist', 'Public Speaker', 'Diplomat', 'Spiritual Guide', 'Humanitarian']
  },
  {
    id: '302',
    name: 'Dalai Lama',
    category: 'famous-people',
    roles: ['Religious Leader', 'Philosopher', 'Author', 'Peace Activist', 'Public Speaker', 'Spiritual Guide', 'Teacher', 'Humanitarian']
  },
  {
    id: '303',
    name: 'David Beckham',
    category: 'famous-people',
    roles: ['Soccer Player', 'Entrepreneur', 'Philanthropist', 'Model', 'Businessman', 'Brand Ambassador', 'Athlete', 'Public Speaker']
  },
  {
    id: '304',
    name: 'Roger Federer',
    category: 'famous-people',
    roles: ['Tennis Player', 'Entrepreneur', 'Philanthropist', 'Brand Ambassador', 'Athlete', 'Businessman', 'Model', 'Public Speaker']
  },
  {
    id: '305',
    name: 'Serena Williams',
    category: 'famous-people',
    roles: ['Tennis Player', 'Entrepreneur', 'Philanthropist', 'Activist', 'Businesswoman', 'Athlete', 'Model', 'Public Speaker']
  },
  {
    id: '306',
    name: 'Usain Bolt',
    category: 'famous-people',
    roles: ['Sprinter', 'Entrepreneur', 'Philanthropist', 'Brand Ambassador', 'Athlete', 'Businessman', 'Model', 'Public Speaker']
  },
  {
    id: '307',
    name: 'Michael Phelps',
    category: 'famous-people',
    roles: ['Swimmer', 'Entrepreneur', 'Philanthropist', 'Brand Ambassador', 'Athlete', 'Businessman', 'Model', 'Public Speaker']
  },
  {
    id: '308',
    name: 'Tom Brady',
    category: 'famous-people',
    roles: ['Football Player', 'Entrepreneur', 'Philanthropist', 'Brand Ambassador', 'Athlete', 'Businessman', 'Model', 'Public Speaker']
  },
  {
    id: '309',
    name: 'Lionel Richie',
    category: 'famous-people',
    roles: ['Singer', 'Songwriter', 'Producer', 'Philanthropist', 'Entrepreneur', 'Businessman', 'Model', 'Public Speaker']
  },
  {
    id: '310',
    name: 'Madonna',
    category: 'famous-people',
    roles: ['Singer', 'Performer', 'Producer', 'Philanthropist', 'Activist', 'Entrepreneur', 'Model', 'Public Speaker']
  },
  {
    id: '311',
    name: 'Bruce Springsteen',
    category: 'famous-people',
    roles: ['Singer-Songwriter', 'Musician', 'Philanthropist', 'Activist', 'Entrepreneur', 'Model', 'Artist', 'Public Speaker']
  },
  {
    id: '312',
    name: 'Bob Dylan',
    category: 'famous-people',
    roles: ['Singer-Songwriter', 'Musician', 'Author', 'Philanthropist', 'Activist', 'Artist', 'Poet', 'Public Speaker']
  },
  {
    id: '313',
    name: 'Leonardo DiCaprio',
    category: 'famous-people',
    roles: ['Actor', 'Producer', 'Philanthropist', 'Activist', 'Entrepreneur', 'Model', 'Artist', 'Public Speaker']
  },
  {
    id: '314',
    name: 'Angelina Jolie',
    category: 'famous-people',
    roles: ['Actress', 'Director', 'Philanthropist', 'Activist', 'Humanitarian', 'Model', 'Artist', 'Public Speaker']
  },
  {
    id: '315',
    name: 'Brad Pitt',
    category: 'famous-people',
    roles: ['Actor', 'Producer', 'Philanthropist', 'Entrepreneur', 'Model', 'Artist', 'Businessman', 'Public Speaker']
  },
  {
    id: '316',
    name: 'Scarlett Johansson',
    category: 'famous-people',
    roles: ['Actress', 'Singer', 'Philanthropist', 'Activist', 'Model', 'Artist', 'Entrepreneur', 'Public Speaker']
  },
  {
    id: '317',
    name: 'Denzel Washington',
    category: 'famous-people',
    roles: ['Actor', 'Producer', 'Philanthropist', 'Activist', 'Model', 'Artist', 'Entrepreneur', 'Public Speaker']
  },
  {
    id: '318',
    name: 'Meryl Streep',
    category: 'famous-people',
    roles: ['Actress', 'Producer', 'Philanthropist', 'Activist', 'Model', 'Artist', 'Entrepreneur', 'Public Speaker']
  },
  {
    id: '319',
    name: 'Robert Downey Jr.',
    category: 'famous-people',
    roles: ['Actor', 'Producer', 'Philanthropist', 'Entrepreneur', 'Model', 'Artist', 'Businessman', 'Public Speaker']
  },
  // sports
  {
    id: '276',
    name: 'Football Stadium',
    category: 'sports',
    roles: ['Player', 'Coach', 'Referee', 'Fan', 'Mascot', 'Commentator', 'Security', 'Photographer']
  },
  {
    id: '277',
    name: 'Basketball Court',
    category: 'sports',
    roles: ['Player', 'Coach', 'Referee', 'Fan', 'Cheerleader', 'Commentator', 'Photographer', 'Water Boy']
  },
  {
    id: '278',
    name: 'Tennis Match',
    category: 'sports',
    roles: ['Player', 'Coach', 'Umpire', 'Ball Boy', 'Fan', 'Commentator', 'Photographer', 'Line Judge']
  },
  {
    id: '279',
    name: 'Swimming Pool',
    category: 'sports',
    roles: ['Swimmer', 'Coach', 'Lifeguard', 'Judge', 'Fan', 'Photographer', 'Pool Maintenance', 'Commentator']
  },
  {
    id: '280',
    name: 'Golf Course',
    category: 'sports',
    roles: ['Golfer', 'Caddie', 'Pro Shop Manager', 'Groundskeeper', 'Fan', 'Commentator', 'Photographer', 'Judge']
  },
  {
    id: '281',
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
  {
    id: '236',
    name: 'Cristiano Ronaldo',
    category: 'sports',
    roles: ['Soccer Player', 'Coach', 'Referee', 'Fan', 'Agent', 'Photographer', 'Commentator', 'Teammate']
  },
  {
    id: '237',
    name: 'Serena Williams',
    category: 'sports',
    roles: ['Tennis Player', 'Coach', 'Umpire', 'Fan', 'Agent', 'Photographer', 'Commentator', 'Ball Girl']
  },
  {
    id: '238',
    name: 'Tom Brady',
    category: 'sports',
    roles: ['Quarterback', 'Coach', 'Referee', 'Fan', 'Agent', 'Photographer', 'Commentator', 'Teammate']
  },
  {
    id: '239',
    name: 'Usain Bolt',
    category: 'sports',
    roles: ['Sprinter', 'Coach', 'Judge', 'Fan', 'Agent', 'Photographer', 'Commentator', 'Trainer']
  },
  {
    id: '240',
    name: 'Tiger Woods',
    category: 'sports',
    roles: ['Golfer', 'Caddie', 'Judge', 'Fan', 'Agent', 'Photographer', 'Commentator', 'Golf Pro']
  },
  {
    id: '241',
    name: 'Simone Biles',
    category: 'sports',
    roles: ['Gymnast', 'Coach', 'Judge', 'Fan', 'Agent', 'Photographer', 'Commentator', 'Spotter']
  },
  {
    id: '242',
    name: 'Khabib Nurmagomedov',
    category: 'sports',
    roles: ['MMA Fighter', 'Coach', 'Referee', 'Fan', 'Agent', 'Photographer', 'Commentator', 'Sparring Partner']
  },
  {
    id: '243',
    name: 'Patrick Mahomes',
    category: 'sports',
    roles: ['Quarterback', 'Coach', 'Referee', 'Fan', 'Agent', 'Photographer', 'Commentator', 'Teammate']
  },
  {
    id: '244',
    name: 'Lewis Hamilton',
    category: 'sports',
    roles: ['F1 Driver', 'Mechanic', 'Race Official', 'Fan', 'Agent', 'Photographer', 'Commentator', 'Pit Crew']
  },
  {
    id: '245',
    name: 'Naomi Osaka',
    category: 'sports',
    roles: ['Tennis Player', 'Coach', 'Umpire', 'Fan', 'Agent', 'Photographer', 'Commentator', 'Ball Girl']
  },
  // music
  {
    id: '246',
    name: 'Concert Hall',
    category: 'music',
    roles: ['Musician', 'Conductor', 'Audience Member', 'Sound Engineer', 'Photographer', 'Security', 'Usher', 'Stage Manager']
  },
  {
    id: '247',
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
  ,
  // Household / General items (new category 'household')
  {
    id: 'household_001', name: 'Sofa', category: 'household', roles: ['Homeowner', 'Visitor', 'Child', 'Pet Owner', 'Interior Designer', 'Mover', 'Cleaner', 'Guest']
  },
  { id: 'household_002', name: 'Dining Table', category: 'household', roles: ['Family Member', 'Host', 'Dinner Guest', 'Child', 'Waiter', 'Carpenter', 'Decorator', 'Cleaner'] },
  { id: 'household_003', name: 'Bed', category: 'household', roles: ['Sleeper', 'Partner', 'Child', 'Guest', 'Housekeeper', 'Mattress Salesperson', 'Delivery Person', 'Doctor'] },
  { id: 'household_004', name: 'Pillow', category: 'household', roles: ['Sleeper', 'Child', 'Guest', 'Housekeeper', 'Allergy Sufferer', 'Store Clerk', 'Manufacturer', 'Designer'] },
  { id: 'household_005', name: 'Blanket', category: 'household', roles: ['Sleeper', 'Child', 'Elderly Person', 'Guest', 'Housekeeper', 'Knitter', 'Store Associate', 'Pet Owner'] },
  { id: 'household_006', name: 'Lamp', category: 'household', roles: ['Reader', 'Worker', 'Electrician', 'Interior Designer', 'Student', 'Artist', 'Night Owl', 'Homeowner'] },
  { id: 'household_007', name: 'Curtains', category: 'household', roles: ['Homeowner', 'Interior Designer', 'Seamstress', 'Window Installer', 'Privacy Seeker', 'Cleaner', 'Neighbor', 'Decorator'] },
  { id: 'household_008', name: 'Rug', category: 'household', roles: ['Homeowner', 'Interior Designer', 'Cleaner', 'Child', 'Pet Owner', 'Yoga Enthusiast', 'Carpet Installer', 'Guest'] },
  { id: 'household_009', name: 'TV', category: 'household', roles: ['Viewer', 'Channel Surfer', 'Child', 'Elderly Person', 'Gamer', 'Technician', 'Couch Potato', 'Sports Fan'] },
  { id: 'household_010', name: 'Remote Control', category: 'household', roles: ['TV Watcher', 'Channel Surfer', 'Child', 'Elderly Person', 'Gamer', 'Technician', 'Remote Hoarder', 'Sports Fan'] },
  { id: 'household_011', name: 'Bookshelf', category: 'household', roles: ['Reader', 'Student', 'Librarian', 'Book Collector', 'Scholar', 'Organizer', 'Dust Cleaner', 'Carpenter'] },
  { id: 'household_012', name: 'Coffee Table', category: 'household', roles: ['Coffee Drinker', 'Guest', 'Magazine Reader', 'Remote Controller', 'Snacker', 'Decorator', 'Cleaner', 'Child'] },
  { id: 'household_013', name: 'Refrigerator', category: 'household', roles: ['Cook', 'Snacker', 'Grocery Shopper', 'Child', 'Repair Technician', 'Energy Saver', 'Leftover Eater', 'Health Nut'] },
  { id: 'household_014', name: 'Oven', category: 'household', roles: ['Chef', 'Baker', 'Home Cook', 'Pizza Lover', 'Repair Technician', 'Safety Inspector', 'Thanksgiving Host', 'Beginner Cook'] },
  { id: 'household_015', name: 'Microwave', category: 'household', roles: ['Quick Meal Maker', 'Student', 'Busy Parent', 'Office Worker', 'Leftover Reheater', 'Popcorn Lover', 'Technician', 'Child'] },
  { id: 'household_016', name: 'Toaster', category: 'household', roles: ['Breakfast Eater', 'Bread Lover', 'Busy Commuter', 'Child', 'Bagel Fan', 'Repair Person', 'Kitchen Gadget Collector', 'Morning Person'] },
  { id: 'household_017', name: 'Kettle', category: 'household', roles: ['Tea Drinker', 'Coffee Maker', 'British Person', 'Hot Chocolate Lover', 'Soup Maker', 'Camper', 'Elderly Person', 'Student'] },
  { id: 'household_018', name: 'Dishwasher', category: 'household', roles: ['Homeowner', 'Busy Parent', 'Cleaner', 'Repair Technician', 'Dish Loader', 'Water Saver', 'Kitchen Manager', 'Lazy Person'] },
  { id: 'household_019', name: 'Sink', category: 'household', roles: ['Dish Washer', 'Hand Washer', 'Tooth Brusher', 'Plumber', 'Cleaner', 'Water User', 'Cook', 'Child'] },
  { id: 'household_020', name: 'Cutlery', category: 'household', roles: ['Diner', 'Chef', 'Dish Washer', 'Table Setter', 'Collector', 'Sharpener', 'Child', 'Etiquette Teacher'] },
  { id: 'household_021', name: 'Plate', category: 'household', roles: ['Diner', 'Server', 'Dish Washer', 'Child', 'Chef', 'Table Setter', 'Party Host', 'Collector'] },
  { id: 'household_022', name: 'Cup', category: 'household', roles: ['Coffee Drinker', 'Tea Drinker', 'Child', 'Thirsty Person', 'Collector', 'Barista', 'Guest', 'Dish Washer'] },
  { id: 'household_023', name: 'Pan', category: 'household', roles: ['Cook', 'Chef', 'Breakfast Maker', 'Stir-fryer', 'Pancake Flipper', 'Cleaner', 'Kitchen Novice', 'Omelet Expert'] },
  { id: 'household_024', name: 'Knife', category: 'household', roles: ['Chef', 'Cook', 'Vegetable Chopper', 'Bread Slicer', 'Sharpener', 'Safety Expert', 'Kitchen Novice', 'Butcher'] },
  { id: 'household_025', name: 'Fork', category: 'household', roles: ['Diner', 'Pasta Eater', 'Salad Lover', 'Child', 'Etiquette Teacher', 'Left-handed Person', 'Table Setter', 'Spaghetti Twirler'] },
  { id: 'household_026', name: 'Spoon', category: 'household', roles: ['Soup Eater', 'Cereal Lover', 'Ice Cream Fan', 'Baby', 'Stirrer', 'Measuring Person', 'Medicine Taker', 'Coffee Stirrer'] },
  { id: 'household_027', name: 'Recycling Bin', category: 'household', roles: ['Environmentalist', 'Homeowner', 'Child', 'Garbage Collector', 'Eco-warrior', 'Organizer', 'Rule Follower', 'Green Enthusiast'] },
  { id: 'household_028', name: 'Trash Can', category: 'household', roles: ['Homeowner', 'Cleaner', 'Child', 'Garbage Collector', 'Organizer', 'Messy Person', 'Janitor', 'Waste Manager'] },
  { id: 'household_029', name: 'Vacuum Cleaner', category: 'household', roles: ['Cleaner', 'Homeowner', 'Housekeeper', 'Pet Owner', 'Repair Technician', 'Neat Freak', 'Carpet Lover', 'Dust Fighter'] },
  { id: 'household_030', name: 'Broom', category: 'household', roles: ['Cleaner', 'Janitor', 'Homeowner', 'Old-fashioned Person', 'Witch', 'Dust Sweeper', 'Floor Maintainer', 'Traditional Cleaner'] },
  { id: 'household_031', name: 'Mop', category: 'household', roles: ['Floor Cleaner', 'Janitor', 'Homeowner', 'Housekeeper', 'Spill Cleaner', 'Water Fighter', 'Maintenance Worker', 'Neat Person'] },
  { id: 'household_032', name: 'Bucket', category: 'household', roles: ['Cleaner', 'Car Washer', 'Gardener', 'Painter', 'Child', 'Mop User', 'Water Carrier', 'Beach Goer'] },
  { id: 'household_033', name: 'Iron', category: 'household', roles: ['Clothes Presser', 'Professional Dresser', 'Housekeeper', 'Perfectionist', 'Wrinkle Fighter', 'Busy Parent', 'Office Worker', 'Fashionista'] },
  { id: 'household_034', name: 'Ironing Board', category: 'household', roles: ['Clothes Ironer', 'Homeowner', 'Housekeeper', 'Perfectionist', 'Professional Dresser', 'Busy Parent', 'Wrinkle Hater', 'Organizer'] },
  { id: 'household_035', name: 'Washing Machine', category: 'household', roles: ['Laundry Doer', 'Homeowner', 'Busy Parent', 'Student', 'Repair Technician', 'Water User', 'Soap Loader', 'Clothes Cleaner'] },
  { id: 'household_036', name: 'Dryer', category: 'household', roles: ['Laundry Finisher', 'Homeowner', 'Busy Parent', 'Student', 'Repair Technician', 'Energy User', 'Clothes Fluffer', 'Lint Remover'] },
  { id: 'household_037', name: 'Laundry Detergent', category: 'household', roles: ['Laundry Doer', 'Stain Fighter', 'Homeowner', 'Busy Parent', 'Cleanliness Lover', 'Allergic Person', 'Eco-friendly User', 'Bargain Hunter'] },
  { id: 'household_038', name: 'Clothes Hanger', category: 'household', roles: ['Organizer', 'Closet Manager', 'Clothes Lover', 'Neat Person', 'Dry Cleaner', 'Fashionista', 'Space Saver', 'Wrinkle Preventer'] },
  { id: 'household_039', name: 'Closet', category: 'household', roles: ['Clothes Owner', 'Organizer', 'Fashionista', 'Messy Person', 'Neat Freak', 'Seasonal Changer', 'Hider', 'Storage User'] },
  { id: 'household_040', name: 'Mirror', category: 'household', roles: ['Self Checker', 'Makeup Applier', 'Hair Styler', 'Vanity Person', 'Dancer', 'Actor', 'Selfie Taker', 'Reflection Lover'] },
  { id: 'household_041', name: 'Shower', category: 'household', roles: ['Daily Washer', 'Athlete', 'Singing Performer', 'Water Lover', 'Quick Rinser', 'Long Soaker', 'Plumber', 'Steam Lover'] },
  { id: 'household_042', name: 'Bathtub', category: 'household', roles: ['Bath Taker', 'Relaxer', 'Bubble Lover', 'Child', 'Elderly Person', 'Stress Reliever', 'Candle Lighter', 'Book Reader'] },
  { id: 'household_043', name: 'Toilet', category: 'household', roles: ['Bathroom User', 'Reader', 'Phone Checker', 'Thinker', 'Quick User', 'Plumber', 'Cleaner', 'Privacy Seeker'] },
  { id: 'household_044', name: 'Toothbrush', category: 'household', roles: ['Teeth Brusher', 'Dental Hygienist', 'Morning Person', 'Night Person', 'Cavity Fighter', 'Fresh Breath Seeker', 'Child', 'Dentist'] },
  { id: 'household_045', name: 'Towel', category: 'household', roles: ['Shower User', 'Swimmer', 'Gym Goer', 'Beach Lover', 'Dryer', 'Cleaner', 'Wet Person', 'Absorbent User'] },
  { id: 'household_046', name: 'Shampoo', category: 'household', roles: ['Hair Washer', 'Clean Hair Lover', 'Shower Taker', 'Hairdresser', 'Dandruff Fighter', 'Scent Lover', 'Lather Maker', 'Hair Care Expert'] },
  { id: 'household_047', name: 'Soap', category: 'household', roles: ['Hand Washer', 'Cleanliness Lover', 'Germ Fighter', 'Bubble Maker', 'Hygiene Expert', 'Child', 'Cook', 'Health Conscious Person'] },
  { id: 'household_048', name: 'Toilet Paper', category: 'household', roles: ['Bathroom User', 'Household Shopper', 'Practical Person', 'Bulk Buyer', 'Essential User', 'Quality Checker', 'Roll Changer', 'Emergency Preparer'] },
  { id: 'household_049', name: 'Toilet Brush', category: 'household', roles: ['Bathroom Cleaner', 'Hygiene Maintainer', 'Housekeeper', 'Germaphobe', 'Cleanliness Expert', 'Janitor', 'Neat Person', 'Sanitation Worker'] },
  { id: 'household_050', name: 'Hair Dryer', category: 'household', roles: ['Hair Styler', 'Morning Rusher', 'Salon Worker', 'Fashionista', 'Wet Hair Hater', 'Quick Dryer', 'Style Creator', 'Heat User'] },
  { id: 'household_051', name: 'Desk', category: 'household', roles: ['Worker', 'Student', 'Writer', 'Gamer', 'Artist', 'Organizer', 'Home Office User', 'Homework Doer'] },
  { id: 'household_052', name: 'Chair', category: 'household', roles: ['Sitter', 'Worker', 'Relaxer', 'Gamer', 'Reader', 'TV Watcher', 'Student', 'Comfort Seeker'] },
  { id: 'household_053', name: 'Computer', category: 'household', roles: ['User', 'Gamer', 'Worker', 'Student', 'Programmer', 'Content Creator', 'Researcher', 'Tech Support'] },
  { id: 'household_054', name: 'Keyboard', category: 'household', roles: ['Typer', 'Writer', 'Programmer', 'Gamer', 'Student', 'Office Worker', 'Fast Typer', 'Data Enterer'] },
  { id: 'household_055', name: 'Mouse', category: 'household', roles: ['Computer User', 'Gamer', 'Graphic Designer', 'Office Worker', 'Student', 'Clicker', 'Precision User', 'Web Surfer'] },
  { id: 'household_056', name: 'Phone', category: 'household', roles: ['Caller', 'Texter', 'Social Media User', 'Photographer', 'Music Listener', 'App User', 'Emergency Caller', 'Communication Lover'] },
  { id: 'household_057', name: 'Charger', category: 'household', roles: ['Device User', 'Phone Owner', 'Laptop User', 'Forgetful Person', 'Heavy User', 'Traveler', 'Tech Dependent', 'Power Seeker'] },
  { id: 'household_058', name: 'Alarm Clock', category: 'household', roles: ['Early Riser', 'Heavy Sleeper', 'Student', 'Worker', 'Time Keeper', 'Punctual Person', 'Morning Hater', 'Schedule Follower'] },
  { id: 'household_059', name: 'Fan', category: 'household', roles: ['Hot Person', 'Sleeper', 'Energy Saver', 'Air Circulator', 'Summer Lover', 'Cooling Seeker', 'White Noise User', 'Comfort Lover'] },
  { id: 'household_060', name: 'Heater', category: 'household', roles: ['Cold Person', 'Winter Survivor', 'Warmth Seeker', 'Energy User', 'Cozy Lover', 'Temperature Controller', 'Bill Payer', 'Comfort Seeker'] },
  { id: 'household_061', name: 'Air Conditioner', category: 'household', roles: ['Cool Air Seeker', 'Hot Climate Dweller', 'Energy User', 'Summer Survivor', 'Repair Technician', 'Bill Payer', 'Comfort Lover', 'Temperature Controller'] },
  { id: 'household_062', name: 'Window', category: 'household', roles: ['Light Seeker', 'View Enjoyer', 'Fresh Air Lover', 'Cleaner', 'Curtain Hanger', 'Peeker', 'Sun Blocker', 'Weather Watcher'] },
  { id: 'household_063', name: 'Door', category: 'household', roles: ['Enterer', 'Exiter', 'Knocker', 'Locker', 'Unlocker', 'Privacy Seeker', 'Visitor', 'Security Conscious Person'] },
  { id: 'household_064', name: 'Key', category: 'household', roles: ['Homeowner', 'Renter', 'Key Holder', 'Locker', 'Unlocker', 'Forgetful Person', 'Security User', 'Access Seeker'] },
  { id: 'household_065', name: 'Wallet', category: 'household', roles: ['Money Carrier', 'Card User', 'Shopper', 'ID Holder', 'Forgetful Person', 'Pickpocket Target', 'Organized Person', 'Cash User'] },
  { id: 'household_066', name: 'Shoes', category: 'household', roles: ['Walker', 'Runner', 'Fashion Lover', 'Athlete', 'Worker', 'Foot Protector', 'Style Seeker', 'Comfort Lover'] },
  { id: 'household_067', name: 'Socks', category: 'household', roles: ['Foot Warmer', 'Athlete', 'Comfort Seeker', 'Sock Collector', 'Laundry Doer', 'Mismatched Wearer', 'Warm Foot Lover', 'Shoe Wearer'] },
  { id: 'household_068', name: 'Coat', category: 'household', roles: ['Cold Weather Person', 'Winter Dresser', 'Fashionista', 'Warmth Seeker', 'Outdoor Person', 'Weather Protector', 'Layering Expert', 'Season Changer'] },
  { id: 'household_069', name: 'Umbrella', category: 'household', roles: ['Rain Avoider', 'Weather Watcher', 'Dry Keeper', 'Commuter', 'Outdoor Person', 'Sun Blocker', 'Preparedness Person', 'Weather Fighter'] },
  { id: 'household_070', name: 'Backpack', category: 'household', roles: ['Student', 'Hiker', 'Traveler', 'Commuter', 'Carrying Person', 'Organizer', 'Adventure Seeker', 'Heavy Packer'] },
  { id: 'household_071', name: 'Bicycle', category: 'household', roles: ['Cyclist', 'Commuter', 'Exercise Enthusiast', 'Eco-friendly Person', 'Adventure Seeker', 'Child', 'Repair Person', 'Fitness Lover'] },
  { id: 'household_072', name: 'Car Keys', category: 'household', roles: ['Driver', 'Car Owner', 'Commuter', 'Road Tripper', 'Designated Driver', 'Forgetful Person', 'Valet', 'Key Holder'] },
  { id: 'household_073', name: 'Garage', category: 'household', roles: ['Car Parker', 'Storage User', 'Workshop Person', 'Homeowner', 'Organizer', 'Tool User', 'Project Worker', 'Clutter Keeper'] },
  { id: 'household_074', name: 'Batteries', category: 'household', roles: ['Device User', 'Remote Controller', 'Toy Player', 'Emergency Preparer', 'Electronic User', 'Power Provider', 'Gadget Lover', 'Backup Person'] },
  { id: 'household_075', name: 'Light Bulb', category: 'household', roles: ['Light User', 'Electrician', 'Brightness Seeker', 'Energy Saver', 'Homeowner', 'Dark Fighter', 'Replacer', 'Illuminator'] },
  { id: 'household_076', name: 'Smoke Detector', category: 'household', roles: ['Safety Conscious Person', 'Homeowner', 'Fire Fighter', 'Battery Changer', 'Alarm Hearer', 'Life Protector', 'Maintenance Person', 'Security User'] },
  { id: 'household_077', name: 'Carbon Monoxide Detector', category: 'household', roles: ['Safety Expert', 'Homeowner', 'Health Protector', 'Gas User', 'Life Saver', 'Maintenance Person', 'Security Conscious Person', 'Prevention Seeker'] },
  { id: 'household_078', name: 'Router', category: 'household', roles: ['Internet User', 'Tech Person', 'Network Administrator', 'Gamer', 'Streamer', 'Worker', 'Student', 'Connection Seeker'] },
  { id: 'household_079', name: 'Modem', category: 'household', roles: ['Internet User', 'Tech Support', 'Connection Seeker', 'Online Person', 'Network User', 'Service Subscriber', 'Digital Dependent', 'Communication User'] },
  { id: 'household_080', name: 'Printer', category: 'household', roles: ['Document Printer', 'Student', 'Worker', 'Photo Printer', 'Paper User', 'Ink Replacer', 'Office Person', 'Tech User'] },
  { id: 'household_081', name: 'Calendar', category: 'household', roles: ['Organizer', 'Planner', 'Scheduler', 'Busy Person', 'Date Checker', 'Appointment Keeper', 'Time Manager', 'Event Tracker'] },
  { id: 'household_082', name: 'Calendar', category: 'household', roles: ['Time Keeper', 'Schedule Follower', 'Date Tracker', 'Organized Person', 'Busy Professional', 'Student', 'Parent', 'Event Planner'] },
  { id: 'household_083', name: 'Picture Frame', category: 'household', roles: ['Memory Keeper', 'Photo Displayer', 'Decorator', 'Family Person', 'Sentimental Person', 'Gift Giver', 'Artist', 'Memory Lover'] },
  { id: 'household_084', name: 'Vase', category: 'household', roles: ['Flower Lover', 'Decorator', 'Homeowner', 'Beauty Seeker', 'Artist', 'Gift Receiver', 'Nature Lover', 'Style Person'] },
  { id: 'household_085', name: 'Candles', category: 'household', roles: ['Ambiance Creator', 'Romantic Person', 'Relaxer', 'Scent Lover', 'Mood Setter', 'Light Creator', 'Atmosphere Maker', 'Cozy Person'] },
  { id: 'household_086', name: 'Picture', category: 'household', roles: ['Memory Keeper', 'Art Lover', 'Decorator', 'Photographer', 'Family Person', 'Visual Person', 'Wall Decorator', 'Beauty Appreciator'] },
  { id: 'household_087', name: 'Trash Bag', category: 'household', roles: ['Garbage Collector', 'Cleaner', 'Organizer', 'Homeowner', 'Waste Manager', 'Tidy Person', 'Sanitation Worker', 'Clean-up Person'] },
  { id: 'household_088', name: 'First Aid Kit', category: 'household', roles: ['Safety Preparer', 'Parent', 'Caregiver', 'Emergency Responder', 'Health Conscious Person', 'Prepared Person', 'Injury Treater', 'Safety Expert'] },
  { id: 'household_089', name: 'Toolbox', category: 'household', roles: ['Handyperson', 'Fixer', 'DIY Person', 'Repair Expert', 'Builder', 'Organized Person', 'Problem Solver', 'Maintenance Worker'] },
  { id: 'household_090', name: 'Screwdriver', category: 'household', roles: ['Repair Person', 'Handyperson', 'Fixer', 'DIY Enthusiast', 'Assembly Person', 'Tool User', 'Problem Solver', 'Maintenance Expert'] },
  { id: 'household_091', name: 'Hammer', category: 'household', roles: ['Builder', 'Handyperson', 'Repair Expert', 'Construction Worker', 'DIY Person', 'Nail Driver', 'Tool User', 'Project Builder'] },
  { id: 'household_092', name: 'Nails', category: 'household', roles: ['Builder', 'Handyperson', 'Picture Hanger', 'Construction Worker', 'DIY Person', 'Repair Person', 'Project Worker', 'Fastener User'] },
  { id: 'household_093', name: 'Drill', category: 'household', roles: ['Handyperson', 'Builder', 'Repair Expert', 'DIY Enthusiast', 'Construction Worker', 'Hole Maker', 'Power Tool User', 'Project Person'] },
  { id: 'household_094', name: 'Paint', category: 'household', roles: ['Painter', 'Artist', 'Decorator', 'Homeowner', 'DIY Person', 'Color Lover', 'Beautifier', 'Wall Changer'] },
  { id: 'household_095', name: 'Paintbrush', category: 'household', roles: ['Painter', 'Artist', 'Decorator', 'Creative Person', 'Homeowner', 'Color Applier', 'Detail Worker', 'Brush User'] },
  { id: 'household_096', name: 'Glue', category: 'household', roles: ['Crafter', 'Repair Person', 'Student', 'Artist', 'Fixer', 'Project Worker', 'Sticker', 'Bond Maker'] },
  { id: 'household_097', name: 'Scissors', category: 'household', roles: ['Cutter', 'Crafter', 'Student', 'Office Worker', 'Fabric User', 'Paper Worker', 'Trimmer', 'Sharp Tool User'] },
  { id: 'household_098', name: 'Tape', category: 'household', roles: ['Sticker', 'Packager', 'Repair Person', 'Student', 'Office Worker', 'Crafter', 'Sealer', 'Holder'] },
  { id: 'household_099', name: 'Ruler', category: 'household', roles: ['Measurer', 'Student', 'Artist', 'Architect', 'Crafter', 'Precise Person', 'Line Drawer', 'Length Checker'] },
  { id: 'household_100', name: 'Measuring Cup', category: 'household', roles: ['Baker', 'Cook', 'Recipe Follower', 'Precise Cooker', 'Kitchen User', 'Ingredient Measurer', 'Liquid Measurer', 'Cooking Helper'] },
  { id: 'household_101', name: 'Mixing Bowl', category: 'household', roles: ['Baker', 'Cook', 'Recipe Maker', 'Ingredient Combiner', 'Kitchen User', 'Salad Maker', 'Batter Mixer', 'Food Preparer'] },
  { id: 'household_102', name: 'Spatula', category: 'household', roles: ['Cook', 'Baker', 'Pancake Flipper', 'Scraper', 'Kitchen Helper', 'Mixing Person', 'Food Turner', 'Batter User'] },
  { id: 'household_103', name: 'Whisk', category: 'household', roles: ['Baker', 'Egg Beater', 'Cream Whipper', 'Mixer', 'Chef', 'Sauce Maker', 'Batter Beater', 'Kitchen User'] },
  { id: 'household_104', name: 'Cutting Board', category: 'household', roles: ['Cook', 'Chef', 'Vegetable Chopper', 'Food Preparer', 'Meal Maker', 'Kitchen Worker', 'Knife User', 'Ingredient Prepper'] },
  { id: 'household_105', name: 'Colander', category: 'household', roles: ['Cook', 'Pasta Maker', 'Vegetable Washer', 'Drainer', 'Kitchen User', 'Food Preparer', 'Strainer User', 'Water Remover'] },
  // hobbies
  {
    id: 'hobby_001',
    name: 'Photography',
    category: 'hobbies',
    roles: ['Photographer', 'Model', 'Photo Editor', 'Camera Operator', 'Art Director', 'Studio Assistant', 'Client', 'Critic']
  },
  {
    id: 'hobby_002',
    name: 'Gardening',
    category: 'hobbies',
    roles: ['Gardener', 'Plant Expert', 'Landscape Designer', 'Nursery Worker', 'Botanist', 'Composter', 'Seed Collector', 'Greenhouse Manager']
  },
  {
    id: 'hobby_003',
    name: 'Cooking',
    category: 'hobbies',
    roles: ['Chef', 'Sous Chef', 'Food Critic', 'Recipe Developer', 'Kitchen Assistant', 'Ingredient Supplier', 'Restaurant Owner', 'Culinary Student']
  },
  {
    id: 'hobby_004',
    name: 'Painting',
    category: 'hobbies',
    roles: ['Artist', 'Art Teacher', 'Gallery Owner', 'Art Critic', 'Canvas Preparer', 'Paint Supplier', 'Museum Curator', 'Art Collector']
  },
  {
    id: 'hobby_005',
    name: 'Writing',
    category: 'hobbies',
    roles: ['Author', 'Editor', 'Publisher', 'Literary Agent', 'Book Reviewer', 'Copywriter', 'Journalist', 'Poet']
  },
  {
    id: 'hobby_006',
    name: 'Knitting',
    category: 'hobbies',
    roles: ['Knitter', 'Yarn Shop Owner', 'Pattern Designer', 'Yarn Supplier', 'Knitting Teacher', 'Sweater Model', 'Craft Fair Vendor', 'Textile Artist']
  },
  {
    id: 'hobby_007',
    name: 'Woodworking',
    category: 'hobbies',
    roles: ['Carpenter', 'Woodworker', 'Furniture Maker', 'Tool Supplier', 'Workshop Owner', 'Wood Carver', 'Cabinet Maker', 'Restoration Expert']
  },
  {
    id: 'hobby_008',
    name: 'Pottery',
    category: 'hobbies',
    roles: ['Potter', 'Ceramics Teacher', 'Kiln Operator', 'Clay Supplier', 'Gallery Owner', 'Sculptor', 'Ceramics Artist', 'Pottery Wheel Technician']
  },
  {
    id: 'hobby_009',
    name: 'Bird Watching',
    category: 'hobbies',
    roles: ['Bird Watcher', 'Ornithologist', 'Guide', 'Binoculars Supplier', 'Nature Photographer', 'Wildlife Researcher', 'Park Ranger', 'Bird Banding Expert']
  },
  {
    id: 'hobby_010',
    name: 'Model Trains',
    category: 'hobbies',
    roles: ['Model Builder', 'Track Layer', 'Model Supplier', 'Layout Designer', 'Train Enthusiast', 'Model Painter', 'Electronics Technician', 'Club President']
  },
  {
    id: 'hobby_011',
    name: 'Coin Collecting',
    category: 'hobbies',
    roles: ['Numismatist', 'Coin Dealer', 'Appraiser', 'Coin Supplier', 'Museum Curator', 'Coin Cleaner', 'Collector', 'Auctioneer']
  },
  {
    id: 'hobby_012',
    name: 'Stamp Collecting',
    category: 'hobbies',
    roles: ['Philatelist', 'Stamp Dealer', 'Postage Stamp Expert', 'Album Organizer', 'Stamp Appraiser', 'Post Office Worker', 'Collector', 'Auction House Owner']
  },
  {
    id: 'hobby_013',
    name: 'Astronomy',
    category: 'hobbies',
    roles: ['Astronomer', 'Telescope Operator', 'Planetarium Guide', 'Stargazer', 'Observatory Technician', 'Astrophotographer', 'Science Educator', 'Meteorologist']
  },
  {
    id: 'hobby_014',
    name: 'Beekeeping',
    category: 'hobbies',
    roles: ['Beekeeper', 'Hive Inspector', 'Honey Producer', 'Bee Supplier', 'Apiary Manager', 'Pollination Expert', 'Honey Taster', 'Bee Research Scientist']
  },
  {
    id: 'hobby_015',
    name: 'Calligraphy',
    category: 'hobbies',
    roles: ['Calligrapher', 'Ink Supplier', 'Paper Specialist', 'Lettering Artist', 'Script Teacher', 'Invitation Designer', 'Brush Maker', 'Art Conservator']
  },
  {
    id: 'hobby_016',
    name: 'Sewing',
    category: 'hobbies',
    roles: ['Seamstress', 'Tailor', 'Fabric Supplier', 'Pattern Maker', 'Fashion Designer', 'Costume Designer', 'Quilt Maker', 'Textile Artist']
  },
  {
    id: 'hobby_017',
    name: 'Jewelry Making',
    category: 'hobbies',
    roles: ['Jeweler', 'Gemologist', 'Metal Smith', 'Bead Supplier', 'Jewelry Designer', 'Goldsmith', 'Silversmith', 'Gem Cutter']
  },
  {
    id: 'hobby_018',
    name: 'Home Brewing',
    category: 'hobbies',
    roles: ['Brewer', 'Brewmaster', 'Hop Supplier', 'Yeast Culturist', 'Bottle Filler', 'Beer Taster', 'Brewery Owner', 'Homebrew Club President']
  },
  {
    id: 'hobby_019',
    name: 'Wine Making',
    category: 'hobbies',
    roles: ['Winemaker', 'Vineyard Owner', 'Grape Grower', 'Wine Taster', 'Bottling Specialist', 'Cork Supplier', 'Wine Critic', 'Cellar Master']
  },
  {
    id: 'hobby_020',
    name: 'Chess',
    category: 'hobbies',
    roles: ['Chess Player', 'Chess Master', 'Tournament Organizer', 'Chess Teacher', 'Board Supplier', 'Clock Operator', 'Arbiter', 'Chess Club President']
  },
  {
    id: 'hobby_021',
    name: 'Bridge',
    category: 'hobbies',
    roles: ['Bridge Player', 'Bridge Teacher', 'Tournament Director', 'Card Supplier', 'Scorekeeper', 'Bridge Club President', 'Card Sharp', 'Bridge Columnist']
  },
  {
    id: 'hobby_022',
    name: 'Sudoku',
    category: 'hobbies',
    roles: ['Puzzle Solver', 'Puzzle Creator', 'Puzzle Editor', 'Newspaper Publisher', 'Math Teacher', 'Logic Expert', 'Competition Organizer', 'Puzzle Book Author']
  },
  {
    id: 'hobby_023',
    name: 'Crossword Puzzles',
    category: 'hobbies',
    roles: ['Puzzle Solver', 'Puzzle Creator', 'Editor', 'Newspaper Publisher', 'Word Expert', 'Competition Judge', 'Puzzle Book Author', 'Linguist']
  },
  {
    id: 'hobby_024',
    name: 'Magic Tricks',
    category: 'hobbies',
    roles: ['Magician', 'Magic Teacher', 'Prop Builder', 'Illusionist', 'Stage Assistant', 'Magic Shop Owner', 'Mentalist', 'Escape Artist']
  },
  {
    id: 'hobby_025',
    name: 'Juggling',
    category: 'hobbies',
    roles: ['Juggler', 'Circus Performer', 'Prop Supplier', 'Performance Coach', 'Street Performer', 'Festival Organizer', 'Clown', 'Acrobat']
  },
  {
    id: 'hobby_026',
    name: 'Origami',
    category: 'hobbies',
    roles: ['Origami Artist', 'Paper Folder', 'Paper Supplier', 'Art Teacher', 'Sculptor', 'Exhibit Curator', 'Book Author', 'Paper Crafts Expert']
  },
  {
    id: 'hobby_027',
    name: 'Scrapbooking',
    category: 'hobbies',
    roles: ['Scrapbooker', 'Craft Supply Seller', 'Album Designer', 'Photo Organizer', 'Memory Keeper', 'Craft Teacher', 'Rubber Stamp Artist', 'Digital Scrapbooker']
  },
  {
    id: 'hobby_028',
    name: 'Model Building',
    category: 'hobbies',
    roles: ['Model Builder', 'Kit Supplier', 'Scale Model Expert', 'Paint Specialist', 'Detail Painter', 'Model Display Case Maker', 'Competition Judge', 'Model Club President']
  },
  {
    id: 'hobby_029',
    name: 'RC Cars',
    category: 'hobbies',
    roles: ['RC Driver', 'Model Builder', 'Track Owner', 'Battery Specialist', 'Speed Controller Expert', 'Race Organizer', 'Tire Supplier', 'RC Club President']
  },
  {
    id: 'hobby_030',
    name: 'Drone Flying',
    category: 'hobbies',
    roles: ['Drone Pilot', 'Drone Builder', 'Aerial Photographer', 'Drone Instructor', 'Battery Specialist', 'Propeller Supplier', 'Race Organizer', 'FAA Regulator']
  },
  {
    id: 'hobby_031',
    name: 'Metal Detecting',
    category: 'hobbies',
    roles: ['Treasure Hunter', 'Detector Supplier', 'Archaeologist', 'Coin Expert', 'Beach Comber', 'Relic Hunter', 'Metal Detector Technician', 'Treasure Map Maker']
  },
  {
    id: 'hobby_032',
    name: 'Fossil Hunting',
    category: 'hobbies',
    roles: ['Paleontologist', 'Fossil Collector', 'Geologist', 'Dig Site Manager', 'Fossil Preparer', 'Museum Curator', 'Rock Hound', 'Fossil Dealer']
  },
  {
    id: 'hobby_033',
    name: 'Rock Climbing',
    category: 'hobbies',
    roles: ['Climber', 'Route Setter', 'Gear Supplier', 'Climbing Instructor', 'Belayer', 'Cliff Photographer', 'Rock Climbing Guide', 'Gym Owner']
  },
  {
    id: 'hobby_034',
    name: 'Scuba Diving',
    category: 'hobbies',
    roles: ['Diver', 'Dive Instructor', 'Equipment Supplier', 'Boat Captain', 'Marine Biologist', 'Underwater Photographer', 'Wreck Diver', 'Dive Shop Owner']
  },
  {
    id: 'hobby_035',
    name: 'Skiing',
    category: 'hobbies',
    roles: ['Skier', 'Ski Instructor', 'Ski Patrol', 'Lift Operator', 'Ski Shop Owner', 'Snowboarder', 'Mountain Guide', 'Ski Photographer']
  },
  {
    id: 'hobby_036',
    name: 'Snowboarding',
    category: 'hobbies',
    roles: ['Snowboarder', 'Board Builder', 'Ski Instructor', 'Ski Patrol', 'Lift Operator', 'Snowboard Shop Owner', 'Mountain Guide', 'Snow Photographer']
  },
  {
    id: 'hobby_037',
    name: 'Ice Skating',
    category: 'hobbies',
    roles: ['Skater', 'Figure Skater', 'Hockey Player', 'Rink Manager', 'Skate Sharpener', 'Ice Resurfacer', 'Coach', 'Figure Skating Judge']
  },
  {
    id: 'hobby_038',
    name: 'Archery',
    category: 'hobbies',
    roles: ['Archer', 'Bow Maker', 'Arrow Supplier', 'Target Builder', 'Archery Instructor', 'Competition Judge', 'Bow Hunter', 'Archery Club President']
  },
  {
    id: 'hobby_039',
    name: 'Fishing',
    category: 'hobbies',
    roles: ['Fisherman', 'Fish Guide', 'Tackle Supplier', 'Boat Captain', 'Fish Cleaner', 'Aquarium Owner', 'Fish Biologist', 'Fishing Tournament Organizer']
  },
  {
    id: 'hobby_040',
    name: 'Camping',
    category: 'hobbies',
    roles: ['Camper', 'Tent Supplier', 'Campground Host', 'Trail Guide', 'Campfire Storyteller', 'Outdoor Photographer', 'Survival Expert', 'RV Dealer']
  },
  {
    id: 'hobby_041',
    name: 'Hiking',
    category: 'hobbies',
    roles: ['Hiker', 'Trail Guide', 'Boot Supplier', 'Park Ranger', 'Trail Photographer', 'Map Maker', 'Backpack Designer', 'Outdoor Gear Expert']
  },
  {
    id: 'hobby_042',
    name: 'Cycling',
    category: 'hobbies',
    roles: ['Cyclist', 'Bike Mechanic', 'Bike Shop Owner', 'Tour Guide', 'Bike Photographer', 'Frame Builder', 'Race Organizer', 'Bike Commuter']
  },
  {
    id: 'hobby_043',
    name: 'Motorcycling',
    category: 'hobbies',
    roles: ['Motorcyclist', 'Mechanic', 'Bike Shop Owner', 'Tour Guide', 'Rider Photographer', 'Frame Builder', 'Race Organizer', 'Motorcycle Commuter']
  },
  {
    id: 'hobby_044',
    name: 'Sailing',
    category: 'hobbies',
    roles: ['Sailor', 'Boat Builder', 'Marina Owner', 'Sailing Instructor', 'Race Organizer', 'Navigation Expert', 'Weather Forecaster', 'Boat Captain']
  },
  {
    id: 'hobby_045',
    name: 'Surfing',
    category: 'hobbies',
    roles: ['Surfer', 'Board Builder', 'Surf Instructor', 'Wave Photographer', 'Beach Lifeguard', 'Surf Shop Owner', 'Wetsuit Designer', 'Surf Competition Judge']
  },
  {
    id: 'hobby_046',
    name: 'Kayaking',
    category: 'hobbies',
    roles: ['Kayaker', 'Paddle Supplier', 'River Guide', 'Kayak Instructor', 'Water Photographer', 'Kayak Builder', 'River Ranger', 'Whitewater Rafting Guide']
  },
  {
    id: 'hobby_047',
    name: 'Meditation',
    category: 'hobbies',
    roles: ['Meditation Teacher', 'Yoga Instructor', 'Mindfulness Coach', 'Retreat Organizer', 'Spa Owner', 'Wellness Expert', 'Breathing Technique Specialist', 'Meditation App Developer']
  },
  {
    id: 'hobby_048',
    name: 'Yoga',
    category: 'hobbies',
    roles: ['Yoga Teacher', 'Studio Owner', 'Mat Supplier', 'Wellness Coach', 'Retreat Organizer', 'Pose Expert', 'Meditation Guide', 'Yoga Photographer']
  },
  {
    id: 'hobby_049',
    name: 'Tai Chi',
    category: 'hobbies',
    roles: ['Tai Chi Master', 'Martial Arts Teacher', 'Wellness Coach', 'Park Instructor', 'Movement Specialist', 'Balance Expert', 'Meditation Guide', 'Traditional Arts Preserver']
  },
  {
    id: 'hobby_050',
    name: 'Martial Arts',
    category: 'hobbies',
    roles: ['Martial Artist', 'Sensei', 'Dojo Owner', 'Belt Rank Examiner', 'Self Defense Instructor', 'Competition Judge', 'Martial Arts Photographer', 'Weapons Specialist']
  },
  {
    id: 'hobby_051',
    name: 'Rubik\'s Cube Solving',
    category: 'hobbies',
    roles: ['Solver', 'Speedcuber', 'Instructor', 'Competition Organizer', 'Cube Designer', 'Puzzle Enthusiast', 'Event Judge', 'Community Leader']
  },
  {
    id: 'hobby_052',
    name: 'Chess',
    category: 'hobbies',
    roles: ['Player', 'Coach', 'Tournament Organizer', 'Puzzle Creator', 'Opening Theorist', 'Endgame Specialist', 'Stream Commentator', 'Chess Author']
  },
  // countries
  {
    id: 'countries_001',
    name: 'United States',
    category: 'countries',
    roles: ['President', 'Congress Member', 'Supreme Court Justice', 'Military General', 'Business Tycoon', 'Hollywood Star', 'Professional Athlete', 'Tech Entrepreneur']
  },
  {
    id: 'countries_002',
    name: 'United Kingdom',
    category: 'countries',
    roles: ['Prime Minister', 'Member of Parliament', 'Royal Family Member', 'Military Officer', 'Business Leader', 'Actor', 'Football Player', 'Author']
  },
  {
    id: 'countries_003',
    name: 'China',
    category: 'countries',
    roles: ['President', 'Premier', 'Military Commander', 'Business Magnate', 'Film Star', 'Olympic Athlete', 'Tech Innovator', 'Ancient Philosopher']
  },
  {
    id: 'countries_004',
    name: 'India',
    category: 'countries',
    roles: ['Prime Minister', 'President', 'Military Chief', 'Bollywood Actor', 'Cricket Player', 'Business Leader', 'Spiritual Guru', 'Scientist']
  },
  {
    id: 'countries_005',
    name: 'Japan',
    category: 'countries',
    roles: ['Prime Minister', 'Emperor', 'Military Leader', 'Business Executive', 'Anime Creator', 'Sumo Wrestler', 'Tech Pioneer', 'Samurai']
  },
  {
    id: 'countries_006',
    name: 'Germany',
    category: 'countries',
    roles: ['Chancellor', 'President', 'Military General', 'Business CEO', 'Film Director', 'Soccer Player', 'Engineer', 'Philosopher']
  },
  {
    id: 'countries_007',
    name: 'France',
    category: 'countries',
    roles: ['President', 'Prime Minister', 'Military Officer', 'Fashion Designer', 'Film Actor', 'Chef', 'Artist', 'Philosopher']
  },
  {
    id: 'countries_008',
    name: 'Brazil',
    category: 'countries',
    roles: ['President', 'Military Leader', 'Soccer Player', 'Carnival Dancer', 'Business Leader', 'Amazon Explorer', 'Surfer', 'Samba Musician']
  },
  {
    id: 'countries_009',
    name: 'Russia',
    category: 'countries',
    roles: ['President', 'Prime Minister', 'Military General', 'Ballet Dancer', 'Chess Grandmaster', 'Cosmonaut', 'Business Oligarch', 'Author']
  },
  {
    id: 'countries_010',
    name: 'Australia',
    category: 'countries',
    roles: ['Prime Minister', 'Military Commander', 'Cricket Player', 'Surfer', 'Aboriginal Elder', 'Film Actor', 'Scientist', 'Bushranger']
  },
  {
    id: 'countries_011',
    name: 'Canada',
    category: 'countries',
    roles: ['Prime Minister', 'Governor General', 'Military Officer', 'Hockey Player', 'Mountie', 'Film Actor', 'Business Leader', 'Indigenous Chief']
  },
  {
    id: 'countries_012',
    name: 'Mexico',
    category: 'countries',
    roles: ['President', 'Military General', 'Soccer Player', 'Mariachi Musician', 'Business Leader', 'Film Actor', 'Chef', 'Revolutionary']
  },
  // jobs
  {
    id: 'jobs_001',
    name: 'Doctor',
    category: 'jobs',
    roles: ['Surgeon', 'General Practitioner', 'Pediatrician', 'Psychiatrist', 'Nurse', 'Pharmacist', 'Medical Researcher', 'Hospital Administrator']
  },
  {
    id: 'jobs_002',
    name: 'Teacher',
    category: 'jobs',
    roles: ['Elementary Teacher', 'High School Teacher', 'Professor', 'Principal', 'Substitute Teacher', 'Tutor', 'School Counselor', 'Librarian']
  },
  {
    id: 'jobs_003',
    name: 'Engineer',
    category: 'jobs',
    roles: ['Software Engineer', 'Mechanical Engineer', 'Civil Engineer', 'Electrical Engineer', 'Chemical Engineer', 'Aerospace Engineer', 'Project Manager', 'Quality Assurance']
  },
  {
    id: 'jobs_004',
    name: 'Chef',
    category: 'jobs',
    roles: ['Head Chef', 'Sous Chef', 'Pastry Chef', 'Line Cook', 'Food Critic', 'Restaurant Owner', 'Personal Chef', 'Culinary Instructor']
  },
  {
    id: 'jobs_005',
    name: 'Police Officer',
    category: 'jobs',
    roles: ['Patrol Officer', 'Detective', 'SWAT Team Member', 'Chief of Police', 'Traffic Cop', 'K-9 Handler', 'Forensic Analyst', 'Community Liaison']
  },
  {
    id: 'jobs_006',
    name: 'Firefighter',
    category: 'jobs',
    roles: ['Fire Captain', 'Paramedic', 'Arson Investigator', 'Search and Rescue', 'Fire Prevention Officer', 'Hazmat Technician', 'Training Instructor', 'Fire Marshal']
  },
  {
    id: 'jobs_007',
    name: 'Pilot',
    category: 'jobs',
    roles: ['Commercial Pilot', 'Airline Captain', 'Co-pilot', 'Flight Instructor', 'Air Traffic Controller', 'Military Pilot', 'Test Pilot', 'Drone Operator']
  },
  {
    id: 'jobs_008',
    name: 'Actor',
    category: 'jobs',
    roles: ['Film Actor', 'Theater Actor', 'Voice Actor', 'Stunt Performer', 'Director', 'Producer', 'Casting Director', 'Acting Coach']
  },
  {
    id: 'jobs_009',
    name: 'Musician',
    category: 'jobs',
    roles: ['Singer', 'Guitarist', 'Pianist', 'Drummer', 'Conductor', 'Music Producer', 'Songwriter', 'Music Teacher']
  },
  {
    id: 'jobs_010',
    name: 'Artist',
    category: 'jobs',
    roles: ['Painter', 'Sculptor', 'Graphic Designer', 'Photographer', 'Illustrator', 'Art Teacher', 'Gallery Owner', 'Art Critic']
  },
  {
    id: 'jobs_011',
    name: 'Scientist',
    category: 'jobs',
    roles: ['Research Scientist', 'Lab Technician', 'Professor', 'Field Researcher', 'Data Analyst', 'Environmental Scientist', 'Biologist', 'Chemist']
  },
  {
    id: 'jobs_012',
    name: 'Lawyer',
    category: 'jobs',
    roles: ['Criminal Lawyer', 'Corporate Lawyer', 'Judge', 'Prosecutor', 'Defense Attorney', 'Legal Assistant', 'Paralegal', 'Law Professor']
  },
  // food
  {
    id: 'food_001',
    name: 'Pizza',
    category: 'food',
    roles: ['Pizza Chef', 'Delivery Driver', 'Restaurant Owner', 'Dough Maker', 'Topping Specialist', 'Food Critic', 'Regular Customer', 'Pizza Lover']
  },
  {
    id: 'food_002',
    name: 'Burger',
    category: 'food',
    roles: ['Burger Flipper', 'Fast Food Worker', 'Grill Master', 'Restaurant Manager', 'Food Blogger', 'Health Inspector', 'Competitive Eater', 'Burger Enthusiast']
  },
  {
    id: 'food_003',
    name: 'Sushi',
    category: 'food',
    roles: ['Sushi Chef', 'Fish Cutter', 'Restaurant Owner', 'Sake Sommelier', 'Food Critic', 'Regular Customer', 'Wasabi Expert', 'Japanese Cuisine Lover']
  },
  {
    id: 'food_004',
    name: 'Pasta',
    category: 'food',
    roles: ['Pasta Maker', 'Italian Chef', 'Restaurant Owner', 'Sauce Specialist', 'Food Critic', 'Pasta Enthusiast', 'Culinary Student', 'Italian Immigrant']
  },
  {
    id: 'food_005',
    name: 'Chocolate',
    category: 'food',
    roles: ['Chocolatier', 'Chocolate Maker', 'Candy Factory Worker', 'Pastry Chef', 'Chocolate Taster', 'Food Scientist', 'Chocolate Historian', 'Sweet Tooth']
  },
  {
    id: 'food_006',
    name: 'Coffee',
    category: 'food',
    roles: ['Barista', 'Coffee Roaster', 'Café Owner', 'Coffee Taster', 'Latte Artist', 'Coffee Bean Farmer', 'Espresso Expert', 'Morning Person']
  },
  {
    id: 'food_007',
    name: 'Ice Cream',
    category: 'food',
    roles: ['Ice Cream Scooper', 'Flavor Creator', 'Ice Cream Truck Driver', 'Dessert Chef', 'Food Critic', 'Child', 'Summer Enthusiast', 'Cone Specialist']
  },
  {
    id: 'food_008',
    name: 'Tacos',
    category: 'food',
    roles: ['Taco Chef', 'Street Vendor', 'Restaurant Owner', 'Salsa Maker', 'Food Critic', 'Taco Tuesday Regular', 'Mexican Cuisine Expert', 'Spice Lover']
  },
  {
    id: 'food_009',
    name: 'Steak',
    category: 'food',
    roles: ['Grill Master', 'Butcher', 'Steakhouse Owner', 'Meat Cutter', 'Food Critic', 'BBQ Enthusiast', 'Rare Meat Lover', 'Cowboy']
  },
  {
    id: 'food_010',
    name: 'Cake',
    category: 'food',
    roles: ['Baker', 'Cake Decorator', 'Pastry Chef', 'Wedding Planner', 'Birthday Child', 'Food Photographer', 'Sugar Artist', 'Dessert Lover']
  },
  {
    id: 'food_011',
    name: 'Wine',
    category: 'food',
    roles: ['Sommelier', 'Wine Maker', 'Vineyard Owner', 'Wine Taster', 'Restaurant Owner', 'Wine Critic', 'Grape Grower', 'Connoisseur']
  },
  {
    id: 'food_012',
    name: 'Bread',
    category: 'food',
    roles: ['Baker', 'Bread Maker', 'Bakery Owner', 'Dough Kneader', 'Bread Critic', 'Sandwich Artist', 'Gluten Expert', 'Morning Baker']
  },
  // animals
  {
    id: 'animals_001',
    name: 'Dog',
    category: 'animals',
    roles: ['Veterinarian', 'Dog Trainer', 'Pet Owner', 'Breeder', 'Groomer', 'Animal Shelter Worker', 'K-9 Police Officer', 'Dog Walker']
  },
  {
    id: 'animals_002',
    name: 'Cat',
    category: 'animals',
    roles: ['Veterinarian', 'Cat Owner', 'Breeder', 'Groomer', 'Animal Behaviorist', 'Cat Café Owner', 'Feline Photographer', 'Cat Lover']
  },
  {
    id: 'animals_003',
    name: 'Horse',
    category: 'animals',
    roles: ['Rider', 'Trainer', 'Farrier', 'Stable Owner', 'Veterinarian', 'Jockey', 'Cowboy', 'Horse Breeder']
  },
  {
    id: 'animals_004',
    name: 'Elephant',
    category: 'animals',
    roles: ['Zookeeper', 'Trainer', 'Veterinarian', 'Conservationist', 'Safari Guide', 'Circus Performer', 'Poacher Hunter', 'Elephant Researcher']
  },
  {
    id: 'animals_005',
    name: 'Lion',
    category: 'animals',
    roles: ['Zookeeper', 'Trainer', 'Veterinarian', 'Safari Guide', 'Lion Tamer', 'Conservationist', 'Big Cat Expert', 'Zoo Director']
  },
  {
    id: 'animals_006',
    name: 'Monkey',
    category: 'animals',
    roles: ['Zookeeper', 'Trainer', 'Veterinarian', 'Primate Researcher', 'Animal Behaviorist', 'Jungle Guide', 'Circus Performer', 'Monkey Photographer']
  },
  {
    id: 'animals_007',
    name: 'Bird',
    category: 'animals',
    roles: ['Ornithologist', 'Bird Watcher', 'Veterinarian', 'Bird Trainer', 'Aviary Keeper', 'Falconer', 'Bird Photographer', 'Songbird Expert']
  },
  {
    id: 'animals_008',
    name: 'Fish',
    category: 'animals',
    roles: ['Aquarium Owner', 'Fish Breeder', 'Marine Biologist', 'Fisherman', 'Aquarium Cleaner', 'Fish Veterinarian', 'Diver', 'Sushi Chef']
  },
  {
    id: 'animals_009',
    name: 'Snake',
    category: 'animals',
    roles: ['Herpetologist', 'Snake Handler', 'Veterinarian', 'Zoo Keeper', 'Antidote Researcher', 'Snake Charmer', 'Reptile Photographer', 'Conservationist']
  },
  {
    id: 'animals_010',
    name: 'Bear',
    category: 'animals',
    roles: ['Zookeeper', 'Wildlife Biologist', 'Bear Trainer', 'Park Ranger', 'Conservationist', 'Bear Hunter', 'Bear Photographer', 'Forest Guide']
  },
  {
    id: 'animals_011',
    name: 'Panda',
    category: 'animals',
    roles: ['Zookeeper', 'Conservationist', 'Panda Researcher', 'Veterinarian', 'Bamboo Farmer', 'Panda Trainer', 'Zoo Director', 'Chinese Official']
  },
  {
    id: 'animals_012',
    name: 'Dolphin',
    category: 'animals',
    roles: ['Marine Biologist', 'Trainer', 'Veterinarian', 'Aquarium Owner', 'Diver', 'Oceanographer', 'Dolphin Researcher', 'Swim Instructor']
  },
  // Additional countries
  {
    id: 'countries_013',
    name: 'Italy',
    category: 'countries',
    roles: ['Prime Minister', 'President', 'Fashion Designer', 'Chef', 'Film Director', 'Opera Singer', 'Football Player', 'Artist']
  },
  {
    id: 'countries_014',
    name: 'Spain',
    category: 'countries',
    roles: ['Prime Minister', 'King', 'Flamenco Dancer', 'Bullfighter', 'Chef', 'Football Player', 'Artist', 'Explorer']
  },
  {
    id: 'countries_015',
    name: 'South Korea',
    category: 'countries',
    roles: ['President', 'K-pop Star', 'Film Director', 'Tech Entrepreneur', 'Taekwondo Master', 'Chef', 'Business Leader', 'Scientist']
  },
  {
    id: 'countries_016',
    name: 'Argentina',
    category: 'countries',
    roles: ['President', 'Football Legend', 'Tango Dancer', 'Gaucho', 'Chef', 'Wine Maker', 'Business Leader', 'Scientist']
  },
  {
    id: 'countries_017',
    name: 'Netherlands',
    category: 'countries',
    roles: ['Prime Minister', 'King', 'Cyclist', 'Tulip Farmer', 'Painter', 'Engineer', 'Business Leader', 'Scientist']
  },
  {
    id: 'countries_018',
    name: 'Sweden',
    category: 'countries',
    roles: ['Prime Minister', 'King', 'IKEA Founder', 'Musician', 'Engineer', 'Athlete', 'Chef', 'Designer']
  },
  {
    id: 'countries_019',
    name: 'Norway',
    category: 'countries',
    roles: ['Prime Minister', 'King', 'Viking', 'Explorer', 'Oil Executive', 'Athlete', 'Chef', 'Engineer']
  },
  {
    id: 'countries_020',
    name: 'Denmark',
    category: 'countries',
    roles: ['Prime Minister', 'Queen', 'Designer', 'Chef', 'Engineer', 'Athlete', 'Business Leader', 'Scientist']
  },
  {
    id: 'countries_021',
    name: 'Finland',
    category: 'countries',
    roles: ['President', 'Prime Minister', 'Sauna Expert', 'Designer', 'Engineer', 'Athlete', 'Musician', 'Chef']
  },
  {
    id: 'countries_022',
    name: 'Switzerland',
    category: 'countries',
    roles: ['President', 'Banker', 'Watchmaker', 'Chef', 'Engineer', 'Athlete', 'Business Leader', 'Scientist']
  },
  {
    id: 'countries_023',
    name: 'Austria',
    category: 'countries',
    roles: ['Chancellor', 'Composer', 'Chef', 'Engineer', 'Athlete', 'Business Leader', 'Scientist', 'Artist']
  },
  {
    id: 'countries_024',
    name: 'Belgium',
    category: 'countries',
    roles: ['Prime Minister', 'King', 'Chocolate Maker', 'Chef', 'Engineer', 'Athlete', 'Business Leader', 'Scientist']
  },
  {
    id: 'countries_025',
    name: 'Portugal',
    category: 'countries',
    roles: ['Prime Minister', 'President', 'Explorer', 'Chef', 'Football Player', 'Engineer', 'Business Leader', 'Scientist']
  },
  {
    id: 'countries_026',
    name: 'Greece',
    category: 'countries',
    roles: ['Prime Minister', 'Philosopher', 'Chef', 'Athlete', 'Business Leader', 'Scientist', 'Artist', 'Historian']
  },
  {
    id: 'countries_027',
    name: 'Turkey',
    category: 'countries',
    roles: ['President', 'Chef', 'Business Leader', 'Engineer', 'Athlete', 'Scientist', 'Artist', 'Historian']
  },
  {
    id: 'countries_028',
    name: 'Egypt',
    category: 'countries',
    roles: ['President', 'Pharaoh', 'Archaeologist', 'Engineer', 'Business Leader', 'Scientist', 'Artist', 'Historian']
  },
  {
    id: 'countries_029',
    name: 'South Africa',
    category: 'countries',
    roles: ['President', 'Nelson Mandela', 'Athlete', 'Business Leader', 'Engineer', 'Scientist', 'Artist', 'Chef']
  },
  {
    id: 'countries_030',
    name: 'Nigeria',
    category: 'countries',
    roles: ['President', 'Business Leader', 'Athlete', 'Engineer', 'Scientist', 'Artist', 'Chef', 'Musician']
  },
  {
    id: 'countries_031',
    name: 'Kenya',
    category: 'countries',
    roles: ['President', 'Athlete', 'Safari Guide', 'Business Leader', 'Engineer', 'Scientist', 'Artist', 'Chef']
  },
  {
    id: 'countries_032',
    name: 'Morocco',
    category: 'countries',
    roles: ['King', 'Chef', 'Business Leader', 'Engineer', 'Athlete', 'Scientist', 'Artist', 'Historian']
  },
  {
    id: 'countries_033',
    name: 'Thailand',
    category: 'countries',
    roles: ['Prime Minister', 'King', 'Chef', 'Business Leader', 'Engineer', 'Athlete', 'Scientist', 'Artist']
  },
  {
    id: 'countries_034',
    name: 'Vietnam',
    category: 'countries',
    roles: ['President', 'Chef', 'Business Leader', 'Engineer', 'Athlete', 'Scientist', 'Artist', 'Historian']
  },
  {
    id: 'countries_035',
    name: 'Indonesia',
    category: 'countries',
    roles: ['President', 'Chef', 'Business Leader', 'Engineer', 'Athlete', 'Scientist', 'Artist', 'Historian']
  },
  {
    id: 'countries_036',
    name: 'Philippines',
    category: 'countries',
    roles: ['President', 'Chef', 'Business Leader', 'Engineer', 'Athlete', 'Scientist', 'Artist', 'Musician']
  },
  {
    id: 'countries_037',
    name: 'New Zealand',
    category: 'countries',
    roles: ['Prime Minister', 'Athlete', 'Chef', 'Business Leader', 'Engineer', 'Scientist', 'Artist', 'Explorer']
  },
  {
    id: 'countries_038',
    name: 'Ireland',
    category: 'countries',
    roles: ['Taoiseach', 'Musician', 'Writer', 'Athlete', 'Business Leader', 'Engineer', 'Scientist', 'Chef']
  },
  {
    id: 'countries_039',
    name: 'Poland',
    category: 'countries',
    roles: ['President', 'Prime Minister', 'Business Leader', 'Engineer', 'Athlete', 'Scientist', 'Artist', 'Chef']
  },
  {
    id: 'countries_040',
    name: 'Czech Republic',
    category: 'countries',
    roles: ['President', 'Prime Minister', 'Business Leader', 'Engineer', 'Athlete', 'Scientist', 'Artist', 'Chef']
  },
  {
    id: 'countries_041',
    name: 'Hungary',
    category: 'countries',
    roles: ['Prime Minister', 'Business Leader', 'Engineer', 'Athlete', 'Scientist', 'Artist', 'Chef', 'Historian']
  },
  {
    id: 'countries_042',
    name: 'Romania',
    category: 'countries',
    roles: ['President', 'Prime Minister', 'Business Leader', 'Engineer', 'Athlete', 'Scientist', 'Artist', 'Chef']
  },
  {
    id: 'countries_043',
    name: 'Bulgaria',
    category: 'countries',
    roles: ['Prime Minister', 'President', 'Business Leader', 'Engineer', 'Athlete', 'Scientist', 'Artist', 'Chef']
  },
  {
    id: 'countries_044',
    name: 'Croatia',
    category: 'countries',
    roles: ['Prime Minister', 'President', 'Athlete', 'Business Leader', 'Engineer', 'Scientist', 'Artist', 'Chef']
  },
  {
    id: 'countries_045',
    name: 'Serbia',
    category: 'countries',
    roles: ['President', 'Prime Minister', 'Business Leader', 'Engineer', 'Athlete', 'Scientist', 'Artist', 'Chef']
  },
  {
    id: 'countries_046',
    name: 'Ukraine',
    category: 'countries',
    roles: ['President', 'Prime Minister', 'Business Leader', 'Engineer', 'Athlete', 'Scientist', 'Artist', 'Chef']
  },
  {
    id: 'countries_047',
    name: 'Israel',
    category: 'countries',
    roles: ['Prime Minister', 'President', 'Business Leader', 'Engineer', 'Athlete', 'Scientist', 'Artist', 'Chef']
  },
  {
    id: 'countries_048',
    name: 'Saudi Arabia',
    category: 'countries',
    roles: ['King', 'Business Leader', 'Engineer', 'Athlete', 'Scientist', 'Artist', 'Chef', 'Historian']
  },
  {
    id: 'countries_049',
    name: 'United Arab Emirates',
    category: 'countries',
    roles: ['President', 'Business Leader', 'Engineer', 'Athlete', 'Scientist', 'Artist', 'Chef', 'Architect']
  },
  {
    id: 'countries_050',
    name: 'Singapore',
    category: 'countries',
    roles: ['Prime Minister', 'Business Leader', 'Engineer', 'Athlete', 'Scientist', 'Artist', 'Chef', 'Architect']
  },
  // Additional jobs
  {
    id: 'jobs_013',
    name: 'Nurse',
    category: 'jobs',
    roles: ['Registered Nurse', 'Nurse Practitioner', 'Pediatric Nurse', 'ER Nurse', 'Surgical Nurse', 'Nurse Educator', 'Nurse Manager', 'Home Health Nurse']
  },
  {
    id: 'jobs_014',
    name: 'Dentist',
    category: 'jobs',
    roles: ['General Dentist', 'Orthodontist', 'Oral Surgeon', 'Pediatric Dentist', 'Dental Hygienist', 'Dental Assistant', 'Dental Lab Technician', 'Dental Researcher']
  },
  {
    id: 'jobs_015',
    name: 'Pharmacist',
    category: 'jobs',
    roles: ['Retail Pharmacist', 'Hospital Pharmacist', 'Clinical Pharmacist', 'Pharmacy Technician', 'Pharmaceutical Researcher', 'Pharmacy Manager', 'Compounding Pharmacist', 'Consultant Pharmacist']
  },
  {
    id: 'jobs_016',
    name: 'Journalist',
    category: 'jobs',
    roles: ['Reporter', 'Editor', 'Photojournalist', 'Broadcast Journalist', 'Investigative Journalist', 'Sports Journalist', 'Political Correspondent', 'Columnist']
  },
  {
    id: 'jobs_017',
    name: 'Photographer',
    category: 'jobs',
    roles: ['Portrait Photographer', 'Wedding Photographer', 'Photojournalist', 'Fashion Photographer', 'Nature Photographer', 'Studio Photographer', 'Photo Editor', 'Photography Instructor']
  },
  {
    id: 'jobs_018',
    name: 'Architect',
    category: 'jobs',
    roles: ['Residential Architect', 'Commercial Architect', 'Landscape Architect', 'Interior Designer', 'Urban Planner', 'Architectural Drafter', 'Project Manager', 'Historic Preservationist']
  },
  {
    id: 'jobs_019',
    name: 'Accountant',
    category: 'jobs',
    roles: ['CPA', 'Tax Accountant', 'Auditor', 'Financial Analyst', 'Bookkeeper', 'Controller', 'Forensic Accountant', 'Accounting Professor']
  },
  {
    id: 'jobs_020',
    name: 'Electrician',
    category: 'jobs',
    roles: ['Residential Electrician', 'Commercial Electrician', 'Industrial Electrician', 'Electrical Inspector', 'Electrical Engineer', 'Maintenance Electrician', 'Solar Installer', 'Electrical Contractor']
  },
  {
    id: 'jobs_021',
    name: 'Plumber',
    category: 'jobs',
    roles: ['Residential Plumber', 'Commercial Plumber', 'Pipefitter', 'Plumbing Inspector', 'Plumbing Contractor', 'Maintenance Plumber', 'Water Treatment Specialist', 'Plumbing Instructor']
  },
  {
    id: 'jobs_022',
    name: 'Mechanic',
    category: 'jobs',
    roles: ['Auto Mechanic', 'Diesel Mechanic', 'Motorcycle Mechanic', 'Aircraft Mechanic', 'Heavy Equipment Mechanic', 'Small Engine Mechanic', 'Shop Foreman', 'Auto Body Technician']
  },
  {
    id: 'jobs_023',
    name: 'Carpenter',
    category: 'jobs',
    roles: ['Framing Carpenter', 'Finish Carpenter', 'Cabinetmaker', 'Furniture Maker', 'Restoration Carpenter', 'Construction Carpenter', 'Carpentry Instructor', 'Carpentry Contractor']
  },
  {
    id: 'jobs_024',
    name: 'Farmer',
    category: 'jobs',
    roles: ['Crop Farmer', 'Livestock Farmer', 'Organic Farmer', 'Farm Manager', 'Agricultural Engineer', 'Agronomist', 'Farm Equipment Operator', 'Farm Consultant']
  },
  {
    id: 'jobs_025',
    name: 'Salesperson',
    category: 'jobs',
    roles: ['Retail Salesperson', 'Real Estate Agent', 'Car Salesperson', 'Insurance Agent', 'Pharmaceutical Sales Rep', 'Sales Manager', 'Telemarketer', 'Sales Trainer']
  },
  {
    id: 'jobs_026',
    name: 'Receptionist',
    category: 'jobs',
    roles: ['Office Receptionist', 'Hotel Receptionist', 'Medical Receptionist', 'Dental Receptionist', 'Spa Receptionist', 'Salon Receptionist', 'Administrative Assistant', 'Customer Service Rep']
  },
  {
    id: 'jobs_027',
    name: 'Librarian',
    category: 'jobs',
    roles: ['Public Librarian', 'School Librarian', 'University Librarian', 'Research Librarian', 'Digital Librarian', 'Children\'s Librarian', 'Library Director', 'Archivist']
  },
  {
    id: 'jobs_028',
    name: 'Psychologist',
    category: 'jobs',
    roles: ['Clinical Psychologist', 'Counseling Psychologist', 'School Psychologist', 'Industrial Psychologist', 'Forensic Psychologist', 'Sports Psychologist', 'Research Psychologist', 'Psychology Professor']
  },
  {
    id: 'jobs_029',
    name: 'Veterinarian',
    category: 'jobs',
    roles: ['Small Animal Vet', 'Large Animal Vet', 'Exotic Animal Vet', 'Equine Vet', 'Veterinary Surgeon', 'Veterinary Pathologist', 'Animal Shelter Vet', 'Veterinary Researcher']
  },
  {
    id: 'jobs_030',
    name: 'Social Worker',
    category: 'jobs',
    roles: ['Child Welfare Worker', 'School Social Worker', 'Clinical Social Worker', 'Medical Social Worker', 'Community Organizer', 'Case Manager', 'Social Work Supervisor', 'Social Work Professor']
  },
  {
    id: 'jobs_031',
    name: 'Graphic Designer',
    category: 'jobs',
    roles: ['Print Designer', 'Web Designer', 'UI/UX Designer', 'Logo Designer', 'Brand Designer', 'Illustrator', 'Art Director', 'Design Professor']
  },
  {
    id: 'jobs_032',
    name: 'Programmer',
    category: 'jobs',
    roles: ['Software Developer', 'Web Developer', 'Mobile App Developer', 'Game Developer', 'Systems Programmer', 'Database Administrator', 'DevOps Engineer', 'Computer Science Professor']
  },
  {
    id: 'jobs_033',
    name: 'Marketing Manager',
    category: 'jobs',
    roles: ['Digital Marketing Manager', 'Brand Manager', 'Product Manager', 'Content Marketing Manager', 'SEO Specialist', 'Social Media Manager', 'Marketing Analyst', 'Marketing Director']
  },
  {
    id: 'jobs_034',
    name: 'Real Estate Agent',
    category: 'jobs',
    roles: ['Residential Agent', 'Commercial Agent', 'Property Manager', 'Real Estate Appraiser', 'Mortgage Broker', 'Real Estate Attorney', 'Real Estate Photographer', 'Real Estate Investor']
  },
  {
    id: 'jobs_035',
    name: 'Flight Attendant',
    category: 'jobs',
    roles: ['Commercial Flight Attendant', 'Private Jet Attendant', 'Lead Flight Attendant', 'Flight Attendant Trainer', 'In-flight Service Manager', 'Emergency Response Specialist', 'Customer Service Rep', 'Travel Coordinator']
  },
  {
    id: 'jobs_036',
    name: 'Bartender',
    category: 'jobs',
    roles: ['Mixologist', 'Bar Manager', 'Wine Specialist', 'Cocktail Server', 'Bartending Instructor', 'Event Bartender', 'Craft Beer Expert', 'Beverage Consultant']
  },
  {
    id: 'jobs_037',
    name: 'Hair Stylist',
    category: 'jobs',
    roles: ['Salon Stylist', 'Color Specialist', 'Hair Cutter', 'Makeup Artist', 'Salon Manager', 'Hair Educator', 'Celebrity Stylist', 'Hair Product Developer']
  },
  {
    id: 'jobs_038',
    name: 'Personal Trainer',
    category: 'jobs',
    roles: ['Gym Trainer', 'Private Trainer', 'Group Fitness Instructor', 'Nutrition Coach', 'Sports Trainer', 'Rehabilitation Specialist', 'Fitness Director', 'Wellness Coach']
  },
  {
    id: 'jobs_039',
    name: 'Tour Guide',
    category: 'jobs',
    roles: ['City Tour Guide', 'Historical Tour Guide', 'Adventure Tour Guide', 'Museum Guide', 'Wine Tour Guide', 'Nature Guide', 'Cruise Ship Guide', 'Tour Company Owner']
  },
  {
    id: 'jobs_040',
    name: 'Event Planner',
    category: 'jobs',
    roles: ['Wedding Planner', 'Corporate Event Planner', 'Party Planner', 'Conference Organizer', 'Festival Coordinator', 'Catering Manager', 'Event Photographer', 'Event Marketing Specialist']
  },
  {
    id: 'jobs_041',
    name: 'Translator',
    category: 'jobs',
    roles: ['Language Translator', 'Interpreter', 'Localization Specialist', 'Technical Translator', 'Literary Translator', 'Legal Translator', 'Medical Translator', 'Translation Professor']
  },
  {
    id: 'jobs_042',
    name: 'Researcher',
    category: 'jobs',
    roles: ['Academic Researcher', 'Market Researcher', 'Medical Researcher', 'Social Researcher', 'Environmental Researcher', 'Data Researcher', 'Research Analyst', 'Research Director']
  },
  {
    id: 'jobs_043',
    name: 'Consultant',
    category: 'jobs',
    roles: ['Management Consultant', 'IT Consultant', 'Financial Consultant', 'HR Consultant', 'Strategy Consultant', 'Business Consultant', 'Technical Consultant', 'Consulting Partner']
  },
  {
    id: 'jobs_044',
    name: 'Therapist',
    category: 'jobs',
    roles: ['Physical Therapist', 'Occupational Therapist', 'Speech Therapist', 'Massage Therapist', 'Art Therapist', 'Music Therapist', 'Family Therapist', 'Therapy Supervisor']
  },
  {
    id: 'jobs_045',
    name: 'Security Guard',
    category: 'jobs',
    roles: ['Mall Security', 'Bank Security', 'Event Security', 'Private Security', 'Cybersecurity Specialist', 'Security Consultant', 'Security Trainer', 'Security Director']
  },
  {
    id: 'jobs_046',
    name: 'Customer Service Rep',
    category: 'jobs',
    roles: ['Call Center Rep', 'Retail Associate', 'Technical Support', 'Customer Success Manager', 'Complaint Handler', 'Service Supervisor', 'Quality Assurance', 'Customer Service Trainer']
  },
  {
    id: 'jobs_047',
    name: 'Data Analyst',
    category: 'jobs',
    roles: ['Business Analyst', 'Data Scientist', 'Statistical Analyst', 'Market Analyst', 'Financial Analyst', 'Operations Analyst', 'Data Visualization Specialist', 'Analytics Manager']
  },
  {
    id: 'jobs_048',
    name: 'Project Manager',
    category: 'jobs',
    roles: ['IT Project Manager', 'Construction PM', 'Marketing PM', 'Product Manager', 'Event PM', 'Program Manager', 'Portfolio Manager', 'PMO Director']
  },
  {
    id: 'jobs_049',
    name: 'Writer',
    category: 'jobs',
    roles: ['Journalist', 'Author', 'Copywriter', 'Technical Writer', 'Content Writer', 'Screenwriter', 'Editor', 'Publishing Professional']
  },
  {
    id: 'jobs_050',
    name: 'Entrepreneur',
    category: 'jobs',
    roles: ['Startup Founder', 'Small Business Owner', 'E-commerce Seller', 'Franchise Owner', 'Consultant', 'Inventor', 'Social Entrepreneur', 'Business Mentor']
  },
  // Additional food
  {
    id: 'food_013',
    name: 'Sushi Rolls',
    category: 'food',
    roles: ['Sushi Chef', 'Sashimi Cutter', 'Rice Specialist', 'Fish Slicer', 'Sushi Instructor', 'Restaurant Owner', 'Food Critic', 'Sushi Lover']
  },
  {
    id: 'food_014',
    name: 'Fried Chicken',
    category: 'food',
    roles: ['Fried Chicken Chef', 'Fast Food Worker', 'Colonel Sanders', 'Restaurant Owner', 'Food Critic', 'Spice Expert', 'Batter Specialist', 'Chicken Farmer']
  },
  {
    id: 'food_015',
    name: 'French Fries',
    category: 'food',
    roles: ['Fast Food Worker', 'Potato Farmer', 'Chef', 'Restaurant Owner', 'Food Critic', 'Oil Expert', 'Seasoning Specialist', 'Snack Lover']
  },
  {
    id: 'food_016',
    name: 'Hot Dog',
    category: 'food',
    roles: ['Hot Dog Vendor', 'Chef', 'Restaurant Owner', 'Food Critic', 'Sausage Maker', 'Bun Baker', 'Condiment Expert', 'Street Food Lover']
  },
  {
    id: 'food_017',
    name: 'Hamburger',
    category: 'food',
    roles: ['Burger Flipper', 'Chef', 'Restaurant Owner', 'Food Critic', 'Beef Farmer', 'Bun Baker', 'Cheese Specialist', 'Fast Food Worker']
  },
  {
    id: 'food_018',
    name: 'Spaghetti',
    category: 'food',
    roles: ['Italian Chef', 'Pasta Maker', 'Sauce Specialist', 'Restaurant Owner', 'Food Critic', 'Tomato Grower', 'Herb Expert', 'Pasta Lover']
  },
  {
    id: 'food_019',
    name: 'Ramen',
    category: 'food',
    roles: ['Ramen Chef', 'Broth Master', 'Noodle Maker', 'Restaurant Owner', 'Food Critic', 'Egg Specialist', 'Topping Expert', 'Japanese Cuisine Lover']
  },
  {
    id: 'food_020',
    name: 'Dumplings',
    category: 'food',
    roles: ['Chinese Chef', 'Dumpling Maker', 'Wrapper Specialist', 'Restaurant Owner', 'Food Critic', 'Filling Expert', 'Steamer Master', 'Asian Cuisine Lover']
  },
  {
    id: 'food_021',
    name: 'Falafel',
    category: 'food',
    roles: ['Middle Eastern Chef', 'Chickpea Grinder', 'Tahini Maker', 'Street Vendor', 'Food Critic', 'Pita Baker', 'Spice Expert', 'Mediterranean Food Lover']
  },
  {
    id: 'food_022',
    name: 'Chicken Curry',
    category: 'food',
    roles: ['Indian Chef', 'Spice Master', 'Restaurant Owner', 'Food Critic', 'Rice Cooker', 'Naan Baker', 'Curry Expert', 'Indian Cuisine Lover']
  },
  {
    id: 'food_023',
    name: 'Pho',
    category: 'food',
    roles: ['Vietnamese Chef', 'Broth Master', 'Noodle Maker', 'Restaurant Owner', 'Food Critic', 'Herb Specialist', 'Beef Expert', 'Vietnamese Cuisine Lover']
  },
  {
    id: 'food_024',
    name: 'Paella',
    category: 'food',
    roles: ['Spanish Chef', 'Rice Specialist', 'Seafood Expert', 'Restaurant Owner', 'Food Critic', 'Saffron Trader', 'Paella Master', 'Spanish Cuisine Lover']
  },
  {
    id: 'food_025',
    name: 'Kimchi',
    category: 'food',
    roles: ['Korean Chef', 'Fermentation Expert', 'Cabbage Farmer', 'Restaurant Owner', 'Food Critic', 'Spice Specialist', 'Kimchi Master', 'Korean Cuisine Lover']
  },
  {
    id: 'food_026',
    name: 'Hummus',
    category: 'food',
    roles: ['Middle Eastern Chef', 'Chickpea Expert', 'Tahini Maker', 'Restaurant Owner', 'Food Critic', 'Pita Baker', 'Dip Specialist', 'Mediterranean Food Lover']
  },
  {
    id: 'food_027',
    name: 'Tacos',
    category: 'food',
    roles: ['Mexican Chef', 'Tortilla Maker', 'Meat Specialist', 'Street Vendor', 'Food Critic', 'Salsa Expert', 'Taco Master', 'Mexican Cuisine Lover']
  },
  {
    id: 'food_028',
    name: 'Pad Thai',
    category: 'food',
    roles: ['Thai Chef', 'Noodle Expert', 'Shrimp Specialist', 'Restaurant Owner', 'Food Critic', 'Tamarind Expert', 'Pad Thai Master', 'Thai Cuisine Lover']
  },
  {
    id: 'food_029',
    name: 'Lasagna',
    category: 'food',
    roles: ['Italian Chef', 'Pasta Layer', 'Cheese Specialist', 'Restaurant Owner', 'Food Critic', 'Meat Sauce Expert', 'Lasagna Master', 'Italian Cuisine Lover']
  },
  {
    id: 'food_030',
    name: 'Sashimi',
    category: 'food',
    roles: ['Japanese Chef', 'Fish Cutter', 'Sushi Expert', 'Restaurant Owner', 'Food Critic', 'Fish Farmer', 'Sashimi Master', 'Japanese Cuisine Lover']
  },
  {
    id: 'food_031',
    name: 'Biryani',
    category: 'food',
    roles: ['Indian Chef', 'Rice Cooker', 'Spice Master', 'Restaurant Owner', 'Food Critic', 'Meat Specialist', 'Biryani Expert', 'Indian Cuisine Lover']
  },
  {
    id: 'food_032',
    name: 'Mac and Cheese',
    category: 'food',
    roles: ['American Chef', 'Cheese Specialist', 'Pasta Expert', 'Restaurant Owner', 'Food Critic', 'Comfort Food Lover', 'Child Favorite', 'Home Cook']
  },
  {
    id: 'food_033',
    name: 'Poutine',
    category: 'food',
    roles: ['Canadian Chef', 'Dumpling Maker', 'Potato Expert', 'Restaurant Owner', 'Food Critic', 'Sauce Specialist', 'Poutine Master', 'Eastern European Cuisine Lover']
  },
  {
    id: 'food_034',
    name: 'Empanadas',
    category: 'food',
    roles: ['Latin American Chef', 'Pastry Maker', 'Meat Filler', 'Street Vendor', 'Food Critic', 'Spice Expert', 'Empanada Master', 'Latin Cuisine Lover']
  },
  {
    id: 'food_035',
    name: 'Goulash',
    category: 'food',
    roles: ['Hungarian Chef', 'Stew Master', 'Paprika Expert', 'Restaurant Owner', 'Food Critic', 'Beef Specialist', 'Goulash Lover', 'Hungarian Cuisine Expert']
  },
  {
    id: 'food_036',
    name: 'Miso Soup',
    category: 'food',
    roles: ['Japanese Chef', 'Miso Master', 'Tofu Expert', 'Restaurant Owner', 'Food Critic', 'Seaweed Specialist', 'Soup Lover', 'Japanese Cuisine Expert']
  },
  {
    id: 'food_037',
    name: 'Chili Con Carne',
    category: 'food',
    roles: ['American Chef', 'Spice Master', 'Bean Expert', 'Restaurant Owner', 'Food Critic', 'Meat Specialist', 'Chili Cook-off Winner', 'Tex-Mex Cuisine Lover']
  },
  {
    id: 'food_038',
    name: 'Risotto',
    category: 'food',
    roles: ['Italian Chef', 'Rice Cooker', 'Wine Expert', 'Restaurant Owner', 'Food Critic', 'Parmesan Specialist', 'Risotto Master', 'Italian Cuisine Lover']
  },
  {
    id: 'food_039',
    name: 'Korean Rice Bowl',
    category: 'food',
    roles: ['Korean Chef', 'Rice Expert', 'Vegetable Specialist', 'Restaurant Owner', 'Food Critic', 'Gochujang Expert', 'Bibimbap Master', 'Korean Cuisine Lover']
  },
  {
    id: 'food_040',
    name: 'Brazilian Stew',
    category: 'food',
    roles: ['Brazilian Chef', 'Bean Expert', 'Meat Specialist', 'Restaurant Owner', 'Food Critic', 'Black Bean Master', 'Feijoada Lover', 'Brazilian Cuisine Expert']
  },
  {
    id: 'food_041',
    name: 'Greek Casserole',
    category: 'food',
    roles: ['Greek Chef', 'Eggplant Expert', 'Meat Layer', 'Restaurant Owner', 'Food Critic', 'Cheese Specialist', 'Moussaka Master', 'Greek Cuisine Lover']
  },
  {
    id: 'food_042',
    name: 'Ceviche',
    category: 'food',
    roles: ['Peruvian Chef', 'Fish Specialist', 'Lime Expert', 'Restaurant Owner', 'Food Critic', 'Seafood Lover', 'Ceviche Master', 'Peruvian Cuisine Expert']
  },
  {
    id: 'food_043',
    name: 'Shawarma',
    category: 'food',
    roles: ['Middle Eastern Chef', 'Meat Specialist', 'Spice Master', 'Restaurant Owner', 'Food Critic', 'Grill Master', 'Shawarma Lover', 'Middle Eastern Cuisine Expert']
  },
  {
    id: 'food_044',
    name: 'Jerk Chicken',
    category: 'food',
    roles: ['Jamaican Chef', 'Spice Master', 'Chicken Expert', 'Restaurant Owner', 'Food Critic', 'Allspice Specialist', 'Jerk Master', 'Caribbean Cuisine Lover']
  },
  {
    id: 'food_045',
    name: 'Butter Chicken',
    category: 'food',
    roles: ['Indian Chef', 'Curry Master', 'Spice Expert', 'Restaurant Owner', 'Food Critic', 'Tomato Specialist', 'Butter Chicken Lover', 'Indian Cuisine Expert']
  },
  {
    id: 'food_046',
    name: 'Peking Duck',
    category: 'food',
    roles: ['Chinese Chef', 'Duck Specialist', 'Pancake Maker', 'Restaurant Owner', 'Food Critic', 'Hoisin Expert', 'Peking Duck Master', 'Chinese Cuisine Lover']
  },
  {
    id: 'food_047',
    name: 'Gazpacho',
    category: 'food',
    roles: ['Spanish Chef', 'Tomato Expert', 'Cold Soup Master', 'Restaurant Owner', 'Food Critic', 'Bread Specialist', 'Gazpacho Lover', 'Spanish Cuisine Expert']
  },
  {
    id: 'food_048',
    name: 'Rice',
    category: 'food',
    roles: ['Indian Chef', 'Cream Specialist', 'Spice Master', 'Restaurant Owner', 'Food Critic', 'Chicken Expert', 'Korma Lover', 'Indian Cuisine Expert']
  },
  {
    id: 'food_049',
    name: 'Ratatouille',
    category: 'food',
    roles: ['French Chef', 'Vegetable Expert', 'Stew Master', 'Restaurant Owner', 'Food Critic', 'Herb Specialist', 'Ratatouille Lover', 'French Cuisine Expert']
  },
  {
    id: 'food_050',
    name: 'Pasta',
    category: 'food',
    roles: ['Brazilian Chef', 'Grill Master', 'Meat Specialist', 'Restaurant Owner', 'Food Critic', 'Salt Expert', 'Churrasco Lover', 'Brazilian Cuisine Expert']
  },
  // Additional animals
  {
    id: 'animals_013',
    name: 'Tiger',
    category: 'animals',
    roles: ['Zookeeper', 'Conservationist', 'Tiger Trainer', 'Veterinarian', 'Wildlife Biologist', 'Safari Guide', 'Tiger Photographer', 'Big Cat Expert']
  },
  {
    id: 'animals_014',
    name: 'Elephant',
    category: 'animals',
    roles: ['Zookeeper', 'Conservationist', 'Elephant Trainer', 'Veterinarian', 'Wildlife Biologist', 'Safari Guide', 'Elephant Photographer', 'Mammal Expert']
  },
  {
    id: 'animals_015',
    name: 'Giraffe',
    category: 'animals',
    roles: ['Zookeeper', 'Conservationist', 'Giraffe Trainer', 'Veterinarian', 'Wildlife Biologist', 'Safari Guide', 'Giraffe Photographer', 'Tall Animal Expert']
  },
  {
    id: 'animals_016',
    name: 'Zebra',
    category: 'animals',
    roles: ['Zookeeper', 'Conservationist', 'Zebra Trainer', 'Veterinarian', 'Wildlife Biologist', 'Safari Guide', 'Zebra Photographer', 'Stripe Expert']
  },
  {
    id: 'animals_017',
    name: 'Kangaroo',
    category: 'animals',
    roles: ['Zookeeper', 'Conservationist', 'Kangaroo Trainer', 'Veterinarian', 'Wildlife Biologist', 'Australian Guide', 'Kangaroo Photographer', 'Marsupial Expert']
  },
  {
    id: 'animals_018',
    name: 'Koala',
    category: 'animals',
    roles: ['Zookeeper', 'Conservationist', 'Koala Trainer', 'Veterinarian', 'Wildlife Biologist', 'Australian Guide', 'Koala Photographer', 'Eucalyptus Expert']
  },
  {
    id: 'animals_019',
    name: 'Penguin',
    category: 'animals',
    roles: ['Zookeeper', 'Conservationist', 'Penguin Trainer', 'Veterinarian', 'Wildlife Biologist', 'Antarctic Guide', 'Penguin Photographer', 'Bird Expert']
  },
  {
    id: 'animals_020',
    name: 'Polar Bear',
    category: 'animals',
    roles: ['Zookeeper', 'Conservationist', 'Polar Bear Trainer', 'Veterinarian', 'Wildlife Biologist', 'Arctic Guide', 'Polar Bear Photographer', 'Ice Expert']
  },
  {
    id: 'animals_021',
    name: 'Shark',
    category: 'animals',
    roles: ['Marine Biologist', 'Aquarium Owner', 'Shark Trainer', 'Veterinarian', 'Oceanographer', 'Diver', 'Shark Photographer', 'Predator Expert']
  },
  {
    id: 'animals_022',
    name: 'Whale',
    category: 'animals',
    roles: ['Marine Biologist', 'Whale Watcher', 'Whale Trainer', 'Veterinarian', 'Oceanographer', 'Diver', 'Whale Photographer', 'Mammal Expert']
  },
  {
    id: 'animals_023',
    name: 'Octopus',
    category: 'animals',
    roles: ['Marine Biologist', 'Aquarium Owner', 'Octopus Trainer', 'Veterinarian', 'Oceanographer', 'Diver', 'Octopus Photographer', 'Cephalopod Expert']
  },
  {
    id: 'animals_024',
    name: 'Jellyfish',
    category: 'animals',
    roles: ['Marine Biologist', 'Aquarium Owner', 'Jellyfish Expert', 'Veterinarian', 'Oceanographer', 'Diver', 'Jellyfish Photographer', 'Cnidarian Specialist']
  },
  {
    id: 'animals_025',
    name: 'Butterfly',
    category: 'animals',
    roles: ['Entomologist', 'Butterfly Farmer', 'Conservationist', 'Veterinarian', 'Wildlife Biologist', 'Garden Guide', 'Butterfly Photographer', 'Insect Expert']
  },
  {
    id: 'animals_026',
    name: 'Bee',
    category: 'animals',
    roles: ['Apiculturist', 'Bee Keeper', 'Pollination Expert', 'Veterinarian', 'Wildlife Biologist', 'Honey Producer', 'Bee Photographer', 'Insect Specialist']
  },
  {
    id: 'animals_027',
    name: 'Ant',
    category: 'animals',
    roles: ['Entomologist', 'Ant Farm Owner', 'Myrmecologist', 'Veterinarian', 'Wildlife Biologist', 'Colony Observer', 'Ant Photographer', 'Insect Expert']
  },
  {
    id: 'animals_028',
    name: 'Spider',
    category: 'animals',
    roles: ['Arachnologist', 'Spider Keeper', 'Web Expert', 'Veterinarian', 'Wildlife Biologist', 'Arachnid Photographer', 'Venom Specialist', 'Arthropod Expert']
  },
  {
    id: 'animals_029',
    name: 'Frog',
    category: 'animals',
    roles: ['Herpetologist', 'Frog Breeder', 'Amphibian Expert', 'Veterinarian', 'Wildlife Biologist', 'Pond Guide', 'Frog Photographer', 'Amphibian Specialist']
  },
  {
    id: 'animals_030',
    name: 'Turtle',
    category: 'animals',
    roles: ['Herpetologist', 'Turtle Breeder', 'Reptile Expert', 'Veterinarian', 'Wildlife Biologist', 'Aquarium Owner', 'Turtle Photographer', 'Reptile Specialist']
  },
  {
    id: 'animals_031',
    name: 'Crocodile',
    category: 'animals',
    roles: ['Herpetologist', 'Crocodile Trainer', 'Reptile Expert', 'Veterinarian', 'Wildlife Biologist', 'Swamp Guide', 'Crocodile Photographer', 'Predator Expert']
  },
  {
    id: 'animals_032',
    name: 'Eagle',
    category: 'animals',
    roles: ['Ornithologist', 'Eagle Trainer', 'Bird Expert', 'Veterinarian', 'Wildlife Biologist', 'Falconer', 'Eagle Photographer', 'Raptor Specialist']
  },
  {
    id: 'animals_033',
    name: 'Owl',
    category: 'animals',
    roles: ['Ornithologist', 'Owl Trainer', 'Night Bird Expert', 'Veterinarian', 'Wildlife Biologist', 'Forest Guide', 'Owl Photographer', 'Nocturnal Specialist']
  },
  {
    id: 'animals_034',
    name: 'Parrot',
    category: 'animals',
    roles: ['Ornithologist', 'Parrot Trainer', 'Bird Expert', 'Veterinarian', 'Wildlife Biologist', 'Pet Store Owner', 'Parrot Photographer', 'Tropical Bird Specialist']
  },
  {
    id: 'animals_035',
    name: 'Ostrich',
    category: 'animals',
    roles: ['Ornithologist', 'Ostrich Farmer', 'Bird Expert', 'Veterinarian', 'Wildlife Biologist', 'Farm Guide', 'Ostrich Photographer', 'Flightless Bird Specialist']
  },
  {
    id: 'animals_036',
    name: 'Peacock',
    category: 'animals',
    roles: ['Ornithologist', 'Peacock Breeder', 'Bird Expert', 'Veterinarian', 'Wildlife Biologist', 'Zoo Guide', 'Peacock Photographer', 'Colorful Bird Specialist']
  },
  {
    id: 'animals_037',
    name: 'Sloth',
    category: 'animals',
    roles: ['Zookeeper', 'Sloth Trainer', 'Mammal Expert', 'Veterinarian', 'Wildlife Biologist', 'Jungle Guide', 'Sloth Photographer', 'Slow Animal Specialist']
  },
  {
    id: 'animals_038',
    name: 'Monkey',
    category: 'animals',
    roles: ['Primatologist', 'Monkey Trainer', 'Primate Expert', 'Veterinarian', 'Wildlife Biologist', 'Jungle Guide', 'Monkey Photographer', 'Primate Specialist']
  },
  {
    id: 'animals_039',
    name: 'Gorilla',
    category: 'animals',
    roles: ['Primatologist', 'Gorilla Trainer', 'Primate Expert', 'Veterinarian', 'Wildlife Biologist', 'Jungle Guide', 'Gorilla Photographer', 'Great Ape Specialist']
  },
  {
    id: 'animals_040',
    name: 'Chimpanzee',
    category: 'animals',
    roles: ['Primatologist', 'Chimp Trainer', 'Primate Expert', 'Veterinarian', 'Wildlife Biologist', 'Research Assistant', 'Chimp Photographer', 'Primate Specialist']
  },
  {
    id: 'animals_041',
    name: 'Wolf',
    category: 'animals',
    roles: ['Zookeeper', 'Wolf Trainer', 'Canine Expert', 'Veterinarian', 'Wildlife Biologist', 'Forest Guide', 'Wolf Photographer', 'Pack Animal Specialist']
  },
  {
    id: 'animals_042',
    name: 'Fox',
    category: 'animals',
    roles: ['Zookeeper', 'Fox Trainer', 'Canine Expert', 'Veterinarian', 'Wildlife Biologist', 'Forest Guide', 'Fox Photographer', 'Cunning Animal Specialist']
  },
  {
    id: 'animals_043',
    name: 'Rabbit',
    category: 'animals',
    roles: ['Zookeeper', 'Rabbit Breeder', 'Lagomorph Expert', 'Veterinarian', 'Wildlife Biologist', 'Pet Store Owner', 'Rabbit Photographer', 'Burrowing Animal Specialist']
  },
  {
    id: 'animals_044',
    name: 'Hamster',
    category: 'animals',
    roles: ['Pet Store Owner', 'Hamster Breeder', 'Rodent Expert', 'Veterinarian', 'Wildlife Biologist', 'Cage Cleaner', 'Hamster Photographer', 'Small Pet Specialist']
  },
  {
    id: 'animals_045',
    name: 'Guinea Pig',
    category: 'animals',
    roles: ['Pet Store Owner', 'Guinea Pig Breeder', 'Rodent Expert', 'Veterinarian', 'Wildlife Biologist', 'Hay Farmer', 'Guinea Pig Photographer', 'Social Animal Specialist']
  },
  {
    id: 'animals_046',
    name: 'Ferret',
    category: 'animals',
    roles: ['Pet Store Owner', 'Ferret Breeder', 'Mustelid Expert', 'Veterinarian', 'Wildlife Biologist', 'Tube Cleaner', 'Ferret Photographer', 'Playful Animal Specialist']
  },
  {
    id: 'animals_047',
    name: 'Hedgehog',
    category: 'animals',
    roles: ['Pet Store Owner', 'Hedgehog Breeder', 'Erinaceid Expert', 'Veterinarian', 'Wildlife Biologist', 'Wheel Spinner', 'Hedgehog Photographer', 'Spiny Animal Specialist']
  },
  {
    id: 'animals_048',
    name: 'Goldfish',
    category: 'animals',
    roles: ['Pet Store Owner', 'Goldfish Breeder', 'Aquarium Expert', 'Veterinarian', 'Wildlife Biologist', 'Tank Cleaner', 'Goldfish Photographer', 'Freshwater Fish Specialist']
  },
  {
    id: 'animals_049',
    name: 'Tropical Fish',
    category: 'animals',
    roles: ['Pet Store Owner', 'Fish Breeder', 'Aquarium Expert', 'Veterinarian', 'Wildlife Biologist', 'Coral Farmer', 'Tropical Fish Photographer', 'Saltwater Specialist']
  },
  {
    id: 'animals_050',
    name: 'Iguana',
    category: 'animals',
    roles: ['Pet Store Owner', 'Iguana Breeder', 'Reptile Expert', 'Veterinarian', 'Wildlife Biologist', 'Terrarium Builder', 'Iguana Photographer', 'Lizard Specialist']
  }
];