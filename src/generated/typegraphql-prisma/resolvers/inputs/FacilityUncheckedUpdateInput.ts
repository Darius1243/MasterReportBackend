import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowUncheckedUpdateManyWithoutFacilityNestedInput } from "../inputs/InflowUncheckedUpdateManyWithoutFacilityNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("FacilityUncheckedUpdateInput", {})
export class FacilityUncheckedUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => InflowUncheckedUpdateManyWithoutFacilityNestedInput, {
    nullable: true
  })
  inflows?: InflowUncheckedUpdateManyWithoutFacilityNestedInput | undefined;
}
