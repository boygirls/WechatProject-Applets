// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myOrder: '我的订单',
    myOrder2: '我的订单',
    aboutAs: "关于我们",
    myImage1: "../../imgs/more.png",
    myImageStatus: [{
        id: 1,
        url: "../../imgs/order/daifukuan.png",
        title: "待付款",
      },
      {
        id: 2,
        url: "../../imgs/order/fahuo.png",
        title: "待发货",
      },
      {
        id: 3,
        url: "../../imgs/order/shouhuo.png",
        title: "待收货",
      },
      {
        id: 4,
        url: "../../imgs/order/pingjia.png",
        title: "待评价",
      },
      {
        id: 5,
        url: "../../imgs/order/wancheng.png",
        title: "已完成",
      },
    ],

    myImageFeatures: [{
        id: 1,
        url: "../../imgs/my-info/myquan.png",
        title: "我的优惠卷",
      },
      {
        id: 2,
        url: "../../imgs/my-info/tuikuan.png",
        title: "退款/售后",
      },
      {
        id: 3,
        url: "../../imgs/my-info/dizhi.png",
        title: "收货地址",
      },
      {
        id: 4,
        url: "../../imgs/my-info/kefu.png",
        title: "官方客服",
      },
      {
        id: 5,
        url: "../../imgs/my-info/shezhi.png",
        title: "设置",
      },
    ],
  },


  /**
   * 登录的网络请求
   */
  login1: function(username, name) {
    wx.request({
      url: 'http://116.62.205.51:8888/test/userApp/login', //开发URL接口地址
      data: { //传递的参数
        username: username,
        name: name
      },
      method: "POST",
      dataType: "JSON",
      header: {
        'content-type': 'application/x-www-form-urlencoded', //HTML HEADER 表头类型
      },
      success: function(res) {
        console.log("success" + res);
        console.log(res);
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    const accountInfo = wx.getAccountInfoSync();
    console.log(accountInfo.miniProgram.appId) // 小程序 appId
    console.log(accountInfo.plugin.appId) // 插件 appId
    console.log(accountInfo.plugin.version)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})