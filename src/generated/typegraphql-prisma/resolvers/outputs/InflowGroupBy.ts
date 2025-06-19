import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowAvgAggregate } from "../outputs/InflowAvgAggregate";
import { InflowCountAggregate } from "../outputs/InflowCountAggregate";
import { InflowMaxAggregate } from "../outputs/InflowMaxAggregate";
import { InflowMinAggregate } from "../outputs/InflowMinAggregate";
import { InflowSumAggregate } from "../outputs/InflowSumAggregate";

@TypeGraphQL.ObjectType("InflowGroupBy", {})
export class InflowGroupBy {
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
    nullable: false
  })
  jobId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => InflowCountAggregate, {
    nullable: true
  })
  _count!: InflowCountAggregate | null;

  @TypeGraphQL.Field(_type => InflowAvgAggregate, {
    nullable: true
  })
  _avg!: InflowAvgAggregate | null;

  @TypeGraphQL.Field(_type => InflowSumAggregate, {
    nullable: true
  })
  _sum!: InflowSumAggregate | null;

  @TypeGraphQL.Field(_type => InflowMinAggregate, {
    nullable: true
  })
  _min!: InflowMinAggregate | null;

  @TypeGraphQL.Field(_type => InflowMaxAggregate, {
    nullable: true
  })
  _max!: InflowMaxAggregate | null;
}
