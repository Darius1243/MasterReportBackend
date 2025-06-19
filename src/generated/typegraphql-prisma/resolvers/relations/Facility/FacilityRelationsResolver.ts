import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Facility } from "../../../models/Facility";
import { Inflow } from "../../../models/Inflow";
import { FacilityInflowsArgs } from "./args/FacilityInflowsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Facility)
export class FacilityRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Inflow], {
    nullable: false
  })
  async inflows(@TypeGraphQL.Root() facility: Facility, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FacilityInflowsArgs): Promise<Inflow[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).facility.findUniqueOrThrow({
      where: {
        id: facility.id,
      },
    }).inflows({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
