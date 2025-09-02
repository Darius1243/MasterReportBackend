import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../prisma";
import { DecimalJSScalar } from "../scalars";
import { Inflow } from "../models/Inflow";
import { Outflow } from "../models/Outflow";
import { JobCount } from "../resolvers/outputs/JobCount";

@TypeGraphQL.ObjectType("Job", {})
export class Job {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  inflows?: Inflow[];

  outflows?: Outflow[];

  @TypeGraphQL.Field(_type => JobCount, {
    nullable: true
  })
  _count?: JobCount | null;
}
