import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnJobArgs } from "./args/CreateManyAndReturnJobArgs";
import { Job } from "../../../models/Job";
import { CreateManyAndReturnJob } from "../../outputs/CreateManyAndReturnJob";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Job)
export class CreateManyAndReturnJobResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnJob], {
    nullable: false
  })
  async createManyAndReturnJob(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnJobArgs): Promise<CreateManyAndReturnJob[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).job.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
