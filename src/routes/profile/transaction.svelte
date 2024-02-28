
<script lang="ts">
    import type {Location} from "$lib/types"
    export let location: string;
    export let friend: string;
    export let host: boolean;

</script>


<div class="grid grid-cols-5">
    <div class="flex justify-center items-center border">
        {host ? "YOU" : friend}
    </div> 
    <div class="flex justify-center items-center col-span-3">
        Coffee @ {location}
    </div>
    <div class="flex flex-col items-center border">
        <p>{host ? friend : "YOU"}</p>
        <img 
            src="https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg" 
            alt="profile pic" 
            class="w-10 h-10 mx-auto" />
    </div>
</div>

<!-- Host   Guest: name , colorcoded, transaction value
 profile photo, place visited -->