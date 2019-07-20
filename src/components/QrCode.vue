<template>
  <div v-html="qrCodeHTML"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import * as qrcode from 'qrcode-generator';

@Component
export default class QrCode extends Vue {
  @Prop() private data!: Uint8Array;

  get qrCodeHTML(): string {
      const qr = qrcode.default(0, 'L');
      qr.addData(new TextDecoder('iso-8859-1').decode(this.data));
      qr.make();
      return qr.createSvgTag(4);
  }
}
</script>