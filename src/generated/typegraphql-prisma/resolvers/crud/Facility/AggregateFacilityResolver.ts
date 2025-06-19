import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateFacilityArgs } from "./args/AggregateFacilityArgs";
import { Facility } from "../../../models/Facility";
import { AggregateFacility } from "../../outputs/AggregateFacility";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Facility)
export class AggregateFacilityResolver {
  @TypeGraphQL.Query(_returns => AggregateFacility, {
    nullable: false
  })
  async aggregateFacility(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFacilityArgs): Promise<AggregateFacility> {
    return getPrismaFromContext(ctx).facility.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
