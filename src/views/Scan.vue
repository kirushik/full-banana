<template>
  <main>
    <h1>Scanning</h1>
    <qrcode-stream v-on:decode="onDecode"/>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default class Scan extends Vue {
  private onDecode(result): void {
    console.log(result);
  }
}
</script>
