import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentTypeWhereUniqueInput } from "../../../inputs/DocumentTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueDocumentTypeOrThrowArgs {
  @TypeGraphQL.Field(_type => DocumentTypeWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentTypeWhereUniqueInput;
}
