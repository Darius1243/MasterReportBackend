import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentTypeUncheckedUpdateInput } from "../../../inputs/DocumentTypeUncheckedUpdateInput";
import { DocumentTypeWhereUniqueInput } from "../../../inputs/DocumentTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneDocumentTypeArgs {
  @TypeGraphQL.Field(_type => DocumentTypeUncheckedUpdateInput, {
    nullable: false
  })
  data!: DocumentTypeUncheckedUpdateInput;

  @TypeGraphQL.Field(_type => DocumentTypeWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentTypeWhereUniqueInput;
}
