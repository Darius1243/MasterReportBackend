import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { DocumentTypeCreateOrConnectWithoutOutflowsInput } from "../inputs/DocumentTypeCreateOrConnectWithoutOutflowsInput";
import { DocumentTypeUncheckedCreateWithoutOutflowsInput } from "../inputs/DocumentTypeUncheckedCreateWithoutOutflowsInput";
import { DocumentTypeWhereUniqueInput } from "../inputs/DocumentTypeWhereUniqueInput";

@TypeGraphQL.InputType("DocumentTypeCreateNestedOneWithoutOutflowsInput", {})
export class DocumentTypeCreateNestedOneWithoutOutflowsInput {
  @TypeGraphQL.Field(_type => DocumentTypeUncheckedCreateWithoutOutflowsInput, {
    nullable: true
  })
  create?: DocumentTypeUncheckedCreateWithoutOutflowsInput | undefined;

  @TypeGraphQL.Field(_type => DocumentTypeCreateOrConnectWithoutOutflowsInput, {
    nullable: true
  })
  connectOrCreate?: DocumentTypeCreateOrConnectWithoutOutflowsInput | undefined;

  @TypeGraphQL.Field(_type => DocumentTypeWhereUniqueInput, {
    nullable: true
  })
  connect?: DocumentTypeWhereUniqueInput | undefined;
}
