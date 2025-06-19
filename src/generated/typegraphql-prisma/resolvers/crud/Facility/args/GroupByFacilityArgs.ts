import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FacilityOrderByWithAggregationInput } from "../../../inputs/FacilityOrderByWithAggregationInput";
import { FacilityScalarWhereWithAggregatesInput } from "../../../inputs/FacilityScalarWhereWithAggregatesInput";
import { FacilityWhereInput } from "../../../inputs/FacilityWhereInput";
import { FacilityScalarFieldEnum } from "../../../../enums/FacilityScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFacilityArgs {
  @TypeGraphQL.Field(_type => FacilityWhereInput, {
    nullable: true
  })
  where?: FacilityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FacilityOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: FacilityOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FacilityScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name">;

  @TypeGraphQL.Field(_type => FacilityScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FacilityScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
