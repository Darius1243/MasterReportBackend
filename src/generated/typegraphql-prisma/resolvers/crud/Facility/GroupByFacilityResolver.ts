import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByFacilityArgs } from "./args/GroupByFacilityArgs";
import { Facility } from "../../../models/Facility";
import { FacilityGroupBy } from "../../outputs/FacilityGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Facility)
export class GroupByFacilityResolver {
  @TypeGraphQL.Query(_returns => [FacilityGroupBy], {
    nullable: false
  })
  async groupByFacility(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByFacilityArgs): Promise<FacilityGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).facility.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
