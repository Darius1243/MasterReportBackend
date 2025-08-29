import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentTypeUncheckedCreateInput } from "../../../inputs/DocumentTypeUncheckedCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDocumentTypeArgs {
  @TypeGraphQL.Field(_type => DocumentTypeUncheckedCreateInput, {
    nullable: false
  })
  data!: DocumentTypeUncheckedCreateInput;
}
