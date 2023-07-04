<script setup lang="ts">
import IconStar from '@/components/icons/IconStar.vue'
import IconWorkExperience from '@/components/icons/IconWorkExperience.vue'
import IconProject from '@/components/icons/IconProject.vue'
import HomeItem from '../components/HomeItem.vue'
import IconEducation from '@/components/icons/IconEducation.vue'
import IconPerson from '@/components/icons/IconPerson.vue'
</script>

<template>
  <main class="flex flex-col">
    <HomeItem>
      <template #icon>
        <IconStar class="fill-primary p-1" />
      </template>
      <template #heading>Skills</template>

      <template #text class=""
        >I am a knowledgeable full-stack developer with experience in a wide variety of programming
        languages. I am highly motivated and always eager to learn more. Furthermore, I have
        devoloped a higher understanding behind the scrum process and effective communication.
      </template>
    </HomeItem>
    <HomeItem>
      <template #icon> <IconWorkExperience class="fill-primary p-3" /> </template>
      <template #heading>Experience</template>

      <template #text
        >2022-2023:<br />
        &emsp;Internship with
        <a href="https://but.digital/be-en/" class="underline decoration-white">BUT digital</a>
      </template>
    </HomeItem>
    <HomeItem>
      <template #icon>
        <IconProject class="stroke-primary fill-slate-950 p-2 stroke-2" />
      </template>
      <template #heading>Projects</template>
      <template #text
        >portfolio(this project)
        <p>
          &emsp;GitHub:
          <a
            href="https://github.com/HendrikVanBeersel/portfolio"
            class="underline decoration-white"
            >github.com/HendrikVanBeersel/portfolio</a
          >
        </p>
        <a href="" class="underline decoration-white">Projects at BUT</a>
      </template>
    </HomeItem>

    <HomeItem>
      <template #icon
        ><IconEducation class="stroke-primary fill-slate-950 p-2 stroke-2"
      /></template>
      <template #heading>Education</template>
      <template #text
        ><ul>
          <li>2023: Graduate Programing (Cum Laude)</li>
          <li>2023: Certified Scrum Master</li>
        </ul></template
      >
    </HomeItem>
    <HomeItem>
      <template #icon>
        <IconPerson class="fill-primary p-2" />
      </template>
      <template #heading>About Me</template>
      <template #text
        >I am a social and versatile person. because of this I do enjoy working at a social company
        but I also don't mind encouraging communication from others. In my free time I love to go
        biking meeting with friends or even making my own programs</template
      >
    </HomeItem>
  </main>
</template>
