<script lang="ts">
    import { pb } from '$lib/pocketbase'
    async function login(form: HTMLFormElement) {
        try {
            await pb.collection('users').authWithOAuth2({ provider: 'twitter' });
            form.token.value = pb.authStore.token;
            form.submit();
        } catch (err) {
            console.error(err);
        }
    }
</script>

<form method="post" on:submit|preventDefault={(e) => login(e.currentTarget)}>
    <input name="token" type="hidden" />
    <button
        class="border rounded p-2 mt-10 bg-gray-800 text-white hover:bg-gray-700"
    >
        Login using Twitter
    </button>
</form>