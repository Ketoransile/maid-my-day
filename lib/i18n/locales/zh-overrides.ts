import type { DeepPartial, Translations } from "../types";
import { navSubmenusZh } from "../nav-submenus";
import { servicesPageZh } from "./pages/services-page-zh";
import { coreSectionsZh } from "./pages/core-sections-zh";
import { howItWorksPageZh } from "./pages/how-it-works-page-zh";
import { whyUsPageZh } from "./pages/why-us-page-zh";
import { faqPageZh } from "./pages/faq-page-zh";
import { contactPageZh } from "./pages/contact-page-zh";

/** Simplified Chinese translations */
export const zhOverrides: DeepPartial<Translations> = {
  nav: {
    home: "首页",
    services: "服务",
    howItWorks: "服务流程",
    whyUs: "为什么选择我们",
    faq: "常见问题",
    contact: "联系",
    contactUs: "联系我们",
    openMenu: "打开菜单",
    allLinks: "全部链接",
    language: "语言",
    submenu: navSubmenusZh,
    extended: {
      about: "关于 Maid My Day",
      careers: "加入我们",
      partners: "合作伙伴",
      resources: "资源",
      blog: "博客",
      press: "媒体",
    },
    compact: {
      home: "首页",
      services: "服务",
      howItWorks: "流程",
      whyUs: "为何选我们",
      faq: "问答",
      contact: "联系",
      contactUs: "联系我们",
    },
  },
  hero: {
    eyebrow: "Maid My Day 家居与搬迁",
    title: "轻松安顿亚的斯亚贝巴",
    lead: "为外籍人士及国际专业人士提供值得信赖的家政、司机、宠物照护及搬迁服务。",
    contactUs: "联系我们",
    ourServices: "我们的服务",
    scrollHint: "向下滚动",
  },
  common: {
    brandName: "Maid My Day",
    brandTagline: "Maid My Day 家居与搬迁",
    location: "埃塞俄比亚，亚的斯亚贝巴",
    phone: "+251 911 000 000",
    email: "hello@maidmyday.com",
    copyright: "© {year} Maid My Day 家居与搬迁。保留所有权利。",
    whatsIncluded: "包含内容",
    idealFor: "适合人群",
    ourPromise: "我们的承诺",
    promiseQuote:
      "我们不会把任何人送进您的家，除非我们自己也会欢迎他们进门。这一标准让许多家庭与我们合作多年。",
    promiseAttribution: "— Maid My Day 安置团队，亚的斯亚贝巴",
    cta: {
      contactUs: "联系我们",
      viewServices: "查看服务",
      getStarted: "立即开始",
      exploreAllServices: "浏览全部服务",
      callUs: "致电我们",
      howItWorks: "服务流程",
      whyChooseUs: "为什么选择我们",
      readFaqs: "阅读常见问题",
      ourServices: "我们的服务",
    },
  },
  trustBar: {
    items: [
      { label: "严格筛选员工" },
      { label: "5.0 平均评分" },
      { label: "24小时回复保障" },
      { label: "服务家庭 500+" },
    ],
  },
  services: {
    eyebrow: "我们的服务",
    title: "亚的斯亚贝巴家居所需，一应俱全",
    description: "为外派家庭提供专业的家居与搬迁支持。",
    items: [
      {
        id: "housing",
        title: "住房与搬迁",
        description: "专业搬迁支持，助您找到新家并顺利安顿。",
        imageAlt: "新家的钥匙",
      },
      {
        id: "housemaids",
        title: "专业家政人员",
        description: "可靠员工，负责清洁、洗衣、烹饪及日常家居照护。",
        imageAlt: "专业家政人员打理家居",
      },
      {
        id: "drivers",
        title: "专业司机",
        description: "安全可靠的司机，负责个人及家庭出行。",
        imageAlt: "专业司机提供乘车服务",
      },
      {
        id: "petCare",
        title: "宠物照护",
        description: "在您工作或旅行期间，为宠物提供可信赖的照护。",
        imageAlt: "专业人员照护宠物",
      },
      {
        id: "homeManagement",
        title: "家居管理",
        description: "全面支持，让您的家顺畅运转。",
        imageAlt: "井然有序的现代家居",
      },
    ],
  },
  howItWorks: {
    eyebrow: "流程",
    title: "开始很简单",
    steps: [
      {
        number: "01",
        title: "告诉我们您的需求",
        description: "填写联系表单或直接致电。我们将在24小时内回复。",
      },
      {
        number: "02",
        title: "为您匹配合适团队",
        description: "我们精心挑选并介绍符合您家庭、日程及偏好的员工。",
      },
      {
        number: "03",
        title: "安心安顿",
        description: "家居有人打理，家人得到照顾，生活井然有序。",
      },
    ],
  },
  whyUs: {
    eyebrow: "为什么选择 Maid My Day？",
    title: "外派家庭值得信赖的支持",
    description:
      "我们深知在新城市安顿的不易。Maid My Day 为最需要帮助的家庭提供专业、可靠的家居与搬迁服务。",
    trustPoints: [
      { title: "精心挑选的员工", detail: "每位家政、司机及帮手上岗前均经过筛选与面试。" },
      { title: "专业标准", detail: "为您家庭团队的每位成员提供持续培训与明确期望。" },
      { title: "可靠值得信赖", detail: "每周都能依赖的稳定支持。" },
      { title: "面向外派家庭", detail: "为外交人员、使馆工作人员及初到亚的斯亚贝巴的国际专业人士而设。" },
      { title: "个性化协助", detail: "根据您的家庭、日程及需求量身定制服务。" },
    ],
    imageAlt: "在亚的斯亚贝巴享受家居生活的幸福家庭",
    stats: { families: "家庭", rating: "评分", years: "年" },
  },
  ...coreSectionsZh,
  footer: {
    tagline: "Maid My Day 家居与搬迁",
    subtitle: "亚的斯亚贝巴高端家居与搬迁服务",
    quickLinksHeading: "快速链接",
    contactHeading: "联系我们",
  },
  homePage: {
    intro: {
      eyebrow: "欢迎来到亚的斯亚贝巴",
      title: "从第一天起成为您家庭的伙伴",
      lead: "Maid My Day 专为外籍人士、外交人员及国际专业人士打造——不只是联系人名单，更是了解亚的斯亚贝巴生活的团队。",
      paragraphs: [
        "搬到埃塞俄比亚首都意味着新社区、新规则、新面孔进入您的家。无论您在博莱还是卡扎恩西斯，我们帮您找合适住所、聘用可靠家政、配备熟悉上学路线的司机，并理顺日常生活。",
        "不同于普通人力平台，我们专注国际家居。这意味着英语沟通、守时、见面前面试，以及匹配不成功时的替换保障。",
        "无论您需要下周还是本周末的支持，协调员将在24小时内给出明确下一步——无压力，无隐藏承诺。",
      ],
    },
    quickFacts: [
      { label: "已服务家庭", value: "500+" },
      { label: "平均回复时间", value: "24小时" },
      { label: "覆盖社区", value: "12+" },
      { label: "客户评分", value: "5.0" },
    ],
    packages: {
      eyebrow: "套餐",
      title: "各阶段搬迁方案",
      description:
        "灵活选择，无论您下周抵达还是升级已有住所，外派家庭都能找到合适方案。",
    },
    expectations: {
      eyebrow: "服务预期",
      title: "我们如何服务国际家庭",
      description:
        "标准清晰、时间透明、安置后持续支持。",
    },
    expectationsItems: [
      {
        title: "预先筛选，精心挑选",
        detail:
          "每位家政、司机及帮手均经过面试、背景核查及推荐人调查。",
      },
      {
        title: "上岗前您说了算",
        detail:
          "正式开工前安排面对面或视频见面。您的安心与同意优先。",
      },
      {
        title: "上岗后持续支持",
        detail:
          "日程调整、人员替换及增员——您的协调员在安顿期间始终在线。",
      },
      {
        title: "深厚的本地经验",
        detail:
          "社区、交通、租赁规则及可信赖供应商——多年亚的斯亚贝巴服务经验惠及每位客户。",
      },
    ],
    neighborhoods: {
      eyebrow: "在亚的斯生活",
      title: "我们最熟悉的社区",
      description:
        "初到一座城市，本地经验至关重要。我们在亚的斯亚贝巴最受欢迎的外籍社区安置员工并提供搬迁支持。",
    },
    neighborhoodItems: [
      {
        name: "Bole",
        detail:
          "知名的商业及使馆家庭社区。靠近博莱机场、国际学校及餐饮选择。",
      },
      {
        name: "Kazanchis",
        detail:
          "靠近联合国总部及外交使团。适合需要便捷通勤的国际专业人士。",
      },
      {
        name: "CMC & Megenagna",
        detail:
          "日益受欢迎的生活区，深受非政府组织家庭及注重空间与安全的住户喜爱。",
      },
      {
        name: "Old Airport & Sarbet",
        detail:
          "成熟社区，别墅资源丰富，学校便利。长期外交派驻的热门选择。",
      },
    ],
    relocationPackages: [
      {
        title: "快速安顿",
        description:
          "已有住所、刚抵达、急需可靠员工的外派专业人士。",
        items: [
          "数日内完成家政或司机安置",
          "见面前面试及试岗",
          "首周定期跟进电话",
        ],
      },
      {
        title: "全面搬迁",
        description:
          "我们最受欢迎的方案，适合家庭及初到亚的斯亚贝巴的外交人员。",
        items: [
          "社区调研及房源清单",
          "入住及水电开通支持",
          "员工安置：家政、司机或两者",
          "30天安顿支持",
        ],
      },
      {
        title: "家居 Plus",
        description:
          "适合已在亚的斯居住、需要持续家居管理及员工协调的住户。",
        items: [
          "专属家居协调员",
          "多员工日程与监督",
          "供应商及维修协调",
          "每季度家居检查",
        ],
      },
    ],
  },
  servicesPage: servicesPageZh,
  howItWorksPage: howItWorksPageZh,
  whyUsPage: whyUsPageZh,
  faqPage: faqPageZh,
  contactPage: contactPageZh,
  chat: {
    welcome:
      "您好！我是 Maid My Day 助手。可以了解我们的服务、合作流程，或如何在亚的斯亚贝巴开始。",
    fallback:
      "这方面我不太确定。如有关于您家庭的具体问题，我们的团队可以协助——通常24小时内回复。",
    quickPrompts: [
      "你们提供哪些服务？",
      "流程是怎样的？",
      "覆盖哪些区域？",
      "能多快安排帮助？",
      "与团队对话",
    ],
    ui: {
      subtitle: "咨询我们的服务",
      quickQuestionsLabel: "快捷问题",
      inputPlaceholder: "输入问题...",
      inputLabel: "输入消息",
      panelAriaLabel: "Maid My Day 聊天助手",
      closeLabel: "关闭聊天",
      openLabel: "打开聊天助手",
      sendLabel: "发送消息",
      typingLabel: "助手正在输入",
    },
  },
  social: {
    openLabel: "打开社交媒体菜单",
    closeLabel: "关闭社交媒体菜单",
    menuAriaLabel: "社交媒体链接",
    followTitle: "关注我们",
  },
};
