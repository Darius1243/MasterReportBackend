import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Facility } from "../../../models/Facility";
import { Inflow } from "../../../models/Inflow";
import { Job } from "../../../models/Job";
import { Person } from "../../../models/Person";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Inflow)
export class InflowRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Person, {
    nullable: false
  })
  async person(@TypeGraphQL.Root() inflow: Inflow, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Person> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).inflow.findUniqueOrThrow({
      where: {
        id: inflow.id,
      },
    }).person({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Facility, {
    nullable: false
  })
  async facility(@TypeGraphQL.Root() inflow: Inflow, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Facility> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).inflow.findUniqueOrThrow({
      where: {
        id: inflow.id,
      },
    }).facility({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Job, {
    nullable: false
  })
  async job(@TypeGraphQL.Root() inflow: Inflow, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Job> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).inflow.findUniqueOrThrow({
      where: {
        id: inflow.id,
      },
    }).job({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
