CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    location VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

INSERT INTO events (name, date, location, description) VALUES
('React Conference 2024', '2024-06-15', 'San Francisco, CA', 'A conference for React enthusiasts and professionals.'),
('JavaScript Summit', '2024-07-20', 'New York, NY', 'A summit focused on the latest trends and technologies in JavaScript.'),
('Node.js Workshop', '2024-08-25', 'Chicago, IL', 'A hands-on workshop on building scalable applications with Node.js.'),
('Tech Innovators Meetup', '2024-09-10', 'Austin, TX', 'A meetup for tech innovators to share their ideas and projects.'),
('AI & Machine Learning Expo', '2024-10-05', 'Seattle, WA', 'An expo showcasing the latest advancements in AI and machine learning.'),
('Cloud Computing Conference', '2024-11-15', 'Las Vegas, NV', 'A conference dedicated to cloud computing technologies and solutions.'),
('Cybersecurity Forum', '2024-12-10', 'Washington, D.C.', 'A forum discussing the latest trends and threats in cybersecurity.'),
('DevOps Days', '2024-06-10', 'Boston, MA', 'A conference for DevOps professionals and enthusiasts.'),
('Mobile Development Conference', '2024-07-25', 'Los Angeles, CA', 'A conference focused on mobile app development and technologies.'),
('Big Data Analytics Summit', '2024-08-30', 'Denver, CO', 'A summit on big data analytics and its applications.'),
('Blockchain Expo', '2024-09-20', 'Miami, FL', 'An expo showcasing the latest developments in blockchain technology.'),
('Virtual Reality Conference', '2024-10-15', 'Orlando, FL', 'A conference dedicated to virtual reality technologies and applications.'),
('Internet of Things (IoT) Forum', '2024-11-05', 'Dallas, TX', 'A forum discussing the latest trends and technologies in IoT.'),
('Quantum Computing Conference', '2024-12-20', 'San Jose, CA', 'A conference on the advancements and applications of quantum computing.'),
('Web Development Bootcamp', '2024-06-20', 'Philadelphia, PA', 'A bootcamp for web developers to enhance their skills.'),
('Tech Startups Expo', '2024-07-15', 'San Diego, CA', 'An expo for tech startups to showcase their products and solutions.'),
('Data Science Summit', '2024-08-10', 'Atlanta, GA', 'A summit focused on data science and its applications.'),
('AR/VR Developers Meetup', '2024-09-05', 'Portland, OR', 'A meetup for AR/VR developers to share their projects and ideas.'),
('E-commerce Conference', '2024-10-25', 'Houston, TX', 'A conference dedicated to e-commerce technologies and trends.'),
('Robotics & Automation Expo', '2024-11-30', 'Phoenix, AZ', 'An expo showcasing the latest in robotics and automation technology.'),
('Music Festival 2024', '2024-07-05', 'Nashville, TN', 'A multi-day music festival featuring various genres and artists.'),
('Rock Concert', '2024-08-12', 'Los Angeles, CA', 'A rock concert featuring popular bands and solo artists.'),
('Jazz Night', '2024-09-20', 'New Orleans, LA', 'An evening of live jazz music at a famous jazz club.'),
('Electronic Dance Music (EDM) Party', '2024-10-18', 'Miami, FL', 'A high-energy EDM party with top DJs from around the world.'),
('Hip-Hop Battle', '2024-11-08', 'Brooklyn, NY', 'A hip-hop battle featuring talented rappers and dancers.'),
('Classical Music Concert', '2024-12-14', 'Vienna, Austria', 'A classical music concert by a renowned orchestra.'),
('Food Truck Festival', '2024-06-22', 'Portland, OR', 'A festival featuring a variety of food trucks and cuisines.'),
('Beer and Wine Tasting', '2024-07-19', 'Sonoma, CA', 'An event for beer and wine enthusiasts to taste local brews and wines.'),
('Art Exhibition', '2024-08-23', 'Paris, France', 'An exhibition showcasing contemporary art from around the world.'),
('Film Festival', '2024-09-14', 'Cannes, France', 'A film festival featuring screenings of independent and mainstream films.'),
('Comic Con', '2024-10-26', 'San Diego, CA', 'A convention for comic book fans, featuring panels, signings, and more.'),
('Cultural Fair', '2024-11-11', 'Tokyo, Japan', 'A fair celebrating diverse cultures with performances, food, and art.'),
('Halloween Party', '2024-10-31', 'Salem, MA', 'A Halloween party with costumes, music, and themed activities.');

ALTER TABLE events ADD category VARCHAR(50);
UPDATE events SET category = 'sports' 
WHERE description LIKE '%workshop%' 
   OR description LIKE '%summit%' 
   OR description LIKE '%forum%';

UPDATE events SET category = 'concerts' 
WHERE description LIKE '%festival%' 
   OR description LIKE '%concert%' 
   OR description LIKE '%night%' 
   OR description LIKE '%party%' 
   OR description LIKE '%battle%' 
   OR description LIKE '%classical music%';

UPDATE events SET category = 'others' 
WHERE category IS NULL OR category = '';