<script lang="ts">
  import { trpc } from "$lib/trpc";

  async function stuff() {
    const v = await trpc.greeting.query();
    console.log(v);
  }
</script>

<div class="p-6">
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    on:click={stuff}
  >
    click me
  </button>
</div>
