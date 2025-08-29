import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowUpdateManyWithoutFacilityNestedInput } from "../inputs/InflowUpdateManyWithoutFacilityNestedInput";
import { OutflowUpdateManyWithoutFacilityNestedInput } from "../inputs/OutflowUpdateManyWithoutFacilityNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("FacilityUpdateInput", {})
export class FacilityUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => InflowUpdateManyWithoutFacilityNestedInput, {
    nullable: true
  })
  inflows?: InflowUpdateManyWithoutFacilityNestedInput | undefined;

  @TypeGraphQL.Field(_type => OutflowUpdateManyWithoutFacilityNestedInput, {
    nullable: true
  })
  outflow?: OutflowUpdateManyWithoutFacilityNestedInput | undefined;
}
