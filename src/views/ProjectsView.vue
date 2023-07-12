<script setup lang="ts">
import H2WithSubText from '@/components/H2WithSubText.vue'
import { useGitHubStore } from '@/stores/gitHubStore'

const gitHubStore = useGitHubStore()
</script>
<template>
  <main class="text-md m-8 lg:w-10/12 xl:w-8/12 2xl:w-7/12">
    <ul class="flex flex-col-reverse space-y-4">
      <li>
        <H2WithSubText>
          <template #heading>BUT showpad</template>
          <template #subText></template>
        </H2WithSubText>
        <p class="m-5">
          The first project at my internship was to make a showpad project with a colleague. This
          was my first project using Vue,Vite,Pinia and Showpad. I can sadly not show the code right
          now because it is not in my possesion .
        </p>
      </li>
      <li>
        <H2WithSubText>
          <template #heading>Untappd App</template>
          <template #subText></template>
        </H2WithSubText>
        <p class="m-5">
          This is an application for me and my friends where we keep wich special beers we drank and
          wich we like the most. This was a school project. The aplication was made using
          react-native
        </p>
        <p class="m-5 text-xs md:text-base">
          GitHub:
          <a class="display: inline underline" :href="gitHubStore.untappedRepo.html_url">{{
            gitHubStore.untappedRepo.html_url
          }}</a>
        </p>
      </li>
      <li>
        <H2WithSubText>
          <template #heading>Plant Manager</template>
          <template #subText></template>
        </H2WithSubText>
        <p class="m-5">
          This a flutter projects to keep track of your plants. This was a school project.
        </p>
        <p class="m-5 text-xs md:text-base">
          GitHub:
          <a class="display: inline underline" :href="gitHubStore.plantManagerRepo.html_url">{{
            gitHubStore.plantManagerRepo.html_url
          }}</a>
        </p>
      </li>
      <li>
        <H2WithSubText>
          <template #heading>BUT timesheet</template>
          <template #subText> </template>
        </H2WithSubText>
        <p class="m-5">
          We where assigned to make a timesheet. This needed to provide the information that
          everybody filled in their hours. Mainly for cross country hours. This was also to make
          sure that all hours that needed to be billed to custommers where billed.
        </p>
      </li>

      <li>
        <H2WithSubText>
          <template #heading>BUT Backup System</template>
          <template #subText></template>
        </H2WithSubText>
        <p class="m-5">
          This was the last project we needed to make. The goal was to create a program that
          backed-up the Appsdb of Showpad
        </p>
      </li>

      <li>
        <H2WithSubText>
          <template #heading>My Portfolio</template>
          <template #subText></template>
        </H2WithSubText>
        <p class="m-5">
          This is my portfolio where I show my skills and projects. Made with Vue,Vite and Tailwind.
          I use Azure for the deployment
        </p>
        <p class="m-5 text-xs md:text-base">
          GitHub:
          <a class="display: inline underline" :href="gitHubStore.portfolioRepo.html_url">{{
            gitHubStore.portfolioRepo.html_url
          }}</a>
        </p>
      </li>
    </ul>
  </main>
</template>
