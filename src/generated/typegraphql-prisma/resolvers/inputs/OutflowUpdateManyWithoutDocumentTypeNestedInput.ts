import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowCreateManyDocumentTypeInputEnvelope } from "../inputs/OutflowCreateManyDocumentTypeInputEnvelope";
import { OutflowCreateOrConnectWithoutDocumentTypeInput } from "../inputs/OutflowCreateOrConnectWithoutDocumentTypeInput";
import { OutflowCreateWithoutDocumentTypeInput } from "../inputs/OutflowCreateWithoutDocumentTypeInput";
import { OutflowScalarWhereInput } from "../inputs/OutflowScalarWhereInput";
import { OutflowUpdateManyWithWhereWithoutDocumentTypeInput } from "../inputs/OutflowUpdateManyWithWhereWithoutDocumentTypeInput";
import { OutflowUpdateWithWhereUniqueWithoutDocumentTypeInput } from "../inputs/OutflowUpdateWithWhereUniqueWithoutDocumentTypeInput";
import { OutflowUpsertWithWhereUniqueWithoutDocumentTypeInput } from "../inputs/OutflowUpsertWithWhereUniqueWithoutDocumentTypeInput";
import { OutflowWhereUniqueInput } from "../inputs/OutflowWhereUniqueInput";

@TypeGraphQL.InputType("OutflowUpdateManyWithoutDocumentTypeNestedInput", {})
export class OutflowUpdateManyWithoutDocumentTypeNestedInput {
  @TypeGraphQL.Field(_type => [OutflowCreateWithoutDocumentTypeInput], {
    nullable: true
  })
  create?: OutflowCreateWithoutDocumentTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [OutflowCreateOrConnectWithoutDocumentTypeInput], {
    nullable: true
  })
  connectOrCreate?: OutflowCreateOrConnectWithoutDocumentTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [OutflowUpsertWithWhereUniqueWithoutDocumentTypeInput], {
    nullable: true
  })
  upsert?: OutflowUpsertWithWhereUniqueWithoutDocumentTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => OutflowCreateManyDocumentTypeInputEnvelope, {
    nullable: true
  })
  createMany?: OutflowCreateManyDocumentTypeInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [OutflowUpdateWithWhereUniqueWithoutDocumentTypeInput], {
    nullable: true
  })
  update?: OutflowUpdateWithWhereUniqueWithoutDocumentTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [OutflowUpdateManyWithWhereWithoutDocumentTypeInput], {
    nullable: true
  })
  updateMany?: OutflowUpdateManyWithWhereWithoutDocumentTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [OutflowScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OutflowScalarWhereInput[] | undefined;
}
