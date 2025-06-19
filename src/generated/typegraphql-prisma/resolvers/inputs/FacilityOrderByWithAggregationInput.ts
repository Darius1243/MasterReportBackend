import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FacilityAvgOrderByAggregateInput } from "../inputs/FacilityAvgOrderByAggregateInput";
import { FacilityCountOrderByAggregateInput } from "../inputs/FacilityCountOrderByAggregateInput";
import { FacilityMaxOrderByAggregateInput } from "../inputs/FacilityMaxOrderByAggregateInput";
import { FacilityMinOrderByAggregateInput } from "../inputs/FacilityMinOrderByAggregateInput";
import { FacilitySumOrderByAggregateInput } from "../inputs/FacilitySumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FacilityOrderByWithAggregationInput", {})
export class FacilityOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FacilityCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FacilityCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FacilityAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: FacilityAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FacilityMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FacilityMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FacilityMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FacilityMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FacilitySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: FacilitySumOrderByAggregateInput | undefined;
}
