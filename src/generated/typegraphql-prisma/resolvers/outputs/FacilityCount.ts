import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FacilityCountInflowsArgs } from "./args/FacilityCountInflowsArgs";
import { FacilityCountOutflowArgs } from "./args/FacilityCountOutflowArgs";

@TypeGraphQL.ObjectType("FacilityCount", {})
export class FacilityCount {
  inflows!: number;
  outflow!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "inflows",
    nullable: false
  })
  getInflows(@TypeGraphQL.Root() root: FacilityCount, @TypeGraphQL.Args() args: FacilityCountInflowsArgs): number {
    return root.inflows;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "outflow",
    nullable: false
  })
  getOutflow(@TypeGraphQL.Root() root: FacilityCount, @TypeGraphQL.Args() args: FacilityCountOutflowArgs): number {
    return root.outflow;
  }
}
