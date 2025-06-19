import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowCreateManyJobInputEnvelope } from "../inputs/InflowCreateManyJobInputEnvelope";
import { InflowCreateOrConnectWithoutJobInput } from "../inputs/InflowCreateOrConnectWithoutJobInput";
import { InflowCreateWithoutJobInput } from "../inputs/InflowCreateWithoutJobInput";
import { InflowScalarWhereInput } from "../inputs/InflowScalarWhereInput";
import { InflowUpdateManyWithWhereWithoutJobInput } from "../inputs/InflowUpdateManyWithWhereWithoutJobInput";
import { InflowUpdateWithWhereUniqueWithoutJobInput } from "../inputs/InflowUpdateWithWhereUniqueWithoutJobInput";
import { InflowUpsertWithWhereUniqueWithoutJobInput } from "../inputs/InflowUpsertWithWhereUniqueWithoutJobInput";
import { InflowWhereUniqueInput } from "../inputs/InflowWhereUniqueInput";

@TypeGraphQL.InputType("InflowUpdateManyWithoutJobNestedInput", {})
export class InflowUpdateManyWithoutJobNestedInput {
  @TypeGraphQL.Field(_type => [InflowCreateWithoutJobInput], {
    nullable: true
  })
  create?: InflowCreateWithoutJobInput[] | undefined;

  @TypeGraphQL.Field(_type => [InflowCreateOrConnectWithoutJobInput], {
    nullable: true
  })
  connectOrCreate?: InflowCreateOrConnectWithoutJobInput[] | undefined;

  @TypeGraphQL.Field(_type => [InflowUpsertWithWhereUniqueWithoutJobInput], {
    nullable: true
  })
  upsert?: InflowUpsertWithWhereUniqueWithoutJobInput[] | undefined;

  @TypeGraphQL.Field(_type => InflowCreateManyJobInputEnvelope, {
    nullable: true
  })
  createMany?: InflowCreateManyJobInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [InflowUpdateWithWhereUniqueWithoutJobInput], {
    nullable: true
  })
  update?: InflowUpdateWithWhereUniqueWithoutJobInput[] | undefined;

  @TypeGraphQL.Field(_type => [InflowUpdateManyWithWhereWithoutJobInput], {
    nullable: true
  })
  updateMany?: InflowUpdateManyWithWhereWithoutJobInput[] | undefined;

  @TypeGraphQL.Field(_type => [InflowScalarWhereInput], {
    nullable: true
  })
  deleteMany?: InflowScalarWhereInput[] | undefined;
}
