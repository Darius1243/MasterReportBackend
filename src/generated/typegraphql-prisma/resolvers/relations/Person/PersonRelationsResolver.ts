import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Inflow } from "../../../models/Inflow";
import { Outflow } from "../../../models/Outflow";
import { Person } from "../../../models/Person";
import { PersonInflowsArgs } from "./args/PersonInflowsArgs";
import { PersonOutflowsArgs } from "./args/PersonOutflowsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Person)
export class PersonRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Inflow], {
    nullable: false
  })
  async inflows(@TypeGraphQL.Root() person: Person, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PersonInflowsArgs): Promise<Inflow[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).person.findUniqueOrThrow({
      where: {
        id: person.id,
      },
    }).inflows({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Outflow], {
    nullable: false
  })
  async outflows(@TypeGraphQL.Root() person: Person, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PersonOutflowsArgs): Promise<Outflow[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).person.findUniqueOrThrow({
      where: {
        id: person.id,
      },
    }).outflows({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
