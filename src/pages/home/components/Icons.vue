<template>
  <div class="icons-container">
    <swiper>
      <swiper-slide v-for=" (pageItem, index) of pages " :key="index">
        <div class="icon" v-for=" item of pageItem" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data: () => {
    return {
      iconList: [
        {
          id: "001",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票景点门票景点门票景点门票"
        },
        {
          id: "002",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png",
          desc: "故宫"
        },
        {
          id: "003",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          desc: "北京必游"
        },
        {
          id: "004",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png",
          desc: "水上乐园"
        },
        {
          id: "005",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          desc: "一日游"
        },
        {
          id: "006",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
        {
          id: "007",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png",
          desc: "故宫"
        },
        {
          id: "008",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          desc: "北京必游"
        },
        {
          id: "009",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png",
          desc: "水上乐园"
        },
        {
          id: "010",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          desc: "一日游"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        let page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });

      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mixins.styl'
.icons-container >>> .swiper-container
  width 100%
  height 0
  overflow hidden
  padding-bottom 50%
  .icon
    position relative
    width 25%
    height 0
    padding-bottom 25%
    float left
    overflow hidden
    .icon-img
      position absolute
      top 0
      right 0
      bottom 0.44rem
      left 0
      box-sizing border-box
      padding 0.1rem
      .icon-img-content
        display block
        margin 0 auto
        height 100%
    .icon-desc
      position absolute
      right 0
      bottom 0
      left 0
      height 0.44rem
      line-height 0.44rem
      text-align center
      color $darkTextColor
      ellipsis()
</style>