
Page({
  onLoad(){
    let {us,ps} = wx.getStorageSync('userinfo')||{};
    if(!us||!ps){
      wx.redirectTo({      
        url: '/pages/login/login'
      });
    }
  },
}
)
