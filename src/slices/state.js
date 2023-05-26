const initialState = {
  ceilings: [
    {
      id: 1,
      ceilingType: "plates",
      title: "Bajkal",
      img: "./images/ceilings/plates/bajkal.jpg",
      imgMain: "../images/ceilings/plates/bajkal-main.jpg",
      type: "Потолочная плита из минерального волокна",
      description: "Потолочная плита Bajkal 90 RH имеет белую поверхность c разнонаправленными червоточинами - классический вариант подвесного потолка и лидер в своем сегменте.",
      characteristics : [
        {title: "Звукопоглащение", value: "0.45 αw"},
        {title: "Звукоизоляция", value: "31 ДБ"},
        {title: "Светоотражение", value: "85 %"},
        {title: "Пожарные хар-ки", value: "KM1"},
        {title: "Влагостойкость", value: "90 %"},
      ],
      sizes: [
        {title: "Толщина (мм)", values: ["12"]},
        {title: "Размеры (мм)", values: ["600x600"]},
        {title: "Тип кромки", values: ["board"]},
      ]
    },
    {
      id: 2,
      ceilingType: "plates",
      title: "Retail",
      img: "./images/ceilings/plates/retail.jpg",
      imgMain: "../images/ceilings/plates/retail-main.jpg",
      type: "Потолочная плита из минерального волокна",
      description: "Потолочная плита Retail 90 RH имеет белую гладкую поверхность, за счет чего достигается повышенное светоотражение, что увеличивает количество света в помещении. Идеально подходит для офисов, учебных классов, торговых залов.",
      characteristics : [
        {title: "Звукопоглащение", value: "0.15 αw"},
        {title: "Звукоизоляция", value: "31 ДБ"},
        {title: "Светоотражение", value: "87 %"},
        {title: "Пожарные хар-ки", value: "KM1"},
        {title: "Влагостойкость", value: "90 %"},
      ],
      sizes: [
        {title: "Толщина (мм)", values: ["12", "14"]},
        {title: "Размеры (мм)", values: ["600x600", "1200x600"]},
        {title: "Тип кромки", values: ["board", "T24", "T15"]},
      ]
    },
    {
      id: 3,
      ceilingType: "plates",
      title: "Oasis",
      img: "./images/ceilings/plates/oasis.jpg",
      imgMain: "../images/ceilings/plates/oasis-main.jpg",
      type: "Потолочная плита из минерального волокна",
      description: "Потолочная плита Oasis 90 RH имеет песчаную неперфарированную поверхность. За счет кальцидной крошки поверхность плиты менее подвержена загрязнению.",
      characteristics : [
        {title: "Звукопоглащение", value: "0.15 αw"},
        {title: "Звукоизоляция", value: "31 ДБ"},
        {title: "Светоотражение", value: "85 %"},
        {title: "Пожарные хар-ки", value: "KM1"},
        {title: "Влагостойкость", value: "90 %"},
      ],
      sizes: [
        {title: "Толщина (мм)", values: ["12"]},
        {title: "Размеры (мм)", values: ["600x600"]},
        {title: "Тип кромки", values: ["board"]},
      ]
    },
    {
      id: 4,
      ceilingType: "plates",
      title: "Scala",
      img: "./images/ceilings/plates/scala.jpg",
      imgMain: "../images/ceilings/plates/scala-main.jpg",
      type: "Потолочная плита из минерального волокна",
      description: "Потолочная плита Scala 90 RH имеет белую поверхность с микроперфорацией. Отличительной чертой плиты Scala среди других плит эконом сегмента является увеличенное звукопоглащение.",
      characteristics : [
        {title: "Звукопоглащение", value: "0.50 αw"},
        {title: "Звукоизоляция", value: "31 ДБ"},
        {title: "Светоотражение", value: "85 %"},
        {title: "Пожарные хар-ки", value: "KM1"},
        {title: "Влагостойкость", value: "90 %"},
      ],
      sizes: [
        {title: "Толщина (мм)", values: ["12"]},
        {title: "Размеры (мм)", values: ["600x600"]},
        {title: "Тип кромки", values: ["board"]},
      ]
    },
    {
      id: 5,
      ceilingType: "plates",
      title: "Plain",
      img: "./images/ceilings/plates/plain.jpg",
      imgMain: "../images/ceilings/plates/plain-main.jpg",
      type: "Потолочная плита из минерального волокна",
      description: "Потолочная плита Plain имеет белую гладкую поверхность с максимально высоким светоотражением, что особенно актуально в помещениях со светлым дизайном.",
      characteristics : [
        {title: "Звукопоглащение", value: "0.20 αw"},
        {title: "Звукоизоляция", value: "34 ДБ"},
        {title: "Светоотражение", value: "88 %"},
        {title: "Пожарные хар-ки", value: "KM1"},
        {title: "Влагостойкость", value: "95 %"},
      ],
      sizes: [
        {title: "Толщина (мм)", values: ["15"]},
        {title: "Размеры (мм)", values: ["600x600", "1200x600"]},
        {title: "Тип кромки", values: ["board", "T24", "T15"]},
      ]
    },
    {
      id: 6,
      ceilingType: "plates",
      title: "Dune Supreme",
      img: "./images/ceilings/plates/dune-supreme.jpg",
      imgMain: "../images/ceilings/plates/dune-supreme-main.jpg",
      type: "Потолочная плита из минерального волокна",
      description: "Потолочная плита Dune Supreme имеет белую поверхность с покрытием из кальцидной крошки и микроперфорацией. Увеличенная толщина плиты в отличии от плит эконом сегмента и микроперфорация увеличивают звукопоглащение и звукоизоляцию плиты.",
      characteristics : [
        {title: "Звукопоглащение", value: "0.55 αw"},
        {title: "Звукоизоляция", value: "34 ДБ"},
        {title: "Светоотражение", value: "85 %"},
        {title: "Пожарные хар-ки", value: "KM1"},
        {title: "Влагостойкость", value: "99 %"},
      ],
      sizes: [
        {title: "Толщина (мм)", values: ["15"]},
        {title: "Размеры (мм)", values: ["600x600", "1200x600"]},
        {title: "Тип кромки", values: ["board", "T24", "T15"]},
      ]
      },
    {
      id: 7,
      ceilingType: "plates",
      title: "Optima",
      img: "./images/ceilings/plates/optima.jpg",
      imgMain: "../images/ceilings/plates/optima-main.jpg",
      type: "Потолочная плита из минерального волокна",
      description: "Потолочная плита Optima имеет ламинированную поверхность, за счет чего плита имеет повышенную стойкость к мытью и царапинам. Также плита имеет высокое звукопоглащение, что актуально для помещений с большим скоплением людей.",
      characteristics : [
        {title: "Звукопоглащение", value: "0.90 αw"},
        {title: "Звукоизоляция", value: "24 ДБ"},
        {title: "Светоотражение", value: "87 %"},
        {title: "Пожарные хар-ки", value: "KM1"},
        {title: "Влагостойкость", value: "95 %"},
      ],
      sizes: [
        {title: "Толщина (мм)", values: ["15", "20", "22"]},
        {title: "Размеры (мм)", values: ["600x600", "1200x600", "1200x1200", "1800x600"]},
        {title: "Тип кромки", values: ["board", "T24", "T15", "vector"]},
      ]
    },
    {
      id: 8,
      ceilingType: "plates",
      title: "Optima L Canopy",
      img: "./images/ceilings/plates/optima-canopy.jpg",
      imgMain: "../images/ceilings/plates/optima-canopy-main.jpg",
      type: "Потолочная плита из минерального волокна",
      description: "Дизайнерские потолки-фрагменты OPTIMA L Canopy обеспечивают высокий уровень звукопоглощения и производятся в трех вариантах форм (квадратная, прямоугольная и круглая) и в семи типоразмерах.",
      characteristics : [
        {title: "Светоотражение", value: "87 %"},
        {title: "Пожарные хар-ки", value: "KM1"},
        {title: "Влагостойкость", value: "90 %"},
      ],
      sizes: [
        {title: "Толщина (мм)", values: ["40"]},
        {title: "Размеры (мм)", values: ["1200x600", "1200x1200", "1800x900", "1800x1200", "2400x1200", "800", "1200"]},
      ]
    },
    {
      id: 9,
      ceilingType: "plates",
      title: "Bioguard",
      img: "./images/ceilings/plates/bioguard.jpg",
      imgMain: "../images/ceilings/plates/bioguard-main.jpg",
      type: "Потолочная плита из минерального волокна",
      description: "Плита Bioguard Plain имеет гладкую белую поверхность обработанную бактерицидным покрытием, что препятствует распространению вредных микроорганизмов. Алита Bioguard Plain рекомендована к монтажу в детских дошкольных и медицинских учреждений.",
      characteristics : [
        {title: "Звукопоглащение", value: "0.20 αw"},
        {title: "Звукоизоляция", value: "35 ДБ"},
        {title: "Светоотражение", value: "87 %"},
        {title: "Пожарные хар-ки", value: "KM1"},
        {title: "Влагостойкость", value: "95 %"},
      ],
      sizes: [
        {title: "Толщина (мм)", values: ["12", "15"]},
        {title: "Размеры (мм)", values: ["600x600", "1200x600"]},
        {title: "Тип кромки", values: ["board", "T24", "T15"]},
      ]
    },
    {
      id: 10,
      ceilingType: "plates",
      title: "Oasis NG",
      img: "./images/ceilings/plates/oasis-ng.jpg",
      imgMain: "../images/ceilings/plates/oasis-ng-main.jpg",
      type: "Потолочная плита из минерального волокна",
      description: "Потолочная плита Oasis NG имеет песчаную неперфарированную поверхность. Плита Oasis NG имеет степень огнестойкости КМ0, что позволяет использовать плиту на путях эвакуации и в помещениях с большим скоплением людей. Также за счет кальцидной крошки поверхность плиты менее подвержена загрязнению.",
      characteristics : [
        {title: "Звукопоглащение", value: "0.15 αw"},
        {title: "Звукоизоляция", value: "31 ДБ"},
        {title: "Светоотражение", value: "85 %"},
        {title: "Пожарные хар-ки", value: "KM0"},
        {title: "Влагостойкость", value: "90 %"},
      ],
      sizes: [
        {title: "Толщина (мм)", values: ["12"]},
        {title: "Размеры (мм)", values: ["600x600"]},
        {title: "Тип кромки", values: ["board"]},
      ]
    },
    {
      id: 11,
      ceilingType: "plates",
      title: "Retail NG",
      img: "./images/ceilings/plates/retail-ng.jpg",
      imgMain: "../images/ceilings/plates/retail-ng-main.jpg",
      type: "Потолочная плита из минерального волокна",
      description: "Потолочная плита Retail NG имеет белую гладкую поверхность, за счет чего достигается повышенное светоотражение, что увеличивает количество света в помещении. Идеально подходит для офисов, учебных классов, торговых залов. Плита Retail NG имеет степень огнестойкости КМ0, что позволяет использовать плиту на путях эвакуации и в помещениях с большим скоплением людей.",
      characteristics : [
        {title: "Звукопоглащение", value: "0.15 αw"},
        {title: "Звукоизоляция", value: "31 ДБ"},
        {title: "Светоотражение", value: "87 %"},
        {title: "Пожарные хар-ки", value: "KM0"},
        {title: "Влагостойкость", value: "90 %"},
      ],
      sizes: [
        {title: "Толщина (мм)", values: ["12"]},
        {title: "Размеры (мм)", values: ["600x600"]},
        {title: "Тип кромки", values: ["board"]},
      ]
    },
    {
      id: 12,
      ceilingType: "plates",
      title: "Dune NG",
      img: "./images/ceilings/plates/dune-ng.jpg",
      imgMain: "../images/ceilings/plates/dune-ng-main.jpg",
      type: "Потолочная плита из минерального волокна",
      description: "Потолочная плита Dune NG имеет песчаную перфарированную поверхность. Плита Dune NG имеет степень огнестойкости КМ0, что позволяет использовать плиту на путях эвакуации и в помещениях с большим скоплением людей. Также за счет кальцидной крошки поверхность плиты менее подвержена загрязнению, а микроперфорация обеспечивает увеличенное звукопоглащение.",
      characteristics : [
        {title: "Звукопоглащение", value: "0.60 αw"},
        {title: "Звукоизоляция", value: "32 ДБ"},
        {title: "Светоотражение", value: "85 %"},
        {title: "Пожарные хар-ки", value: "KM0"},
        {title: "Влагостойкость", value: "90 %"},
      ],
      sizes: [
        {title: "Толщина (мм)", values: ["15"]},
        {title: "Размеры (мм)", values: ["600x600", "1200x600"]},
        {title: "Тип кромки", values: ["board", "T24", "T15"]},
      ]
    },
    {
      id: 13,
      ceilingType: "slat",
      title: "S-дизайн",
      img: "./images/ceilings/slat/s-design.jpg",
      imgMain: "../images/ceilings/slat/s-design-main.jpg",
      type: "Реечный потолок",
      description: "Реечный потолок S-дизайн - это сдержанный европейский дизайн и самый популярный тип реечного потолка. Подходит для монтажа в помещениях различного типа: от ванной компанты до торговых бутиков.",
      sizes: [
        {title: "Цвета RAL", values: ["9003", "9006", "9007", "9011"]},
        {title: "Ширина (мм)", values: ["25", "100", "150"]},
        {title: "Длина (мм)", values: ["3000", "4000", "6000"]},
        {title: "Толщина (мм)", values: ["0,3", "0,4"]},
      ]
    },
    {
      id: 14,
      ceilingType: "slat",
      title: "Немецкий дизайн",
      img: "./images/ceilings/slat/german-design.jpg",
      imgMain: "../images/ceilings/slat/german-design-main.jpg",
      type: "Реечный потолок",
      description: "Реечный потолок немецкого дизайна собирается из алюминиевых реек с прямоугольными краями. Потолки выполняются с открытыми стыками.",
      sizes: [
        {title: "Цвета RAL", values: ["9003", "9006", "9007", "9011"]},
        {title: "Ширина (мм)", values: ["85", "135", "185"]},
        {title: "Длина (мм)", values: ["3000", "4000", "6000"]},
        {title: "Толщина (мм)", values: ["0,3", "0,4", "0,58"]},
      ]
    },
    {
      id: 15,
      ceilingType: "slat",
      title: "Итальянский дизайн",
      img: "./images/ceilings/slat/italian-design.jpg",
      imgMain: "../images/ceilings/slat/italian-design-main.jpg",
      type: "Реечный потолок",
      description: "Реечный потолок итальянского дизайна собирается из алюминиевых реек с закругленными краями.",
      sizes: [
        {title: "Цвета RAL", values: ["9003", "9006", "9007", "9011"]},
        {title: "Ширина (мм)", values: ["84-16"]},
        {title: "Длина (мм)", values: ["3000", "4000", "6000"]},
        {title: "Толщина (мм)", values: ["0,3", "0,4", "0,58"]},
      ]
    },
    {
      id: 16,
      ceilingType: "slat",
      title: "Кубообразный",
      img: "./images/ceilings/slat/cube.jpg",
      imgMain: "../images/ceilings/slat/cube-main.jpg",
      type: "Реечный потолок",
      description: "Металлическую потолочную рейку кубообразного дизайна теперь возможно изготовить из алюминия или оцинкованной стали с увеличенной высотой рейки: 50, 80, 100, 85, 110, 160, 200, 250 и 300 мм.",
      sizes: [
        {title: "Цвета RAL", values: ["9003", "9006", "9007", "9011"]},
        {title: "Ширина (мм)", values: ["84-16"]},
        {title: "Длина (мм)", values: ["3000", "4000", "6000"]},
        {title: "Толщина (мм)", values: ["0,3", "0,4", "0,58"]},
      ]
    },
    {
      id: 17,
      ceilingType: "metal",
      title: "Кассеты на открытой подвесной системе",
      img: "../images/ceilings/metal/open-system.jpg",
      imgMain: "../images/ceilings/metal/open-system-main.jpg",
      type: "Кассетные потолки",
      description: "Кассеты потолочные разных цветов и размеров на открытой подвесной системе.",
      characteristics : [
        {title: "Материал", value: "Алюм / Сталь"},
        {title: "Перфорация", value: "1,5 / 3,0 мм"},
        {title: "Толщина", value: "0,3 - 1,5 мм"},
        {title: "Пожарные хар-ки", value: "KM1"},
        {title: "Влагостойкость", value: "100 %"},
      ],
      sizes: [
        {title: "Цвета RAL", values: ["9003", "9006", "9007", "9011", "золото"]},
        {title: "Размеры (мм)", values: ["600x600", "1200x600"]},
        {title: "Тип кромки", values: ["board", "T24", "T15"]},
      ]
    },
    {
      id: 18,
      ceilingType: "metal",
      title: "Кассеты на закрытой системе HOOK-ON",
      img: "../images/ceilings/metal/hook-on.jpg",
      imgMain: "../images/ceilings/metal/hook-on-main.jpg",
      type: "Кассетные потолки",
      description: "Современные кассетные потолки на закрытой подвесной системе HOOK-ON разных модификаций создают бесшовное потолочное пространство. Различные виды перфорации добавляют дизайну уникальности, а вставки из минеральной ваты или флиса увеличивают звукопоглащение кассет.",
      characteristics : [
        {title: "Материал", value: "Сталь"},
        {title: "Перфорация", value: "0,75 / 1,5 / 3,0 мм"},
        {title: "Пожарные хар-ки", value: "KM1"},
        {title: "Влагостойкость", value: "100 %"},
      ],
      sizes: [
        {title: "Цвета RAL", values: ["9003"]},
        {title: "Размеры (мм)", values: ["1200x600", "1500x600", "2000x600", "2500x600"]},
      ]
    },
    {
      id: 19,
      ceilingType: "metal",
      title: "Потолок кассетный Ingermax Medical",
      img: "../images/ceilings/metal/ingermax.jpg",
      imgMain: "../images/ceilings/metal/ingermax-main.jpg",
      type: "Кассетные потолки",
      description: "Потолки Ingermax Medical имеют специально разработанное антибактериальное покрытие, что позволяет использовать плиту в детских дошкольных и лечебно-профилактических учреждениях, в помещениях, где предъявляются особенные требования к чистоте потолков.",
      characteristics : [
        {title: "Материал", value: "Сталь"},
        {title: "Покрытие", value: "АБП"},
        {title: "Пожарные хар-ки", value: "KM0"},
        {title: "Влагостойкость", value: "100 %"},
      ],
      sizes: [
        {title: "Цвета RAL", values: ["9003"]},
        {title: "Размеры (мм)", values: ["600x600"]},
        {title: "Тип кромки", values: ["board", "T24", "line"]},
      ]
    },
    {
      id: 20,
      ceilingType: "metal",
      title: "Корридорные панели",
      img: "../images/ceilings/metal/hall-panel.jpg",
      imgMain: "../images/ceilings/metal/hall-panel-main.jpg",
      type: "Кассетные потолки",
      description: "Корридорные металлические панели - идеальное решение для монтажа в помещениях ограниченной ширины. Легкий монтаж и демонтаж панелей позволяет легко обслуживать запотолочное пространство.",
      characteristics : [
        {title: "Материал", value: "Сталь"},
        {title: "Перфорация", value: "0,75 / 1,5 / 3,0 мм"},
        {title: "Пожарные хар-ки", value: "KM1"},
        {title: "Влагостойкость", value: "100 %"},
      ],
      sizes: [
        {title: "Цвета RAL", values: ["9003"]},
        {title: "Размеры (мм)", values: ["1500x400", "2000x400", "2500x400"]},
      ]
    },
  ]
};

