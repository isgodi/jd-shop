<template>
    <div class="shopcar">
<!-- 个人信息-->
        <header>
            <img src="../../../public/killsrc/1.jpg"/>
            <div>
                <span>昵称</span><br>
                <span>经验</span><br>
                <span>金牌会员</span><br>
            </div>
        </header>
<!-- 钱包-->
        <div class="monyeball">
            <div class="monye" >
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
            </div>
            <div style="height: .8rem;">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
            </div>
        </div>
<!-- 商品关注-->
        <div class="seeShop">
            <div class="sshop">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>

            </div>
            <div style="height:.8rem;">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>

            </div>
        </div>
<!-- 为你推荐-->
        <recommend/>
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
        background: #cccccc;
        header {
            width: 100%;
            height: 1.34rem;
            display: flex;
            justify-content: start;
            align-items: center;
            background: #F13737;
            img{
                width: .6rem;
                height: .6rem;
                margin: 35px 0 0 20px;
                border: 1px solid #000000;
                border-radius: 50%;
            }
            div{
                height: .6rem;
                margin: 35px 0 0 20px;
            }
        }
        .monyeball{
            height: 1.6rem;
            width: 100%;
            background: white;
            margin-bottom: .1rem;
            div{
                display: flex;
                justify-content: space-around;
                align-items: center;
                text-align: center;
            }
            .monye{
                border-bottom:1px solid #cccccc;
                height: .77rem;
                width: 100%;
                padding-top: 10px;
                box-sizing:content-box;
            }
        }
        .seeShop{
            height: 1.65rem;
            width: 100%;
            background: white;
            div{
                display: flex;
                justify-content: space-around;
                text-align: center;
                align-items: center;
            }
            .sshop{
                border-bottom:1px solid #cccccc;
                height: .77rem;
                width: 100%;
            }
        }
    }

</style>