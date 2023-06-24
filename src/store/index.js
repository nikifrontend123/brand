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
        stag: "23269, 23269, Massa Rib, 1/1 top"
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
        stag: "23269, 23269, Massa Rib, 1/1 top"
      },
      {
        id: 3,
        img: "images/c3.jpg",
        tag: "#232234",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top"
      },
      {
        id: 4,
        img: "images/c4.jpg",
        tag: "#232123",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top"
      },
      {
        id: 5,
        img: "images/c5.jpg",
        tag: "#232565",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top"
      },
      {
        id: 6,
        img: "images/c6.jpg",
        tag: "#69646",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top"
      },
      {
        id: 7,
        img: "images/c1.jpg",
        tag: "#232565",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top"
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
    previousOrders:[
      {
        id:1,
        img:'https://img101.urbanic.com/v1/goods-pic/626c54fdfd92417e835c5ef39e8fc920UR_w540_h720_q85.webp',
        style:'01-20-23188',
        qty:'1000',
        msg:'Fabricator has accepted the order',
        status:'current'
      },
      {
        id:2,
        img:'https://img101.urbanic.com/v1/goods-pic/19b98b4c33f84efa8e085b41341a675a_w540_h720_q85.webp',
        style:'01-20-23188',
        qty:'1000',
        msg:'Monaal creation accepted order',
        status:'current'
      },
      {
        id:3,
        img:'https://img101.urbanic.com/v1/goods-pic/626c54fdfd92417e835c5ef39e8fc920UR_w540_h720_q85.webp',
        style:'01-20-23188',
        qty:'100',
        msg:'Fabricator has accepted the order',
        status:'completed'
      },
      {
        id:4,
        img:'https://img101.urbanic.com/v1/goods-pic/19b98b4c33f84efa8e085b41341a675a_w540_h720_q85.webp',
        style:'01-20-23188',
        qty:'100',
        msg:'Monaal creation accepted order',
        status:'completed'
      },
    ],
    orders:[
      {
        id:1,
        img:'https://img101.urbanic.com/v1/goods-pic/626c54fdfd92417e835c5ef39e8fc920UR_w540_h720_q85.webp',
        imgchat:'fabricators/fab1.png',
        style:'01-20-23188',
        qty:'1000',
        msg:'Fabricator has accepted the order',
        date:'14/06/2023'
      },
      {
        id:2,
        img:'https://img101.urbanic.com/v1/goods-pic/19b98b4c33f84efa8e085b41341a675a_w540_h720_q85.webp',
        imgchat:'fabricators/fab1.png',
        style:'01-20-27888',
        qty:'1000',
        msg:'Fabricator has accepted the order',
        date:'14/06/2023'
      },
      {
        id:3,
        img:'https://img101.urbanic.com/v1/goods-pic/3891a987e29641cfb2d96147cb7f4707UR_w540_h720_q85.webp',
        imgchat:'fabricators/fab1.png',
        style:'01-20-23108',
        qty:'500',
        msg:'Fabricator has accepted the order',
        date:'14/06/2023'
      },
      {
        id:4  ,
        img:'https://img101.urbanic.com/v1/goods-pic/2109d980fd1046fea7f456cafa0228fe_w540_h720_q85.webp',
        imgchat:'fabricators/fab1.png',
        style:'01-20-10188',
        qty:'9000',
        msg:'Fabricator has accepted the order',
        date:'14/06/2023'
      },
    ]

  },
  getters: {
    getDatapps(state) {
      return state.datapps
    },
    getDatas(state) {
      return state.datas
    },
    getCards(state) {
      return state.cards
    },
    getLists(state){
      return state.lists
    },
    getList: (state) => (listId) => {
      let index = state.lists.findIndex(list => list.id == listId);
      return state.lists[index];
    },
    getCurrentOrders(state){
      return state.previousOrders.filter(order => order.status === 'current')
    },
    getCompletedOrders(state){
      return state.previousOrders.filter(order => order.status === 'completed')
    },
    getOrders(state){
      return state.orders
    },
    getOrder: (state) => (orderId) => {
      let index = state.orders.findIndex(order => order.id == orderId);
      return state.orders[index];
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});
