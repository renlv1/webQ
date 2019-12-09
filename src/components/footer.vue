<template>
    <div class="footer">
      <div class="wrap">
        <ul class="footer-content">
          <li class="items">
            <div class="logoBox">
              <img src="../assets/images/footer/footer-logo.png" alt="">
              <!--<span>Q</span>-->
            </div>
            <div class="wordsBox">
              <h3>{{$t('footer.text1')}}</h3>
              <p>{{$t('footer.text2')}}</p>
            </div>
            <!--<div class="btnBox">-->
              <!--<a>{{$t('footer.text3')}}</a>-->
              <!--<a>{{$t('footer.text4')}}</a>-->
            <!--</div>-->
          </li>
          <li class="items">
            <div>
              <h3 class="title">{{$t('footer.text10')}}</h3>
              <ul class="link-list">
                <li @click="$router.push({path: '/wiki'})"><i></i><span>{{$t('header.navList[0].name')}}</span></li>
                <li @click="$router.push({path: '/strategy/assetRecite'})"><i></i><span>{{$t('header.navList[1].name')}}</span></li>
                <li @click="$router.push({path: '/strategy/investProject'})"><i></i><span>{{$t('header.navList[2].name')}}</span></li>
                <li @click="$router.push({path: '/blockChain'})"><i></i><span>{{$t('header.navList[3].name')}}</span></li>
              </ul>
            </div>
          </li>
          <li class="items">
            <div>
              <h3 class="title">{{$t('footer.text9')}}</h3>
              <ul class="contact-list">
                <li><i></i><span>service.qarthur@gmail.com</span></li>
                <!--<li><i></i><span>（01）123123123</span></li>-->
                <!--<li><i></i><span>XXXXXXX</span></li>-->
              </ul>
            </div>
          </li>
        </ul>
        <div class="langBox">
          <a :class="{activeLang: lanActive === 1}" @click="chooseCN">CN</a><a  :class="{activeLang: lanActive === 2}" @click="chooseEN">EN</a>
        </div>
      </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.footer
  background-color #000
  padding-top 86px
  padding-bottom 70px
  color #fff
  font-size 14px
  box-sizing border-box
  @media screen and (max-width 768px)
    height auto
    padding-bottom 100px
  .footer-content
    overflow hidden
    @media screen and (max-width 768px)
      padding-bottom 0
    li.items
      width 33.3%
      height 216px
      float left
      position relative
      @media screen and (max-width 768px)
        width 100%
        height auto
        margin-bottom 50px
        &:last-child
          margin-bottom 0
      &:after
        content ''
        width 1px
        height 100%
        background-color #666
        position absolute
        right 0
        top 0
        @media screen and (max-width 768px)
          content none
      &:nth-child(2), &:nth-child(3)
        display flex
        justify-content center
        @media screen and (max-width 768px)
          display block
      &:last-child
        &:after
          content none
      .logoBox
        margin-bottom 20px
        @media screen and (max-width 768px)
          text-align center
        img
          display inline-block
          width 36px
          margin-right 12px
        span
          font-size 26px
      .wordsBox
        @media screen and (max-width 768px)
          text-align center
        h3, p
          width 298px
          line-height 1.5
          @media screen and (max-width 768px)
            width 100%
        p
          @media screen and (max-width 768px)
            text-align left
      .btnBox
        margin-top 30px
        @media screen and (max-width 768px)
          text-align center
        a
          color #fff
          margin-right 24px
          user-select none
          cursor pointer
          &:hover
            color #d9ab2b
          &:active
            opacity .6
      .title
        font-size 18px
        font-weight bold
        margin-bottom 30px
        @media screen and (max-width 768px)
          text-align center
      .link-list
        @media screen and (max-width 768px)
          /*display flex*/
          /*justify-content space-between*/
          display block
        li
          margin-bottom 25px
          cursor pointer
          user-select none
          @media screen and (max-width 768px)
            flex 1
          &:active
            opacity .6
          &:hover
            i
              background url("../assets/images/footer/arrowRt_y.png") no-repeat
              background-size cover
            span
              color #d9ab2b
          i
            display inline-block
            width 8px
            height 13px
            background url("../assets/images/footer/arrowRt_w.png") no-repeat
            background-size cover
            margin-right 8px
            vertical-align middle
          span
            vertical-align middle
      .contact-list
        @media screen and (max-width 768px)
          overflow hidden
        li
          margin-bottom 24px
          @media screen and (max-width 768px)
            width 100%
            float left
            text-align center
          &:nth-child(2)
            i
              width 20px
              height 20px
              background url("../assets/images/footer/a22.png") no-repeat
          &:nth-child(3)
            i
              width 17px
              height 23px
              background url("../assets/images/footer/a23.png") no-repeat
          i
            display inline-block
            width 21px
            height 15px
            background url("../assets/images/footer/a21.png") no-repeat
            background-size cover!important
            margin-right 8px
            vertical-align middle
  .langBox
    display none
    text-align center
    @media screen and (max-width 768px)
      display block
    a
      padding 10px
      &.activeLang
        color #d9ab2b
      &:first-child
        margin-right 20px
</style>

<script>
import Bus from '../assets/js/eventBus'
import { i18n } from '../i18n/config'
export default{
  data () {
    return {
      lanActive: 1
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (localStorage.getItem('Qlang')) {
        if (localStorage.getItem('Qlang') === 'CN') {
          this.lanActive = 1
          document.getElementsByTagName('body')[0].className = 'yahei'
        } else {
          this.lanActive = 2
          document.getElementsByTagName('body')[0].className = ''
        }
      }
    })
  },
  methods: {
    scrollToTop () {
      let disTop = document.documentElement.scrollTop
      let timer = setInterval(function () {
        disTop = disTop - 100
        document.documentElement.scrollTop = disTop
        if (disTop < 1) {
          clearInterval(timer)
        }
      }, 10)
    },
    chooseCN () {
      this.lanActive = 1
      localStorage.setItem('Qlang', 'CN')
      i18n.locale = 'CN'
      document.getElementsByTagName('body')[0].className = 'yahei'
      Bus.$emit('headerChangeLang', 'CN')
    },
    chooseEN () {
      this.lanActive = 2
      localStorage.setItem('Qlang', 'EN')
      i18n.locale = 'EN'
      document.getElementsByTagName('body')[0].className = ''
      Bus.$emit('headerChangeLang', 'EN')
    }
  }
}
</script>
