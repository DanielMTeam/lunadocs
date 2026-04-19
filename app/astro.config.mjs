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
                    icon: "gitlab",
                    label: "GitLab",
                    href: "https://git.myslivets.com/myslivets/project-luna/lunastore",
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
                    label: "API",
                    items: [
                        { label: "Введение", slug: "api" },
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
        plugins: [tailwindcss()],
    },
});
