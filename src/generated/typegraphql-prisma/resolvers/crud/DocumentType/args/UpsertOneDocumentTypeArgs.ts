import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentTypeUncheckedCreateInput } from "../../../inputs/DocumentTypeUncheckedCreateInput";
import { DocumentTypeUncheckedUpdateInput } from "../../../inputs/DocumentTypeUncheckedUpdateInput";
import { DocumentTypeWhereUniqueInput } from "../../../inputs/DocumentTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneDocumentTypeArgs {
  @TypeGraphQL.Field(_type => DocumentTypeWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => DocumentTypeUncheckedCreateInput, {
    nullable: false
  })
  create!: DocumentTypeUncheckedCreateInput;

  @TypeGraphQL.Field(_type => DocumentTypeUncheckedUpdateInput, {
    nullable: false
  })
  update!: DocumentTypeUncheckedUpdateInput;
}
