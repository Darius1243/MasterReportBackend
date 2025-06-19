import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateInflowArgs } from "./args/AggregateInflowArgs";
import { Inflow } from "../../../models/Inflow";
import { AggregateInflow } from "../../outputs/AggregateInflow";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Inflow)
export class AggregateInflowResolver {
  @TypeGraphQL.Query(_returns => AggregateInflow, {
    nullable: false
  })
  async aggregateInflow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateInflowArgs): Promise<AggregateInflow> {
    return getPrismaFromContext(ctx).inflow.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
