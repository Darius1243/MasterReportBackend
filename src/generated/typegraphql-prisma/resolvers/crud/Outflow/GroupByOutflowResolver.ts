import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByOutflowArgs } from "./args/GroupByOutflowArgs";
import { Outflow } from "../../../models/Outflow";
import { OutflowGroupBy } from "../../outputs/OutflowGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Outflow)
export class GroupByOutflowResolver {
  @TypeGraphQL.Query(_returns => [OutflowGroupBy], {
    nullable: false
  })
  async groupByOutflow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByOutflowArgs): Promise<OutflowGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).outflow.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
