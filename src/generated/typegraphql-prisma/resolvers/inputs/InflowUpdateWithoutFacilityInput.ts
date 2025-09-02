import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { JobUpdateOneWithoutInflowsNestedInput } from "../inputs/JobUpdateOneWithoutInflowsNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PersonUpdateOneRequiredWithoutInflowsNestedInput } from "../inputs/PersonUpdateOneRequiredWithoutInflowsNestedInput";

@TypeGraphQL.InputType("InflowUpdateWithoutFacilityInput", {})
export class InflowUpdateWithoutFacilityInput {
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

  @TypeGraphQL.Field(_type => JobUpdateOneWithoutInflowsNestedInput, {
    nullable: true
  })
  job?: JobUpdateOneWithoutInflowsNestedInput | undefined;
}
