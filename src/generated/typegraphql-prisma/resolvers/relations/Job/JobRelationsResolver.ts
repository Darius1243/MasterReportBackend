import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Inflow } from "../../../models/Inflow";
import { Job } from "../../../models/Job";
import { JobInflowsArgs } from "./args/JobInflowsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Job)
export class JobRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Inflow], {
    nullable: false
  })
  async inflows(@TypeGraphQL.Root() job: Job, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: JobInflowsArgs): Promise<Inflow[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).job.findUniqueOrThrow({
      where: {
        id: job.id,
      },
    }).inflows({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
