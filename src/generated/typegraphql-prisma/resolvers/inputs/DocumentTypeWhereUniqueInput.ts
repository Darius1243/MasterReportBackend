import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { DocumentTypeWhereInput } from "../inputs/DocumentTypeWhereInput";
import { OutflowListRelationFilter } from "../inputs/OutflowListRelationFilter";

@TypeGraphQL.InputType("DocumentTypeWhereUniqueInput", {})
export class DocumentTypeWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

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

  @TypeGraphQL.Field(_type => OutflowListRelationFilter, {
    nullable: true
  })
  outflows?: OutflowListRelationFilter | undefined;
}
