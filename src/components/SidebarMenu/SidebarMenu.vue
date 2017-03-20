<template>
    <sidebar-menu-li :parentId="item.MenuId" :menus="menus" ulClass="sidebar-menu"></sidebar-menu-li> 
</template>
<script>
    export default{
        name: 'sidebar-menu-li',
        props:['parentId','menus','ulClass'],
        data: function(){
            return {
             
            };
        },
    }

    function getMenus(){
      var menus = [{
                      "MenuId": 1,
                      "MenuName": "首页",
                      "Link": "/home/index",
                      "Priority": null,
                      "ParentId": 0,
                      "IsShow": true
                  },
                  {
                      "MenuId": 2,
                      "MenuName": "资源管理",
                      "Link": null,
                      "Priority": null,
                      "ParentId": 0,
                      "IsShow": true
                  },
                  {
                      "MenuId": 11,
                      "MenuName": "基础信息管理",
                      "Link": null,
                      "Priority": null,
                      "ParentId": 0,
                      "IsShow": true
                  },
                  {
                      "MenuId": 20,
                      "MenuName": "组织架构管理",
                      "Link": null,
                      "Priority": null,
                      "ParentId": 0,
                      "IsShow": true
                  },
                  {
                      "MenuId": 26,
                      "MenuName": "客服功能",
                      "Link": null,
                      "Priority": null,
                      "ParentId": 0,
                      "IsShow": true
                  },
                  {
                      "MenuId": 31,
                      "MenuName": "报表功能",
                      "Link": null,
                      "Priority": null,
                      "ParentId": 0,
                      "IsShow": true
                  },
                  {
                      "MenuId": 39,
                      "MenuName": "录音功能",
                      "Link": null,
                      "Priority": null,
                      "ParentId": 0,
                      "IsShow": true
                  },
                  {
                      "MenuId": 81,
                      "MenuName": "微信配置管理",
                      "Link": null,
                      "Priority": null,
                      "ParentId": 0,
                      "IsShow": true
                  },
                  {
                      "MenuId": 102,
                      "MenuName": "违规配置管理",
                      "Link": null,
                      "Priority": null,
                      "ParentId": 0,
                      "IsShow": true
                  },
                  {
                      "MenuId": 118,
                      "MenuName": "产品管理",
                      "Link": null,
                      "Priority": null,
                      "ParentId": 0,
                      "IsShow": true
                  },
                  {
                      "MenuId": 120,
                      "MenuName": "订单管理",
                      "Link": null,
                      "Priority": null,
                      "ParentId": 0,
                      "IsShow": true
                  },
                  {
                      "MenuId": 121,
                      "MenuName": "我的订单",
                      "Link": null,
                      "Priority": null,
                      "ParentId": 0,
                      "IsShow": true
                  },
                  {
                      "MenuId": 76,
                      "MenuName": "任务池管理",
                      "Link": null,
                      "Priority": 0,
                      "ParentId": 0,
                      "IsShow": true
                  },
                  {
                      "MenuId": 110,
                      "MenuName": "合规管理",
                      "Link": null,
                      "Priority": 0,
                      "ParentId": 0,
                      "IsShow": true
                  },
                  {
                      "MenuId": 3,
                      "MenuName": "我的资源",
                      "Link": "/Resource/MyResourceList",
                      "Priority": null,
                      "ParentId": 2,
                      "IsShow": true
                  },
                  {
                      "MenuId": 4,
                      "MenuName": "新资源",
                      "Link": "/Resource/NewResourceList",
                      "Priority": null,
                      "ParentId": 2,
                      "IsShow": true
                  },
                  {
                      "MenuId": 5,
                      "MenuName": "公共资源",
                      "Link": "/Resource/PublicResourceList",
                      "Priority": null,
                      "ParentId": 2,
                      "IsShow": true
                  },
                  {
                      "MenuId": 6,
                      "MenuName": "资源调整",
                      "Link": "/Resource/ResourceTidyList",
                      "Priority": null,
                      "ParentId": 2,
                      "IsShow": true
                  },
                  {
                      "MenuId": 7,
                      "MenuName": "新资源调整",
                      "Link": "/Resource/NewResourceTidyList",
                      "Priority": null,
                      "ParentId": 2,
                      "IsShow": true
                  },
                  {
                      "MenuId": 8,
                      "MenuName": "资源分配到组",
                      "Link": "/Resource/Distribute",
                      "Priority": null,
                      "ParentId": 2,
                      "IsShow": true
                  },
                  {
                      "MenuId": 9,
                      "MenuName": "小组资源派发",
                      "Link": "/Resource/Assign",
                      "Priority": null,
                      "ParentId": 2,
                      "IsShow": true
                  },
                  {
                      "MenuId": 10,
                      "MenuName": "资源导入",
                      "Link": "/Resource/ImportFile",
                      "Priority": null,
                      "ParentId": 2,
                      "IsShow": true
                  },
                  {
                      "MenuId": 12,
                      "MenuName": "资源大类",
                      "Link": "/Resource/ResourceTypeList",
                      "Priority": null,
                      "ParentId": 2,
                      "IsShow": true
                  },
                  {
                      "MenuId": 13,
                      "MenuName": "资源小类",
                      "Link": "/Resource/ResourceSubTypeList",
                      "Priority": null,
                      "ParentId": 2,
                      "IsShow": true
                  },
                  {
                      "MenuId": 36,
                      "MenuName": "未分配资源",
                      "Link": "/Resource/WaitDistribute",
                      "Priority": null,
                      "ParentId": 2,
                      "IsShow": true
                  },
                  {
                      "MenuId": 37,
                      "MenuName": "资源流转记录",
                      "Link": "/Resource/TransferRecord",
                      "Priority": null,
                      "ParentId": 2,
                      "IsShow": true
                  },
                  {
                      "MenuId": 38,
                      "MenuName": "员工资源监控",
                      "Link": "/Resource/AllResourceList",
                      "Priority": null,
                      "ParentId": 2,
                      "IsShow": true
                  },
                  {
                      "MenuId": 41,
                      "MenuName": "我的所有资源",
                      "Link": "/Resource/EmployeeResourceList",
                      "Priority": null,
                      "ParentId": 2,
                      "IsShow": true
                  },
                  {
                      "MenuId": 42,
                      "MenuName": "我的开单资源",
                      "Link": "/Resource/MyCoustomer?resourceStatus=4",
                      "Priority": null,
                      "ParentId": 2,
                      "IsShow": true
                  },
                  {
                      "MenuId": 43,
                      "MenuName": "公共资源调整",
                      "Link": "/Resource/PublicResourceTidyList",
                      "Priority": null,
                      "ParentId": 2,
                      "IsShow": true
                  },
                  {
                      "MenuId": 45,
                      "MenuName": "所有开单资源",
                      "Link": "/Resource/AllCoustomerList?resourceStatus=4",
                      "Priority": null,
                      "ParentId": 2,
                      "IsShow": true
                  },
                  {
                      "MenuId": 64,
                      "MenuName": "资源导出",
                      "Link": "/Resource/ExportResourceList",
                      "Priority": null,
                      "ParentId": 2,
                      "IsShow": true
                  },
                  {
                      "MenuId": 68,
                      "MenuName": "添加好友是否成功列表",
                      "Link": "/Resource/GetHasAddFriendsList",
                      "Priority": null,
                      "ParentId": 2,
                      "IsShow": true
                  },
                  {
                      "MenuId": 69,
                      "MenuName": "是否有微信资源列表",
                      "Link": "/Resource/GetHasWechatResourceList",
                      "Priority": null,
                      "ParentId": 2,
                      "IsShow": true
                  },
                  {
                      "MenuId": 70,
                      "MenuName": "资源分配到公司",
                      "Link": "/Resource/DistributeToCompanyList",
                      "Priority": null,
                      "ParentId": 2,
                      "IsShow": true
                  },
                  {
                      "MenuId": 71,
                      "MenuName": "员工微信资源监测",
                      "Link": "/Resource/GetIsPullResourceList",
                      "Priority": null,
                      "ParentId": 2,
                      "IsShow": true
                  },
                  {
                      "MenuId": 72,
                      "MenuName": "我的历史微信资源",
                      "Link": "/Resource/GetPullResourceList",
                      "Priority": null,
                      "ParentId": 2,
                      "IsShow": true
                  },
                  {
                      "MenuId": 73,
                      "MenuName": "我的微信资源",
                      "Link": "/Resource/GetUnPullResourceList",
                      "Priority": null,
                      "ParentId": 2,
                      "IsShow": true
                  },
                  {
                      "MenuId": 89,
                      "MenuName": "员工资源分配配置",
                      "Link": "/Resource/EmployeeDistributeList",
                      "Priority": 0,
                      "ParentId": 2,
                      "IsShow": true
                  },
                  {
                      "MenuId": 90,
                      "MenuName": "小组资源配置",
                      "Link": "/Resource/GetGroupResourceConfigList",
                      "Priority": 0,
                      "ParentId": 2,
                      "IsShow": true
                  },
                  {
                      "MenuId": 91,
                      "MenuName": "员工资源配置",
                      "Link": "/Resource/GetEmployeeResourceConfigList",
                      "Priority": 0,
                      "ParentId": 2,
                      "IsShow": true
                  },
                  {
                      "MenuId": 96,
                      "MenuName": "小组资源配置",
                      "Link": "/Resource/GetGroupResourceConfigList",
                      "Priority": 0,
                      "ParentId": 2,
                      "IsShow": true
                  },
                  {
                      "MenuId": 97,
                      "MenuName": "员工资源配置",
                      "Link": "/Resource/GetEmployeeResourceConfigList",
                      "Priority": 0,
                      "ParentId": 2,
                      "IsShow": true
                  },
                  {
                      "MenuId": 145,
                      "MenuName": "资源查询导出",
                      "Link": "/Resource/ResourceTidySearch",
                      "Priority": 0,
                      "ParentId": 2,
                      "IsShow": true
                  },
                  {
                      "MenuId": 14,
                      "MenuName": "系统配置",
                      "Link": "/SystemConfig/ConfigList",
                      "Priority": null,
                      "ParentId": 11,
                      "IsShow": true
                  },
                  {
                      "MenuId": 15,
                      "MenuName": "公司配置",
                      "Link": "/BasicInfo/CompanyConfigList",
                      "Priority": null,
                      "ParentId": 11,
                      "IsShow": true
                  },
                  {
                      "MenuId": 16,
                      "MenuName": "联系方式",
                      "Link": "/BasicInfo/ContactTypeList",
                      "Priority": null,
                      "ParentId": 11,
                      "IsShow": true
                  },
                  {
                      "MenuId": 17,
                      "MenuName": "联络手段",
                      "Link": "/BasicInfo/ContactActionList",
                      "Priority": null,
                      "ParentId": 11,
                      "IsShow": true
                  },
                  {
                      "MenuId": 18,
                      "MenuName": "客户类型",
                      "Link": "/BasicInfo/UserTypeList",
                      "Priority": null,
                      "ParentId": 11,
                      "IsShow": true
                  },
                  {
                      "MenuId": 19,
                      "MenuName": "备注类型",
                      "Link": "/BasicInfo/DiaryTypeList",
                      "Priority": null,
                      "ParentId": 11,
                      "IsShow": true
                  },
                  {
                      "MenuId": 29,
                      "MenuName": "菜单管理",
                      "Link": "/Menu/MenuList",
                      "Priority": null,
                      "ParentId": 11,
                      "IsShow": true
                  },
                  {
                      "MenuId": 33,
                      "MenuName": "号码段归属",
                      "Link": "/CallCenter/NumberSectionList",
                      "Priority": null,
                      "ParentId": 11,
                      "IsShow": true
                  },
                  {
                      "MenuId": 44,
                      "MenuName": "字典管理",
                      "Link": "/BasicInfo/DictionaryList",
                      "Priority": null,
                      "ParentId": 11,
                      "IsShow": true
                  },
                  {
                      "MenuId": 61,
                      "MenuName": "微信关键词配置",
                      "Link": "/WechatConfig/WeChatMonitorList",
                      "Priority": null,
                      "ParentId": 11,
                      "IsShow": true
                  },
                  {
                      "MenuId": 62,
                      "MenuName": "微信预警消息配置",
                      "Link": "/WechatConfig/WeChatMessageConfigDetail",
                      "Priority": null,
                      "ParentId": 11,
                      "IsShow": true
                  },
                  {
                      "MenuId": 65,
                      "MenuName": "联系方式导入",
                      "Link": "/Organization/ImportEmployeeContact",
                      "Priority": null,
                      "ParentId": 11,
                      "IsShow": true
                  },
                  {
                      "MenuId": 21,
                      "MenuName": "公司管理",
                      "Link": "/Organization/CompanyList",
                      "Priority": null,
                      "ParentId": 20,
                      "IsShow": true
                  },
                  {
                      "MenuId": 22,
                      "MenuName": "部门管理",
                      "Link": "/Organization/DepartmentList",
                      "Priority": null,
                      "ParentId": 20,
                      "IsShow": true
                  },
                  {
                      "MenuId": 23,
                      "MenuName": "小组管理",
                      "Link": "/Organization/GroupList",
                      "Priority": null,
                      "ParentId": 20,
                      "IsShow": true
                  },
                  {
                      "MenuId": 24,
                      "MenuName": "人员管理",
                      "Link": "/Organization/EmployeeList",
                      "Priority": null,
                      "ParentId": 20,
                      "IsShow": true
                  },
                  {
                      "MenuId": 25,
                      "MenuName": "角色管理",
                      "Link": "/Roles/RolesList",
                      "Priority": null,
                      "ParentId": 20,
                      "IsShow": true
                  },
                  {
                      "MenuId": 92,
                      "MenuName": "离职员工管理",
                      "Link": "/Organization/LeaveEmployeeList",
                      "Priority": 0,
                      "ParentId": 20,
                      "IsShow": true
                  },
                  {
                      "MenuId": 27,
                      "MenuName": "我的备注",
                      "Link": "/BasicInfo/MyDiaryList",
                      "Priority": null,
                      "ParentId": 26,
                      "IsShow": true
                  },
                  {
                      "MenuId": 28,
                      "MenuName": "我的来电",
                      "Link": "/BasicInfo/MyCallInfoList",
                      "Priority": null,
                      "ParentId": 26,
                      "IsShow": true
                  },
                  {
                      "MenuId": 30,
                      "MenuName": "新增客户",
                      "Link": "/Resource/Edit",
                      "Priority": null,
                      "ParentId": 26,
                      "IsShow": true
                  },
                  {
                      "MenuId": 60,
                      "MenuName": "资源查询",
                      "Link": "/Resource/ContactSearchResourceList",
                      "Priority": null,
                      "ParentId": 26,
                      "IsShow": true
                  },
                  {
                      "MenuId": 88,
                      "MenuName": "聊天室",
                      "Link": "/Menu/RedirectChatRoomView",
                      "Priority": 0,
                      "ParentId": 26,
                      "IsShow": true
                  },
                  {
                      "MenuId": 32,
                      "MenuName": "呼叫报表",
                      "Link": "/CallInfoReport/CallInfoReportList",
                      "Priority": null,
                      "ParentId": 31,
                      "IsShow": true
                  },
                  {
                      "MenuId": 46,
                      "MenuName": "资源报表",
                      "Link": "/CallInfoReport/GetResourceReportList",
                      "Priority": null,
                      "ParentId": 31,
                      "IsShow": true
                  },
                  {
                      "MenuId": 47,
                      "MenuName": "客户资源报表",
                      "Link": "/CallInfoReport/CustomerResourceReportList",
                      "Priority": null,
                      "ParentId": 31,
                      "IsShow": true
                  },
                  {
                      "MenuId": 109,
                      "MenuName": "员工聊天详细报表",
                      "Link": "/CallInfoReport/GetWehcatReportList",
                      "Priority": 0,
                      "ParentId": 31,
                      "IsShow": true
                  },
                  {
                      "MenuId": 115,
                      "MenuName": "业绩报表",
                      "Link": "/InvestmentReport/GetPerformanceReportList",
                      "Priority": 0,
                      "ParentId": 31,
                      "IsShow": true
                  },
                  {
                      "MenuId": 116,
                      "MenuName": "业绩详情报表",
                      "Link": "/InvestmentReport/GetPerformanceDetailReportList",
                      "Priority": 0,
                      "ParentId": 31,
                      "IsShow": true
                  },
                  {
                      "MenuId": 117,
                      "MenuName": "资源业绩报表",
                      "Link": "/InvestmentReport/GetResourcesPerformanceReportList",
                      "Priority": 0,
                      "ParentId": 31,
                      "IsShow": true
                  },
                  {
                      "MenuId": 133,
                      "MenuName": "员工自动加人资源报表",
                      "Link": "/Report/GetWechatAutoAddResourceReportList",
                      "Priority": 0,
                      "ParentId": 31,
                      "IsShow": true
                  },
                  {
                      "MenuId": 134,
                      "MenuName": "我的自动加人资源报表",
                      "Link": "/Report/GetMyWechatAutoAddResourceReportList",
                      "Priority": 0,
                      "ParentId": 31,
                      "IsShow": true
                  },
                  {
                      "MenuId": 135,
                      "MenuName": "员工聊天人数报表",
                      "Link": "/Report/GetWehcatPopulationReportList",
                      "Priority": 0,
                      "ParentId": 31,
                      "IsShow": true
                  },
                  {
                      "MenuId": 136,
                      "MenuName": "员工资源类别报表",
                      "Link": "/Report/GetResourceUserTypeReportList",
                      "Priority": 0,
                      "ParentId": 31,
                      "IsShow": true
                  },
                  {
                      "MenuId": 138,
                      "MenuName": "资源渠道统计报表",
                      "Link": "/Report/GetResourceChannelReportList",
                      "Priority": 0,
                      "ParentId": 31,
                      "IsShow": true
                  },
                  {
                      "MenuId": 144,
                      "MenuName": "员工被动加人资源报表",
                      "Link": "/Report/GetWechatPassiveAddResourceReportList",
                      "Priority": 0,
                      "ParentId": 31,
                      "IsShow": true
                  },
                  {
                      "MenuId": 40,
                      "MenuName": "录音信息",
                      "Link": "/Record/RecordList",
                      "Priority": null,
                      "ParentId": 39,
                      "IsShow": true
                  },
                  {
                      "MenuId": 77,
                      "MenuName": "我的历史任务",
                      "Link": "/TaskPoll/MyTaskPollList",
                      "Priority": 0,
                      "ParentId": 76,
                      "IsShow": true
                  },
                  {
                      "MenuId": 78,
                      "MenuName": "当天任务列表",
                      "Link": "/TaskPoll/PresentTaskList",
                      "Priority": 0,
                      "ParentId": 76,
                      "IsShow": true
                  },
                  {
                      "MenuId": 79,
                      "MenuName": "历史任务列表",
                      "Link": "/TaskPoll/TaskPollList",
                      "Priority": 0,
                      "ParentId": 76,
                      "IsShow": true
                  },
                  {
                      "MenuId": 80,
                      "MenuName": "我的任务列表",
                      "Link": "/TaskPoll/MyPresentTaskList",
                      "Priority": 0,
                      "ParentId": 76,
                      "IsShow": true
                  },
                  {
                      "MenuId": 83,
                      "MenuName": "微信列表",
                      "Link": "/ChatConfig/GetWeChatAuthorizationList",
                      "Priority": 0,
                      "ParentId": 81,
                      "IsShow": true
                  },
                  {
                      "MenuId": 85,
                      "MenuName": "任务列表",
                      "Link": "/ChatConfig/WeChatTaskList",
                      "Priority": 0,
                      "ParentId": 81,
                      "IsShow": true
                  },
                  {
                      "MenuId": 86,
                      "MenuName": "微信号重启计划",
                      "Link": "/ChatConfig/GetWechatRestartPlanConfig",
                      "Priority": 0,
                      "ParentId": 81,
                      "IsShow": true
                  },
                  {
                      "MenuId": 87,
                      "MenuName": "微信群发管理",
                      "Link": "/ChatConfig/GetWechatGroupSendConfig",
                      "Priority": 0,
                      "ParentId": 81,
                      "IsShow": true
                  },
                  {
                      "MenuId": 93,
                      "MenuName": "我的微信列表",
                      "Link": "/ChatConfig/GetMyWeChatAuthorizationList",
                      "Priority": 0,
                      "ParentId": 81,
                      "IsShow": true
                  },
                  {
                      "MenuId": 94,
                      "MenuName": "微信监控列表",
                      "Link": "/ChatConfig/GetWeChatAuthorizationMonitorList",
                      "Priority": 0,
                      "ParentId": 81,
                      "IsShow": true
                  },
                  {
                      "MenuId": 99,
                      "MenuName": "用户画像配置",
                      "Link": "/MonitoringSystemConfig/GetUserPortraitConfigModelList",
                      "Priority": 0,
                      "ParentId": 81,
                      "IsShow": true
                  },
                  {
                      "MenuId": 100,
                      "MenuName": "聊天话术分组",
                      "Link": "/MonitoringSystemConfig/GetChatMessageGroupConfigList",
                      "Priority": 0,
                      "ParentId": 81,
                      "IsShow": true
                  },
                  {
                      "MenuId": 101,
                      "MenuName": "聊天话术配置",
                      "Link": "/MonitoringSystemConfig/GetChatMessageConfigList",
                      "Priority": 0,
                      "ParentId": 81,
                      "IsShow": true
                  },
                  {
                      "MenuId": 111,
                      "MenuName": "批量发朋友圈配置",
                      "Link": "/ChatConfig/AuthorizationForFriendCirCleList",
                      "Priority": 0,
                      "ParentId": 81,
                      "IsShow": true
                  },
                  {
                      "MenuId": 137,
                      "MenuName": "员工资源报表",
                      "Link": "/ChatConfig/GetResourceRecordList",
                      "Priority": 0,
                      "ParentId": 81,
                      "IsShow": true
                  },
                  {
                      "MenuId": 103,
                      "MenuName": "违规类型配置列表",
                      "Link": "/MonitoringSystemConfig/GetViolationTypeConfigList",
                      "Priority": 0,
                      "ParentId": 102,
                      "IsShow": true
                  },
                  {
                      "MenuId": 104,
                      "MenuName": "违规关键字配置列表",
                      "Link": "/MonitoringSystemConfig/GetViolationKeyWordConfigList",
                      "Priority": 0,
                      "ParentId": 102,
                      "IsShow": true
                  },
                  {
                      "MenuId": 105,
                      "MenuName": "聊天记录监控",
                      "Link": "/MonitoringSystemConfig/GetViolationRecordList",
                      "Priority": 0,
                      "ParentId": 102,
                      "IsShow": true
                  },
                  {
                      "MenuId": 107,
                      "MenuName": "违规记录查询",
                      "Link": "/MonitoringSystemConfig/GetIllegalViolationRecordList?Result=2",
                      "Priority": 0,
                      "ParentId": 102,
                      "IsShow": true
                  },
                  {
                      "MenuId": 108,
                      "MenuName": "聊天记录查询",
                      "Link": "/MonitoringSystemConfig/GetWechatRecordList",
                      "Priority": 0,
                      "ParentId": 102,
                      "IsShow": true
                  },
                  {
                      "MenuId": 112,
                      "MenuName": "聊天记录监控",
                      "Link": "/Compliance/GetAllViolationRecordList",
                      "Priority": 0,
                      "ParentId": 110,
                      "IsShow": true
                  },
                  {
                      "MenuId": 113,
                      "MenuName": "违规记录查询",
                      "Link": "/Compliance/GetAllIllegalViolationRecordList",
                      "Priority": 0,
                      "ParentId": 110,
                      "IsShow": true
                  },
                  {
                      "MenuId": 114,
                      "MenuName": "微信单聊天记录",
                      "Link": "/Compliance/GetAllWechatRecordList",
                      "Priority": 0,
                      "ParentId": 110,
                      "IsShow": true
                  },
                  {
                      "MenuId": 142,
                      "MenuName": "微信群聊天记录",
                      "Link": "/Compliance/GetGroupMessageWechatRecordList",
                      "Priority": 0,
                      "ParentId": 110,
                      "IsShow": true
                  },
                  {
                      "MenuId": 119,
                      "MenuName": "产品列表",
                      "Link": "/Product/ProductList",
                      "Priority": 0,
                      "ParentId": 118,
                      "IsShow": true
                  },
                  {
                      "MenuId": 146,
                      "MenuName": "产品分类列表",
                      "Link": "/Product/ProductCategoryList",
                      "Priority": 0,
                      "ParentId": 118,
                      "IsShow": true
                  },
                  {
                      "MenuId": 148,
                      "MenuName": "开通权限",
                      "Link": "/Order/WaitAuthorizeList",
                      "Priority": null,
                      "ParentId": 120,
                      "IsShow": true
                  },
                  {
                      "MenuId": 122,
                      "MenuName": "订单分单",
                      "Link": "/Order/SplitList",
                      "Priority": 0,
                      "ParentId": 120,
                      "IsShow": true
                  },
                  {
                      "MenuId": 123,
                      "MenuName": "订单列表",
                      "Link": "/Order/List",
                      "Priority": 0,
                      "ParentId": 120,
                      "IsShow": true
                  },
                  {
                      "MenuId": 124,
                      "MenuName": "待支付订单",
                      "Link": "/Order/WaitPayList",
                      "Priority": 0,
                      "ParentId": 120,
                      "IsShow": true
                  },
                  {
                      "MenuId": 125,
                      "MenuName": "待确认订单",
                      "Link": "/Order/WaitConfirmList",
                      "Priority": 0,
                      "ParentId": 120,
                      "IsShow": true
                  },
                  {
                      "MenuId": 126,
                      "MenuName": "待审核订单",
                      "Link": "/Order/WaitCheckList",
                      "Priority": 0,
                      "ParentId": 120,
                      "IsShow": true
                  },
                  {
                      "MenuId": 127,
                      "MenuName": "待服务订单",
                      "Link": "/Order/WaitServiceList",
                      "Priority": 0,
                      "ParentId": 120,
                      "IsShow": true
                  },
                  {
                      "MenuId": 128,
                      "MenuName": "已完成订单",
                      "Link": "/Order/CompleteList",
                      "Priority": 0,
                      "ParentId": 120,
                      "IsShow": true
                  },
                  {
                      "MenuId": 129,
                      "MenuName": "失败订单",
                      "Link": "/Order/FailList",
                      "Priority": 0,
                      "ParentId": 120,
                      "IsShow": true
                  },
                  {
                      "MenuId": 130,
                      "MenuName": "订单分配",
                      "Link": "/Order/AlocationList",
                      "Priority": 0,
                      "ParentId": 120,
                      "IsShow": true
                  },
                  {
                      "MenuId": 147,
                      "MenuName": "订单权限列表",
                      "Link": "/Order/AuthList",
                      "Priority": 0,
                      "ParentId": 120,
                      "IsShow": true
                  },
                  {
                      "MenuId": 131,
                      "MenuName": "我的销售订单",
                      "Link": "/Order/MySalesList",
                      "Priority": 0,
                      "ParentId": 121,
                      "IsShow": true
                  },
                  {
                      "MenuId": 132,
                      "MenuName": "我的客服订单",
                      "Link": "/Order/MyServiceList",
                      "Priority": 0,
                      "ParentId": 121,
                      "IsShow": true
                  }
              ];
              
              return menus;
    }
</script>
<style scoped>
</style>