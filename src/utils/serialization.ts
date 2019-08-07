import {Message, Field} from 'protobufjs/light';

export class QrMessage extends Message<QrMessage> {
    @Field.d(1, 'string')
    public title!: string;

    @Field.d(2, 'bytes')
    public nonce!: Uint8Array;

    @Field.d(3, 'bytes')
    public data!: Uint8Array;
}
