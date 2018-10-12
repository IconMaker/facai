//header component

var HeaderComp = {
  props: [],
  data: function () {
    return {}
  },
  template: `<div class="header">
    <i class="menu-fold"></i>
  </div>
  `,
  created: function(){
    // 获取请求知识库列表
	},
  methods: {
  }

}

// 菜单操作
$(function(){
  $(".menu-fold").on("click",function(){
    $(".bd").toggleClass("show")
    $(".aside").toggleClass("show")
    $(".header").toggleClass("show")
    $(".mask").toggle()
  })
})
