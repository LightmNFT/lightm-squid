import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Catalog} from "./catalog.model"

@Entity_()
export class Part {
    constructor(props?: Partial<Part>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Catalog, {nullable: true})
    catalog!: Catalog

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    partId!: bigint

    @Column_("int4", {nullable: false})
    itemType!: number

    @Column_("int4", {nullable: false})
    zIndex!: number

    @Column_("text", {nullable: false})
    metadataURI!: string

    @Column_("text", {array: true, nullable: false})
    equippableAddresses!: (string)[]

    @Column_("bool", {nullable: false})
    equippableToAll!: boolean

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    createAtBlock!: bigint

    @Column_("text", {nullable: false})
    transactionHash!: string
}
