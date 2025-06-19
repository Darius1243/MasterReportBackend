import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("JobScalarWhereWithAggregatesInput", {})
export class JobScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [JobScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: JobScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [JobScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: JobScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [JobScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: JobScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;
}
