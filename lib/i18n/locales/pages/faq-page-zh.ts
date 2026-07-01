import type { DeepPartial, Translations } from "../../types";

export const faqPageZh: DeepPartial<Translations>["faqPage"] = {
  moreAnswers: {
    eyebrow: "更多解答",
    title: "按主题浏览",
    description:
      "客户在安置前后常问的其他问题——涵盖合同、计费、搬迁时间及持续支持。",
  },
  extendedFaqs: [
    {
      category: "入门",
      items: [
        {
          question: "员工合同是否有最短期限？",
          answer:
            "取决于岗位类型及安排方式。许多客户试岗一至两周后签订月度协议。我们会事先说明各项选项。",
        },
        {
          question: "能否只聘用短期员工？",
          answer: "可以。我们服务来访家庭、岗位间隙及季节性需求。",
        },
        {
          question: "你们能协助工作许可或文件吗？",
          answer:
            "我们按本地劳动法规提供指导，并可对接您的法律或人力资源团队。具体文件取决于员工身份及您的签证情况。",
        },
      ],
    },
    {
      category: "员工与筛选",
      items: [
        {
          question: "家政人员是否接受培训？",
          answer:
            "我们强调清洁、洗衣、厨房卫生及沟通规范。试岗期间您也可提出额外培训要求。",
        },
        {
          question: "司机是否熟悉国际学校路线？",
          answer: "是的。我们服务博莱、旧机场及 CMC 区域的主要学校。",
        },
        {
          question: "能否要求会说英语的员工？",
          answer: "可以。语言偏好纳入我们的需求评估。",
        },
      ],
    },
    {
      category: "价格与计费",
      items: [
        {
          question: "价格如何确定？",
          answer:
            "员工薪酬在您与员工之间协商。Maid My Day 收取安置及协调服务费。咨询后我们会提供清晰报价。",
        },
        {
          question: "是否有隐藏费用？",
          answer: "没有。安置费、搬迁套餐及附加服务均事先说明。替换不收取新的安置费。",
        },
        {
          question: "能否通过雇主或使馆结算？",
          answer: "我们可与机构财务部门协商付款安排。请告知您的员工福利要求。",
        },
      ],
    },
    {
      category: "搬迁",
      items: [
        {
          question: "搬迁前多久联系你们最合适？",
          answer:
            "完整搬迁套餐建议提前四至六周。仅员工安置可在24小时内启动。",
        },
        {
          question: "如果已在亚的斯亚贝巴但对现有员工不满意？",
          answer: "可以。我们可快速提供替换及改进方案。",
        },
        {
          question: "你们能协助家具及家电采购吗？",
          answer: "我们提供指导并对接供应商。高端套餐可包含采购协调。",
        },
      ],
    },
    {
      category: "持续支持",
      items: [
        {
          question: "上岗后日程有变怎么办？",
          answer: "联系您的 Maid My Day 协调员。我们可调整时间、职责或增派员工。",
        },
        {
          question: "员工休假时能否安排替补？",
          answer: "提前通知即可安排。视时段及岗位类型而定。",
        },
        {
          question: "如何反馈员工表现？",
          answer: "通过专属电话或邮箱联系。我们会妥善处理您的反馈并寻求解决方案。",
        },
      ],
    },
  ],
  stillWondering: {
    title: "首次咨询时客户常问",
    items: [
      "如果只需要司机，你们能帮吗？",
      "下个月才到，什么时候该开始？",
      "员工是否符合使馆家庭规定？",
      "员工能用英语和孩子交流吗？",
      "上岗后需求变了怎么办？",
    ],
  },
};
