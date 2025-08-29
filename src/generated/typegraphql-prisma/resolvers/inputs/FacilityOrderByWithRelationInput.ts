import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowOrderByRelationAggregateInput } from "../inputs/InflowOrderByRelationAggregateInput";
import { OutflowOrderByRelationAggregateInput } from "../inputs/OutflowOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FacilityOrderByWithRelationInput", {})
export class FacilityOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => InflowOrderByRelationAggregateInput, {
    nullable: true
  })
  inflows?: InflowOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OutflowOrderByRelationAggregateInput, {
    nullable: true
  })
  outflow?: OutflowOrderByRelationAggregateInput | undefined;
}
