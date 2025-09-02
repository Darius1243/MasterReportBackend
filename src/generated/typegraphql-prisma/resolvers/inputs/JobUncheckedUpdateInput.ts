import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowUncheckedUpdateManyWithoutJobNestedInput } from "../inputs/InflowUncheckedUpdateManyWithoutJobNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { OutflowUncheckedUpdateManyWithoutJobNestedInput } from "../inputs/OutflowUncheckedUpdateManyWithoutJobNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("JobUncheckedUpdateInput", {})
export class JobUncheckedUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => InflowUncheckedUpdateManyWithoutJobNestedInput, {
    nullable: true
  })
  inflows?: InflowUncheckedUpdateManyWithoutJobNestedInput | undefined;

  @TypeGraphQL.Field(_type => OutflowUncheckedUpdateManyWithoutJobNestedInput, {
    nullable: true
  })
  outflows?: OutflowUncheckedUpdateManyWithoutJobNestedInput | undefined;
}
