module.exports = class Data1685344989474 {
    name = 'Data1685344989474'

    async up(db) {
        await db.query(`ALTER TABLE "collection" RENAME COLUMN "has_custom_cuts" TO "is_customized"`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "collection" RENAME COLUMN "is_customized" TO "has_custom_cuts"`)
    }
}
