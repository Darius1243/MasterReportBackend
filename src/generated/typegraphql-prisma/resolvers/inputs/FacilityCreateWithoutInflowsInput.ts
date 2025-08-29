import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowCreateNestedManyWithoutFacilityInput } from "../inputs/OutflowCreateNestedManyWithoutFacilityInput";

@TypeGraphQL.InputType("FacilityCreateWithoutInflowsInput", {})
export class FacilityCreateWithoutInflowsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => OutflowCreateNestedManyWithoutFacilityInput, {
    nullable: true
  })
  outflow?: OutflowCreateNestedManyWithoutFacilityInput | undefined;
}
