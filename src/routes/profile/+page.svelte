<script lang="ts">
  import { currentUser } from '$lib/stores/user'
  import type { PageData } from './$types'
  export let data: PageData

  // Set the current user from the data passed in from the server
  $: currentUser.set(data.user)
</script>

<div class="card w-96 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">{$currentUser}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>