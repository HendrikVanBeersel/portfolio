<script setup lang="ts">
import H2WithSubText from '@/components/H2WithSubText.vue'
</script>
<template>
  <main class="text-md m-8 lg:w-10/12 xl:w-8/12 2xl:w-7/12">
    <ul class="flex flex-col-reverse">
      <li>
        <H2WithSubText>
          <template #heading>BUT showpad</template>
          <template #subText></template>
        </H2WithSubText>
        <p class="m-1">
          the first project at my internship was to make a showpad project with a colleague. this
          was my first project using Vue,vite,pinia and showpad. I can sadly not show the code right
          now because it is not in my possesion .
        </p>
      </li>
      <li>
        <H2WithSubText>
          <template #heading>Untappd App</template>
          <template #subText></template>
        </H2WithSubText>
        <p class="m-1">
          This is an aplication for me and my friends where we keep wich special beers we drank and
          wich we like the most. This was a school project. The aplication was made using
          react-native
        </p>
      </li>
      <li>
        <H2WithSubText>
          <template #heading>Plant Manager</template>
          <template #subText></template>
        </H2WithSubText>
        <p class="m-1">
          This a flutter projects to keep track of your plants. This was a school project.
        </p>
      </li>
      <li>
        <H2WithSubText>
          <template #heading>BUT timesheet</template>
          <template #subText> </template>
        </H2WithSubText>
        <p class="m-1">
          We where assigned to make a timesheet. this needed to provide the information that
          everybody filled in their hours. mainly for cross country hours. This was also to make
          sure that all hours that needed to be billed t custommers where billed.
        </p>
      </li>

      <li>
        <H2WithSubText>
          <template #heading>BUT Backup System</template>
          <template #subText></template>
        </H2WithSubText>
        <p class="m-1">
          This was the last project we needed to make. the goal was to create a program that
          backed-up the appsdb of showpad
        </p>
      </li>

      <li>
        <H2WithSubText>
          <template #heading>My Portfolio</template>
          <template #subText></template>
        </H2WithSubText>
        <p>This is my portfolio where i show my skills and projects.</p>
      </li>
    </ul>
  </main>
</template>
