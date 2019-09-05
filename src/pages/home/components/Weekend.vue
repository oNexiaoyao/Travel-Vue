<template>
    <div>
        <div class="recommend-title">周末去那儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wr">
                    <img :src="item.imgUrl" :alt="item.title" class="item-img">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    data () {
        return {
            recommendList: [
                {
                    id: '001',
                    imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/f1/ae9d4299b8aaea.jpg_r_640x214_0c555905.jpg',
                    title: '银杏湖乐园',
                    desc: '银杏湖乐园银杏湖乐园'
                },
                {
                    id: '002',
                    imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/e1/cdbf56d837da59.jpg_r_640x214_105fc3f2.jpg',
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
.item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.3%
    .item-img
        height 100%
.item-info
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
</style>