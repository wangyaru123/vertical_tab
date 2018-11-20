// pages/text/text.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btntext:"点击",
    text:"xin",
    show:true,
    news:['aa', 'bb', 'cc']

  },
  view1_click:function(event){
    console.log(event)
    // 点击view3, 由于冒泡，导致了view1_click也执行了，打印出来的event.currentTarget.id = view1, event.target.id = view3,
    // 设置data - title='11', 可以通过event.currentTarget.dataset.title获取到值
  },
  view2_click: function (event) {
    console.log(event)
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

  },
  btnClick: function(){
    console.log("地安集了");
    this.setData({
      show: !this.data.show
      
    })

  }
})