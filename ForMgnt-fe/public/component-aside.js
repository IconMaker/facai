// aside component
//获取url参数--封装
(function($){
  $.getUrlParam = function(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r!=null) return unescape(r[2]); return null;
  }
})(jQuery);

// vue
var AsideComp = {
  props: [],
  data: function () {
    return {
      active: $.getUrlParam("active")
    }
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
          <a href="/index.html?active=order" v-bind:class="[active == 'order' ? 'curr' : '']">订单管理</a>
          <a href="/merchant.html?active=merchant"  v-bind:class="[active == 'merchant' ? 'curr' : '']">商户管理</a>
          <a href="javascript:;">商户配额</a>
          <a href="/agent.html?active=agent" v-bind:class="[active == 'agent' ? 'curr' : '']">代理管理</a>
          <a href="/statistic.html?active=statistic" v-bind:class="[active == 'statistic' ? 'curr' : '']">统计</a>
          <a href="/cash.html?active=cash" v-bind:class="[active == 'cash' ? 'curr' : '']">提现管理</a>
          <a href="/passage.html?active=passage"  v-bind:class="[active == 'passage' ? 'curr' : '']">通道管理</a>
          <a href="/passage-pool.html?active=pool"  v-bind:class="[active == 'pool' ? 'curr' : '']">通道池管理</a>
          <a href="javascript:;">通道分析</a>
          <a href="/passage-test.html?active=test"  v-bind:class="[active == 'test' ? 'curr' : '']">通道测试</a>
          <a href="javascript:;">流量模型</a>
          <a href="/upstream-pay.html?active=pay"  v-bind:class="[active == 'pay' ? 'curr' : '']">上游代付</a>
          <a href="/statement.html?active=statement"  v-bind:class="[active == 'statement' ? 'curr' : '']">流水查询</a>
          <a href="javascript:;">风控模型</a>
          <a href="/setting.html?active=setting"  v-bind:class="[active == 'setting' ? 'curr' : '']">系统设置</a>
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
