import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowCreateManyFacilityInputEnvelope } from "../inputs/InflowCreateManyFacilityInputEnvelope";
import { InflowCreateOrConnectWithoutFacilityInput } from "../inputs/InflowCreateOrConnectWithoutFacilityInput";
import { InflowCreateWithoutFacilityInput } from "../inputs/InflowCreateWithoutFacilityInput";
import { InflowScalarWhereInput } from "../inputs/InflowScalarWhereInput";
import { InflowUpdateManyWithWhereWithoutFacilityInput } from "../inputs/InflowUpdateManyWithWhereWithoutFacilityInput";
import { InflowUpdateWithWhereUniqueWithoutFacilityInput } from "../inputs/InflowUpdateWithWhereUniqueWithoutFacilityInput";
import { InflowUpsertWithWhereUniqueWithoutFacilityInput } from "../inputs/InflowUpsertWithWhereUniqueWithoutFacilityInput";
import { InflowWhereUniqueInput } from "../inputs/InflowWhereUniqueInput";

@TypeGraphQL.InputType("InflowUncheckedUpdateManyWithoutFacilityNestedInput", {})
export class InflowUncheckedUpdateManyWithoutFacilityNestedInput {
  @TypeGraphQL.Field(_type => [InflowCreateWithoutFacilityInput], {
    nullable: true
  })
  create?: InflowCreateWithoutFacilityInput[] | undefined;

  @TypeGraphQL.Field(_type => [InflowCreateOrConnectWithoutFacilityInput], {
    nullable: true
  })
  connectOrCreate?: InflowCreateOrConnectWithoutFacilityInput[] | undefined;

  @TypeGraphQL.Field(_type => [InflowUpsertWithWhereUniqueWithoutFacilityInput], {
    nullable: true
  })
  upsert?: InflowUpsertWithWhereUniqueWithoutFacilityInput[] | undefined;

  @TypeGraphQL.Field(_type => InflowCreateManyFacilityInputEnvelope, {
    nullable: true
  })
  createMany?: InflowCreateManyFacilityInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [InflowWhereUniqueInput], {
    nullable: true
  })
  set?: InflowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [InflowWhereUniqueInput], {
    nullable: true
  })
  disconnect?: InflowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [InflowWhereUniqueInput], {
    nullable: true
  })
  delete?: InflowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [InflowWhereUniqueInput], {
    nullable: true
  })
  connect?: InflowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [InflowUpdateWithWhereUniqueWithoutFacilityInput], {
    nullable: true
  })
  update?: InflowUpdateWithWhereUniqueWithoutFacilityInput[] | undefined;

  @TypeGraphQL.Field(_type => [InflowUpdateManyWithWhereWithoutFacilityInput], {
    nullable: true
  })
  updateMany?: InflowUpdateManyWithWhereWithoutFacilityInput[] | undefined;

  @TypeGraphQL.Field(_type => [InflowScalarWhereInput], {
    nullable: true
  })
  deleteMany?: InflowScalarWhereInput[] | undefined;
}
