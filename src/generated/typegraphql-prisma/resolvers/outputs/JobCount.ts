import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { JobCountInflowsArgs } from "./args/JobCountInflowsArgs";
import { JobCountOutflowsArgs } from "./args/JobCountOutflowsArgs";

@TypeGraphQL.ObjectType("JobCount", {})
export class JobCount {
  inflows!: number;
  outflows!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "inflows",
    nullable: false
  })
  getInflows(@TypeGraphQL.Root() root: JobCount, @TypeGraphQL.Args() args: JobCountInflowsArgs): number {
    return root.inflows;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "outflows",
    nullable: false
  })
  getOutflows(@TypeGraphQL.Root() root: JobCount, @TypeGraphQL.Args() args: JobCountOutflowsArgs): number {
    return root.outflows;
  }
}
