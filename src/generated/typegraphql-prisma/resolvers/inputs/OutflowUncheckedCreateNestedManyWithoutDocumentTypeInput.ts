import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowCreateManyDocumentTypeInputEnvelope } from "../inputs/OutflowCreateManyDocumentTypeInputEnvelope";
import { OutflowCreateOrConnectWithoutDocumentTypeInput } from "../inputs/OutflowCreateOrConnectWithoutDocumentTypeInput";
import { OutflowCreateWithoutDocumentTypeInput } from "../inputs/OutflowCreateWithoutDocumentTypeInput";
import { OutflowWhereUniqueInput } from "../inputs/OutflowWhereUniqueInput";

@TypeGraphQL.InputType("OutflowUncheckedCreateNestedManyWithoutDocumentTypeInput", {})
export class OutflowUncheckedCreateNestedManyWithoutDocumentTypeInput {
  @TypeGraphQL.Field(_type => [OutflowCreateWithoutDocumentTypeInput], {
    nullable: true
  })
  create?: OutflowCreateWithoutDocumentTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [OutflowCreateOrConnectWithoutDocumentTypeInput], {
    nullable: true
  })
  connectOrCreate?: OutflowCreateOrConnectWithoutDocumentTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => OutflowCreateManyDocumentTypeInputEnvelope, {
    nullable: true
  })
  createMany?: OutflowCreateManyDocumentTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OutflowWhereUniqueInput], {
    nullable: true
  })
  connect?: OutflowWhereUniqueInput[] | undefined;
}
