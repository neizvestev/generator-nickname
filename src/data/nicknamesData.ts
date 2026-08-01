export interface NameDatabase {
  firstNames: {
    male: {
      american: string[];
      italian: string[];
      russian: string[];
      japanese: string[];
      hispanic: string[];
      german: string[];
    };
    female: {
      american: string[];
      italian: string[];
      russian: string[];
      japanese: string[];
      hispanic: string[];
      german: string[];
    };
  };
  lastNames: {
    american: string[];
    italian: string[];
    russian: string[];
    japanese: string[];
    hispanic: string[];
    german: string[];
  };
}

export const nicknamesData: NameDatabase = {
  firstNames: {
    male: {
      american: [
        "John", "Michael", "James", "Robert", "William", "David", "Richard", "Thomas", "Charles", "Christopher",
        "Daniel", "Matthew", "Anthony", "Mark", "Donald", "Steven", "Paul", "Andrew", "Joshua", "Kenneth",
        "Kevin", "Brian", "George", "Edward", "Ronald", "Timothy", "Jason", "Jeffrey", "Ryan", "Jacob",
        "Gary", "Nicholas", "Eric", "Jonathan", "Stephen", "Larry", "Justin", "Scott", "Brandon", "Frank",
        "Gregory", "Benjamin", "Samuel", "Patrick", "Jack", "Dennis", "Jerry", "Tyler", "Aaron", "Henry",
        "Douglas", "Peter", "Jose", "Walter", "Harold", "Kyle", "Carl", "Arthur", "Gerald", "Roger",
        "Keith", "Jeremy", "Terry", "Albert", "Joe", "Sean", "Christian", "Austin", "Harry", "Jesse",
        "Billy", "Bryan", "Bruce", "Jordan", "Ralph", "Roy", "Eugene", "Louis", "Wayne", "Alan",
        "Juan", "Gabriel", "Dylan", "Ethan", "Logan", "Mason", "Noah", "Liam", "Lucas", "Oliver",
        "Elijah", "Carter", "Alexander", "Jameson", "Lincoln", "Hudson", "Nolan", "Ezekiel", "Wyatt", "Nathan"
      ],
      italian: [
        "Antonio", "Giovanni", "Francesco", "Vincenzo", "Salvatore", "Giuseppe", "Roberto", "Mario", "Angelo", "Luigi",
        "Stefano", "Marco", "Leonardo", "Alessandro", "Lorenzo", "Mattia", "Gabriele", "Riccardo", "Davide",
        "Vito", "Carlo", "Pietro", "Franco", "Paolo", "Enzo", "Gennaro", "Silvio", "Aldo", "Fabio",
        "Domenico", "Gaetano", "Michele", "Renato", "Giorgio", "Emilio", "Gianni", "Guido", "Claudio", "Loris",
        "Pippo", "Andrea", "Luca", "Matteo", "Filippo", "Simone", "Federico", "Daniele", "Christian", "Alessio",
        "Gianluca", "Valerio", "Emanuele", "Fabrizio", "Rosario", "Massimo", "Dario", "Diego", "Giacomo", "Enrico",
        "Alberto", "Raffaele", "Ciro", "Nello", "Giancarlo", "Piero", "Giulio", "Nicola", "Tiziano", "Edoardo",
        "Tommaso", "Samuele", "Manuel", "Yuri", "Bruno", "Alfredo", "Armando", "Adriano", "Cesare", "Duilio",
        "Ernesto", "Ettore", "Flavio", "Gino", "Lino", "Lucio", "Mauro", "Nino", "Orlando", "Renzo",
        "Rico", "Rocco", "Sandro", "Ugo", "Umberto", "Valerio", "Gaspare", "Nico", "Primo", "Silvano"
      ],
      russian: [
        "Alexey", "Dmitry", "Alexander", "Sergey", "Andrey", "Artem", "Nikolay", "Mikhail", "Ivan", "Maxim",
        "Vladimir", "Ilya", "Kirill", "Yury", "Denis", "Pavel", "Egor", "Yaroslav", "Roman", "Vladislav",
        "Nikita", "Gleb", "Oleg", "Konstantin", "Viktor", "Stanislav", "Grigory", "Semyon", "Danila", "Timofey",
        "Valery", "Evgeny", "Anatoly", "Boris", "Arthur", "Georgy", "Igor", "Anton", "Stepan", "Fedor",
        "Matvey", "Arseny", "Svyatoslav", "Leonid", "Vadim", "Petr", "Serafim", "Vyacheslav", "Gennady", "Vitaly",
        "Ruslan", "Timur", "Miroslav", "Gordey", "Zakhar", "Savva", "Demid", "Ramil", "Marat", "Eduard",
        "Albert", "Renat", "Vsevolod", "Savely", "David", "Tikhon", "Rostislav", "Arkady", "Ermak", "Platon",
        "Demian", "Nazar", "Ignat", "German", "Klim", "Yakov", "Filipp", "Mark", "Rodion", "Taras",
        "Valentin", "Prokhor", "Trofim", "Kuzma", "Yefim", "Vasilis", "Gury", "Lavrenty", "Lukyan", "Naum",
        "Panteley", "Khariton", "Boleslav", "Svyatogor", "Zinoviy", "Anisim", "Karp", "Miron", "Socrates", "Kim"
      ],
      japanese: [
        "Hiroto", "Ren", "Yuma", "Sota", "Haruto", "Asahi", "Itsuki", "Yuto", "Yamato", "Riku",
        "Kenji", "Takashi", "Yuki", "Daiki", "Tatsuya", "Kazuto", "Shigeru", "Takeshi", "Noboru", "Katsuro",
        "Hiroshi", "Daisuke", "Ryota", "Satoshi", "Shinji", "Koji", "Kazuo", "Osamu", "Tadao", "Minoru",
        "Saburo", "Goro", "Akio", "Yoshio", "Shinya", "Takahiro", "Masao", "Kenta", "Hideki", "Tsutomu",
        "Hayato", "Hinata", "Sora", "Kaito", "Souta", "Yusei", "Ryo", "Ken", "Taiga", "Arata",
        "Shouta", "Sosuke", "Kota", "Kouta", "Sho", "Takuya", "Keisuke", "Ryosuke", "Masahiro", "Tsubasa",
        "Ryohei", "Yosuke", "Katsumi", "Kazuma", "Naoki", "Shogo", "Kazuki", "Yutaka", "Taro", "Jiro",
        "Ichiro", "Kenzo", "Shin", "Akihiro", "Hitoshi", "Koichi", "Ryu", "Satoru", "Keita", "Daigo",
        "Jun", "Eiji", "Tetsuya", "Kazuya", "Naoto", "Kosuke", "Hayate", "Reo", "Yudai", "Kazushige",
        "Shun", "Takumi", "Gen", "Sen", "Ryuichi", "Kenshin", "Yojiro", "Hideyoshi", "Nobuyuki", "Masashi"
      ],
      hispanic: [
        "Alejandro", "Mateo", "Santiago", "Sebastian", "Matias", "Nicolas", "Samuel", "Benjamin", "Lucas", "Diego",
        "Carlos", "Jose", "Juan", "Luis", "Francisco", "Manuel", "Javier", "Jorge", "Pedro", "Miguel",
        "Angel", "Jesus", "Ricardo", "Fernando", "Hector", "Ramon", "Raul", "Roberto", "Oscar", "Daniel",
        "Hugo", "Ruben", "Marcos", "Eduardo", "Enrique", "Cesar", "Alfonso", "Adolfo", "Esteban", "Ignacio",
        "Tomas", "Joaquin", "Andres", "Felipe", "Martin", "Emiliano", "Agustin", "Leonardo", "Gael", "Bautista",
        "Valentino", "Rodrigo", "Alvaro", "Bruno", "Vicente", "Mariano", "Ramiro", "Emilio", "Maximiliano", "Facundo",
        "Adrian", "Julio", "Gustavo", "Guillermo", "Alfredo", "Mauricio", "Gerardo", "Jaime", "Orlando", "Arturo",
        "Damian", "Alex", "Ivan", "Abel", "Sergio", "Fabian", "Lorenzo", "Patricio", "Mario", "Renato",
        "Salvador", "Armando", "Alonso", "Fidel", "Cristobal", "Claudio", "Geronimo", "Rogelio", "Nestor", "Ismael",
        "Gonzalo", "Alvaro", "Esteban", "Felipe", "Diego", "Enrique", "Javier", "Rodrigo", "Eduardo", "Santiago"
      ],
      german: [
        "Lukas", "Leon", "Ben", "Luis", "Jonas", "Felix", "Maximilian", "Paul", "Finn", "Noah",
        "Hans", "Klaus", "Dieter", "Helmut", "Wolfgang", "Jurgen", "Karl", "Otto", "Heinz", "Walter",
        "Friedrich", "Gunter", "Siegfried", "Heinrich", "Wilhelm", "Albert", "Rudolf", "Ludwig", "Kurt", "Franz",
        "Uwe", "Werner", "Manfred", "Gerhard", "Horst", "Rolf", "Bernhard", "Andreas", "Christian", "Stefan",
        "Elias", "Emil", "Henry", "Theo", "Matteo", "Sebastian", "Oliver", "Alexander", "Max", "Jakob",
        "Anton", "Moritz", "David", "Simon", "Julian", "Jan", "Erik", "Tobias", "Nico", "Dominik",
        "Fabian", "Florian", "Martin", "Thomas", "Michael", "Peter", "Frank", "Roland", "Reinhard", "Rainer",
        "Norbert", "Joachim", "Jorg", "Holger", "Torsten", "Sven", "Dirk", "Carsten", "Heiko", "Ralf",
        "Gerd", "Hartmut", "Ulf", "Steffen", "Arnd", "Bernd", "Erich", "Gottfried", "Gustav", "Hermann",
        "Richard", "Hubert", "Wilfried", "Mathias", "Armin", "Eberhard", "Volker", "Matthias", "Gregor", "Kuno"
      ]
    },
    female: {
      american: [
        "Mary", "Patricia", "Jennifer", "Elizabeth", "Linda", "Barbara", "Susan", "Jessica", "Sarah", "Karen",
        "Nancy", "Lisa", "Betty", "Margaret", "Sandra", "Ashley", "Kimberly", "Emily", "Donna", "Michelle",
        "Carol", "Amanda", "Dorothy", "Melissa", "Deborah", "Stephanie", "Rebecca", "Sharon", "Laura", "Cynthia",
        "Kathleen", "Amy", "Shirley", "Angela", "Helen", "Anna", "Brenda", "Pamela", "Nicole", "Samantha",
        "Rachel", "Katherine", "Christine", "Debra", "Janet", "Carolyn", "Heather", "Maria", "Diane", "Olivia",
        "Emma", "Ava", "Charlotte", "Sophia", "Amelia", "Isabella", "Mia", "Evelyn", "Harper", "Camila",
        "Gianna", "Abigail", "Luna", "Ella", "Sofia", "Avery", "Scarlett", "Eleanor", "Madison", "Layla",
        "Penelope", "Aria", "Chloe", "Grace", "Ellie", "Nora", "Hazel", "Zoey", "Riley", "Victoria",
        "Lily", "Aurora", "Violet", "Nova", "Hannah", "Emilia", "Zoe", "Stella", "Everly", "Isla",
        "Leah", "Lillian", "Addison", "Lucy", "Audrey", "Willow", "Bella", "Brooklyn", "Claire", "Paisley"
      ],
      italian: [
        "Sofia", "Giulia", "Aurora", "Alice", "Emma", "Giorgia", "Beatrice", "Greta", "Martina", "Chiara",
        "Francesca", "Giovanna", "Lucia", "Maria", "Rosa", "Anna", "Paola", "Carla", "Elena", "Angela",
        "Silvia", "Laura", "Sara", "Daniela", "Stefania", "Alessandra", "Federica", "Valentina", "Monica", "Simona",
        "Roberta", "Rita", "Teresa", "Grazia", "Caterina", "Luisa", "Antonella", "Patrizia", "Cristina", "Elisabetta",
        "Ginevra", "Ludovica", "Nicole", "Matilde", "Bianca", "Margherita", "Noemi", "Arianna", "Gaia", "Camila",
        "Marta", "Viola", "Asia", "Miriam", "Rebecca", "Serena", "Irene", "Maddalena", "Carola", "Giusy",
        "Annamaria", "Cinzia", "Nicoletta", "Donatella", "Emanuela", "Tiziana", "Sabrina", "Sonia", "Loredana", "Ornella",
        "Clara", "Marina", "Valeria", "Gisella", "Bruna", "Vanna", "Gianna", "Loretta", "Isabella", "Letizia",
        "Fabiola", "Assunta", "Concetta", "Filomena", "Pasqualina", "Vincenza", "Mariangela", "Alessia", "Ester", "Flora",
        "Adelaide", "Alba", "Amalia", "Anita", "Celia", "Diana", "Paola", "Rosaria", "Rachele", "Lucrezia"
      ],
      russian: [
        "Anastasia", "Maria", "Daria", "Anna", "Elizaveta", "Ekaterina", "Polina", "Varvara", "Sofia", "Alisa",
        "Elena", "Olga", "Natalia", "Tatiana", "Svetlana", "Irina", "Yulia", "Ksenia", "Marina", "Victoria",
        "Alena", "Veronika", "Arina", "Alexandra", "Valeria", "Ulyana", "Kristina", "Evgenia", "Yana", "Diana",
        "Inna", "Alla", "Nadezhda", "Lyubov", "Galina", "Tamara", "Ludmila", "Larisa", "Karina", "Angelina",
        "Dina", "Vasilisa", "Kira", "Margarita", "Zlata", "Milana", "Eva", "Taisia", "Miroslava", "Alina",
        "Kamilia", "Snezhana", "Stanislava", "Amalia", "Lidiya", "Zhanna", "Antonina", "Nelli", "Valentina", "Zoya",
        "Raisa", "Nina", "Klavdiya", "Lyudmila", "Aleftina", "Evdokia", "Praskovya", "Glafira", "Vassa", "Agata",
        "Zinaida", "Marta", "Bella", "Albina", "Elmira", "Regina", "Eleonora", "Karolina", "Inga", "Darina",
        "Serafima", "Anfisa", "Yaroslava", "Vladislava", "Svyatoslava", "Stefania", "Marianna", "Adelina", "Karina", "Liza",
        "Oksana", "Nika", "Tatyana", "Rada", "Maya", "Lada", "Kseniya", "Inessa", "Ganna", "Faina"
      ],
      japanese: [
        "Himari", "Hina", "Yua", "Sakura", "Ichika", "Akari", "Sara", "Yui", "Aoi", "Niko",
        "Yoko", "Keiko", "Kimi", "Chiyo", "Kazuko", "Midori", "Junko", "Michiko", "Naoko", "Yoshiko",
        "Sakiko", "Reiko", "Emiko", "Ayumi", "Haruka", "Nanami", "Mai", "Megumi", "Kaori", "Yuka",
        "Saki", "Chie", "Rin", "Aimi", "Yumi", "Natsumi", "Eri", "Tomoko", "Miyuki", "Aya",
        "Mei", "Tsubaki", "Koharu", "Rio", "Hinata", "Miu", "Mio", "Honoka", "Kanna", "Kokona",
        "Asuka", "Chika", "Emi", "Hitomi", "Kaede", "Kasumi", "Mari", "Misaki", "Rika", "Ritsuko",
        "Sayaka", "Shiori", "Tamiko", "Wakana", "Yuko", "Chinatsu", "Fumiko", "Hanako", "Haru", "Haruna",
        "Kana", "Mayumi", "Minako", "Rei", "Rie", "Saori", "Shinobu", "Sumiko", "Yukiko", "Yuriko",
        "Maiko", "Ayame", "Chihiro", "Hikari", "Izumi", "Kotone", "Mana", "Nao", "Nozomi", "Ran",
        "Rina", "Suzu", "Tomoe", "Yayoi", "Chisato", "Erina", "Mina", "Mizuki", "Sae", "Yurie", "Kaho"
      ],
      hispanic: [
        "Sofia", "Isabella", "Camila", "Valentina", "Valeria", "Mariana", "Gabriela", "Victoria", "Sara", "Daniela",
        "Maria", "Juana", "Ana", "Carmen", "Rosa", "Josefa", "Francisca", "Isabel", "Marta", "Lucia",
        "Elena", "Luisa", "Guadalupe", "Teresa", "Patricia", "Leticia", "Beatriz", "Alicia", "Yolanda", "Gloria",
        "Silvia", "Adriana", "Consuelo", "Esperanza", "Mercedes", "Raquel", "Margarita", "Dolores", "Pilar", "Soledad",
        "Martina", "Luciana", "Antonella", "Catalina", "Emilia", "Zoe", "Alma", "Paz", "Renata", "Maite",
        "Paulina", "Constanza", "Florencia", "Agustina", "Josefina", "Fernanda", "Alejandra", "Regina", "Montserrat", "Isabel",
        "Ximena", "Natalia", "Jimena", "Estefania", "Giselle", "Liliana", "Karla", "Veronica", "Monica", "Lourdes",
        "Rocio", "Araceli", "Cecilia", "Graciela", "Elvira", "Blanca", "Miriam", "Luz", "Aurora", "Ines",
        "Adela", "Ofelia", "Estela", "Rosario", "Socorro", "Angelica", "Virginia", "Erika", "Marisol", "Guadalupe",
        "Isabel", "Aitana", "Lola", "Paula", "Jimena", "Abril", "Triana", "Julia", "Candela", "Rocio"
      ],
      german: [
        "Emma", "Mia", "Sophia", "Hannah", "Emilia", "Anna", "Marie", "Lina", "Mila", "Ella",
        "Ursula", "Monika", "Petra", "Elisabeth", "Sabine", "Renate", "Helga", "Gisela", "Ingrid", "Karin",
        "Brigitte", "Erika", "Christa", "Hannelore", "Gerda", "Gabriele", "Ilse", "Jutta", "Angelika",
        "Anneliese", "Margarete", "Barbara", "Katarina", "Heike", "Ute", "Birgit", "Marion", "Dagmar", "Kerstin",
        "Lea", "Clara", "Ida", "Luisa", "Charlotte", "Frieda", "Greta", "Maja", "Leni", "Johanna",
        "Martha", "Josefine", "Paula", "Theresa", "Matilda", "Elena", "Nora", "Sarah", "Laura", "Lisa",
        "Christina", "Julia", "Katharina", "Stefanie", "Sandra", "Anja", "Nicole", "Tanja", "Yvonne",
        "Melanie", "Nadine", "Antje", "Inge", "Gabi", "Beate", "Heide", "Sigrid", "Ilona", "Edith",
        "Gertrud", "Margot", "Ruth", "Hildegard", "Lieselotte", "Erna", "Gertrude", "Gundula", "Ingeborg", "Elfriede",
        "Irmgard", "Waltraud", "Brunhilde", "Adelheid", "Mathilde", "Hedwig", "Sofie", "Lotte", "Klara", "Meta"
      ]
    }
  },
  lastNames: {
    american: [
      "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
      "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
      "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson",
      "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores",
      "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts",
      "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes",
      "Stewart", "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper",
      "Peterson", "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson",
      "Watson", "Brooks", "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes",
      "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers", "Long", "Ross", "Foster", "Jimenez",
      "Porter", "Hunter", "Drake", "Marshall", "Gibson", "West", "Jordan", "Owens", "Reynolds", "Fisher",
      "Ellis", "Harrison", "Mason", "Simpson", "Webb", "Hamilton", "Graham", "Sullivan", "Wallace", "Woods"
    ],
    italian: [
      "Rossi", "Russo", "Ferrari", "Esposito", "Bianchi", "Romano", "Colombo", "Ricci", "Marini", "Greco",
      "Bruno", "Gallo", "Conti", "De_Luca", "Costa", "Giordano", "Mancini", "Rizzo", "Lombardi", "Moretti",
      "Barbieri", "Fontana", "Santoro", "Mariani", "Rinaldi", "Caruso", "Ferraro", "Galli", "Martini", "Leone",
      "Sanna", "Pagano", "Valente", "Coppola", "Guerriero", "Caputo", "Monti", "Ferri", "Sorrentino", "Vitali",
      "Soprano", "Corleone", "Morello", "Gambino", "Luciano", "Capone", "Gotti", "Bonanno", "Genovese", "Lucchese",
      "Bernardi", "Mazza", "Orlando", "Gentile", "Lombardo", "Serra", "Riva", "Villa", "Basso", "Pellegrini",
      "Palumbo", "Farina", "Rocca", "Ferretti", "Gatti", "Belli", "Piras", "Parisi", "Fabbri", "Montanari",
      "Grasso", "Manna", "De_Santis", "De_Angelis", "Barone", "Fiore", "Marino", "Messina", "Neri", "Casadei",
      "Guerra", "Silvestri", "Pellegrino", "D_Amico", "Carbone", "Pecoraro", "Abate", "Ruggiero", "Fazio",
      "Ferrara", "Leotta", "Pugliese", "Biondi", "Castelli", "Marchetti", "De_Rosa", "De_Stefano", "Sartori", "Giglioni",
      "Donati", "Basile", "Righi", "Giuliani", "Prati", "Molinari", "Magnani", "Bernasconi", "Guerrieri", "Gigli",
      "Franchetti", "Lanza", "Cattaneo", "Crespi", "Pozzi", "Merlo", "Radaelli", "Visconti", "Sforza", "Borghese",
      "Zamboni", "Malatesta", "Della_Valle", "Guerini", "Totti", "Pirlo", "Baggio", "Maldini", "Buffon", "Inzaghi"
    ],
    russian: [
      "Ivanov", "Smirnov", "Kuznetsov", "Popov", "Vasiliev", "Petrov", "Sokolov", "Mikhailov", "Fedorov", "Morozov",
      "Volkov", "Alekseev", "Lebedev", "Semenov", "Egorov", "Pavlov", "Kozlov", "Stepanov", "Nikolaev", "Orlov",
      "Andreev", "Makarov", "Nikitin", "Zakharov", "Zaitsev", "Soloviev", "Borisov", "Yakovlev", "Vorobiev", "Frolov",
      "Gromov", "Voronin", "Belov", "Medvedev", "Tarasov", "Romanov", "Sobolev", "Dmitriev", "Karpov", "Kiselev",
      "Gusev", "Titov", "Krasnov", "Filatov", "Sidorov", "Markov", "Savin", "Sergeev", "Belyaev", "Safonov",
      "Ignatov", "Kovalenko", "Shevchenko", "Bondarenko", "Tkachenko", "Kravchenko", "Moroz", "Melnik", "Shevchuk", "Koval",
      "Boyko", "Oleinik", "Ponomarev", "Gerasimov", "Davydov", "Zhuravlev", "Baranov", "Rabinovich", "Abramov", "Safin",
      "Safarov", "Zimin", "Kolesnikov", "Efimov", "Tikhonov", "Grigoriev", "Sazonov", "Lytkin", "Nekrasov", "Panov",
      "Bobrov", "Tupolev", "Kuzmin", "Fokin", "Polyakov", "Komarov", "Kovalev", "Yudin", "Belousov", "Kondratiev",
      "Shcherbakov", "Maslov", "Kabanov", "Antonov", "Gorbachev", "Yeltsin", "Putin", "Medvedev", "Shoygu", "Lavrov",
      "Sobyanin", "Mishustin", "Kadyrov", "Peskov", "Prigozhin", "Durov", "Turgenev", "Tolstoy", "Dostoevsky", "Pushkin",
      "Lermontov", "Chekhov", "Gogol", "Bulgakov", "Nabokov", "Yesenin", "Shalamov", "Solzhenitsyn", "Pasternak", "Brodsky"
    ],
    japanese: [
      "Sato", "Suzuki", "Takahashi", "Tanaka", "Watanabe", "Ito", "Yamamoto", "Nakamura", "Kobayashi", "Kato",
      "Yoshida", "Yamada", "Sasaki", "Yamaguchi", "Matsumoto", "Inoue", "Kimura", "Hayashi", "Shimizu", "Yamazaki",
      "Mori", "Abe", "Ikeda", "Hashimoto", "Yamashita", "Ishikawa", "Nakajima", "Ogawa", "Maeda", "Okada",
      "Hasegawa", "Fujita", "Goto", "Kondo", "Murakami", "Sando", "Yakuza", "Arakawa", "Kuroda", "Shigemitsu",
      "Toyoda", "Honda", "Sakamoto", "Miyamoto", "Kurosawa", "Fukuda", "Uchida", "Chiba", "Kaneko", "Sano",
      "Ishii", "Asano", "Fukui", "Fujimoto", "Fujiwara", "Hirano", "Imai", "Kojima", "Kubo", "Matsui",
      "Miura", "Mizuno", "Nakagawa", "Nishimura", "Okamoto", "Ono", "Saitou", "Sakurai", "Sugawara", "Sugiyama",
      "Taguchi", "Takada", "Takeda", "Takeuchi", "Ueda", "Ueno", "Wada", "Yokoyama", "Yoshikawa", "Akita",
      "Chinen", "Furutani", "Hada", "Hamada", "Hanaoka", "Hata", "Hirao", "Hirasawa", "Inagaki", "Ishida",
      "Kanzaki", "Kawaguchi", "Kishi", "Kitamura", "Kurata", "Mashita", "Matsuo", "Morioka", "Nagano", "Nagata",
      "Naito", "Nishida", "Obata", "Oda", "Okazaki", "Omori", "Otani", "Ozawa", "Saito", "Sawayama", "Shima",
      "Shiratani", "Suda", "Takagi", "Uchimura", "Yano", "Yoshimura", "Sone", "Natsume", "Kawabata", "Mishima"
    ],
    hispanic: [
      "Gonzalez", "Rodriguez", "Gomez", "Fernandez", "Diaz", "Alvarez", "Perez", "Ruiz", "Sanchez", "Romero",
      "Garcia", "Sosa", "Torres", "Benitez", "Ramirez", "Medina", "Flores", "Castro", "Morales", "Suarez",
      "Herrera", "Aguirre", "Guzman", "Blanco", "Jimenez", "Ortega", "Silva", "Delgado", "Rios", "Mendoza",
      "Cardozo", "Escobar", "Vasquez", "Mendez", "Acosta", "Rojas", "Marquez", "Cabral", "Vargas", "Guerrero",
      "Montoya", "Cabrera", "Fuentes", "Carrasco", "Santana", "Cortez", "Salazar", "Reyes", "Pena", "Padrino",
      "Dominguez", "Gimenez", "Juarez", "Nunez", "Velasquez", "Ordonez", "Castillo", "Maldonado", "Santiago", "Caceres",
      "Paredes", "Espinoza", "Lozano", "Pacheco", "Guillen", "Mora", "Navarro", "Arias", "Zamora", "Miranda",
      "Cordova", "Figueroa", "Avila", "Serrano", "Barrios", "Zuniga", "Olivares", "Molina", "Valenzuela", "Carrillo",
      "Montes", "Soto", "Rivera", "Cruz", "Ramos", "Ortiz", "Pena", "Velasquez", "Marquez", "Herrera",
      "Castro", "Guzman", "Salazar", "Gomez", "Delgado", "Jimenez", "Pena", "Silva", "Suarez", "Cabrera",
      "Tejada", "Vargas", "Barajas", "Bernal", "Gallegos", "Peralta", "Nieto", "Villarreal", "Rosales", "Vela"
    ],
    german: [
      "Muller", "Schmidt", "Schneider", "Fischer", "Weber", "Meyer", "Wagner", "Becker", "Schulz", "Hoffmann",
      "Schafer", "Koch", "Bauer", "Richter", "Klein", "Wolf", "Schroder", "Neumann", "Schwarz", "Zimmermann",
      "Braun", "Kruger", "Hofmann", "Hartmann", "Lange", "Schmitt", "Werner", "Schmitz", "Krause", "Meier",
      "Lehmann", "Schmid", "Herrmann", "Maier", "Mayer", "Walter", "Kohl", "Adenauer", "Bismarck", "Schumacher",
      "Kaiser", "Vogel", "Fuchs", "Lang", "Peters", "Scholz", "Stein", "Gorecka", "Jung", "Kraus",
      "Brandt", "Schreiber", "Graf", "Franke", "Menzel", "Ziegler", "Roth", "Haas", "Bayer", "Schuster",
      "Bohm", "Arnold", "Winkler", "Gorecki", "Horn", "Busch", "Huber", "Ludwig", "Kramer", "Lorenz",
      "Schubert", "Heine", "Schiller", "Goethe", "Kant", "Nietzsche", "Freud", "Kafka", "Marx", "Engels",
      "Schopenhauer", "Hegel", "Mann", "Brecht", "Hauptmann", "Hesse", "Boll", "Grass", "Kuhn", "Thomas",
      "Voigt", "Schrader", "Eberhardt", "Ritter", "Kopp", "Sauer", "Kaufmann", "Grosz", "Benz", "Porsche",
      "Kraus", "Kruse", "Baumann", "Harder", "Klose", "Lahm", "Neuer", "Kroos", "Muller", "Schweinsteiger"
    ]
  }
};

