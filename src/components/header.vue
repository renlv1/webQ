<template>
  <nav class="header">
    <div class="wrap">
      <router-link tag="div" to="/home" class="logo" @click.native="$t('header.navList')[5].activeClass = false "></router-link>
      <ul class="nav" ref="nav" :class="{showNav: navShow}">
        <li class="nav-li" v-for="(nav, index) in $t('header.navList')" :key="nav.name" ref="navLi">
          <router-link v-if="!nav.dropDown" class="nav-li-a" :to="nav.path" @click.native="openMenu()">{{nav.name}}</router-link>
          <a v-if="nav.dropDown" class="nav-li-a dropDownA" :class="{routeLinkActive: nav.activeClass}" @click="goRecite(index)">{{nav.name}} <i class="dropdown-img"></i></a>
          <ul class="dropdown-nav" :class="{liFive: index === 5}">
            <router-link tag="li" v-for="navItem in nav.dropDown" :key="navItem.name" :to="navItem.path" @click.native="chooseDropdownMenu()">{{navItem.name}}</router-link>
          </ul>
        </li>
      </ul>
      <div class="openMenu-btn" :class="{closeMenu: navShow}" @click="changeNav()"><a></a></div>
      <div class="langBox">
        <a :class="{activeLang: lanActive === 1}" @click="chooseCN">CN</a>/<a  :class="{activeLang: lanActive === 2}" @click="chooseEN">EN</a>
      </div>
    </div>
  </nav>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  $d9 = #d9ab2b
  .header
    width 100%
    background-color #000
    position fixed
    top 0
    left 0
    z-index 999
    .wrap
      height 106px
      display flex
      align-items center
      justify-content space-between
      @media screen and (max-width 768px)
        height 60px
        padding-left 20px
        padding-right 10px
        position relative
    .logo
      width 50px
      height 50px
      background url("../assets/images/header/logo.png") no-repeat
      background-size cover
      cursor pointer
      @media screen and (max-width 768px)
        width 32px
        height 32px
    .nav
      height 100%
      display flex
      font-size 16px
      &.showNav
        @media screen and (max-width 768px)
          display block
      @media screen and (max-width 768px)
        width 100%
        height auto
        display none
        position absolute
        top 60px
        left 0
        background-color #262626
      .nav-li
        height 100%
        padding 0 30px
        display flex
        align-items center
        position relative
        @media screen and (max-width 768px)
          display block
          padding 0
        @media screen and (min-width 769px) and (max-width 1200px)
          padding 0 15px
        &:nth-child(6)
          @media screen and (min-width 769px)
            &:hover
              .dropdown-nav
                display block!important
          .dropdown-nav
            width 140px
        .nav-li-a
          color #fff
          position relative
          cursor pointer
          user-select none
          @media screen and (min-width 769px)
            &:hover
              color $d9
              .dropdown-img
                background url("../assets/images/header/dropDown_y.png") no-repeat
          @media screen and (max-width 768px)
            display block
            height 40px
            line-height 40px
            padding 0 20px
          .dropdown-img
            display inline-block
            width 13px
            height 8px
            background url("../assets/images/header/dropDown_w.png") no-repeat
            background-size cover!important
        .dropdown-nav
          display none
          min-width 120px
          padding 8px 0
          position absolute
          left 50%
          top 100%
          transform translate(-50%)
          background-color #262626
          color #fff
          @media screen and (max-width 768px)
            width 100%!important
            position relative
            left 0
            top 0
            padding 0
            transform translate(0)
            padding 0 20px
          li
            padding 12px 0
            text-align center
            user-select none
            cursor pointer
            @media screen and (min-width 769px)
              &:hover
                color $d9
            @media screen and (max-width 768px)
              display block
              height 40px
              line-height 40px
              padding 0
              border-top 1px solid #635f5f
    .openMenu-btn
      display none
      padding 10px
      @media screen and (max-width 768px)
        display block
      &.closeMenu
        a
          background url("../assets/images/header/close.png") no-repeat
      a
        display block
        width 32px
        height 32px
        background url("../assets/images/header/menu.png") no-repeat
        background-size cover!important
    .langBox
      font-size 16px
      color #665014
      @media screen and (max-width 768px)
        display none
      a
        padding 5px 8px
        cursor pointer
        user-select none
        &.activeLang
          color $d9
</style>

<script>
import Bus from '../assets/js/eventBus'
import { i18n } from '../i18n/config'
export default {
  data () {
    return {
      lanActive: 1,
      navShow: false // 导航栏隐藏
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
      this.checkActiveFun() // 刷新时下拉菜单的高亮
    })
  },
  methods: {
    changeNav () {
      this.navShow = !this.navShow
    },
    goRecite (index) {
      // 判斷是否是手機的
      let phoneTrue = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      if (phoneTrue) {
        if (document.getElementsByClassName('liFive')[0].style.display === 'block') {
          document.getElementsByClassName('liFive')[0].style.display = 'none'
        } else {
          document.getElementsByClassName('liFive')[0].style.display = 'block'
        }
      }
    },
    openMenu () { // 下拉菜单显示隐藏
      this.$t('header.navList')[5].activeClass = false // 关于的不高亮
      document.getElementsByClassName('liFive')[0].style.display = 'none'
      this.changeNav()
    },
    chooseDropdownMenu () {
      this.$t('header.navList')[5].activeClass = true // 关于的高亮
      document.getElementsByClassName('liFive')[0].style.display = 'none'
      this.navShow = false
    },
    checkActiveFun () {
      let pathValue = this.$route.path.substring(this.$route.path.indexOf('/', 0), this.$route.path.indexOf('/', 1))
      if (pathValue === '/about') {
        this.$t('header.navList')[5].activeClass = true
      }
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
