// pages/function1/function1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //判断有没有登陆
    let {us,ps} = wx.getStorageSync('userinfo')||{};
    if(!us||!ps){
      wx.redirectTo({      
        url: '/pages/login/login'
      });
    }
  },
  gotoCamera(){
    wx.navigateTo({
      url: '/pages/camera/camera',
    })
  },
  gotoDoor(){
    wx.navigateTo({
      url: '/pages/door/door',
    })
  },
  gotoTravel(){
    wx.navigateTo({
      url: '/pages/travel/travel',
    })
  },
  gotoOnekey(){
    wx.navigateTo({
      url: '/pages/onekey/onekey',
    })
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