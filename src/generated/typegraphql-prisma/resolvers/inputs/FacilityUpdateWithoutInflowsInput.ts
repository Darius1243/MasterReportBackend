import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowUpdateManyWithoutFacilityNestedInput } from "../inputs/OutflowUpdateManyWithoutFacilityNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("FacilityUpdateWithoutInflowsInput", {})
export class FacilityUpdateWithoutInflowsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => OutflowUpdateManyWithoutFacilityNestedInput, {
    nullable: true
  })
  outflow?: OutflowUpdateManyWithoutFacilityNestedInput | undefined;
}
