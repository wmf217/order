
Component({
    properties: {
        categorys: {
            type: Array,
            value: []
        },
        category_key: {
            type: Number,
            value: 0
        },
        count: {
            type: String,
            value: 0
        },
    },
    data: {
        order: {},
    },
    ready: function () {
       this.data.order = new Map ();
    },
    methods: {
        getFood: function (event) {
            this.category_swith(event.currentTarget.dataset.cid,event.currentTarget.dataset.key);
        },
        category_swith (category_id,category_key) {
            this.setData({category_key:category_key});
            this.triggerEvent('getFood', {category_id:category_id,category_key:category_key});
        },
        detail: function (e) {
            this.triggerEvent('detail', {id:e.detail.id});
        },
        changeNum:function (e) {
            let food_id = e.detail.detail.id;
            let num     = e.detail.num;
            this.adjust(food_id,num);
            this.add(this.data.order,food_id,num);
            this.triggerEvent('changeNum', {food_id:food_id,num:num});
        },
        //前台修改数量
        adjust: function (food_id,num) {
            let category_key = this.data.category_key;
            let food        = this.data.categorys[category_key].foods.find((element) => (element.id == food_id));
            let food_key    = this.data.categorys[category_key].foods.findIndex((element) => (element.id == food_id));
            let category    = this.data.categorys[category_key];
            let before      = food.num==undefined?0:food.num;
            food.num        = num;
            let differ_num  = parseInt(food.num) - parseInt(before);
            let differ_price= parseInt(differ_num)*parseFloat(food.price);
            category.num    = category.num==undefined?0:category.num;
            category.num    = parseInt(category.num) + parseInt(differ_num);
            this.data.count = parseFloat(this.data.count) + parseFloat(differ_price);
            this.setData({
                ['categorys['+category_key+']']: this.data.categorys[category_key],
                ['categorys['+category_key+'].foods['+food_key+']']: food,
                count: this.data.count.toFixed(2)
            });
        },
        ok: function () {
            this.triggerEvent('ok',{order:this.data.order});
        },
        add: function (data,key,num) {
            if (!data.has(key)) {
                data.set(key,0);
            }
            data.set(key,parseInt(num));
            if (data.get(key)==0) {
                data.delete(key);
            }
        }
    },
})