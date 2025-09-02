import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowAvgAggregate } from "../outputs/OutflowAvgAggregate";
import { OutflowCountAggregate } from "../outputs/OutflowCountAggregate";
import { OutflowMaxAggregate } from "../outputs/OutflowMaxAggregate";
import { OutflowMinAggregate } from "../outputs/OutflowMinAggregate";
import { OutflowSumAggregate } from "../outputs/OutflowSumAggregate";

@TypeGraphQL.ObjectType("OutflowGroupBy", {})
export class OutflowGroupBy {
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

  @TypeGraphQL.Field(_type => OutflowCountAggregate, {
    nullable: true
  })
  _count!: OutflowCountAggregate | null;

  @TypeGraphQL.Field(_type => OutflowAvgAggregate, {
    nullable: true
  })
  _avg!: OutflowAvgAggregate | null;

  @TypeGraphQL.Field(_type => OutflowSumAggregate, {
    nullable: true
  })
  _sum!: OutflowSumAggregate | null;

  @TypeGraphQL.Field(_type => OutflowMinAggregate, {
    nullable: true
  })
  _min!: OutflowMinAggregate | null;

  @TypeGraphQL.Field(_type => OutflowMaxAggregate, {
    nullable: true
  })
  _max!: OutflowMaxAggregate | null;
}
