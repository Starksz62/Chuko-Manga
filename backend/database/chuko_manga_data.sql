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
  ),
   (
    -- title
    'Jujutsu Kaisen',
    -- description
    "Jujutsu Kaisen follows Yuji Itadori, a high school student who becomes the host of a powerful curse after ingesting a cursed finger. Joining an exorcism school, he teams up with fellow apprentice exorcists to fight malevolent entities and collect the parts of an ancient curse. Amid supernatural battles and personal quests, Yuji navigates a world where magic and monsters shape destiny.",
    -- image
    '/static/jujutsuKaisenTome0.png',
    -- author
    'Gege Akutami',
    -- script_writer
    'Gege Akutami',
    -- illustrator
    'Gege Akutami',
    -- release_date
    '2018',
    -- publishing_house_id
    1,
    -- genre_id
    1,
    -- finish japan
    0,
    -- finish france 
    0,
    -- date france 
    "2020/10/01",
    -- date japan
    "2018/04/12"
  ),
   (
    -- title
    'Hunter X Hunter',
    -- description
    "Gon Freecss, a young boy who discovers that his father, whom he thought was dead, is actually a legendary Hunter, alive and embarked on a quest in search of treasures, unexplored places, and mysterious creatures. Determined to find his father, Gon decides to take the Hunter Exam, a perilous contest reserved for the elite of adventurers. Throughout his journey, Gon befriends other candidates: Leorio, Kurapika, and Killua. Together, they will face numerous challenges, uncover the vast and dangerous world of Hunters and its dark secrets.",
    -- image
    '/static/hunterXHunterTome1.png',
    -- author
    'Yoshihiro Togashi',
    -- script_writer
    'Yoshihiro Togashi',
    -- illustrator
    'Yoshihiro Togashi',
    -- release_date
    '1998',
    -- publishing_house_id
    1,
    -- genre_id
    1,
    -- finish japan
    0,
    -- finish france 
    0,
    -- date france 
   "2020/10/01",
    -- date japan
    "1998/03/16"
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
('Tome 1', 1, '1993', '/static/DragonBall_db.jpg', '287695205X', 2),
('Tome 2', 2, '1993', '/static/dragonBallTome2.png', '2876952068', 2),
('Tome 3', 3, '1993', '/static/dragonBallTome3.png', '2876952076', 2),
('Tome 4', 4, '1993', '/static/dragonBallTome4.png', '2876952106', 2),
('Tome 6', 6, '1994', '/static/dragonBallTome6.png', '2876952122', 2),
('Tome 7', 7, '1994', '/static/dragonBallTome7.png', '2876952173', 2),
('Tome 8', 8, '1994', '/static/dragonBallTome8.png', '2876952181', 2),
('Tome 9', 9, '1994', '/static/dragonBallTome9.png', '287695219X', 2),
('Tome 10', 10, '1994', '/static/dragonBallTome10.png', '2876952203', 2),
('Tome 13', 13, '1995', '/static/dragonBallTome13.png', '2723418561', 2),
('Tome 15', 15, '1995', '/static/dragonBallTome15.png', '2723418588', 2),
('Tome 17', 17, '1995', '/static/dragonBallTome17.png', '272341860X', 2),
('Tome 18', 18, '1995', '/static/dragonBallTome18.png', '2723418618', 2),
('Tome 19', 19, '1996', '/static/dragonBallTome19.png', '2723419029', 2),
('Tome 20', 20, '1996', '/static/dragonBallTome20.png', '2723419231', 2),
('Tome 25', 25, '1997', '/static/dragonBallTome25.png', '2723422240', 2),
('Tome 26', 26, '1997', '/static/dragonBallTome26.png', '2723422259', 2),
('Tome 29', 29, '1997', '/static/dragonBallTome29.png', '2723423476', 2),
('Tome 1', 1, '2007', '/static/onePieceTome1.jpg', '2505001529', 3),
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
('Tome 1', 1, '2000', '/static/nanaTome1.png', '9782840559573', 4),
('Tome 0', 0, '2020', '/static/jujutsuKaisenTom0.png', '1974720144', 5),
('Tome 1', 1, '2020', '/static/jujutsuKaisenTom1.png', '1974710025', 5),
('Tome 2', 2, '2020', '/static/jujutsuKaisenTom2.png', '1974710033', 5),
('Tome 3', 3, '2020', '/static/jujutsuKaisenTom3.png', '1974710041', 5),
('Tome 4', 4, '2020', '/static/jujutsuKaisenTom4.png', '1974714802', 5),
('Tome 5', 5, '2020', '/static/jujutsuKaisenTom5.png', '1974714810', 5),
('Tome 6', 6, '2020', '/static/jujutsuKaisenTom6.png', '1974714829', 5),
('Tome 7', 7, '2020', '/static/jujutsuKaisenTom7.png', '1974717119', 5),
('Tome 8', 8, '2021', '/static/jujutsuKaisenTom8.png', '1974718719', 5),
('Tome 9', 9, '2021', '/static/jujutsuKaisenTom9.png', '1974718727', 5),
('Tome 10', 10, '2021', '/static/jujutsuKaisenTom10.png', '1974720756', 5);

INSERT INTO article_condition (name_condition)
VALUES ('Abimé'), ('Bon état'), ('Comme neuf');

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
advert (price, description, alert, batch, title_search_manga, publication_date_advert, user_id, volume_id, article_condition_id, manga_id) 
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
    -- publication_date_advert
    '2024-02-19', 
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
    -- publication_date_advert
    '2024-02-20', 
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
    -- publication_date_advert
    '2024-02-12', 
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
    'One Piece 1 à 6. Je reste disponible si vous voulez plus de photos. Je vends également d''autres livres n''hésitez pas à faire un tour sur mon profil.', 
    -- alert
    0, 
    -- batch
    1, 
    -- title_search_manga
    'Lot One Piece 1 à 6', 
    -- publication_date_advert
    '2024-02-14', 
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
    -- publication_date_advert
    '2024-02-21', 
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
    -- publication_date_advert
    '2024-02-20', 
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
VALUES ('/static/Advert1_Picture1.jpeg', 1, 1), 
('/static/Advert1_Picture2.jpeg', 0, 1),
('/static/Advert2_Picture1.png', 1, 2),
('/static/Advert2_Picture2.png', 0, 2),
('/static/Advert3_Picture1.jpeg', 1, 3),
('/static/Advert4_Picture1.jpeg', 1, 4),
('/static/Advert4_Picture2.jpeg', 0, 4),
('/static/Advert5_Picture1.jpeg', 1, 5),
('/static/Advert5_Picture1.jpeg', 0, 5),
('/static/Advert6_Picture1.jpeg', 1, 6),
('/static/Advert6_Picture2.jpeg', 0, 6);

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
