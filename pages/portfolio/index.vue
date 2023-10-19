<template>
    <div class="container px-4 mx-auto my-12 lg:px-64">
        <h2 class="mb-24">Portfolio</h2>
        <h3 class="border-t border-black pt-4">Books</h3>
        <ul v-for="book in books" :key="book.name">
            <li class="py-12 grid md:grid-cols-12 gap-8 border-b border-black">
                <div class="md:col-span-8 flex items-center">
                    <div>
                        <p class="text-sm">{{ book.date }}</p>
                        <h3 class="font-header uppercase">
                            {{ book.name }}
                        </h3>
                        <p class="my-4">{{ book.description }}</p>
                        <NuxtLink
                            class="animation-underline inline-block mb-4"
                            :to="book.link"
                            >Visit Website</NuxtLink
                        >
                    </div>
                </div>
                <div class="md:col-span-4 flex items-center justify-center">
                    <img :src="book.image.src" :alt="book.image.alt" />
                </div>
            </li>
        </ul>
        <h3 class="mt-4 mb-12">Short Stores</h3>
        <div class="container mx-auto md:px-24">
            <ul v-for="story in stories" :key="story.name">
                <li>
                    <NuxtLink :to="story.link">
                        <p class="story-link">
                            {{ story.name }}, {{ story.publisher }},
                            {{ story.date }}
                        </p>
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <h3 class="pt-4 my-12 border-t border-black">Articles & More</h3>
        <div class="container mx-auto md:px-24">
            <ul v-for="article in articles" :key="article.name">
                <li>
                    <NuxtLink :to="article.link">
                        <p class="story-link">
                            {{ article.name }}, {{ article.publisher }},
                            {{ article.date }}
                        </p>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import fahrenheit from "../../assets/images/fahrenheit.jpg";
import invisibleman from "../../assets/images/invisibleman.jpg";
const books = [
    {
        name: "Book One",
        date: "January 1, 2002",
        publisher: "Penguin",
        description:
            "This is the description of the book. It is a very good book and people liked it a whole lot.",
        link: "https://google.com",
        image: {
            src: fahrenheit,
            alt: "cover of Crow Come Home",
        },
    },
    {
        name: "Book two",
        date: "January 2, 2002",
        publisher: "Penguin",
        description:
            "This is the description of the book. It is a very good book and people liked it a whole lot.",
        link: "https://google.com",
        image: {
            src: invisibleman,
            alt: "cover of Crow Come Home",
        },
    },
];

const stories = [
    {
        name: "Story One",
        date: "February 9, 2009",
        publisher: "Ploughshares",
        link: "https://google.com",
    },
    {
        name: "Story Two",
        date: "February 9, 2009",
        publisher: "Ploughshares",
        link: "https://google.com",
    },
    {
        name: "Story Three",
        date: "February 9, 2009",
        publisher: "Ploughshares",
        link: "https://google.com",
    },
    {
        name: "Story Four",
        date: "February 9, 2009",
        publisher: "Ploughshares",
        link: "https://google.com",
    },
];
const articles = [
    {
        name: "Article One",
        date: "February 9, 2009",
        publisher: "The New Yorker",
        link: "https://google.com",
    },
    {
        name: "Article Two",
        date: "February 9, 2009",
        publisher: "The New Yorker",
        link: "https://google.com",
    },
    {
        name: "Article Three",
        date: "February 9, 2009",
        publisher: "The New Yorker",
        link: "https://google.com",
    },
    {
        name: "Article Four",
        date: "February 9, 2009",
        publisher: "The New Yorker",
        link: "https://google.com",
    },
];
</script>

<style scoped>
.story-link {
    @apply font-normal text-xl hover:underline;
    text-transform: none;
    color: black;
}
</style>
