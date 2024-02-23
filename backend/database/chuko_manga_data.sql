INSERT INTO publishing_house (name_publishing_house)
VALUES ('Crunchyroll'), ('Meian'), ('Doki-doki'), ('Delcourt');

INSERT INTO genre (genre)
VALUES ('Shonen'), ('Shojo'), ('Seinen'), ('Josei'), ('Kodomo'), ('Isekai');

INSERT INTO manga (title, description, image, author, script_writer, illustrator, release_date, publishing_house_id, genre_id, finish_japan, finish_france, date_france, date_japan)
VALUES (
    -- title
    'Naruto',
    -- description
    "Naruto is a ninja story that follows the adventures of Naruto Uzumaki, a young, turbulent, and hyperactive ninja who aspires to become the greatest ninja in his village, Konoha. However, Naruto harbors a secret: he is the host of a powerful nine-tailed fox demon, Kyubi, sealed inside him since birth. Rejected by the people of Konoha because of this, Naruto seeks to prove his worth and earn the respect of his peers. Along his journey, Naruto befriends Sasuke Uchiha, a talented ninja with exceptional abilities, and Sakura Haruno, an intelligent and determined kunoichi. Together, they form Team 7 under the leadership of their sensei, Kakashi Hatake. The story follows Naruto's exploits as he trains to become stronger, faces formidable enemies, and undertakes perilous missions. His ultimate goal is to become the Hokage, the leader of his village, to gain the recognition and respect he desires so much. As the story progresses, Naruto discovers the existence of his most dangerous enemies: the criminal organization Akatsuki, which seeks to capture Jinchuriki (demon carriers) like him. He also learns the truth about his past, including his parents and the village of Konoha. The manga explores themes such as friendship, bravery, perseverance, and self-improvement while showcasing spectacular battles and memorable characters. Ultimately, Naruto must confront his inner and outer demons to achieve his dream and protect those dear to him.",
    -- image
    '../../assets/images/manga/xxxxx.png',
    -- author
    'Masashi Kishimoto',
    -- script_writer
    'Masashi Kishimoto',
    -- illustrator
    'Masashi Kishimoto',
    -- release_date
    '1999',
    -- publishing_house_id
    1,
    -- genre_id
    1,
    -- finish japan
    1,
    -- finish france 
    1,
    -- date france 
   "2015/04/06",
    -- date japan
    "2015/06/02"
  ),
  (
    -- title
    'Dragon Ball',
    -- description
    "Dragon Ball follows the adventures of Son Goku, a young boy with extraordinary abilities and superhuman strength. The story begins when Goku meets Bulma, a girl in search of the Dragon Balls, seven magical spheres that, when gathered, grant the possessor the ability to summon the dragon Shenron and make a wish. Together, Goku and Bulma embark on a journey to find the Dragon Balls, facing powerful adversaries, monsters, and making new friends along the way. Throughout their journey, they encounter other iconic characters such as Master Roshi, Emperor Pilaf, and Yamcha, a desert bandit. The story unfolds through various narrative arcs, with Goku growing stronger through his training with Master Roshi and encounters with other martial arts masters like Master Karin and Master Roshi. They also face increasingly powerful adversaries, such as the Red Ribbon Army led by General Red, and Piccolo Daimao, an evil demon seeking to conquer the world.",
    -- image
    '../../assets/images/manga/xxxxx.png',
    -- author
    'Akira Toriyama',
    -- script_writer
    'Akira Toriyama',
    -- illustrator
    'Akira Toriyama',
    -- release_date
    '1984',
    -- publishing_house_id
    1,
    -- genre_id
    1,
    -- finish japan
    1,
    -- finish france 
    1,
    -- date france 
   "1997/01/17",
    -- date japan
    "1995/06/04"
  ),
  (
    -- title
    'One Piece',
    -- description
    "Monkey D. Luffy, a young boy with a fiery temperament, dreams of becoming the greatest pirate of all time and finding the legendary treasure known as 'One Piece'. To achieve his dream, he decides to assemble a fearless crew and set out on an adventure across the sea. Luffy possesses a unique advantage: after eating a Devil Fruit called the 'Gomu Gomu no Mi', his body gains the ability to stretch his limbs like rubber. Their quest takes them through the treacherous seas of the Grand Line, an ocean filled with deadly dangers, mysteries, and unimaginable treasures. Throughout their journey, they find themselves confronted by the Marines, a powerful military force that hunts pirates, as well as other notorious pirates, criminal groups, and secret organizations, all eager to lay claim to the ultimate treasure, the One Piece.",
    -- image
    '../../assets/images/manga/xxxxx.png',
    -- author
    'Eiichiro Oda',
    -- script_writer
    'Eiichiro Oda',
    -- illustrator
    'Eiichiro Oda',
    -- release_date
    '1997',
    -- publishing_house_id
    2,
    -- genre_id
    1,
    -- finish japan
    0,
    -- finish france 
    0,
    -- date france 
   "1997/01/17",
    -- date japan
    "1995/06/04"
  ),
    (
    -- title
    'Nana',
    -- description
    'Nana follows the lives of two young women, both named Nana, who meet by chance and decide to live together in Tokyo. Despite their different personalities, they form a strong bond as they pursue their dreams and navigate the challenges of love and friendship in the city''s music scene.',
    -- image
    'https://www.manga-news.com/public/images/series/nana_01.jpg',
    -- author
    'Ai Yazawa',
    -- script_writer
    'Ai Yazawa',
    -- illustrator
    'Ai Yazawa',
    -- release_date
    '2000',
    -- publishing_house_id
    4,
    -- genre_id
    2,
    -- finish japan
    1,
    -- finish france 
    1,
    -- date france 
   "2002/09/11",
    -- date japan
    "2000/05/15"
  );

