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
    '/static/naruto.jpg',
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
    '/static/dragonBall_db.jpg',
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
    '/static/OP_db.png',
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
    'Nana follows the lives of two young women, both named Nana, who meet by chance and decide to live together in Tokyo.',
    -- image
    '/static/nanaTome1.png',
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
  )
  ;

INSERT INTO volume (title, number_volume, publication_year, image, ISBN, manga_id)
VALUES ('Tome 1', 1, '2002', '/static/naruto.jpg', '2871294143', 1), 
('Tome 2', 2, '2002', '/static/narutoTome2.png', '2871294178', 1),
('Tome 3', 3, '2002', '/static/narutoTome3.png', '2871294275', 1),
('Tome 4', 4, '2002', '/static/narutoTome4.png', '2871294410', 1),
('Tome 5', 5, '2003', '/static/narutoTome5.png', '2871294917', 1),
('Tome 6', 6, '2003', '/static/narutoTome6.png', '2871295115', 1),
('Tome 7', 7, '2003', '/static/narutoTome7.png', '2871295352', 1),
('Tome 8', 8, '2003', '/static/narutoTome8.png', '2871295522', 1),
('Tome 9', 9, '2004', '/static/narutoTome9.png', '2871295999', 1),
('Tome 10', 10, '2004', '/static/narutoTome10.png', '2871296146', 1),
('Tome 11', 11, '2004', '/static/narutoTome11.png', '2871296243', 1),
('Tome 12', 12, '2004', '/static/narutoTome12.png', '2871296359', 1),
('Tome 13', 13, '2004', '/static/narutoTome13.png', '2871296464', 1),
('Tome 14', 14, '2004', '/static/narutoTome14.png', '287129657X', 1),
('Tome 15', 15, '2005', '/static/narutoTome15.png', '2871297045', 1),
('Tome 16', 16, '2005', '/static/narutoTome16.png', '2871297231', 1),
('Tome 17', 17, '2005', '/static/narutoTome17.png', '2871297762', 1),
('Tome 18', 18, '2005', '/static/narutoTome18.png', '2871297975', 1),
('Tome 19', 19, '2005', '/static/narutoTome19.png', '2871298165', 1),
('Tome 20', 20, '2006', '/static/narutoTome20.png', '2871298343', 1),
('Tome 21', 21, '2006', '/static/narutoTome21.png', '2871298904', 1),
('Tome 22', 22, '2006', '/static/narutoTome22.png', '2871299110', 1),
('Tome 23', 23, '2006', '/static/narutoTome23.png', '2871299315', 1),
('Tome 24', 24, '2006', '/static/narutoTome24.png', '2871299617', 1),
('Tome 25', 25, '2006', '/static/narutoTome25.png', '2871299773', 1),
('Tome 26', 26, '2006', '/static/narutoTome26.png', '2871299870', 1),
('Tome 27', 27, '2007', '/static/narutoTome27.png', '250500031X', 1),
('Tome 28', 28, '2007', '/static/narutoTome28.png', '2505000921', 1),
('Tome 29', 29, '2007', '/static/narutoTome29.png', '2505000972', 1),
('Tome 30', 30, '2007', '/static/narutoTome30.png', '2505001529', 1),
('Tome 1', 1, '2007', '/static/onePieceTome1.png', '2505001529', 3),
('Tome 2', 2, '2007', '/static/onePieceTome2.png', '2505001529', 3),
('Tome 3', 3, '2007', '/static/onePieceTome3.png', '2505001529', 3),
('Tome 4', 4, '2007', '/static/onePieceTome4.png', '2505001529', 3),
('Tome 5', 5, '2007', '/static/onePieceTome5.png', '2505001529', 3),
('Tome 6', 6, '2007', '/static/onePieceTome6.png', '2505001529', 3),
('Tome 7', 7, '2007', '/static/onePieceTome7.png', '2505001529', 3),
('Tome 8', 8, '2007', '/static/onePieceTome8.png', '2505001529', 3),
('Tome 9', 9, '2007', '/static/onePieceTome9.png', '2505001529', 3),
('Tome 10', 10, '2007', '/static/onePieceTome10.png', '2505001529', 3),
('Tome 11', 11, '2007', '/static/onePieceTome11.png', '2505001529', 3),
('Tome 12', 12, '2007', '/static/onePieceTome12.png', '2505001529', 3),
('Tome 13', 13, '2007', '/static/onePieceTome13.png', '2505001529', 3),
('Tome 14', 14, '2007', '/static/onePieceTome14.png', '2505001529', 3),
('Tome 15', 15, '2007', '/static/onePieceTome15.png', '2505001529', 3),
('Tome 1', 1, '2000', '/static/nanaTome1.png', '9782840559573', 4);

INSERT INTO article_condition (name_condition)
VALUES ('abimé'), ('bon état'), ('comme neuf');

INSERT INTO
user (firstname, lastname, pseudo, email, hashed_password, phone, role, picture)
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

INSERT INTO address (city, zip_code, number_street, country, name_adress)
VALUES ('Bordeaux', '33000', '18 Boulevard de la Paix', 'France', 'maison'),
('Artigues-près-Bordeaux', '33370', '4 impasse Marc-Antoine', 'France', 'boulot'),
('Paris','75000','145 Avenue du Général Leclerc','France','domicile'),
('Lille','59000','46 Rue Marie-Antoinette','France','Papy et Mamie');

INSERT INTO address_has_user (address_id, user_id)
VALUES ('1','1'),
('2','1'),
('3','2'),
('4','2');

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
    'Je vends un lot Dragon Ball à bon prix ! Se référer aux photos pour les tomes constituant le lot.', 
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

INSERT INTO `order` (id_user_buy, total_price, order_date, status_order, feedback_order, advert_id, user_id)
VALUES ('2','3.80', '2024/02/20', 'completed', 0, '1', '1'),
('2','4.80', '2024/02/20', 'completed', 0, '2', '1'),
('1','15.80', '2024/02/21', 'completed', 0, '5', '2');

INSERT INTO feedback (rating, comment, created_on, user_buyer, user_id)
VALUES (5, 'Vendeuse très réactive !', '2024/02/19', 2, 1), 
(4, 'Satisfait - produit conforme à la description', '2024/02/21', 2, 1), 
(5, 'Je recommande !', '2024/02/18',2, 1),
(3.5, 'Délai d''envoi assez long, manga en moins bon état que prévu', '2024/02/05', 1, 2), 
(4, 'Satisfait', '2024/02/21', 1, 2);
