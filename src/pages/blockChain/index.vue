<template>
    <div class="blockChain">
      <div class="banner">
        <div class="wrap">
          <div class="banner-wrap">
            <div class="banner-l">
              <h2>{{$t('Technology.text1')}}<i>{{$t('Technology.text2')}}</i></h2>
              <p>{{$t('Technology.text3')}}</p>
              <span class="hr"></span>
            </div>
            <div class="banner-r"></div>
          </div>
        </div>
      </div>
      <!--1 -->
      <div class="cont1">
        <div class="wrap">
          <div class="flex-box">
            <div class="cont1-l">
              <h5>{{$t('Technology.text4')}}</h5>
              <p>{{$t('Technology.text5')}}</p>
            </div>
            <div class="cont1-r">
            </div>
          </div>
        </div>
      </div>
      <!--2 -->
      <div class="cont2">
        <div class="cont2-r">
          <div class="cont2-right">
            <h3>{{$t('Technology.text6')}}</h3>
            <p>{{$t('Technology.text7')}}</p>
          </div>
        </div>
        <div class="wrap">
          <div class="cont2-l">
            <ul>
              <li>
                <h3>{{$t('Technology.text8')}}</h3>
                <p>{{$t('Technology.text9')}}</p>
              </li>
              <li>
                <h3>{{$t('Technology.text10')}}</h3>
                <p>{{$t('Technology.text11')}}</p>
              </li>
              <li>
                <h3>{{$t('Technology.text12')}}</h3>
                <p>{{$t('Technology.text13')}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--3 -->
      <div class="cont3">
        <div class="wrap">
          <h3>{{$t('Technology.text14')}}</h3>
          <div class="chain1">
            <div class="chain1-l">
              <h5>{{$t('Technology.text15')}}</h5>
              <p>{{$t('Technology.text16')}}</p>
            </div>
            <div class="chain1-r">
              <div :text="$t('Technology.text19')" class="progress dispose1">
                <span :text="$t('Technology.text21')"></span>
              </div>
              <div :text="$t('Technology.text20')" class="progress limit1">
                <span :text="$t('Technology.text22')"></span>
              </div>
            </div>
          </div>
          <div class="chain1">
            <div class="chain1-l">
              <h5>{{$t('Technology.text17')}}</h5>
              <p>{{$t('Technology.text18')}}</p>
            </div>
            <div class="chain1-r">
              <div :text="$t('Technology.text19')" class="progress dispose2">
                <span :text="$t('Technology.text22')"></span>
              </div>
              <div :text="$t('Technology.text20')" class="progress limit2">
                <span :text="$t('Technology.text21')"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<style lang="less"  scoped>
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
      @media screen and (max-width: 780px) {
        padding-top: 60px;
      }
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
  .cont1{
    .flex-box{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      @media screen and (max-width: 1200px) {
      }
      .cont1-l{
        width: 576px;
        @media screen and (max-width: 1200px) {
          margin: 70px auto 20px;
          text-align: center;
        }
        h5{
          font-size:24px;
          font-weight: bold;
          color: #333;
          margin: 35px 0 55px;
        }
        p{
          font-size:16px;
          color: #808080;
          line-height: 1.5;
          text-align: left;
        }
      }
      .cont1-r{
        margin: 70px 0 90px;
        width: 442px;
        height: 452px;
        background-image:url(../../assets/images/blockChain/qkl.png);
        background-repeat: no-repeat;
        background-size: 100%;
        @media screen and (max-width: 1040px) {
          margin: 70px auto 90px;
        }
        @media screen and (max-width: 760px) {
          height: 452px;
        }
      }
    }

  }
  .cont2{
    background-color: #262626;
    position: relative;
    .cont2-r{
      height: 100%;
      width: 50%;
      position: absolute;
      left:50%;
      top:0;
      background-image: url('../../assets/images/blockChain/qbj.png');
      background-repeat: no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
      background-size: cover;
      background-position: center;
      @media screen and (max-width: 1200px) {
        position: relative;
        left: 0;
        height: 689px;
        width: 100%;
      }
      @media screen and (max-width: 760px) {
        position: relative;
        left: 0;
        height: 305px;
        width: 100%;
        background-size: 100%;
      }
      .cont2-right{
        text-align: center;
        h3{
          font-size:44px;
          color: #fff;
          font-weight: bold;
        }
        P{
          font-size:24px;
          color: #fff;
          margin-top: 45px;
          @media screen and (max-width: 760px) {
            padding: 0 20px;
            line-height: 1.5;
          }
        }
      }
    }
    .wrap{
      .cont2-l{
        ul{
          padding: 95px 0;
          width: 528px;
          @media screen and (max-width: 1200px) {
            margin: 0 auto;
          }
          @media screen and (max-width: 528px) {
            width: 100%;
          }
        }
        li{
          padding-left: 74px;
          position: relative;
          margin-bottom: 66px;
          &:before{
            content: '';
            width: 44px;
            height: 44px;
            position: absolute;
            left: 0 ;
            top:0;
            background-repeat: no-repeat;
          }
          &:nth-child(1) {
            &:before{
              background-image: url("../../assets/images/blockChain/cont2_p1.png");
            }
          }
          &:nth-child(2) {
            &:before{
              background-image: url("../../assets/images/blockChain/cont2_p2.png");
            }
          }
          &:nth-child(3) {
            margin-bottom: 0px;
            &:before{
              background-image: url("../../assets/images/blockChain/cont2_p3.png");
            }
          }
          h3{
            font-size:24px;
            color: #fff;
            margin-bottom: 26px;
          }
          P{
            font-size:14px;
            color: #808080;
            width: 454px;
            line-height: 1.5;
            @media screen and (max-width: 454px) {
              width: 100%;
              padding: 0 20px;
            }
          }
        }
      }
    }

  }
  .cont3{
    padding: 100px 0 140px;
    h3{
      font-size:44px;
      font-weight: bold;
      color: #333;
      text-align: left;
      margin-bottom: 77px;
      @media screen and (max-width: 1200px) {
        text-align: center;
      }
    }
    .chain1{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      padding-bottom: 30px;
      .chain1-l{
        width: 574px;
        padding-bottom: 62px;
        @media screen and (max-width: 1200px) {
          margin: 0 auto;
        }
        @media screen and (max-width: 574px) {
          width: 100%;
        }
        h5{
          font-size:24px;
          color: #333;
          margin-bottom: 30px;
        }
        P{
          font-size:16px;
          color: #808080;
          line-height:2;
        }
      }
      .chain1-r{
        width: 570px;
        @media screen and (max-width: 1200px) {
          margin: 0 auto;
        }
        @media screen and (max-width: 570px) {
          width: 100%;
        }
        .progress{
          display: block;
          height: 4px;
          width: 100%;
          position: relative;
          border-radius: 4px ;
          background-color: #f5f6f7;
          &:before{
            content: attr(text);
            color: #333;
            font-size:14px;
            position: absolute;
            top: -25px;
            left: 0;
            font-weight: bold;
          }
          span{
            display: block;
            height: 4px;
            position: absolute;
            top:0 ;
            left: 0;
            border-radius: 4px ;
            &:after{
              content: attr(text);
              color: #333;
              font-size:14px;
              position: absolute;
              top: -25px;
              right: 0;
              font-weight: bold;
            }
          }
        }
        .dispose1{
          margin-bottom: 75px;
          span{
            width: 86%;
            background-color: #f8c345;
          }
        }
        .limit1{
          span{
            width: 74%;
            background-color: #38c087;
          }
        }
        .dispose2{
          margin-bottom: 75px;
          span{
            width: 68%;
            background-color: #718daa;
          }
        }
        .limit2{
          span{
            width: 91%;
            background-color: #e46c57;
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
      cont2List: {

      }
    }
  }
}
</script>