INSERT INTO volume (title, number_volume, publication_year, image, ISBN, manga_id)
VALUES ('Tome 1', 1, '2002', 'https://bdi.dlpdomain.com/album/9782871294146-couv-M480x680.jpg', '2871294143', 1), 
('Tome 2', 2, '2002', 'https://bdi.dlpdomain.com/album/9782871294146-couv-M480x680.jpg', '2871294178', 1),
('Tome 1', 1, '2000', 'https://www.manga-news.com/public/images/series/nana_01.jpg', '9782840559573', 1);

INSERT INTO article_condition (name_condition)
VALUES ('abimé'), ('bon état'), ('comme neuf');

INSERT INTO
user (firstname, lastname, pseudo, email, password, phone, role, picture)
VALUES
(
  -- firstname
'Julie', 
-- lastname
'Dubois', 
-- pseudo
'Jul', 
-- email
'j.dubois@gmail.com', 
-- password
'01001', 
-- phone
'0611223344', 
-- role
'user', 
-- picture
'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
),
(
  -- firstname
'Marc', 
-- lastname
'Tournesol', 
-- pseudo
'Marc2000', 
-- email
'm.tournesol@gmail.com', 
-- password
'110001', 
-- phone
'0611220011', 
-- role
'user', 
-- picture
'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
);

INSERT INTO 
advert (price, description, alert, batch, title_search_manga, view_number, publication_date_advert, delete_advert, user_id, volume_id, article_condition_id, manga_id) 
VALUES 
  (
    -- price
    3,  
    -- description
    'Vends manga Naruto en bon état. Seul défaut : la couverture est un peu cornée', 
    -- alert
    0, 
    -- batch
    0, 
    -- title_search_manga
    'Naruto tome 1 en bon état', 
    -- View Number entré en dur, mais devrait être relié aux clics
    3, 
    -- publication_date_advert
    '2024-02-19', 
    -- delete_advert
    0, 
    -- user_id
    1, 
    -- volume_id
    1, 
    -- condition_id
    2, 
    -- manga_id
    1
    ), 
    (
    -- price
    4, 
    -- description
    'Je mets en vente ce tome 2 de Naruto, comme neuf.', 
    -- alert
    0, 
    -- batch
    0, 
    -- title_search_manga
    'Naruto tome 2 comme neuf', 
    -- View Number entré en dur, mais devrait être reliée aux clics
    2, 
    -- publication_date_advert
    '2024-02-20', 
    -- delete_advert
    0, 
    -- user_id
    1, 
    -- volume_id
    2, 
    -- condition_id
    3, 
    -- manga_id
    1
    ),
    (
    -- price
    40, 
    -- description
    'Je vens un lot Dragon Ball à bon prix ! Se référer aux photos pour les tomes constituant le lot.', 
    -- alert
    0, 
    -- batch
    1, 
    -- title_search_manga
    'Lot Dragon Ball à saisir !', 
    -- View Number entré en dur, mais devrait être reliée aux clics
    5, 
    -- publication_date_advert
    '2024-02-12', 
    -- delete_advert
    0, 
    -- user_id
    1, 
    -- volume_id
    NULL,
    -- condition_id
    1, 
    -- manga_id
    2
    ),
    (
    -- price
    20, 
    -- description
    'One Piece 66 67 68 69 70. Je reste disponible si vous voulez plus de photos. Je vends également d''autres livres n''hésitez pas à faire un tour sur mon profil.', 
    -- alert
    0, 
    -- batch
    1, 
    -- title_search_manga
    'Lot One Piece 66 à 70', 
    -- View Number entré en dur, mais devrait être reliée aux clics
    5, 
    -- publication_date_advert
    '2024-02-14', 
    -- delete_advert
    0, 
    -- user_id
    1, 
    -- volume_id
    NULL,
    -- condition_id
    2, 
    -- manga_id
    3
    ),
    (
    -- price
    15, 
    -- description
    'Lot de 3 mangas dragon Ball en excellent état - vendeur de confiance', 
    -- alert
    0, 
    -- batch
    1, 
    -- title_search_manga
    'Lot Dragon Ball tomes 1 à 3 !', 
    -- View Number entré en dur, mais devrait être reliée aux clics
    4, 
    -- publication_date_advert
    '2024-02-21', 
    -- delete_advert
    0, 
    -- user_id
    2, 
    -- volume_id
    NULL,
    -- condition_id
    3, 
    -- manga_id
    2
    ),
    (
    -- price
    2, 
    -- description
    'A vendre : tome 1 Nana', 
    -- alert
    0, 
    -- batch
    0, 
    -- title_search_manga
    'Nana Tome 1', 
    -- View Number entré en dur, mais devrait être reliée aux clics
    4, 
    -- publication_date_advert
    '2024-02-20', 
    -- delete_advert
    0, 
    -- user_id
    2, 
    -- volume_id
    3,
    -- condition_id
    1, 
    -- manga_id
    4
    );

