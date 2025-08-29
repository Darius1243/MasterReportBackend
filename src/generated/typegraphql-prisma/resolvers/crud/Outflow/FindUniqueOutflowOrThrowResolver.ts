import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueOutflowOrThrowArgs } from "./args/FindUniqueOutflowOrThrowArgs";
import { Outflow } from "../../../models/Outflow";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Outflow)
export class FindUniqueOutflowOrThrowResolver {
  @TypeGraphQL.Query(_returns => Outflow, {
    nullable: true
  })
  async getOutflow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueOutflowOrThrowArgs): Promise<Outflow | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).outflow.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
