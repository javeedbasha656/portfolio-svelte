<script lang="ts">
  import { workedProjects } from "$lib/shared/projectList.js";
</script>

<section class="py-20 px-4" id="projects">
  <h2 class="text-3xl font-bold text-center mb-12">Projects</h2>
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    {#each workedProjects as project}
      <div 
        class="group bg-gray-900 rounded-lg p-6 hover:transform hover:scale-110 transition-all duration-300"
      >
        <h3
          class="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors"
        >
          {project.title}
        </h3>
        <p class="text-gray-400 mb-4">{project.description}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          {#each project?.techStack as tech}
            <span class="px-3 text-white py-1 text-sm bg-gray-700 rounded-full">
              {tech}
            </span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>