import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InflowOrderByWithAggregationInput } from "../../../inputs/InflowOrderByWithAggregationInput";
import { InflowScalarWhereWithAggregatesInput } from "../../../inputs/InflowScalarWhereWithAggregatesInput";
import { InflowWhereInput } from "../../../inputs/InflowWhereInput";
import { InflowScalarFieldEnum } from "../../../../enums/InflowScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByInflowArgs {
  @TypeGraphQL.Field(_type => InflowWhereInput, {
    nullable: true
  })
  where?: InflowWhereInput | undefined;

  @TypeGraphQL.Field(_type => [InflowOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: InflowOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [InflowScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "amount" | "date" | "description" | "personId" | "facilityId" | "jobId" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => InflowScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: InflowScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
