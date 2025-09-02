import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowUpdateManyWithoutJobNestedInput } from "../inputs/OutflowUpdateManyWithoutJobNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("JobUpdateWithoutInflowsInput", {})
export class JobUpdateWithoutInflowsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => OutflowUpdateManyWithoutJobNestedInput, {
    nullable: true
  })
  outflows?: OutflowUpdateManyWithoutJobNestedInput | undefined;
}
