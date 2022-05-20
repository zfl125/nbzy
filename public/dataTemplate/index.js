function SetJson(USE) {

    this.USE = USE;

    this.useData = function(data) {
        if (this.USE) return data
        return {}
    };

    this.HOME = {
        "party_building_title": "党建",
        "people_title": "民生",
        "city_m_title": "城管",
        "event_title": "事件",
        "synthesize_title": "综治",
        "work_title": "工作",
        "OnlineServicesTypeForEcharts": this.useData({
            "nameSubList": ["解放路街道", "花苑社区党", "黄屯社区党", "test", "民安社区党", "济安社区党"],
            "nameValueList": [{
                "解放路街道党工委": "2"
            }, {
                "花苑社区党委": "6"
            }, {
                "黄屯社区党委": "3"
            }, {
                "test": "1"
            }, {
                "民安社区党委": "1"
            }, {
                "济安社区党委": "1"
            }],
            "percentList": ["42%", "28%", "14%", "4%", "4%", "4%"],
            "max": 9,
            "valueList": ["9", "6", "3", "1", "1", "1"],
            "nameList": ["解放路街道党工委", "花苑社区党委", "黄屯社区党委", "test", "民安社区党委", "济安社区党委"]
        }),
        "partyCommunistGroupForEcharts": this.useData({
            "nameSubList": ["解放路街道", "花苑社区党", "黄屯社区党", "test", "民安社区党", "济安社区党"],
            "nameValueList": [{
                "解放路街道党工委": "2"
            }, {
                "花苑社区党委": "6"
            }, {
                "黄屯社区党委": "3"
            }, {
                "test": "1"
            }, {
                "民安社区党委": "1"
            }, {
                "济安社区党委": "1"
            }],
            "percentList": ["42%", "28%", "14%", "4%", "4%", "4%"],
            "max": 9,
            "valueList": ["9", "6", "3", "1", "1", "1"],
            "nameList": ["解放路街道党工委", "花苑社区党委", "黄屯社区党委", "test", "民安社区党委", "济安社区党委"]
        }),
        "PartyMeetingGroupForEcharts": this.useData({
            "nameSubList": ["党小组会", "党课", "支委会议", "支部大会"],
            "nameValueList": [{
                "党小组会": "2"
            }, {
                "党课": "15"
            }, {
                "支委会议": "1"
            }, {
                "支部大会": "4"
            }],
            "percentList": ["9%", "68%", "4%", "18%"],
            "max": 15,
            "valueList": ["2", "15", "1", "4"],
            "nameList": ["党小组会", "党课", "支委会议", "支部大会"]
        }),
        "PartyAgeGroupForEcharts": this.useData({
            "nameSubList": ["1 ~10", "10~20", "30~40", "50年以上"],
            "nameValueList": [{
                "1 ~10年": "8"
            }, {
                "10~20年": "2"
            }, {
                "30~40年": "1"
            }, {
                "50年以上": "1"
            }],
            "percentList": ["66%", "16%", "8%", "8%"],
            "max": 8,
            "valueList": ["8", "2", "1", "1"],
            "nameList": ["1 ~10年", "10~20年", "30~40年", "50年以上"]
        }),
        "LifeHelpByMonthForEcharts": this.useData({
            "max": 2,
            "valueList": [1, 0, 2, 0, 1, 0],
            "nameList": ["05月", "06月", "07月", "08月", "09月", "10月"],
            "sum": 4,
            "nvList": [{
                "name": "05月",
                "value": 1
            }, {
                "name": "06月",
                "value": 0
            }, {
                "name": "07月",
                "value": 2
            }, {
                "name": "08月",
                "value": 0
            }, {
                "name": "09月",
                "value": 1
            }, {
                "name": "10月",
                "value": 0
            }]
        }),
        "PeopleGroupForEcharts": this.useData({
            "nameSubList": ["常住人口", "户籍人口", "未落户人口", "流动人口", "外出人口", "空挂人口", "境外人口"],
            "nameValueList": [{
                "常住人口": "11405"
            }, {
                "户籍人口": "7811"
            }, {
                "未落户人口": "4169"
            }, {
                "流动人口": "10"
            }, {
                "外出人口": "6"
            }, {
                "空挂人口": "61"
            }, {
                "境外人口": "4"
            }],
            "percentList": ["48%", "33%", "17%", "0%", "0%", "0%", "0%"],
            "max": 11405,
            "valueList": ["11405", "7811", "4169", "10", "6", "61", "4"],
            "nameList": ["常住人口", "户籍人口", "未落户人口", "流动人口", "外出人口", "空挂人口", "境外人口"]
        }),
        "BuildingGroupForEcharts": this.useData({
            "nameSubList": ["住房", "办公楼", "工厂", "公园/景点", "其他", "公寓", "院落"],
            "nameValueList": [{
                "住房": "112"
            }, {
                "办公楼": "6"
            }, {
                "工厂": "3"
            }, {
                "公园/景点": "3"
            }, {
                "其他": "1"
            }, {
                "公寓": "1"
            }, {
                "院落": "1"
            }],
            "percentList": ["88%", "4%", "2%", "2%", "0%", "0%", "0%"],
            "max": 112,
            "valueList": ["112", "6", "3", "3", "1", "1", "1"],
            "nameList": ["住房", "办公楼", "工厂", "公园/景点", "其他", "公寓", "院落"]
        }),
        "MajoreventsOldMonthForEcharts": this.useData({
            "max": 0,
            "valueList": [0, 0, 0, 0, 0, 0],
            "nameList": ["05月", "06月", "07月", "08月", "09月", "10月"],
            "sum": 0,
            "nvList": [{
                "name": "05月",
                "value": 0
            }, {
                "name": "06月",
                "value": 0
            }, {
                "name": "07月",
                "value": 0
            }, {
                "name": "08月",
                "value": 0
            }, {
                "name": "09月",
                "value": 0
            }, {
                "name": "10月",
                "value": 0
            }]
        }),
        "KeyPersonGroupForEcharts": this.useData({
            "nameSubList": ["刑满释放人", "社区矫正人", "吸毒人员", "精神病人员", "艾滋病人群", "重点青少年"],
            "nameValueList": [{
                "刑满释放人员": "2"
            }, {
                "社区矫正人员": "5"
            }, {
                "吸毒人员": "3"
            }, {
                "精神病人员": "1"
            }, {
                "艾滋病人群": "1"
            }, {
                "重点青少年": "1"
            }],
            "percentList": ["15%", "38%", "23%", "7%", "7%", "7%"],
            "max": 5,
            "valueList": ["2", "5", "3", "1", "1", "1"],
            "nameList": ["刑满释放人员", "社区矫正人员", "吸毒人员", "精神病人员", "艾滋病人群", "重点青少年"]
        }),
        "MajorEventsTypeForEcharts": this.useData({
            "nameSubList": ["安全事故", "有关刑事案", "其他"],
            "nameValueList": [{
                "安全事故": "1"
            }, {
                "有关刑事案件": "2"
            }, {
                "其他": "2"
            }],
            "percentList": ["20%", "40%", "40%"],
            "max": 2,
            "valueList": ["1", "2", "2"],
            "nameList": ["安全事故", "有关刑事案件", "其他"]
        }),
        "AttachmentsTypeGroupForEcharts": this.useData({
            "nameSubList": ["路灯", "健身器材", "宣传栏", "其他", "摄像头", "垃圾桶", "消防"],
            "nameValueList": [{
                "路灯": "3"
            }, {
                "健身器材": "2"
            }, {
                "宣传栏": "2"
            }, {
                "其他": "4"
            }, {
                "摄像头": "2"
            }, {
                "垃圾桶": "1"
            }, {
                "消防": "2"
            }],
            "percentList": ["18%", "12%", "12%", "25%", "12%", "6%", "12%"],
            "max": 4,
            "valueList": ["3", "2", "2", "4", "2", "1", "2"],
            "nameList": ["路灯", "健身器材", "宣传栏", "其他", "摄像头", "垃圾桶", "消防"]
        }),
        "WorkplanTypeForEcharts": this.useData({
            "nameSubList": ["其他", "高新区", "旅游区综治"],
            "nameValueList": [{
                "其他": "24"
            }, {
                "高新区": "5"
            }, {
                "旅游区综治委": "1"
            }],
            "percentList": ["80%", "16%", "3%"],
            "max": 24,
            "valueList": ["24", "5", "1"],
            "nameList": ["其他", "高新区", "旅游区综治委"]
        }),
        "keyeventsListSimple": this.useData([{
            "name": "待接收",
            "event_name": "扳倒井新村井盖损坏",
            "keyevents_center": "117.834018,37.160788",
            "keyevents_id": 138,
            "add_time": "20200925",
            "occurrence_time": "2020-09-25 20:47:02"
        }]),
        "jysybz": 0,
        "cjrbz": 0,
        "cxdb": 0,
        "czbz": 0,
        "BigDataAreaStatisticsCustomize": this.useData({
            "visit_count": 6,
            "enterprise_count": 18,
            "party_communist_count": 12,
            "keyevents_count": 123,
            "house_count": 3653,
            "attachments_count": 16,
            "party_org_count": 16,
            "people_count": 11421,
            "building_count": 127,
            "party_meeting_count": 22
        })
    }
    this.PARTY = {
        "PartyStatisticsCustomize": this.useData({
            "communist_count": 9,
            "meeting_count": 4,
            "change_communist_count": 2,
            "party_org_count": 8
        }),
        "CommunistCountByAreaId": this.useData({
            "communist_count": 9
        }),
        "ChangeCommunistCountByAreaId": this.useData({
            "change_communist_count": 2
        }),
        "MeetingCountByAreaId": this.useData({
            "meeting_count": 4
        }),
        "PartyOrgCountByAreaId": this.useData({
            "party_count": 1
        }),
        "PartyOrgGroupForEcharts": this.useData({
            "nameSubList": ["默认根网格", "花苑社区", "黄屯社区", "济安社区", "民安社区", "天成社区", "花苑一网格"],
            "nameValueList": [{
                "默认根网格": "3"
            }, {
                "花苑社区": "2"
            }, {
                "黄屯社区": "1"
            }, {
                "济安社区": "1"
            }, {
                "民安社区": "1"
            }, {
                "天成社区": "5"
            }, {
                "花苑一网格": "3"
            }],
            "percentList": ["18%", "12%", "6%", "6%", "6%", "31%", "18%"],
            "max": 5,
            "valueList": ["3", "2", "1", "1", "1", "5", "3"],
            "nameList": ["默认根网格", "花苑社区", "黄屯社区", "济安社区", "民安社区", "天成社区", "花苑一网格"]
        }),
        "PartyCommunistGroupForEcharts": this.useData({
            "nameSubList": ["党支部名称", "历山社区党", "历山第一党", "新东方花园", "甸柳党支部"],
            "nameValueList": [{
                "党支部名称": "4"
            }, {
                "历山社区党支部": "2"
            }, {
                "历山第一党支部": "1"
            }, {
                "新东方花园党支部": "1"
            }, {
                "甸柳党支部一部": "1"
            }],
            "percentList": ["44%", "22%", "11%", "11%", "11%"],
            "max": 4,
            "valueList": ["4", "2", "1", "1", "1"],
            "nameList": ["党支部名称", "历山社区党支部", "历山第一党支部", "新东方花园党支部", "甸柳党支部一部"]
        }),
        "PartyDocumentaryGroupForEcharts": this.useData({
            "nameSubList": ["入党申请书", "入党积极分", "党员发展对", "预备党员"],
            "nameValueList": [{
                "入党申请书": "3"
            }, {
                "入党积极分子": "1"
            }, {
                "党员发展对象": "2"
            }, {
                "预备党员": "1"
            }],
            "percentList": ["42%", "14%", "28%", "14%"],
            "max": 3,
            "valueList": ["3", "1", "2", "1"],
            "nameList": ["入党申请书", "入党积极分子", "党员发展对象", "预备党员"]
        }),
        "PartyMeetingTypeCountByAreaId": this.useData({
            "nameList": ["济安社区党委", "民安社区党委", "花苑社区党委", "黄屯社区党委"],
            "valueList1": [3, 5, 3, 3],
            "valueList2": [2, 0, 1, 1],
            "valueList3": [1, 0, 0, 0],
            "valueList4": [0, 0, 1, 1]
        }),
        "PartyTransGroupForEcharts": this.useData({
            "in": {
                "max": 3,
                "valueList": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
                "nameList": ["11月", "12月", "01月", "02月", "03月", "04月", "05月", "06月", "07月", "08月", "09月", "10月"],
                "sum": 3,
                "nvList": [{
                    "name": "11月",
                    "value": 0
                }, {
                    "name": "12月",
                    "value": 0
                }, {
                    "name": "01月",
                    "value": 0
                }, {
                    "name": "02月",
                    "value": 0
                }, {
                    "name": "03月",
                    "value": 0
                }, {
                    "name": "04月",
                    "value": 0
                }, {
                    "name": "05月",
                    "value": 0
                }, {
                    "name": "06月",
                    "value": 0
                }, {
                    "name": "07月",
                    "value": 0
                }, {
                    "name": "08月",
                    "value": 0
                }, {
                    "name": "09月",
                    "value": 0
                }, {
                    "name": "10月",
                    "value": 3
                }]
            },
            "out": {
                "max": 0,
                "valueList": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                "nameList": ["11月", "12月", "01月", "02月", "03月", "04月", "05月", "06月", "07月", "08月", "09月", "10月"],
                "sum": 0,
                "nvList": [{
                    "name": "11月",
                    "value": 0
                }, {
                    "name": "12月",
                    "value": 0
                }, {
                    "name": "01月",
                    "value": 0
                }, {
                    "name": "02月",
                    "value": 0
                }, {
                    "name": "03月",
                    "value": 0
                }, {
                    "name": "04月",
                    "value": 0
                }, {
                    "name": "05月",
                    "value": 0
                }, {
                    "name": "06月",
                    "value": 0
                }, {
                    "name": "07月",
                    "value": 0
                }, {
                    "name": "08月",
                    "value": 0
                }, {
                    "name": "09月",
                    "value": 0
                }, {
                    "name": "10月",
                    "value": 0
                }]
            }
        }),
        "PartyNodesTypeForEcharts": this.useData({
            "nameSubList": ["学习笔记", "会议笔记"],
            "nameValueList": [{
                "学习笔记": "2"
            }, {
                "会议笔记": "1"
            }],
            "percentList": ["66%", "33%"],
            "max": 2,
            "valueList": ["2", "1"],
            "nameList": ["学习笔记", "会议笔记"]
        }),
        "PartyMeetingTypeForEcharts": this.useData({
            "nameSubList": ["党课", "支部大会"],
            "nameValueList": [{
                "党课": "2"
            }, {
                "支部大会": "2"
            }],
            "percentList": ["50%", "50%"],
            "max": 2,
            "valueList": ["2", "2"],
            "nameList": ["党课", "支部大会"]
        })
    };

    this.LIVEL = {
        "MerchantGroupForEcharts": this.useData({
            "nameSubList": ["餐饮"],
            "nameValueList": [{
                "餐饮": "4"
            }],
            "percentList": ["100%"],
            "max": 4,
            "valueList": ["4"],
            "nameList": ["餐饮"]
        }),
        "LifeWorkOrderGroupForEcharts": this.useData({
            "nameSubList": ["供热故障", "给水故障", "排水故障", "配电故障", "装修损坏"],
            "nameValueList": [{
                "供热故障": "2"
            }, {
                "给水故障": "2"
            }, {
                "排水故障": "1"
            }, {
                "配电故障": "1"
            }, {
                "装修损坏": "1"
            }],
            "percentList": ["28%", "28%", "14%", "14%", "14%"],
            "max": 2,
            "valueList": ["2", "2", "1", "1", "1"],
            "nameList": ["供热故障", "给水故障", "排水故障", "配电故障", "装修损坏"]
        }),
        "LifePovertyGroupForEcharts": this.useData({
            "nameSubList": ["天舒居", "网格200"],
            "nameValueList": [{
                "天舒居": "1"
            }, {
                "网格200925": "1"
            }],
            "percentList": ["50%", "50%"],
            "max": 1,
            "valueList": ["1", "1"],
            "nameList": ["天舒居", "网格200925"]
        }),
        "OnlineServicesTypeForEcharts": this.useData({
            "nameSubList": ["残疾人补助", "就业保障", "贫困补助", "社保缴纳", "企业扶持"],
            "nameValueList": [{
                "残疾人补助": "0"
            }, {
                "就业保障": "0"
            }, {
                "贫困补助": "0"
            }, {
                "社保缴纳": "0"
            }, {
                "企业扶持": "0"
            }],
            "percentList": ["0%", "0%", "0%", "0%", "0%"],
            "max": 0,
            "valueList": ["0", "0", "0", "0", "0"],
            "nameList": ["残疾人补助", "就业保障", "贫困补助", "社保缴纳", "企业扶持"]
        }),
        "LifeServiceByMonthForEcharts": this.useData({
            "max": 3,
            "valueList": [0, 0, 0, 0, 0, 3],
            "nameList": ["05月", "06月", "07月", "08月", "09月", "10月"],
            "sum": 3,
            "nvList": [{
                "name": "05月",
                "value": 0
            }, {
                "name": "06月",
                "value": 0
            }, {
                "name": "07月",
                "value": 0
            }, {
                "name": "08月",
                "value": 0
            }, {
                "name": "09月",
                "value": 0
            }, {
                "name": "10月",
                "value": 3
            }]
        }),
        "LifeOldByAreaForEcharts": this.useData({
            "nameSubList": ["测试社区", "天舒居", "网格200"],
            "nameValueList": [{
                "测试社区": "1"
            }, {
                "天舒居": "1"
            }, {
                "网格2009251659": "1"
            }],
            "percentList": ["33%", "33%", "33%"],
            "max": 1,
            "valueList": ["1", "1", "1"],
            "nameList": ["测试社区", "天舒居", "网格2009251659"]
        }),
        "LifeVolunteerGroupForEcharts": this.useData({
            "nameSubList": ["王成祥", "王丽丽"],
            "nameValueList": [{
                "王成祥": "2"
            }, {
                "王丽丽": "1"
            }],
            "percentList": ["66%", "33%"],
            "max": 2,
            "valueList": ["2", "1"],
            "nameList": ["王成祥", "王丽丽"]
        }),
        "AreaVolunteerForEcharts": this.useData({
            "nameSubList": ["王成祥", "王丽丽"],
            "nameValueList": [{
                "王成祥": "2"
            }, {
                "王丽丽": "1"
            }],
            "percentList": ["66%", "33%"],
            "max": 2,
            "valueList": ["2", "1"],
            "nameList": ["王成祥", "王丽丽"]
        }),
        "LifeStatisticsCustomize": this.useData({
            "oldpeople_service_count": 4,
            "onlineService_count": 0,
            "activity_count": 4,
            "volunteer_count": 2,
            "helper_count": 2
        }),


    }

    this.CITY = {
        "CityStatisticsCustomize": this.useData({
            "majorevents_count": 5,
            "keyevents_count": 12,
            "attachments_count": 10,
            "poll_count": 7
        }),
        "AttachmentsCountForEcharts": this.useData({
            "nameSubList": ["网格200", "测试社区", "社区200", "召一网格"],
            "nameValueList": [{
                "网格200925": "4"
            }, {
                "测试社区": "3"
            }, {
                "社区200925": "2"
            }, {
                "召一网格": "1"
            }],
            "percentList": ["40%", "30%", "20%", "10%"],
            "max": 4,
            "valueList": ["4", "3", "2", "1"],
            "nameList": ["网格200925", "测试社区", "社区200925", "召一网格"]
        }),
        "AttachmentsGroupForEcharts": this.useData({
            "nameSubList": ["路灯", "摄像头", "消防", "井盖"],
            "nameValueList": [{
                "路灯": "3"
            }, {
                "摄像头": "5"
            }, {
                "消防": "1"
            }, {
                "井盖": "1"
            }],
            "percentList": ["30%", "50%", "10%", "10%"],
            "max": 5,
            "valueList": ["3", "5", "1", "1"],
            "nameList": ["路灯", "摄像头", "消防", "井盖"]
        }),
        "KeyeventsGroupForEcharts": this.useData({
            "nameSubList": ["待接收", "待处理", "已完结"],
            "nameValueList": [{
                "待接收": "3"
            }, {
                "待处理": "6"
            }, {
                "已完结": "3"
            }],
            "percentList": ["25%", "50%", "25%"],
            "max": 6,
            "valueList": ["3", "6", "3"],
            "nameList": ["待接收", "待处理", "已完结"]
        }),
        "KeyeventsCountForEcharts": this.useData({
            "nameSubList": ["默认社区", "天舒居", "测试社区", "新东方花园", "甸柳社区", "社区200", "网格200"],
            "nameValueList": [{
                "默认社区": "3"
            }, {
                "天舒居": "2"
            }, {
                "测试社区": "2"
            }, {
                "新东方花园一网格": "2"
            }, {
                "甸柳社区": "1"
            }, {
                "社区200925": "1"
            }, {
                "网格200925": "1"
            }],
            "percentList": ["25%", "16%", "16%", "16%", "8%", "8%", "8%"],
            "max": 3,
            "valueList": ["3", "2", "2", "2", "1", "1", "1"],
            "nameList": ["默认社区", "天舒居", "测试社区", "新东方花园一网格", "甸柳社区", "社区200925", "网格200925"]
        }),
        "PersonnelInspectionForEcharts": this.useData({
            "nameSubList": ["演示网格长"],
            "nameValueList": [{
                "演示网格长": "3"
            }],
            "percentList": ["100%"],
            "max": 3,
            "valueList": ["3"],
            "nameList": ["演示网格长"]
        }),
        "KeyeventsCategoryForEcharts": this.useData({
            "nameSubList": ["城市部件", "城市管理", "综合治理"],
            "nameValueList": [{
                "城市部件": "6"
            }, {
                "城市管理": "2"
            }, {
                "综合治理": "4"
            }],
            "percentList": ["50%", "16%", "33%"],
            "max": 6,
            "valueList": ["6", "2", "4"],
            "nameList": ["城市部件", "城市管理", "综合治理"]
        })
    }
    this.POPULACE = {
        "PeopleGroupCountByAreaIdForInfo": this.useData([{
            "people_type": "live",
            "people_count": 42,
            "people_type_name": "常住人口"
        }, {
            "people_type": "registration",
            "people_count": 18,
            "people_type_name": "户籍人口"
        }, {
            "people_type": "notsettled",
            "people_count": 33,
            "people_type_name": "未落户人口"
        }, {
            "people_type": "flow",
            "people_count": 6,
            "people_type_name": "流动人口"
        }, {
            "people_type": "out",
            "people_count": 2,
            "people_type_name": "外出人口"
        }, {
            "people_type": "hanging",
            "people_count": 14,
            "people_type_name": "空挂人口"
        }, {
            "people_type": "overseas",
            "people_count": 4,
            "people_type_name": "境外人口"
        }]),
        "HouseGroupForEcharts": this.useData({
            "nameSubList": ["常住", "空房", "租赁", "流动"],
            "nameValueList": [{
                "常住": "2081"
            }, {
                "空房": "410"
            }, {
                "租赁": "9"
            }, {
                "流动": "2"
            }],
            "percentList": ["83%", "16%", "0%", "0%"],
            "max": 2081,
            "valueList": ["2081", "410", "9", "2"],
            "nameList": ["常住", "空房", "租赁", "流动"]
        }),
        "PeopleGroupByTypeForEchartsnation": this.useData({
            "nameSubList": ["汉族", "蒙古族", "傈僳族"],
            "nameValueList": [{
                "汉族": "42"
            }, {
                "蒙古族": "2"
            }, {
                "傈僳族": "1"
            }],
            "percentList": ["93%", "4%", "2%"],
            "max": 42,
            "valueList": ["42", "2", "1"],
            "nameList": ["汉族", "蒙古族", "傈僳族"]
        }),
        "PeopleGroupByTypeForEchartsmarital": this.useData({
            "nameSubList": ["其他", "已婚"],
            "nameValueList": [{
                "其他": "1"
            }, {
                "已婚": "5"
            }],
            "percentList": ["16%", "83%"],
            "max": 5,
            "valueList": ["1", "5"],
            "nameList": ["其他", "已婚"]
        }),
        "PeopleGroupByTypeForEchartssex": this.useData({
            "nameSubList": ["男", "女"],
            "nameValueList": [{
                "男": "39"
            }, {
                "女": "9"
            }],
            "percentList": ["81%", "18%"],
            "max": 39,
            "valueList": ["39", "9"],
            "nameList": ["男", "女"]
        }),
        "PeopleGroupByTypeForEchartscard": this.useData({
            "nameSubList": ["社保信息", "低保/五保", "空挂人口", "残疾人员", "退役军人", "党员信息", "育龄人员", "流动人员", "信访人员", "贫困人员"],
            "nameValueList": [{
                "社保信息": "2454"
            }, {
                "低保/五保人员": "777"
            }, {
                "空挂人口": "61"
            }, {
                "残疾人员": "53"
            }, {
                "退役军人": "38"
            }, {
                "党员信息": "22"
            }, {
                "育龄人员": "12"
            }, {
                "流动人员": "10"
            }, {
                "信访人员": "10"
            }, {
                "贫困人员": "7"
            }],
            "percentList": ["71%", "22%", "1%", "1%", "1%", "0%", "0%", "0%", "0%", "0%"],
            "max": 2454,
            "valueList": ["2454", "777", "61", "53", "38", "22", "12", "10", "10", "7"],
            "nameList": ["社保信息", "低保/五保人员", "空挂人口", "残疾人员", "退役军人", "党员信息", "育龄人员", "流动人员", "信访人员", "贫困人员"]
        }),
        "PeopleGroupByTypeForEchartsbelief": this.useData({
            "nameSubList": ["博士", "硕士", "本科"],
            "nameValueList": [{
                "博士": "1"
            }, {
                "硕士": "1"
            }, {
                "本科": "4"
            }],
            "percentList": ["16%", "16%", "66%"],
            "max": 4,
            "valueList": ["1", "1", "4"],
            "nameList": ["博士", "硕士", "本科"]
        })
    }

    this.TREATMMENT = {
        "PsStatisticsCustomize": this.useData({
            "majorevents_count": 5,
            "org_count": 6,
            "keyevents_count": 12,
            "key_young_count": 3,
            "special_people_count": 3
        }),
        "SpecialPersonGroupForEcharts": this.useData({
            "nameSubList": ["刑满释放人", "社区矫正人", "吸毒人员", "精神病人员", "艾滋病人群"],
            "nameValueList": [{
                "刑满释放人员": "2"
            }, {
                "社区矫正人员": "2"
            }, {
                "吸毒人员": "1"
            }, {
                "精神病人员": "1"
            }, {
                "艾滋病人群": "1"
            }],
            "percentList": ["28%", "28%", "14%", "14%", "14%"],
            "max": 2,
            "valueList": ["2", "2", "1", "1", "1"],
            "nameList": ["刑满释放人员", "社区矫正人员", "吸毒人员", "精神病人员", "艾滋病人群"]
        }),
        "KeyYoungPeopleTypeForEcharts": this.useData({
            "nameSubList": ["服役人员未", "闲散青少年"],
            "nameValueList": [{
                "服役人员未成年子女": "1"
            }, {
                "闲散青少年": "4"
            }],
            "percentList": ["20%", "80%"],
            "max": 4,
            "valueList": ["1", "4"],
            "nameList": ["服役人员未成年子女", "闲散青少年"]
        }),
        "VisitCountByMonth": this.useData({
            "max": 1,
            "valueList": [0, 0, 0, 0, 1, 1],
            "nameList": ["05月", "06月", "07月", "08月", "09月", "10月"],
            "sum": 2,
            "nvList": [{
                "name": "05月",
                "value": 0
            }, {
                "name": "06月",
                "value": 0
            }, {
                "name": "07月",
                "value": 0
            }, {
                "name": "08月",
                "value": 0
            }, {
                "name": "09月",
                "value": 1
            }, {
                "name": "10月",
                "value": 1
            }]
        }),
        "KeyeventsStatusGroupForEcharts": this.useData({
            "nameSubList": ["待处理", "待接收"],
            "nameValueList": [{
                "待处理": "6"
            }, {
                "待接收": "3"
            }],
            "percentList": ["66%", "33%"],
            "max": 6,
            "valueList": ["6", "3"],
            "nameList": ["待处理", "待接收"]
        }),
        "KeyeventsCountByMonthForEcharts": this.useData({
            "max": 5,
            "valueList": [0, 0, 0, 0, 5, 1],
            "nameList": ["05月", "06月", "07月", "08月", "09月", "10月"],
            "sum": 6,
            "nvList": [{
                "name": "05月",
                "value": 0
            }, {
                "name": "06月",
                "value": 0
            }, {
                "name": "07月",
                "value": 0
            }, {
                "name": "08月",
                "value": 0
            }, {
                "name": "09月",
                "value": 5
            }, {
                "name": "10月",
                "value": 1
            }]
        }),
        "MajorEventsTypeForEcharts": this.useData({
            "nameSubList": ["安全事故"],
            "nameValueList": [{
                "安全事故": "5"
            }],
            "percentList": ["100%"],
            "max": 5,
            "valueList": ["5"],
            "nameList": ["安全事故"]
        })
    };

    this.WORK = {
        "WorkStatisticsCustomize": this.useData({
            "work_log_count": 5,
            "work_plan_count": 8,
            "survey_count": 10,
            "forum_count": 6
        }),
        "WorklogForEcharts": this.useData({
            "nameSubList": ["历斌", "王亚丽"],
            "nameValueList": [{
                "历斌": "3"
            }, {
                "王亚丽": "1"
            }],
            "percentList": ["75%", "25%"],
            "max": 3,
            "valueList": ["3", "1"],
            "nameList": ["历斌", "王亚丽"]
        }),
        "WorkPlanStatusForEcharts": this.useData({
            "nameSubList": ["还未开始", "正在进行", "已完成"],
            "nameValueList": [{
                "还未开始": "4"
            }, {
                "正在进行": "3"
            }, {
                "已完成": "1"
            }],
            "percentList": ["50%", "37%", "12%"],
            "max": 4,
            "valueList": ["4", "3", "1"],
            "nameList": ["还未开始", "正在进行", "已完成"]
        }),
        "WorkExecutorForEcharts": this.useData({
            "nameSubList": ["演示网格长", "历斌", "李琳", "王亚丽"],
            "nameValueList": [{
                "演示网格长": "2"
            }, {
                "历斌": "2"
            }, {
                "李琳": "2"
            }, {
                "王亚丽": "2"
            }],
            "percentList": ["25%", "25%", "25%", "25%"],
            "max": 2,
            "valueList": ["2", "2", "2", "2"],
            "nameList": ["演示网格长", "历斌", "李琳", "王亚丽"]
        }),
        "WorkPerformanceForEcharts": this.useData({
            "nameSubList": ["90分以上", "81-90", "71-80", "60-70", "60分以下"],
            "nameValueList": [{
                "90分以上": "3"
            }, {
                "81-90分": "2"
            }, {
                "71-80分": "1"
            }, {
                "60-70分": "1"
            }, {
                "60分以下": "3"
            }],
            "percentList": ["30%", "20%", "10%", "10%", "30%"],
            "max": 3,
            "valueList": ["3", "2", "1", "1", "3"],
            "nameList": ["90分以上", "81-90分", "71-80分", "60-70分", "60分以下"]
        }),
        "WorkIntegralForEcharts": this.useData({
            "nameSubList": ["演示网格长", "历斌", "李琳", "王亚丽", "李恩浩", "王成祥"],
            "nameValueList": [{
                "演示网格长": "1775"
            }, {
                "历斌": "8"
            }, {
                "李琳": "26"
            }, {
                "王亚丽": "21"
            }, {
                "李恩浩": "1"
            }, {
                "王成祥": "1"
            }],
            "percentList": ["96%", "0%", "1%", "1%", "0%", "0%"],
            "max": 1775,
            "valueList": ["1775", "8", "26", "21", "1", "1"],
            "nameList": ["演示网格长", "历斌", "李琳", "王亚丽", "李恩浩", "王成祥"]
        }),
        "WorkVisitForEcharts": this.useData({
            "nameSubList": ["演示网格长", "王工作", "社区书记"],
            "nameValueList": [{
                "演示网格长": "3"
            }, {
                "王工作": "1"
            }, {
                "社区书记": "2"
            }],
            "percentList": ["42%", "14%", "28%"],
            "max": 3,
            "valueList": ["3", "1", "2"],
            "nameList": ["演示网格长", "王工作", "社区书记"]
        })
    }
}

//方法参数代表是否启用模拟数据  false关闭  true启用
var DATA_TMP = new SetJson(false);