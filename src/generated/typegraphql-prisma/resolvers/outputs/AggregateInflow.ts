import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowAvgAggregate } from "../outputs/InflowAvgAggregate";
import { InflowCountAggregate } from "../outputs/InflowCountAggregate";
import { InflowMaxAggregate } from "../outputs/InflowMaxAggregate";
import { InflowMinAggregate } from "../outputs/InflowMinAggregate";
import { InflowSumAggregate } from "../outputs/InflowSumAggregate";

@TypeGraphQL.ObjectType("AggregateInflow", {})
export class AggregateInflow {
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
