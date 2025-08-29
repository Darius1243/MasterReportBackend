import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstOutflowOrThrowArgs } from "./args/FindFirstOutflowOrThrowArgs";
import { Outflow } from "../../../models/Outflow";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Outflow)
export class FindFirstOutflowOrThrowResolver {
  @TypeGraphQL.Query(_returns => Outflow, {
    nullable: true
  })
  async findFirstOutflowOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstOutflowOrThrowArgs): Promise<Outflow | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).outflow.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
