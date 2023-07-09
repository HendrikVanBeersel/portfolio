<script setup lang="ts">
import IconBike from '@/components/icons/IconBike.vue'
import IconCards from '@/components/icons/IconCards.vue'
import IconSourceBranch from '@/components/icons/IconSourceBranch.vue'
import IconSwim from '@/components/icons/IconSwim.vue'
</script>
<template>
  <main class="m-8 text-lg lg:w-10/12 xl:w-8/12 2xl:w-7/12">
    <ul class="space-y-4">
      <li>
        <p>Hello I am Hendrik and here is a bit about me as a person</p>
        <IconBike class="float-left h-12 w-12 fill-primary" />
        <p>
          I Go biking almost every weekend with my friends. I prefer it the as my main mode of
          transportation as well. In my Internship I went by bike a few times a week.
        </p>
        <IconSwim class="float-right h-20 w-20 fill-primary" />
        <p>
          I was really athletic when I was younger. when I was around 18 I became provincial
          champion in breastroke swimming (100m,50m). I als earned a lange wapper ( you need to be 1
          year the fastest in your category)
        </p>
      </li>
      <li>
        <p>
          In my free time I also enjoy spending time with friends going out, visitinge places etc.
          But I really enjoy playing boardgames especially ones where you can try new tactics and
          change it up every time.
          <IconCards class="float-left h-20 w-20 fill-primary" />
          It is not that I need to win to have a good time (I do find it still fun of course) But I
          really enjoy to see ways of play that are intresting and diffrent.
        </p>
      </li>
      <li>
        <IconSourceBranch class="float-right h-16 w-16 fill-primary" />
        <p>
          I also enjoy programming in my free time and learning new technologies every time. I am
          currently trying to work with azure, making my own api,creating a place to connect safely
          to a home server and I would like to see what it all has in store. If You want to see more
          You can always look at my <span class="underline">projects</span>.
        </p>
      </li>
    </ul>
  </main>
</template>
