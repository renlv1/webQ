<template>
    <div class="qWiki">
      <div class="banner">
        <div class="banner-bg">
          <div class="banner-conbox">
            <div class="banner-conl">
              <div class="banner-title">{{$t('wiki.text1')}}<span class="banner-jiazhi">{{$t('wiki.text2')}}</span></div>
              <div class="banner-p">{{$t('wiki.text3')}}</div>
              <div class="banner-hr"></div>
            </div>
            <div class="banner-conr">
              <div class="banner-img"><img src="../../assets/images/wiki/banner2.png" alt=""></div>
            </div>
          </div>
        </div>
      </div>
      <div class="wiki-swiper">
        <div class="swiper-box">
          <swiper class="swiper-container-horizontal" :options="swiper3Option">
            <swiper-slide class="swiper-slide" v-for="(item, index) in $t('wiki.slideArr')" :key="index">
              <div class="slide-item">
                <div class="slide-con">
                   <div class="slide-title">{{item.title}}</div>
                   <div class="in">{{item.textp}}</div>
                   <div class="slidep slidep-top">{{item.slidetop}}</div>
                   <div class="slidep slidep-bot">{{item.slidebot}}</div>
                   <div class="slidep slidep-bot">{{item.slidebotAdd2}}</div>
                   <div class="slidep slidep-botColor" v-show="true">{{item.slidebotColor}}</div>
                </div>
                <div class="img-box">
                  <img class="img" :src="item.imgUrl" alt="">
                  <div class="img-p">{{item.imgp}}</div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination swiper-pagination-bullets"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
      <div class="wiki-listcon">
        <div class="listcon-box">
          <div class="listcon-title"><span class="title-info">{{$t('wiki.text4')}}</span>{{$t('wiki.text5')}}</div>
          <div class="wikiList">
            <div class="wilist" v-for="(item,index) in $t('wiki.wiListData')" :key="index">
              <div class="wiimg-border">
                <div class="wiImg">
                  <i class="flaticon-money-1"></i>
                  <img class="wiki-imgcon" :src="item.imgUrl" alt="">
                  <div class="btc_step_overlay"></div>
                </div>
              </div>
              <div class="wiTit">{{item.title}}</div>
              <div class="wip">{{item.textp}}</div>
              <div class="wiBtn"><i class="btn_tran"></i>{{item.btn}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="wiki-listcon-bot"></div>
      <div class="investor">
        <div class="investor-title">{{$t('wiki.text6')}}</div>
        <div class="investor-conbox">
          <div class="investor-list">
            <div class="list-for" v-for="(item,index) in $t('wiki.investorList')" :key="index">
              <div class="investor-p-title">{{item.title}}</div>
              <div class="investor-p-con">{{item.text}}</div>
            </div>
          </div>
          <div class="investor-img">
            <img src="../../assets/images/wiki/xx.svg" alt="">
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wiki-swiper
    width 100%
    height auto
    overflow hidden
    .swiper-box
       width 1200px
       height auto
       margin 0px auto
       position relative
       @media screen and (max-width 1460px)
        width 800px
       @media screen and (max-width 1024px)
         width 600px
       @media screen and (max-width 800px)
         width 400px
       @media screen and (max-width 450px)
         width 320px
      .swiper-pagination
        display block
        width 36px
        margin 0px auto
        @media screen and (min-width 1200px)
          display none
       .swiper-container-horizontal
         overflow hidden
         .slide-item
            width 1200px
            height auto
            overflow hidden
            @media screen and (max-width 1460px)
              width 800px
            @media screen and (max-width 1024px)
              width 600px
            @media screen and (max-width 800px)
              width 400px
            @media screen and (max-width 450px)
              width 320px
            .slide-con
               width 624px
               float left
               color #333
               @media screen and (max-width 1460px)
                 width 50%
                 height auto
               @media screen and (max-width 1024px)
                  float none
                  width 100%
               .slide-title
                  font-size 32px
                  font-weight bold
                  padding-top 240px
                  padding-bottom 30px
                  @media screen and (max-width 1460px)
                   padding-top 60px
                  @media screen and (max-width 1200px)
                    font-size 26px
               .in,.out,.slidep
                    font-size 16px
                    line-height 1.5
               .slidep
                  width 100%
                  word-break break-all
               .slidep-top
                  padding-top 30px
                  margin-bottom 10px
               .slidep-bot
                  padding-bottom 0px
                  margin-bottom 10px
               .slidep-botColor
                  color #e6b122
            .img-box
               width 514px
               float right
               padding-top 170px
               @media screen and (max-width 1460px)
                 width 50%
                 padding-top 110px
               @media screen and (max-width 1024px)
                 float none
                 width 100%
               @media screen and (max-width 600px)
                 height auto
                 padding-top 30px
               .img
                  width 100%
                  @media screen and (max-width 600px)
                    padding-top 10px
                    height auto
            .img-p
               text-align center
               padding-top 30px
               padding-bottom 116px
               @media screen and (max-width 600px)
                 padding-top 20px
                 padding-bottom 20px
       .swiper-button-next
          width 50px
          height 50px
          background url("../../assets/images/common/a31.png") no-repeat
          background-size 100% 100%
          position absolute
          left -115px
          top 50%
          margin-top -25px
          cursor pointer
          @media screen and (max-width 1200px)
           left -80px
          @media screen and (max-width 1204px)
            display none
       .swiper-button-prev
          width 50px
          height 50px
          background url("../../assets/images/common/a32.png") no-repeat
          background-size 100% 100%
          position absolute
          right -115px
          top 50%
          margin-top -25px
          cursor pointer
          @media screen and (max-width 1200px)
           right -80px
          @media screen and (max-width 1204px)
           display none
  .wiki-listcon
     width 100%
     height auto
     background-color #f5f5f5
     .listcon-box
       width 1200px
       height auto
       margin 0px auto
       @media screen and (max-width 1200px)
         width 100%
       .listcon-title
          font-size 44px
          color #333
          text-align center
          padding-top 120px
          padding-bottom 150px
          @media screen and (max-width 1200px)
            font-size 30px
          @media screen and (max-width 600px)
            font-size 24px
            padding 100px 15px 50px
          .title-info
             font-weight bold
             color #E6B122
       .wikiList
         width 100%
         height auto
         display flex
         align-items center
         flex-wrap wrap
         justify-content space-around
         border-bottom 1px solid #e5e5e5
         @media screen and (max-width 992px)
           border-bottom none
         .wilist
            width 240px
            height 448px
            word-break break-all
            text-align center
            color #333
            position relative
            transition all 0.5s
            @media screen and (max-width 992px)
              margin-bottom 50px
              border-bottom 1px solid #e5e5e5
            &:hover
              .btc_step_overlay
                position absolute !important
                top -1px !important
                left -1px !important
                right -1px !important
                bottom -1px !important
                background #e6b122
                opacity: 1 !important
              .wiimg-border
                border 2px dashed #e6b122
                transition all 0.5s
              .wiBtn
                background #e6b122
                opacity: 1 !important
                transition all 0.5s
            .wiimg-border
              width 150px
              height 150px
              transition all 0.5s
              margin 0px auto
              display inline-block
              border-radius 100%
              border 2px dashed transparent
              &:hover
                border 2px dashed #e6b122
                transition all 0.5s
              .wiImg
                 width 124px
                 height 124px
                 position relative
                 background-color #333
                 border-radius 100%
                 margin 0px auto
                 margin-top 13px
                 transition all 0.5s
                 .wiki-imgcon
                     position absolute
                     left 50%
                     margin-left -33px
                     top 50%
                     margin-top -30px
                     width 66px
                     height 60px
                     z-index 11
                     fill #fff
                 .btc_step_overlay
                    position: absolute;
                    left 50%
                    right 50%
                    top 50%
                    bottom 50%
                    opacity 0
                    padding 10px
                    border-radius 100%
                    transition all 0.5s
           .wiTit
              font-size 24px
              padding 38px 0px 28px
            .wip
              font-size 16px
              line-height 1.5
            .wiBtn
              width 30px
              height 30px
              position absolute
              bottom -15px
              left 50%
              margin-left -15px
              line-height 30px
              text-align center
              background-color #333
              border-radius 100%
              color #fff
  .wiki-listcon-bot
    height 156px
    width 100%
    background-color #f5f5f5
    @media screen and (max-width 600px)
      height 50px
  .investor
    width 100%
    height auto
    background-color #fff
    .investor-title
       font-size 44px
       font-weight bold
       color #e6b122
       text-align center
       padding-top 140px
       padding-bottom 120px
       @media screen and (max-width 1200px)
         font-size 30px
       @media screen and (max-width 600px)
         width 100%
         text-align center
         padding-top 100px
         padding-bottom 100px
         font-size 26px
    .investor-conbox
       width 1200px
       height auto
       overflow hidden
       margin 0px auto
       @media screen and (max-width 1200px)
         width 100%
         padding 0 15px
       .investor-list
          width 414px
          word-break break-all
          height auto
          color #333
          float left
          @media screen and (max-width 1200px)
            width 100%
            float none
            margin 0px auto
            text-align center
          @media screen and (max-width 800px)
            padding-top 0px
          .investor-p-title
             font-size 24px
             @media screen and (max-width 1200px)
               width 508px
               margin 0px auto
               text-align left
             @media screen and (max-width 600px)
               width 60%
          .investor-p-con
             font-size 16px
             line-height 1.5
             padding-top 20px
             padding-bottom 50px
             @media screen and (max-width 1200px)
               width 508px
               text-align left
               margin 0px auto
             @media screen and (max-width 600px)
               width 60%
       .investor-img
          width 704px
          height 696px
          float right
          margin-bottom 200px
          @media screen and (max-width 1200px)
            width 100%
            height auto
            text-align center
          @media screen and (max-width 600px)
            margin-bottom 100px
          img
            display block
            width 100%
            height 100%
            @media screen and (max-width 1200px)
              margin 0 auto
              width 400px
              height 70%
            @media screen and (max-width 1200px)
              width 320px
              margin 0 auto
              height 50%
            @media screen and (max-width 360px)
              width 280px
              margin 0 auto

</style>

<script>
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
      }
    }
  }
}
</script>
