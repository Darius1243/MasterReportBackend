import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPersonArgs } from "./args/CreateManyAndReturnPersonArgs";
import { Person } from "../../../models/Person";
import { CreateManyAndReturnPerson } from "../../outputs/CreateManyAndReturnPerson";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Person)
export class CreateManyAndReturnPersonResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPerson], {
    nullable: false
  })
  async createManyAndReturnPerson(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPersonArgs): Promise<CreateManyAndReturnPerson[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).person.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
