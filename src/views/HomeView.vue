<script setup lang="ts">
import IconStar from '@/components/icons/IconStar.vue'
import IconWorkExperience from '@/components/icons/IconWorkExperience.vue'
import IconProject from '@/components/icons/IconProject.vue'
import HomeItem from '../components/LineItem.vue'
import IconEducation from '@/components/icons/IconEducation.vue'
import IconPerson from '@/components/icons/IconPerson.vue'
import { useGitHubStore } from '@/stores/gitHubStore'
const gitHubStore = useGitHubStore()
</script>

<template>
  <main class="flex flex-col">
    <HomeItem class="mt-5" routerLinkName="skills">
      <template #icon>
        <IconStar class="fill-primary xl:p-1" />
      </template>
      <template #heading>Skills</template>

      <template #text class=""
        >I am a knowledgeable full-stack developer with experience in a wide variety of programming
        languages. I am highly motivated and always eager to learn more. Furthermore, I have
        developed a keen understanding behind the scrum process and effective communication.
      </template>
    </HomeItem>
    <HomeItem routerLinkName="experience">
      <template #icon>
        <IconWorkExperience class="fill-primary p-2 sm:p-3 lg:p-2 xl:p-3" />
      </template>
      <template #heading>Experience</template>

      <template #text
        >2022-2023:<br />
        &emsp;Internship with
        <a href="https://but.digital/be-en/" class="underline decoration-white">BUT digital</a>
      </template>
    </HomeItem>
    <HomeItem routerLinkName="projects">
      <template #icon>
        <IconProject class="fill-slate-950 stroke-primary stroke-2 p-1 sm:p-2" />
      </template>
      <template #heading>Projects</template>
      <template #text
        >portfolio(this project)
        <p>
          &emsp;GitHub:
          <a
            href="https://github.com/HendrikVanBeersel/portfolio"
            class="underline decoration-white"
            >{{ gitHubStore.portfolioRepo.html_url }}</a
          >
        </p>
        <a href="" class="underline decoration-white">Projects at BUT</a>
      </template>
    </HomeItem>

    <HomeItem routerLinkName="education">
      <template #icon
        ><IconEducation class="fill-slate-950 stroke-primary stroke-2 sm:p-1 xl:p-2"
      /></template>
      <template #heading>Education</template>
      <template #text
        ><ul>
          <li>2023: Graduate Programming (Cum Laude)</li>
          <li>2023: Certified Scrum Master</li>
        </ul></template
      >
    </HomeItem>
    <HomeItem routerLinkName="aboutMe">
      <template #icon>
        <IconPerson class="fill-primary sm:p-1 xl:p-2" />
      </template>
      <template #heading>About Me</template>
      <template #text
        >I am a social and versatile person. Hence I enjoy working in teams/a social workplace. I
        communicate well in a team-environment and encourage communication from my colleagues. In my
        free time I love to go biking, meeting up with friends and making my own programs.</template
      >
    </HomeItem>
  </main>
</template>
