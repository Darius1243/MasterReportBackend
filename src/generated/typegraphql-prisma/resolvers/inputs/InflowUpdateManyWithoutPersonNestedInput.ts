import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowCreateManyPersonInputEnvelope } from "../inputs/InflowCreateManyPersonInputEnvelope";
import { InflowCreateOrConnectWithoutPersonInput } from "../inputs/InflowCreateOrConnectWithoutPersonInput";
import { InflowCreateWithoutPersonInput } from "../inputs/InflowCreateWithoutPersonInput";
import { InflowScalarWhereInput } from "../inputs/InflowScalarWhereInput";
import { InflowUpdateManyWithWhereWithoutPersonInput } from "../inputs/InflowUpdateManyWithWhereWithoutPersonInput";
import { InflowUpdateWithWhereUniqueWithoutPersonInput } from "../inputs/InflowUpdateWithWhereUniqueWithoutPersonInput";
import { InflowUpsertWithWhereUniqueWithoutPersonInput } from "../inputs/InflowUpsertWithWhereUniqueWithoutPersonInput";
import { InflowWhereUniqueInput } from "../inputs/InflowWhereUniqueInput";

@TypeGraphQL.InputType("InflowUpdateManyWithoutPersonNestedInput", {})
export class InflowUpdateManyWithoutPersonNestedInput {
  @TypeGraphQL.Field(_type => [InflowCreateWithoutPersonInput], {
    nullable: true
  })
  create?: InflowCreateWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [InflowCreateOrConnectWithoutPersonInput], {
    nullable: true
  })
  connectOrCreate?: InflowCreateOrConnectWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [InflowUpsertWithWhereUniqueWithoutPersonInput], {
    nullable: true
  })
  upsert?: InflowUpsertWithWhereUniqueWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => InflowCreateManyPersonInputEnvelope, {
    nullable: true
  })
  createMany?: InflowCreateManyPersonInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [InflowUpdateWithWhereUniqueWithoutPersonInput], {
    nullable: true
  })
  update?: InflowUpdateWithWhereUniqueWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [InflowUpdateManyWithWhereWithoutPersonInput], {
    nullable: true
  })
  updateMany?: InflowUpdateManyWithWhereWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [InflowScalarWhereInput], {
    nullable: true
  })
  deleteMany?: InflowScalarWhereInput[] | undefined;
}
