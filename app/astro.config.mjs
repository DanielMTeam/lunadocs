// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { ion } from "starlight-ion-theme";

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: "LunaStore Docs",
            logo: {
                src: "./src/assets/logo.svg",
                replacesTitle: false,
            },
            social: [
                {
                    icon: "github",
                    label: "GitHub",
                    href: "https://github.com/DanielMTeam/lunastore",
                },
                {
                    icon: "telegram",
                    label: "Telegram",
                    href: "https://t.me/lunastore_official",
                },
            ],
            // our custom sidebar
            components: {
                Sidebar: "./src/components/CustomSidebar.astro",
            },
            plugins: [
                ion({
                    icons: {
                        iconDir: "./src/icons",
                    },
                }),
            ],
            // menu (folders only)
            sidebar: [
                {
                    label: "Начало работы",
                    items: [
                        {
                            label: "Установка",
                            slug: "getting-started/installation",
                        },
                        {
                            label: "Конфигурация",
                            slug: "getting-started/configuration",
                        },
                    ],
                },
                {
                    label: "V2 API (Актуальное)",
                    items: [
                        { label: "Введение", slug: "api" },
                        {
                            label: "Пакетные запросы",
                            items: [
                                {
                                    label: "execute",
                                    slug: "api/execute",
                                    badge: { text: "POST", variant: "success" },
                                },
                            ],
                        },
                        {
                            label: "Приложения",
                            items: [
                                {
                                    label: "list",
                                    slug: "api/marketplace/list",
                                    badge: { text: "GET", variant: "note" },
                                },
                                {
                                    label: "retrieve",
                                    slug: "api/marketplace/retrieve",
                                    badge: { text: "GET", variant: "note" },
                                },
                                {
                                    label: "search",
                                    slug: "api/marketplace/search",
                                    badge: { text: "GET", variant: "note" },
                                },
                            ],
                        },
                        {
                            label: "Дистрибутивы",
                            items: [
                                {
                                    label: "by_app",
                                    slug: "api/distribution/by_app",
                                    badge: { text: "GET", variant: "note" },
                                },
                                {
                                    label: "retrieve",
                                    slug: "api/distribution/retrieve",
                                    badge: { text: "GET", variant: "note" },
                                },
                                {
                                    label: "list",
                                    slug: "api/distribution/list",
                                    badge: { text: "GET", variant: "note" },
                                },
                            ],
                        },
                        {
                            label: "Категории",
                            items: [
                                {
                                    label: "list",
                                    slug: "api/category/list",
                                    badge: { text: "GET", variant: "note" },
                                },
                                {
                                    label: "retrieve",
                                    slug: "api/category/retrieve",
                                    badge: { text: "GET", variant: "note" },
                                },
                                {
                                    label: "apps",
                                    slug: "api/category/apps",
                                    badge: { text: "GET", variant: "note" },
                                },
                            ],
                        },
                        {
                            label: "Коллекции",
                            items: [
                                {
                                    label: "list",
                                    slug: "api/collection/list",
                                    badge: { text: "GET", variant: "note" },
                                },
                                {
                                    label: "retrieve",
                                    slug: "api/collection/retrieve",
                                    badge: { text: "GET", variant: "note" },
                                },
                                {
                                    label: "apps",
                                    slug: "api/collection/apps",
                                    badge: { text: "GET", variant: "note" },
                                },
                                {
                                    label: "by_user",
                                    slug: "api/collection/by_user",
                                    badge: { text: "GET", variant: "note" },
                                },
                            ],
                        },
                        {
                            label: "Пользователи",
                            items: [
                                {
                                    label: "retrieve",
                                    slug: "api/user/retrieve",
                                    badge: { text: "GET", variant: "note" },
                                },
                                {
                                    label: "search",
                                    slug: "api/user/search",
                                    badge: { text: "GET", variant: "note" },
                                },
                            ],
                        },
                        {
                            label: "Поиск",
                            items: [
                                {
                                    label: "suggest",
                                    slug: "api/search/suggest",
                                    badge: { text: "GET", variant: "note" },
                                },
                            ],
                        },
                    ],
                },
                {
                    label: "V1 API (Устаревшее)",
                    items: [
                        {
                            label: "Приложения",
                            items: [
                                {
                                    label: "getAppInfo",
                                    slug: "api/apps/getappinfo",
                                    badge: { text: "GET", variant: "note" },
                                },
                                {
                                    label: "search",
                                    slug: "api/apps/search",
                                    badge: { text: "GET", variant: "note" },
                                },
                            ],
                        },
                        {
                            label: "Категории",
                            items: [
                                {
                                    label: "getAppList",
                                    slug: "api/category/getapplist",
                                    badge: { text: "GET", variant: "note" },
                                },
                            ],
                        },
                        {
                            label: "Дистрибуции",
                            items: [
                                {
                                    label: "getDistributionsList",
                                    slug: "api/distributions/getdistributionslist",
                                    badge: { text: "GET", variant: "note" },
                                },
                            ],
                        },
                        {
                            label: "Внутренние методы",
                            items: [
                                {
                                    label: "heartbeat",
                                    slug: "api/service/heartbeat",
                                    badge: { text: "GET", variant: "note" },
                                },
                                {
                                    label: "kunyakin",
                                    slug: "api/service/kunyakin",
                                    badge: { text: "GET", variant: "note" },
                                },
                            ],
                        },
                    ],
                },
            ],
            customCss: [
                "@fontsource-variable/inter",
                "@fontsource-variable/space-grotesk/index.css",
                "@fontsource/space-mono/400.css",
                "@fontsource/space-mono/700.css",
                "./src/styles/global.css",
            ],
        }),
    ],
    vite: {
	server: {
		allowedHosts: ['dev-docs.lunastore.app'],
	},
        plugins: [tailwindcss()],
    },
});
