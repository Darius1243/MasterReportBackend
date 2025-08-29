import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateOutflowArgs } from "./args/AggregateOutflowArgs";
import { Outflow } from "../../../models/Outflow";
import { AggregateOutflow } from "../../outputs/AggregateOutflow";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Outflow)
export class AggregateOutflowResolver {
  @TypeGraphQL.Query(_returns => AggregateOutflow, {
    nullable: false
  })
  async aggregateOutflow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateOutflowArgs): Promise<AggregateOutflow> {
    return getPrismaFromContext(ctx).outflow.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
