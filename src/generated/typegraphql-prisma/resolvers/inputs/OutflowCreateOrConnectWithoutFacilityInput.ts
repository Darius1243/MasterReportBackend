import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowUncheckedCreateWithoutFacilityInput } from "../inputs/OutflowUncheckedCreateWithoutFacilityInput";
import { OutflowWhereUniqueInput } from "../inputs/OutflowWhereUniqueInput";

@TypeGraphQL.InputType("OutflowCreateOrConnectWithoutFacilityInput", {})
export class OutflowCreateOrConnectWithoutFacilityInput {
  @TypeGraphQL.Field(_type => OutflowWhereUniqueInput, {
    nullable: false
  })
  where!: OutflowWhereUniqueInput;

  @TypeGraphQL.Field(_type => OutflowUncheckedCreateWithoutFacilityInput, {
    nullable: false
  })
  create!: OutflowUncheckedCreateWithoutFacilityInput;
}
