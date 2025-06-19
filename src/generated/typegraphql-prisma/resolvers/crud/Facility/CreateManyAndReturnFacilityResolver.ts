import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnFacilityArgs } from "./args/CreateManyAndReturnFacilityArgs";
import { Facility } from "../../../models/Facility";
import { CreateManyAndReturnFacility } from "../../outputs/CreateManyAndReturnFacility";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Facility)
export class CreateManyAndReturnFacilityResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnFacility], {
    nullable: false
  })
  async createManyAndReturnFacility(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnFacilityArgs): Promise<CreateManyAndReturnFacility[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).facility.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
