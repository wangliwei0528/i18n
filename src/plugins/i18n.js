import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const i18n = new VueI18n({
    silentFallbackWarn: true,//抑制警告
    // 使用localStorage存储语言状态是为了保证页面刷新之后还是保持原来选择的语言状态
    // locale: (navigator.language || navigator.browserLanguage).toLowerCase(),
    locale: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'zh', // 定义默认语言为中文 
    messages: {
        'zh': require('@/assets/languages/zh.json'),
        'en': require('@/assets/languages/en.json'),
        'de': require('@/assets/languages/de.json'),
        'fr': require('@/assets/languages/fr.json'),
        'es': require('@/assets/languages/es.json')
    }
})

export default i18n