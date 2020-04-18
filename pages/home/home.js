// pages/home/home.js
import request from '../../service/network'
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
    // 使用封装的request发送网络请求
    request({
      url: 'http://123.207.32.32:8000/api/h8/recommend',
    }).then(res => {
      console.log(res)
    })

    // 发送网络请求
    // 1.发送最简单的get请求
    // wx.request({
    //   url: 'http://123.207.32.32:8000/api/h8/recommend',
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
    // 2.发送携带参数的get请求
    // wx.request({
    //   url: 'http://123.207.32.32:8000/api/h8/home/data',
    //   data: {
    //     type: 'sell',
    //     page: 1
    //   },
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
    // 3.发送post请求，并且携带参数
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: 'post',
    //   data: {
    //     name: 'boke',
    //     age: 11
    //   },
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })

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