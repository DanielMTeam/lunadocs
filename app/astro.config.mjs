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
            sidebar: [
                {
                    label: "Начало работы",
                    items: [
                        {
                            label: "Установка",
                            slug: "getting-started/installation",
                        },
                    ],
                },
                {
                    label: "API",
                    items: [
                        {
                            label: "Введение",
                            slug: "api",
                        },
                    ],
                },
            ],
            plugins: [
                ion({
                    icons: {
                        iconDir: "./src/icons",
                    },
                }),
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
