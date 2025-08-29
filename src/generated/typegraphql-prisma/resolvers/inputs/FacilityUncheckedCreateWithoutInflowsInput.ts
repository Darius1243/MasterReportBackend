import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowUncheckedCreateNestedManyWithoutFacilityInput } from "../inputs/OutflowUncheckedCreateNestedManyWithoutFacilityInput";

@TypeGraphQL.InputType("FacilityUncheckedCreateWithoutInflowsInput", {})
export class FacilityUncheckedCreateWithoutInflowsInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => OutflowUncheckedCreateNestedManyWithoutFacilityInput, {
    nullable: true
  })
  outflow?: OutflowUncheckedCreateNestedManyWithoutFacilityInput | undefined;
}
