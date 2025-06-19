import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstInflowOrThrowArgs } from "./args/FindFirstInflowOrThrowArgs";
import { Inflow } from "../../../models/Inflow";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Inflow)
export class FindFirstInflowOrThrowResolver {
  @TypeGraphQL.Query(_returns => Inflow, {
    nullable: true
  })
  async findFirstInflowOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstInflowOrThrowArgs): Promise<Inflow | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).inflow.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
