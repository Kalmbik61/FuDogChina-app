import axios from "axios";
import { useEffect, useState } from "react";

export enum TYPE_OF_MEAL {
  MEAT = "MEAT",
  DRINKS = "DRINKS",
}

export interface IAdditional {
  readonly price: number;
  readonly name: string;
}

export interface IMeal {
  readonly id: string;
  readonly imageUrl: string;
  readonly name: string;
  readonly price: number;
  readonly type: TYPE_OF_MEAL;
  readonly additional?: IAdditional[];
  readonly description?: string;
}

interface IHomeControl {
  readonly meals: IMeal[];
}

export const MOCK: IMeal[] = [
  {
    id: "1",
    imageUrl: "https://taplink.st/p/c/7/7/9/41558354.jpg?0",
    name: "Свинина Гобажоу",
    price: 480,
    type: TYPE_OF_MEAL.MEAT,
    additional: [
      { name: "курица", price: 380 },
      { name: "говядина", price: 480 },
    ],
    description:
      "Блюдо было придумано в 1907 году харбинским поваром Чжэн Вэнем для русских, в большом количестве приезжавших в город в связи со строительством Китайско-Восточной железной дороги. Идею блюда подала его жена, русская по национальности. За основу было взято пекинское блюдо «жареные ломтики свинины», в которое повар добавил сахар, изменив вкус блюда с солёного на сладкий, чтобы оно лучше соответствовало вкусам русских гостей",
  },
  {
    id: "2",
    imageUrl: "https://taplink.st/p/4/1/7/4/41533214.jpg?0",
    name: "Курица генерала Дзо",
    price: 470,
    type: TYPE_OF_MEAL.MEAT,
  },
  {
    id: "3",
    imageUrl: "https://taplink.st/p/c/7/7/9/41558354.jpg?0",
    name: "Свинина Гобажоу",
    price: 480,
    type: TYPE_OF_MEAL.MEAT,
  },
  {
    id: "4",
    imageUrl: "https://taplink.st/p/4/1/7/4/41533214.jpg?0",
    name: "Курица генерала Дзо",
    price: 470,
    type: TYPE_OF_MEAL.MEAT,
  },
  {
    id: "10",
    imageUrl: "https://taplink.st/p/c/7/7/9/41558354.jpg?0",
    name: "Свинина Гобажоу",
    price: 480,
    type: TYPE_OF_MEAL.MEAT,
  },
  {
    id: "20",
    imageUrl: "https://taplink.st/p/4/1/7/4/41533214.jpg?0",
    name: "Курица генерала Дзо",
    price: 470,
    type: TYPE_OF_MEAL.MEAT,
  },
  {
    id: "0300",
    imageUrl: "https://taplink.st/p/c/7/7/9/41558354.jpg?0",
    name: "Свинина Гобажоу",
    price: 480,
    type: TYPE_OF_MEAL.MEAT,
  },
  {
    id: "40",
    imageUrl: "https://taplink.st/p/4/1/7/4/41533214.jpg?0",
    name: "Курица генерала Дзо",
    price: 470,
    type: TYPE_OF_MEAL.MEAT,
  },
];

export const useHomeControl = (): IHomeControl => {
  const [meals, setMeals] = useState<IMeal[]>(MOCK);

  const getData = async () => {
    const url =
      "https://tkj0a5e5.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22meals%22%5D%7B%0A%20%20...%0A%7D";
    const d = await axios(url);

    console.log(d.data.result);
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    meals,
  };
};
