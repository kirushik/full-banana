<template>
  <main>
    <div class="screen-only">
      <h1>Printing</h1>
      <div><input v-model="title" /></div>
      <div><textarea v-model="text" /></div>
      <div><input v-model="passphrase" /></div>
      <div><button @click="qrMe()">QR Me!</button></div>
    </div>
    <h1 class="print-only">{{title}}</h1>
    <div v-if="qrData.length>0">
      <QrCode :data="qrData" />
    </div>
    <button id="printMe" class="screen-only" v-if="qrData.length>0" title="Print me!" @click="printMe()">🖨️</button>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import * as lzma from 'lzma-purejs';
import * as scrypt from 'scryptsy';
import * as crypto from 'tweetnacl-ts';

import QrCode from '../components/QrCode.vue';

import { QrMessage } from '../utils/serialization';

@Component({
  components: {
    QrCode,
  },
})
export default class App extends Vue {
  private title = 'Secret title';
  private text = 'Fill me';
  private passphrase = 'abcdefgh';
  private qrData = new Uint8Array([]);

  private qrMe(): void {
    const compressedText = lzma.compressFile(new TextEncoder().encode(this.text));

    const salt = new Buffer(crypto.hash(new TextEncoder().encode(this.title)));
    // tslint:disable-next-line:no-bitwise
    const key = scrypt.default(this.passphrase, salt, 1 << 15, 8, 1, 32 /*crypto.SecretBoxLength.Key*/);
    const nonce = crypto.randomBytes(24 /*crypto.SecretBoxLength.Nonce*/);
    const encryptedText = crypto.secretbox(compressedText, nonce, key);

    const qrMessage = new QrMessage({title: this.title, nonce, data: encryptedText});
    this.qrData = QrMessage.encode(qrMessage).finish();
  }
  private printMe(): void { window.print(); }
}
</script>
