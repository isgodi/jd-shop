<template>
    <div class="recommend">
        <h1>为/你/推/荐</h1>
        <div>
            <dl v-for="(item1,index1) in recom " :key="index1">
                <dt><img :src="item1.src"></dt>
                <dd>标题标题标题标题标题标题</dd>
                <dd><span>{{item1.price}}</span> <span>{{item1.oldprice}}</span></dd>
            </dl>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'recommend',
        components: {
        },
        data(){
            return{
                recom:[{price:"$520",oldprice:"$499",src:"killsrc/1.jpg"},{price:"$520",oldprice:"$499",src:"killsrc/2.jpg"},{price:"$520",oldprice:"$499",src:"killsrc/3.jpg"},{price:"$520",oldprice:"$499",src:"killsrc/4.jpg"},{price:"$520",oldprice:"$499",src:"killsrc/5.jpg"},{price:"$520",oldprice:"$499",src:"killsrc/6.jpg"},],
            }
        },
        beforeCreate() {
            //接收为你推荐的数据
            // this.$bus.$off();
            // this.$bus.$on("sendUser",(val)=>{
            //     this.recom=val;
            // })
        }
    }
</script>

<style lang="less">
    /*为你推荐*/
    .recommend{
        height:auto;
        width: 100%;
        background: white;
        h1 {
            width: 100%;
            height: .4rem;
            line-height: .4rem;
            text-align: center;
            background: #cccccc;
            color: #FF9D57;
            font-size: 16px;
        }
        div{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            flex-flow: row wrap;
            dl{
                width: 1.86rem;
                height: 2.61rem;
                dt{
                    width: 100%;
                    height: 1.86rem;
                    img{
                        width: 1.86rem;
                        height: 1.86rem;
                    }
                }
                dd:nth-of-type(1){
                    font-size: 13px;
                    font-weight: bold;
                    height: .44rem;
                }
                dd:nth-of-type(2){
                    font-size: 15px;
                    color: #F13737;
                    height: .22rem;
                    display: flex;
                    justify-content: space-around;
                }
            }
        }
    }
</style>