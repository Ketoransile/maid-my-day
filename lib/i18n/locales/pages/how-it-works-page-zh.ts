import type { DeepPartial, Translations } from "../../types";

export const howItWorksPageZh: DeepPartial<Translations>["howItWorksPage"] = {
  detailedProcess: {
    eyebrow: "逐步说明",
    title: "您与 Maid My Day 的合作旅程",
    description:
      "从初次咨询到长期家居支持的七个清晰阶段——附带切实可行的时间预期。",
  },
  detailedProcessSteps: [
    {
      step: "01",
      title: "分享您的需求",
      description:
        "介绍您的家庭——同住人员、在亚的斯亚贝巴的位置（或预计抵达时间）及所需支持。",
      duration: "第1天",
    },
    {
      step: "02",
      title: "需求评估",
      description:
        "我们明确日程、语言、住家/不住家偏好及特殊需求（宠物、儿童、烹饪、安全）。",
      duration: "第1–2天",
    },
    {
      step: "03",
      title: "候选人名单",
      description:
        "团队从已筛选员工中挑选合适人选，24–48小时内发送名单。",
      duration: "第2–3天",
    },
    {
      step: "04",
      title: "见面会",
      description:
        "面对面或视频见面。我们鼓励提问，确保双方契合。",
      duration: "第3–5天",
    },
    {
      step: "05",
      title: "试岗与上岗",
      description:
        "短期试岗确认匹配。双方满意后，敲定协议及开工日期。",
      duration: "第1周",
    },
    {
      step: "06",
      title: "安顿支持",
      description:
        "首周我们确认日程顺畅、沟通清晰，并快速解决调整需求。",
      duration: "第2–4周",
    },
    {
      step: "07",
      title: "持续合作",
      description:
        "替换、增员、搬迁升级及家居管理——您的对接人始终在线。",
      duration: "持续",
    },
  ],
  first30Days: {
    eyebrow: "前30天",
    title: "第一个月大致安排",
    description:
      "适用于抵达亚的斯亚贝巴的家庭，或为现有家庭新增员工的情况。",
    phases: [
      {
        week: "第1周",
        title: "抵达与对接",
        items: [
          "提交咨询或预约首次通话",
          "收到候选人名单并安排见面",
          "如涉及搬迁，开始首批看房",
        ],
      },
      {
        week: "第2周",
        title: "匹配与上岗",
        items: [
          "完成家政或司机试岗",
          "如已搬迁，敲定租赁及入住",
          "确定家庭及员工日程",
        ],
      },
      {
        week: "第3–4周",
        title: "安顿与优化",
        items: [
          "与 Maid My Day 协调员进行首次跟进",
          "调整日程或工作职责",
          "按需增加宠物照护或家居管理",
        ],
      },
    ],
  },
  prepare: {
    eyebrow: "联系前准备",
    title: "建议提前准备的信息",
    description:
        "提前分享的信息越多，我们越能更快为您匹配合适员工或搬迁方案。",
  },
  preparationChecklist: [
    "预计抵达日期或目前在亚的斯亚贝巴的区域",
    "家庭规模及是否有儿童或宠物",
    "偏好安排（全职、兼职、住家/不住家）",
    "与员工沟通的语言偏好",
    "特殊职责：烹饪、清洁、行车路线、学校接送",
    "预算及时间安排——紧急或灵活",
  ],
  processFaq: {
    eyebrow: "常见问题",
    title: "关于如何开始的快速解答",
    description: "客户在首次见面前最常问的问题。",
  },
  processFaqItems: [
    {
      question: "你们能多快安排员工？",
      answer:
        "大多数咨询在24–48小时内收到候选人名单。紧急安置优先处理——许多家庭在数日内即可上岗。",
    },
    {
      question: "如果第一次匹配不合适怎么办？",
      answer:
        "我们提供替换保障。告诉我们哪里不合适，不收取额外安置费，我们会寻找更合适的选项。",
    },
    {
      question: "是否必须在抵达前联系你们？",
      answer:
        "不必。许多客户在抵达前就联系我们，提前启动找房及员工安置。",
    },
  ],
};
