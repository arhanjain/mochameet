<script lang="ts">
  import Place from "$lib/components/place.svelte";
  import { onMount } from "svelte";
  import type { Location } from "../types";

  let place: Location | null = null;
  let coords: {latitude: number, longitude: number};

  onMount(() => {
    if (navigator.geolocation) {
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      navigator.geolocation.getCurrentPosition(
        position => {
          coords = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          };
          getCafe();
        },
        error => {
          console.error('Error getting location:', error);
        }, 
        options
      );
    } else {
      console.error('Geolocation is not supported.');
    }
  });

  async function getCafe() {
    const res = await fetch(`/api/places?lat=${coords.latitude}&lon=${coords.longitude}`);
    const data = await res.json();
    place = data.cafe;
  }  
</script>

<!-- <button on:click={getLoc}>test</button> -->
<p>Randomized local cafe shown below!</p>
{#if place !== null}
  <Place place={place} />
{:else}
  <p>Loading...</p>
{/if}




