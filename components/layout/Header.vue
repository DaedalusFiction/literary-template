<template>
    <header class="sticky top-0 z-20 bg-[var(--color-background)]">
        <div class="container p-4 mx-auto flex justify-between items-center">
            <NuxtLink to="/" class="link flex gap-4 items-center"
                ><IconsCap />
                <h1 class="whitespace-nowrap font-light font-header">
                    AUTHOR NAME
                </h1></NuxtLink
            >
            <button
                class="text-2xl font-extrabold animation-underline"
                @click="expand"
            >
                {{ expanded ? "CLOSE" : "MENU" }}
            </button>
        </div>
    </header>

    <Transition>
        <nav
            v-if="expanded"
            class="fixed top-0 bg-transparent transition-colors duration-300 h-screen w-screen flex items-center p-4 z-10"
            :class="expanded && 'expanded'"
        >
            <ul class="container mx-auto p-4">
                <li class="my-4" v-for="item in menuItems" :key="item.href">
                    <NuxtLink
                        class="font-header tracking-tighter text-3xl md:text-8xl hover:uppercase font-extrabold"
                        :to="item.href"
                        @click="expand"
                        >{{ item.text }}</NuxtLink
                    >
                </li>
            </ul>
        </nav>
    </Transition>
</template>

<script setup>
import { reactive, ref } from "vue";
const expanded = ref(false);
const expand = () => {
    expanded.value = !expanded.value;
    console.log(expanded.value);
};

const menuItems = [
    { text: "portfolio", href: "/portfolio" },
    { text: "about", href: "/about" },
    { text: "contact", href: "/contact" },
];
</script>

<style scoped>
.expanded {
    @apply bg-[var(--color-background)];
}
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
