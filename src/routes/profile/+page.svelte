<script context="module">
    export async function load({ params }) {
        const { page } = params;
        return { props: { page } };
    }
</script>

<script>
    import Transaction from "./transaction.svelte";

    let cafe = {
        name: "Starbucks",
    };

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
            <p class="text-lg">John Doe</p>
        </div>
        <div class="flex justify-evenly ">
            <p class="text-lg font-bold">Phone</p>
            <p class="text-lg">6502092568</p>
        </div>  
    </div>

    <div class="w-1/2 bg-slate-50 mt-5">
        <!-- turn this into grid -->
        <div class="flex justify-between border">
            <div class="text-xl mx-2">Host</div>
            <div class="text-xl mx-2">Guest</div>
        </div>
        <!-- <Transaction cafe={} /> -->
    </div>
</div>

