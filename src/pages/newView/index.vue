<template>
  <div class="newView">
    <div class="newview-bg">
      <div class="wrapper">
        <div class="banner-left">
          <div class="banner-bigtitle">{{$t('newViewPage.text1')}}<span class="important-title">{{$t('newViewPage.text2')}}</span></div>
          <p class="title-desc">{{$t('newViewPage.text3')}}</p>
          <span class="line"></span>
        </div>
        <div class="banner-right">
          <img src="./images/newview-banner.png" alt="">
        </div>
      </div>
    </div>
    <div class="new-container">
      <div class="wrapper">
        <div class="container-title">
          <h3 class="container-titles">{{$t('newViewPage.text4')}}</h3>
          <span class="line"></span>
        </div>
        <ul class="two-list-container">
          <li class="two-list" v-for="(item, index) in newArr" :key="index">
            <div class="new-imgbox">
             <img :src="'http://image.9mn3n.cn/' + item.coverImgUrl" alt="">
              <!--<div :style="{backgroundImage: 'url(http://image.9mn3n.cn/' + item.coverImgUrl + ')'}" class="bg"></div>-->
            </div>
            <h5 class="list-title">{{item.title}}</h5>
            <p class="list-desc">{{item.abstractDigest}}</p>
            <button class="btn" @click="$router.push({path: '/news', query: {id: item.id, name: 'newView'}})">{{$t('newViewPage.text5')}}</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrapper
    width: 1200px
    margin: 0 auto
    @media screen and (max-width: 1200px)
      width: 100%
  .newView
    width: 100%
    .newview-bg
      width: 100%
      height 600px
      background: #171718 url("../../assets/images/common/banner-quan.png") no-repeat center / cover
      .wrapper
        height: 600px
        margin: 0 auto
        display flex
        align-items center
        justify-content space-between
        @media screen and (max-width: 1200px)
          margin-top: 106px
          padding: 30px 10px
          flex-direction column
          box-sizing border-box
        @media screen and (max-width: 768px)
          margin-top: 60px
      .banner-left
        @media screen and (max-width: 680px)
          margin-right: 15px
        .banner-bigtitle
          color #fff
          font-size: 32px
          font-weight bold
          line-height: 1.2
          .important-title
            color #d9ab2b
        .title-desc
          width: 480px
          color #fff
          font-size: 16px
          line-height: 1.5
          margin: 30px 0 96px
          @media screen and (max-width: 680px)
            width: 100%
            margin-top: 10px
            margin-bottom: 30px
        .line
          display block
          width: 62px
          height: 2px
          background-color: #d9ab2b
      .banner-right
        display flex
        align-items center
        margin-right: 74px
        @media screen and (max-width: 1200px)
          margin-right: 0
        img
          width: 100%
          height: 100%
          @media screen and (max-width: 680px)
            width: 200px
            height auto
    .new-container
      padding-bottom: 134px
      .container-title
        text-align: center
        margin: 0 auto
        padding: 94px 0 88px
        .container-titles
          font-size: 44px
          font-weight bold
          color #333
          margin-bottom: 44px
          line-height: 1
        .line
          display block
          margin: 0 auto
          width: 68px
          height: 5px
          background-color: #d9ab2b
      .new-ul-container
        width: 100%
        max-width 1200px
        display flex
        align-items center
        justify-content space-between
        @media screen and (max-width: 1200px)
          padding: 0 10px
          box-sizing border-box
        @media screen and (max-width: 1000px)
          display block
        .new-list
          width: 370px
          height: 500px
          background-color: #fff
          position: relative
          border: 1px solid #ccc
          transition: all .2s linear;
          &:hover
            box-shadow: 0 5px 20px #ccc;
            transform: translate3d(0, -2px, 0);
          @media screen and (max-width: 1200px)
            width: 300px
          @media screen and (max-width: 1000px)
            width: 100%
            height auto
            margin: 0 auto 50px
            text-align: center
          .new-imgbox
            width: 100%
            .bg
              width: 100%
              height: 100%
              background-position: center
              background-size: contain
            img
              width: 100%
          .list-title
            font-size: 22px
            color #333
            text-align: center
            margin: 22px 0 24px
          .list-desc
            font-size: 16px
            color #999
            line-height: 1.5
            width: 100%
            padding: 0 33px
            box-sizing border-box
          .btn
            height: 36px
            line-height: 36px
            width: 134px
            padding: 0
            position: absolute
            left: 50%
            transform translateX(-50%)
            bottom: 36px
            color #d9ab2b
            border: 1px solid #d9ab2b
            background-color: #fff
            cursor pointer
            &:hover
              background-color: #d9ab2b
              border none
              color #fff
            @media screen and (max-width: 1000px)
              width: 246px
              position: relative
              left auto
              transform none
              text-align: center
              margin: 36px auto
      .two-list-container
        display flex
        flex-wrap wrap
        align-items center
        width: 100%
        margin-top: 43px
        @media screen and (max-width: 1200px)
          display block
        @media screen and (max-width: 578px)
          padding: 0 15px
          box-sizing border-box
        .two-list
          width: 578px
          height: 500px
          position: relative
          background-color: #fff
          border: 1px solid #ccc
          transition: all .2s linear;
          margin-bottom: 43px
          @media screen and (max-width: 578px)
            width: 100%
            height auto
          &:hover
            box-shadow: 0 5px 20px #ccc;
            transform: translate3d(0, -2px, 0);
          &:nth-child(2n)
            margin-left: 40px
          @media screen and (max-width: 1200px)
            margin: 0 auto 48px
            margin-left: auto
            text-align: center
            &:nth-child(2n)
              margin-left: auto
            /*height auto*/
          .new-imgbox
            height: 250px
            .bg
              width: 100%
              height: 100%
              background-position: center
              background-size: contain
              background-repeat: no-repeat
            img
              height: 100%
              width: 100%
          .list-title
            text-align: center
            margin: 22px 0 24px
            padding: 0 15px
            box-sizing border-box
            font-size: 22px
            color #333
          .list-desc
            padding: 0 77px
            color #999
            display: -webkit-box;
            -webkit-line-clamp:3;
            -webkit-box-orient: vertical;
            max-height 80px
            overflow: hidden;
            @media screen and (max-width: 1200px)
              padding: 0
              width: 90%
              box-sizing border-box
              text-align: center
              margin: 0 auto
          .btn
            position: absolute
            left: 50%
            transform translateX(-50%)
            bottom: 20px
            height: 36px
            line-height: 36px
            width: 246px
            padding: 0
            color #d9ab2b
            border: 1px solid #d9ab2b
            background-color: #fff
            cursor pointer
            &:hover
              background-color: #d9ab2b
              border none
              color #fff
            @media screen and (max-width: 578px)
              position: relative
              left auto
              transform none
              text-align: center
              margin: 36px auto
      .blockchain-wrapper
        width: 100%
        height: 500px
        @media screen and (max-width: 1200px)
          height auto
          padding: 0 10px
          box-sizing border-box
      .blockchain-container
        width: 100%
        margin-top: 43px
        text-align: center
        position: relative
        border: 1px solid #ccc
        box-sizing border-box
        transition: all .2s linear;
        &:hover
          box-shadow: 0 5px 20px #ccc;
          transform: translate3d(0, -2px, 0);
        .new-imgbox
          img
            width: 100%
            @media screen and (max-width: 768px)
              height: 120px
        .list-title
          font-size: 22px
          color #333
          text-align: center
          margin: 22px 0 24px
        .list-desc
          font-size: 16px
          color #999
          line-height: 1.5
          @media screen and (max-width: 1200px)
            padding: 0 10px
            box-sizing border-box
        .btn
          margin: 71px auto 36px
          line-height: 36px
          width: 246px
          padding: 0
          color #d9ab2b
          border: 1px solid #d9ab2b
          background-color: #fff
          cursor pointer
          &:hover
            background-color: #d9ab2b
            color #fff
</style>

<script>
import Bus from '../../assets/js/eventBus'
import axios from 'axios'
export default{
  data () {
    return {
      newArr: [],
      language: 2
    }
  },
  created () {
    if (localStorage.getItem('Qlang') === 'CN') {
      this.language = 1
    } else {
      this.language = 2
    }
    this.getNewInfo()
    Bus.$on('headerChangeLang', (e) => {
      if (e === 'CN') {
        this.language = 1
      } else {
        this.language = 2
      }
      this.getNewInfo()
    })
  },
  methods: {
    getNewInfo () {
      //  http://web.exploitsmart.com/official/preQueryOfficialWeb?terrace=1&language=1
      axios.get('http://web.exploitsmart.com/official/preQueryOfficialWeb?terrace=3&language=' + this.language).then(res => {
        if (res.data.status === 'success' && res.data.success === true) {
          this.newArr = res.data.data.results
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
