import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentTypeCreateManyInput } from "../../../inputs/DocumentTypeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnDocumentTypeArgs {
  @TypeGraphQL.Field(_type => [DocumentTypeCreateManyInput], {
    nullable: false
  })
  data!: DocumentTypeCreateManyInput[];
}
