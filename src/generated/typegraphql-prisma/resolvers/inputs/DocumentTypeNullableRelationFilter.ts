import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { DocumentTypeWhereInput } from "../inputs/DocumentTypeWhereInput";

@TypeGraphQL.InputType("DocumentTypeNullableRelationFilter", {})
export class DocumentTypeNullableRelationFilter {
  @TypeGraphQL.Field(_type => DocumentTypeWhereInput, {
    nullable: true
  })
  is?: DocumentTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => DocumentTypeWhereInput, {
    nullable: true
  })
  isNot?: DocumentTypeWhereInput | undefined;
}
