<template>
  <div class="header">
    <div class="h-left"><router-link to="/"><span class="iconfont backicon">&#xe624;</span></router-link> </div>
    <div class="h-input"><router-link to="/search"><div class="inputtitle"><span class="iconfont iconbar">&#xe632;</span>电影搜索</div> </router-link></div>
    <router-link to="/i">
      <div class="h-right">
        <span class="iconfont user" v-if="this.img.length === 0">&#xe6fd;</span>
        <img class="imgheader" :src='this.img' v-else/>
        <!--<div>{{this.img}}</div>-->
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  data () {
    return {
      keywords: '',
      show: true
    }
  },
  computed: {
    ...mapState(['img'])
  }
}
</script>

<style lang="stylus" scoped>
  .header
    height 1.02rem
    line-height .86rem
    display flex
    background-color black
    .h-left
      width .4rem
      line-height .84rem
      padding .11rem .2rem
      float :left
      .backicon
        text-align center
        color #cacaca
        font-size .4rem
    .h-input
      flex :1
      height :.7rem
      line-height .62rem
      margin-top :.17rem
      padding-left :.2rem
      margin-left: .2rem;
      border-radius :.1rem
      text-align center
      display inline-block
      background-color #fff
      .inputtitle
        font-family iconfont
        background-color #fff
        color #999
        line-height .6rem
        font-size .35rem
        margin .05rem .2rem
        text-align center
        border-radius .08rem
    .h-right
      float right
      margin-left .4rem
      padding-right .1rem
      text-align :center
      margin-top .1rem
      .user
        font-size .66rem
        color #cacaca
      .imgheader
        width .6rem
        height .6rem
        overflow hidden
        border-radius .5rem
</style>
