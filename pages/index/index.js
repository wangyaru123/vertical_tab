//index.js
//获取应用实例
//坐标地址转化
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;
const app = getApp()

Page({
  data: {
    address: '定位中...',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 地点定位
  onhhShow: function (options) {
    var longitude;
    var latitude;
    var self = this;
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        longitude = res.longitude;
        latitude = res.latitude;
        app.globalData.longitude = longitude;
        app.globalData.latitude = latitude;
        //  var adx = util.coordinatetoaddress(long, lat) 
        qqmapsdk = new QQMapWX({
          key: 'UN2BZ-3VFKW-C3ORB-O2BAS-EHQTE-64BLQ'
        });
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function (addressRes) {
            var addressx = addressRes.result.formatted_addresses.recommend;
            self.setData({
              address: addressx
            });
          },
          fail: function (res) {
          },
          complete: function (res) {
          }
        })
      }
    })
  },
})
