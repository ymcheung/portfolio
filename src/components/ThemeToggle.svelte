<script lang="ts">
  import { onMount } from 'svelte';

  let theme: 'light' | 'dark' = 'light';

  function applyTheme(nextTheme: 'light' | 'dark') {
    theme = nextTheme;
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem('theme', nextTheme);
  }

  onMount(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    applyTheme(saved === 'light' || saved === 'dark' ? saved : prefersDark ? 'dark' : 'light');
  });
</script>

<button
  type="button"
  class="inline-flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden border-0 bg-transparent -ms-2 p-0 text-[hsl(var(--shade-300))]"
  aria-label={theme === 'dark' ? '切換 Scheme：亮色' : '切換 Scheme：暗色'}

  on:click={() => applyTheme(theme === 'dark' ? 'light' : 'dark')}
>
  {#if theme === 'dark'}
    <svg viewBox="0 0 28 28" role="img" class="h-7 w-7">
      <title>Switch to Light Mode</title>
      <circle cx="14" cy="14" r="14" fill="hsl(var(--scheme-icon-light-bg))" />
      <circle cx="14" cy="14" r="6" fill="hsl(var(--sun))" />
    </svg>
  {:else}
    <svg viewBox="0 0 28 28" role="img" class="h-7 w-7">
      <title>Switch to Dark Mode</title>
      <circle cx="14" cy="14" r="14" fill="hsl(var(--scheme-icon-dark-bg))" />
      <path d="M18 7.28988C15.1085 8.15043 13 10.829 13 14C13 17.171 15.1085 19.8496 18 20.7101C17.3663 20.8987 16.695 21 16 21C12.134 21 9 17.866 9 14C9 10.134 12.134 7 16 7C16.695 7 17.3663 7.10128 18 7.28988Z" fill="hsl(var(--shade-300))" />
    </svg>
  {/if}
</button>
