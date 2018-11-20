Page({
  data: {
    lists: [
        {
          "type": "类目一",
          "list": [{
            "name": "001",
            "sn": "S02",
            "image":"1.png"
          },
            {
              "name": "002",
              "sn": "S02",
              "image": "1.png"
            }]
        },
        {
          "type": "类目二",
          "list": [{
            "name": "001",
            "sn": "S02",
            "image": "1.png"
          },
          {
            "name": "002",
            "sn": "S02",
            "image": "1.png"
          }]
        },
        {
          "type": "类目三",
          "list": [{
            "name": "001",
            "sn": "S02",
            "image": "1.png"
          },
          {
            "name": "002",
            "sn": "S02",
            "image": "1.png"
          }]
        },
        {
          "type": "类目四",
          "list": [{
            "name": "001",
            "sn": "S02",
            "image": "1.png"
          },
          {
            "name": "002",
            "sn": "S02",
            "image": "1.png"
          }]
        },
        {
          "type": "类目五",
          "list": [{
            "name": "001",
            "sn": "S02",
            "image": "1.png"
          },
          {
            "name": "002",
            "sn": "S02",
            "image": "1.png"
          }]
        },
        {
          "type": "类目六",
          "list": [{
            "name": "001",
            "sn": "S02",
            "image": "1.png"
          },
          {
            "name": "002",
            "sn": "S02",
            "image": "1.png"
          }]
        },
        {
          "type": "类目七",
          "list": [{
            "name": "001",
            "sn": "S02",
            "image": "1.png"
          },
          {
            "name": "002",
            "sn": "S02",
            "image": "1.png"
          }]
        },
        {
          "type": "类目八",
          "list": [{
            "name": "001",
            "sn": "S02",
            "image": "1.png"
          },
          {
            "name": "002",
            "sn": "S02",
            "image": "1.png"
          }]
        },
        {
          "type": "类目九",
          "list": [{
            "name": "001",
            "sn": "S02",
            "image": "1.png"
          },
          {
            "name": "002",
            "sn": "S02",
            "image": "1.png"
          }]
        },
        {
          "type": "类目十",
          "list": [{
            "name": "001",
            "sn": "S02",
            "image": "1.png"
          },
          {
            "name": "002",
            "sn": "S02",
            "image": "1.png"
          }]
        },
        {
          "type": "类目十一",
          "list": [{
            "name": "001",
            "sn": "S02",
            "image": "1.png"
          },
          {
            "name": "002",
            "sn": "S02",
            "image": "1.png"
          }]
        },
        {
          "type": "类目十二",
          "list": [{
            "name": "001",
            "sn": "S02",
            "image": "1.png"
          },
          {
            "name": "002",
            "sn": "S02",
            "image": "1.png"
          }]
        }
    ],
    toView: '0',
    scrollTop: 100,
    selectIndex:0
  },
  selectMenu: function (e) {
    var index = e.currentTarget.dataset.itemIndex;
    this.setData({
      selectIndex:index,
      toView: 'order' + index.toString()
    })
    console.log(this.data.toView);
  },
 
  onLoad: function (options) {
   
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})
