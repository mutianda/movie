<template>
  <div class="all" >
    <div class="bg-login">
      <div class="middle-box container">
        <div class="viewPhoto">
          <input placeholder="请上传电影封面" style="opacity: 0.01;z-index: 3"
                    type="file" id="saveImage" class="saveImage"
                    name="myphoto"/>
          <div class="iconfont upload">&#xe64d;</div>
          <img src="" alt="" id="portrait" class="preview"/>
          <span class="shuoming" style="position: absolute;
top:2.5rem;left: .3rem;color: #eeeeee;font-size: .36rem">请上传约10:14电影封面</span>
        </div>
        <el-form inline-message :model="loginForm" :rules="loginRules" ref="loginForm">
          <!--<el-form-item prop="file">-->
            <!--<i class="iconfont upicon" style="color: #eee">&#xe631;</i>-->
            <!--<el-input v-model="loginForm.file" placeholder="请上传电影封面" style="opacity: 0.9;"-->
                      <!--type="file" id="saveImage"-->
                      <!--name="myphoto" @click="putfile"></el-input>-->
          <!--</el-form-item>-->
          <el-form-item prop="name">
            <i class="iconfont upicon" style="color: #eee">&#xe631;</i>
            <el-input v-model="loginForm.name" placeholder="请输入电影名称" style="display: inline-block"></el-input>
          </el-form-item>
          <el-form-item prop="spell">
            <i class="iconfont upicon" style="color: palegoldenrod">&#xe6fe;</i>
            <el-input prefix-icon="fa fa-lock" type="text"
                      v-model="loginForm.spell" placeholder="请输入电影拼音" auto-complete="off">
            </el-input>
          </el-form-item>
          <el-form-item prop="score">
            <i class="iconfont upicon" style="color: green">&#xe600;</i>
            <el-input status-icon prefix-icon="fa fa-user" v-model="loginForm.score" placeholder="请输入豆瓣评分"></el-input>
          </el-form-item>
          <el-form-item prop="uptime">
            <i class="iconfont upicon" style="color: brown">&#xe766;</i>
            <el-input status-icon prefix-icon="fa fa-user" v-model="loginForm.uptime"
                      placeholder="请输入上映时间如2018-08-10"></el-input>
          </el-form-item>
          <el-form-item prop="des">
            <i class="iconfont upicon" style="color: yellow">&#xe602;</i>
            <el-input status-icon prefix-icon="fa fa-user" v-model="loginForm.des" placeholder="请输入电影简介"
                      type="textarea" :rows="3" style="width: 5.6rem;margin: .02rem .2rem"></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-button type="primary" :disabled="this.loginForm.des.length === 0||this.loginForm.name.length
          === 0" class="login"  @click="submitForm('loginForm')">发布
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PublishContent',
  data () {
    return {
      loginForm: {
        name: '',
        file: '',
        spell: '',
        des: '',
        score: '',
        uptime: ''
      },
      msg: '',
      show: false,
      loginRules: {
        name: [{require: true, message: '电影名不能为空', trigger: 'blur'}, {
          min: 1,
          max: 20,
          message: '长度在 1 到 20 个字符',
          trigger: 'blur'
        }],
        spell: [{require: true, trigger: 'blur'}, {min: 2, message: '拼音最少2位', trigger: 'blur'}]
      }
    }
  },
  methods: {
    // 实时显示该图片在页面
    great () {
      document.getElementById('saveImage').onchange = function () {
        var imgFile = this.files[0]
        var fr = new FileReader()
        fr.onload = function () {
          document.getElementById('portrait').src = fr.result
        }
        fr.readAsDataURL(imgFile)
      }
    },
    submitForm (formName) {
      let x = document.getElementById('saveImage').files[0]
      console.log(x)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = new FormData()
          params.append('file', x)
          params.append('name', this.loginForm.name)
          params.append('spell', this.loginForm.spell)
          params.append('des', this.loginForm.des)
          let config = {
            headers: {'Content-Type': 'multipart/form-data'}
          }
          axios.post('http://localhost/publish.php', params, config)
            .then(function (res) {
              const data = res.data
              if (data) {
                console.log(data)
                // this.imageSave = res.data.image
                // sessionStorage.setItem('headImg', this.imageSave)
              } else {
                alert('no tes')
              }
            })
        } else {
          alert('请上传规范')
        }
      })
    }
  },
  mounted: function () {
    // 这个是钩子函数
    // 如果cartView函数要执行，必须先执行钩子函数
    // 这个钩子函数完成了对cratView函数的调用
    // 应该注意的是，使用mounted 并不能保证钩子函数中的 this.$el 在 document 中。为此还应该引入             Vue.nextTick/vm.$nextTick
    this.$nextTick(function () {
      this.great()
    })
  }
}
</script>

<style type="text/css" lang="stylus" scoped>
  .all{
    overflow hidden
    position absolute
    width 100%
    background-color #444
    top 1.02rem
    left 0
    display block
  }
  .bg-login{
    width 100%
  }
  .saveImage{
    position absolute
    top: 0
    left: .2rem
    color: #eeeeee;
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2rem;
    font-size: 0.3rem
    display inline-block
    margin-top .3rem
  }
  .upicon{
    font-size .4rem
    line-height .8rem
    height .8rem
    text-align center
  }
  .upload{
    position absolute
    top: 0
    left: .7rem
    color: #eeeeee;
    width: 1rem;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.8rem
    display inline-block
    margin-top 1rem
  }
   .viewPhoto{
     width 100%
     height 3rem
     border-bottom  #eaeaea solid .01rem
   }
   .preview{
     width 2.2rem
     height 2.9rem
     border #cacaca 0.02rem solid
     margin-left 3rem
   }
  .container
    background-color: #000;
    opacity: 0.85;
    margin: 0 auto;
    padding-bottom: 10px;
    width:100%;
    text-align center
    border-radius: .2rem;
  .middle-box {
    .el-input {
      display: inline-block;
      width 5.6rem
      margin .02rem .2rem
      color #333333
    }
    .login{
      width 30%
      color #eeeeee
    }
    .el-button {
      display: inline-block;
      font-size .36rem
      text-align center
    }
  }
</style>
