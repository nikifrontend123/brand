import { createStore } from "vuex";

export default createStore({
  state: {
    datas: [
      {
        id: 1,
        num: 7,
        txt: "NEW ORDERS"

      },
      {
        id: 2,
        num: 44,
        txt: "PRE PRODUCTION"
      },
      {
        id: 3,
        num: 3,
        txt: "IN PRODUCTION"
      },
      {
        id: 4,
        num: 54,
        txt: "TOTAL ORDERS"
      },
      {
        id: 5,
        num: 11,
        txt: "ACTIVE ASSIGNEES"
      },
      {
        id: 6,
        num: 78,
        txt: "ACTIVE CATELOGS"
      },
    ],
    datapps: [
      {
        id: 1,
        num: 1750,
        txt: "RUNNING ORDER QUANTITY"

      },
      {
        id: 2,
        num: 855,
        txt: "READY QUANTITY AVAILABLE"
      },
      {
        id: 3,
        num: 450,
        txt: "REQUESTED QUANTITY"
      },
      {
        id: 4,
        num: 450,
        txt: "DISPATCHED QUANTITY"
      },
      {
        id: 4,
        num: '-',
        txt: "RECEVIED QUANTITY"
      },

    ],
    cards: [
      {
        id: 1,
        name: 'Sardar Enterprise',
        allot: 20,
        img: "fabricators/fab1.png",
        num: "2/850",
      },
      {
        id: 2,
        name: 'Pride Apparel',
        allot: 16,
        img: "fabricators/fab2.png",
        num: "2/1400",
      },
      {
        id: 3,
        name: 'Jyoti Garments',
        allot: 1,
        img: "fabricators/fab3.png",
        num: "1/200",
      },
      {
        id: 4,
        name: 'Mayra Creation',
        allot: 4,
        img: "fabricators/fab4.png",
        num: "6/1257",
      },
      {
        id: 5,
        name: 'Md Asad',
        allot: 3,
        img: "fabricators/fab1.png",
        num: "3/659",
      },
      {
        id: 6,
        name: 'Manoj Auto',
        allot: 2,
        img: "fabricators/fab2.png",
        num: "2/400",
      },
      {
        id: 7,
        name: 'Shekhar Trafdar',
        allot: 'No',
        img: "fabricators/fab3.png",
        num: "Nill",
      },
      {
        id: 8,
        name: 'Modern Collection',
        allot: 1,
        img: "fabricators/fab4.png",
        num: "2/200",
      },
    ],
    lists: [
      {
        id: 1,
        img: "images/c1.jpg",
        img1: "images/c1.jpg",
        tag: "#23269",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top",
        regular: [
          {
            s1: '',
            c1: '',
            qty: ''
          },
          // {
          //   s1:'',
          //   c1:'',
          //   qty:''
          // },
          // {
          //   s1:'',
          //   c1:'',
          //   qty:''
          // },
          // {
          //   s1:'',
          //   c1:'',
          //   qty:''
          // },

        ],
        advance: [
          {
            s1: '',
            c1: '',
            qty: ''
          },
          {
            s1: '',
            c1: '',
            qty: ''
          },
          {
            s1: '',
            c1: '',
            qty: ''
          },
          {
            s1: '',
            c1: '',
            qty: ''
          },
        ],
        colors: [
          { id: 1, name: "https://img.ltwebstatic.com/images3_pi/2019/12/16/1576484402687c5cc3592067511e046fb985a5414a_thumbnail_900x.webp", isSelected: true },
          { id: 2, name: "https://img.ltwebstatic.com/images3_pi/2020/03/16/1584329043f6a2b7ff18eed10fc606d386136fec59_thumbnail_750x.webp", isSelected: true },
          { id: 3, name: "https://img.ltwebstatic.com/images3_pi/2022/09/05/166236058465db391027c27d9351d3972053af2deb_thumbnail_750x.webp", isSelected: true },
          { id: 4, name: "https://img.ltwebstatic.com/images3_pi/2021/01/18/1610969103d94c96d640a1de246d4e7cc1c104f08e_thumbnail_750x.webp", isSelected: true },
          { id: 5, name: "https://img.ltwebstatic.com/images3_pi/2021/05/18/1621310932862051acf1a77dd2fa5d7b29c2064d3c_thumbnail_750x.webp", isSelected: true },
          { id: 6, name: "https://img.ltwebstatic.com/images3_pi/2020/03/16/1584329043f6a2b7ff18eed10fc606d386136fec59_thumbnail_750x.webp", isSelected: true },
        ],
        // ordcolors: [
        //   { id: 1, name: 'black' },
        // ],
        sizes: [
          {
            name: "S", isSelected: true
          },
          {
            name: "M", isSelected: true
          },
          {
            name: "L", isSelected: true
          },
          {
            name: "XL", isSelected: true
          },
          {
            name: "XXL", isSelected: true
          },
          {
            name: "Free", isSelected: true
          },
        ],
      },
      {
        id: 2,
        img: "images/c2.jpg",
        img1: "images/c2.jpg",
        tag: "#23252",
        name: "1/2 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top",
        colors: [
          { id: 1, name: 'black' },
          { id: 2, name: 'red' },
        ],
        ordcolors: [
          { id: 1, name: 'black' },
        ],
        sizes: [
          {
            name: "S",
            price: '6500',
            mesurements: [
              {
                name: "Bottom Length",
                value: "40in"
              },
              {
                name: "Hips",
                value: "38.2in"
              },
              {
                name: "Thigh",
                value: "25.1in"
              },
              {
                name: "Waist",
                value: "38.6in"
              },
              {
                name: "Bust",
                value: "38.6in"
              },
              {
                name: "Sleeve Width",
                value: "38.6in"
              },
            ]
          },
          {
            name: "M",
            price: '6500',
            mesurements: [
              {
                name: "Length",
                value: "45.2in"
              },
              {
                name: "Hips",
                value: "41.7in"
              },
              {
                name: "Thigh",
                value: "24.8in"
              },
              {
                name: "Waist",
                value: "32.6in"
              },
            ]
          },
          {
            name: "L",
            price: '6500',
            mesurements: [
              {
                name: "Length",
                value: "38.2in"
              },
              {
                name: "Hips",
                value: "40.7in"
              },
              {
                name: "Thigh",
                value: "22.8in"
              },
              {
                name: "Waist",
                value: "32.6in"
              },
            ]
          },
          {
            name: "XL",
            price: '6500',
            mesurements: [
              {
                name: "Length",
                value: "38.2in"
              },
              {
                name: "Hips",
                value: "40.7in"
              },
              {
                name: "Thigh",
                value: "22.8in"
              },
              {
                name: "Waist",
                value: "32.6in"
              },
            ]
          },
          {
            name: "XXL",
            price: '6500',

          },
          {
            name: "Free",
            price: '6500',

          },
        ],
      },
      {
        id: 3,
        img: "images/c3.jpg",
        tag: "#232234",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top",
        colors: [
          { id: 1, name: 'black' },
          { id: 2, name: 'red' },
        ],
        ordcolors: [
          { id: 1, name: 'black' },
        ],
        sizes: [
          {
            name: "S",
            price: '6500',
            mesurements: [
              {
                name: "Bottom Length",
                value: "40in"
              },
              {
                name: "Hips",
                value: "38.2in"
              },
              {
                name: "Thigh",
                value: "25.1in"
              },
              {
                name: "Waist",
                value: "38.6in"
              },
              {
                name: "Bust",
                value: "38.6in"
              },
              {
                name: "Sleeve Width",
                value: "38.6in"
              },
            ]
          },
          {
            name: "M",
            price: '6500',
            mesurements: [
              {
                name: "Length",
                value: "45.2in"
              },
              {
                name: "Hips",
                value: "41.7in"
              },
              {
                name: "Thigh",
                value: "24.8in"
              },
              {
                name: "Waist",
                value: "32.6in"
              },
            ]
          },
          {
            name: "L",
            price: '6500',
            mesurements: [
              {
                name: "Length",
                value: "38.2in"
              },
              {
                name: "Hips",
                value: "40.7in"
              },
              {
                name: "Thigh",
                value: "22.8in"
              },
              {
                name: "Waist",
                value: "32.6in"
              },
            ]
          },
          {
            name: "XL",
            price: '6500',
            mesurements: [
              {
                name: "Length",
                value: "38.2in"
              },
              {
                name: "Hips",
                value: "40.7in"
              },
              {
                name: "Thigh",
                value: "22.8in"
              },
              {
                name: "Waist",
                value: "32.6in"
              },
            ]
          },
          {
            name: "XXL",
            price: '6500',

          },
          {
            name: "Free",
            price: '6500',

          },
        ],
      },
      {
        id: 4,
        img: "images/c4.jpg",
        tag: "#232123",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top",
        colors: [
          { id: 1, name: 'black' },
          { id: 2, name: 'red' },
        ],
        ordcolors: [
          { id: 1, name: 'black' },
        ],
        sizes: [
          {
            name: "S",
            price: '6500',
            mesurements: [
              {
                name: "Bottom Length",
                value: "40in"
              },
              {
                name: "Hips",
                value: "38.2in"
              },
              {
                name: "Thigh",
                value: "25.1in"
              },
              {
                name: "Waist",
                value: "38.6in"
              },
              {
                name: "Bust",
                value: "38.6in"
              },
              {
                name: "Sleeve Width",
                value: "38.6in"
              },
            ]
          },
          {
            name: "M",
            price: '6500',
            mesurements: [
              {
                name: "Length",
                value: "45.2in"
              },
              {
                name: "Hips",
                value: "41.7in"
              },
              {
                name: "Thigh",
                value: "24.8in"
              },
              {
                name: "Waist",
                value: "32.6in"
              },
            ]
          },
          {
            name: "L",
            price: '6500',
            mesurements: [
              {
                name: "Length",
                value: "38.2in"
              },
              {
                name: "Hips",
                value: "40.7in"
              },
              {
                name: "Thigh",
                value: "22.8in"
              },
              {
                name: "Waist",
                value: "32.6in"
              },
            ]
          },
          {
            name: "XL",
            price: '6500',
            mesurements: [
              {
                name: "Length",
                value: "38.2in"
              },
              {
                name: "Hips",
                value: "40.7in"
              },
              {
                name: "Thigh",
                value: "22.8in"
              },
              {
                name: "Waist",
                value: "32.6in"
              },
            ]
          },
          {
            name: "XXL",
            price: '6500',

          },
          {
            name: "Free",
            price: '6500',

          },
        ],
      },
      {
        id: 5,
        img: "images/c5.jpg",
        tag: "#232565",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top",
        colors: [
          { id: 1, name: 'black' },
          { id: 2, name: 'red' },
        ],
        ordcolors: [
          { id: 1, name: 'black' },
        ],
        sizes: [
          {
            name: "S",
            price: '6500',
            mesurements: [
              {
                name: "Bottom Length",
                value: "40in"
              },
              {
                name: "Hips",
                value: "38.2in"
              },
              {
                name: "Thigh",
                value: "25.1in"
              },
              {
                name: "Waist",
                value: "38.6in"
              },
              {
                name: "Bust",
                value: "38.6in"
              },
              {
                name: "Sleeve Width",
                value: "38.6in"
              },
            ]
          },
          {
            name: "M",
            price: '6500',
            mesurements: [
              {
                name: "Length",
                value: "45.2in"
              },
              {
                name: "Hips",
                value: "41.7in"
              },
              {
                name: "Thigh",
                value: "24.8in"
              },
              {
                name: "Waist",
                value: "32.6in"
              },
            ]
          },
          {
            name: "L",
            price: '6500',
            mesurements: [
              {
                name: "Length",
                value: "38.2in"
              },
              {
                name: "Hips",
                value: "40.7in"
              },
              {
                name: "Thigh",
                value: "22.8in"
              },
              {
                name: "Waist",
                value: "32.6in"
              },
            ]
          },
          {
            name: "XL",
            price: '6500',
            mesurements: [
              {
                name: "Length",
                value: "38.2in"
              },
              {
                name: "Hips",
                value: "40.7in"
              },
              {
                name: "Thigh",
                value: "22.8in"
              },
              {
                name: "Waist",
                value: "32.6in"
              },
            ]
          },
          {
            name: "XXL",
            price: '6500',

          },
          {
            name: "Free",
            price: '6500',

          },
        ],
      },
      {
        id: 6,
        img: "images/c6.jpg",
        tag: "#69646",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top",
        colors: [
          { id: 1, name: 'black' },
          { id: 2, name: 'red' },
        ],
        ordcolors: [
          { id: 1, name: 'black' },
        ],
        sizes: [
          {
            name: "S",
            price: '6500',
            mesurements: [
              {
                name: "Bottom Length",
                value: "40in"
              },
              {
                name: "Hips",
                value: "38.2in"
              },
              {
                name: "Thigh",
                value: "25.1in"
              },
              {
                name: "Waist",
                value: "38.6in"
              },
              {
                name: "Bust",
                value: "38.6in"
              },
              {
                name: "Sleeve Width",
                value: "38.6in"
              },
            ]
          },
          {
            name: "M",
            price: '6500',
            mesurements: [
              {
                name: "Length",
                value: "45.2in"
              },
              {
                name: "Hips",
                value: "41.7in"
              },
              {
                name: "Thigh",
                value: "24.8in"
              },
              {
                name: "Waist",
                value: "32.6in"
              },
            ]
          },
          {
            name: "L",
            price: '6500',
            mesurements: [
              {
                name: "Length",
                value: "38.2in"
              },
              {
                name: "Hips",
                value: "40.7in"
              },
              {
                name: "Thigh",
                value: "22.8in"
              },
              {
                name: "Waist",
                value: "32.6in"
              },
            ]
          },
          {
            name: "XL",
            price: '6500',
            mesurements: [
              {
                name: "Length",
                value: "38.2in"
              },
              {
                name: "Hips",
                value: "40.7in"
              },
              {
                name: "Thigh",
                value: "22.8in"
              },
              {
                name: "Waist",
                value: "32.6in"
              },
            ]
          },
          {
            name: "XXL",
            price: '6500',

          },
          {
            name: "Free",
            price: '6500',

          },

        ],
      },
      {
        id: 7,
        img: "images/c1.jpg",
        tag: "#232565",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top",


      },
      {
        id: 8,
        img: "images/c2.jpg",
        tag: "#69646",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top"
      },
      {
        id: 9,
        img: "images/c3.jpg",
        tag: "#69646",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top"
      },
    ],
    previousOrders: [
      {
        id: 1,
        img: 'https://img101.urbanic.com/v1/goods-pic/626c54fdfd92417e835c5ef39e8fc920UR_w540_h720_q85.webp',
        style: '01-20-23188',
        qty: '1000',
        msg: 'Fabricator has accepted the order',
        status: 'current'
      },
      {
        id: 2,
        img: 'https://img101.urbanic.com/v1/goods-pic/19b98b4c33f84efa8e085b41341a675a_w540_h720_q85.webp',
        style: '01-20-23188',
        qty: '1000',
        msg: 'Monaal creation accepted order',
        status: 'current'
      },
      {
        id: 3,
        img: 'https://img101.urbanic.com/v1/goods-pic/626c54fdfd92417e835c5ef39e8fc920UR_w540_h720_q85.webp',
        style: '01-20-23188',
        qty: '100',
        msg: 'Fabricator has accepted the order',
        status: 'completed'
      },
      {
        id: 4,
        img: 'https://img101.urbanic.com/v1/goods-pic/19b98b4c33f84efa8e085b41341a675a_w540_h720_q85.webp',
        style: '01-20-23188',
        qty: '100',
        msg: 'Monaal creation accepted order',
        status: 'completed'
      },
    ],
    orders: [
      {
        id: 1,
        img: 'https://img101.urbanic.com/v1/goods-pic/626c54fdfd92417e835c5ef39e8fc920UR_w540_h720_q85.webp',
        imgchat: 'fabricators/fab1.png',
        style: '01-20-23188',
        qty: '1000',
        msg: 'Fabricator has accepted the order',
        date: '14/06/2023'
      },
      {
        id: 2,
        img: 'https://img101.urbanic.com/v1/goods-pic/19b98b4c33f84efa8e085b41341a675a_w540_h720_q85.webp',
        imgchat: 'fabricators/fab1.png',
        style: '01-20-27888',
        qty: '1000',
        msg: 'Fabricator has accepted the order',
        date: '14/06/2023'
      },
      {
        id: 3,
        img: 'https://img101.urbanic.com/v1/goods-pic/3891a987e29641cfb2d96147cb7f4707UR_w540_h720_q85.webp',
        imgchat: 'fabricators/fab1.png',
        style: '01-20-23108',
        qty: '500',
        msg: 'Fabricator has accepted the order',
        date: '14/06/2023'
      },
      {
        id: 4,
        img: 'https://img101.urbanic.com/v1/goods-pic/2109d980fd1046fea7f456cafa0228fe_w540_h720_q85.webp',
        imgchat: 'fabricators/fab1.png',
        style: '01-20-10188',
        qty: '9000',
        msg: 'Fabricator has accepted the order',
        date: '14/06/2023'
      },
    ],
    categories: [
      {
        id: 1,
        name: 'Tops',
        img: 'https://static2.urbanic.com/images/feeds/1673850897789/tops.png',
        qty: 13000,
        route: '/Catelog/Category1',
      },
      {
        id: 2,
        name: 'T-Shirts',
        img: 'https://static2.urbanic.com/images/feeds/1673850888214/T.png',
        qty: 5000,
        route: '/Catelog/category2'
      },
      {
        id: 3,
        name: 'Co-ords',
        img: 'https://static2.urbanic.com/images/feeds/1673851503423/3R5A9388_1_1-.png',
        qty: 8000,
        route: '/Catelog/category3'
      },
      {
        id: 4,
        name: 'Jumpsuits',
        img: 'https://static2.urbanic.com/images/feeds/1673851517736/3R5A9342_1_1.png',
        qty: 9000,
        route: '/Catelog/category4'
      },
      {
        id: 5,
        name: 'Bottoms',
        img: 'https://static2.urbanic.com/images/feeds/1673851112610/3R5A9393_1_1.png',
        qty: 5000,
        route: '/Catelog/category5'
      },
      {
        id: 6,
        name: 'Dresses',
        img: 'https://static2.urbanic.com/images/feeds/1673852485950/3R5A9440_1_1-.png',
        qty: 2000,
        route: '/Catelog/category6'
      },
      {
        id: 7,
        name: 'Shirts',
        img: 'https://static2.urbanic.com/images/feeds/1673850909782/3R5A9381_1_1.png',
        qty: 10000,
        route: '/Catelog/category7'
      }

    ],
    products: [
      {
        id: 1,
        slug: 1,
        name: 'Zuric two pc dfsdfsdfsdfdsfsdfsd',
        moq: 12,
        total: '10,000',
        fabric: 'Fabic',
        price: 500,
        favourite: false,
        images: [
          "images/c1.jpg",
          "images/c1.jpg",
          "images/c1.jpg",
          "images/c1.jpg",
          "images/c1.jpg",

        ],
        styleid: '#45957',
        colors: [
          { id: 1, name: 'black', img: "images/c1.jpg" },
          { id: 2, name: 'red', img: "images/c1.jpg" },
          { id: 2, name: 'white', img: "images/c1.jpg" },
          { id: 2, name: 'green', img: "images/c1.jpg" },
          { id: 2, name: 'purple', img: "images/c1.jpg" },
        ],


      },
      {
        id: 2,
        slug: 2,
        name: 'Spun Twill 3 PC',
        moq: 10,
        price: 500,
        total: '11,000',
        favourite: false,
        images: [
          "images/c2.jpg",
          "images/c2.jpg",
          "images/c2.jpg",
          "images/c2.jpg",
        ],
        styleid: '#45957',
        colors: [
          { id: 1, name: 'hotpink', img: "images/c2.jpg" },
          { id: 2, name: 'greenyellow', img: "images/c2.jpg" },
          { id: 2, name: 'voilet', img: "images/c2.jpg" },
          { id: 2, name: 'cyan', img: "images/c2.jpg" },
        ],

      },
      {
        id: 3,
        slug: 3,
        name: 'RIB TOP',
        moq: 10,
        price: 500,
        total: '12,000',
        favourite: false,
        images: [
          "images/c3.jpg",
          "images/c3.jpg",
          "images/c3.jpg",
          "images/c3.jpg",
        ],
        styleid: '#78459',
        colors: [
          { id: 1, name: 'Yellow', img: "images/c3.jpg" },
          { id: 2, name: 'purple', img: "images/c3.jpg" },
          { id: 3, name: 'green', img: "images/c3.jpg" },
          { id: 4, name: 'khaki', img: "images/c3.jpg" },
        ],

      },
      {
        id: 4,
        slug: 4,
        name: 'Zuric two pc',
        moq: 10,
        price: 500,
        total: '13,000',
        favourite: false,
        images: [
          "images/c4.jpg",
          "images/c4.jpg",
          "images/c4.jpg",
        ],
        styleid: '#75984',
        colors: [
          { id: 1, name: 'brown', img: "images/c4.jpg" },
          { id: 2, name: 'red', img: "images/c4.jpg" },
          { id: 3, name: 'brown', img: "images/c4.jpg" },
        ],

      },
      {
        id: 5,
        slug: 5,
        name: 'oversized t-shirt',
        moq: 10,
        price: 500,
        total: '14,000',
        favourite: false,
        images: [
          "images/c6.jpg",
          "images/c6.jpg",
          "images/c6.jpg"
        ],
        styleid: '#78412',
        colors: [
          { id: 1, name: 'black', img: "images/c4.jpg" },
          { id: 2, name: 'blue', img: "images/c4.jpg" },
          { id: 3, name: 'red', img: "images/c4.jpg" },
        ],

      },
      {
        id: 6,
        slug: 6,
        name: '22y28 oversized',
        moq: 10,
        price: 500,
        total: '15,000',
        favourite: false,
        images: [
          "images/c5.jpg",
          "images/c5.jpg",
          "images/c5.jpg",
        ],
        styleid: '#95185',
        colors: [
          { id: 1, name: 'skyblue', img: "images/c5.jpg" },
          { id: 2, name: 'white', img: "images/c5.jpg" },
          { id: 3, name: 'mediumpurple', img: "images/c5.jpg" },
        ],

      },
    ],
    sizes: [
      {
        bg: 'black',
      },
      {
        bg: 'red',
      },
      {
        bg: 'green',
      },
      {
        bg: 'blue',
      },
    ],

  },
  getters: {
    getProduct: (state) => (productId) => {
      let index = state.products.findIndex(product => product.id == productId);
      return state.products[index];
    },
    getProducts(state) {
      return state.products;
    },
    getCategories(state) {
      return state.categories;
    },
    getDatapps(state) {
      return state.datapps
    },
    getDatas(state) {
      return state.datas
    },
    getCards(state) {
      return state.cards
    },
    getLists(state) {
      return state.lists
    },
    getList: (state) => (listId) => {
      let index = state.lists.findIndex(list => list.id == listId);
      return state.lists[index];
    },
    getCurrentOrders(state) {
      return state.previousOrders.filter(order => order.status === 'current')
    },
    getCompletedOrders(state) {
      return state.previousOrders.filter(order => order.status === 'completed')
    },
    getOrders(state) {
      return state.orders
    },
    getOrder: (state) => (orderId) => {
      let index = state.orders.findIndex(order => order.id == orderId);
      return state.orders[index];
    },
    getSize(state) {
      return state.sizes;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
