import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PersonScalarWhereWithAggregatesInput", {})
export class PersonScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PersonScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PersonScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PersonScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PersonScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  email?: StringNullableWithAggregatesFilter | undefined;
}
