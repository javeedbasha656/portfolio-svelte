<script>
  import { animatedStyles } from "$lib/shared/animatedStyle.ts";

  if (typeof document !== "undefined") {
    document.head.insertAdjacentHTML(
      "beforeend",
      `<style>${animatedStyles}</style>`
    );
  }
</script>

<div class="absolute inset-0 overflow-hidden">
  <div
    class="absolute w-64 h-64 top-10 left-[-40px] bg-blue-500 opacity-20 rounded-full animate-move-slow"
  ></div>
  <div
    class="absolute w-72 h-72 bottom-20 right-[-60px] bg-purple-500  opacity-20  rounded-full animate-move-medium"
  ></div>
</div>
