<script>
  import { Fa, FaLayers } from "svelte-fa"
  import { theme, toggleTheme } from "../store/theme"
  import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon"
  import { faSun } from "@fortawesome/free-solid-svg-icons/faSun"

</script>

<button class="theme-switch-wrapper" onclick={toggleTheme} type="button" aria-label="Toggle theme">
  <FaLayers size="1.5x">
        {#if $theme === "light"}
        <Fa icon={faMoon} color="#51504d" />
        {:else}
        <Fa icon={faSun} color="#afa99e" />
        {/if}
  </FaLayers>
</button>

<style>
  .theme-switch-wrapper {
    background: none;
    border: none;
    cursor: pointer;
    margin: 0 -1rem 0 -1rem;
    width: 40px;
    height: 40px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
 
</style>
