import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Collection} from "./collection.model"

@Entity_()
export class AssetEntry {
    constructor(props?: Partial<AssetEntry>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    assetId!: bigint

    @Index_()
    @ManyToOne_(() => Collection, {nullable: true})
    collection!: Collection

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    createAtBlock!: bigint

    @Column_("text", {nullable: false})
    transactionHash!: string
}
