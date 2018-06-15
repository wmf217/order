Component({
    properties: {
        detail: Object,
        num: {
            type: Number,
            value: 0, 
        }
    },
    data: {
        minusStatus: 'disabled',
    },
    methods: {
        detail: function (e) {
            this.triggerEvent('detail', {id:e.currentTarget.dataset.id});
        },
        /* 点击减号 */
        bindMinus: function () {
            var num = this.data.num;
            // 如果大于0时，才可以减  
            if (num > 0) {
                num--;
            } else {
                return false;
            }
            // 只有大于一件的时候，才能normal状态，否则disable状态  
            var minusStatus = num <= 1 ? 'disabled' : 'normal';
            // 将数值与状态写回  
            this.setData({
                num: num,
                minusStatus: minusStatus
            });
            this.triggerEvent('changeNum', {detail:this.data.detail,num:num});
        },
        /* 点击加号 */
        bindPlus: function () {
            var num = this.data.num;
            // 不作过多考虑自增1  
            num++;
            // 只有大于一件的时候，才能normal状态，否则disable状态  
            var minusStatus = num < 1 ? 'disabled' : 'normal';
            // 将数值与状态写回  
            this.setData({
                num: num,
                minusStatus: minusStatus
            });
            this.triggerEvent('changeNum', {detail:this.data.detail,num:num});
        },
        /* 输入框事件 */
        bindManual: function (e) {
            var num = e.detail.value;
            if (num==null||num=='') {
                num = 0;
            }
            // 将数值与状态写回  
            this.setData({
                num: num
            });
            this.triggerEvent('changeNum', {detail:this.data.detail,num:num});
        },
    }
})