<template>
  <div class="investProject">
    <div class="banner">
      <div class="banner-bg">
        <div class="banner-conbox">
          <div class="banner-conl">
            <div class="banner-title">{{$t('investProject.text1')}}<span class="banner-jiazhi">{{$t('investProject.text2')}}</span></div>
            <div class="banner-p">{{$t('investProject.text3')}}</div>
            <div class="banner-hr"></div>
          </div>
          <div class="banner-conr">
            <div class="banner-img"><img src="../../assets/images/investProject/banner4.png" alt=""></div>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-bg">
      <div class="tab-box">
        <div class="tab-title" v-for="(item,index) in $t('investProject.tabTitleData')" :key="index" @click="tabChange(index)">
          <span tag="span" :class="{actives: i=== index}">{{item.title}}</span>
        </div>
      </div>
    <!--<div class="tab-main tabmain_l" v-if="showTabL">-->
      <!--<div class="lis" v-for="(item,index) in $t('investProject.tabContentsL')" :key="index">-->
        <!--<div class="lis-img"><img src="../../assets/images/investProject/tu.png" alt=""></div>-->
        <!--<div class="lis-con-box">-->
          <!--<div class="lis-title">{{item.title}}</div>-->
          <!--<div class="lis-con">{{item.con}}</div>-->
          <!--<div class="lis-num">{{item.num}}</div>-->
          <!--<div class="lis-sbox">-->
            <!--<span class="lis-sl">{{item.sl}}</span>-->
            <!--<span class="lis-sr" v-if="item.sr == '100%'">{{item.sr}}</span>-->
            <!--<span class="lis-sr " v-else>{{item.sr}}</span>-->
          <!--</div>-->
          <!--<div class="bar">-->
            <!--<span class="bgColor-ok" v-if="item.jinduOK == ''"></span>-->
            <!--<span class="bgColor" v-else></span>-->
          <!--</div>-->
          <!--<div class="list-time">{{item.time}}</div>-->
          <!--<div class="list-date">{{item.date}}</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="tab-main tabmain_r" v-show="showTabR">-->
        <!--<div class="lis" v-for="(item,index) in $t('investProject.tabContentsR')" :key="index">-->
          <!--<div class="lis-img"><img src="../../assets/images/investProject/tu.png" alt=""></div>-->
          <!--<div class="lis-con-box">-->
            <!--<div class="lis-title">{{item.title}}</div>-->
            <!--<div class="lis-con">{{item.con}}</div>-->
            <!--<div class="lis-num">{{item.num}}</div>-->
            <!--<div class="lis-sbox">-->
              <!--<span class="lis-sl">{{item.sl}}</span>-->
              <!--<span class="lis-sr" v-if="item.sr == '100%'">{{item.sr}}</span>-->
              <!--<span class="lis-sr " v-else>{{item.sr}}</span>-->
            <!--</div>-->
            <!--<div class="bar">-->
              <!--<span class="bgColor-ok" v-if="item.jinduOK == ''"></span>-->
              <!--<span class="bgColor" v-else></span>-->
            <!--</div>-->
            <!--<div class="list-time">{{item.time}}</div>-->
            <!--<div class="list-date">{{item.date}}</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .tab-bg
    width 100%
    height auto
    background-color #fff
    margin-bottom 20px
    .tab-box
      width 1200px
      height auto
      margin 0px auto
      display flex
      @media screen and (max-width 1200px)
        width 100%
      .tab-title
         display inline-block
         flex 1
         text-align center
         font-size 38px
         width 254px
         cursor pointer
         margin 134px 0px 134px
         @media screen and (max-width 1200px)
            font-size 26px
         @media screen and (max-width 600px)
            font-size 20px
         .actives
             color #d9ab2b
             margin-bottom 10px
             border-bottom 2px solid #d9ab2b
    .tab-main
       width 1200px
       height auto
       overflow hidden
       margin 0px auto
       margin-bottom 164px
       display flex
       flex-wrap wrap
       justify-content space-between
       @media screen and (max-width 1200px)
         width 100%
         padding-left 15px
         padding-right 15px
       .lis-con-box
          width 332px
          height auto
          margin 0px auto
          @media screen and (max-width 450px)
            width 100%
            word-break break-all
            padding-left 15px
            padding-right 15px
         .lis
            width 370px
            height 100%
            overflow hidden
            margin-bottom 20px
            color #333
            box-sizing border-box
            border 1px solid #dbdbdb
            @media screen and (max-width 1200px)
              margin 20px auto
            @media screen and (max-width 450px)
              width 80%
            .lis-img
              width 370px
              height 220px
              @media screen and (max-width 450px)
                width 100%
                height auto
              img
               border none
               vertical-align middle
               display block
               width 100%
               height 100%
            .lis-title
               font-size 24px
               padding 30px 0px 20px
            .lis-con
               width 100%
               word-break break-all
               height auto
               padding-bottom 20px
            .lis-num
              font-size 18px
              padding-bottom 40px
            .lis-sbox
               display block
               width 248px
               font-size 16px
               padding-bottom 10px
               @media screen  and (max-width 450px)
                 width 100%
               .lis-sl
                  text-align left
               .lis-sr
                  float right
            .bar
                width 300px
                height 6px
                background-color #333
                border-radius 3px
                margin-bottom 28px
                position relative
                @media screen and (max-width 450px)
                  width 100%
                .bgColor
                  display block
                  position absolute
                  left 0px
                  top 0px
                  width 248px
                  height 6px
                  background-color #d9ab2b
                  border-radius 3px
                  @media screen and (max-width 450px)
                    width 90%
                .bgColor-ok
                  display block
                  position absolute
                  left 0px
                  top 0px
                  width 100%
                  height 6px
                  background-color #d9ab2b
                  border-radius 3px
            .list-sr-ok
              width 300px
              height 6px
              background-color #d9ab2b
              border-radius 3px
              margin-bottom 28px
              position relative
            .list-time
               text-align right
               font-size 16px
               padding-bottom 10px
            .list-date
               text-align right
               font-size 16px
               padding-bottom 30px
</style>

<script>
/* eslint-disable */
export default{
  data () {
    return {
      i: 0,
      showTabL: true,
      showTabR: false,
      show: true
    }
  },
  created () {
    this.i = 0
  },
  methods: {
    tabChange(index) {
      this.i = index
      if (this.i === 0) {
        this.showTabL = true
        this.showTabR = false
      } else {
        this.showTabL = false
        this.showTabR = true
      }
    }
  }
}
</script>
