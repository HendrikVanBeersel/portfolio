<script setup lang="ts">
import IconBike from '@/components/icons/IconBike.vue'
import IconCards from '@/components/icons/IconCards.vue'
import IconSourceBranch from '@/components/icons/IconSourceBranch.vue'
import IconSwim from '@/components/icons/IconSwim.vue'
//anyway  anyhow instead off but
</script>
<template>
  <main class="m-8 text-lg lg:w-10/12 xl:w-8/12 2xl:w-7/12">
    <ul class="space-y-4">
      <li>
        <p>Hello, I am Hendrik and here you can read more about my interests and motivations:</p>
        <IconBike class="float-left h-12 w-12 fill-primary" />
        <p>
          I go biking almost every weekend with my friends. I prefer biking as my main mode of
          transportation. During my Internship I went to work by bike several times a week.
        </p>
        <IconSwim class="float-right h-20 w-20 fill-primary" />
        <p>
          I am also highly passionate about swimming. When I was around 18 years old, I became the
          provincial champion in the 100m and 50 m breastroke. Another merit I earned was a 'lange
          wapper',this meant that I was the fastest swimmer in my category for an entire year.
        </p>
      </li>
      <li>
        <p>
          In my free time I enjoy spending time with friends, going out, visiting places etc.
          Playing boardgames, especially the ones where you can try new tactics and change it up every
          time, this is one of my favorite 'rainy day' pastimes.
          <IconCards class="float-left h-20 w-20 fill-primary" />
          I don't need to win to have a good time (although I won't pass up the chance to win of
          course) but I really enjoy to see ways of play that are interesting and different.
        </p>
      </li>
      <li>
        <IconSourceBranch class="float-right h-16 w-16 fill-primary" />
        <p>
          Programming and learning new technologies has a way of finding me in my free time as well.
          I am currently trying to work with azure, making my own api, creating a place to connect
          safely to a home server and I would like to see what it all has to offer. If you want to
          learn more about my individual projects, you can find more information at
          <button class="inline-block underline" @click="$router.push({ name: 'projects' })">
            'projects'</button
          >.
        </p>
      </li>
    </ul>
  </main>
</template>
