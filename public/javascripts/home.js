let search = new Vue({
    el: "#search",
    data: {
        searchKeyWord: "",
        page:0,
        line:2,
        arr: []
    },
    methods: {
        search:function(){
            this.page = 0;
            this.arr = [];
            this.$http.post('/home',
                {
                    keyWord:this.searchKeyWord,
                    page:this.page,
                    line: this.line
                })
                .then(function (data) {
                    console.log(data);
                    this.arr.push(...data.body);
                    this.page += this.line;
                })
        },
        nextPage: function () {
            this.$http.post('/home',
                {
                    keyWord:this.searchKeyWord,
                    page:this.page,
                    line: this.line
                })
                .then(function (data) {
                console.log(data);
                this.arr.push(...data.body);
                this.page += this.line;
            });
        }
    },
    mounted: function () {
        this.search();
    }
});