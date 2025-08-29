import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowCreateManyFacilityInputEnvelope } from "../inputs/OutflowCreateManyFacilityInputEnvelope";
import { OutflowCreateOrConnectWithoutFacilityInput } from "../inputs/OutflowCreateOrConnectWithoutFacilityInput";
import { OutflowCreateWithoutFacilityInput } from "../inputs/OutflowCreateWithoutFacilityInput";
import { OutflowScalarWhereInput } from "../inputs/OutflowScalarWhereInput";
import { OutflowUpdateManyWithWhereWithoutFacilityInput } from "../inputs/OutflowUpdateManyWithWhereWithoutFacilityInput";
import { OutflowUpdateWithWhereUniqueWithoutFacilityInput } from "../inputs/OutflowUpdateWithWhereUniqueWithoutFacilityInput";
import { OutflowUpsertWithWhereUniqueWithoutFacilityInput } from "../inputs/OutflowUpsertWithWhereUniqueWithoutFacilityInput";
import { OutflowWhereUniqueInput } from "../inputs/OutflowWhereUniqueInput";

@TypeGraphQL.InputType("OutflowUpdateManyWithoutFacilityNestedInput", {})
export class OutflowUpdateManyWithoutFacilityNestedInput {
  @TypeGraphQL.Field(_type => [OutflowCreateWithoutFacilityInput], {
    nullable: true
  })
  create?: OutflowCreateWithoutFacilityInput[] | undefined;

  @TypeGraphQL.Field(_type => [OutflowCreateOrConnectWithoutFacilityInput], {
    nullable: true
  })
  connectOrCreate?: OutflowCreateOrConnectWithoutFacilityInput[] | undefined;

  @TypeGraphQL.Field(_type => [OutflowUpsertWithWhereUniqueWithoutFacilityInput], {
    nullable: true
  })
  upsert?: OutflowUpsertWithWhereUniqueWithoutFacilityInput[] | undefined;

  @TypeGraphQL.Field(_type => OutflowCreateManyFacilityInputEnvelope, {
    nullable: true
  })
  createMany?: OutflowCreateManyFacilityInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OutflowWhereUniqueInput], {
    nullable: true
  })
  set?: OutflowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OutflowWhereUniqueInput], {
    nullable: true
  })
  disconnect?: OutflowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OutflowWhereUniqueInput], {
    nullable: true
  })
  delete?: OutflowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OutflowWhereUniqueInput], {
    nullable: true
  })
  connect?: OutflowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OutflowUpdateWithWhereUniqueWithoutFacilityInput], {
    nullable: true
  })
  update?: OutflowUpdateWithWhereUniqueWithoutFacilityInput[] | undefined;

  @TypeGraphQL.Field(_type => [OutflowUpdateManyWithWhereWithoutFacilityInput], {
    nullable: true
  })
  updateMany?: OutflowUpdateManyWithWhereWithoutFacilityInput[] | undefined;

  @TypeGraphQL.Field(_type => [OutflowScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OutflowScalarWhereInput[] | undefined;
}
