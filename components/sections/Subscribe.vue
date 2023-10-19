<template>
    <section>
        <div class="container mx-auto p-4 md:px-24">
            <div class="border border-black p-4 md:p-20">
                <h4>Subscribe to my newsletter</h4>
                <br />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div
                class="border-b border-l border-r border-black p-4 md:px-20 md:py-16 grid grid-cols-12"
            >
                <div class="col-span-7">
                    <input
                        v-if="!isSent"
                        class="w-full bg-[var(--color-background)] text-2xl p-4 focus:outline-none focus:border-b"
                        v-model="email"
                        placeholder="EMAIL"
                    />
                    <p v-else>Thanks so much!</p>
                </div>
                <div class="col-span-5 flex justify-end items-center">
                    <button
                        v-if="!isSent"
                        class="btn"
                        :class="!isValidEmail && 'btn-disabled'"
                        :disabled="!isValidEmail"
                        @click="send"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";
const email = ref("");
const isSent = ref(false);

const isValidEmail = computed(() => {
    return email.value.includes("@") && email.value.includes(".");
});

const send = () => {
    const templateParams = {
        website: "Author Portfolio -- Subscribe",
        name: "",
        email: email.value,
        comment: "",
    };
    email.value = "";
    emailjs
        .send(
            "service_t1yo7dn",
            "template_pfang7n",
            templateParams,
            "aMDOy4kUud9rd0Yg9"
        )
        .then(function () {
            isSent.value = true;
        });
};
</script>

<style scoped></style>
