import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { DocumentTypeAvgOrderByAggregateInput } from "../inputs/DocumentTypeAvgOrderByAggregateInput";
import { DocumentTypeCountOrderByAggregateInput } from "../inputs/DocumentTypeCountOrderByAggregateInput";
import { DocumentTypeMaxOrderByAggregateInput } from "../inputs/DocumentTypeMaxOrderByAggregateInput";
import { DocumentTypeMinOrderByAggregateInput } from "../inputs/DocumentTypeMinOrderByAggregateInput";
import { DocumentTypeSumOrderByAggregateInput } from "../inputs/DocumentTypeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("DocumentTypeOrderByWithAggregationInput", {})
export class DocumentTypeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => DocumentTypeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: DocumentTypeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DocumentTypeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: DocumentTypeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DocumentTypeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: DocumentTypeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DocumentTypeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: DocumentTypeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DocumentTypeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: DocumentTypeSumOrderByAggregateInput | undefined;
}
