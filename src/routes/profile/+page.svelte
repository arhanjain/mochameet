<script lang="ts">
    import Transaction from "./transaction.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
    console.log(data);
</script>


<div class="flex flex-col justify-between items-center">
    <h1 class="text-4xl font-bold">Profile</h1>
    <div class="bg-slate-50 w-1/2 flex flex-col">
        <img 
            alt="profile"
            class="w-48 h-48 mx-auto"
            src="https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg"
        />
        <div class="flex justify-evenly items-center">
            <p class="text-lg font-bold">Name</p>
            <p class="text-lg">{data.user?.name}</p>
        </div>
        <div class="flex justify-evenly ">
            <p class="text-lg font-bold">Phone</p>
            <p class="text-lg">6502092568</p>
        </div>  
    </div>

    {#each data.transactions.items as transaction}
        {#if transaction.host === data.user?.id}
            <Transaction
                location={transaction.location}
                friend={transaction.guest}
                host={true}
            />
        {:else}
            <Transaction
                location={transaction.location}
                friend={transaction.host}
                host={false}
            />
        {/if}
    {/each}

</div>

