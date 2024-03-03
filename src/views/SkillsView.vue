<script setup lang="ts">
import IconJavascript from '@/components/icons/programming/IconJavascript.vue'
import IconTypescript from '@/components/icons/programming/IconTypescript.vue'
import IconPython from '@/components/icons/programming/IconPython.vue'
import IconJava from '@/components/icons/programming/IconJava.vue'
import SkillItem from '@/components/SmallCardItem.vue'
import GroupOfSkillItems from '@/components/CardGroup.vue'
import IconHtml5 from '@/components/icons/programming/IconHtml5.vue'
import IconCSS from '@/components/icons/programming/IconCSS.vue'
import IconDatabase from '@/components/icons/programming/IconDatabase.vue'
import IconCodeTag from '@/components/icons/programming/IconCodeTag.vue'
import IconDart from '@/components/icons/programming/IconDart.vue'
import IconFlutter from '@/components/icons/programming/IconFlutter.vue'
import IconNL from '@/components/icons/flags/IconNL.vue'
import IconBE from '@/components/icons/flags/IconBE.vue'
import IconUK from '@/components/icons/flags/IconUK.vue'
import IconFR from '@/components/icons/flags/IconFR.vue'
import IconPT from '@/components/icons/flags/IconPT.vue'
import IconVue from '@/components/icons/programming/IconVue.vue'
import IconReact from '@/components/icons/programming/IconReact.vue'
import H2WithSubText from '@/components/H2WithSubText.vue'
import IconPHP from '@/components/icons/programming/IconPHP.vue'
import IconPCSoft from '@/components/icons/programming/IconPCSoft.vue'
import IconWLanguage from '@/components/icons/programming/IconWLanguage.vue'
import IconHFSQL from '@/components/icons/programming/IconHFSQL.vue'
</script>
<template>
  <main class="lg:w-10/12 2xl:w-7/12">
    <ul class="space-y-8">
      <li class="lg:py-5">
        <H2WithSubText>
          <template #heading>Programming Languages</template>
          <template #subText>Some program languages I am proficient at</template>
        </H2WithSubText>
        <ul class="flex flex-wrap">
          <SkillItem>
            <template #icon><IconJavascript class="fill-[#f7df1e]" /> </template>
            <template #name>Javascript</template>
            <template #details>My most used scripting language.</template>
          </SkillItem>
          <SkillItem>
            <template #icon><IconTypescript class="fill-[#3178c6]" /> </template>
            <template #name>Typescript</template>
            <template #details>This portfolio started in typescript.</template>
          </SkillItem>
          <SkillItem>
            <template #icon><IconPython /> </template>
            <template #name>Python</template>
            <template #details>My first program language.</template>
          </SkillItem>
          <SkillItem>
            <template #icon><IconJava /> </template>
            <template #name>Java</template>
            <template #details> I use it mostly for the backend.</template>
          </SkillItem>
          <SkillItem>
            <template #icon><IconHtml5 class="fill-[#e44d26]" /> </template>
            <template #name>HTML</template>
            <template #details>I always use this for web development.</template>
          </SkillItem>
          <SkillItem>
            <template #icon><IconCSS class="fill-[#264de4]" /> </template>
            <template #name>CSS</template>
            <template #details>I always use this for web development.</template>
          </SkillItem>
          <SkillItem>
            <template #icon><IconDatabase class="fill-[#fff]" /> </template>
            <template #name>SQL</template>
            <template #details>I use both mySQL & PostgreSQL.</template>
          </SkillItem>
          <SkillItem>
            <template #icon><IconCodeTag class="fill-[#fff]" /> </template>
            <template #name>Assembly</template>
            <template #details>I have learned this language in school.</template>
          </SkillItem>
          <SkillItem>
            <template #icon><IconDart /> </template>
            <template #name>Dart</template>
            <template #details>I learned it for a school project.</template>
          </SkillItem>
          <SkillItem>
            <template #icon><IconPHP /> </template>
            <template #name>PHP</template>
            <template #details>I have a basic understanding of PHP.</template>
          </SkillItem>
        </ul>
        <ul class="flex flex-wrap">
          <GroupOfSkillItems>
            <template #icon><IconPCSoft /></template>
            <template #name>PCSOFT</template>
            <template #details
              >I have experiences in using webdev and windev. with the coresponding languages
              devolped by PCSOFT</template
            >
            <template #listOfCards>
              <SkillItem>
                <template #icon><IconHFSQL /></template>
                <template #name>HFSQL</template>
                <template #details>the projects I had at Aexis used HFSQL</template>
              </SkillItem>
              <SkillItem>
                <template #icon><IconWLanguage /></template>
                <template #name>WLanguage</template>
                <template #details>main laguage used in webdev and windev</template>
              </SkillItem>
            </template>
          </GroupOfSkillItems>
        </ul>
      </li>
      <li>
        <H2WithSubText>
          <template #heading>Frameworks</template>
          <template #subText>Frameworks I have used.</template>
        </H2WithSubText>
        <ul class="flex flex-wrap py-5">
          <SkillItem>
            <template #icon><IconVue /> </template>
            <template #name>Vue</template>
            <template #details>My most used framework.</template>
          </SkillItem>
          <SkillItem>
            <template #icon><IconReact /> </template>
            <template #name>React</template>
            <template #details>I used this most during school.</template>
          </SkillItem>
          <SkillItem>
            <template #icon><IconFlutter class="fill-[#54c5f8]" /> </template>
            <template #name>Flutter</template>
            <template #details>This was with dart to create an app.</template>
          </SkillItem>
          <SkillItem>
            <template #icon><IconPCSoft /> </template>
            <template #name>PCSoft</template>
            <template #details>I can use windev and webdev</template>
          </SkillItem>
        </ul>
      </li>
      <li>
        <H2WithSubText>
          <template #heading>Languages</template>
          <template #subText>Languages I'm familiar with.</template>
        </H2WithSubText>
        <ul class="flex flex-wrap py-5">
          <SkillItem>
            <template #icon>
              <IconNL />
              <IconBE />
            </template>
            <template #name>Dutch</template>
            <template #details>My native language.</template>
          </SkillItem>
          <SkillItem>
            <template #icon>
              <IconUK />
            </template>
            <template #name>English</template>
            <template #details
              >I speak English almost on a daily basis. My proficiency is really high.</template
            >
          </SkillItem>
          <SkillItem>
            <template #icon>
              <IconFR />
              <IconBE />
            </template>
            <template #name>French</template>
            <template #details>My French is not perfect but I can get my message across. </template>
          </SkillItem>
          <SkillItem>
            <template #icon>
              <IconPT />
            </template>
            <template #name>Portuguese</template>
            <template #details>I'm learning Portuguese. </template>
          </SkillItem>
        </ul>
      </li>

      <li>
        <H2WithSubText>
          <template #heading>Varia</template>
        </H2WithSubText>
        <ul>
          <SkillItem class="w-64">
            <template #icon>
              <img src="@/assets/seal-csm.png" alt="seal of csm" />
            </template>
            <template #name>Certified Scrum Master</template>
            <template #details>I have earned this certificate on 2023-06-27.</template>
          </SkillItem>
        </ul>
      </li>
    </ul>
  </main>
</template>
