Page({

  /**
   * 页面的初始数据
   */
  data: {
    categorys: [
      {
        "id": "1",
        "name": "素材系列",
        "num": 0,
        foods: [
          { "id": "1", "price": "1.00", "name": "红烧狮子头", "rest_num": 10, "img": "food1.jpg", "num": null },
          { "id": "2", "price": "2.00", "name": "熏肉大饼", "rest_num": 10, "img": "food2.jpg", "num": null }
        ]
      },
      {
        "id": "2",
        "name": "招牌系列",
        "num": null,
        foods: [
          { "id": "3", "price": "4.00", "name": "鸡腿", "rest_num": 5, "img": "food3.jpg", "num": 0 },
        ]
      }
    ],
    count: 0,
  },
  getFood: function (e) {
    console.log(e.detail.category_key);
  },
  detail: function (e) {
    console.log(e.detail.id);
  },
  changeNum: function (e) {
    let food_id = e.detail.food_id;
    let num = e.detail.num;
    console.log(food_id, num)
  },
  ok: function (e) {
    console.log(e.detail.order);
    console.log("完成");
  }
});