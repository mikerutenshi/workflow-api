import { objectType } from "nexus";

GraphQlDate
export const User = objectType({
    name: 'User',
    definition(t) {
        t.nonNull.int('id');     
        t.nonNull.string('username');
        t.nonNull.string('firstName');
        t.string('lastName');
        t.nonNull.string('password');
        t.nonNull.boolean('isActive');
        t.string('refreshToken');
        t.datetime('refreshTokenExpDate');
        t.datetime('createdAt');
        t.datetime('updatedAt');
    },
});