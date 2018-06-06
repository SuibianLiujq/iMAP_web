import 'ui/visualize';
import 'ui/doc_table';
import uiModules from 'ui/modules';
import sidebarTemplate from 'plugins/kibana/sidemenu/menu/ba-sidebar.html';
const $ = require('jquery');
import './wSideMenu.js';
import './sidebar.less';

uiModules
.get('app/sidebar',[
  'kibana/notify',
  'kibana/courier',
  'kibana/index_patterns'
])
.directive('baSidebar', function (Notifier, courier, AppState, timefilter, quickRanges, kbnUrl, confirmModal, Private) {
  return {
    restrict: 'E',
    template: sidebarTemplate,
    controller: function ($scope, $rootScope, $route, $routeParams, $location, Private, getAppState) {
      // const dash = $scope.dash = $route.current.locals.dash;
      // const saber = $scope.saber = $route.current.locals.saber;
      // console.log('dash: ',dash)
      // console.log('saber: ',saber)
      // console.log('name: ',$scope.name)
      const data = [
        {node:'首页',content:'/app/kibana#/dashboard/firstpage'}, 
        {node:'链路层',content:'/app/kibana#/dashboard/linklayer'},  
        {node:'网络层',content:'/app/kibana#/dashboard/IP-layer'},  
        {node:'TCP',children:[
          {node:'概览',content:'/app/kibana#/dashboard/TCP-overview'},  
          {node:'流量',content:'/app/kibana#/dashboard/TCP-traffic'},  
          {node:'延迟',content:'/app/kibana#/dashboard/TCP-latency'},  
          {node:'重传',content:'/app/kibana#/dashboard/TCP-retransmit-rate'},  
          {node:'端口',content:'/app/kibana#/dashboard/TCP-port'},  
          {node:'包数',content:'/app/kibana#/dashboard/TCP-packet'}
        ]},   
        {node:'UDP',children:[
          {node:'概览',content:'/app/kibana#/dashboard/UDP-overview'},  
          {node:'端口',content:'/app/kibana#/dashboard/UDP-port'}
        ]},  
        {node:'HTTP',children:[  
          {node:'概览',content:'/app/kibana#/dashboard/HTTP-overview'},  
          {node:'状态',content:'/app/kibana#/dashboard/HTTP-status'},  
          {node:'域名',content:'/app/kibana#/dashboard/HTTP-domain'},  
          {node:'网址',content:'/app/kibana#/dashboard/HTTP-url'}
        ]},  
        {node:'DNS',children:[
          {node:'概览',content:'/app/kibana#/dashboard/DNS-overview'},
          {node:'对比',content:'/app/kibana#/dashboard/cb00afc0-325c-11e8-880e-6f178b265db3'}
        ]},
        {node:'Series',children:[
          {node:'SYN',content:'/app/kibana#/dashboard/f7084ec0-4216-11e7-935e-21565439b4a4'},  
          {node:'DNS',content:'/app/kibana#/dashboard/1d691110-4219-11e7-935e-21565439b4a4'},  
          {node:'重传',content:'/app/kibana#/dashboard/31b793c0-4279-11e7-8f40-9b34fd0b8f4d'}
        ]},
        {node:'告警',children:[
          {node:'概览',content:'/app/kibana#/dashboard/14470450-ef9a-11e7-a50d-b75a39648e1b'},
          {node:'INFO',content:'/app/kibana#/dashboard/21709d80-ef9a-11e7-a50d-b75a39648e1b'},
          {node:'WARNING',content:'/app/kibana#/dashboard/28339280-ef9a-11e7-a50d-b75a39648e1b'},
        ]},
        {node:'防火墙',children:[
          {node:'概览',content:'/app/kibana#/dashboard/c8c83620-5330-11e8-8a0d-1985eaf3dfba'},
          {node:'端口',content:'/app/kibana#/dashboard/0a08a8d0-5332-11e8-8a0d-1985eaf3dfba'},
          {node:'WARNING',content:'/app/kibana#/dashboard/951435c0-5332-11e8-8a0d-1985eaf3dfba'}
        ]} 
      ];
      $('.demo-wrapper').wSideMenu({ 
        data: data
      });
    }
  };
});
