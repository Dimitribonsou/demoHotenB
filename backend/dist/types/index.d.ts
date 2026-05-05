export interface ResolverContext {
    userId?: string;
    [key: string]: unknown;
}
export type GraphQLResolver<TSource = any, TArgs = any> = (parent: TSource, args: TArgs, context: ResolverContext, info?: any) => any;
//# sourceMappingURL=index.d.ts.map