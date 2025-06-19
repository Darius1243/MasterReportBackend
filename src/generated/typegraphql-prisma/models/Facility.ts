import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../prisma";
import { DecimalJSScalar } from "../scalars";
import { Inflow } from "../models/Inflow";
import { FacilityCount } from "../resolvers/outputs/FacilityCount";

@TypeGraphQL.ObjectType("Facility", {})
export class Facility {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  inflows?: Inflow[];

  @TypeGraphQL.Field(_type => FacilityCount, {
    nullable: true
  })
  _count?: FacilityCount | null;
}
