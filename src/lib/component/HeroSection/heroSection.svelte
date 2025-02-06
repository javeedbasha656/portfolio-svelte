<script lang="ts">
  import { personalInfo, technologiesList } from "$lib/shared/contactInfo.js";
  import { Icon } from "svelte-icons-pack";
  import {
    AiFillGithub,
    AiFillLinkedin,
  } from "svelte-icons-pack/ai";

  let isVisible = $state(false);
  let displayText: string = $state("");
  let isTyping = $state(false);
  let currentWordIndex: number = $state(0);
  let currentCharIndex = $state(0);

  $effect(() => {
    isVisible = true;
  });

  $effect(() => {
    const word = technologiesList[currentWordIndex];
    const typingInterval = 100;
    const deletingInterval = 50;
    const wordPauseInterval = 1000;

    if (isTyping && currentCharIndex < word.length) {
      const timeout = setTimeout(() => {
        displayText += word[currentCharIndex];
        currentCharIndex = currentCharIndex + 1;
      }, typingInterval);
      return () => clearTimeout(timeout);
    } else if (isTyping && currentCharIndex === word.length) {
      const timeout = setTimeout(() => {
        isTyping = false;
      }, wordPauseInterval);
      return () => clearTimeout(timeout);
    } else if (!isTyping && currentCharIndex > 0) {
      const timeout = setTimeout(() => {
        displayText = displayText.slice(0, -1);
        currentCharIndex = currentCharIndex - 1;
      }, deletingInterval);
      return () => clearTimeout(timeout);
    } else if (!isTyping && currentCharIndex === 0) {
      const timeout = setTimeout(() => {
        currentWordIndex = (currentWordIndex + 1) % technologiesList.length;
        isTyping = true;
      }, typingInterval);
      return () => clearTimeout(timeout);
    }
  });

  const baseText =
    "Bringing creativity, code, and design together, I explore the world of web development one idea at a time. My journey includes working with technologies like  ";
</script>

<section
  class="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden"
  id="home"
>
  <div class="dots-container">
    <div class="dots-overlay"></div>
  </div>
  <div
    class={`relative z-10 text-center transform transition-all duration-1000 ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    }`}
  >
    <div class="relative inline-block">
      <h1
        class="text-7xl text-blue-400 md:text-9xl drop-shadow-md font-extrabold mb-6 animate-text bg-gradient-to-r from-gray-950 via-bg-slate-800 to-bg-slate-900 bg-clip-text text-transparent"
      >
        {personalInfo.name}
      </h1>
    </div>

    <p class="text-3xl md:text-4xl font-bold mb-8">
      <span
        class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 hover:from-emerald-400 hover:to-blue-400 transition-all duration-500"
      >
        {personalInfo.position}
      </span>
    </p>

    <div class="text-xl md:text-xl text-gray-900 max-w-3xl mx-auto mb-12">
      <p>
        {baseText}
        <span class="text-blue-400 font-semibold">
          {displayText}
        </span>
        <span class="animate-blink">|</span>
      </p>
    </div>
    <div class="flex justify-center space-x-6 mt-8">
      <a
        href={personalInfo.github}
        class="p-4 rounded-full bg-white shadow-md hover:bg-slate-300 transition-all duration-300 hover:scale-110 hover:-rotate-6 group"
        aria-label="GitHub"
      >
        <Icon
          src={AiFillGithub}
          className="w-8 h-8 group-hover:text-purple-400 transition-colors"
        />
      </a>
      <a
        href={personalInfo.linkedin}
        target="_blank"
        class="p-4 rounded-full bg-white shadow-md hover:bg-slate-300 transition-all duration-300 hover:scale-110 hover:rotate-6 group flex items-center justify-center"
        aria-label="LinkedIn"
      >
        <Icon
          src={AiFillLinkedin}
          className="w-8 h-8 group-hover:text-purple-400 transition-colors"
        />
      </a>
    </div>
  </div>
</section>
