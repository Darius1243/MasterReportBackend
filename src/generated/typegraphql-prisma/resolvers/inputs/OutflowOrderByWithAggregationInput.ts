import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowAvgOrderByAggregateInput } from "../inputs/OutflowAvgOrderByAggregateInput";
import { OutflowCountOrderByAggregateInput } from "../inputs/OutflowCountOrderByAggregateInput";
import { OutflowMaxOrderByAggregateInput } from "../inputs/OutflowMaxOrderByAggregateInput";
import { OutflowMinOrderByAggregateInput } from "../inputs/OutflowMinOrderByAggregateInput";
import { OutflowSumOrderByAggregateInput } from "../inputs/OutflowSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OutflowOrderByWithAggregationInput", {})
export class OutflowOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  amount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  personId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  facilityId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  jobId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => OutflowCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: OutflowCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OutflowAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: OutflowAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OutflowMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: OutflowMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OutflowMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: OutflowMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OutflowSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: OutflowSumOrderByAggregateInput | undefined;
}
