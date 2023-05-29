import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Owner} from "./owner.model"
import {Token} from "./token.model"
import {AssetEntry} from "./assetEntry.model"

@Entity_()
export class Collection {
    constructor(props?: Partial<Collection>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Owner, {nullable: true})
    owner!: Owner

    @Column_("text", {nullable: true})
    name!: string | undefined | null

    @Column_("text", {nullable: true})
    symbol!: string | undefined | null

    @Column_("text", {nullable: false})
    metadataURI!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    totalSupply!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    createAtBlock!: bigint

    @Column_("text", {nullable: false})
    transactionHash!: string

    @Column_("bool", {nullable: false})
    isCustomized!: boolean

    @OneToMany_(() => Token, e => e.collection)
    tokens!: Token[]

    @OneToMany_(() => AssetEntry, e => e.collection)
    assetEntries!: AssetEntry[]
}