INSERT INTO 
advert_image (image_path, is_primary, advert_id)
VALUES ('https://images1.vinted.net/t/01_01827_QnAYhyGADWncsoxqVv4js6Mh/f800/1708184899.jpeg?s=fbe64ea0a877c53c42b87282922cb295617cd44e', 1, 1), 
('https://images1.vinted.net/t/01_0017a_cKAn9GExwyPFFj4fZZqcVMoU/f800/1708184899.jpeg?s=461e8f7628bcb5421a8751a11ca13f763ce86971', 0, 1),
('https://images1.vinted.net/t/02_00936_va4rY9rWwT3HbU2ThLRULkU7/f800/1708376632.jpeg?s=1412896b180252dd463c6e8981b2e83726ed8294', 1, 2),
('https://images1.vinted.net/t/03_021d1_FNvSHX9kxBzHei8GBnGDbbL2/f800/1708376632.jpeg?s=c202bf962b04c720d1b69c5397df9e7909e5758b', 0, 2),
('https://images1.vinted.net/t/01_0091d_7AbN4FEoTkVpFHcTevqmssPj/f800/1708301885.jpeg?s=a35767a3203f7cf7b0967c3bac29231976117099', 1, 3),
('https://images1.vinted.net/t/03_01d33_yhvKkq3bfzfmTqnsk2VA72ZF/f800/1708437469.jpeg?s=6e1c5dff10d9f8202989a695f7ac0dedac76ea3e', 1, 4),
('https://images1.vinted.net/t/02_015e6_gyPVAkxkXVQxfAmnUjYUECyc/f800/1708414740.jpeg?s=14d6cae4a9ede4a2f9824ef8208b87a186e13d82', 0, 4),
('https://images1.vinted.net/t/03_00a44_Ao9k6K9g9dyZ8a6oFGS241Az/f800/1708523145.jpeg?s=9c69bf4c8085bb90c02b5a90720c44a77bf226a6', 1, 5),
('https://images1.vinted.net/t/01_0069d_8rBzBXNiBnK7Kn94k5hmPLVr/f800/1708523145.jpeg?s=b6119bc3ae9905e339202eb71806650a85ba261c', 0, 5),
('https://images1.vinted.net/t/03_01d33_yhvKkq3bfzfmTqnsk2VA72ZF/f800/1708437469.jpeg?s=6e1c5dff10d9f8202989a695f7ac0dedac76ea3e', 1, 6),
('https://images1.vinted.net/t/03_01b81_81gVNq3szf7EA94eupaDVkXG/f800/1708437469.jpeg?s=1de325fb4055aff0395218fe38e932fa328d94cb', 0, 6);

INSERT INTO feedback (rating, comment, created_on, user_buyer, user_id)
VALUES (5, 'Vendeuse très réactive !', '2024/02/19', 2, 1), 
(4, 'Satisfait - produit conforme à la description', '2024/02/21', 2, 1), 
(5, 'Je recommande !', '2024/02/18',2, 1),
(3.5, 'Délai d''envoi assez long, manga en moins bon état que prévu', '2024/02/05', 1, 2), 
(4, 'Satisfait', '2024/02/21', 1, 2);