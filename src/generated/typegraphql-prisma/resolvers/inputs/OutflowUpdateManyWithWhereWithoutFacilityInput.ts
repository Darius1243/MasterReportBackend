import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowScalarWhereInput } from "../inputs/OutflowScalarWhereInput";
import { OutflowUncheckedUpdateManyWithoutFacilityInput } from "../inputs/OutflowUncheckedUpdateManyWithoutFacilityInput";

@TypeGraphQL.InputType("OutflowUpdateManyWithWhereWithoutFacilityInput", {})
export class OutflowUpdateManyWithWhereWithoutFacilityInput {
  @TypeGraphQL.Field(_type => OutflowScalarWhereInput, {
    nullable: false
  })
  where!: OutflowScalarWhereInput;

  @TypeGraphQL.Field(_type => OutflowUncheckedUpdateManyWithoutFacilityInput, {
    nullable: false
  })
  data!: OutflowUncheckedUpdateManyWithoutFacilityInput;
}
