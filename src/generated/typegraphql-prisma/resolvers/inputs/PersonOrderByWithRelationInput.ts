import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowOrderByRelationAggregateInput } from "../inputs/InflowOrderByRelationAggregateInput";
import { OutflowOrderByRelationAggregateInput } from "../inputs/OutflowOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PersonOrderByWithRelationInput", {})
export class PersonOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  email?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => InflowOrderByRelationAggregateInput, {
    nullable: true
  })
  inflows?: InflowOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OutflowOrderByRelationAggregateInput, {
    nullable: true
  })
  outflows?: OutflowOrderByRelationAggregateInput | undefined;
}
