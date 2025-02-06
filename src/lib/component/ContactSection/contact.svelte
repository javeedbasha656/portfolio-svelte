<script lang="ts">
  import { contactList } from "$lib/shared/contactInfo.js";
  import { Icon } from "svelte-icons-pack";
</script>

<section class="py-24 mt-20 px-4 bg-gray-800" id="contact">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-3xl font-bold text-white mb-8 text-center">Get In Touch</h2>
    <p class="text-gray-400 mb-12 text-center">
      I'm currently open for new opportunities. Feel free to reach out through
      any of these channels!
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each contactList as item}
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          class="group relative p-6 bg-gray-900 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div
            class={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
          ></div>

          <div class="relative flex items-center space-x-4">
            <div
              class={`flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 group-hover:bg-gradient-to-r ${item.color} p-[1px] transition-all duration-300`}
            >
              <div
                class="flex items-center justify-center w-full h-full rounded-full bg-gray-900"
              >
                <div
                  class="text-gray-400 group-hover:text-white transition-colors duration-300"
                >
                  <Icon src={item.icon} className="text-xl font-bold" />
                </div>
              </div>
            </div>

            <div>
              <div class="text-sm text-gray-400 mb-1">{item.label}</div>
              <div
                class="text-white font-medium group-hover:text-blue-400 transition-colors duration-300"
              >
                {item.value}
              </div>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>
