import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowCreateManyPersonInputEnvelope } from "../inputs/OutflowCreateManyPersonInputEnvelope";
import { OutflowCreateOrConnectWithoutPersonInput } from "../inputs/OutflowCreateOrConnectWithoutPersonInput";
import { OutflowCreateWithoutPersonInput } from "../inputs/OutflowCreateWithoutPersonInput";
import { OutflowScalarWhereInput } from "../inputs/OutflowScalarWhereInput";
import { OutflowUpdateManyWithWhereWithoutPersonInput } from "../inputs/OutflowUpdateManyWithWhereWithoutPersonInput";
import { OutflowUpdateWithWhereUniqueWithoutPersonInput } from "../inputs/OutflowUpdateWithWhereUniqueWithoutPersonInput";
import { OutflowUpsertWithWhereUniqueWithoutPersonInput } from "../inputs/OutflowUpsertWithWhereUniqueWithoutPersonInput";
import { OutflowWhereUniqueInput } from "../inputs/OutflowWhereUniqueInput";

@TypeGraphQL.InputType("OutflowUpdateManyWithoutPersonNestedInput", {})
export class OutflowUpdateManyWithoutPersonNestedInput {
  @TypeGraphQL.Field(_type => [OutflowCreateWithoutPersonInput], {
    nullable: true
  })
  create?: OutflowCreateWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [OutflowCreateOrConnectWithoutPersonInput], {
    nullable: true
  })
  connectOrCreate?: OutflowCreateOrConnectWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [OutflowUpsertWithWhereUniqueWithoutPersonInput], {
    nullable: true
  })
  upsert?: OutflowUpsertWithWhereUniqueWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => OutflowCreateManyPersonInputEnvelope, {
    nullable: true
  })
  createMany?: OutflowCreateManyPersonInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [OutflowUpdateWithWhereUniqueWithoutPersonInput], {
    nullable: true
  })
  update?: OutflowUpdateWithWhereUniqueWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [OutflowUpdateManyWithWhereWithoutPersonInput], {
    nullable: true
  })
  updateMany?: OutflowUpdateManyWithWhereWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [OutflowScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OutflowScalarWhereInput[] | undefined;
}
