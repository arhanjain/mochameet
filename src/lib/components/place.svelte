<script lang="ts">
    import type { Location } from "../../types";
    
    export let place: Location;
</script>

<div>
    <img src={place.photo} alt="place" class="mx-auto" />
    <p>{place.name}</p>
    <p>{place.id}</p>
</div>