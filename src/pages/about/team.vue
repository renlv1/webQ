<template>
    <div class="ourTeam">
      <div class="newview-bg">
        <div class="wrapper">
          <div class="banner-left">
            <div class="banner-bigtitle">{{$t('team.text1')}}<span class="important-title">   {{$t('team.text2')}}</span></div>
            <p class="title-desc">{{$t('team.text3')}}</p>
            <span class="line"></span>
          </div>
          <div class="banner-right">
            <img src="../../assets/images/team/banner.png" alt="">
          </div>
        </div>
      </div>
      <div class="fixed-wrapper">
        <div class="fixed-center">
        <ul class="fixed-ul">
          <li class="fixed-list">
            <h3 class="title">{{$t('team.text4')}}</h3>
            <p class="desc">{{$t('team.text5')}}</p>
            <span class="line"></span>
          </li>
          <li class="fixed-list">
            <h3 class="title">{{$t('team.text6')}}</h3>
            <p class="desc">{{$t('team.text7')}}</p>
          </li>
        </ul>
      </div>
      </div>
      <div class="ourteam-container">
        <h2 class="container-title">{{$t('team.text8')}}</h2>
        <div class="wrapper pc-wrapper">
          <swiper class="swiper-container-horizontal" :options="swiper3Option">
            <swiper-slide class="swiper-slide swiper-no-swiping" v-for="(item, index) in $t('team.slideArr')" :key="index" :class="{'active-slide': numActive === index}" @click.native="checkOne(index)">
              <div class="slide-item">
                <div class="img-w" :class="{'none-img': isNoneImg === index}">
                  <div class="img-box" :class="{'none-img': isNoneImg === index}"><img :src="item.imgUrl" alt=""></div>
                </div>
                <h5 class="pople-name">{{item.name}}</h5>
                <p class="name-desc">{{item.nameDes}}</p>
                <div class="name-wrapper">
                  <p class="desc" :class="{'is-hidden': num === index}">{{item.detailInfo}}</p>
                </div>
                <div class="look-info" @click="lookinfo(index)" :class="{'isblock': looknumActive === index}">{{$t('team.text9')}}</div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-next" @click="nextbtn"></div>
          <div class="swiper-button-prev" @click="prevbtn"></div>
        </div>
        <!-- 小屏-->
        <div class="wrapper mobile-wrapper">
          <swiper class="swiper-container-horizontal" :options="swiper4Option">
            <swiper-slide class="swiper-slide" v-for="(item, index) in $t('team.slideArr')" :key="index" :class="{'active-slide': numActive === index}" @click.native="checkOne(index)">
              <div class="slide-item" @click.stop>
                <div class="img-box" :class="{'none-img': isNoneImg === index}"><img :src="item.imgUrl" alt=""></div>
                <h5 class="pople-name">{{item.name}}</h5>
                <p class="name-desc">{{item.nameDes}}</p>
                <div class="name-wrapper">
                  <p class="desc" :class="{'is-hidden': num === index}">{{item.detailInfo}}</p>
                </div>
                <div class="look-info" @click.stop="lookinfo(index)" :class="{'isblock': looknumActive === index}">{{$t('team.text9')}}</div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination swiper-pagination-bullets"></div>
        </div>
      </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  $d9 = #d9ab2b
  $ad = #ad8823
  $f2bb24 = #f2bb24
  .newview-bg
    .wrapper
      width: 1200px
      margin: 0 auto
      @media screen and (max-width: 1200px)
        width: 100%
  .ourTeam
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
          width: 100%
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
          font-weight bold
          font-size: 32px
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
            margin-bottom: 60px
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
          margin-bottom: 60px
        @media screen and (max-width: 680px)
          display block
        img
          width: 100%
          height: 100%
          @media screen and (max-width: 680px)
            width: 260px
            height auto
    .fixed-wrapper
      width: 1200px
      margin: 0 auto
      @media screen and (max-width: 1200px)
        width: 100%
        padding: 0 15px
        box-sizing border-box
    .fixed-center
      width: 100%
      height: 340px
      margin: -50px auto 0
      position: relative
      background: #262626 url("../../assets/images/team/quan.png") no-repeat center / cover
      @media screen and (max-width: 800px)
        height auto
        padding: 30px 0
      .fixed-ul
        height: 100%
        display flex
        align-items center
        justify-content center
        @media screen and (max-width: 800px)
          display block
        .fixed-list
          flex 1
          text-align: center
          @media screen and (max-width: 800px)
            padding: 20px 0
          .line
            display block
            position: absolute
            left: 50%
            top: 50%
            transform translate(-50%,-50%)
            height: 60px
            width: 1px
            background-color: #3c3c3d
            @media screen and (max-width: 800px)
              display none
          .title
            font-size: 32px
            font-weight bold
            color $d9
            margin-bottom: 20px
            line-height: 1
          .desc
            text-align: left
            margin: 0 auto
            font-size: 16px
            width: 360px
            color $ad
            line-height: 1.5
            @media screen and (max-width: 800px)
              width: 80%
</style>

<script>
export default{
  data () {
    return {
      isSHow: false,
      numindex: 0,
      isNoneImg: -1,
      numActive: 0,
      looknumActive: -1,
      num: -1,
      activenum2: 0,
      hiddenFlag: true,
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
      }
    }
  },
  methods: {
    lookinfo (index) {
      if (index === 0) {
        this.isSHow = true
      }
      this.isNoneImg = index
      this.num = index
      this.looknumActive = index
    },
    checkOne (index) {
      this.activenum2 = index
      this.numActive = index
    },
    nextbtn () {
      this.numActive += 1
      if (this.numActive === this.$t('team.slideArr').length) {
        this.numActive = 0
      }
    },
    prevbtn () {
      if (this.numActive === 0) {
        this.numActive = this.$t('team.slideArr').length
      }
      this.numActive -= 1
    }
  }
}
</script>
