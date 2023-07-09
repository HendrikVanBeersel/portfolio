<script setup lang="ts">
import H2WithSubText from '@/components/H2WithSubText.vue'
</script>
<template>
  <main>
    <ul class="flex flex-col-reverse">
      <li>
        <H2WithSubText>
          <template #heading>BUT showpad</template>
          <template #subText
            >the first project at my internship was to make a showpad project with a
            colleague</template
          >
        </H2WithSubText>
      </li>
      <li>
        <H2WithSubText>
          <template #heading>Untappd App</template>
          <template #subText
            >This is an aplication for me and my friends where we keep wich special beers we drank
            and wich we like the most. This was a school project.</template
          >
        </H2WithSubText>
      </li>
      <li>
        <H2WithSubText>
          <template #heading>Plant Manager</template>
          <template #subText
            >This a flutter projects to keep track of your plants. This was a school
            project.</template
          >
        </H2WithSubText>
      </li>
      <li>
        <H2WithSubText>
          <template #heading>BUT timesheet</template>
          <template #subText
            ><p>
              We where assigned to make a timesheet. this needed to provide the information that
              everybody filled in their hours. mainly for cross country hours. This was also to make
              sure that all hours that needed to be billed t custommers where billed.
            </p>
          </template>
        </H2WithSubText>
      </li>

      <li>
        <H2WithSubText>
          <template #heading>BUT Backup System</template>
          <template #subText
            >This was the last project we needed to make. the goal was to create a program that
            backed-up the appsdb of showpad</template
          >
        </H2WithSubText>
      </li>

      <li>
        <H2WithSubText>
          <template #heading>My Portfolio</template>
          <template #subText>This is my portfolio where i show my skills and projects.</template>
        </H2WithSubText>
      </li>
    </ul>
  </main>
</template>
