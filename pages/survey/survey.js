// pages/survey/survey.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    submit(e) {
        console.log(e.detail.value)
        wx.request({
          // 缺少http://无法调用
          url: 'http://localhost:3000/survey',
          method: 'POST',
          data: e.detail.value,
          // 返回数据结构
          // data: 服务器的响应数据
          // errMsg: 成功或失败的信息
          // header: 服务器的响应头
          // statusCode: 服务器的响应状态码
          success(res) {
              console.log(res)
          },
          complete(res) {
              console.log(res)
          }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})