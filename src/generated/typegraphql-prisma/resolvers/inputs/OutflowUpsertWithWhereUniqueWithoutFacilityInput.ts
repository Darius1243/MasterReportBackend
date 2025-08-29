import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowUncheckedCreateWithoutFacilityInput } from "../inputs/OutflowUncheckedCreateWithoutFacilityInput";
import { OutflowUncheckedUpdateWithoutFacilityInput } from "../inputs/OutflowUncheckedUpdateWithoutFacilityInput";
import { OutflowWhereUniqueInput } from "../inputs/OutflowWhereUniqueInput";

@TypeGraphQL.InputType("OutflowUpsertWithWhereUniqueWithoutFacilityInput", {})
export class OutflowUpsertWithWhereUniqueWithoutFacilityInput {
  @TypeGraphQL.Field(_type => OutflowWhereUniqueInput, {
    nullable: false
  })
  where!: OutflowWhereUniqueInput;

  @TypeGraphQL.Field(_type => OutflowUncheckedUpdateWithoutFacilityInput, {
    nullable: false
  })
  update!: OutflowUncheckedUpdateWithoutFacilityInput;

  @TypeGraphQL.Field(_type => OutflowUncheckedCreateWithoutFacilityInput, {
    nullable: false
  })
  create!: OutflowUncheckedCreateWithoutFacilityInput;
}
