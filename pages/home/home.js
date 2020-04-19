// pages/home/home.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {

  },
  handleShowToast(){
    wx.showToast({
      title: '你好奥利给！',
      icon: 'loading'
    })
  },
  handleShowModal(){
    wx.showModal({
      title: '我是标题',
      content: '我是内容',
      cancelColor: 'cancelColor',
      cancelText: '奥利给',
      success: function(res) {
        console.log(res)
        if(res.cancel) {
          console.log('点击取消')
        }
        if(res.confirm) {
          console.log('点击确定')
        }
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: '奥利给',
      mask: true,
    })
    setTimeout(() => {
      wx.hideLoading({
        complete: (res) => {},
      })
    }, 2000);
  },
  handleShowActionSheet() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      success: function(res) {
        console.log(res)
      }
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
    return {
      title: '老八秘制小汉堡',
      path: 'pages/home/home',
      imageUrl: 'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=368070538,3381654967&fm=58'

    }
  }
})