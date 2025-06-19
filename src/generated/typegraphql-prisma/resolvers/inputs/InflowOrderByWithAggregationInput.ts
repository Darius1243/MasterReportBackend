import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowAvgOrderByAggregateInput } from "../inputs/InflowAvgOrderByAggregateInput";
import { InflowCountOrderByAggregateInput } from "../inputs/InflowCountOrderByAggregateInput";
import { InflowMaxOrderByAggregateInput } from "../inputs/InflowMaxOrderByAggregateInput";
import { InflowMinOrderByAggregateInput } from "../inputs/InflowMinOrderByAggregateInput";
import { InflowSumOrderByAggregateInput } from "../inputs/InflowSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("InflowOrderByWithAggregationInput", {})
export class InflowOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  jobId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => InflowCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: InflowCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InflowAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: InflowAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InflowMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: InflowMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InflowMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: InflowMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InflowSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: InflowSumOrderByAggregateInput | undefined;
}
