<script lang="ts">
  import { currentUser } from '$lib/stores/user'
  import type { PageData } from './$types'

  export let data: PageData
  // Set the current user from the data passed in from the server
  $: currentUser.set(data.user)
</script>

Profile

