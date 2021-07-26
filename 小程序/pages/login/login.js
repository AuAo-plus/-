// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  inputUs(e){
    let value = e.detail.value;
    this.data.us = value;
  },
  inputPs(e){
    let value = e.detail.value;
    this.data.ps = value;
  },
  clickLogin(){
    let {us,ps} = this.data;
    ///在这里调用登陆接口
    wx.request({
      url: 'url',
    })
    //成功之后存用户数据
    wx.setStorageSync('userinfo', {us,ps});
    //再跳转页面
    wx.showToast({
      title: '登陆成功',
      icon:'success',
      duration:2000,
    })
    wx.switchTab({
      url: '/pages/index/index',
    })
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