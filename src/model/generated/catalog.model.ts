import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Owner} from "./owner.model"
import {Part} from "./part.model"

@Entity_()
export class Catalog {
    constructor(props?: Partial<Catalog>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Owner, {nullable: true})
    owner!: Owner

    @Column_("text", {nullable: false})
    metadataURI!: string

    @Column_("text", {nullable: false})
    type!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    createAtBlock!: bigint

    @Column_("text", {nullable: false})
    transactionHash!: string

    @OneToMany_(() => Part, e => e.catalog)
    parts!: Part[]
}
