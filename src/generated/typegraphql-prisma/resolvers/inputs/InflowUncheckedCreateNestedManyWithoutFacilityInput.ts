import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowCreateManyFacilityInputEnvelope } from "../inputs/InflowCreateManyFacilityInputEnvelope";
import { InflowCreateOrConnectWithoutFacilityInput } from "../inputs/InflowCreateOrConnectWithoutFacilityInput";
import { InflowCreateWithoutFacilityInput } from "../inputs/InflowCreateWithoutFacilityInput";
import { InflowWhereUniqueInput } from "../inputs/InflowWhereUniqueInput";

@TypeGraphQL.InputType("InflowUncheckedCreateNestedManyWithoutFacilityInput", {})
export class InflowUncheckedCreateNestedManyWithoutFacilityInput {
  @TypeGraphQL.Field(_type => [InflowCreateWithoutFacilityInput], {
    nullable: true
  })
  create?: InflowCreateWithoutFacilityInput[] | undefined;

  @TypeGraphQL.Field(_type => [InflowCreateOrConnectWithoutFacilityInput], {
    nullable: true
  })
  connectOrCreate?: InflowCreateOrConnectWithoutFacilityInput[] | undefined;

  @TypeGraphQL.Field(_type => InflowCreateManyFacilityInputEnvelope, {
    nullable: true
  })
  createMany?: InflowCreateManyFacilityInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [InflowWhereUniqueInput], {
    nullable: true
  })
  connect?: InflowWhereUniqueInput[] | undefined;
}
