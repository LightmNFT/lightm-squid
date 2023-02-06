import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Collection} from "./collection.model"
import {Catalog} from "./catalog.model"
import {Token} from "./token.model"

@Entity_()
export class Owner {
    constructor(props?: Partial<Owner>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @OneToMany_(() => Collection, e => e.owner)
    ownedCollections!: Collection[]

    @OneToMany_(() => Catalog, e => e.owner)
    ownedCatalogs!: Catalog[]

    @OneToMany_(() => Token, e => e.owner)
    ownedTokens!: Token[]

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    collectionBalance!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    catalogBalance!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    balance!: bigint
}
