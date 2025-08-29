import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowUncheckedUpdateWithoutFacilityInput } from "../inputs/OutflowUncheckedUpdateWithoutFacilityInput";
import { OutflowWhereUniqueInput } from "../inputs/OutflowWhereUniqueInput";

@TypeGraphQL.InputType("OutflowUpdateWithWhereUniqueWithoutFacilityInput", {})
export class OutflowUpdateWithWhereUniqueWithoutFacilityInput {
  @TypeGraphQL.Field(_type => OutflowWhereUniqueInput, {
    nullable: false
  })
  where!: OutflowWhereUniqueInput;

  @TypeGraphQL.Field(_type => OutflowUncheckedUpdateWithoutFacilityInput, {
    nullable: false
  })
  data!: OutflowUncheckedUpdateWithoutFacilityInput;
}
