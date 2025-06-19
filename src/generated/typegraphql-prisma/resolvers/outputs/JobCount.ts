import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { JobCountInflowsArgs } from "./args/JobCountInflowsArgs";

@TypeGraphQL.ObjectType("JobCount", {})
export class JobCount {
  inflows!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "inflows",
    nullable: false
  })
  getInflows(@TypeGraphQL.Root() root: JobCount, @TypeGraphQL.Args() args: JobCountInflowsArgs): number {
    return root.inflows;
  }
}
