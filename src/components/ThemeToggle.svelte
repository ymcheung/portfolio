<script lang="ts">
  import { play } from 'cuelume';
  import { onMount } from 'svelte';

  let { locale, show3d = false }: { locale: 'en' | 'zh-Hant-TW'; show3d?: boolean } = $props();
  let theme = $state<'light' | 'dark'>('light');
  let anaglyph = $state(false);

  let glassesHint = $derived(locale === 'en'
    ? 'Use red/cyan glasses to view project images in 3D.'
    : '使用紅色與青色眼鏡，以 3D 效果觀看專案圖片。');
  let glassesAriaLabel = $derived(locale === 'en'
    ? `${anaglyph ? 'Disable' : 'Enable'} 3D glasses mode. ${glassesHint}`
    : `${anaglyph ? '關閉' : '開啟'} 3D 眼鏡模式。${glassesHint}`);

  function applyTheme(nextTheme: 'light' | 'dark') {
    theme = nextTheme;
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem('theme', nextTheme);
  }

  function applyAnaglyph(nextAnaglyph: boolean) {
    anaglyph = nextAnaglyph;
    document.documentElement.classList.toggle('anaglyph', nextAnaglyph);
    localStorage.setItem('anaglyph', String(nextAnaglyph));
  }

  function toggleAnaglyph() {
    const nextAnaglyph = !anaglyph;
    applyAnaglyph(nextAnaglyph);
    play(nextAnaglyph ? 'sparkle' : 'whisper', { volume: 0.4 });
  }

  onMount(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    applyTheme(saved === 'light' || saved === 'dark' ? saved : prefersDark ? 'dark' : 'light');
    applyAnaglyph(localStorage.getItem('anaglyph') === 'true');
  });
</script>

<div class="grid h-12 grid-flow-col auto-cols-max items-center gap-2">
  <button
    type="button"
    class="inline-grid h-12 w-12 cursor-pointer place-items-center overflow-hidden border-0 bg-transparent -ms-2 p-0 text-shade-300 transition-transform duration-150 ease-out active:scale-[0.96] motion-reduce:transition-none"
    aria-label={theme === 'dark' ? '切換 Scheme：亮色' : '切換 Scheme：暗色'}
    onclick={() => applyTheme(theme === 'dark' ? 'light' : 'dark')}
  >
    {#if theme === 'dark'}
      <svg viewBox="0 0 28 28" role="img" class="h-7 w-7">
        <title>Switch to Light Mode</title>
        <circle class="fill-scheme-icon-light-bg" cx="14" cy="14" r="14" />
        <circle class="fill-sun" cx="14" cy="14" r="6" />
      </svg>
    {:else}
      <svg viewBox="0 0 28 28" role="img" class="h-7 w-7">
        <title>Switch to Dark Mode</title>
        <circle class="fill-scheme-icon-dark-bg" cx="14" cy="14" r="14" />
        <path class="fill-shade-300" d="M18 7.28988C15.1085 8.15043 13 10.829 13 14C13 17.171 15.1085 19.8496 18 20.7101C17.3663 20.8987 16.695 21 16 21C12.134 21 9 17.866 9 14C9 10.134 12.134 7 16 7C16.695 7 17.3663 7.10128 18 7.28988Z" />
      </svg>
    {/if}
  </button>

  {#if show3d && theme === 'dark'}
    <button
      type="button"
      class="group inline-grid h-10 w-10 cursor-pointer place-items-center border-0 bg-transparent p-0 transition-transform duration-150 ease-out active:scale-[0.96] motion-reduce:transition-none"
      aria-label={glassesAriaLabel}
      aria-pressed={anaglyph}
      title={glassesHint}
      onclick={toggleAnaglyph}
    >
      <span class="inline-grid h-7 w-7 place-items-center rounded bg-shade-1500 transition-colors duration-150 ease-out group-hover:bg-shade-1400">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          class={[
            'h-5 w-5 text-shade-600',
            anaglyph && 'text-[oklch(84.854%_0.135_201.45)] [filter:drop-shadow(-1px_0_oklch(65.421%_0.23214_28.66))]',
          ]}
        >
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
            <path d="m22.5 10.5-5.75-5H14.5m-14 5 5.75-5H8.5m-8 5 2 9H8l3.5-3.5 3.5 3.5h5.5l2-9m-22 0h22" />
            <path d="M3.25 12.5h7.25V14L7 17.5H4.5zm16.5 0H12.5V14l3.5 3.5h2.5z" />
          </g>
        </svg>
      </span>
    </button>
  {/if}
</div>
