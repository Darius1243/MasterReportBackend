import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentTypeWhereInput } from "../../../inputs/DocumentTypeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDocumentTypeArgs {
  @TypeGraphQL.Field(_type => DocumentTypeWhereInput, {
    nullable: true
  })
  where?: DocumentTypeWhereInput | undefined;
}
