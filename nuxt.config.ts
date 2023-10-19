// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss"],
    app: {
        head: {
            title: "Author Portfolio",
            meta: [{ name: "description", content: "Author Portfolio" }],
        },
    },
    components: {
        dirs: ["~/components", "~/components/icons"],
    },
});
