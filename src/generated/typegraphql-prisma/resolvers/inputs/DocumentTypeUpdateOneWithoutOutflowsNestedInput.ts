import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { DocumentTypeCreateOrConnectWithoutOutflowsInput } from "../inputs/DocumentTypeCreateOrConnectWithoutOutflowsInput";
import { DocumentTypeUncheckedCreateWithoutOutflowsInput } from "../inputs/DocumentTypeUncheckedCreateWithoutOutflowsInput";
import { DocumentTypeUncheckedUpdateWithoutOutflowsInput } from "../inputs/DocumentTypeUncheckedUpdateWithoutOutflowsInput";
import { DocumentTypeUpsertWithoutOutflowsInput } from "../inputs/DocumentTypeUpsertWithoutOutflowsInput";
import { DocumentTypeWhereInput } from "../inputs/DocumentTypeWhereInput";
import { DocumentTypeWhereUniqueInput } from "../inputs/DocumentTypeWhereUniqueInput";

@TypeGraphQL.InputType("DocumentTypeUpdateOneWithoutOutflowsNestedInput", {})
export class DocumentTypeUpdateOneWithoutOutflowsNestedInput {
  @TypeGraphQL.Field(_type => DocumentTypeUncheckedCreateWithoutOutflowsInput, {
    nullable: true
  })
  create?: DocumentTypeUncheckedCreateWithoutOutflowsInput | undefined;

  @TypeGraphQL.Field(_type => DocumentTypeCreateOrConnectWithoutOutflowsInput, {
    nullable: true
  })
  connectOrCreate?: DocumentTypeCreateOrConnectWithoutOutflowsInput | undefined;

  @TypeGraphQL.Field(_type => DocumentTypeUpsertWithoutOutflowsInput, {
    nullable: true
  })
  upsert?: DocumentTypeUpsertWithoutOutflowsInput | undefined;

  @TypeGraphQL.Field(_type => DocumentTypeWhereInput, {
    nullable: true
  })
  disconnect?: DocumentTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => DocumentTypeWhereInput, {
    nullable: true
  })
  delete?: DocumentTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => DocumentTypeWhereUniqueInput, {
    nullable: true
  })
  connect?: DocumentTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => DocumentTypeUncheckedUpdateWithoutOutflowsInput, {
    nullable: true
  })
  update?: DocumentTypeUncheckedUpdateWithoutOutflowsInput | undefined;
}
