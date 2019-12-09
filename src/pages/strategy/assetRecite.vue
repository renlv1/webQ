<template>
  <div class="assetRecite">
    <div class="banner">
      <div class="banner-bg">
        <div class="banner-conbox">
          <div class="banner-conl">
            <div class="banner-title">{{$t('assetRecite.text1')}}<span class="banner-jiazhi">{{$t('assetRecite.text2')}}</span></div>
            <div class="banner-p">{{$t('assetRecite.text3')}}</div>
            <div class="banner-hr"></div>
          </div>
          <div class="banner-conr">
            <div class="banner-img"><img src="../../assets/images/assetRecite/banner3.png" alt=""></div>
          </div>
        </div>
      </div>
    </div>
    <div class="assetRecite-one">
      <div class="assetRecite-box">
        <div class="one-catalogue">01</div>
        <div class="one-tit">{{$t('assetRecite.text4')}}</div>
        <div class="one-h4">{{$t('assetRecite.text5')}}</div>
        <!--幻灯片......-->
        <div class="swiper-wrap assetRecite-swiper">
          <swiper class="swiper-container-horizontal" :options="swiper3Option">
            <swiper-slide class="swiper-slide" v-for="(item, index) in $t('assetRecite.slideArr')" :key="index">
              <div class="slide-item">
                <div class="img-box"><img :src="item.imgUrl" alt=""></div>
                <p class="name-desc">{{item.text}}</p>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination swiper-pagination-bullets"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
        <div class="assetRecite-hr"></div>
      </div>
    </div>
    <div class="assetRecite-two">
      <div class="assetRecite-twobox">
        <div class="two-catalogue">02</div>
        <div class="two-tit">{{$t('assetRecite.text6')}}</div>
        <div class="two-h4">{{$t('assetRecite.text7')}}</div>
        <div class="list">
          <li class="list-li">
            <div class="list-text">
              <img class="list-img" src="../../assets/images/assetRecite/a35.svg" alt="">
              <h4 class="listh">{{$t('assetRecite.text8')}}</h4>
            </div>
            <p class="list-p-bot">{{$t('assetRecite.text9')}}</p>
          </li><span class="bor"></span>
          <li class="list-li">
            <div class="list-text">
              <img class="list-img" src="../../assets/images/assetRecite/a36.svg" alt="">
              <h4 class="listh">{{$t('assetRecite.text10')}}</h4>
            </div>
            <p class="list-p-bot">{{$t('assetRecite.text11')}}</p>
          </li><span class="bor"></span>
          <li class="list-li">
            <div class="list-text">
              <img class="list-img" src="../../assets/images/assetRecite/a37.svg" alt="">
              <h4 class="listh">{{$t('assetRecite.text12')}}</h4>
            </div>
            <p class="list-p-bot">{{$t('assetRecite.text13')}}</p>
          </li>
        </div>
      </div>
    </div>
    <div class="more">
      <div class="more-box">
        <div class="more-text">{{$t('assetRecite.text14')}}</div>
        <div class="btn-more"><router-link tag="div" to="/strategy/investProject" class="button">{{$t('assetRecite.text15')}}</router-link></div>
      </div>
    </div>
    <div class="assetRecite-three">
      <div class="assetRecite-threebox">
        <div class="three-catalogue">03</div>
        <div class="three-tit">{{$t('assetRecite.text16')}}</div>
        <div class="three-h4">{{$t('assetRecite.text17')}}</div>
        <div class="three-conbox">
          <div class="three-li" v-for="item in $t('assetRecite.threeLists')" :key="item.id">
            <img class="li-img" :src="item.img" alt=""><span class="li-text">{{item.text}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="assetRecite-four">
      <div class="assetRecite-fourbox">
        <div class="four-catalogue">04</div>
        <div class="four-tit">{{$t('assetRecite.text18')}}<span class="titem">{{$t('assetRecite.text19')}}</span></div>
        <div class="four-h4">{{$t('assetRecite.text20')}}</div>
        <div class="four-conbox">
          <div class="four-imgbox">
            <img class="four-img" :src="$t('assetRecite.fourUrlimg1')" alt="">
            <p class="liu-c-tu">{{$t('assetRecite.text21')}}</p>
          </div>
          <div class="four-lis">
            <p class="four-lisp" v-for="(item,index) in $t('assetRecite.fourlisp')" :key="index">{{item.text}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .assetRecite-one
    width 100%
    height auto
    .assetRecite-box
     width 1200px
     margin 0 auto
     position relative
     @media screen and (max-width 1200px)
       width 100%
       padding-left 15px
       padding-right 15px
     .one-catalogue
       position absolute
       z-index -1
       color #d9ab2b
       align-items center
       font-family "Microsoft YaHei UI"
       opacity 0.1
       top -98px
       left 50%
       margin-left -100px
       font-size 200px
       font-weight bold
       transform skewx(-10deg)
     .one-tit
        font-size 44px
        font-weight bold
        color #333
        text-align center
        margin-top 180px
        @media screen and (max-width 1200px)
          font-size 30px
        @media screen and (max-width 600px)
          font-size 24px
          margin-top 120px
     .one-h4
         font-size 20px
         color #333
         text-align center
         padding 20px 0px 76px
         @media screen and (max-width 600px)
           width 86%
           margin 0px auto
           font-size 16px
      .swiper-wrap
         width 1200px
         height 490px
         text-align center
         position relative
         @media screen and (max-width 1226px)
           width 90%
           margin 0px auto
         .swiper-pagination
           display inline-block
           width auto
           margin 0px auto
           @media screen and (min-width 1200px)
             display none
         .swiper-container-horizontal
           width 606px
           height 100%
           margin 0px auto
           overflow hidden
           @media screen and (max-width 1000px)
             width 450px
           @media screen and (max-width 600px)
             width 320px
             height auto
             padding-bottom 20px
           .swiper-slide
            flex 1
            -ms-flex 0 0 auto
           .slide-item
             width 100%
             height 490px
             border-radius 16px
             @media screen and (max-width 900px)
               width 100%
               height auto
             .img-box
                width 606px
                height 406px
                @media screen and (max-width 1000px)
                  width 450px
                @media screen and (max-width 600px)
                  width 320px
                  height auto
                img
                  width 100%
                  height 100%
             .name-desc
                display block
                font-size 24px
                color #333
                text-align center
                margin-top 50px
                @media screen and (max-width 600px)
                  font-size 16px
         .swiper-button-next
            width 50px
            height 50px
            background url("../../assets/images/common/a31.png") no-repeat
            background-size 100% 100%
            position absolute
            left 0px
            top 50%
            margin-top -75px
            cursor pointer
            @media screen and (max-width 1024px)
              display none
         .swiper-button-prev
           width 50px
           height 50px
           background url("../../assets/images/common/a32.png") no-repeat
           background-size 100% 100%
           position absolute
           right 0px
           top 50%
           margin-top -75px
           cursor pointer
           @media screen and (max-width 1024px)
             display none
      .assetRecite-hr
         width 100%
         height 1px
         background-color #c1c1c1
         margin 104px auto 154px
         @media screen and (max-width 768px)
           margin 0
  .assetRecite-two
    width 100%
    height auto
    margin 0 auto
    .assetRecite-twobox
      width 1200px
      height auto
      margin 0px auto
      position relative
      @media screen and (max-width 1200px)
        width 100%
        padding-left 15px
        padding-right 15px
      .two-catalogue
        position absolute
        z-index -1
        color #d9ab2b
        align-items center
        font-family "Microsoft YaHei UI"
        opacity 0.1
        top -98px
        left 50%
        margin-left -100px
        font-size 200px
        font-weight bold
        transform skewx(-10deg)
      .two-tit
        font-size 44px
        font-weight bold
        color #333
        text-align center
        margin-top 180px
        @media screen and (max-width 1200px)
          font-size 30px
          margin-top 120px
        @media screen and (max-width 600px)
          font-size 24px
      .two-h4
        font-size 20px
        color #333
        text-align center
        padding 20px 0px 76px
        @media screen and (max-width 600px)
          width 86%
          margin 0px auto
          font-size 16px
      .list
        width 100%
        height 170px
        padding-top 16px
        margin-bottom 130px
        display flex
        @media screen and (max-width 900px)
          flex none
          display block
          height auto
          overflow hidden
        .list-li
          flex 1
          @media screen and (max-width 900px)
            flex none
            float left
            width 100%
            height auto
            text-align center
          .list-centerbox
            margin-left 40px
            @media screen and (max-width 1200px)
              margin-left 0px
            @media screen and (max-width 430px)
              margin 0 auto
              margin-top 30px
          .list-text
            display inline-block
            height 52px
            line-height 52px
            width 220px
            padding-left 40px
            text-align left
            @media screen and (max-width 900px)
              padding-left 0px
            .list-img
              width 52px
              height 52px
              display inline-block
              vertical-align middle
              margin-right 16px
            .listh
              display inline-block
              vertical-align middle
              font-size 24px
              color #333
          .list-p-bot
             width 350px
             font-size 16px
             line-height 24px
             color #333
             word-break break-all
             padding-top 10px
             padding-left 40px
             @media screen and (max-width 900px)
               margin 30px auto
               text-align center
               padding-bottom 10px
               padding-left 0px
               width 100%
             @media screen and (max-width 600px)
               width 80%
        .bor
          display block
          width 1px
          height 100%
          background-color #ccc
          @media screen and (max-width 900px)
            display none
  .assetRecite-three
    width 100%
    height auto
    @media screen and (max-width 1200px)
      padding-left 15px
      padding-right 15px
    .assetRecite-threebox
      width 1200px
      margin 0px auto
      position relative
      border-bottom 1px solid #ccc
      @media screen and (max-width 1200px)
        width 100%
      .three-catalogue
        position absolute
        z-index -1
        color #d9ab2b
        align-items center
        font-family "Microsoft YaHei UI"
        opacity 0.1
        top -98px
        left 50%
        margin-left -100px
        font-size 200px
        font-weight bold
        transform skewx(-10deg)
      .three-tit
        font-size 44px
        font-weight bold
        color #333
        text-align center
        margin-top 180px
        @media screen and (max-width 1200px)
          font-size 30px
        @media screen and (max-width 600px)
          font-size 24px
      .three-h4
        font-size 20px
        color #333
        text-align center
        padding 20px 0px 76px
        @media screen and (max-width 600px)
          font-size 16px
      .three-conbox
        width 100%
        height auto
        background-color #fff
        display flex
        flex-wrap wrap
        justify-content space-around
        padding-bottom 120px
        @media screen and (max-width 1200px)
          display block
          height auto
        .three-li
           width 380px
           height 200px
           margin-bottom 30px
           background-color #EAEAEA
           @media screen and (max-width 1200px)
             margin 30px auto
           @media screen and (max-width 430px)
              width 100%
              height auto
              text-align center
           .li-img
              width 200px
              height 200px
              vertical-align middle
              @media screen and (max-width 430px)
               padding-top 20px
           .li-text
              width 180px
              text-align center
              display inline-block
              font-size 30px
              color #333
              @media screen and (max-width 1200px)
                font-size 28px
              @media screen and (max-width 600px)
                font-size 16px
                padding 10px 0px
  .assetRecite-four
    width 100%
    height auto
    .assetRecite-fourbox
      width 1200px
      margin 0px auto
      position relative
      @media screen and (max-width 1200px)
        width 100%
        padding-left 15px
        padding-right 15px
      .four-catalogue
        position absolute
        z-index -1
        color #d9ab2b
        align-items center
        font-family "Microsoft YaHei UI"
        opacity 0.1
        top -98px
        left 50%
        margin-left -100px
        font-size 200px
        font-weight bold
        transform skewx(-10deg)
      .four-tit
        font-size 44px
        color #333
        text-align center
        margin-top 180px
        @media screen and (max-width 1200px)
          font-size 30px
        @media screen and (max-width 600px)
          width 87%
          margin 0px auto
          margin-top 180px
          font-size 24px
        .titem
          color #d9ab2b
          font-weight bold
      .four-h4
        font-size 20px
        color #333
        text-align center
        padding 20px 0px 86px
        @media screen and (max-width 600px)
          width 87%
          font-size 16px
          margin 0px auto
      .four-conbox
         width 100%
         height auto
         display flex
         @media screen and (max-width 1200px)
           padding-left 15px
           padding-right 15px
           display block
           flex none
           height auto
           padding-bottom 66px
        .four-imgbox
           flex 1
           @media screen and (max-width 1200px)
             display block
             width 100%
             height auto
             text-align center
           .four-img
              width 554px
              padding-bottom 30px
              @media screen and (max-width 1200px)
                width 60%
                margin 0px auto
                padding-bottom 50px
              @media screen and (max-width 500px)
                width 90%
                height auto
           .liu-c-tu
              font-size 16px
              text-align center
              padding-bottom 120px
      .four-lis
           flex 1
           height auto
           padding-top 6px
           @media screen and (max-width 1200px)
             width 100%
             height auto
             overflow hidden
             display block
             text-align center
           .four-lisp
              color #333
              font-size 16px
              line-height 1.5
              width 478px
              word-break break-all
              padding-bottom 10px
              margin-bottom 58px
              float right
              text-align left
              @media screen and (max-width 1200px)
                width 45%
                margin-right 5%
              @media screen and (max-width 700px)
                width 100%
                margin-right 0px
                margin 20px auto
                text-align center
                float none
  .more
    width 100%
    height 300px
    background-color #333
    @media screen and (max-width 1200px)
      height auto
      overflow hidden
      clear both
    .more-box
      width 1200px
      height 100%
      margin 0px auto
      display flex
      justify-content space-between
      align-items center
      @media screen and (max-width 1200px)
        display block
        width 100%
        padding-left 15px
        padding-right 15px
      .more-text
        color #fff
        font-size 40px
        vertical-align middle
        @media screen and (max-width 1200px)
          display block
          text-align center
          padding-top 50px
          margin-top 0px
          font-size 44px
        @media screen and (max-width 600px)
          font-size 26px
      .btn-more
        cursor pointer
        @media screen and (max-width 1200px)
          width 100%
        .button
          width 220px
          height 65px
          text-align center
          line-height 60px
          color #fff
          font-size 24px
          border 2px solid #fff
          &:hover
            border border 2px solid #f2bb24
            transition all 0.4s
            background-color #f2bb24
          @media screen and (max-width 1200px)
            margin 50px auto
          @media screen and (max-width 600px)
            height 60px
            line-height 56px
            font-size 20px

</style>

<script>
/* eslint-disable */
  export default{
  data () {
    return {
      swiper3Option: {
        activenum2: 0,
        notNextTick: true,
        direction: 'horizontal',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        centeredSlides: false,
        paginationClickable: true,
        preventClicksPropagation: false,
        autoplay: 3000,
        initialSlide: 0,
        clickable: true,
        observer: true,
        observeParents: true,
        loop: true,
        pagination: '.swiper-pagination',
        onTransitionStart (swiper) {
          this.activenum2 = swiper.activeIndex
        }
      },
    }
  }
}
</script>
