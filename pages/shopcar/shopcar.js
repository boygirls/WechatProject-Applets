// pages/shopcar/shopcar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hideShopCar:false,
    isEdit:false,
    cartList: null,
    totalMoney:0,
    isAllSelect:true,
  },
  toIndexBtn: function(){
   wx.switchTab({
     url: '../index/index',
   })
  },
  deleteExit: function(){
    if(this.data.isEdit){
      this.setData({
        isEdit: false
      })
    }else{
      this.setData({
        isEdit: true
      })
    }   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    //从微信缓存中获取购物车的数据
      this.data.cartList = wx.getStorageSync("cartList") || [];
    
    //判断是否有数据 如果没有数据 则显示空空如也
    if (this.data.cartList.length != 0) {
      this.setData({
        hideShopCar: true
      });
    } else {
      this.setData({
        hideShopCar: false
      }); 
    }
    //调用重新计算总金额的方法
    this.onShopTotalMoney();
    //重现渲染页面
    this.setData(this.data);
  },


   
  //购物车商品数量加减方法
  addShopGoodsNum:function(e){
    var id = e.currentTarget.dataset.id;//累加的商品ID
    var num = e.currentTarget.dataset.num;//累加数量
    //循环整个购物车列表 找到要累加商品 进行数量的变更
    this.data.cartList.forEach(function(item,index){
      if(item.id == id){
        item.goodsNum += parseInt(num);//数量的变更 因为num是字符串类型 所以需要强制转换为数字类型后 进行计算
      }
      if(item.goodsNum<1){
        item.goodsNum = 1
      }
    })
    //重新写到微信缓存当中 刷新购物车列表
    wx.setStorage({
      key: 'cartList',
      data: this.data.cartList,
    })
    //调用重新计算总金额的方法
    this.onShopTotalMoney();
    //渲染到我们的页面当中
    this.setData(this.data);
  },
  //重新计算总的结算金额
  onShopTotalMoney: function(){
      var totalMoney = 0;//总金额
      //循环整个购物车列表 判断如果该商品是选中状态的话 则金额进行累加
      this.data.cartList.forEach(function (item, index) {
        if (item.isSelect) {
          totalMoney += (item.goodsNum * item.price);
        }
      })
      this.data.totalMoney = totalMoney;
    
  },
  onShopCheckChange: function(e){
    var isSelect = false;
    var id = e.currentTarget.dataset.id;
    //如果是选中状态 则数组必然大于0 这时候我们把变量改为true
    if(e.detail.value.length > 0){
      isSelect = true;
    }
    //循环找到变更的商品后改变它的复选框选中状态
    this.data.cartList.forEach(function (item, index) {
      if (item.id == id) {
       item.isSelect = isSelect;
      }
    })
    //重新写到微信缓存当中 刷新购物车列表
    wx.setStorage({
      key: 'cartList',
      data: this.data.cartList,
    })
    //调用重新计算总金额的方法
    this.onShopTotalMoney();
    //渲染到我们的页面当中
    this.setData(this.data);
  },



  onAllSelectCheck : function(e){
    console.log(e);
    var isSelect = false;
    //如果是选中状态 则数组必然大于0 这时候我们把变量改为true
    if (e.detail.value.length > 0) {
      isSelect = true;
    }


    //循环找到变更的商品后改变它的复选框选中状态
    this.data.cartList.forEach(function (item, index) {
        item.isSelect = isSelect;
    })
    //重新写到微信缓存当中 刷新购物车列表
    wx.setStorage({
      key: 'cartList',
      data: this.data.cartList,
    })
    //调用重新计算总金额的方法
    this.onShopTotalMoney();
    //调用重新计算全选状态
    this.onAllSelect();
    //渲染到我们的页面当中
    this.setData(this.data);
  },


  //重新计算是否全选
  onAllSelect:function(){
    var isSelect = true;
    //循环找到变更的商品后改变它的复选框选中状态
    this.data.cartList.forEach(function (item, index) {
      if(item.isSelect != true){
        isSelect = false;
      }
    })
   },


   deleteGoods:function(){
      var deleteShop = [];
      this.data.cartList.forEach(function(item,index){
        deleteShop.push(index)
      })
      for(var i =deleteShop.length-1;i>=0;i--){
        this.data.cartList.splice(deleteShop[i],1);
      }
     //重新写到微信缓存当中 刷新购物车列表
     wx.setStorage({
       key: 'cartList',
       data: this.data.cartList,
     })
     //调用重新计算总金额的方法
     this.onShopTotalMoney();
     //渲染到我们的页面当中
     this.setData(this.data);
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