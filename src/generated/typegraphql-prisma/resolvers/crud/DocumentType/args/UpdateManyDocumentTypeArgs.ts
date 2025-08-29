import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentTypeUncheckedUpdateManyInput } from "../../../inputs/DocumentTypeUncheckedUpdateManyInput";
import { DocumentTypeWhereInput } from "../../../inputs/DocumentTypeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDocumentTypeArgs {
  @TypeGraphQL.Field(_type => DocumentTypeUncheckedUpdateManyInput, {
    nullable: false
  })
  data!: DocumentTypeUncheckedUpdateManyInput;

  @TypeGraphQL.Field(_type => DocumentTypeWhereInput, {
    nullable: true
  })
  where?: DocumentTypeWhereInput | undefined;
}
