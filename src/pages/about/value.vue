<template>
    <div class="ourValue">
      <div class="banner">
        <div class="wrap">
          <div class="banner-wrap">
            <div class="banner-l">
              <h2>{{$t('ourValue.text1')}}<i>{{$t('ourValue.text2')}}</i></h2>
              <p>{{$t('ourValue.text3')}}</p>
              <span class="hr"></span>
            </div>
            <div class="banner-r"></div>
          </div>
        </div>
      </div>
      <div class="section1">
        <div class="flex-box">
          <ul>
            <li v-for="(item, index) in $t('ourValue.sectionList1')" :key="index">
             <div class="li-box">
               <i :style="{backgroundImage:'url('+ item.icon +')'}"></i>
               <h4>{{item.title}}</h4>
               <p>{{item.text}}</p>
             </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="section2">
        <div class="wrap">
          <div class="section2-cont">
            <img src="../../assets/images/ourValue/douhao.svg" alt="">
            <p>{{$t('ourValue.text4')}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="less" scoped>
  @mc:#d9ab2d; //主色调
  .banner{
    background-color: #171718;
    height: 600px;
    width: 100%;
    background-image: url('../../assets/images/blockChain/quan.png');
    background-repeat: no-repeat;
    @media screen and (max-width: 1200px) {
      height: 750px;
    }
    .banner-wrap{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      height: 494px;
      padding-top: 106px;
      .banner-l{
        max-width: 680px;
        @media screen and (max-width: 1200px) {
          margin: 20px auto 0;
          text-align: center;
        }
        h2{
          font-weight:bold;
          font-size:32px;
          color: #fff;
          i{
            color: @mc;
          }
        }
        P{
          font-size:16px;
          color: #fff;
          width: 480px;
          margin: 30px 0 96px;
          line-height: 30px;
          @media screen and (max-width: 1200px) {
            margin: 20px 0 60px;
            width: 100%;
          }
        }
        .hr{
          display: block;
          height: 2px;
          width: 62px;
          background-color: @mc;
          @media screen and (max-width: 1200px) {
            margin: 0 auto;
          }
        }
      }
      .banner-r{
        background-image: url("../../assets/images/blockChain/banner.png");
        background-repeat: no-repeat;
        height: 338px;
        width: 480px;
        background-position: center;
        @media screen and (max-width: 1200px) {
          margin: 0 auto;
        }
        @media screen and (max-width: 400px) {
          width: 100%;
          margin: 0 auto;
          background-size: 100%;
        }
      }
    }
  }
  .section1{
    width: 1200px;
    margin:-50px auto 118px ;
    background-color: #262626;
    @media screen and (max-width: 1200px) {
      width: 100%;
      padding: 0 20px;
    }
    .flex-box{
      display: flex;
      width: 100%;
      align-items: center;
      ul{
        margin: 110px 0 22px;
        flex-wrap: wrap;
        display: flex;
        justify-content: space-between;
        li{
          box-sizing: border-box;
          margin-bottom: 88px;
          width: 600px;
          color: @mc;
          @media screen and (max-width: 1200px) {
            margin: 0 auto 88px;
            width: 60%;
          }
          @media screen and (max-width: 760px) {
            margin: 0 auto 88px;
            width: 100%;
          }
          &:nth-child(5) {
          .li-box{
            i{
              height: 53px;
            }
          }
          }
          &:nth-child(odd) {
            position: relative;
             &:after{
              content: '';
               width: 1px;
               height:60px;
               background: #3c3c3d;
               position: absolute;
               top:50%;
               right: 0;
               transform: translate(0,-50%);
               @media screen and (max-width: 1200px) {
                 display: none;
               }
             }
           }
          .li-box{
            padding-left: 74px ;
            width: 306px;
            margin: 0 auto;
            position: relative;
            @media screen and (max-width: 1200px) {
             width: 100%;
            }
          }
          i{
            display: inline-block;
            width: 44px;
            height: 44px;
            background-repeat: no-repeat;
            position: absolute;
            top:0 ;
            left: 0;
          }
          h4{
            font-size: 24px;
            margin-bottom: 20px;
            font-weight: bold;
          }
          p{
            width: 306px;
            font-size: 16px;
            @media screen and (max-width: 1200px) {
              width: 100%;
            }
          }
        }
      }
    }
  }
  .section2{
    background-color: @mc;
    height: 300px;
    position: relative;
    @media screen and (max-width: 1200px) {
      background-color: #282828;
      height: auto;
    }
    .wrap{
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #282828;
      height: 360px;
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translate(-50%, 0);
      @media screen and (max-width: 1200px) {
        height: auto;
        padding: 30px;
        position: relative;
        top: 0;
        left: 0;
        transform: translate(0, 0);
      }
      .section2-cont{
        width: 974px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        @media screen and (max-width: 1200px) {
          width: 100%;
          margin: 0 auto;
          text-align: center;
          display: block;
        }
        img{
          width: 124px;
          height: 124px;
          @media screen and (max-width: 1200px) {
            width: 100%;
            margin: 0 auto;
          }
        }
        p{
          width: 780px;
          font-size:35px;
          color: @mc;
          line-height: 1.7;
          @media screen and (max-width: 1200px) {
            width: 100%;
            font-size: 24px;
          }
        }
      }
    }
  }
</style>

<script>
export default{
  data () {
    return {
    }
  }
}
</script>
