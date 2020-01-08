<template>
    <div class="shopcar">
        <h2>购物车 <span>编辑</span></h2>
        <div class="car">
            <h3><input type="checkbox"> JD 京东自营 <span>JD 京东自营</span></h3>
            <div>
                <h4><font color=red>满减 </font> 已购满19.00元，可领取赠票 <span>领赠品 > </span></h4>
                <div>
                    <input type="checkbox">
                    <img src="../../../public/killsrc/2.jpg" style="width: .93rem;height: .93rem;">
                    <ul>
                        <li>商品名</li>
                        <li>规格</li>
                        <li> <span>价格666</span>   <span><button>-</button><span class="shopnum">1</span><button>+</button></span></li>
                    </ul>
                </div>
            </div>
            <h5> 优惠 满100减50、满200减100、满300减200<span>修改</span></h5>
        </div>
<!-- 为你推荐-->
        <recommend />
    </div>
</template>

<script>
    import recommend from "../../components/recommend"
    export default {
        name: 'shopcar',
        components: {
            recommend,
        },
        mounted() {
        }
    }
</script>

<style lang="less">
    .shopcar {
        width: 100%;
        height: 100%;
        font-family: PingFangSC-regular;
        font-weight: 400;
        background: #cccccc;
        h2{
            height: .44rem;
            width: 100%;
            line-height: .44rem;
            font-size: 19px;
            text-align: center;
            padding-left: 1.1rem;
            margin-bottom: .1rem;
            background: white;
            span{
                display: inline-block;
                width: .31rem;
                font-size: 15px;
                margin-left: .7rem;

            }
        }
        .car{
            background: white;
            width: 100%;
            height: 2.22rem;
            h3{
                line-height: .45rem;
                height: .45rem;
                font-weight: 400;
                margin-bottom: .13rem;
                span{
                    font-size: 12px;
                    float: right;
                    padding-right: .2rem;
                }
            }
            div{
                h4{
                    height: .17rem;
                    line-height: .17rem;
                    font-weight: 400;
                    font-size: 12px;
                    margin-bottom: .1rem;
                    span{
                        float: right;
                        color: red;
                        font-weight: bold;
                        padding-right: .1rem;
                    }
                }
                div{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    input{
                        flex: .5;
                    }
                    img{
                        flex: 2;
                    }
                    ul{
                        list-style: none;
                        padding: 0 0 0 .2rem;
                        flex: 4;
                        li{
                          display: flex;
                            justify-content: space-between;
                            padding: 5px 0;
                            button{
                                width: .24rem;
                                height: .24rem;
                            }
                            .shopnum{
                                display: inline-block;
                                width: .4rem;
                                height: .24rem;
                                border: 1px solid #cccccc;
                                text-align: center;
                            }
                        }
                    }
                }
            }
            h5{
                height: .34rem;
                line-height: .34rem;
                padding-left: .3rem;
                padding-right: .3rem;
                span{
                    float: right;
                }
            }
        }
    }
</style>