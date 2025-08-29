import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("DocumentTypeScalarWhereWithAggregatesInput", {})
export class DocumentTypeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [DocumentTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: DocumentTypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: DocumentTypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: DocumentTypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;
}
