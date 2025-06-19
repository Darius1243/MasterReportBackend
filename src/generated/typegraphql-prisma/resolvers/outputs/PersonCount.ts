import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { PersonCountInflowsArgs } from "./args/PersonCountInflowsArgs";

@TypeGraphQL.ObjectType("PersonCount", {})
export class PersonCount {
  inflows!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "inflows",
    nullable: false
  })
  getInflows(@TypeGraphQL.Root() root: PersonCount, @TypeGraphQL.Args() args: PersonCountInflowsArgs): number {
    return root.inflows;
  }
}
