var flightsD = [
    [
        "20:00",
        "Париж",
        "AF1745 / SU3004",
        "E",
        "Регистрация идет"
    ],
    [
        "20:00",
        "Магадан",
        "FV6289 / SU6289",
        "D",
        "Регистрация идет"
    ],
    [
        "20:05",
        "Дюссельдорф",
        "SU2436",
        "D",
        "Регистрация идет"
    ],
    [
        "20:10",
        "Ханой",
        "SU290",
        "D",
        "Регистрация идет"
    ],
    [
        "20:10",
        "Анталья",
        "SU2144",
        "F",
        "Регистрация идет"
    ],
    [
        "20:15",
        "Рим",
        "SU2404 / Z7163",
        "D",
        "Регистрация идет"
    ],
    [
        "20:20",
        "Ташкент",
        "SU1870",
        "F",
        "Регистрация идет"
    ],
    [
        "20:20",
        "София",
        "FB628",
        "F",
        "Отменен"
    ],
    [
        "20:20",
        "Санкт-Петербург",
        "SU030 / AZ3038 / MU8169",
        "B",
        "Регистрация идет"
    ],
    [
        "20:25",
        "Париж",
        "SU2460 / AF4859",
        "D",
        "Регистрация идет"
    ],
    [
        "20:25",
        "Прага",
        "SU2016 / OK4895",
        "E",
        "Регистрация идет"
    ],
    [
        "20:25",
        "Мюнхен",
        "SU2594",
        "D",
        "Регистрация идет"
    ]]
var flightsA =
    [
        [
            "20:30",
            "Копенгаген",
            "SU2496",
            "E",
            "Совершил посадку"
        ],
        [
            "20:30",
            "Гамбург",
            "SU2348",
            "D",
            "Совершил посадку"
        ],
        [
            "20:30",
            "Венеция",
            "SU2422 / AZ7165",
            "E",
            "Совершил посадку"
        ],
        [
            "20:35",
            "Лиссабон",
            "SU2606",
            "D",
            "Совершил посадку"
        ],
        [
            "20:35",
            "Вена",
            "SU2354",
            "E",
            "Совершил посадку"
        ],
        [
            "20:35",
            "Осло",
            "SU2534",
            "E",
            "Совершил посадку"
        ],
        [
            "20:40",
            "Стокгольм",
            "SU2386",
            "D",
            "Совершил посадку"
        ],
        [
            "20:40",
            "Берлин",
            "SU2316",
            "D",
            "Совершил посадку"
        ],
        [
            "20:40",
            "Ереван",
            "SU1868 / AF4852 / KL2894",
            "D",
            "Совершил посадку"
        ],
        [
            "20:45",
            "Красноярск",
            "SU1480 / AF4896 / AZ5668 / KL3186",
            "B",
            "Совершил посадку"
        ],
        [
            "20:45",
            "Владивосток",
            "SU1702 / AZ3776 / KL3184",
            "D",
            "Совершил посадку"
        ],
        [
            "20:50",
            "Белград",
            "SU2092 / JU8135",
            "F",
            "Совершил посадку"
        ]
    ]
var flightsL =
    [
        [
            "20:50",
            "Брюссель",
            "SU2618",
            "E",
            "Задерживается"
        ],
        [
            "20:50",
            "Милан",
            "SU2414 / AZ7015",
            "D",
            "Задерживается"
        ],
        [
            "20:55",
            "Каир",
            "SU400 / SV6024",
            "F",
            "Задерживается"
        ],
        [
            "20:55",
            "Пхукет",
            "SU274",
            "D",
            "Задерживается"
        ],
        [
            "21:00",
            "Сеул",
            "SU250 / GA9411 / KE5924",
            "D",
            "Задерживается"
        ],
        [
            "21:00",
            "Калининград",
            "SU1008 / MU8175",
            "B",
            "Задерживается"
        ],
        [
            "21:05",
            "Санкт-Петербург",
            "SU032 / MU8171",
            "B",
            "Задерживается"
        ],
        [
            "21:05",
            "Болонья",
            "SU2428 / AZ7215",
            "E",
            "Задерживается"
        ],
        [
            "21:05",
            "Новосибирск",
            "SU1548 / AF4857 / AZ3950 / KL3208",
            "B",
            "Задерживается"
        ],
        [
            "21:10",
            "Будапешт",
            "SU2468",
            "D",
            "Задерживается"
        ],
        [
            "21:10",
            "Алматы",
            "SU1946",
            "F",
            "Задерживается"
        ],
        [
            "21:10",
            "Бухарест",
            "SU2036 / RO9206",
            "E",
            "Задерживается"
        ],
        [
            "21:15",
            "Кемерово",
            "SU1450 / AZ5657 / KL3300",
            "B",
            "Задерживается"
        ],
        [
            "21:15",
            "Ош",
            "SU1894",
            "D",
            "Задерживается"
        ],
        [
            "21:15",
            "Гетеборг",
            "SU2180",
            "D",
            "Задерживается"
        ],
        [
            "21:20",
            "Сочи",
            "SU1128 / AF4420 / KL3204",
            "B",
            "Задерживается"
        ],
        [
            "21:20",
            "Пекин",
            "SU204",
            "D",
            "Задерживается"
        ],
        [
            "21:20",
            "Пермь",
            "SU1394 / KL3248",
            "B",
            "Задерживается"
        ],
        [
            "21:25",
            "Шэньчжэнь",
            "CZ8372",
            "D",
            "Задерживается"
        ],
        [
            "21:25",
            "Варшава",
            "LO678 / SU3702",
            "E",
            "Задерживается"
        ],
        [
            "21:25",
            "Бишкек",
            "SU1882 / AF4432 / AZ5666 / KL2934",
            "D",
            "Задерживается"
        ]
    ]