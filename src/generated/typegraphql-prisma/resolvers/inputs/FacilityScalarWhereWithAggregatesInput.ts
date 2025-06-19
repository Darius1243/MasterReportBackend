import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("FacilityScalarWhereWithAggregatesInput", {})
export class FacilityScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FacilityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: FacilityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FacilityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: FacilityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FacilityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: FacilityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;
}
