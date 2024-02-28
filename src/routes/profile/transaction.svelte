
<script lang="ts">
    import type { location } from "../../lib/types";

    export let cafe: location;

</script>


<div class="grid grid-cols-5">
    <div class="flex justify-center items-center border">You</div> 
    <div class="flex justify-center items-center col-span-3">
        Coffee @ {cafe.name}
    </div>
    <div class="flex flex-col items-center border">
        <p>Guest</p>
        <img 
            src="https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg" 
            alt="profile pic" 
            class="w-10 h-10 mx-auto" />
    </div>
</div>

<!-- Host   Guest: name , colorcoded, transaction value
 profile photo, place visited -->