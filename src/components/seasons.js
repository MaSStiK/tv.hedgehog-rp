const seasons = {
    s4: {
        title: "Сезон 4",
        videos: [
            // {
            //     title: "4 сезон 14 серия | Название не указано",
            //     thumbnail: require("@/assets/thumbnails/S4E8.png"),
            //     videoID: "s4e14",
            //     src: "",
            //     publishedAt: 0, // Выйдет 30.12 в 16:00 по МСК
            //     views: "0 просмотров"
            // },
            {
                title: "4 сезон 13 серия | Название не указано",
                thumbnail: require("@/assets/thumbnails/coming_soon.png"),
                videoID: "s4e13",
                src: "",
                publishedAt: "2024-12-31T14:00:00Z", // Выйдет 31.12 в 17:00 по МСК
                views: "0 просмотров"
            },
            {
                title: "4 сезон 12 серия | Название не указано",
                thumbnail: require("@/assets/thumbnails/coming_soon.png"),
                videoID: "s4e12",
                src: "",
                publishedAt: "2024-12-31T12:00:00Z", // Выйдет 31.12 в 15:00 по МСК
                views: "0 просмотров"
            },
            {
                title: "4 сезон 11 серия | Тяжелые десятилетия",
                thumbnail: require("@/assets/thumbnails/S4E11.png"),
                videoID: "s4e11",
                src: "https://drive.google.com/file/d/1B0ZVoUFs8XJX9k0qLrEWzt_TlIE5MvuE/preview",
                publishedAt: "2024-12-31T09:00:00Z", // Выйдет 31.12 в 12:00 по МСК
                views: "7 тыс. просмотров"
            },
            {
                title: "4 сезон 10 серия | Личностные истории",
                thumbnail: require("@/assets/thumbnails/S4E10.png"),
                videoID: "s4e10",
                src: "https://drive.google.com/file/d/1XPebPrX5k0jfor_5l6YGFUfcqa9Hh4o2/preview",
                publishedAt: "2024-12-30T13:00:00Z", // Выйдет 30.12 в 16:00 по МСК
                views: "4 тыс. просмотров"
            },
            {
                title: "4 сезон 9 серия | Испанский, Греческий, Ежиный",
                thumbnail: require("@/assets/thumbnails/S4E9.png"),
                videoID: "s4e9",
                src: "https://drive.google.com/file/d/1CbAFv40iiMReXmdqQeZGLFJwVxkHjzJj/preview",
                publishedAt: "2024-12-30T10:00:00Z", // Выйдет 30.12 в 13:00 по МСК
                views: "6 тыс. просмотров"
            },
            {
                title: "4 сезон 8 серия | Суета",
                thumbnail: require("@/assets/thumbnails/S4E8.png"),
                videoID: "s4e8",
                src: "https://drive.google.com/file/d/10Gw7CB63kcwdVSOCBgmmFHvFTh_M5vzO/preview",
                publishedAt: "2024-08-09T10:00:00Z", // Выйдет 09.08 в 13:00 по МСК
                views: "292 тыс. просмотров"
            },
            {
                title: "4 сезон 7 серия | Напряжение у западных морей",
                thumbnail: require("@/assets/thumbnails/S4E7.png"),
                videoID: "s4e7",
                src: "https://drive.google.com/file/d/1WaNMI1V_O7-MTPdxbAe9UiUk2JxpT-0g/preview",
                publishedAt: "2024-08-07T10:00:00Z", // Выйдет 07.08 в 13:00 по МСК
                views: "286 тыс. просмотров"
            },
            {
                title: "4 сезон 6 серия | Лефанляндский вопрос",
                thumbnail: require("@/assets/thumbnails/S4E6.png"),
                videoID: "s4e6",
                src: "https://drive.google.com/file/d/1QZqfQENrVqQPA23sdJH0nB6b6Kepafwm/preview",
                publishedAt: "2024-08-05T08:00:00Z", // Выйдет 05.08 в 11:00 по МСК
                views: "278 тыс. просмотров"
            },
            {
                title: "4 сезон 5 серия | Коллапс",
                thumbnail: require("@/assets/thumbnails/S4E5.png"),
                videoID: "s4e5",
                src: "https://drive.google.com/file/d/1hnti2vqzvixmZC3W6HdZjBwmP51AikAj/preview",
                publishedAt: "2024-06-10T09:00:00Z",
                views: "310 тыс. просмотров"
            },
            {
                title: "4 сезон 4 серия | Хиенспатт",
                thumbnail: require("@/assets/thumbnails/S4E4.png"),
                videoID: "s4e4",
                src: "https://drive.google.com/file/d/1aSTjPc7-X-vuUiGYgmmyAh20czQdPmOY/preview",
                publishedAt: "2023-12-31T08:00:36Z",
                views: "295 тыс. просмотров"
            },
            {
                title: "4 сезон 3 серия | Осваиваемся",
                thumbnail: require("@/assets/thumbnails/S4E3.png"),
                videoID: "s4e3",
                src: "https://drive.google.com/file/d/1KU_HjAQEyRZaq2TqWdlYzVdsSi4fboN-/preview",
                publishedAt: "2023-11-20T14:00:35Z",
                views: "323 тыс. просмотров"
            },
            {
                title: "4 сезон 2 серия | 2016, Новый Свет и Анастасия",
                thumbnail: require("@/assets/thumbnails/S4E2.png"),
                videoID: "s4e2",
                src: "https://drive.google.com/file/d/1Ybk6JZSo2l77SU4WkMBe67dysGnJr2Bi/preview",
                publishedAt: "2023-07-25T08:00:07Z",
                views: "380 тыс. просмотров"
            },
            {
                title: "4 сезон 1 серия | Спокойные года",
                thumbnail: require("@/assets/thumbnails/S4E1.png"),
                videoID: "s4e1",
                src: "https://drive.google.com/file/d/1tSkwfiZTRGhKBV2UUshHTVQYPMTc_BE4/preview",
                publishedAt: "2023-07-24T07:00:25Z",
                views: "394 тыс. просмотров"
            }
        ]
    },
    s3: {
        title: "Сезон 3",
        videos: [
            {
                title: "3 сезон 10 серия | XIV век",
                thumbnail: require("@/assets/thumbnails/S3E10.png"),
                videoID: "s3e10",
                src: "https://drive.google.com/file/d/1Ul2FE-sQMJ4HFmSxXruAu4QZFlB6ox1X/preview",
                publishedAt: "2022-12-31T16:45:02Z",
                views: "694 тыс. просмотров"
            },
            {
                title: "3 сезон 9 серия | Всё точно приходит в норму",
                thumbnail: require("@/assets/thumbnails/S3E9.png"),
                videoID: "s3e9",
                src: "https://drive.google.com/file/d/1_zcF1DYcVnvVolDkQ5ovwgMxCZXKVL0n/preview",
                publishedAt: "2022-12-31T09:00:34Z",
                views: "683 тыс. просмотров"
            },
            {
                title: "3 сезон 8 серия | От вторжения к вторжению",
                thumbnail: require("@/assets/thumbnails/S3E8.png"),
                videoID: "s3e8",
                src: "https://drive.google.com/file/d/1zvLkPlpEltwkszbv-0TrapebvqrZLZUV/preview",
                publishedAt: "2022-12-31T07:00:00Z",
                views: "640 тыс. просмотров"
            },
            {
                title: "3 сезон 7 серия | Потерянный Эрикград, Рафталия и Владо-Никитский Раскол",
                thumbnail: require("@/assets/thumbnails/S3E7.png"),
                videoID: "s3e7",
                src: "https://drive.google.com/file/d/1OC4_cEDX-sk2THAdR9f0wwod_ZkxR2LU/preview",
                publishedAt: "2022-07-01T07:00:14Z",
                views: "551 тыс. просмотров"
            },
            {
                title: "3 сезон 6 серия | Кошмар",
                thumbnail: require("@/assets/thumbnails/S3E6.png"),
                videoID: "s3e6",
                src: "https://drive.google.com/file/d/1BMuRr3WyT0Qk0C7DLzTTUFHF9V2xmp5b/preview",
                publishedAt: "2022-03-08T10:00:23Z",
                views: "744 тыс. просмотров"
            },
            {
                title: "3 сезон 5 серия | Начало Нового Возрождения",
                thumbnail: require("@/assets/thumbnails/S3E5.png"),
                videoID: "s3e5",
                src: "https://drive.google.com/file/d/1m9mvxg_y87wNyvsVedZ7gtTRNqQbD-pw/preview",
                publishedAt: "2021-12-31T12:00:00Z",
                views: "802 тыс. просмотров"
            },
            {
                title: "3 сезон 4 серия | Конец близко",
                thumbnail: require("@/assets/thumbnails/S3E4.png"),
                videoID: "s3e4",
                src: "https://drive.google.com/file/d/1Vboj8mTB0AgSdxcp8w5xaiLOP35cnj4I/preview",
                publishedAt: "2021-12-31T10:00:00Z",
                views: "1 млн просмотров"
            },
            {
                title: "3 сезон 3 серия | Проблемы обоих сторон",
                thumbnail: require("@/assets/thumbnails/S3E3.png"),
                videoID: "s3e3",
                src: "https://drive.google.com/file/d/1n0vuzcRBt90OtVbZlfgT50K4D2XUGbt3/preview",
                publishedAt: "2021-12-31T08:00:00Z",
                views: "766 тыс. просмотров"
            },
            {
                title: "3 сезон 2 серия | Кулсториробоб навсегда",
                thumbnail: require("@/assets/thumbnails/S3E2.png"),
                videoID: "s3e2",
                src: "https://drive.google.com/file/d/1pQlbFwKoFbm5y6MyK0whtJfZN0hK7OCc/preview",
                publishedAt: "2021-09-18T11:30:00Z",
                views: "730 тыс. просмотров"
            },
            {
                title: "3 сезон 1 серия | И всё спокойнее становится жить... | 1 - 13 декабря",
                thumbnail: require("@/assets/thumbnails/S3E1.png"),
                videoID: "s3e1",
                src: "https://drive.google.com/file/d/1pkVzWc46lOo2YAwMAUz9i9Up8yT05bbz/preview",
                publishedAt: "2021-07-28T12:00:00Z",
                views: "821 тыс. просмотров"
            }
        ]
    },
    s2: {
        title: "Сезон 2",
        videos: [
            {
                title: "2 сезон 7 серия | Полный конец",
                thumbnail: require("@/assets/thumbnails/S2E7.png"),
                videoID: "s2e7",
                src: "https://drive.google.com/file/d/1FxHj5FhiF1lxnjLJZsJj8-sSmPfExRiC/preview",
                publishedAt: "2021-07-24T09:00:00Z",
                views: "1,5 млн просмотров"
            },
            {
                title: "2 сезон 6 серия | Конец троевластия - часть вторая",
                thumbnail: require("@/assets/thumbnails/S2E6.png"),
                videoID: "s2e6",
                src: "https://drive.google.com/file/d/13NU1iLVQmbn5evR9VDzQVZtBxvuV0InZ/preview",
                publishedAt: "2021-07-02T16:00:00Z",
                views: "2,2 млн просмотров"
            },
            {
                title: "2 сезон 5 серия | Конец троевластия - часть первая",
                thumbnail: require("@/assets/thumbnails/S2E5.png"),
                videoID: "s2e5",
                src: "https://drive.google.com/file/d/1zly9j8foWiAkwHAvmw0CHGo2_uG0a1zt/preview",
                publishedAt: "2021-06-28T04:00:00Z",
                views: "1,9 млн просмотров"
            },
            {
                title: "2 сезон 4 серия | И разрушения пошли по планете..",
                thumbnail: require("@/assets/thumbnails/S2E4.png"),
                videoID: "s2e4",
                src: "https://drive.google.com/file/d/13jfBtFWlT8lgfOop9BBhoiFsWl6T5lfJ/preview",
                publishedAt: "2021-06-25T01:15:00Z",
                views: "2,6 млн просмотров"
            },
            {
                title: "2 сезон 3 серия | Все сложно",
                thumbnail: require("@/assets/thumbnails/S2E3.png"),
                videoID: "s2e3",
                src: "https://drive.google.com/file/d/1-wkJVqNjjHv6bSyEi5z4mG5IDDm_J1mL/preview",
                publishedAt: "2021-06-09T20:00:00Z",
                views: "2,4 млн просмотров"
            },
            {
                title: "2 сезон 2 серия | Неспокойное десятилетие",
                thumbnail: require("@/assets/thumbnails/S2E2.png"),
                videoID: "s2e2",
                src: "https://drive.google.com/file/d/1fOWfx8Wezcqwf0u13hgwShihYp1uWnIu/preview",
                publishedAt: "2021-05-01T07:00:00Z",
                views: "3 млн просмотров"
            },
            {
                title: "2 сезон 1 серия | Новый мир",
                thumbnail: require("@/assets/thumbnails/S2E1.png"),
                videoID: "s2e1",
                src: "https://drive.google.com/file/d/1uzj3_ZdB7g-6g1bY7R-L2sLwelz3xKrT/preview",
                publishedAt: "2021-03-08T07:00:00Z",
                views: "3,1 млн просмотров"
            }
        ]
    },
    s1: {
        title: "Сезон 1",
        videos: [
            {
                title: "1 сезон 8 серия | Переход к новому миру",
                thumbnail: require("@/assets/thumbnails/S1E8.png"),
                videoID: "s1e8",
                src: "https://drive.google.com/file/d/1bOJBjkutV_WNWf4R4cV0q1WUFsMT-ZmS/preview",
                publishedAt: "2020-12-31T12:00:00Z",
                views: "2,3 млн просмотров"
            },
            {
                title: "1 сезон 7 серия | Сложное десятилетие",
                thumbnail: require("@/assets/thumbnails/S1E7.png"),
                videoID: "s1e7",
                src: "https://drive.google.com/file/d/1icbQUV_iHX8BkoWeAMrvyynOeSwOUjlK/preview",
                publishedAt: "2020-12-31T10:00:00Z",
                views: "2,6 млн просмотров"
            },
            {
                title: "1 сезон 6 серия | Жизнь после смерти",
                thumbnail: require("@/assets/thumbnails/S1E6.png"),
                videoID: "s1e6",
                src: "https://drive.google.com/file/d/1PUfWvyw8eXE7zBA5J8uDoAqZcQwL78KF/preview",
                publishedAt: "2020-12-31T08:00:00Z",
                views: "3,2 млн просмотров"
            },
            {
                title: "1 сезон 5 серия | Продолжение медвежьего конца",
                thumbnail: require("@/assets/thumbnails/S1E5.png"),
                videoID: "s1e5",
                src: "https://drive.google.com/file/d/1-rjefdCSoiUnnK6CoCx3jZ8P1Ionmt5w/preview",
                publishedAt: "2020-11-26T14:00:11Z",
                views: "2,8 млн просмотров"
            },
            {
                title: "1 сезон 4 серия | Начало медвежьего конца",
                thumbnail: require("@/assets/thumbnails/S1E4.png"),
                videoID: "s1e4",
                src: "https://drive.google.com/file/d/1PXfKD24QIsVrRvLtK3J2i2L-SxVqVW6l/preview",
                publishedAt: "2020-08-01T17:15:00Z",
                views: "2,6 млн просмотров"
            },
            {
                title: "1 сезон 3 серия | Затишье перед бурей",
                thumbnail: require("@/assets/thumbnails/S1E3.png"),
                videoID: "s1e3",
                src: "https://drive.google.com/file/d/1t84xQ5R-gvo5LxUMy3ZqWQ-rk_XRMwX_/preview",
                publishedAt: "2020-07-31T17:00:04Z",
                views: "3,2 млн просмотров"
            },
            {
                title: "1 сезон 2 серия | Павшие муравьи",
                thumbnail: require("@/assets/thumbnails/S1E2.png"),
                videoID: "s1e2",
                src: "https://drive.google.com/file/d/1aoIlCokdUOIr4wfBA5N3SznaRDb0OPO6/preview",
                publishedAt: "2020-07-30T18:17:55Z",
                views: "4,1 млн просмотров"
            },
            {
                title: "1 сезон 1 серия | iПилот",
                thumbnail: require("@/assets/thumbnails/S1E1.png"),
                videoID: "s1e1",
                src: "https://drive.google.com/file/d/1faTcepLwVFnjrcMwk9AHKB_KBzLL8fMd/preview",
                publishedAt: "2020-07-28T18:37:53Z",
                views: "4,5 млн просмотров"
            }
        ]
    }
}

export default seasons