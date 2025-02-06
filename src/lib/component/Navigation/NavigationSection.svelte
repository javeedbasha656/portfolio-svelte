<script lang="ts">
  import { navItems } from "$lib/shared/navLink.ts";
  import { activeSection } from "$lib/stores/activeSection.ts";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      activeSection.set(sectionId);
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  $effect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const scrollPosition = window.scrollY + 100;

      sections.forEach(({ id, element }) => {
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            activeSection.set(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<nav class="fixed w-full bg-gray-900 bg-opacity-80 backdrop-blur-sm z-50 py-4">
  <div class="max-w-4xl mx-auto px-4">
    <div class="relative flex justify-center items-center space-x-8">
      <div
        class="absolute h-0.5 bg-gray-700 w-full top-1/2 transform -translate-y-1/2 -z-10"
      ></div>
      {#each navItems as { id, label }}
        <button
          onclick={() => scrollToSection(id)}
          class={`relative px-4 py-2 rounded-full transition-all duration-300 transform
              ${
                $activeSection === id
                  ? "bg-blue-500 text-white scale-110"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }
            `}
        >
          {label}
        </button>
      {/each}
    </div>
  </div>
</nav>
