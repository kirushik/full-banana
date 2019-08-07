<template>
  <main>
    <h1>Scanning</h1>
    <qrcode-stream v-on:decode="onDecode"/>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { QrMessage } from '../utils/serialization';

export default class Scan extends Vue {
  private onDecode(result: string): void {
    let data = new TextEncoder().encode(result);
    let message = QrMessage.decode(data);
    console.log(message);
  }
}
</script>
