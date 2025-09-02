import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnInflowJobArgs } from "./args/CreateManyAndReturnInflowJobArgs";
import { Facility } from "../../models/Facility";
import { Job } from "../../models/Job";
import { Person } from "../../models/Person";

@TypeGraphQL.ObjectType("CreateManyAndReturnInflow", {})
export class CreateManyAndReturnInflow {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  amount!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  personId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  facilityId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  jobId!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => Person, {
    nullable: false
  })
  person!: Person;

  @TypeGraphQL.Field(_type => Facility, {
    nullable: false
  })
  facility!: Facility;

  job!: Job | null;

  @TypeGraphQL.Field(_type => Job, {
    name: "job",
    nullable: true
  })
  getJob(@TypeGraphQL.Root() root: CreateManyAndReturnInflow, @TypeGraphQL.Args() args: CreateManyAndReturnInflowJobArgs): Job | null {
    return root.job;
  }
}
