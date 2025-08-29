import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentTypeOrderByWithRelationInput } from "../../../inputs/DocumentTypeOrderByWithRelationInput";
import { DocumentTypeWhereInput } from "../../../inputs/DocumentTypeWhereInput";
import { DocumentTypeWhereUniqueInput } from "../../../inputs/DocumentTypeWhereUniqueInput";
import { DocumentTypeScalarFieldEnum } from "../../../../enums/DocumentTypeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstDocumentTypeOrThrowArgs {
  @TypeGraphQL.Field(_type => DocumentTypeWhereInput, {
    nullable: true
  })
  where?: DocumentTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DocumentTypeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: DocumentTypeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => DocumentTypeWhereUniqueInput, {
    nullable: true
  })
  cursor?: DocumentTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [DocumentTypeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name"> | undefined;
}
