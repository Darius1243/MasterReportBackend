import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OutflowOrderByWithAggregationInput } from "../../../inputs/OutflowOrderByWithAggregationInput";
import { OutflowScalarWhereWithAggregatesInput } from "../../../inputs/OutflowScalarWhereWithAggregatesInput";
import { OutflowWhereInput } from "../../../inputs/OutflowWhereInput";
import { OutflowScalarFieldEnum } from "../../../../enums/OutflowScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOutflowArgs {
  @TypeGraphQL.Field(_type => OutflowWhereInput, {
    nullable: true
  })
  where?: OutflowWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OutflowOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: OutflowOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [OutflowScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "amount" | "date" | "description" | "personId" | "facilityId" | "documentTypeId" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => OutflowScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: OutflowScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
