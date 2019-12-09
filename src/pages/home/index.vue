<template>
    <div class="home">
      <div class="paddingDiv"></div>
      <div class="banner">
        <div class="banner-content">
          <div class="wrap">
            <h3 style="animation: feadInUp 1s both">{{$t('home.banner.title')}}</h3>
            <p style="animation: feadInUp2 1s both">{{$t('home.banner.subtitle')}}</p>
          </div>
        </div>
        <swiper :options="swiperOption">
          <swiper-slide></swiper-slide>
          <!--<swiper-slide></swiper-slide>-->
          <!--<swiper-slide></swiper-slide>-->
        </swiper>
      </div>
      <ul class="content-one">
        <li v-for="item in $t('home.oneList')" :key="item.imgSrc">
          <div>
            <img :src="item.imgSrc" alt="">
            <h3>{{item.title}}</h3>
            <p>{{item.content}}</p>
          </div>
        </li>
      </ul>
      <div class="content-two">
        <div class="ylBg"></div>
        <div class="content-two-ct">
          <h4 class="subtitle">{{$t('home.two.title1')}}<span> {{$t('home.two.title2')}}</span></h4>
          <p class="content-p">{{$t('home.two.subtitle')}}</p>
          <ul class="num-list">
            <li>
              <div class="li-lf">
                <h3><i ref="countup"></i><span>{{$t('home.two.list.text1')}}</span></h3>
                <p>{{$t('home.two.list.text2')}}</p>
              </div>
            </li>
            <li>
              <div class="li-lf">
                <h3><i ref="countup2"></i><span>{{$t('home.two.list.text3')}}</span></h3>
                <p>{{$t('home.two.list.text4')}}</p>
              </div>
            </li>
            <li>
              <div class="li-lf">
                <h3><i ref="countup3"></i><em>%+</em></h3>
                <p>{{$t('home.two.list.text5')}}</p>
              </div>
            </li>
            <li>
              <div class="li-lf">
                <h3><i ref="countup4"></i><em>+</em></h3>
                <p>{{$t('home.two.list.text6')}}</p>
              </div>
            </li>
          </ul>
          <div class="btn-box">
            <button :class="{activeBtn: activeBtnNum === 1}" @click="activeBtnNum = 1">{{$t('home.two.btn1')}}</button>
            <span>&</span>
            <button :class="{activeBtn: activeBtnNum === 2}" @click="activeBtnNum = 2">{{$t('home.two.btn2')}}</button>
          </div>
        </div>
      </div>
      <div class="newsModule">
        <router-link to="/newView" class="title">{{$t('home.newsModule.text1')}} <span>{{$t('home.newsModule.text2')}}</span><i></i></router-link>
        <ul>
          <router-link tag="li" :to="{path: '/news', query: {id: item.id, name: 'home'}}" v-for="item in newArr" :key="item.id">
            <div class="li-img" :style="{backgroundImage: 'url(http://image.9mn3n.cn/'+item.coverImgUrl+')'}"></div>
            <div class="li-content">
              <h3>{{item.title}}</h3>
              <p class="content-p">{{item.abstractDigest}}</p>
              <span>{{getCreateTime(item.updateTime)}}</span>
            </div>
          </router-link>
        </ul>
        <div class="newsSwiper">
          <swiper class="newsSwiper-swiper" :options="swiperOption2">
            <swiper-slide class="swiper-slide" v-for="item in newArr" :key="item.id" @click.native="$router.push({path: '/news', query: {id: item.id, name: 'home'}})">
              <div class="li-img" :style="{backgroundImage: 'url(http://image.9mn3n.cn/'+item.coverImgUrl+')'}"></div>
              <div class="li-content">
                <h3>{{item.title}}</h3>
                <p class="content-p">{{item.abstractDigest}}</p>
                <span>{{getCreateTime(item.updateTime)}}</span>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination swiper-pagination-bullets"></div>
        </div>
      </div>
      <div class="content-four">
        <h3>{{$t('home.four.title')}}</h3>
        <ul>
          <li>
            <div></div>
            <span>{{$t('home.four.list.text1')}}</span>
          </li>
          <li>
            <div></div>
            <span>{{$t('home.four.list.text2')}}</span>
          </li>
          <li>
            <div></div>
            <span>{{$t('home.four.list.text3')}}</span>
          </li>
          <li>
            <div></div>
            <span>{{$t('home.four.list.text4')}}</span>
          </li>
        </ul>
      </div>
      <div class="content-five">
        <div class="bg-left"></div>
        <div class="contentBox">
          <div class="contentBox-lf">
            <p>{{$t('home.five.title')}}</p>
          </div>
          <div class="contentBox-rt">
            <ul>
              <li>
                <img src="../../assets/images/home/five2.svg" alt="">
                <h3>{{$t('home.five.list.text1')}}</h3>
                <p>{{$t('home.five.list.text2')}}</p>
              </li>
              <li>
                <img src="../../assets/images/home/five3.svg" alt="">
                <h3>1 GBP </h3>
                <p>{{$t('home.five.list.text3')}}<span> Q (time=0) = 1 GBP = Q.Arthur NAV(0)</span></p>
              </li>
              <li>
                <img src="../../assets/images/home/five4.svg" alt="">
                <h3>£200,000,000 </h3>
                <p>{{$t('home.five.list.text4')}}</p>
              </li>
            </ul>
            <div class="rt-line"></div>
            <div class="rt-mid">
              <img src="../../assets/images/home/five5.png" alt="">
              <p><span>"Q"</span> {{$t('home.five.list.text5')}}</p>
            </div>
            <router-link tag="button" to="/wiki">{{$t('home.five.list.text6')}}</router-link>
          </div>
        </div>
      </div>
      <div class="ourteam-container">
        <router-link tag="h3" to="/about/team" class="container-title">{{$t('home.team.title')}}</router-link>
        <div class="wrapper pc-wrapper">
          <swiper class="swiper-container-horizontal" :options="swiper3Option">
            <swiper-slide class="swiper-slide swiper-no-swiping" v-for="(item, index) in $t('home.team.slideArr')" :key="index" :class="{'active-slide': numActive === index}" @click.native="checkOne(index)">
              <div class="slide-item">
                <div class="img-w" :class="{'none-img': isNoneImg === index}">
                  <div class="img-box" :class="{'none-img': isNoneImg === index}"><img :src="item.imgUrl" alt=""></div>
                </div>
                <h5 class="pople-name">{{item.name}}</h5>
                <p class="name-desc">{{item.nameDes}}</p>
                <div class="name-wrapper">
                  <p class="desc" :class="{'is-hidden': num === index}">{{item.detailInfo}}</p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <!-- 小屏-->
        <div class="wrapper mobile-wrapper">
          <swiper class="swiper-container-horizontal" :options="swiper4Option">
            <swiper-slide class="swiper-slide" v-for="(item, index) in $t('home.team.slideArr')" :key="index" :class="{'active-slide': numActive === index}" @click.native="checkOne(index)">
              <div class="slide-item" @click.stop>
                <div class="img-box" :class="{'none-img': isNoneImg === index}"><img :src="item.imgUrl" alt=""></div>
                <h5 class="pople-name">{{item.name}}</h5>
                <p class="name-desc">{{item.nameDes}}</p>
                <div class="name-wrapper">
                  <p class="desc" :class="{'is-hidden': num === index}">{{item.detailInfo}}</p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination swiper-pagination-bullets"></div>
        </div>
      </div>
      <div class="newView wrap">
        <h3 class="title">{{$t('home.newView.text1')}}<span>{{$t('home.newView.text1_2')}}</span></h3>
        <ul>
          <li>
            <img src="../../assets/images/home/six1.svg" alt="">
            <div>
              <h3>{{$t('home.newView.text2')}}</h3>
              <p>{{$t('home.newView.text3')}}</p>
            </div>
          </li>
          <li>
            <img src="../../assets/images/home/six2.svg" alt="">
            <div>
              <h3>{{$t('home.newView.text4')}}</h3>
              <p>{{$t('home.newView.text5')}}</p>
            </div>
          </li>
          <li>
            <img src="../../assets/images/home/six3.svg" alt="">
            <div>
              <h3>{{$t('home.newView.text6')}}</h3>
              <p>{{$t('home.newView.text7')}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
$d9 = #d9ab2b
$f2 = #f2bb24
.home
  .paddingDiv
    height 106px
    @media screen and (max-width 768px)
      height 60px
  .banner
    height 680px
    color #fff
    position relative
    margin-top 0
    .banner-content
      position absolute
      left 0
      top 0
      width 100%
      height 100%
      z-index 19
      background-color rgba(0,0,0,0.2)
      .wrap
        position absolute
        left 50%
        top 50%
        transform translate(-50%, -68%)
    h3
      font-weight bold
      font-size 52px
      color #ffc832
      margin-bottom 15px
      @media screen and (max-width 768px)
        font-size 40px
    p
      font-size 40px
      line-height 1.5
      margin-bottom 50px
      @media screen and (max-width 768px)
        font-size 25px
  .content-one
    position relative
    overflow hidden
    &:after
      content ''
      width 1px
      background-color #fff
      height 100%
      position absolute
      top 0
      right 0
    li
      width 33.33%
      height 474px
      display flex
      align-items center
      justify-content center
      float left
      border-right 1px solid #ccc
      border-bottom 1px solid #ccc
      box-sizing border-box
      @media screen and (min-width 768px) and (max-width 900px)
        width 50%
      @media screen and (max-width 768px)
        width 100%
      div
        width 272px
        text-align center
        font-size 0
        img
          display inline-block
          width 56px
          height 56px
          margin-bottom 34px
        h3
          font-size 32px
          font-weight bold
          color #333
          margin-bottom 34px
        p
          font-size 16px
          line-height 1.5
  .content-two
    background-color #fff
    padding 92px 0
    position relative
    margin-top -1px
    .ylBg
      height 586px
      background-color $f2
      @media screen and (max-width 768px)
        display none
    .content-two-ct
      width 1276px
      height 100%
      box-sizing border-box
      margin 0 auto
      padding 120px 0px
      background-color #000
      position absolute
      top 0
      left 50%
      transform translate(-50%)
      text-align center
      color #fff
      font-size 16px
      @media screen and (max-width 768px)
        width 100%
        height auto
        padding 20px
        padding-bottom 80px
        padding-top 80px
        position relative
        left 0
        transform translate(0)
      .subtitle
        font-size 40px
        line-height 1.5
        margin-bottom 10px
        @media screen and (max-width 768px)
          font-size 36px
          margin-bottom 20px
        span
          font-weight bold
          color $f2
      .content-p
        margin-bottom 100px
        line-height 1.5
        @media screen and (max-width 768px)
          margin-bottom 50px
      .num-list
        display flex
        @media screen and (max-width 768px)
          display block
          overflow hidden
        li
          flex 1
          display flex
          justify-content center
          position relative
          @media screen and (max-width 768px)
            display block
            width 100%
            float left
            margin-bottom 50px
            &:before
              content none!important
          &:before
            content ''
            width 1px
            background-color #ccc
            height 145px
            transform rotate(23deg)
            position absolute
            top -5px
            left 5px
          &:first-child
            &:before
              content none
          .li-lf
            h3
              margin-bottom 10px
              i,em
                font-size 74px
                font-weight bold
              span
                font-size 20px
      .btn-box
        margin-top 100px
        @media screen and (max-width 768px)
          display flex
          margin-top 50px
          button
            height 50px!important
            font-size 16px!important
            flex 1
        button
          display inline-block
          width 250px
          height 58px
          border 2px solid #fff
          background-color #000
          color #fff
          font-size 20px
          outline none
          user-select none
          cursor pointer
          &.activeBtn
            background-color $f2
            border none
          &:hover
            background-color $f2
            border none
        span
          font-size 24px
          margin 0 28px
  .newsModule
    width 1200px
    margin 0 auto
    margin-top 200px
    margin-bottom 210px
    color #333
    @media screen and (max-width 768px)
      width 100%
      margin-top 0
    .title
      display block
      text-align center
      font-size 44px
      margin-bottom 50px
      color #333
      cursor pointer
      @media screen and (max-width 768px)
        font-size 36px
      &:hover
        i
          background url("../../assets/images/home/a18.png") no-repeat
      span
        font-weight bold
      i
        display inline-block
        width 44px
        height 34px
        background url("../../assets/images/home/a17.png") no-repeat
        background-size cover!important
        margin-left 30px
        @media screen and (max-width 768px)
          width 34px
          height 24px
          margin-left 10px
    ul
      display flex
      justify-content space-between
      @media screen and (max-width 768px)
        display none
        padding 0 20px
      li
        width 360px
        font-size 0
        box-shadow: 0 1px 5px #ccc;
        transition: all .2s linear;
        cursor pointer
        @media screen and (max-width 768px)
          width 100%
          margin-bottom 50px
        &:hover
          box-shadow: 0 5px 20px #ccc;
          transform: translate3d(0, -2px, 0);
        .li-img
          width 100%
          height 156px
          background url("../../assets/images/home/news.png") no-repeat
          background-size 100% 100%
          background-position center
        .li-content
          padding 20px
          h3
            font-size 20px
            font-weight bold
            margin-bottom 10px
          p.content-p
            font-size 16px
            line-height 1.5
            margin-bottom 15px
            word-break break-all
            max-height 96px
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
          span
            font-size 14px
            color $d9
  .newsSwiper
    display none
    @media screen and (max-width 768px)
      display block
    .newsSwiper-swiper
      display flex
      width calc(100% - 40px)
      margin 0 auto
      padding 5px 0
      overflow hidden
      .swiper-slide
        flex 1
        -ms-flex 0 0 auto
        border 1px solid #ccc
        .li-img
          width 100%
          height 156px
          background-size cover
        .li-content
          padding 20px
          h3
            font-size 20px
            font-weight bold
            margin-bottom 10px
          p.content-p
            font-size 16px
            line-height 1.5
            margin-bottom 15px
            word-break break-all
            max-height 96px
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
          span
            font-size 14px
            color $d9
  .content-four
    width 1244px
    margin 0 auto
    padding 0 50px
    padding-top 90px
    padding-bottom 100px
    background-color #333
    position relative
    @media screen and (max-width 768px)
      width 100%
    &:before
      content ''
      height: 0px;
      width: 0px;
      border-top 30px solid #fff
      border-left: 30px solid transparent;
      border-right: 30px solid transparent;
      border-bottom: 30px solid transparent;
      position absolute
      top 0
      left 50%
      transform translate(-50%)
    h3
      text-align center
      color #fff
      font-size 44px
      margin-bottom 50px
      @media screen and (max-width 768px)
        font-size 25px
    ul
      width 1000px
      margin 0 auto
      padding-top 60px
      display flex
      justify-content space-between
      border-top 1px solid #fff
      @media screen and (max-width 768px)
        width 100%
        display block
        overflow hidden
      li
        display flex
        align-items center
        justify-content center
        @media screen and (max-width 768px)
          justify-content flex-start
          width 100%
          margin-bottom 30px
        &:last-child
          margin-right 0
        &:nth-child(2)
          div
            background url("../../assets/images/home/four2.svg") no-repeat
        &:nth-child(3)
          div
            background url("../../assets/images/home/four3.svg") no-repeat
        &:nth-child(4)
          div
            background url("../../assets/images/home/four4.svg") no-repeat
        div
          width 42px
          height 42px
          margin-right 18px
          background url("../../assets/images/home/four1.svg") no-repeat
          background-size cover!important
        span
          font-size 16px
          color #ffffff
  .content-five
    height 640px
    position relative
    background-color $f2
    margin-top 180px
    color #fff
    @media screen and (max-width 768px)
      height auto
    .bg-left
      width 50%
      height 100%
      background url("../../assets/images/home/five1.png") no-repeat
      background-size cover
      position absolute
      top 0
      right 50%
      z-index 10
      @media screen and (max-width 768px)
        width 100%
        height 640px
        right 0
    .contentBox
      width 1200px
      position absolute
      left 50%
      transform translate(-50%)
      font-size 24px
      z-index 12
      overflow hidden
      @media screen and (max-width 768px)
        width 100%
        position relative
        left 0
        transform translate(0)
        font-size 20px
      .contentBox-lf
        float left
        @media screen and (max-width 768px)
          padding 0 20px
        p
          width 402px
          line-height 1.5
          margin-top 200px
          @media screen and (max-width 768px)
            width 100%
      .contentBox-rt
        width 520px
        padding-top 100px
        float right
        @media screen and (max-width 768px)
          width 100%
          float left
          padding-top 330px
        ul
          display flex
          justify-content space-between
          @media screen and (max-width 768px)
            display block
          li
            text-align center
            font-size 0
            @media screen and (max-width 768px)
              margin-bottom 50px
            img
              display inline-block
              width 86px
              height 86px
              margin-bottom 20px
            h3
              font-size 32px
              font-weight bold
              margin-bottom 10px
            p
              font-size 16px
              color #8c6a0b
              span
                display block
        .rt-line
          width 510px
          margin 0 auto
          margin-top 30px
          margin-bottom 45px
          height 1px
          background-color #cc9c14
          @media screen and (max-width 768px)
            width 100%
        .rt-mid
          display flex
          align-items center
          font-size 0
          @media screen and (max-width 768px)
            padding 0 20px
          img
            display block
            width 64px
            margin-right 16px
          p
            flex 1
            font-size 16px
            span
              color #333
        button
          display block
          width 510px
          height 58px
          font-size 22px
          margin 0 auto
          margin-top 54px
          background-color #333
          color $f2
          cursor pointer
          outline none
          border none
          user-select none
          @media screen and (max-width 768px)
            width 100%
  .ourteam-container
    margin 200px 0 180px
    .container-title
      margin-bottom 100px
      cursor pointer
      user-select none
    .swiper-slide
      .name-wrapper
        .desc
          height auto
          text-align center
          &:after
            content none
  .newView
    padding-bottom 140px
    .title
      text-align center
      font-size 44px
      margin-bottom 70px
      @media screen and (max-width 768px)
        font-size 32px
      span
        font-weight bold
    ul
      display flex
      justify-content space-between
      @media screen and (max-width 768px)
        display block
        padding-left 5%
      li
        display flex
        align-items center
        position relative
        @media screen and (max-width 768px)
          width 100%
          margin-bottom 50px
          &:after
            content none!important
        &:after
          content ''
          width 1px
          height 150px
          background-color #ddd
          position absolute
          right -40px
          top -12px
        &:last-child
          &:after
            content none
        img
          display block
          width 76px
          margin-right 18px
        div
          width 248px
          color #333
          h3
            font-weight bold
            font-size 24px
            margin-bottom 10px
          p
            line-height 1.5
            font-size 18px
</style>

<script>
import CountUp from '../../assets/js/countUp'
import Bus from '../../assets/js/eventBus'
import axios from 'axios'
export default{
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        // autoplay: 3000,
        // loop: true,
        setWrapperSize: true,
        observeParents: true
      },
      swiperOption2: {
        notNextTick: true,
        autoplay: 3000,
        loop: true,
        setWrapperSize: true,
        observeParents: true
      },
      numAnim: null,
      activeBtnNum: 1,
      isNoneImg: -1,
      numActive: 0,
      num: -1,
      activenum2: 0,
      swiper4Option: {
        observer: true,
        observeParents: true,
        notNextTick: true,
        direction: 'horizontal',
        slidesPerView: 1,
        clickable: true,
        centeredSlides: false,
        paginationClickable: true,
        autoplay: 3000,
        initialSlide: 0,
        loop: true,
        pagination: '.swiper-pagination',
        preventClicksPropagation: false,
        onTransitionStart (swiper) {
          this.activenum2 = swiper.realIndex
        }
      },
      swiper3Option: {
        // preventClicks: false,
        observer: true,
        observeParents: true,
        notNextTick: true,
        direction: 'horizontal',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 3,
        centeredSlides: false,
        paginationClickable: false,
        preventClicksPropagation: false,
        onTransitionStart (swiper) {
          this.activenum2 = swiper.realIndex
        }
      },
      newArr: [], // 新闻
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
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.handleScroll) // 监听滚动
      this.initCountUp()
    })
  },
  methods: {
    initCountUp () { // 数字跳动
      this.numAnim = new CountUp(this.$refs.countup, 150, 25)
      this.numAnim2 = new CountUp(this.$refs.countup2, 0, 5000)
      this.numAnim3 = new CountUp(this.$refs.countup3, 90, 5)
      this.numAnim4 = new CountUp(this.$refs.countup4, 80, 6)
      this.numAnim.start()
      this.numAnim2.start()
      this.numAnim3.start()
      this.numAnim4.start()
    },
    handleScroll () { // 滚动到响应位置数字跳动
      if (document.documentElement.scrollTop < 1450 && document.documentElement.scrollTop > 1400) { // 滚动到数字这块。数字跳动
        this.initCountUp()
      }
    },
    checkOne (index) {
      this.activenum2 = index
      this.numActive = index
    },
    getNewInfo () {
      //  http://web.exploitsmart.com/official/preQueryOfficialWeb?terrace=1&language=1
      axios.get('http://web.exploitsmart.com/official/preQueryOfficialWeb?terrace=3&language=' + this.language).then(res => {
        if (res.data.status === 'success' && res.data.success === true) {
          this.newArr = res.data.data.results.slice(0, 3)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getCreateTime (val) {
      let m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Spt', 'Oct', 'Nov', 'Dec']
      let newTime = new Date(val)
      let day = newTime.getDate()
      let month = newTime.getMonth()
      let year = newTime.getFullYear()
      return m[month] + ' ' + day + '.' + year
    }
  }
}
</script>
