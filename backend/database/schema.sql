create table item (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null
);












-- SELECT m.title, m.description, m.image, p.name_publishing_house, g.genre, m.author, m.script_writer, m. illustrator, m.release_date, m.date_japan, m.date_france
-- FROM manga m
-- LEFT JOIN publishing_house p ON m.publishing_house_id = p.id
-- LEFT JOIN genre g ON m.genre_id = g.id

-- SELECT p.name_publishing_house, g.genre
-- FROM manga m
-- JOIN publishing_house p ON m.publishing_house_id = p.id
-- JOIN genre g ON m.genre_id = g.id