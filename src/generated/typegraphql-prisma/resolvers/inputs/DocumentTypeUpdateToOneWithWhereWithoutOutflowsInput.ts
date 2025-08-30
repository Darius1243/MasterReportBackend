import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { DocumentTypeUncheckedUpdateWithoutOutflowsInput } from "../inputs/DocumentTypeUncheckedUpdateWithoutOutflowsInput";
import { DocumentTypeWhereInput } from "../inputs/DocumentTypeWhereInput";

@TypeGraphQL.InputType("DocumentTypeUpdateToOneWithWhereWithoutOutflowsInput", {})
export class DocumentTypeUpdateToOneWithWhereWithoutOutflowsInput {
  @TypeGraphQL.Field(_type => DocumentTypeWhereInput, {
    nullable: true
  })
  where?: DocumentTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => DocumentTypeUncheckedUpdateWithoutOutflowsInput, {
    nullable: false
  })
  data!: DocumentTypeUncheckedUpdateWithoutOutflowsInput;
}
