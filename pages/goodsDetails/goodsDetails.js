// pages/goodsDetails/goodsDetails.js
Page({

  data: {
    goodsImages: [
      {
        id: 1,
        url: "../../resources/goodsImage/d_sp_04.png"
      },
      {
        id: 2,
        url: "../../resources/goodsImage/d_sp_05.png"
      },
      {
        id: 3,      
        url: "../../resources/goodsImage/d_sp_06.png"
      },
      
    ],
    goodsList: [
      {
        id: 1,
        imgUrl: "../../resources/goodsImage/d_sp_04.png",
        name: "衣服",
        price: "100.00"
      },
      {
        id: 2,
        imgUrl: "../../resources/goodsImage/d_sp_05.png",
        name: "衣服",
        price: "200.00"
      },
      {
        id: 3,
        imgUrl: "../../resources/goodsImage/d_sp_06.png",
        name: "衣服",
        price: "300.00"
      },
      {
        id: 4,
        imgUrl: "../../resources/goodsImage/d_sp_04.png",
        name: "衣服",
        price: "100.00"
      }
    ],
    shopNum:1,
    isShopViewShow:true,
    goodsItem:null
  },
  showShopView:function (){
    this.setData({
      isShopViewShow:false
    })    
  },



  hideShopView: function(){
    //先获取购买数量
    var goodsNum = this.data.shopNum;
    //获取商品信息
    var goodsItem = this.data.goodsItem;
    //设置商品的购买数量
    goodsItem.goodsNum = parseInt(goodsNum);

    //是否选中，默认选中状态
    goodsItem.isSelect = true;
    //从微信缓存中获取购物车信息
    var cartList = wx.getStorageSync("cartList");
    if(cartList){
      //监听货物是否在购物车中 存在为true
      var isAdd =false;
      for(var i =0;i<cartList.length;i++){
        if(this.data.goodsItem.id == cartList[i].id){
          isAdd = true;//如果存在 我们设置为true
          //购物车中的数量 累加当前购买的数量
          cartList[i].goodsNum += goodsItem.goodsNum;
        }
      }
        if(!isAdd){
        //如果不存在购物列表则把购买的商品信息加入到数组中
        cartList.push(goodsItem);
        }
    }
    else{
      //创建数组
      var cartList = [];
      //把购买的商品信息加入到数组中
      cartList.push(goodsItem);
    }
    //存到微信的缓存当中 Key自定义
    wx.setStorage({
      key: 'cartList',
      data: cartList,
    })

    this.setData({
      isShopViewShow: true
    })
  },




  
  onAddShopNum : function (e){
    var addNum = parseInt(e.target.dataset.addnum);
    var shopNum = this.data.shopNum;
    shopNum += addNum;

    if(shopNum<1){
      shopNum = 1;
    }
    this.setData({
      shopNum:shopNum
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
    console.log(options);
    this.data.goodsItem = this.queryGoods(options.id);
   },
   //正常要从服务器获取数据 模拟获取数据
  queryGoods: function(id){
    var goodsItem;
    this.data.goodsList.forEach(function(item,index){
      if(item.id == id){
        goodsItem = item;
      }
    })
    return goodsItem;
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})