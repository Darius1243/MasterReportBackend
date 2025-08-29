import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FacilityUpdateOneRequiredWithoutOutflowNestedInput } from "../inputs/FacilityUpdateOneRequiredWithoutOutflowNestedInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PersonUpdateOneRequiredWithoutOutflowsNestedInput } from "../inputs/PersonUpdateOneRequiredWithoutOutflowsNestedInput";

@TypeGraphQL.InputType("OutflowUpdateInput", {})
export class OutflowUpdateInput {
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

  @TypeGraphQL.Field(_type => PersonUpdateOneRequiredWithoutOutflowsNestedInput, {
    nullable: true
  })
  person?: PersonUpdateOneRequiredWithoutOutflowsNestedInput | undefined;

  @TypeGraphQL.Field(_type => FacilityUpdateOneRequiredWithoutOutflowNestedInput, {
    nullable: true
  })
  facility?: FacilityUpdateOneRequiredWithoutOutflowNestedInput | undefined;
}
