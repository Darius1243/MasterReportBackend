import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowUpdateManyWithoutPersonNestedInput } from "../inputs/InflowUpdateManyWithoutPersonNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OutflowUpdateManyWithoutPersonNestedInput } from "../inputs/OutflowUpdateManyWithoutPersonNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PersonUpdateInput", {})
export class PersonUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => InflowUpdateManyWithoutPersonNestedInput, {
    nullable: true
  })
  inflows?: InflowUpdateManyWithoutPersonNestedInput | undefined;

  @TypeGraphQL.Field(_type => OutflowUpdateManyWithoutPersonNestedInput, {
    nullable: true
  })
  outflows?: OutflowUpdateManyWithoutPersonNestedInput | undefined;
}
