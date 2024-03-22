INSERT INTO publishing_house (name_publishing_house)
VALUES ('Crunchyroll'), ('Meian'), ('Doki-doki'), ('Delcourt');

INSERT INTO genre (genre)
VALUES ('Shonen'), ('Shojo'), ('Seinen'), ('Josei'), ('Kodomo'), ('Isekai');

INSERT INTO manga (title, description, image, author, script_writer, illustrator, release_date, publishing_house_id, genre_id, finish_japan, finish_france, date_france, date_japan)
VALUES (
    -- title
    'Naruto',
    -- description
    "L'histoire commence pendant l'adolescence de Naruto, vers ses douze ans. Orphelin cancre et grand farceur, il fait toutes les bêtises possibles pour se faire remarquer. Son rêve : devenir Hokage afin d'être reconnu par les habitants de son village. En effet, le démon renard à neuf queues scellé en lui a attisé la crainte et le mépris des autres villageois, qui, avec le temps, ne font plus de différence entre Kyûbi et Naruto. Malgré cela, Naruto s'entraîne dur afin de devenir genin, le premier niveau chez les ninjas. Après plusieurs essais, il arrive finalement à recevoir son bandeau frontal de Konoha et la promotion qui va avec. Il est alors inclus dans une équipe de trois apprentis ninjas, avec Sakura Haruno et le talentueux Sasuke Uchiwa, qui veut venger les personnes chères à ses yeux, en tuant son frère Itachi Uchiwa. Peu après, ils rencontrent leur jōnin (ninja de classe supérieure), celui qui s'occupera de leur formation : le mystérieux Kakashi Hatake. Au début craint et méprisé par ses pairs, il va peu à peu monter en puissance et gagner le respect et l'affection des villageois grâce notamment aux combats dantesques qu'il remportera face aux ennemis les plus puissants de Konoha.",
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
    "Son Goku est un jeune garçon simple d'esprit et pur doté d'une queue de singe et d'une force extraordinaire. Il vit seul après le décès de son grand-père adoptif sur une montagne et en pleine nature ayant les caractéristiques d'une jungle. Un jour, il rencontre Bulma, une jeune fille de la ville très intelligente. Elle est à la recherche des sept boules de cristal légendaires appelées Dragon Balls. Dispersées sur Terre, ces Dragon Balls, une fois réunies, font apparaître Shenron, le Dragon sacré, qui exauce le souhait de celui qui l'a appelé. Son Goku accepte d'aider Bulma car, étant plus jeune, son grand père adoptif Son Gohan lui avait dit d'être gentil avec les filles. Au cours de leur parcours initiatique, ils font de nombreuses rencontres. Son Goku, qui n'était jamais sorti de sa forêt, est amené à suivre un apprentissage auprès de maîtres comme Kamé Sennin ou Maître Karin et à participer à plusieurs championnats du monde d'arts martiaux.",
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
('Tome 1', 1, '1993', '/static/dragonBall_db.jpg', '287695205X', 2),
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
('Tome 0', 0, '2020', '/static/jujutsuKaisenTome0.png', '1974720144', 5),
('Tome 1', 1, '2020', '/static/jujutsuKaisenTome1.png', '1974710025', 5),
('Tome 2', 2, '2020', '/static/jujutsuKaisenTome2.png', '1974710033', 5),
('Tome 3', 3, '2020', '/static/jujutsuKaisenTome3.png', '1974710041', 5),
('Tome 4', 4, '2020', '/static/jujutsuKaisenTome4.png', '1974714802', 5),
('Tome 5', 5, '2020', '/static/jujutsuKaisenTome5.png', '1974714810', 5),
('Tome 6', 6, '2020', '/static/jujutsuKaisenTome6.png', '1974714829', 5),
('Tome 7', 7, '2020', '/static/jujutsuKaisenTome7.png', '1974717119', 5),
('Tome 8', 8, '2021', '/static/jujutsuKaisenTome8.png', '1974718719', 5),
('Tome 9', 9, '2021', '/static/jujutsuKaisenTome9.png', '1974718727', 5),
('Tome 10', 10, '2021', '/static/jujutsuKaisenTome10.png', '1974720756', 5);

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

INSERT INTO `advert` 
VALUES (1,3.00,'Vends manga Naruto en bon état. Seul défaut : la couverture est un peu corné.',0,0,'Naruto tome 1 en bon état',3,'2024-02-19',0,1,1,2,1),
(2,4.00,'Je mets en vente ce tome 2 de Naruto, comme neuf.',0,0,'Naruto tome 2 comme neuf',2,'2024-02-20',0,1,2,3,1),
(3,40.00,'Je vends un lot Dragon Ball à bon prix ! Se référencer aux photos pour les tomes constituant le lot.',0,1,'Lot Dragon Ball à saisir !',5,'2024-02-12',0,1,NULL,1,2),
(4,20.00,'One Piece 66 67 68 69 70. Je reste disponible si vous voulez plus de photos. Je vends également d\'autres livres n\'hésitez pas à faire un tour sur mon profil.',0,1,'Lot One Piece 66 à 70',5,'2024-02-14',0,1,NULL,2,3),
(5,15.00,'Lot de 3 mangas dragon Ball en excellent état - vendeur de confiance',0,1,'Lot Dragon Ball tomes 1 à 3 !',4,'2024-02-21',0,2,NULL,3,2),
(6,2.00,'A vendre : tome 1 Nana',0,0,'Nana Tome 1',4,'2024-02-20',0,2,3,1,4),
(7,74.00,'Vends mon tome 100 édition collector One Piece, état neuf sous blister.',0,0,'One Piece tome 100 collector',451,'2024-03-15',0,1,NULL,3,3),
(8,110.00,'Vends collection complète HxH (1-36), en bon état.',0,1,'HunterxHunter tome 1 à 36.',118,'2024-03-15',0,2,NULL,3,6),
(9,35.00,'Vends mon lot D.Gray-man tome 1 à 16.',0,1,'Dr.Gray-man tome 1 à 16',34,'2024-03-14',0,1,NULL,3,NULL),
(10,50.00,'Je vends ma précieuse collection de Sun-Ken Rock collector :).',0,1,'Sun-Ken Rock collector 1 à 13.',65,'2024-03-15',0,2,NULL,3,NULL),
(11,30.00,'Vends lot Alice in Borderland tome 1 à 17 !',0,1,'Alice in Borderland 1 à 17.',89,'2024-02-22',0,1,NULL,2,NULL),
(12,120.00,'Bonjour, je vends mon lot Kingdom en très bon état.',0,1,'Kingdom 1 à 35.',700,'2024-03-15',0,2,NULL,3,NULL),
(13,3.50,'Vends le tome 4 de BlueLock, sous blister.',0,0,'BlueLock tome 4.',4,'2024-03-15',0,2,NULL,3,NULL),
(14,3.00,'Vends tome 1 de Fullmetal Alchemist bon état.',0,0,'Fullmetal Alchemist tome 1.',69,'2024-03-15',0,1,NULL,2,NULL),
(15,35.00,'Je vends mon tome 41 collector de Berserk toujours sous blister.',0,0,'Berserk collector 41.',666,'2024-03-15',0,1,NULL,3,NULL),
(16,2.90,'Vends tome 3 Perfect Crime quasi neuf.',0,0,'Perfect Crime tome 3.',32,'2024-03-20',0,2,NULL,3,NULL),
(17,3.00,'Vends mon tome 9 de Yu-Gi-Oh, un peu usé par le temps',0,0,'Yu-Gi-Oh tome 9',12,'2024-03-20',0,1,NULL,1,NULL),
(18,2.50,'Je vends mon premier tome de Boruto car je le possède en double !',0,0,'Boruto tome 1',46,'2024-03-20',0,1,NULL,2,NULL),
(19,5.00,'Tome 84 de One Piece avec jacket brillante à vendre',0,0,'One Piece tome 84',32,'2024-03-20',0,1,NULL,3,NULL),
(20,4.50,'Je vends mon tome 10 Dragon Ball',0,0,'Dragon Ball tome 10',32,'2024-03-20',0,2,NULL,1,NULL),
(21,40.00,'Vends mes 13 premiers tomes de Death Note',0,1,'Death Note tomes 1 à 13',78,'2024-03-20',0,1,NULL,3,NULL),
(22,25.00,'Je mets en vente mes tomes de Vagabond 1 à 7',0,1,'Vagabond tome 1 à 7',12,'2024-03-20',0,2,NULL,2,NULL),
(23,12.00,'Trois premiers tomes et tome 17 de MHA en occasion',0,1,'My Hero Academia tome 1-3 et 17',54,'2024-03-20',0,2,NULL,3,NULL),
(24,20.50,'Lot des 8 premiers tomes de JJK',0,1,'Jujutsu Kaisen tome 1 à 8',129,'2024-03-20',0,1,NULL,3,NULL),
(25,200.00,'Collection complète de Fairy Tail à vendre, très bon état !',0,1,'Fairy Tail intégrale',147,'2024-03-20',0,2,NULL,3,NULL),
(26,25.00,'Je vends mes 7 tomes de SNK',0,1,'Attaque des titans tome 1 à 7',45,'2024-03-20',0,2,NULL,2,NULL),
(27,37.00,'Lot des 12 premiers tomes de Bleach en bon état',0,1,'Bleach tomes 1 à 12',34,'2024-03-20',0,1,NULL,2,NULL),
(28,240.00,'Je vends mes mangas Bleach, collection intégrale !!',0,1,'Bleach intégrale',305,'2024-03-20',0,2,NULL,3,NULL),
(29,27.00,'Tomes 1 à 10 de assassination classroom, adapté pour les enfants !',0,1,'Assassination Classroom tome 1 à 10',48,'2024-03-20',0,2,NULL,2,NULL),
(30,10.00,'Je vends les 5 premiers tomes de Detective Conan',0,1,'Detective Conan tome 1 à 5',23,'2024-03-20',0,1,NULL,3,NULL),
(31,7.00,'Coffret contenant les trois premiers volumes des carnets de l apothicaire',0,1,'Carnets de l apothicaire tome 1 à 3',15,'2024-03-20',0,1,NULL,3,NULL),
(32,5.00,'Tome 1 de solo leveling à vendre',0,0,'Solo leveling tome 1',56,'2024-03-20',0,2,NULL,3,NULL),
(33,10.00,'Je vends mes tomes 1 à 4 de Doubt',0,1,'Doubt tome 1 à 4',12,'2024-03-20',0,1,NULL,2,NULL),
(34,80.00,'Edition deluxe tome 1 à 12 de 20th century boys',0,1,'20th century boys tome 1 à 12',78,'2024-03-20',0,1,NULL,2,NULL),
(35,2.50,'Tome 1 de cowboy bebop',0,0,'Cowboy Bebop tome 1',3,'2024-03-20',0,2,NULL,2,NULL),
(36,3.50,'Vends le tome 1 de banana fish bon état!',0,0,'Banana Fish tome 1',32,'2024-03-20',0,2,NULL,3,NULL),
(37,3.00,'A vendre : tome 3 de Akame ga kill',0,0,'Akame ga kill tome 3',16,'2024-03-20',0,1,NULL,2,NULL),
(38,2.80,'Je revends tome 1 de Code Geass, parfait pour découvrir l oeuvre',0,0,'Code Geass tome 1',14,'2024-03-20',0,1,NULL,2,NULL),
(39,4.00,'Tome 3 de Orange, à saisir !',0,0,'Orange tome 3',6,'2024-03-20',0,1,NULL,3,NULL),
(40,3.00,'GTO tome 2 à vendre',0,0,'Great Teacher Onizuka tome 2',90,'2024-03-20',0,2,NULL,2,NULL);


INSERT INTO `advert_image` 
VALUES (1,'/static/Advert1_Picture1.jpeg',1,1),
(2,'/static/Advert1_Picture2.jpeg',0,1),
(3,'/static/Advert2_Picture1.png',1,2),
(4,'/static/Advert2_Picture2.png',0,2),
(5,'/static/Advert3_Picture1.jpeg',1,3),
(6,'/static/Advert4_Picture1.jpeg',1,4),
(7,'/static/Advert4_Picture2.jpeg',0,4),
(8,'/static/Advert5_Picture1.jpeg',1,5),
(9,'/static/Advert5_Picture1.jpeg',0,5),
(10,'/static/Advert6_Picture1.jpeg',1,6),
(11,'/static/OPcollectorTome100.jpg',1,7),
(12,'/static/hunterxhunterBatch1-36.jpg',1,8),
(13,'/static/dgraymanBatch1-16.jpg',1,9),
(14,'/static/SKRcollectorBatch1-13.jpg',1,10),
(15,'/static/aliceinborderlandBatch1-17.jpeg',1,11),
(16,'/static/Kingdombatch1-35.jpg',1,12),
(17,'/static/bluelockTome4.jpg',1,13),
(18,'/static/FATome1.jpeg',1,14),
(19,'/static/BerserkTomeCollector41.jpeg',1,15),
(20,'/static/PerfectCrimeTome3.jpeg',1,16),
(21,'/static/Advert17_Picture1.jpg',1,17),
(22,'/static/Advert18_Picture1.jpg',1,18),
(23,'/static/Advert19_Picture1.jpg',1,19),
(24,'/static/Advert20_Picture1.jpeg',1,20),
(25,'/static/Advert21_Picture1.jpg',1,21),
(26,'/static/Advert22_Picture1.jpg',1,22),
(27,'/static/Advert23_Picture1.jpg',1,23),
(28,'/static/Advert24_Picture1.jpg',1,24),
(29,'/static/Advert25_Picture1.jpg',1,25),
(30,'/static/Advert26_Picture1.jpg',1,26),
(31,'/static/Advert27_Picture1.jpg',1,27),
(32,'/static/Advert28_Picture1.jpg',1,28),
(33,'/static/Advert29_Picture1.jpg',1,29),
(34,'/static/Advert30_Picture1.jpg',1,30),
(35,'/static/Advert31_Picture1.jpg',1,31),
(36,'/static/Advert32_Picture1.jpg',1,32),
(37,'/static/Advert33_Picture1.jpg',1,33),
(38,'/static/Advert34_Picture1.jpg',1,34),
(39,'/static/Advert35_Picture1.jpg',1,35),
(40,'/static/Advert36_Picture1.jpg',1,36),
(41,'/static/Advert37_Picture1.jpg',1,37),
(42,'/static/Advert38_Picture1.jpg',1,38),
(43,'/static/Advert39_Picture1.jpg',1,39),
(44,'/static/Advert40_Picture1.jpg',1,40);


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