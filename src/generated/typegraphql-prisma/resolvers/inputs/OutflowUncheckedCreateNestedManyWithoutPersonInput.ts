import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowCreateManyPersonInputEnvelope } from "../inputs/OutflowCreateManyPersonInputEnvelope";
import { OutflowCreateOrConnectWithoutPersonInput } from "../inputs/OutflowCreateOrConnectWithoutPersonInput";
import { OutflowCreateWithoutPersonInput } from "../inputs/OutflowCreateWithoutPersonInput";
import { OutflowWhereUniqueInput } from "../inputs/OutflowWhereUniqueInput";

@TypeGraphQL.InputType("OutflowUncheckedCreateNestedManyWithoutPersonInput", {})
export class OutflowUncheckedCreateNestedManyWithoutPersonInput {
  @TypeGraphQL.Field(_type => [OutflowCreateWithoutPersonInput], {
    nullable: true
  })
  create?: OutflowCreateWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [OutflowCreateOrConnectWithoutPersonInput], {
    nullable: true
  })
  connectOrCreate?: OutflowCreateOrConnectWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => OutflowCreateManyPersonInputEnvelope, {
    nullable: true
  })
  createMany?: OutflowCreateManyPersonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OutflowWhereUniqueInput], {
    nullable: true
  })
  connect?: OutflowWhereUniqueInput[] | undefined;
}
