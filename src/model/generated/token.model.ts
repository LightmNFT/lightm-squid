import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Owner} from "./owner.model"
import {Collection} from "./collection.model"
import {Transfer} from "./transfer.model"
import {NestTransfer} from "./nestTransfer.model"

@Entity_()
export class Token {
    constructor(props?: Partial<Token>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    tokenId!: bigint

    @Index_()
    @ManyToOne_(() => Owner, {nullable: true})
    owner!: Owner | undefined | null

    @Index_()
    @ManyToOne_(() => Collection, {nullable: true})
    collection!: Collection

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    createAtBlock!: bigint

    @Column_("text", {nullable: false})
    transactionHash!: string

    @OneToMany_(() => Transfer, e => e.token)
    transfers!: Transfer[]

    @OneToMany_(() => NestTransfer, e => e.token)
    nestTransfers!: NestTransfer[]
}
