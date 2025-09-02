import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowCreateManyJobInputEnvelope } from "../inputs/OutflowCreateManyJobInputEnvelope";
import { OutflowCreateOrConnectWithoutJobInput } from "../inputs/OutflowCreateOrConnectWithoutJobInput";
import { OutflowCreateWithoutJobInput } from "../inputs/OutflowCreateWithoutJobInput";
import { OutflowWhereUniqueInput } from "../inputs/OutflowWhereUniqueInput";

@TypeGraphQL.InputType("OutflowCreateNestedManyWithoutJobInput", {})
export class OutflowCreateNestedManyWithoutJobInput {
  @TypeGraphQL.Field(_type => [OutflowCreateWithoutJobInput], {
    nullable: true
  })
  create?: OutflowCreateWithoutJobInput[] | undefined;

  @TypeGraphQL.Field(_type => [OutflowCreateOrConnectWithoutJobInput], {
    nullable: true
  })
  connectOrCreate?: OutflowCreateOrConnectWithoutJobInput[] | undefined;

  @TypeGraphQL.Field(_type => OutflowCreateManyJobInputEnvelope, {
    nullable: true
  })
  createMany?: OutflowCreateManyJobInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OutflowWhereUniqueInput], {
    nullable: true
  })
  connect?: OutflowWhereUniqueInput[] | undefined;
}
