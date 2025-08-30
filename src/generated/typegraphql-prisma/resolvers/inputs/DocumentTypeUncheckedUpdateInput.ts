import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { OutflowUncheckedUpdateManyWithoutDocumentTypeNestedInput } from "../inputs/OutflowUncheckedUpdateManyWithoutDocumentTypeNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("DocumentTypeUncheckedUpdateInput", {})
export class DocumentTypeUncheckedUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => OutflowUncheckedUpdateManyWithoutDocumentTypeNestedInput, {
    nullable: true
  })
  outflows?: OutflowUncheckedUpdateManyWithoutDocumentTypeNestedInput | undefined;
}
