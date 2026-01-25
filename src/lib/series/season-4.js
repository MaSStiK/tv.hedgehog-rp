// Превью "/thumbnails/coming_soon.png" используется когда Данечка еще не сделал превью
// В остальных случая можно указать всю информацию о серии, доступна она будет только после того как наступит дата publishedAt

const season4 = [
    {
        videoID: "s4e1",
        title: "4 сезон 1 серия | Спокойные года",
        thumbnail: "/thumbnails/S4E1.png",
        src: "https://drive.google.com/file/d/1tSkwfiZTRGhKBV2UUshHTVQYPMTc_BE4/preview",
        publishedAt: "2023-07-24T07:00:25Z",
        views: "394 тыс. просмотров"
    },
    {
        videoID: "s4e2",
        title: "4 сезон 2 серия | 2016, Новый Свет и Анастасия",
        thumbnail: "/thumbnails/S4E2.png",
        src: "https://drive.google.com/file/d/1Ybk6JZSo2l77SU4WkMBe67dysGnJr2Bi/preview",
        publishedAt: "2023-07-25T08:00:07Z",
        views: "380 тыс. просмотров"
    },
    {
        videoID: "s4e3",
        title: "4 сезон 3 серия | Осваиваемся",
        thumbnail: "/thumbnails/S4E3.png",
        src: "https://drive.google.com/file/d/1KU_HjAQEyRZaq2TqWdlYzVdsSi4fboN-/preview",
        publishedAt: "2023-11-20T14:00:35Z",
        views: "323 тыс. просмотров"
    },
    {
        videoID: "s4e4",
        title: "4 сезон 4 серия | Хиенспатт",
        thumbnail: "/thumbnails/S4E4.png",
        src: "https://drive.google.com/file/d/1aSTjPc7-X-vuUiGYgmmyAh20czQdPmOY/preview",
        publishedAt: "2023-12-31T08:00:36Z",
        views: "295 тыс. просмотров"
    },
    {
        videoID: "s4e5",
        title: "4 сезон 5 серия | Коллапс",
        thumbnail: "/thumbnails/S4E5.png",
        src: "https://drive.google.com/file/d/1hnti2vqzvixmZC3W6HdZjBwmP51AikAj/preview",
        publishedAt: "2024-06-10T09:00:00Z",
        views: "310 тыс. просмотров"
    },
    {
        videoID: "s4e6",
        title: "4 сезон 6 серия | Лефанляндский вопрос",
        thumbnail: "/thumbnails/S4E6.png",
        src: "https://drive.google.com/file/d/1QZqfQENrVqQPA23sdJH0nB6b6Kepafwm/preview",
        publishedAt: "2024-08-05T08:00:00Z", // Выйдет 05.08 в 11:00 по МСК
        views: "278 тыс. просмотров"
    },
    {
        videoID: "s4e7",
        title: "4 сезон 7 серия | Напряжение у западных морей",
        thumbnail: "/thumbnails/S4E7.png",
        src: "https://drive.google.com/file/d/1WaNMI1V_O7-MTPdxbAe9UiUk2JxpT-0g/preview",
        publishedAt: "2024-08-07T10:00:00Z", // Выйдет 07.08 в 13:00 по МСК
        views: "286 тыс. просмотров"
    },
    {
        videoID: "s4e8",
        title: "4 сезон 8 серия | Суета",
        thumbnail: "/thumbnails/S4E8.png",
        src: "https://drive.google.com/file/d/10Gw7CB63kcwdVSOCBgmmFHvFTh_M5vzO/preview",
        publishedAt: "2024-08-09T10:00:00Z", // Выйдет 09.08 в 13:00 по МСК
        views: "292 тыс. просмотров"
    },
    {
        videoID: "s4e9",
        title: "4 сезон 9 серия | Испанский, Греческий, Ежиный",
        thumbnail: "/thumbnails/S4E9.png",
        src: "https://drive.google.com/file/d/1CbAFv40iiMReXmdqQeZGLFJwVxkHjzJj/preview",
        publishedAt: "2024-12-30T10:00:00Z", // Выйдет 30.12 в 13:00 по МСК
        views: "231 тыс. просмотров"
    },
    {
        videoID: "s4e10",
        title: "4 сезон 10 серия | Личностные истории",
        thumbnail: "/thumbnails/S4E10.png",
        src: "https://drive.google.com/file/d/1XPebPrX5k0jfor_5l6YGFUfcqa9Hh4o2/preview",
        publishedAt: "2024-12-30T13:00:00Z", // Выйдет 30.12 в 16:00 по МСК
        views: "270 тыс. просмотров"
    },
    {
        videoID: "s4e11",
        title: "4 сезон 11 серия | Тяжелые десятилетия",
        thumbnail: "/thumbnails/S4E11.png",
        src: "https://drive.google.com/file/d/1B0ZVoUFs8XJX9k0qLrEWzt_TlIE5MvuE/preview",
        publishedAt: "2024-12-31T09:00:00Z", // Выйдет 31.12 в 12:00 по МСК
        views: "299 тыс. просмотров"
    },
    {
        videoID: "s4e12",
        title: "4 сезон 12 серия | Новогодние истории",
        thumbnail: "/thumbnails/S4E12.png",
        src: "https://drive.google.com/file/d/1VoiwYdJruePTW0zcgFwupTvwNmhouTLy/preview",
        publishedAt: "2024-12-31T12:00:00Z", // Выйдет 31.12 в 15:00 по МСК
        views: "209 тыс. просмотров"
    },
    {
        videoID: "s4e13",
        title: "4 сезон 13 серия | Разгрузка",
        thumbnail: "/thumbnails/S4E13.png",
        src: "https://drive.google.com/file/d/1PQrUGELNFD1q5kKwNfIgMJpelWqaNmOu/preview",
        publishedAt: "2025-01-01T12:00:00Z", // Выйдет 01.01 в 15:00 по МСК
        views: "184 тыс. просмотров"
    },
    {
        videoID: "s4e14",
        title: "4 сезон 14 серия | Предвоенный синдром",
        thumbnail: "/thumbnails/S4E14.png",
        src: "https://drive.google.com/file/d/1496imPXJt1f2BaKOzIQ4GtxlTHjgjA6N/preview",
        publishedAt: "2025-06-04T10:00:00Z", // Выйдет 04.06 в 13:00 по МСК
        views: "71 тыс. просмотров"
    },
    // {
    //     videoID: "s4e15",
    //     title: "4 сезон 15 серия | Название не указано",
    //     thumbnail: "/thumbnails/S4E15.png",
    //     src: "",
    //     publishedAt: "2025-06-04T10:00:00Z", // Выйдет 04.06 в 13:00 по МСК
    //     views: "0 просмотров"
    // },
]

export default season4
