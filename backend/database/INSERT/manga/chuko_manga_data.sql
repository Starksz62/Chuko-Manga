INSERT INTO
  genre (genre)
VALUES
  (
    'Shonen'
  ),
  (
    'Shojo'
  ),
  (
    'Seinen'
  ),
  (
    'Josei'
  ),
  (
    'Kodomo'
  ),
  (
    'Isekai'
  );

INSERT INTO
  publishing_house (name_publishing_house)
VALUES
  (
    'Crunchyroll'
  ),
  (
    'Meian'
  ),
  (
    'Doki-doki'
  );

INSERT INTO
  manga (title, description, image, author, script_writer, illustrator, release_date, publishing_house_id, genre_id, finish_japan, finish_france, date_france, date_japan)
VALUES
  (
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
  );
