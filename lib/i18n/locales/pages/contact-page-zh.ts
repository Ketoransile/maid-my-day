import type { DeepPartial, Translations } from "../../types";

export const contactPageZh: DeepPartial<Translations>["contactPage"] = {
  afterContact: {
    eyebrow: "接下来会发生什么",
    title: "发送消息后",
    description:
      "不是石沉大海的收件箱。以下是我们处理亚的斯亚贝巴外派家庭每一条咨询的明确流程。",
  },
  afterContactSteps: [
    {
      title: "我们阅读您的留言",
      description: "专属协调员审阅您的家庭情况——与工作日一样认真对待。",
    },
    {
      title: "24小时内回复",
      description: "个性化回复您的具体问题、下一步或通话时间——不是自动回复。",
    },
    {
      title: "制定您的方案",
      description: "根据候选人名单、看房或紧急见面会等需求进行安排。",
    },
    {
      title: "持续跟进",
      description: "上岗后您仍由同一团队负责调整、增员及反馈处理。",
    },
  ],
  office: {
    eyebrow: "办公室与营业时间",
    title: "如何联系我们",
    description:
      "总部位于亚的斯亚贝巴，服务全市国际家庭。我们用通俗英语回复——需要时可协调阿姆哈拉语或法语。",
    labels: {
      officeHours: "办公时间",
      responseTime: "回复时间",
      languages: "语言",
      coverage: "服务范围",
    },
    hours: "周一至周六，8:30 – 18:00（东非时间）",
    response: "大多数咨询在24小时内回复",
    languages: "提供英语、阿姆哈拉语及法语服务",
    coverage: "亚的斯亚贝巴所有主要住宅区",
  },
  prepTips: {
    eyebrow: "写信前",
    title: "更快获得有用回复的建议",
    description: "在留言中包含以下信息，我们能在首次回复中提供更有针对性的帮助。",
  },
  prepTipsItems: [
    { title: "说明您的时间", detail: "抵达日期、租约开始日或员工需求的紧急程度。" },
    { title: "介绍您的家庭", detail: "子女、宠物、住家/不住家及使用语言。" },
    { title: "列出关键职责", detail: "学校接送、烹饪、清洁、宠物遛弯。" },
    { title: "告知所在区域", detail: "博莱、卡扎恩西斯、CMC——影响选项及安置速度。" },
  ],
};
