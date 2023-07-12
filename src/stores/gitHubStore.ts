import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGitHubStore = defineStore('GitHub', {
  state: () => ({
    githubInfo: [] as any,
    idList: [634457485, 619300175, 651550180, 660293233] as number[]
  }),

  getters: {
    githubPublicRepos(): any {
      if (this.githubInfo.length === 0) {
        return 'Loading...'
      }
      return this.githubInfo.filter((repo: any) => this.idList.includes(repo.id))
    },
    portfolioRepo(): any {
      if (this.githubInfo.length === 0) {
        return 'Loading...'
      }

      return this.githubInfo.find((repo: any) => repo.id === 660293233)
    },
    plantManagerRepo(): any {
      if (this.githubInfo.length === 0) {
        return 'Loading...'
      }

      return this.githubInfo.find((repo: any) => repo.id === 651550180)
    },
    untappedRepo(): any {
      if (this.githubInfo.length === 0) {
        return 'Loading...'
      }

      return this.githubInfo.find((repo: any) => repo.id === 619300175)
    }
  },
  actions: {
    fetchGitHubInfo() {
      fetch('https://api.github.com/users/hendrikvanbeersel/repos').then((res) =>
        res.json().then((data) => (this.githubInfo = data))
      )
    }
  }
})
