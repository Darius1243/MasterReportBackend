import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Facility } from "../../../models/Facility";
import { Outflow } from "../../../models/Outflow";
import { Person } from "../../../models/Person";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Outflow)
export class OutflowRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Person, {
    nullable: false
  })
  async person(@TypeGraphQL.Root() outflow: Outflow, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Person> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).outflow.findUniqueOrThrow({
      where: {
        id: outflow.id,
      },
    }).person({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Facility, {
    nullable: false
  })
  async facility(@TypeGraphQL.Root() outflow: Outflow, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Facility> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).outflow.findUniqueOrThrow({
      where: {
        id: outflow.id,
      },
    }).facility({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
