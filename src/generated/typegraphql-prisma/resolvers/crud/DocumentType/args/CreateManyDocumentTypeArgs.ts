import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentTypeCreateManyInput } from "../../../inputs/DocumentTypeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyDocumentTypeArgs {
  @TypeGraphQL.Field(_type => [DocumentTypeCreateManyInput], {
    nullable: false
  })
  data!: DocumentTypeCreateManyInput[];
}
