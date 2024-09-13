import {defineConfig} from 'vitepress'
import {set_sidebar} from "./utils/auto_sidebar.js";
// https://vitepress.dev/reference/site-config
export default defineConfig({
    head: [["link", {rel: "icon", href: "/themeIcon.png"}]],
    title: "折果的个人博客",
    description: "A VitePress Site",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/themeIcon.png',
        outlineTitle: "目录",
        outline: [2, 6],
        nav: [
            {
                text: '前端', items: [
                    {text: 'vue', link: '/fore-end/vue/vue'},
                    {text: 'react', link: '/fore-end/react/react'}
                ]
            },
            {
                text: '后端', items: [
                    {text: 'Node', link: 'https://nodejs.org/'},
                    {text: 'Mysql', link: 'https://dev.mysql.com/'},
                    {text: 'MongoDB', link: 'https://www.mongodb.com/'},
                    {text: 'Java', link: 'https://redis.io/'}
                ]
            },
            {
                text: '我的项目', items: [
                    {text: '开心聊天室', link: 'http://47.97.85.85:81'}
                ]
            }
        ],
        sidebar: false, // 关闭侧边栏
        lastUpdated: true, // 显示上次修改时间
        aside: "left", // 设置右侧侧边栏在左侧显示
        socialLinks: [
            {icon: 'github', link: 'https://github.com/ZHEGUO6'},
            {
                icon: {
                    svg: '<svg t="1726234122104" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"\n' +
                        '     p-id="17972" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200">\n' +
                        '    <path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z"\n' +
                        '          fill="#C71D23" p-id="17973"></path>\n' +
                        '</svg>'
                }, link: 'https://gitee.com/li-guozhe'
            }
        ],
        footer: {
            message: '本网站仅供学习使用',
            copyright: '禁止copy用作商业用途'
        },
        // 设置搜索框的样式
        search: {
            provider: "local",
            options: {
                translations: {
                    button: {
                        buttonText: "搜索文档",
                        buttonAriaLabel: "搜索文档",
                    },
                    modal: {
                        noResultsText: "无法找到相关结果",
                        resetButtonTitle: "清除查询条件",
                        footer: {
                            selectText: "选择",
                            navigateText: "切换",
                        },
                    },
                },
            },
        },
    }
})
