// aside component
var AsideComp = {
  props: [],
  data: function () {
    return {}
  },
  template: `<div>
    <div class="aside">
      <div class="logo">
        <i></i>
        <span>创富后台管理系统</span>
      </div>
      <div class="avatar">
        <i style="background-image:url(images/avatar.png)"></i>
        <span class="online">在线</span>
      </div>
      <div class="menu">
        <h3>菜单</h3>
        <div>
          <a href="/index.html" class="curr">订单管理</a>
          <a href="/merchant.html">商户管理</a>
          <a href="javascript:;">商户配额</a>
          <a href="/agent.html">代理管理</a>
          <a href="/statistic.html">统计</a>
          <a href="/cash.html">提现管理</a>
          <a href="javascript:;">通道管理</a>
          <a href="javascript:;">通道池管理</a>
        </div>
      </div>
    </div>
    <div class="mask"></div>
  </div>
  `,
  created: function(){
    // 获取请求知识库列表
	},
  methods: {
  }

}
