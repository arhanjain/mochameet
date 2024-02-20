<script lang="ts">
  import { applyAction, enhance } from '$app/forms'
  import { pb } from '$lib/pocketbase'
</script>

<<<<<<< HEAD
<div class="h-full flex flex-col justify-center sm:mx-auto sm:w-full sm:max-w-sm">
  {#if form?.fail}
      <div class="variant-soft-error px-4 py-2 mb-2 rounded-token">
          {form.message}
      </div>
  {/if}
  <form action="?/login" method="post" class="h-full w-full">
      <label class="label">
          <span>E-Mail</span>
          <input class="input" name="email" title="E-Mail" type="email" placeholder="mail@example.com" required />
      </label>
      <label class="label mt-4">
          <span>Password</span>
          <input class="input" name="password" title="Password" type="password" placeholder="******" required />
      </label>
      <button class="block ml-auto hover:underline my-2" formnovalidate formaction="?/reset">Reset Password</button>
      <button class="btn variant-filled w-full mt-4" type="submit">Login</button>
      <button class="btn variant-filled w-full mt-4 mb-2" formaction="?/register">Register</button>
  </form>
</div>
=======
<form
  method="POST"
  class="card"
  use:enhance={() => {
    return async ({ result }) => {
      pb.authStore.loadFromCookie(document.cookie)
      await applyAction(result)
    }
  }}
>
  <h1 class="text-2xl mb-8">Log in</h1>
  <div class="form-control gap-2 mb-4">
    <input
      type="email"
      name="email"
      placeholder="Email"
      class="input input-bordered"
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      class="input input-bordered"
    />
    <button class="btn btn-primary">Log in</button>
  </div>
</form>
>>>>>>> f6b0012e0f1b7e746bbedad8d58c05ccb062ac25
