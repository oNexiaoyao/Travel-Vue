<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img :src="item.imgUrl" :alt="item.title" class="item-img">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    data () {
        return {
            recommendList: [
                {
                    id: '001',
                    imgUrl: 'https://imgs.qunarzz.com/sight/p0/1511/ea/eaf1bdc38aed9e6690.img.jpg_200x200_3032bf56.jpg',
                    title: '银杏湖乐园',
                    desc: '银杏湖乐园银杏湖乐园'
                },
                {
                    id: '002',
                    imgUrl: 'https://imgs.qunarzz.com/sight/p18/201211/03/db9f2bb27ee40bf893835fbb.jpg_200x200_cf1de8d6.jpg',
                    title: '美龄宫',
                    desc: '美龄宫美龄宫美龄宫'
                },
                {
                    id: '003',
                    imgUrl: 'https://imgs.qunarzz.com/sight/p0/1907/df/dfe043ff2829f50ca3.img.jpg_200x200_6de74461.jpg',
                    title: '南京海底世界',
                    desc: '南京海底世界南京海底世界'
                },
                {
                    id: '004',
                    imgUrl: 'https://imgs.qunarzz.com/sight/p0/1511/ea/eaf1bdc38aed9e6690.img.jpg_200x200_3032bf56.jpg',
                    title: '银杏湖乐园',
                    desc: '银杏湖乐园银杏湖乐园'
                }
            ]
        } 
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.recommend-title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
.item
    display flex
    height 1.9rem
    overflow hidden
    .item-img
        width 1.7rem
        height 1.7rem
        padding .1rem
    .item-info
        flex 1
        padding .1rem
        min-width 0
        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color #ccc
            ellipsis()
        .item-button
            line-height .44rem
            margin-top .16rem
            background #ff9300
            padding 0 .2rem
            border-radius .06rem
            color #fff
</style>