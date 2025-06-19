import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FacilityUpdateOneRequiredWithoutInflowsNestedInput } from "../inputs/FacilityUpdateOneRequiredWithoutInflowsNestedInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PersonUpdateOneRequiredWithoutInflowsNestedInput } from "../inputs/PersonUpdateOneRequiredWithoutInflowsNestedInput";

@TypeGraphQL.InputType("InflowUpdateWithoutJobInput", {})
export class InflowUpdateWithoutJobInput {
  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  amount?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  date?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpdateOneRequiredWithoutInflowsNestedInput, {
    nullable: true
  })
  person?: PersonUpdateOneRequiredWithoutInflowsNestedInput | undefined;

  @TypeGraphQL.Field(_type => FacilityUpdateOneRequiredWithoutInflowsNestedInput, {
    nullable: true
  })
  facility?: FacilityUpdateOneRequiredWithoutInflowsNestedInput | undefined;
}
