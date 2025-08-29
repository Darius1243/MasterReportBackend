import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnOutflowArgs } from "./args/CreateManyAndReturnOutflowArgs";
import { Outflow } from "../../../models/Outflow";
import { CreateManyAndReturnOutflow } from "../../outputs/CreateManyAndReturnOutflow";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Outflow)
export class CreateManyAndReturnOutflowResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnOutflow], {
    nullable: false
  })
  async createManyAndReturnOutflow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnOutflowArgs): Promise<CreateManyAndReturnOutflow[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).outflow.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
