import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnInflowArgs } from "./args/CreateManyAndReturnInflowArgs";
import { Inflow } from "../../../models/Inflow";
import { CreateManyAndReturnInflow } from "../../outputs/CreateManyAndReturnInflow";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Inflow)
export class CreateManyAndReturnInflowResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnInflow], {
    nullable: false
  })
  async createManyAndReturnInflow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnInflowArgs): Promise<CreateManyAndReturnInflow[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).inflow.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
