import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { OutflowListRelationFilter } from "../inputs/OutflowListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("DocumentTypeWhereInput", {})
export class DocumentTypeWhereInput {
  @TypeGraphQL.Field(_type => [DocumentTypeWhereInput], {
    nullable: true
  })
  AND?: DocumentTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentTypeWhereInput], {
    nullable: true
  })
  OR?: DocumentTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentTypeWhereInput], {
    nullable: true
  })
  NOT?: DocumentTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => OutflowListRelationFilter, {
    nullable: true
  })
  outflows?: OutflowListRelationFilter | undefined;
}
