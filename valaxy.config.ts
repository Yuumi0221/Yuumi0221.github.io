import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'
import { addonWaline } from "valaxy-addon-waline";
import { addonComponents } from "valaxy-addon-components";

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: ['Yuumi', '的', '烟', '波', '之', '路'],
      cloud: {
        enable: true,
      },
    },

    pages: [
      {
        name: '留言板',
        url: '/comment/',
        icon: 'i-ri-clipboard-line',
        color: '#737de5',
      },
      {
        name: '相册',
        url: '/albums/',
        icon: 'i-ri-gallery-line',
        color: '#43abee',
      },
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-open-arm-line',
        color: '#4bbea4',
      },
    ],

    menu: {
      custom: {
        title: '幻灯片',
        url: '/slides/',
        icon: 'i-ri-keynote-line'
      }
    },
    
    bg_image: {
      enable: true,
      url: "http://150.158.151.86/images/settings/background.png",
      dark: "http://150.158.151.86/images/settings/bgdark.jpg",
      opacity: 1
    },

    say: {
      enable: true,
      api: "https://el-bot-api.vercel.app/api/words/young",
      hitokoto: {
        enable: true,
        api: "https://v1.hitokoto.cn/?c=k&c=d&c=i",
      },
    },

    colors: {
      primary: "#D69B54",
    },

    footer: {
      since: 2021,
      icon: {
        enable: true,
        name: 'i-ri-heart-line',
        animated: true,
        color: '#d69b54',
        url: 'https://yuumi.link',
        title: '回到首页'
      },
      powered: true,
      beian: {
        enable: false,
        icp: 'xxxx',
      },
    },
    
  },

  addons: [
    addonComponents(),
    addonWaline({
      serverURL: "https://comment.yuumi.link",
      locale: {
        placeholder: "填写qq邮箱或点击登录，可以展示个人头像~详情请见【留言板】板块",
      },
      comment: true,
      pageview: true,
      emoji: [
        "https://jsd.onmicrosoft.cn/gh/walinejs/emojis@latest/bmoji/",
        "https://jsd.onmicrosoft.cn/npm/@waline/emojis@latest/weibo/",
        "https://jsd.onmicrosoft.cn/npm/@waline/emojis@latest/qq/",
        "https://jsd.onmicrosoft.cn/npm/@waline/emojis@latest/tieba/",
      ],
      // recaptchaV3Key: "",
    }),
  ],
  
  features: {
      katex: true
  },

  unocss: { safelist },

  
})
