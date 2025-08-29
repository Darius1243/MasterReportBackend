import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowAvgAggregate } from "../outputs/OutflowAvgAggregate";
import { OutflowCountAggregate } from "../outputs/OutflowCountAggregate";
import { OutflowMaxAggregate } from "../outputs/OutflowMaxAggregate";
import { OutflowMinAggregate } from "../outputs/OutflowMinAggregate";
import { OutflowSumAggregate } from "../outputs/OutflowSumAggregate";

@TypeGraphQL.ObjectType("AggregateOutflow", {})
export class AggregateOutflow {
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
