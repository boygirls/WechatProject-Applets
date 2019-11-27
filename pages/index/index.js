//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    num :1,
    homeTitleWidth:"700px",
    homeTitle:[
      {
        id:1,
        title:"热销"
      },
      {
        id: 2,
        title: "男装"
      },
      {
        id: 3,
        title: "食品"
      },
      {
        id:4,
        title: "生鲜"
      },
      {
        id: 5,
        title: "女装"
      },
      {
        id: 6,
        title: "百货"
      },
      {
        id: 7,
        title: "箱包"
      },
    ],
    homeImages:[
      {
        id: 1,
        url: "../../resources/images/1.jpg"
      },
      {
        id: 2,
        url: "../../resources/images/2.jpg"
      },
      {
        id: 3,
        url: "../../resources/images/3.jpg"
      },
      {
        id: 4,
        url: "../../resources/images/4.jpg"
      }
    ],
    homeContent:[
      {
        id:1,
        content:"公告1"
      },
      {
        id: 2,
        content: "公告2"
      },
      {
        id: 3,
        content: "公告3"
      }
    ],
    home:[
      {
        id:1,
        imgUrl:"../../resources/icon/nav0.png",
        title:"超市"
      },
      {
        id: 2,
        imgUrl: "../../resources/icon/nav1.png",
        title: "进口"
      },
      {
        id: 3,
        imgUrl: "../../resources/icon/nav2.png",
        title: "服饰"
      },
      {
        id: 4,
        imgUrl: "../../resources/icon/nav3.png",
        title: "生鲜"
      },
      {
        id: 5,
        imgUrl: "../../resources/icon/nav5.png",
        title: "充值"
      },
      {
        id: 6,
        imgUrl: "../../resources/icon/nav6.png",
        title: "钱包"
      },
      {
        id: 7,
        imgUrl: "../../resources/icon/nav7.png",
        title: "抵用卷"
      },
      {
        id: 8,
        imgUrl: "../../resources/icon/nav8.png",
        title: "物流"
      }     

    ],
    goodsList:[
      {
        id:1,
        imgUrl:"../../resources/goodsImage/d_sp_04.png",
        name:"衣服",
        price:"￥100.00"
      },
      {
        id: 2,
        imgUrl: "../../resources/goodsImage/d_sp_05.png",
        name: "衣服",
        price: "￥200.00"
      },
      {
        id: 3,
        imgUrl: "../../resources/goodsImage/d_sp_06.png",
        name: "衣服",
        price: "￥300.00"
      },
      {
        id: 4,
        imgUrl: "../../resources/goodsImage/d_sp_04.png",
        name: "衣服",
        price: "￥100.00"
      }
    ]
  },
  onCatchtap : function(e){
    console.log(e);
    this.setData({
      num:e.target.dataset.number
    });
  },
  //事件处理函数
  onLoad: function () {
    
  },
  toGoodsDetail : function (e){
    
    wx.navigateTo({
      url: '../goodsDetails/goodsDetails?id='+e.currentTarget.dataset.id,
    })
  }
})