const descriptionState = {
  plates: {
    id: 1,
    title: "Панели потолочне Армстронг",
    value: "Компания Стройбат предлагает широкий ассортимент потолочных плит в Омске. В наличии и под заказ - плиты Армстронг для офисных помещений, торговых павильонов или крупных торговых центров. Помимо стандартных потолочных плит, таких как Bajkal, Retail или Oasis в наличии на складе в Омске - специализированные плиты для детских дошкольных и медицинских учреждений, а также негорючие потолки категории НГ (КМ0). В офисе компании или по телефону Вы можете получить квалифицированную помощь в выборе потолка, детальный расчет и узнать стоимость полного комплекта потолка."
  },
  slat: {
    id: 2,
    title: "Реечный потолок",
    value: "Компания Стройбат предлагает широкий ассортимент реечных и кубообразных потолков производства завода Албес. Широкая цветовая гамма и варианты исполнения помогут сделать дизайн помещения стильным и неповторимым."
  },
  grid: {
    id: 3,
    title: "Потолок грильято",
    value: "Компания Стройбат предлагает широкий ассортимент потолков грильято."
  },
  metal: {
    id: 4,
    title: "Кассеты потолочные",
    value: "Компания Стройбат предлагает широкий ассортимент кассетных потолков разных цветов и размеров. За счет своей 100% влагостойкости и высокой износостойкости алюминиевые и стальные кассеты являются идеальным потолочны решением в медицинских учреждениях, где применяются определенные требования к потолку."
  }
};

export { initialState, descriptionState };
