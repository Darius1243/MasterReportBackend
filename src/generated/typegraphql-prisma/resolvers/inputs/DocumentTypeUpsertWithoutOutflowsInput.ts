import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { DocumentTypeUncheckedCreateWithoutOutflowsInput } from "../inputs/DocumentTypeUncheckedCreateWithoutOutflowsInput";
import { DocumentTypeUncheckedUpdateWithoutOutflowsInput } from "../inputs/DocumentTypeUncheckedUpdateWithoutOutflowsInput";
import { DocumentTypeWhereInput } from "../inputs/DocumentTypeWhereInput";

@TypeGraphQL.InputType("DocumentTypeUpsertWithoutOutflowsInput", {})
export class DocumentTypeUpsertWithoutOutflowsInput {
  @TypeGraphQL.Field(_type => DocumentTypeUncheckedUpdateWithoutOutflowsInput, {
    nullable: false
  })
  update!: DocumentTypeUncheckedUpdateWithoutOutflowsInput;

  @TypeGraphQL.Field(_type => DocumentTypeUncheckedCreateWithoutOutflowsInput, {
    nullable: false
  })
  create!: DocumentTypeUncheckedCreateWithoutOutflowsInput;

  @TypeGraphQL.Field(_type => DocumentTypeWhereInput, {
    nullable: true
  })
  where?: DocumentTypeWhereInput | undefined;
}
