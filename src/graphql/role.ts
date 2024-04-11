import { objectType } from "nexus";

export const Role = objectType({
    name: 'Role',
    definition(t) {
        t.nonNull.int('id');     
        t.nonNull.string('name');
        t.nonNull.list.field('users', {
            type: 'User',
            resolve(root, _, ctx) {
                return ctx.db.Role
                    .findUnique({
                        where: { id: root.id || undefined}
                    })
                    .users();
            }
        })
    },
});