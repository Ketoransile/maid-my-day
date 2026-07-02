import type { DeepPartial, Translations } from "../../types";

/** Simplified Chinese translations for shared homepage / inner-page chrome sections */
export const coreSectionsZh: Pick<
  DeepPartial<Translations>,
  | "testimonials"
  | "mission"
  | "faq"
  | "contact"
  | "pageHero"
  | "pageCta"
> = {
  testimonials: {
    eyebrow: "客户故事",
    title: "客户怎么说",
    description:
      "来自外籍人士及我们在亚的斯亚贝巴协助安顿的家庭的真实体验。",
    items: [
      {
        name: "James Holloway",
        role: "联合国顾问，亚的斯亚贝巴",
        quote:
          "在新城市找家政人员感觉几乎不可能。Maid My Day 几天内就安排好了人选。如释重负。",
      },
      {
        name: "Sophie Renard",
        role: "使馆工作人员，法国大使馆",
        quote:
          "我们的司机已陪伴我们两年。守时、安全、友善。接送上学正是我们所需要的。",
      },
      {
        name: "Marcus Webb",
        role: "非政府组织主任，2023年搬迁",
        quote:
          "搬迁支持非常顺畅。他们帮我们找到公寓、开通水电，并为我们的狗安排了宠物照护。",
      },
      {
        name: "Elena Vasquez",
        role: "外交随员，欧盟代表团",
        quote:
          "第一次通话他们就理解了我们的家庭需求。他们推荐的家政人员细心周到，至今仍在为我们服务。",
      },
      {
        name: "David Okonkwo",
        role: "企业外派人员，博莱",
        quote:
          "我们急需司机和家居管理支持。Maid My Day 一周内就安排到位。无可挑剔。",
      },
      {
        name: "Amara Chen",
        role: "研究员，2024年搬迁",
        quote:
          "我独自抵达亚的斯亚贝巴，感到不知所措。他们让第一个月变得可控。温暖而坦诚。",
      },
    ],
  },
  mission: {
    eyebrow: "我们的使命",
    title: "让外派家庭在亚的斯亚贝巴的生活更轻松",
    description:
      "通过值得信赖的家居与搬迁支持，让在亚的斯亚贝巴的生活更简单、更整洁、更舒适。",
    body: "Maid My Day 致力于减轻安顿压力。我们在每一步都为外籍人士、外交人员、使馆工作人员及国际专业人士提供支持。",
    mainImageAlt: "亚的斯亚贝巴舒适的家",
    serviceOrbits: [
      { id: "housing", label: "住房", alt: "住房与搬迁支持" },
      { id: "housemaids", label: "家政", alt: "专业家政人员" },
      { id: "drivers", label: "司机", alt: "专业司机" },
      { id: "petCare", label: "宠物", alt: "宠物照护服务" },
      { id: "homeManagement", label: "家居管理", alt: "家居管理服务" },
      { id: "childcare", label: "儿童照护", alt: "儿童照护与保姆服务" },
    ],
    pillars: [
      {
        title: "找到您的家",
        detail: "搬迁支持，助您安顿到合适的社区与住所。",
      },
      {
        title: "聘用值得信赖的员工",
        detail: "经过严格筛选的家政人员、司机及家庭帮手，值得您信赖。",
      },
      {
        title: "保持井然有序",
        detail: "日常家居管理，让您的生活在亚的斯亚贝巴顺畅运转。",
      },
    ],
  },
  faq: {
    eyebrow: "常见问题",
    title: "常见问题解答",
    description: "关于我们如何运作的简明回答，无专业术语。",
    items: [
      {
        question: "你们如何筛选家政和员工？",
        answer:
          "每位候选人都经过多步流程：申请审核、面对面面试、背景核查及推荐人调查。我们只向客户推荐完全符合我们标准的人选。",
      },
      {
        question: "正式聘用前能否先见见员工？",
        answer:
          "可以。任何安排上岗前我们都会组织见面会。您有权在有人进入家中之前完全放心。",
      },
      {
        question: "亚的斯亚贝巴哪些区域有服务？",
        answer:
          "我们在博莱、卡扎恩西斯、CMC、旧机场、萨尔贝特及亚的斯亚贝巴所有主要住宅区提供服务。",
      },
      {
        question: "如果推荐的家政不合适怎么办？",
        answer:
          "我们提供替换保障。告诉我们哪里不合适，我们会寻找更合适的选项，不收取额外安置费。",
      },
      {
        question: "你们是否为刚到亚的斯的外籍人士提供搬迁支持？",
        answer:
          "是的。我们提供完整搬迁套餐——找房、安顿支持、水电开通及员工安置。",
      },
      {
        question: "联系你们后服务多快能开始？",
        answer:
          "大多数初次咨询我们会在24小时内回复，并在数日内完成员工安置。",
      },
    ],
  },
  contact: {
    eyebrow: "联系我们",
    title: "Maid My Day 家居与搬迁",
    description:
      "告诉我们您的需求，我们将在24小时内回复。无压力，无强制承诺。",
    availabilityNote: "周一至周六。大多数回复在24小时内送达。",
    infoLabels: { phone: "电话", email: "邮箱", location: "地址" },
    form: {
      heading: "发送消息",
      fields: {
        fullName: "姓名",
        email: "邮箱",
        phone: "电话",
        services: "您需要什么服务？",
        message: "您的留言",
      },
      placeholders: {
        name: "您的姓名",
        email: "you@email.com",
        phone: "+251 ...",
        message: "请简要说明您的家庭情况、时间安排及所需帮助。",
      },
      servicePicker: {
        placeholder: "选择服务",
        ariaAvailable: "可选服务",
        ariaSelected: "已选服务",
        allSelected: "已选择全部服务",
        removeAria: "移除{label}",
      },
      serviceOptions: [
        { value: "relocation", label: "住房与搬迁支持" },
        { value: "housemaid", label: "专业家政人员" },
        { value: "driver", label: "专业司机" },
        { value: "pet-care", label: "宠物照护服务" },
        { value: "management", label: "家居管理" },
        { value: "childcare", label: "儿童照护与保姆" },
        { value: "other", label: "其他需求" },
      ],
      submit: "发送消息",
      submitting: "发送中...",
      errors: { selectService: "请至少选择一项服务。" },
      toasts: {
        selectService: {
          title: "请至少选择一项服务",
          description: "发送消息前请选择您需要的服务。",
        },
        success: {
          title: "消息发送成功",
          description: "我们已收到您的请求，将在24小时内回复。",
        },
        error: {
          title: "消息发送失败",
          description: "出了点问题，请稍后再试。",
        },
      },
    },
  },
  pageHero: {
    services: {
      eyebrow: "我们的服务",
      title: "亚的斯亚贝巴高端家居与搬迁服务",
      description:
        "从找公寓到专业家政、司机及宠物照护——Maid My Day 让您的家舒适安心。",
    },
    howItWorks: {
      eyebrow: "服务流程",
      title: "从初次咨询到顺利安顿",
      description:
        "为国际家庭设计的简明流程。标准清晰、员工经过筛选、上岗后持续支持。",
    },
    whyUs: {
      eyebrow: "为什么选择 Maid My Day",
      title: "国际家庭信赖的专业服务",
      description:
        "我们了解外交人员、使馆工作人员及在亚的斯亚贝巴的外籍家庭——提供真正有效的日常支持。",
    },
    faq: {
      eyebrow: "帮助中心",
      title: "事先了解清楚",
      description:
        "关于筛选、安置、套餐、价格及持续支持——用通俗语言解答。",
    },
    contact: {
      eyebrow: "联系我们",
      title: "告诉我们您的家庭需要什么",
      description:
        "无论您下周就需要帮助还是本周就要支援，我们的团队将在24小时内给出明确下一步。",
    },
  },
  pageCta: {
    services: {
      title: "准备好组建您的家庭团队了吗？",
      description:
        "告诉我们您的需求——搬迁、家政、司机或全面管理——我们将在24小时内制定方案。",
      secondaryLabel: "服务流程",
    },
    howItWorks: {
      title: "从一次对话开始",
      description: "无需冗长表格。简单介绍您的家庭情况，其余交给我们。",
      secondaryLabel: "为什么选择我们",
    },
    whyUs: {
      title: "了解值得信赖的不同之处",
      description:
        "众多外籍家庭选择 Maid My Day，获得专业的家居支持。",
      secondaryLabel: "阅读常见问题",
    },
    faq: {
      title: "还有疑问？",
      description:
        "我们的团队乐意了解您的具体情况——家庭规模、时间安排及预算。",
      secondaryLabel: "我们的服务",
    },
    contact: {
      title: "想先聊聊您的需求？",
      description:
        "致电 +251 911 000 000 或发邮件至 hello@maidmyday.com。周一至周六，我们随时为您服务。",
      primaryLabel: "致电我们",
      secondaryLabel: "查看服务",
    },
  },
};
