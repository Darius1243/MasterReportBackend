import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowCreateManyJobInputEnvelope } from "../inputs/OutflowCreateManyJobInputEnvelope";
import { OutflowCreateOrConnectWithoutJobInput } from "../inputs/OutflowCreateOrConnectWithoutJobInput";
import { OutflowCreateWithoutJobInput } from "../inputs/OutflowCreateWithoutJobInput";
import { OutflowScalarWhereInput } from "../inputs/OutflowScalarWhereInput";
import { OutflowUpdateManyWithWhereWithoutJobInput } from "../inputs/OutflowUpdateManyWithWhereWithoutJobInput";
import { OutflowUpdateWithWhereUniqueWithoutJobInput } from "../inputs/OutflowUpdateWithWhereUniqueWithoutJobInput";
import { OutflowUpsertWithWhereUniqueWithoutJobInput } from "../inputs/OutflowUpsertWithWhereUniqueWithoutJobInput";
import { OutflowWhereUniqueInput } from "../inputs/OutflowWhereUniqueInput";

@TypeGraphQL.InputType("OutflowUpdateManyWithoutJobNestedInput", {})
export class OutflowUpdateManyWithoutJobNestedInput {
  @TypeGraphQL.Field(_type => [OutflowCreateWithoutJobInput], {
    nullable: true
  })
  create?: OutflowCreateWithoutJobInput[] | undefined;

  @TypeGraphQL.Field(_type => [OutflowCreateOrConnectWithoutJobInput], {
    nullable: true
  })
  connectOrCreate?: OutflowCreateOrConnectWithoutJobInput[] | undefined;

  @TypeGraphQL.Field(_type => [OutflowUpsertWithWhereUniqueWithoutJobInput], {
    nullable: true
  })
  upsert?: OutflowUpsertWithWhereUniqueWithoutJobInput[] | undefined;

  @TypeGraphQL.Field(_type => OutflowCreateManyJobInputEnvelope, {
    nullable: true
  })
  createMany?: OutflowCreateManyJobInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [OutflowUpdateWithWhereUniqueWithoutJobInput], {
    nullable: true
  })
  update?: OutflowUpdateWithWhereUniqueWithoutJobInput[] | undefined;

  @TypeGraphQL.Field(_type => [OutflowUpdateManyWithWhereWithoutJobInput], {
    nullable: true
  })
  updateMany?: OutflowUpdateManyWithWhereWithoutJobInput[] | undefined;

  @TypeGraphQL.Field(_type => [OutflowScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OutflowScalarWhereInput[] | undefined;
}
