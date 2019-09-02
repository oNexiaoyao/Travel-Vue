<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for=" item of swiperList " v-bind:key="item.id">
        <img
          class="swiper-img"
          :src="item.imgUrl"
          alt="去哪儿门票"
        />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data: () => {
    return {
      swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
      },
      swiperList: [
          {
            id: '001',
            imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/d3b0e3206e4c6e6ee93cdbf4b8f7b0cb.jpg_750x200_07d5c245.jpg'
          },
          {
              id: '002',
              imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/d52e15a5769b90dc1fc8ad15b093d70f.jpg_750x200_71f1c317.jpg'
          }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
// 样式穿透，否则设置的样式只在当前组件有效
.wrapper >>> .swiper-pagination-bullet-active
    background-color: #fff
.wrapper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 26.7%
    background-color: #eee
    .swiper-img
        width: 100%
</style>
