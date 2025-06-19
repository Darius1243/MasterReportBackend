import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FacilityAvgAggregate } from "../outputs/FacilityAvgAggregate";
import { FacilityCountAggregate } from "../outputs/FacilityCountAggregate";
import { FacilityMaxAggregate } from "../outputs/FacilityMaxAggregate";
import { FacilityMinAggregate } from "../outputs/FacilityMinAggregate";
import { FacilitySumAggregate } from "../outputs/FacilitySumAggregate";

@TypeGraphQL.ObjectType("AggregateFacility", {})
export class AggregateFacility {
  @TypeGraphQL.Field(_type => FacilityCountAggregate, {
    nullable: true
  })
  _count!: FacilityCountAggregate | null;

  @TypeGraphQL.Field(_type => FacilityAvgAggregate, {
    nullable: true
  })
  _avg!: FacilityAvgAggregate | null;

  @TypeGraphQL.Field(_type => FacilitySumAggregate, {
    nullable: true
  })
  _sum!: FacilitySumAggregate | null;

  @TypeGraphQL.Field(_type => FacilityMinAggregate, {
    nullable: true
  })
  _min!: FacilityMinAggregate | null;

  @TypeGraphQL.Field(_type => FacilityMaxAggregate, {
    nullable: true
  })
  _max!: FacilityMaxAggregate | null;
}
