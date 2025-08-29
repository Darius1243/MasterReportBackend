import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../prisma";
import { DecimalJSScalar } from "../scalars";
import { Inflow } from "../models/Inflow";
import { Outflow } from "../models/Outflow";
import { PersonCount } from "../resolvers/outputs/PersonCount";

@TypeGraphQL.ObjectType("Person", {})
export class Person {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | null;

  inflows?: Inflow[];

  outflows?: Outflow[];

  @TypeGraphQL.Field(_type => PersonCount, {
    nullable: true
  })
  _count?: PersonCount | null;
}
