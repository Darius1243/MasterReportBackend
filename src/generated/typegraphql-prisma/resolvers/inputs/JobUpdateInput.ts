import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowUpdateManyWithoutJobNestedInput } from "../inputs/InflowUpdateManyWithoutJobNestedInput";
import { OutflowUpdateManyWithoutJobNestedInput } from "../inputs/OutflowUpdateManyWithoutJobNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("JobUpdateInput", {})
export class JobUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => InflowUpdateManyWithoutJobNestedInput, {
    nullable: true
  })
  inflows?: InflowUpdateManyWithoutJobNestedInput | undefined;

  @TypeGraphQL.Field(_type => OutflowUpdateManyWithoutJobNestedInput, {
    nullable: true
  })
  outflows?: OutflowUpdateManyWithoutJobNestedInput | undefined;
}
