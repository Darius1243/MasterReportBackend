import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { DocumentTypeUncheckedCreateWithoutOutflowsInput } from "../inputs/DocumentTypeUncheckedCreateWithoutOutflowsInput";
import { DocumentTypeWhereUniqueInput } from "../inputs/DocumentTypeWhereUniqueInput";

@TypeGraphQL.InputType("DocumentTypeCreateOrConnectWithoutOutflowsInput", {})
export class DocumentTypeCreateOrConnectWithoutOutflowsInput {
  @TypeGraphQL.Field(_type => DocumentTypeWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => DocumentTypeUncheckedCreateWithoutOutflowsInput, {
    nullable: false
  })
  create!: DocumentTypeUncheckedCreateWithoutOutflowsInput;
}
