// pages/home/home.js
const app = getApp()
console.log(app.globalData.name)

// 注册页面
// 每个页面也有自己的生命周期
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '老八',
    age: 18,
    students: [
      {name: '郭老师', age: 38, hobby: '油炸鸡米花'},
      {name: '老八', age: 33, hobby: '奥利给'},
      {name: '带篮子', age: 25, hobby: 'rip'}
    ],
    counter: 0,
    list: []
  },
  addClick() {
    // 错误做法，界面不会刷新
    // this.data.counter++

    // 2.this.setData()
    this.setData({
      counter: this.data.counter+1
    })
  },
  subtractClick() {
    // 错误做法
    // this.data.counter--
    
    //使用this.setData()
    this.setData({
      counter: this.data.counter-1
    }) 
  },
  handleGetUserInfo(event) {
    console.log(event)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx,wx.request({
      url: 'http://123.207.32.32:8000/api/h8/recommend',
      success: (result) => {
        console.log(result)
        const data = result.data.data.list
        this.setData({
          list: data
        })
      },
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