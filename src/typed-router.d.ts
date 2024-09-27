/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'unplugin-vue-router/types'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    'Home': RouteRecordInfo<'Home', '/', Record<never, never>, Record<never, never>>,
    'Login': RouteRecordInfo<'Login', '/auth/login', Record<never, never>, Record<never, never>>,
    '/auth/register/': RouteRecordInfo<'/auth/register/', '/auth/register', Record<never, never>, Record<never, never>>,
    'Dashboard': RouteRecordInfo<'Dashboard', '/s-admin', Record<never, never>, Record<never, never>>,
    'Categories': RouteRecordInfo<'Categories', '/s-admin/categories', Record<never, never>, Record<never, never>>,
    'Categories-add': RouteRecordInfo<'Categories-add', '/s-admin/categories/add', Record<never, never>, Record<never, never>>,
    'Products': RouteRecordInfo<'Products', '/s-admin/products', Record<never, never>, Record<never, never>>,
    'Products-add': RouteRecordInfo<'Products-add', '/s-admin/products/add', Record<never, never>, Record<never, never>>,
    'Roles': RouteRecordInfo<'Roles', '/s-admin/roles', Record<never, never>, Record<never, never>>,
    'Roles-id': RouteRecordInfo<'Roles-id', '/s-admin/roles/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'Roles-add': RouteRecordInfo<'Roles-add', '/s-admin/roles/add', Record<never, never>, Record<never, never>>,
    'Users': RouteRecordInfo<'Users', '/s-admin/users', Record<never, never>, Record<never, never>>,
    'Users-id': RouteRecordInfo<'Users-id', '/s-admin/users/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'Users-add': RouteRecordInfo<'Users-add', '/s-admin/users/add', Record<never, never>, Record<never, never>>,
  }
}