/**
 * Calculates total possible unique nickname combinations in the database
 */
export function calculateTotalCombinations(): number {
  let maleFirstNamesCount = 0;
  let femaleFirstNamesCount = 0;
  let totalLastNamesCount = 0;

  // Count male first names
  const maleCats = nicknamesData.firstNames.male;
  for (const key in maleCats) {
    maleFirstNamesCount += maleCats[key as keyof typeof maleCats].length;
  }

  // Count female first names
  const femaleCats = nicknamesData.firstNames.female;
  for (const key in femaleCats) {
    femaleFirstNamesCount += femaleCats[key as keyof typeof femaleCats].length;
  }

  // Count last names
  const lastCats = nicknamesData.lastNames;
  for (const key in lastCats) {
    totalLastNamesCount += lastCats[key as keyof typeof lastCats].length;
  }

  // Combinations = (MaleFirst + FemaleFirst) * TotalLast
  return (maleFirstNamesCount + femaleFirstNamesCount) * totalLastNamesCount;
}

/**
 * Calculates the total individual unique name components (words/strings) written in the file
 */
export function calculateTotalBaseNames(): number {
  let count = 0;
  
  // Male first names
  const maleCats = nicknamesData.firstNames.male;
  for (const key in maleCats) {
    count += maleCats[key as keyof typeof maleCats].length;
  }

  // Female first names
  const femaleCats = nicknamesData.firstNames.female;
  for (const key in femaleCats) {
    count += femaleCats[key as keyof typeof femaleCats].length;
  }

  // Last names
  const lastCats = nicknamesData.lastNames;
  for (const key in lastCats) {
    count += lastCats[key as keyof typeof lastCats].length;
  }

  return count;
}
