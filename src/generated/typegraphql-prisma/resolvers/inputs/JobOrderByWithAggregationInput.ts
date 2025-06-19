import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { JobAvgOrderByAggregateInput } from "../inputs/JobAvgOrderByAggregateInput";
import { JobCountOrderByAggregateInput } from "../inputs/JobCountOrderByAggregateInput";
import { JobMaxOrderByAggregateInput } from "../inputs/JobMaxOrderByAggregateInput";
import { JobMinOrderByAggregateInput } from "../inputs/JobMinOrderByAggregateInput";
import { JobSumOrderByAggregateInput } from "../inputs/JobSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("JobOrderByWithAggregationInput", {})
export class JobOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => JobCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: JobCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => JobAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: JobAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => JobMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: JobMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => JobMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: JobMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => JobSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: JobSumOrderByAggregateInput | undefined;
}
