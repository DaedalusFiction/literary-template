<template>
    <div class="container mx-auto p-4 md:px-48">
        <section class="grid md:grid-cols-12 gap-8">
            <div class="flex items-center md:col-span-5">
                <img src="~/assets/images/handmaid.jpg" alt="bricks" />
            </div>
            <div class="md:col-span-7 flex flex-col">
                <div>
                    <h2 class="font-header text-[var(--color-text-primary)]">
                        Out Now: Your Book
                    </h2>
                    <br />
                </div>
                <div class="border-l border-black px-4 grow flex items-end">
                    <div>
                        <div
                            v-for="(quotation, index) in quotations"
                            :key="index"
                        >
                            <p>&ldquo;{{ quotation.text }}&rdquo;</p>
                            <p class="pl-4 text-right md:text-start">
                                &mdash;{{ quotation.attribution }}
                                <em>{{ quotation.attributionBook }}</em>
                            </p>
                            <br />
                        </div>
                        <br />
                        <NuxtLink
                            class="link animation-underline inline-block"
                            to="/portfolio"
                            >Read More</NuxtLink
                        >
                    </div>
                </div>
            </div>
        </section>
        <!-- <section class="border-t border-black">
            <p class="max-w-prose text-3xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
                a, incidunt esse, iure aliquam tenetur quibusdam officiis
                numquam ut, et fugiat ad cupiditate. Alias, quasi.
            </p>
        </section>
        <section>
            <div>
                <div class="grid md:grid-cols-12 grid-cols-1 gap-12">
                    <div class="flex flex-col md:col-span-5">
                        <h3 class="font-header text-5xl">
                            Lorem ipsum dolor sit.
                        </h3>
                        <div class="grow border-l border-black mt-2" />
                        <div>
                            <p class="">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Veritatis adipisci blanditiis
                                corrupti, nesciunt dolores hic.
                            </p>
                            <br />
                            <NuxtLink
                                class="link animation-underline inline-block"
                                to="/publications"
                                >View Resume</NuxtLink
                            >
                        </div>
                    </div>
                    <div class="md:col-span-7">
                        <img
                            src="~/assets/images/cigarette.webp"
                            alt="James Cole, Doctor"
                        />
                    </div>
                </div>
            </div>
        </section>
        <section class="border-b border-black">
            <p class="max-w-prose text-3xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
                repellendus quam nam suscipit voluptatem possimus?
            </p>
        </section>
        <section>
            <div class="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div class="md:col-span-3">
                    <img
                        src="~/assets/images/valley.webp"
                        alt="James Cole, Doctor"
                    />
                </div>
                <div class="md:col-span-5">
                    <img
                        class="mb-12"
                        src="~/assets/images/gas.webp"
                        alt="James Cole, Doctor"
                    />
                    <img
                        class="max-w-sm"
                        src="~/assets/images/book.webp"
                        alt="James Cole, Doctor"
                    />
                </div>
                <div class="md:col-span-4 flex">
                    <div class="pb-4">
                        <h3 class="font-header text-5xl">Lorem ipsum.</h3>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloribus modi dolor consectetur, tenetur
                            beatae nobis. Nam optio, quis aut expedita, quae
                            voluptatibus fuga dolor natus tempore rem modi
                            minima repellat?
                        </p>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Veritatis adipisci blanditiis corrupti,
                            nesciunt dolores hic.
                        </p>
                        <br />
                        <NuxtLink
                            class="link animation-underline inline-block"
                            to="/publications"
                            >View Publications</NuxtLink
                        >
                    </div>
                </div>
            </div>
        </section>
        <SectionsSubscribe /> -->
    </div>
</template>

<script setup>
// definePageMeta({ layout: "default" });
const quotations = [
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas corrupti ut possimus? Amet libero optio magnam culpa debitis. Quis, molestiae.",
        attribution: "DAVE SORENSEN, best-selling author of",
        attributionBook: "Junk Mail",
    },
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet libero optio magnam culpa debitis. Quis, molestiae.",
        attribution: "DAVE SORENSEN, curator of",
        attributionBook: "The Rumen",
    },
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas corrupti ut possimus? Quis, molestiae.",
        attribution: "DAVE SORENSEN, CEO of",
        attributionBook: "Fictional Web",
    },
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas corrupti ut possimus? Amet libero optio magnam culpa debitis.",
        attribution: "DAVE SORENSEN, author of",
        attributionBook: "Help! My Parents Are Kicking Me Out!",
    },
];
</script>

<style scoped></style>
