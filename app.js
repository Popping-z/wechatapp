App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    wx.getUserInfo({
      // 异步调用，拿到数据后，再进行回调
      success: (res) => {
        // console.log(res)
      },
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    // 1.判断小程序进入场景
    console.log(options)
    // switch(options.scene) {
    //   case 1001:
    //     wx.showToast({
    //       title: '发现栏小程序主入口',
    //       icon: 'none'
    //     })
    //     break
    //   case 1005:
    //     wx.showToast({
    //       title: '顶部搜索框的搜索结果页',
    //       icon: 'none'
    //     })
    //     break
    //   case 1011:
    //     wx.showToast({
    //       title: '扫描二维码',
    //       icon: 'none'
    //     })
    //     break
    // }
    // 2.获取用户信息，获取成功后将用户信息传递给服务器
    wx.getUserInfo({
      success: (res) => {
        // console.log(res.userInfo)
      }
    })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },

  globalData: {
    name: '老八秘制小汉堡儿'
  }
})
