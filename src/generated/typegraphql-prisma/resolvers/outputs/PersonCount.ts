import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { PersonCountInflowsArgs } from "./args/PersonCountInflowsArgs";
import { PersonCountOutflowsArgs } from "./args/PersonCountOutflowsArgs";

@TypeGraphQL.ObjectType("PersonCount", {})
export class PersonCount {
  inflows!: number;
  outflows!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "inflows",
    nullable: false
  })
  getInflows(@TypeGraphQL.Root() root: PersonCount, @TypeGraphQL.Args() args: PersonCountInflowsArgs): number {
    return root.inflows;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "outflows",
    nullable: false
  })
  getOutflows(@TypeGraphQL.Root() root: PersonCount, @TypeGraphQL.Args() args: PersonCountOutflowsArgs): number {
    return root.outflows;
  }
}
